import { NextRequest } from 'next/server'
import { searchEmployees } from '@/lib/search/ranking'
import { parseQuery } from '@/lib/search/parser'
import { employees } from '@/lib/data/employees'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') || searchParams.get('query') || ''
  const topK = Number(searchParams.get('topK') ?? '10')

  const parsed = parseQuery(q)
  const matches = searchEmployees(q, employees, parsed).slice(0, topK)

  return Response.json({
    query: q,
    parsed,
    results: matches,
  })
}
