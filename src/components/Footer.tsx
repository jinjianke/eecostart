import { Github, Heart, History, Home, Info, Mail, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050d22] px-5 pb-8 pt-20 text-white sm:px-8">
      <div className="absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-violet/10 blur-[100px]" />
      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl p-1"><img src="/brand/eeco-mark.svg" alt="" className="h-full w-full object-contain" /></span><div><strong className="block text-lg">EECO导航</strong><span className="text-[10px] font-bold tracking-[.2em] text-white/35">EXPLORE · EVOLVE · CONNECT</span></div></div><p className="mt-5 text-sm font-medium leading-7 text-white/50">面向中国用户的 AI 时代综合资源入口。保持开放、克制与持续进化，让优质工具更容易被发现。</p></div>
          <div><h3 className="footer-title">探索空间</h3><div className="footer-links"><a href="/#classic">原站导航</a><a href="/#ai-tools">AI 工具</a><a href="/#ai-dev">AI 开发资源</a><a href="/#dev-tools">开发工具</a><a href="/#learning">学习资源</a></div></div>
          <div><h3 className="footer-title">关于 EECO</h3><div className="footer-links"><a href="/"><Home size={14} /> 导航首页</a><a href="/about.html"><Info size={14} /> 关于本站</a><a href="/changelog.html"><History size={14} /> 更新日志</a><a href="mailto:hello@eecojjk.cn"><Mail size={14} /> 联系我们</a><a href="https://github.com/jinjianke" target="_blank" rel="noreferrer"><Github size={14} /> 开源社区</a><a href="/#home"><Sparkles size={14} /> 返回星港</a></div></div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-[11px] font-semibold text-white/35 sm:flex-row"><span>© 2026 EECO导航 · MIT License</span><span className="flex items-center gap-1.5">Made with <Heart size={12} className="fill-sakura text-sakura" /> for explorers</span></div>
      </div>
    </footer>
  )
}
