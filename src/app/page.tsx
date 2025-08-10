"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Brain,
  SendHorizonal,
  Sparkles,
  User,
  Search,
  Filter,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import SplashScreen from '@/components/splash-screen'

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type Employee = {
  id: number;
  name: string;
  skills: string[];
  experience_years: number;
  projects: string[];
  availability: string;
};

type Match = {
  employee: Employee;
  score: number;
  matchedSkills: string[];
  matchedDomains: string[];
  reasons: string[];
};

type ChatResponse = {
  answer: string;
  results: Match[];
};

const samplePrompts = [
  "Find Python developers with 3+ years experience",
  "Who has worked on healthcare projects?",
  "Suggest people for a React Native project",
  "Find developers who know both AWS and Docker",
  "I need someone experienced with machine learning for a healthcare project",
];

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hi! I'm your HR Resource Assistant. Ask me to find people by skills, experience, projects, or availability. Try one of the suggestions below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Match[]>([]);
  const [showSplash, setShowSplash] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = async (q?: string) => {
    const query = (q ?? input).trim();
    if (!query) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: query,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data: ChatResponse = await res.json();
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.answer,
      };
      setMessages((m) => [...m, assistantMsg]);
      setResults(data.results);
    } catch (e) {
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, I couldn't process that request right now. Please try again, or refine your query with specific skills and experience.",
      };
      setMessages((m) => [...m, assistantMsg]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, results, loading]);

  const envHint = useMemo(
    () =>
      typeof window !== "undefined"
        ? "" 
        : "",
    []
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-600 to-black">
      {showSplash && (
        <SplashScreen
          durationMs={120000}
          onDismiss={() => setShowSplash(false)}
        />
      )}
      <main className="mx-auto max-w-full px-4 py-6 md:py-10">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-white">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white">
                HRIzon
              </h1>
              <p className="text-sm text-gray-400">
                Find the right people by skills, projects, and availability
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4 text-gray-100" />
            <span className="text-gray-300">
              Semantic search with smart ranking. Optional AI generation when
              configured.
            </span>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          {/* Chat */}
          <Card className="flex h-[80vh] flex-col border-none bg-white/10 backdrop-blur">
            <CardHeader className="py-2">
              <CardTitle className="text-gray-400">Chat</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
              <ScrollArea className="h-full pr-4">
                <div className="space-y-4">
                  {/* Suggestions */}
                  <div className="flex flex-wrap gap-2">
                    {samplePrompts.map((p) => (
                      <Button
                        key={p}
                        type="button"
                        size="sm"
                        variant="secondary"
                        className="bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
                        onClick={() => handleSend(p)}
                      >
                        <Search className="mr-2 h-4 w-4" />
                        {p}
                      </Button>
                    ))}
                  </div>

                  {/* Messages */}
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={cn(
                        "flex items-start gap-3",
                        m.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {m.role === "assistant" && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gray-800 text-white">
                            AI
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                          m.role === "user"
                            ? "bg-emerald-50 text-emerald-900 backdrop-blur "
                            : "text-neutral-100 bg-black/30 backdrop-blur"
                        )}
                      >
                        {m.content}
                      </div>
                      {m.role === "user" && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-neutral-200">
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {loading && (
                    <div className="flex items-center gap-2 text-sm animate-pulse text-gray-300">
                      <Sparkles className="h-4 w-4 animate-pulse   text-gray-200" />
                      Finding the best matches...
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form
                className="flex w-full items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="text-gray-300"
                  placeholder="Ask for skills, experience, projects..."
                />
                <Button type="submit" disabled={loading}>
                  <SendHorizonal className=" h-4 w-4 -rotate-45" />
                </Button>
              </form>
            </CardFooter>
          </Card>

          {/* Results */}
          <Card className="h-[80vh] border-none bg-white/10 backdrop-blur">
            <CardHeader className="py-2">
              <CardTitle className="flex items-center gap-2 text-gray-200">
                <Filter className="h-4 w-4 text-white" />
                Top Matches
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-4rem)] overflow-hidden">
              <ScrollArea className="h-full pr-4">
                <div className="space-y-3">
                  {results.length === 0 && (
                    <div className="text-sm text-gray-300">
                      Matched candidates will appear here after a search.
                    </div>
                  )}
                  {results.map((m) => (
                    <EmployeeCard key={m.employee.id} match={m} />
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function EmployeeCard({ match }: { match?: Match }) {
  const data = match ?? {
    employee: {
      id: 0,
      name: "Sachin Patidar",
      skills: ["React Js", "Node js"],
      experience_years: 2,
      projects: ["Project 1"],
      availability: "available",
    },
    score: 0.5,
    matchedSkills: ["Skill A"],
    matchedDomains: [],
    reasons: ["Sample reason"],
  };

  return (
    <Card className=" bg-black/30 backdrop-blur border-none shadow-md shadow-gray-600">
      <CardHeader className="py-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-gray-100">
            {data.employee.name}
          </CardTitle>
          <Badge
            variant="outline"
            className={cn(
              "text-xs",
              data.employee.availability === "available"
                ? "border-emerald-600 text-emerald-700"
                : "border-neutral-300 text-neutral-600"
            )}
          >
            {data.employee.availability}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pb-3">
        <div className="flex flex-wrap gap-1.5">
          {data.employee.skills.slice(0, 6).map((s) => (
            <Badge
              key={s}
              variant="secondary"
              className="bg-black/10 backdrop-blur text-gray-300"
            >
              {s}
            </Badge>
          ))}
          {data.employee.skills.length > 6 && (
            <Badge
              variant="secondary"
              className="bg-neutral-100 text-neutral-800"
            >
              +{data.employee.skills.length - 6} more
            </Badge>
          )}
        </div>
        <div className="text-xs text-gray-300">
          Experience: {data.employee.experience_years}{" "}
          {data.employee.experience_years === 1 ? "year" : "years"}
        </div>
        <div className="text-xs text-gray-300">
          Projects: {data.employee.projects.slice(0, 2).join(", ")}
          {data.employee.projects.length > 2 ? "…" : ""}
        </div>
        <div className="pt-1">
          <div className="text-xs font-medium text-gray-300">
            Why matched
          </div>
          <ul className="mt-1 list-inside list-disc text-xs text-gray-300">
            {data.reasons.slice(0, 3).map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
