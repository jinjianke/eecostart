import type { LucideIcon } from 'lucide-react'
import { ArrowLeft, ArrowRight, Bot, Braces, CheckSquare, Database, ExternalLink, Github, Layers3, Moon, Palette, Search, Sparkles, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { aiTools } from '../data/aiTools'
import { aiDevelopment, developerTools, learningResources, classicWebsites } from '../data/websites'
import { sections } from '../data/categories'
import { searchEngines } from '../data/searchEngines'

interface Feature {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

const features: Feature[] = [
  { title: '智能搜索', description: '在百度、Bing、Google、DuckDuckGo 等国内外搜索引擎间快速切换。', icon: Search, color: '#6557f5' },
  { title: 'AI 工具矩阵', description: '按对话、智能体、创作、编程、模型和效率等场景整理优质 AI 产品。', icon: Bot, color: '#2f79ef' },
  { title: '原站数据兼容', description: '继续读取原有自定义链接、搜索历史、TODO、主题与背景设置。', icon: Database, color: '#12a693' },
  { title: '个性化空间', description: '支持明暗主题、自定义背景和本地网址收藏，打造熟悉的个人入口。', icon: Palette, color: '#ed5e9d' },
  { title: '效率工具', description: '保留搜索历史、待办事项、时间、天气与诗句等经典实用模块。', icon: CheckSquare, color: '#f29b38' },
  { title: '跨端体验', description: '为桌面、平板与手机重新设计布局、触控区域和信息层级。', icon: Layers3, color: '#8b5cf6' },
]

const stack = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Lucide', 'LocalStorage']
const resourceWebsites = [...aiTools, ...aiDevelopment, ...developerTools, ...learningResources, ...classicWebsites]
const platformStats = [
  [`${resourceWebsites.length}+`, '导航资源'],
  [`${aiTools.length}+`, 'AI 工具'],
  [`${sections.length + 1}`, '资源体系'],
  [`${searchEngines.length}`, '搜索引擎'],
]


export function AboutPage() {
  return (
    <main className="pt-24">
      <section className="subpage-hero">
        <div className="particle-field absolute inset-0 opacity-45" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan/15 blur-[100px]" />
        <div className="absolute -right-16 top-4 h-80 w-80 rounded-full bg-sakura/15 blur-[110px]" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <a href="/" className="mb-7 inline-flex items-center gap-2 text-xs font-bold text-white/50 transition hover:text-white"><ArrowLeft size={15} /> 返回导航首页</a>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-4 py-2 text-[10px] font-black tracking-[.2em] text-[#c8c3ff]"><Sparkles size={13} /> ABOUT EECO</div>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">从熟悉的网址导航<br /><span className="bg-gradient-to-r from-[#d8d4ff] via-white to-[#8de9ff] bg-clip-text text-transparent">进化为 AI 时代星港</span></h1>
            <p className="mt-6 max-w-2xl text-sm font-medium leading-8 text-white/55 sm:text-base">EECO导航是一个面向中国用户的综合资源入口，连接 AI 工具、开发资源、学习内容与国内外优秀网站。我们保留原站清爽、无广告、快速直达的初心，同时用更现代的技术和视觉重新构建体验。</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="/#classic" className="primary-button">开始探索 <ArrowRight size={16} /></a><a href="/changelog.html" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.07] px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[.12]">查看更新日志 <ExternalLink size={15} /></a></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-violet/30 blur-[70px]" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[.07] p-7 shadow-[0_30px_100px_rgba(0,0,0,.3)] backdrop-blur-2xl">
              <div className="flex items-center justify-between"><span className="text-[10px] font-black tracking-[.22em] text-white/35">EECO / PLATFORM</span><Moon size={16} className="text-[#9d95ff]" /></div>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {platformStats.map(([value, label]) => <div key={label} className="rounded-2xl border border-white/8 bg-[#08142b]/70 p-5"><strong className="block text-2xl font-black text-white">{value}</strong><span className="mt-1 block text-[11px] font-semibold text-white/35">{label}</span></div>)}
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-cyan/15 bg-cyan/[.06] p-4"><span className="grid h-10 w-10 place-items-center rounded-xl p-1"><img src="/brand/eeco-mark.svg" alt="" className="h-full w-full object-contain" /></span><div><strong className="text-sm text-white">Explore · Evolve · Connect</strong><p className="mt-1 text-[11px] text-white/40">让优质工具更容易被发现</p></div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-white dark:bg-[#071129]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="section-eyebrow"><Sparkles size={13} /> WHAT WE KEEP</div>
          <h2 className="section-title">熟悉的能力，完整保留</h2>
          <p className="section-description">重构不是推倒重来。旧版高频能力继续存在，并在 React 架构下获得更清晰的交互与扩展空间。</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon, color }, index) => <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * .04 }} className="website-card p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: color }}><Icon size={21} /></span><h3 className="mt-5 text-lg font-extrabold text-slate-900 dark:text-white">{title}</h3><p className="mt-3 text-sm font-medium leading-7 text-slate-500 dark:text-slate-400">{description}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#f5f5ff] dark:bg-[#08142b]">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <article className="rounded-[30px] border border-slate-200/70 bg-white p-7 shadow-card dark:border-white/8 dark:bg-[#0b1730] sm:p-9">
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet/10 text-violet"><Braces size={21} /></span><div><div className="section-eyebrow mb-1">TECH STACK</div><h2 className="text-2xl font-black text-slate-950 dark:text-white">现代前端工程</h2></div></div>
            <p className="mt-6 text-sm font-medium leading-7 text-slate-500 dark:text-slate-400">旧版由原生 HTML、CSS、JavaScript 构建；v2 升级为组件化、类型安全且方便接入未来 API 的前端架构。</p>
            <div className="mt-6 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-xl border border-violet/10 bg-violet/[.06] px-3 py-2 text-xs font-bold text-violet dark:border-white/8 dark:bg-white/[.05] dark:text-[#c3bdff]">{item}</span>)}</div>
          </article>
          <article className="rounded-[30px] border border-slate-200/70 bg-white p-7 shadow-card dark:border-white/8 dark:bg-[#0b1730] sm:p-9">
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-sakura/10 text-sakura"><UserRound size={21} /></span><div><div className="section-eyebrow mb-1">CREATOR</div><h2 className="text-2xl font-black text-slate-950 dark:text-white">关于开发者</h2></div></div>
            <p className="mt-6 text-sm font-medium leading-7 text-slate-500 dark:text-slate-400"><strong className="text-slate-800 dark:text-white">EECOJJK</strong> 是一名热爱技术的开发者，专注前端开发与用户体验设计，持续创建简洁、实用且富有个性的互联网工具。</p>
            <div className="mt-6 flex flex-wrap gap-3"><a className="secondary-button" href="https://eecojjk.cn" target="_blank" rel="noreferrer">个人博客 <ExternalLink size={15} /></a><a className="secondary-button" href="https://github.com/jinjianke" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a></div>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-center dark:bg-[#071129] sm:px-8"><p className="text-xs font-bold tracking-[.18em] text-violet">OPEN · CLEAN · EVOLVING</p><h2 className="mx-auto mt-4 max-w-2xl text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">清晰布局、克制动效、玻璃质感与响应式体验</h2><p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-7 text-slate-500 dark:text-slate-400">© 2026 EECO导航，本项目采用 MIT License。未来将继续探索网站提交、收藏、排行、评分与开放接口能力。</p></section>
    </main>
  )
}
