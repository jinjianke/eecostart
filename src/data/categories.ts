import type { ResourceSection } from '../types'

export const sections: ResourceSection[] = [
  {
    id: 'ai-tools',
    eyebrow: 'AI TOOL MATRIX',
    title: 'AI 工具导航',
    description: '参考成熟 AI 导航的内容分类，重组为适合中国用户的工具矩阵；从对话、智能体到 3D、提示词与影音创作，一站完成发现与对比。',
    groups: ['热门AI应用', 'AI智能体', 'AI聊天', 'AI写作', 'AI编程', 'AI设计', 'AI绘画', 'AI 3D', 'AI提示词', 'AI办公', 'AI模型', 'AI视频', 'AI效率'],
  },
  { id: 'ai-dev', eyebrow: 'BUILD WITH INTELLIGENCE', title: 'AI 开发资源', description: '模型 API、开源生态与应用框架，连接下一代智能应用的开发底座。', groups: ['AI API', '开发平台'] },
  { id: 'dev-tools', eyebrow: 'DEVELOPER STACK', title: '开发工具导航', description: '为每一次编码、协作、交付与部署准备的可靠生产力工具链。', groups: ['代码编辑', '代码管理', '开发工具', '云服务'] },
  { id: 'learning', eyebrow: 'LEARNING CONSTELLATION', title: '学习资源', description: '从 Web 基础到 AI 工程，汇聚结构清晰、值得长期收藏的学习入口。', groups: ['编程学习', 'AI学习', '开发社区'] },
]
