import type { Website } from '../types'

const site = (id: string, name: string, url: string, description: string, tags: string[], category: string, group: Website['group'], icon: string, accent: string, extra: Partial<Website> = {}): Website => ({ id, name, url, description, tags, category, group, icon, accent, ...extra })

/** Screenshot-inspired AI API and model gateway directory. */
const aiApiPlatforms: Website[] = [
  site('kimi-api', 'Kimi API', 'https://platform.moonshot.cn', 'Moonshot AI 的模型 API 平台，提供 Kimi 系列模型与开发者服务。', ["国产","模型 API"], 'AI API', 'AI开发', 'K', '#4f46e5'),
  site('kimi-coding', 'Kimi For Coding', 'https://www.kimi.com/coding', '面向编程场景的 Kimi 开发入口，适合代码理解、生成与调试。', ["Coding","Agent"], 'AI API', 'AI开发', 'K', '#5b5ce2'),
  site('shengsuanyun', '胜算云', 'https://www.shengsuanyun.com', '面向开发者与企业的模型调用、算力和 AI 应用服务平台。', ["国产","云服务"], 'AI API', 'AI开发', '胜', '#4c7dff'),
  site('pateway-ai', 'PatewayAI', 'https://pateway.ai', '聚合 Claude、Codex、DeepSeek、Qwen 与 GLM 等模型的 API 网关。', ["聚合","中转"], 'AI API', 'AI开发', 'P', '#7c3aed'),
  site('volcengine-ark', '火山方舟', 'https://www.volcengine.com/product/ark', '火山引擎提供的企业级大模型服务平台，支持模型 API 与 Agent 开发。', ["国产","企业"], 'AI API', 'AI开发', '方', '#155eef'),
  site('byteplus-modelark', 'BytePlus', 'https://www.byteplus.com/en/product/modelark', 'BytePlus 面向全球开发者提供的模型服务与生成式 AI API 平台。', ["国际","MaaS"], 'AI API', 'AI开发', 'BP', '#1e64f0'),
  site('doubao-seed', 'DoubaoSeed', 'https://seed.bytedance.com', '字节跳动 Seed 团队的大模型与多模态能力入口。', ["国产","多模态"], 'AI API', 'AI开发', 'S', '#111827'),
  site('ccshub', 'CCSHub', 'https://ccshub.org', '面向开发者的模型 API 聚合与访问服务。', ["聚合","API"], 'AI API', 'AI开发', 'CC', '#334155'),
  site('subrouter', 'SubRouter', 'https://subrouter.ai', '提供多模型路由与统一 API 接口的开发者平台。', ["聚合","路由"], 'AI API', 'AI开发', 'SR', '#475569'),
  site('unity2-ai', 'Unity2.ai', 'https://unity2.ai', 'AI 模型与应用的统一接入平台。', ["聚合","API"], 'AI API', 'AI开发', 'U2', '#0ea5e9'),
  site('qiniu-ai', '七牛云', 'https://www.qiniu.com/products/ai', '七牛云提供的模型推理、音视频与多模态 AI 开发服务。', ["国产","云服务"], 'AI API', 'AI开发', '七', '#1683ff'),
  site('fenno-ai', 'FennoAI', 'https://fenno.ai', '面向代码仓库的 AI 编程 Agent 与模型网关服务。', ["Coding","聚合"], 'AI API', 'AI开发', 'F', '#f97316'),
  site('zeta-api', 'ZetaAPI', 'https://zetaapi.com', '提供多模型统一接入与 OpenAI 兼容接口的开发者平台。', ["聚合","API"], 'AI API', 'AI开发', 'Z', '#64748b'),
  site('teamorouter', 'Teamorouter', 'https://teamorouter.com', '为团队提供多模型路由、统一密钥与用量管理。', ["聚合","团队"], 'AI API', 'AI开发', 'T', '#0f766e'),
  site('amux-ai', 'Amux', 'https://amux.ai', '面向 AI 应用与开发工具的模型聚合和 API 接入服务。', ["聚合","API"], 'AI API', 'AI开发', 'A', '#06b6d4'),
  site('code0', 'Code0', 'https://code0.ai', '为 AI 编程工具提供模型接入与开发者 API 服务。', ["Coding","API"], 'AI API', 'AI开发', '0', '#2563eb'),
  site('nekocode', 'NekoCode', 'https://nekocode.xyz', '面向开发者的 AI 编程模型接入与工具服务。', ["Coding","中转"], 'AI API', 'AI开发', 'N', '#ec4899'),
  site('azure-openai', 'Azure OpenAI', 'https://azure.microsoft.com/products/ai-services/openai-service', '微软 Azure 提供的企业级 OpenAI 模型与安全开发服务。', ["企业","模型 API"], 'AI API', 'AI开发', 'AZ', '#0078d4'),
  site('zhipu-glm', '智谱 GLM', 'https://open.bigmodel.cn', '智谱开放平台，提供 GLM 系列模型、Embedding 与 Agent API。', ["国产","模型 API"], 'AI API', 'AI开发', 'GLM', '#315efb'),
  site('zhipu-glm-en', 'Zhipu GLM en', 'https://open.bigmodel.cn', '智谱 GLM 国际开发者入口与英文模型服务。', ["国际","模型 API"], 'AI API', 'AI开发', 'GLM', '#315efb'),
  site('baidu-qianfan', '百度千帆', 'https://cloud.baidu.com/product-s/qianfan', '百度智能云的大模型平台，提供模型调用、评测与应用开发能力。', ["国产","MaaS"], 'AI API', 'AI开发', '千', '#315efb'),
  site('aliyun-bailian', '阿里云百炼', 'https://bailian.console.aliyun.com', '阿里云大模型服务平台，覆盖模型调用、微调与应用编排。', ["国产","MaaS"], 'AI API', 'AI开发', '百', '#ff6a00'),
  site('stepfun', 'StepFun', 'https://platform.stepfun.com', '阶跃星辰开发平台，提供大语言模型与多模态模型 API。', ["国产","多模态"], 'AI API', 'AI开发', '阶', '#4f46e5'),
  site('stepfun-en', 'StepFun en', 'https://platform.stepfun.com', 'StepFun 面向国际开发者的模型 API 与开发者平台。', ["国际","模型 API"], 'AI API', 'AI开发', '阶', '#4f46e5'),
  site('longcat-api', 'Longcat', 'https://longcat.chat', 'Longcat 模型与 AI 应用服务入口。', ["国产","模型"], 'AI API', 'AI开发', 'L', '#22c55e'),
  site('minimax-api', 'MiniMax', 'https://platform.minimaxi.com', 'MiniMax 开放平台，提供文本、语音、视频与多模态模型 API。', ["国产","多模态"], 'AI API', 'AI开发', 'M', '#fb7185'),
  site('minimax-en', 'MiniMax en', 'https://www.minimax.io', 'MiniMax 面向全球开发者的模型与多模态 API 服务。', ["国际","多模态"], 'AI API', 'AI开发', 'M', '#fb7185'),
  site('bailing-ai', 'BaiLing', 'https://bailing.ai', '面向开发者的智能模型 API 与应用接入服务。', ["模型","API"], 'AI API', 'AI开发', 'B', '#64748b'),
  site('xiaomi-mimo', 'Xiaomi MiMo', 'https://mimo.mi.com', '小米 MiMo 模型与开发者能力入口。', ["国产","模型"], 'AI API', 'AI开发', 'Mi', '#111827'),
  site('xiaomi-mimo-together', 'Xiaomi MiMo Together', 'https://www.together.ai', '通过 Together AI 访问 MiMo 与开源模型服务。', ["国际","模型 API"], 'AI API', 'AI开发', 'Mi', '#111827'),
  site('siliconflow', 'SiliconFlow', 'https://siliconflow.cn', '高性价比模型推理平台，支持开源与主流大模型 API。', ["国产","推理"], 'AI API', 'AI开发', 'SF', '#6d4aff'),
  site('siliconflow-en', 'SiliconFlow en', 'https://www.siliconflow.com', 'SiliconFlow 面向全球开发者的模型推理与 API 服务。', ["国际","推理"], 'AI API', 'AI开发', 'SF', '#6d4aff'),
  site('novita-ai', 'Novita AI', 'https://novita.ai', '提供开源大模型、图像与视频模型 API 的全球推理平台。', ["国际","推理"], 'AI API', 'AI开发', 'N', '#7c3aed'),
  site('nvidia-build', 'NVIDIA', 'https://build.nvidia.com', 'NVIDIA 面向开发者的模型目录与 NIM 推理 API 入口。', ["国际","推理"], 'AI API', 'AI开发', 'NV', '#76b900'),
  site('opencode-go', 'OpenCode Go', 'https://opencode.ai', '面向 AI 编程工作流的模型服务与开发者入口。', ["Coding","Agent"], 'AI API', 'AI开发', 'OC', '#111827'),
  site('aihubmix', 'AiHubMix', 'https://aihubmix.com', '统一接入多家主流模型的 API 聚合平台。', ["聚合","多模型"], 'AI API', 'AI开发', 'AH', '#4f46e5'),
  site('cherryin', 'CherryIN', 'https://cherryin.ai', '面向 Cherry Studio 等客户端的多模型 API 接入平台。', ["聚合","客户端"], 'AI API', 'AI开发', 'CI', '#f43f5e'),
  site('dmxapi', 'DMXAPI', 'https://www.dmxapi.cn', '提供国内外大模型统一调用与 OpenAI 兼容接口。', ["聚合","中转"], 'AI API', 'AI开发', 'DM', '#ef4444'),
  site('packycode', 'PackyCode', 'https://packycode.com', '面向 AI 编程工具的模型 API 与统一接入服务。', ["Coding","中转"], 'AI API', 'AI开发', 'PC', '#64748b'),
  site('apikey-fun', 'APIKEY.FUN', 'https://apikey.fun', '开发者常用的模型 API 聚合与密钥管理入口。', ["聚合","API"], 'AI API', 'AI开发', 'AK', '#f97316'),
  site('api-nebula', 'APINebula', 'https://apinebula.ai', '提供 Claude Code、Codex 等开发工具接入的 AI API 网关。', ["Coding","网关"], 'AI API', 'AI开发', 'AN', '#475569'),
  site('atlas-cloud', 'AtlasCloud', 'https://www.atlascloud.ai', '通过单一 API 统一访问大语言、图片、视频与音频模型。', ["聚合","多模态"], 'AI API', 'AI开发', 'AC', '#0ea5e9'),
  site('sudocode', 'SudoCode', 'https://sudocode.ai', '面向 AI 编程与模型调用的开发者服务平台。', ["Coding","API"], 'AI API', 'AI开发', 'SC', '#7c3aed'),
  site('claudecn', 'ClaudeCN', 'https://claudecn.com', '面向中文开发者的 Claude 与 AI 编程接入服务。', ["Coding","中转"], 'AI API', 'AI开发', 'CC', '#d97757'),
  site('runapi', 'RunAPI', 'https://runapi.ai', '提供多模型 API 调用与 AI 应用开发接入。', ["聚合","API"], 'AI API', 'AI开发', 'RA', '#14b8a6'),
  site('relaxycode', 'RelaxyCode', 'https://relaxycode.com', '面向 AI 编程工具的统一模型 API 平台。', ["Coding","中转"], 'AI API', 'AI开发', 'RC', '#6366f1'),
  site('cubence', 'Cubence', 'https://cubence.com', '为开发者提供 AI 模型聚合和 API 服务。', ["聚合","API"], 'AI API', 'AI开发', 'CU', '#334155'),
  site('aigocode', 'AIGoCode', 'https://aigocode.com', '面向 AI Coding 工具的模型接入与 API 网关。', ["Coding","网关"], 'AI API', 'AI开发', 'AG', '#2563eb'),
  site('rightcode', 'RightCode', 'https://right.codes', '为 AI 编程工作流提供统一模型路由与开发服务。', ["Coding","聚合"], 'AI API', 'AI开发', 'RC', '#f97316'),
  site('aicodemirror', 'AICodeMirror', 'https://aicodemirror.com', '面向代码生成与 AI 编程客户端的模型 API 服务。', ["Coding","API"], 'AI API', 'AI开发', 'AI', '#ef4444'),
  site('crazyrouter', 'CrazyRouter', 'https://crazyrouter.com', '支持多模型切换的 AI API 路由平台。', ["聚合","路由"], 'AI API', 'AI开发', 'CR', '#06b6d4'),
  site('sssaicode', 'SSSAICode', 'https://sssaicodeapi.com', '面向 AI 编程开发者的独立模型网关，兼容 OpenAI 风格接口。', ["Coding","网关"], 'AI API', 'AI开发', 'SS', '#111827'),
  site('compshare-ai', '优云智算', 'https://www.compshare.cn/model-api', '提供图像、视频与大模型 API，兼容 OpenAI、Gemini 与 Claude 接入。', ["国产","多模态"], 'AI API', 'AI开发', '优', '#4f46e5'),
  site('compshare-coding', '优云智算 Coding', 'https://www.compshare.cn/model-api', '面向 AI 编程客户端的优云智算模型 API 接入入口。', ["Coding","国产"], 'AI API', 'AI开发', '优', '#4f46e5'),
  site('micu-ai', 'Micu', 'https://micu.ai', '面向开发者的 AI 模型 API 与编程服务。', ["Coding","API"], 'AI API', 'AI开发', 'Mi', '#0ea5e9'),
  site('etok-ai', 'ETok AI', 'https://etok.ai', '提供多模型调用与 AI 应用开发服务。', ["聚合","API"], 'AI API', 'AI开发', 'E', '#f59e0b'),
  site('eflowcode', 'E-FlowCode', 'https://eflowcode.com', '为 AI 编程工具提供模型接入和代码开发服务。', ["Coding","API"], 'AI API', 'AI开发', 'EF', '#94a3b8'),
  site('pipe-llm', 'PIPE LLM', 'https://pipellm.com', '面向大语言模型应用的统一 API 与路由服务。', ["LLM","聚合"], 'AI API', 'AI开发', 'P', '#111827'),
  site('openrouter', 'OpenRouter', 'https://openrouter.ai', '通过统一接口访问全球多家模型提供商与开源模型。', ["国际","聚合"], 'AI API', 'AI开发', 'OR', '#6366f1'),
  site('therouter', 'TheRouter', 'https://therouter.io', '提供多模型路由、统一 API 与开发者接入能力。', ["聚合","路由"], 'AI API', 'AI开发', 'TR', '#64748b'),
]

