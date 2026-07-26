import { ArrowLeft, ArrowRight, CalendarDays, Check, GitCommitHorizontal, History, Rocket, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { changelogEntries } from '../data/changelog'

export function ChangelogPage() {
  return (
    <main className="pt-24">
      <section className="subpage-hero min-h-[520px]">
        <div className="particle-field absolute inset-0 opacity-45" />
        <div className="absolute left-1/3 top-12 h-80 w-80 rounded-full bg-violet/20 blur-[120px]" />
        <div className="relative mx-auto max-w-[1100px] px-5 py-20 text-center sm:px-8 lg:py-28">
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} href="/" className="mx-auto mb-8 inline-flex items-center gap-2 text-xs font-bold text-white/50 transition hover:text-white"><ArrowLeft size={15} /> 返回导航首页</motion.a>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-4 py-2 text-[10px] font-black tracking-[.2em] text-[#c8c3ff]"><History size={13} /> CHANGELOG ARCHIVE</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 }} className="mt-6 text-balance text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">记录每一次进化<br /><span className="bg-gradient-to-r from-[#cfcaff] via-white to-[#8de9ff] bg-clip-text text-transparent">也保留来时的轨迹</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-8 text-white/55 sm:text-base">从 2026 年 1 月 10 日的第一版，到 2026 年 7 月 25 日完成 AI 时代重构。这里记录 EECO导航的功能、体验与内容变化。</motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }} className="mt-8 flex flex-wrap justify-center gap-3"><a href="#timeline" className="primary-button">查看时间线 <ArrowRight size={16} /></a><a href="/about.html" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.07] px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[.12]">了解 EECO <Sparkles size={15} /></a></motion.div>
        </div>
      </section>

      <section id="timeline" className="section-shell bg-[#f7f8fc] dark:bg-[#071129]">
        <div className="mx-auto max-w-[980px] px-5 sm:px-8">
          <div className="mb-12 text-center"><div className="section-eyebrow justify-center"><GitCommitHorizontal size={14} /> RELEASE TIMELINE</div><h2 className="section-title">版本时间线</h2><p className="section-description mx-auto">内容忠实保留自原更新日志，并加入本次 v2.0.0 重构记录。</p></div>
          <div className="relative before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-gradient-to-b before:from-violet before:via-violet/20 before:to-transparent sm:before:left-1/2">
            {changelogEntries.map((entry, index) => (
              <motion.article key={entry.version} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .4 }} className={`relative mb-8 pl-14 sm:grid sm:grid-cols-2 sm:gap-16 sm:pl-0 ${index % 2 ? '' : 'sm:[&>div]:col-start-1 sm:[&>div]:row-start-1 sm:[&>div]:text-right'}`}>
                <span className={`absolute left-1 top-7 z-10 grid h-9 w-9 place-items-center rounded-full border-4 border-[#f7f8fc] text-white shadow-[0_8px_24px_rgba(108,94,245,.35)] dark:border-[#071129] sm:left-1/2 sm:-translate-x-1/2 ${entry.current ? 'bg-gradient-to-br from-sakura to-violet' : 'bg-[#8790ad]'}`}>{entry.current ? <Rocket size={14} /> : <GitCommitHorizontal size={14} />}</span>
                <div className={`${index % 2 ? 'sm:col-start-2' : ''}`}>
                  <div className={`overflow-hidden rounded-[28px] border bg-white p-6 shadow-[0_20px_55px_rgba(37,46,105,.08)] dark:bg-[#0b1730] sm:p-7 ${entry.current ? 'border-violet/25 dark:border-violet/40' : 'border-slate-200/70 dark:border-white/8'}`}>
                    <div className={`flex flex-wrap items-center gap-2 ${index % 2 === 0 ? 'sm:justify-end' : ''}`}><span className="rounded-lg bg-violet px-2.5 py-1 text-[11px] font-black tracking-wider text-white">{entry.version}</span>{entry.current && <span className="rounded-lg bg-sakura/10 px-2.5 py-1 text-[10px] font-black text-sakura">CURRENT</span>}<span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400"><CalendarDays size={13} /> {entry.date}</span></div>
                    <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{entry.title}</h3>
                    <p className="mt-2 text-xs font-medium leading-6 text-slate-500 dark:text-slate-400">{entry.summary}</p>
                    <ul className={`mt-5 space-y-3 text-left ${index % 2 === 0 ? 'sm:ml-auto sm:max-w-[430px]' : ''}`}>{entry.items.map((item) => <li key={item} className="flex gap-2.5 text-[12px] font-medium leading-6 text-slate-600 dark:text-slate-300"><span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-violet/10 text-violet dark:bg-violet/15"><Check size={10} strokeWidth={3} /></span><span>{item}</span></li>)}</ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
