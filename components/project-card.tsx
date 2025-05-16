import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col bg-slate-800/50 border-slate-700 backdrop-blur group transition-all hover:border-amber-500/20 overflow-hidden">
      
      <CardHeader>
        <CardTitle className="text-slate-300 group-hover:text-amber-400 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-slate-400">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-slate-700 text-slate-300 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/30 group-hover:border-amber-500/30"
          asChild
          
        >
          <Link href={link} target="_blank" className="flex items-center justify-center">
            查看项目
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
