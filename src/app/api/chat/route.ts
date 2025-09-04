import { type NextRequest } from 'next/server'
import { parseQuery } from '@/lib/search/parser'
import { employees } from '@/lib/data/employees'
import { searchEmployees } from '@/lib/search/ranking'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

type Message = { role: 'user' | 'assistant'; content: string }

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const messages: Message[] | undefined = body?.messages
  const query: string | undefined = body?.query

  const lastUser = query ?? messages?.slice().reverse().find((m) => m.role === 'user')?.content ?? ''
  const parsed = parseQuery(lastUser)
  const matches = searchEmployees(lastUser, employees, parsed).slice(0, 6)
  
  let answer;
  if (process.env.OPENAI_API_KEY) {
    try {
      const context = matches
        .map(
          (m, i) =>
            `${i + 1}. ${m.employee.name} — ${m.employee.experience_years} yrs, availability: ${m.employee.availability}
Skills: ${m.employee.skills.join(', ')}
Projects: ${m.employee.projects.join(', ')}
Why: ${m.reasons.join('; ')}`
        )
        .join('\n\n')

      const { text } = await generateText({
        model: openai('gpt-4o'),
        system:
          'You are a concise, professional HR assistant. Tailor recommendations to the user’s request. Be factual and avoid exaggeration. End with an offer to provide more details or check availability.',
        prompt: `User query: "${lastUser}"
Here are the top candidates from our search:
${context}

Write a clear, helpful paragraph recommending 2-4 candidates and briefly stating why they fit.`,
      })
    answer = text
    } catch {
      // fall back silently
    }
  }

  return Response.json({
    answer,
    results: matches,
  })
}
