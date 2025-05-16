import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface QuoteCardProps {
  quote: string
  author: string
}

export function QuoteCard({ quote, author }: QuoteCardProps) {
  return (
    <Card className="overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur transition-all hover:shadow-md hover:shadow-amber-500/5 hover:border-amber-500/20">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <Quote className="h-8 w-8 text-amber-400 opacity-50" />
          <p className="text-lg font-medium leading-relaxed text-slate-300">{quote}</p>
          <p className="text-sm text-slate-400">— {author}</p>
        </div>
      </CardContent>
    </Card>
  )
}
