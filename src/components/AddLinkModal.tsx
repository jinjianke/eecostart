import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AddLinkModalProps {
  open: boolean
  categories: string[]
  onClose: () => void
  onSave: (name: string, url: string, category: string) => void
}

export function AddLinkModal({ open, categories, onClose, onSave }: AddLinkModalProps) {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState(categories[0] ?? '常用网站')
  const [newCategory, setNewCategory] = useState('')

  useEffect(() => {
    if (open) setCategory(categories[0] ?? '常用网站')
  }, [open, categories])

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!name.trim() || !url.trim()) return
    const normalized = /^https?:\/\//i.test(url.trim()) ? url.trim() : `https://${url.trim()}`
    onSave(name.trim(), normalized, category === '__new' ? (newCategory.trim() || '自定义分类') : category)
    setName(''); setUrl(''); setNewCategory(''); onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-[#050a1d]/70 p-4 backdrop-blur-md" onMouseDown={(e) => e.currentTarget === e.target && onClose()}>
          <motion.form onSubmit={submit} initial={{ opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} className="w-full max-w-md rounded-[28px] border border-white/60 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#0b1730]">
            <div className="mb-6 flex items-start justify-between"><div><div className="section-eyebrow mb-2">PERSONAL PORTAL</div><h2 className="text-xl font-extrabold text-slate-900 dark:text-white">添加自定义链接</h2><p className="mt-1 text-xs font-medium text-slate-400">数据仅保存在当前浏览器，兼容原站记录。</p></div><button type="button" onClick={onClose} className="icon-button"><X size={17} /></button></div>
            <div className="space-y-4">
              <label className="form-label">网站名称<input value={name} onChange={(e) => setName(e.target.value)} className="form-input" placeholder="例如：我的工作台" autoFocus /></label>
              <label className="form-label">官网链接<input value={url} onChange={(e) => setUrl(e.target.value)} className="form-input" placeholder="https://example.com" /></label>
              <label className="form-label">所属分类<select value={category} onChange={(e) => setCategory(e.target.value)} className="form-input">{categories.map((item) => <option key={item}>{item}</option>)}<option value="__new">新建分类...</option></select></label>
              {category === '__new' && <label className="form-label">新分类名称<input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="form-input" placeholder="输入分类名称" /></label>}
            </div>
            <div className="mt-6 flex gap-3"><button type="button" onClick={onClose} className="secondary-button flex-1 justify-center">取消</button><button type="submit" className="primary-button flex-1 justify-center">保存入口</button></div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