export const aiDevelopment: Website[] = [
  ...aiApiPlatforms,
  site('openai-api', 'OpenAI API', 'https://platform.openai.com/docs', '构建文本、多模态与智能体应用的模型平台。', ['API', '模型'], 'AI API', 'AI开发', 'OA', '#10a37f', { featured: true }),
  site('deepseek-api', 'DeepSeek API', 'https://platform.deepseek.com', '高性价比推理与代码模型的开放接口。', ['国产', '推理'], 'AI API', 'AI开发', 'D', '#4d7fff'),
  site('gemini-api', 'Gemini API', 'https://ai.google.dev', 'Google 多模态模型与开发者工具入口。', ['多模态', 'Google'], 'AI API', 'AI开发', '✦', '#4f7df3'),
  site('claude-api', 'Claude API', 'https://docs.anthropic.com', '面向长上下文、分析和 Agent 的模型 API。', ['长上下文', 'Agent'], 'AI API', 'AI开发', 'C', '#d97757'),
  site('modelscope', '国内大模型 API', 'https://www.modelscope.cn', '魔搭社区模型、数据集与在线推理生态。', ['国产模型', '社区'], 'AI API', 'AI开发', '魔', '#5b64f4'),
  site('huggingface', 'Hugging Face', 'https://huggingface.co', '全球开源模型、数据集与 AI 应用社区。', ['开源', '模型库'], '开发平台', 'AI开发', 'HF', '#f5b942', { featured: true }),
  site('replicate', 'Replicate', 'https://replicate.com', '通过简洁 API 运行和部署开源 AI 模型。', ['部署', 'API'], '开发平台', 'AI开发', 'R', '#111111'),
  site('langchain', 'LangChain', 'https://www.langchain.com', '构建 LLM 应用、Agent 与可观测工作流的框架。', ['框架', 'Agent'], '开发平台', 'AI开发', 'LC', '#2f855a'),
]

