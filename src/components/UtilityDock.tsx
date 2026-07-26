import { Check, ClipboardList, ImagePlus, Plus, Trash2, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import type { TodoItem } from '../types'

interface UtilityDockProps {
  todos: TodoItem[]
  setTodos: (todos: TodoItem[]) => void
  onBackground: (dataUrl: string) => void
}

export function UtilityDock({ todos, setTodos, onBackground }: UtilityDockProps) {
  const [todoOpen, setTodoOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const addTodo = () => {
    if (!draft.trim()) return
    setTodos([...todos, { text: draft.trim(), completed: false }])
    setDraft('')
  }

  const upload = (file?: File) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => typeof reader.result === 'string' && onBackground(reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <>
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2 sm:right-6">
        <button onClick={() => setTodoOpen((v) => !v)} className="dock-button" aria-label="打开 TODO"><ClipboardList size={18} /><span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-sakura px-1 text-[9px] font-black text-white">{todos.filter((item) => !item.completed).length}</span></button>
        <button onClick={() => fileRef.current?.click()} className="dock-button" aria-label="上传背景"><ImagePlus size={18} /></button>
        <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files?.[0])} />
      </div>

      <AnimatePresence>
        {todoOpen && (
          <motion.aside initial={{ opacity: 0, x: 30, y: 15 }} animate={{ opacity: 1, x: 0, y: 0 }} exit={{ opacity: 0, x: 20 }} className="fixed bottom-5 right-20 z-50 w-[min(360px,calc(100vw-6rem))] overflow-hidden rounded-[24px] border border-white/60 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1730]/95">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/7"><div><strong className="text-sm text-slate-900 dark:text-white">今日坐标</strong><p className="mt-0.5 text-[10px] font-semibold text-slate-400">保留自原站的本地 TODO</p></div><button onClick={() => setTodoOpen(false)} className="icon-button h-8 w-8"><X size={15} /></button></div>
            <div className="max-h-72 space-y-2 overflow-y-auto p-4">
              {todos.length === 0 && <div className="py-8 text-center text-xs font-medium text-slate-400">暂无任务，开始记录下一次探索吧。</div>}
              {todos.map((todo, index) => (
                <div key={`${todo.text}-${index}`} className="group flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-white/5">
                  <button onClick={() => setTodos(todos.map((item, i) => i === index ? { ...item, completed: !item.completed } : item))} className={`grid h-5 w-5 place-items-center rounded-md border ${todo.completed ? 'border-violet bg-violet text-white' : 'border-slate-300 text-transparent dark:border-white/20'}`}><Check size={12} /></button>
                  <span className={`flex-1 text-xs font-medium ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200'}`}>{todo.text}</span>
                  <button onClick={() => setTodos(todos.filter((_, i) => i !== index))} className="text-slate-300 opacity-0 transition hover:text-rose-500 group-hover:opacity-100"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 border-t border-slate-100 p-4 dark:border-white/7"><input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTodo()} placeholder="添加新任务..." className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs outline-none transition focus:border-violet dark:border-white/10 dark:bg-white/5 dark:text-white" /><button onClick={addTodo} className="grid h-10 w-10 place-items-center rounded-xl bg-violet text-white"><Plus size={16} /></button></div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
