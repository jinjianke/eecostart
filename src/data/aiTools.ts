import type { Website } from '../types'
import { aiCatalog as expandedAiCatalog } from './aiCatalog'

export const aiTools: Website[] = [
  { id: 'deepseek', name: 'DeepSeek', url: 'https://chat.deepseek.com', description: '擅长深度推理、中文问答与代码任务的国产大模型助手。', tags: ['推理', '中文友好'], category: 'AI聊天', group: 'AI工具', region: '国内', featured: true, badge: '热门', icon: 'D', accent: '#4f7cff' },
  { id: 'qwen', name: '通义千问', url: 'https://www.qianwen.com', description: '覆盖搜索、写作、分析与多模态创作的全能 AI 助手。', tags: ['多模态', '办公'], category: 'AI聊天', group: 'AI工具', region: '国内', featured: true, icon: '千', accent: '#715cff' },
  { id: 'kimi', name: 'Kimi', url: 'https://www.kimi.com', description: '擅长长文本阅读、联网检索与资料整理的智能助手。', tags: ['长文本', '搜索'], category: 'AI聊天', group: 'AI工具', region: '国内', featured: true, icon: 'K', accent: '#171717' },
  { id: 'doubao', name: '豆包', url: 'https://www.doubao.com', description: '面向学习、创作、语音和日常效率场景的 AI 助手。', tags: ['创作', '语音'], category: 'AI聊天', group: 'AI工具', region: '国内', featured: true, icon: '豆', accent: '#596dff' },
  { id: 'chatglm', name: '智谱清言', url: 'https://chatglm.cn', description: '支持问答、文档、图像理解与智能体创建的国产平台。', tags: ['智能体', '多模态'], category: 'AI聊天', group: 'AI工具', region: '国内', icon: '智', accent: '#3472f6' },
  { id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com', description: '通用 AI 助手，可用于研究、创作、学习与复杂任务协作。', tags: ['通用', '多模态'], category: 'AI聊天', group: 'AI工具', region: '国外', featured: true, badge: '精选', icon: 'AI', accent: '#10a37f' },
  { id: 'claude', name: 'Claude', url: 'https://claude.ai', description: '擅长深度写作、分析、编程和长上下文任务。', tags: ['写作', '代码'], category: 'AI聊天', group: 'AI工具', region: '国外', featured: true, icon: 'C', accent: '#d97757' },
  { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com', description: 'Google 的多模态 AI 助手与研究协作入口。', tags: ['Google', '多模态'], category: 'AI聊天', group: 'AI工具', region: '国外', icon: '✦', accent: '#4f7df3' },
  { id: 'perplexity', name: 'Perplexity', url: 'https://www.perplexity.ai', description: '强调来源引用与信息发现的 AI 搜索和研究助手。', tags: ['AI搜索', '研究'], category: 'AI聊天', group: 'AI工具', region: '国外', icon: 'P', accent: '#1ea8a2' },

  { id: 'coze', name: '扣子 Coze', url: 'https://www.coze.cn', description: '无需复杂代码即可搭建、发布和运营 AI 智能体。', tags: ['智能体', '工作流'], category: 'AI智能体', group: 'AI工具', region: '国内', featured: true, icon: '扣', accent: '#5068ff' },
  { id: 'dify', name: 'Dify', url: 'https://dify.ai', description: '面向生成式 AI 应用的开源开发与智能体编排平台。', tags: ['开源', '工作流'], category: 'AI智能体', group: 'AI工具', region: '全球', icon: 'D', accent: '#6257ff' },
  { id: 'ima', name: 'ima 知识库', url: 'https://ima.qq.com', description: '连接个人知识库、阅读资料与智能问答的学习工作台。', tags: ['知识库', '阅读'], category: 'AI智能体', group: 'AI工具', region: '国内', icon: 'i', accent: '#356ff6' },
  { id: 'poe', name: 'Poe', url: 'https://poe.com', description: '聚合多种模型与用户创建机器人的 AI 对话平台。', tags: ['多模型', 'Bot'], category: 'AI智能体', group: 'AI工具', region: '国外', icon: 'P', accent: '#5b46e8' },

  { id: 'bibigpt', name: 'BibiGPT', url: 'https://bibigpt.co', description: '快速总结视频、播客和网页内容，提炼重点与时间线。', tags: ['总结', '音视频'], category: 'AI写作', group: 'AI工具', region: '国内', icon: 'B', accent: '#ff5c8a' },
  { id: 'mita', name: '秘塔写作猫', url: 'https://xiezuocat.com', description: '面向中文写作的校对、改写、续写与内容优化工具。', tags: ['中文写作', '校对'], category: 'AI写作', group: 'AI工具', region: '国内', icon: '猫', accent: '#7656ee' },
  { id: 'copyai', name: 'Copy.ai', url: 'https://www.copy.ai', description: '用于营销文案、销售内容和工作流自动化的写作平台。', tags: ['营销', '文案'], category: 'AI写作', group: 'AI工具', region: '国外', icon: 'C', accent: '#ef476f' },
  { id: 'grammarly', name: 'Grammarly', url: 'https://www.grammarly.com', description: '提供英文语法检查、改写、语气调整与写作建议。', tags: ['英文', '润色'], category: 'AI写作', group: 'AI工具', region: '国外', icon: 'G', accent: '#15a68f' },

  { id: 'codex', name: 'Codex', url: 'https://openai.com/codex/', description: '面向真实软件工程任务的云端编码智能体。', tags: ['Agent', '工程'], category: 'AI编程', group: 'AI工具', region: '国外', featured: true, badge: 'NEW', icon: '⌘', accent: '#10a37f' },
  { id: 'claude-code', name: 'Claude Code', url: 'https://www.anthropic.com/claude-code', description: '在终端中理解代码库并执行开发任务的编程助手。', tags: ['终端', 'Agent'], category: 'AI编程', group: 'AI工具', region: '国外', icon: 'C', accent: '#d97757' },
  { id: 'cursor', name: 'Cursor', url: 'https://www.cursor.com', description: '以 AI 为核心交互打造的现代代码编辑器。', tags: ['编辑器', '补全'], category: 'AI编程', group: 'AI工具', region: '国外', featured: true, icon: 'C', accent: '#151515' },
  { id: 'copilot', name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: '集成于编辑器与 GitHub 工作流的 AI 编程伙伴。', tags: ['GitHub', '补全'], category: 'AI编程', group: 'AI工具', region: '国外', icon: 'GH', accent: '#6639ba' },
  { id: 'trae', name: 'TRAE', url: 'https://www.trae.ai', description: '提供代码补全、对话和智能体开发模式的 AI IDE。', tags: ['AI IDE', 'Agent'], category: 'AI编程', group: 'AI工具', region: '全球', icon: 'T', accent: '#6d5dfc' },

  { id: 'figma-ai', name: 'Figma AI', url: 'https://www.figma.com/ai/', description: '在产品设计流程中辅助生成界面、文案与可编辑素材。', tags: ['UI设计', '协作'], category: 'AI设计', group: 'AI工具', region: '国外', icon: 'F', accent: '#a259ff' },
  { id: 'canva-ai', name: 'Canva AI', url: 'https://www.canva.com/ai-image-generator/', description: '将 AI 文案、图片与模板融入一体化视觉设计流程。', tags: ['模板', '海报'], category: 'AI设计', group: 'AI工具', region: '国外', icon: 'C', accent: '#00b8d9' },
  { id: 'mastergo-ai', name: 'MasterGo AI', url: 'https://mastergo.com/ai', description: '面向中文团队的界面生成、设计协作和原型工具。', tags: ['UI', '国产'], category: 'AI设计', group: 'AI工具', region: '国内', icon: 'M', accent: '#6b4eff' },
  { id: 'lovart', name: 'Lovart', url: 'https://www.lovart.ai', description: '以对话驱动创意概念、品牌视觉与设计任务的智能体。', tags: ['设计智能体', '品牌'], category: 'AI设计', group: 'AI工具', region: '全球', icon: 'L', accent: '#ff5678' },

  { id: 'midjourney', name: 'Midjourney', url: 'https://www.midjourney.com', description: '高质量艺术图像与概念视觉生成平台。', tags: ['艺术', '设计'], category: 'AI绘画', group: 'AI工具', region: '国外', featured: true, icon: 'M', accent: '#111827' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', url: 'https://stability.ai', description: '拥有丰富开源生态与可控工作流的图像生成模型。', tags: ['开源生态', '可控'], category: 'AI绘画', group: 'AI工具', region: '全球', icon: 'SD', accent: '#7c3aed' },
  { id: 'jimeng', name: '即梦 AI', url: 'https://jimeng.jianying.com', description: '面向中文创作者的 AI 图片与视频创作平台。', tags: ['中文', '创作'], category: 'AI绘画', group: 'AI工具', region: '国内', featured: true, icon: '梦', accent: '#7b61ff' },
  { id: 'kling-image', name: '可灵 AI', url: 'https://klingai.kuaishou.com', description: '支持图片与视频生成的国产创意引擎。', tags: ['图像', '视频'], category: 'AI绘画', group: 'AI工具', region: '国内', icon: '可', accent: '#2d6df6' },
  { id: 'ideogram', name: 'Ideogram', url: 'https://ideogram.ai', description: '擅长文字排版、海报与品牌视觉的图像生成工具。', tags: ['文字生成', '海报'], category: 'AI绘画', group: 'AI工具', region: '国外', icon: 'I', accent: '#e9557c' },

  { id: 'tripo', name: 'Tripo AI', url: 'https://www.tripo3d.ai', description: '通过文字或图片快速生成可编辑的 3D 模型。', tags: ['文生3D', '模型'], category: 'AI 3D', group: 'AI工具', region: '全球', icon: '3D', accent: '#4d6aff' },
  { id: 'meshy', name: 'Meshy', url: 'https://www.meshy.ai', description: '提供文本、图片转 3D 与贴图生成的创作工作台。', tags: ['3D生成', '贴图'], category: 'AI 3D', group: 'AI工具', region: '国外', icon: 'M', accent: '#8047f5' },
  { id: 'spline-ai', name: 'Spline AI', url: 'https://spline.design/ai', description: '在浏览器中通过 AI 创建和编辑交互式 3D 场景。', tags: ['Web 3D', '交互'], category: 'AI 3D', group: 'AI工具', region: '国外', icon: 'S', accent: '#f257ce' },
  { id: 'luma-genie', name: 'Luma Genie', url: 'https://lumalabs.ai/genie', description: '从自然语言生成 3D 物体概念与模型资产。', tags: ['3D资产', '创意'], category: 'AI 3D', group: 'AI工具', region: '国外', icon: 'L', accent: '#2359f5' },

  { id: 'promptperfect', name: 'PromptPerfect', url: 'https://promptperfect.jina.ai', description: '针对不同大模型优化提示词结构与表达。', tags: ['提示词优化', '多模型'], category: 'AI提示词', group: 'AI工具', region: '全球', icon: 'P', accent: '#6958f5' },
  { id: 'flowgpt', name: 'FlowGPT', url: 'https://flowgpt.com', description: '发现、分享与测试各类 AI 提示词和智能体。', tags: ['提示词社区', '发现'], category: 'AI提示词', group: 'AI工具', region: '国外', icon: 'F', accent: '#ff7b36' },
  { id: 'learningprompt', name: 'Learning Prompt', url: 'https://learningprompt.wiki', description: '面向中文用户的系统化提示词学习与实践教程。', tags: ['中文教程', '入门'], category: 'AI提示词', group: 'AI工具', region: '国内', icon: 'LP', accent: '#1f9d8c' },
  { id: 'prompthero', name: 'PromptHero', url: 'https://prompthero.com', description: '搜索图像与文本模型提示词，获取创作灵感。', tags: ['图像提示词', '社区'], category: 'AI提示词', group: 'AI工具', region: '国外', icon: 'PH', accent: '#ec4899' },

  { id: 'notion-ai', name: 'Notion AI', url: 'https://www.notion.so/product/ai', description: '在知识库中完成写作、总结与项目协作。', tags: ['知识库', '协作'], category: 'AI办公', group: 'AI工具', region: '国外', icon: 'N', accent: '#111111' },
  { id: 'feishu-ai', name: '飞书 AI', url: 'https://www.feishu.cn/product/ai', description: '融合文档、会议与团队协作的智能办公套件。', tags: ['协作', '会议'], category: 'AI办公', group: 'AI工具', region: '国内', icon: '飞', accent: '#3370ff' },
  { id: 'wps-ai', name: 'WPS AI', url: 'https://ai.wps.cn', description: '覆盖文字、演示、表格与 PDF 场景的国产办公助手。', tags: ['文档', 'PPT'], category: 'AI办公', group: 'AI工具', region: '国内', icon: 'W', accent: '#e74646' },
  { id: 'gamma', name: 'Gamma', url: 'https://gamma.app', description: '通过提示词快速生成演示文稿、文档和网页。', tags: ['PPT', '演示'], category: 'AI办公', group: 'AI工具', region: '国外', icon: 'G', accent: '#7a5cff' },

  { id: 'huggingface', name: 'Hugging Face', url: 'https://huggingface.co', description: '发现模型、数据集、应用 Demo 与开源 AI 社区项目。', tags: ['模型社区', '开源'], category: 'AI模型', group: 'AI工具', region: '全球', icon: 'HF', accent: '#e9a400' },
  { id: 'modelscope', name: '魔搭 ModelScope', url: 'https://www.modelscope.cn', description: '面向国内开发者的模型、数据集和应用体验社区。', tags: ['模型社区', '国产'], category: 'AI模型', group: 'AI工具', region: '国内', icon: '魔', accent: '#6554e8' },
  { id: 'civitai', name: 'Civitai', url: 'https://civitai.com', description: '汇集生成式图像模型、工作流与社区作品的平台。', tags: ['图像模型', '社区'], category: 'AI模型', group: 'AI工具', region: '国外', icon: 'C', accent: '#2563eb' },
  { id: 'ollama', name: 'Ollama', url: 'https://ollama.com', description: '在本地运行和管理开源大语言模型的轻量工具。', tags: ['本地模型', '开源'], category: 'AI模型', group: 'AI工具', region: '全球', icon: 'O', accent: '#151515' },

  { id: 'runway', name: 'Runway', url: 'https://runwayml.com', description: '面向专业创作者的生成式视频与视觉特效工作台。', tags: ['视频生成', '专业'], category: 'AI视频', group: 'AI工具', region: '国外', featured: true, icon: 'R', accent: '#111111' },
  { id: 'pika', name: 'Pika', url: 'https://pika.art', description: '快速将文字、图片转化为富有创意的短视频。', tags: ['短视频', '特效'], category: 'AI视频', group: 'AI工具', region: '国外', icon: 'P', accent: '#f25ab0' },
  { id: 'kling-video', name: '可灵视频', url: 'https://klingai.kuaishou.com', description: '擅长真实运动与电影感镜头的国产 AI 视频工具。', tags: ['国产', '电影感'], category: 'AI视频', group: 'AI工具', region: '国内', featured: true, icon: 'K', accent: '#3278ff' },
  { id: 'hailuo', name: '海螺 AI', url: 'https://hailuoai.com', description: '提供文本或图片生成视频及创意特效能力。', tags: ['视频生成', '中文'], category: 'AI视频', group: 'AI工具', region: '国内', icon: '海', accent: '#ef544f' },
  { id: 'suno', name: 'Suno', url: 'https://suno.com', description: '使用自然语言快速创作完整歌曲与音乐片段。', tags: ['音乐生成', '歌曲'], category: 'AI视频', group: 'AI工具', region: '国外', icon: 'S', accent: '#ff4f75' },

  { id: 'napkin', name: 'Napkin AI', url: 'https://www.napkin.ai', description: '把文字内容转换为图解、流程图和演示视觉。', tags: ['可视化', '图解'], category: 'AI效率', group: 'AI工具', region: '国外', icon: 'N', accent: '#f06445' },
  { id: 'otter', name: 'Otter.ai', url: 'https://otter.ai', description: '提供会议录音、实时转写、摘要与协作记录。', tags: ['会议', '转写'], category: 'AI效率', group: 'AI工具', region: '国外', icon: 'O', accent: '#536dfe' },
  { id: 'tldv', name: 'tl;dv', url: 'https://tldv.io', description: '自动记录、总结和检索在线会议的重要内容。', tags: ['会议纪要', '团队'], category: 'AI效率', group: 'AI工具', region: '国外', icon: 'tl', accent: '#8b5cf6' },
  { id: 'removebg', name: 'remove.bg', url: 'https://www.remove.bg', description: '自动识别主体并快速移除图片背景。', tags: ['抠图', '图片处理'], category: 'AI效率', group: 'AI工具', region: '全球', icon: 'RB', accent: '#405de6' },
  ...expandedAiCatalog,
]