export const developerTools: Website[] = [
  site('vscode', 'VS Code', 'https://code.visualstudio.com', '轻量、可扩展且生态完善的代码编辑器。', ['编辑器', '免费'], '代码编辑', '开发工具', 'V', '#2376c7', { featured: true }),
  site('cursor-editor', 'Cursor', 'https://www.cursor.com', 'AI 原生代码编辑器，支持仓库级理解与生成。', ['AI', '编辑器'], '代码编辑', '开发工具', 'C', '#111111'),
  site('jetbrains', 'JetBrains', 'https://www.jetbrains.com', '覆盖主流语言与平台的专业 IDE 工具套件。', ['IDE', '专业'], '代码编辑', '开发工具', 'JB', '#ef476f'),
  site('github', 'GitHub', 'https://github.com', '全球最大的代码托管与开源协作平台。', ['开源', '协作'], '代码管理', '开发工具', 'GH', '#111827', { featured: true }),
  site('gitee', 'Gitee', 'https://gitee.com', '面向国内开发者的代码托管与 DevOps 平台。', ['国内', 'DevOps'], '代码管理', '开发工具', 'G', '#c71d23'),
  site('git', 'Git', 'https://git-scm.com', '分布式版本控制系统与开发协作基础设施。', ['版本控制', '基础'], '开发工具', '开发工具', 'GT', '#f05032'),
  site('docker', 'Docker', 'https://www.docker.com', '用容器标准化开发、测试与部署环境。', ['容器', '部署'], '开发工具', '开发工具', 'D', '#2496ed'),
  site('npm', 'npm', 'https://www.npmjs.com', 'JavaScript 包管理与开放软件注册中心。', ['JavaScript', '包管理'], '开发工具', '开发工具', 'npm', '#cb3837'),
  site('aliyun', '阿里云', 'https://www.aliyun.com', '云计算、AI 与企业数字化基础设施服务。', ['国内云', 'AI'], '云服务', '开发工具', '阿', '#ff6a00'),
  site('tencent-cloud', '腾讯云', 'https://cloud.tencent.com', '云服务器、数据库、音视频与 AI 服务平台。', ['国内云', '音视频'], '云服务', '开发工具', '腾', '#006eff'),
  site('huawei-cloud', '华为云', 'https://www.huaweicloud.com', '面向企业的云原生、盘古模型与算力服务。', ['国内云', '企业'], '云服务', '开发工具', '华', '#cf0a2c'),
  site('aws', 'AWS', 'https://aws.amazon.com/cn/', '全球覆盖广泛的云计算与基础设施平台。', ['全球云', '基础设施'], '云服务', '开发工具', 'AWS', '#ff9900'),
]

