import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-[-1]">
        <Image src="/images/city-night.png" alt="Background" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900"></div>
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Mr. 张
              </span>
            </h1>
            <p className="text-xl text-slate-400">金融科技专家 & 价值投资者</p>
          </div>
          <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            20年金融投资风控项目开发经验，秉承巴菲特投资风格，专注于有计划、有理由、有目标、有风控的价值投资理念。
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fadeIn">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black group" asChild>
              <Link href="#projects">
                查看我的项目
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-500/10" asChild>
              <Link href="#contact">联系我</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-amber-500/20 bg-blue-900/20 animate-floatSlow">
            <Image src="/b995d0909d8ca39536bf413bbead9824.jpg" alt="照片" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>

            {/* Tech circuit patterns */}
            <div className="absolute inset-0 opacity-30">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#64ffda" strokeWidth="0.5" />
                  <circle cx="10" cy="10" r="2" fill="#64ffda" />
                  <circle cx="90" cy="10" r="2" fill="#64ffda" />
                  <circle cx="90" cy="90" r="2" fill="#64ffda" />
                  <circle cx="10" cy="90" r="2" fill="#64ffda" />
                  <path
                    d="M30,10 L30,30 L50,30 L50,50 L70,50 L70,70 L90,70"
                    fill="none"
                    stroke="#64ffda"
                    strokeWidth="0.5"
                  />
                  <circle cx="30" cy="30" r="1.5" fill="#64ffda" />
                  <circle cx="50" cy="30" r="1.5" fill="#64ffda" />
                  <circle cx="50" cy="50" r="1.5" fill="#64ffda" />
                  <circle cx="70" cy="50" r="1.5" fill="#64ffda" />
                  <circle cx="70" cy="70" r="1.5" fill="#64ffda" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-sm text-amber-400">
              专业背景
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-slate-300">20年金融科技经验</h2>
          </div>
          <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
            我是一名有丰富经验的软件开发工程师，专注于金融投资风控项目的开发。20年来，我参与开发了多个金融科技项目，帮助投资者制定合理的投资计划，控制风险，实现稳定收益。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-800/50 p-4 backdrop-blur transition-transform hover:scale-105">
            <div className="text-4xl font-bold text-amber-400">20+</div>
            <p className="text-center text-sm text-slate-400">年软件开发经验</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-800/50 p-4 backdrop-blur transition-transform hover:scale-105">
            <div className="text-4xl font-bold text-amber-400">10x</div>
            <p className="text-center text-sm text-slate-400">投资收益</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-800/50 p-4 backdrop-blur transition-transform hover:scale-105">
            <div className="text-4xl font-bold text-amber-400">20+</div>
            <p className="text-center text-sm text-slate-400">年投资经验</p>
          </div>
        </div>
      </div>
    </section>
  )
}
