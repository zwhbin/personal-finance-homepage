import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { QuoteCard } from "@/components/quote-card"
import { ProjectCard } from "@/components/project-card"
import { FinanceLinks } from "@/components/finance-links"
import { ParticleBackground } from "@/components/particle-background"
import { DigitalNetwork } from "@/components/digital-network"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-amber-400">Mr.张</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">金融科技专家</span>
          </div>
          <nav className="hidden md:flex md:gap-6">
            <Link href="#about" className="text-sm font-medium text-slate-400 hover:text-amber-400">
              关于我
            </Link>
            <Link href="#philosophy" className="text-sm font-medium text-slate-400 hover:text-amber-400">
              投资理念
            </Link>
            <Link href="#projects" className="text-sm font-medium text-slate-400 hover:text-amber-400">
              项目
            </Link>
            <Link href="#resources" className="text-sm font-medium text-slate-400 hover:text-amber-400">
              资源
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400" asChild>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400" asChild>
              <Link href="mailto:zwhbin@163.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 relative">
        {/* 全局动态背景 */}
        <ParticleBackground />

        <HeroSection />

        <section id="philosophy" className="container py-12 md:py-24 lg:py-32 relative">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              投资理念
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-400 sm:text-lg sm:leading-7">
              二十年的投资经验让我深信，成功的投资需要计划、理由、目标和风险控制。
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <QuoteCard
              quote="投资不能听别人的无计划的建议，每次投资都要有一定的理由、目标与风险控制。"
              author="个人投资准则"
            />
            <QuoteCard quote="在别人恐惧时贪婪，在别人贪婪时恐惧。" author="沃伦·巴菲特" />
            <QuoteCard
              quote="投资的成功不取决于你知道什么，而取决于你能否在别人都不理性时保持理性。"
              author="本杰明·格雷厄姆"
            />
            <QuoteCard quote="价值投资不是一种策略，而是一种思维方式。" author="查理·芒格" />
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 z-[-1]"></div>
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                我的项目
              </h2>
              <p className="max-w-[85%] leading-normal text-slate-400 sm:text-lg sm:leading-7">
                二十年来，我参与开发了多个金融投资风控项目，以下是其中的代表作。
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <ProjectCard
                title="个人证券投资管理系统"
                description="帮助个人投资、跟踪投资表现，优化投资过程养成良好投资习惯的工具。"
                link="http://101.126.20.227:8880/"
              />
              <ProjectCard
                title="智能证券分析辅助工具"
                description="AI投资证券分析辅助工具，使用AI Agent通过财务指标、近期行情走势进行综合评价给出个券投资分析报告。"
                link="http://101.126.20.227:8501/"
              />
              <ProjectCard
                title="投资绩效管理系统"
                description="整合多源金融数据，为管理人管控投资过程、评价投资绩效、监控投资风险。"
                link="#"
              />
            </div>
          </div>
        </section>

        <section id="tech-visualization" className="py-16 md:py-24 relative overflow-hidden">
          <div className="container">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mb-6">
                  金融科技与投资的
                  <br />
                  完美结合
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  20年软件开发与金融投资风控经验，秉承巴菲特特有价值投资理念，为您带来专业的金融科技洞见。
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 text-3xl font-bold">20+</span>
                      <span className="text-slate-400">年</span>
                    </div>
                    <p className="text-slate-400">金融科技经验</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 text-3xl font-bold">10x</span>
                    </div>
                    <p className="text-slate-400">投资回报率</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Link href="#contact">联系我</Link>
                  </Button>
                  <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10">
                    <Link href="#philosophy">投资理念</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <DigitalNetwork />
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              金融资源
            </h2>
            <p className="max-w-[85%] leading-normal text-slate-400 sm:text-lg sm:leading-7">
              以下是我常用的金融网站和资源，希望对您也有所帮助。
            </p>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="investing" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800 text-slate-400">
                <TabsTrigger
                  value="investing"
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-amber-400"
                >
                  投资网站
                </TabsTrigger>
                <TabsTrigger
                  value="news"
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-amber-400"
                >
                  财经新闻
                </TabsTrigger>
                <TabsTrigger
                  value="learning"
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-amber-400"
                >
                  学习资源
                </TabsTrigger>
              </TabsList>
              <TabsContent value="investing" className="mt-6">
                <FinanceLinks
                  links={[
                    { name: "雪球", url: "https://xueqiu.com", description: "中国领先的投资社交网络" },
                    { name: "同花顺", url: "https://10jqka.com.cn", description: "专业的股票、基金投资平台" },
                    { name: "理财魔方", url: "https://licaimofang.com", description: "个人理财和资产配置服务" },
                    { name: "集思录", url: "https://jisilu.cn", description: "债券、可转债等固定收益投资社区" },
                  ]}
                />
              </TabsContent>
              <TabsContent value="news" className="mt-6">
                <FinanceLinks
                  links={[
                    { name: "财新网", url: "https://caixin.com", description: "财经新闻及深度分析" },
                    { name: "华尔街见闻", url: "https://wallstreetcn.com", description: "全球财经资讯" },
                    { name: "第一财经", url: "https://yicai.com", description: "中国权威财经媒体" },
                    { name: "彭博社", url: "https://bloomberg.com", description: "全球商业和金融新闻" },
                  ]}
                />
              </TabsContent>
              <TabsContent value="learning" className="mt-6">
                <FinanceLinks
                  links={[
                    {
                      name: "巴菲特文集",
                      url: "https://www.berkshirehathaway.com/letters/letters.html",
                      description: "巴菲特致股东的信",
                    },
                    { name: "投资学堂", url: "https://howbuy.com/college", description: "基础投资知识学习平台" },
                    { name: "MBA智库", url: "https://wiki.mbalib.com", description: "金融投资知识百科" },
                    {
                      name: "中国证券投资基金业协会",
                      url: "https://amac.org.cn",
                      description: "基金从业资格考试及行业规范",
                    },
                  ]}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 z-[-1]"></div>
          <div className="container">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                    联系我
                  </h2>
                  <p className="text-slate-400">如果您对金融投资有任何问题，或者想讨论潜在的合作机会，请随时联系我。</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-amber-400" />
                    <span className="text-slate-300">zwhbin@163.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-amber-400" />
                    <span className="text-slate-300">linkedin.com/in/yourprofile</span>
                  </div>
                </div>
              </div>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-100">发送消息</CardTitle>
                  <CardDescription className="text-slate-400">填写以下表单与我取得联系</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          姓名
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="张三"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          邮箱
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="example@mail.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        消息
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="请输入您的消息..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                      发送
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-slate-400 md:text-left">© 2025 张文海. 保留所有权利.  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">沪ICP备2025125854号-1</a></p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400" asChild>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