export const learningResources: Website[] = [
  site('mdn', 'MDN Web Docs', 'https://developer.mozilla.org/zh-CN/', '权威、系统的 Web 技术参考与学习文档。', ['Web', '文档'], '编程学习', '学习资源', 'MDN', '#1b1b1b', { featured: true }),
  site('w3school', 'W3School', 'https://www.w3school.com.cn', '中文 Web 技术教程与快速参考手册。', ['入门', 'Web'], '编程学习', '学习资源', 'W3', '#04aa6d'),
  site('runoob', '菜鸟教程', 'https://www.runoob.com', '覆盖多种编程语言和开发技术的中文教程站。', ['中文', '入门'], '编程学习', '学习资源', '菜', '#96c12d'),
  site('liaoxuefeng', '廖雪峰教程', 'https://www.liaoxuefeng.com', '结构清晰的 Git、Python、JavaScript 等系列教程。', ['系列课', '实践'], '编程学习', '学习资源', '廖', '#2f80ed'),
  site('deeplearning-ai', 'DeepLearning.AI', 'https://www.deeplearning.ai', 'Andrew Ng 团队打造的 AI 系统课程与专题。', ['课程', 'AI'], 'AI学习', '学习资源', 'DL', '#e54b4b', { featured: true }),
  site('hf-course', 'Hugging Face 教程', 'https://huggingface.co/learn', '从 Transformer 到 Agent 的开源实践课程。', ['开源', '实战'], 'AI学习', '学习资源', 'HF', '#f5b942'),
  site('openai-docs', 'OpenAI 官方文档', 'https://platform.openai.com/docs', '模型、API、工具与应用开发的官方指南。', ['官方', 'API'], 'AI学习', '学习资源', 'OA', '#10a37f'),
  site('github-community', 'GitHub', 'https://github.com', '通过优秀项目、源码与讨论持续学习。', ['开源', '项目'], '开发社区', '学习资源', 'GH', '#111827'),
  site('juejin', '掘金', 'https://juejin.cn', '中文开发者内容、课程与技术交流社区。', ['中文', '文章'], '开发社区', '学习资源', '掘', '#1e80ff'),
  site('v2ex', 'V2EX', 'https://www.v2ex.com', '关于创造、技术与生活方式的开发者社区。', ['讨论', '创意'], '开发社区', '学习资源', 'V2', '#778087'),
]

