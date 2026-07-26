import { ArrowRight, Bot, Code2, Palette, Play, WandSparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { aiTools } from '../data/aiTools'
import { WebsiteLogo } from './WebsiteLogo'

const quickItems = [
  { label: 'AI 对话', description: '思考、写作与研究', href: '#ai-tools', icon: Bot, color: '#7164f7', bg: 'from-[#eeeaff] to-[#f9f7ff]' },
  { label: 'AI 绘画', description: '让灵感拥有形状', href: '#ai-tools', icon: Palette, color: '#e85ba8', bg: 'from-[#ffeaf5] to-[#fff8fb]' },
  { label: 'AI 视频', description: '生成下一帧想象', href: '#ai-tools', icon: Play, color: '#31a8dc', bg: 'from-[#e8f8ff] to-[#f7fcff]' },
  { label: 'AI 编程', description: '与智能体共同开发', href: '#ai-tools', icon: Code2, color: '#20a675', bg: 'from-[#e9faf4] to-[#f7fdfa]' },
]

export function QuickPortal() {
  const featured = aiTools.filter((item) => item.featured).slice(0, 6)
  return (
    <section className="relative z-20 -mt-10 px-5 sm:px-8">
      <div className="mx-auto max-w-[1320px] rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-[0_28px_80px_rgba(27,34,84,.13)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0c1730]/90 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickItems.map(({ label, description, href, icon: Icon, color, bg }, index) => (
            <motion.a key={label} href={href} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className={`group flex items-center gap-4 rounded-[20px] bg-gradient-to-br ${bg} p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:from-white/[.07] dark:to-white/[.03]`}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm dark:bg-white/10" style={{ color }}><Icon size={22} /></span>
              <span className="min-w-0 flex-1"><strong className="block text-[15px] text-slate-900 dark:text-white">{label}</strong><small className="mt-1 block text-[11px] font-medium text-slate-500 dark:text-slate-400">{description}</small></span>
              <ArrowRight size={16} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet" />
            </motion.a>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 dark:border-white/7 md:flex-row md:items-center">
          <span className="flex shrink-0 items-center gap-2 text-[11px] font-extrabold tracking-[.16em] text-slate-400"><WandSparkles size={14} className="text-sakura" /> 本周精选</span>
          <div className="flex flex-1 flex-wrap gap-2">
            {featured.map((site) => <a key={site.id} href={site.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 py-1.5 pl-1.5 pr-3 text-xs font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-violet/20 hover:bg-violet/5 hover:text-violet dark:border-white/7 dark:bg-white/5 dark:text-slate-300"><WebsiteLogo website={site} size="xs" />{site.name}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}
