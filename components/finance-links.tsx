import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FinanceLink {
  name: string
  url: string
  description: string
}

interface FinanceLinksProps {
  links: FinanceLink[]
}

export function FinanceLinks({ links }: FinanceLinksProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {links.map((link, index) => (
        <Card
          key={index}
          className="bg-slate-800/50 border-slate-700 backdrop-blur group transition-all hover:border-amber-500/20"
        >
          <CardHeader className="p-4">
            <CardTitle className="text-lg flex items-center text-slate-300">
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 flex items-center group-hover:text-amber-400 transition-colors"
              >
                {link.name}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </CardTitle>
            <CardDescription className="text-slate-400">{link.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