export const classicWebsites: Website[] = [
  ...[
    ['baidu','百度','https://www.baidu.com'],['qq','腾讯','https://www.qq.com'],['taobao','淘宝','https://www.taobao.com'],['jd','京东','https://www.jd.com'],['sina','新浪','https://www.sina.com.cn'],['163','网易','https://www.163.com'],['bilibili','哔哩哔哩','https://www.bilibili.com'],['zhihu','知乎','https://www.zhihu.com'],['douyin','抖音','https://www.douyin.com'],['weibo','微博','https://www.weibo.com'],
  ].map(([id,name,url], i) => site(`classic-${id}`,name,url,'日常高频互联网服务入口。',['常用'], '常用网站','经典导航', name.slice(0,2), ['#4d7cfe','#12b886','#ff5d5d','#e1251b','#ff6a3d','#e94848','#fb7299','#1772f6','#1a1a1a','#ff8200'][i])),
  ...[
    ['baidu-fanyi','百度翻译','https://fanyi.baidu.com'],['youdao','有道翻译','https://fanyi.youdao.com'],['iconfont','Iconfont','https://www.iconfont.cn'],['ilovepdf','iLovePDF','https://www.ilovepdf.com'],['toollu','工具箱','https://tool.lu'],['removebg','Remove.bg','https://www.remove.bg'],['jsoncn','JSON格式化','https://www.json.cn'],['cliim','二维码生成','https://cli.im'],
  ].map(([id,name,url]) => site(`classic-${id}`,name,url,'轻量、实用的在线效率工具。',['工具'], '工具','经典导航', name.slice(0,2), '#6875f5')),
  ...[
    ['gitee','Gitee','https://gitee.com'],['csdn','CSDN','https://www.csdn.net'],['runoob','菜鸟教程','https://www.runoob.com'],['mdn','MDN 中文','https://developer.mozilla.org/zh-CN/'],
  ].map(([id,name,url]) => site(`classic-dev-${id}`,name,url,'开发与技术资料入口。',['开发'], '开发','经典导航', name.slice(0,2), '#455be7')),
  ...[
    ['runoob','菜鸟教程','https://www.runoob.com'],['leetcode','力扣中国','https://leetcode.cn'],['mooc','中国大学 MOOC','https://www.icourse163.org'],['weread','微信读书','https://weread.qq.com'],['bilibili-learn','B站教程区','https://www.bilibili.com'],
  ].map(([id,name,url]) => site(`classic-learn-${id}`,name,url,'课程、阅读与技能提升入口。',['学习'], '学习','经典导航', name.slice(0,2), '#06a77d')),
  ...[
    ['douban','豆瓣','https://www.douban.com'],['xiaohongshu','小红书','https://www.xiaohongshu.com'],['weibo','微博','https://www.weibo.com'],['douyin','抖音','https://www.douyin.com'],['zhihu','知乎','https://www.zhihu.com'],
  ].map(([id,name,url]) => site(`classic-social-${id}`,name,url,'内容发现与社交社区。',['社交'], '社交','经典导航', name.slice(0,2), '#ef5da8')),
  ...[
    ['taobao','淘宝','https://www.taobao.com'],['jd','京东','https://www.jd.com'],['pdd','拼多多','https://www.pinduoduo.com'],['tmall','天猫','https://www.tmall.com'],['vip','唯品会','https://www.vip.com'],
  ].map(([id,name,url]) => site(`classic-shop-${id}`,name,url,'综合电商与品牌购物入口。',['购物'], '购物','经典导航', name.slice(0,2), '#ff6b45')),
  ...[
    ['netease-music','网易云音乐','https://music.163.com'],['qq-music','QQ音乐','https://y.qq.com'],['iqiyi','爱奇艺','https://www.iqiyi.com'],['tencent-video','腾讯视频','https://v.qq.com'],['youku','优酷','https://www.youku.com'],['bilibili','哔哩哔哩','https://www.bilibili.com'],['wegame','WeGame','https://www.wegame.com.cn'],
  ].map(([id,name,url]) => site(`classic-fun-${id}`,name,url,'音乐、视频与游戏娱乐入口。',['娱乐'], '娱乐','经典导航', name.slice(0,2), '#8b5cf6')),
]

export const allWebsites = [...aiDevelopment, ...developerTools, ...learningResources, ...classicWebsites]
