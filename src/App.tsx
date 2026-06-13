const navItems = [
  { label: "经历", href: "#experience" },
  { label: "作品集", href: "#work" },
  { label: "能力", href: "#skills" },
  { label: "联系", href: "#contact" },
];

const asset = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const stats = [
  { value: "+2", label: "AI 视频相关经历" },
  { value: "2026", label: "美术学本科" },
  { value: "6+", label: "AIGC 工具能力" },
];

const experience = [
  {
    time: "2026.01 - 2026.04",
    title: "广州漫飞网络科技 · AI 漫剧制作组长",
    desc: "负责 AIGC 最新软件与工具的引入、调试与应用，搭建高效生产流程，解答团队技术问题，并把控 AI 真人剧 / 漫剧项目的生成进度与质量。",
  },
  {
    time: "2025.10 - 2026.01",
    title: "广州欢聚时代信息科技有限公司 · AI 动画师",
    desc: "参与 2D AI 漫剧项目策划与制作，负责角色与场景设计、动画制作、分镜设计、人物场景一致性解决，以及后期包装处理。",
  },
  {
    time: "2022.09 - 2026.06",
    title: "肇庆学院 · 美术学本科",
    desc: "主修实用美术与广告设计、场景设计、角色设计、影视导演基础、影视后期制作等课程，具备视觉设计与影像表达基础。",
  },
];

const projects = [
  {
    title: "AI 短剧生成流程",
    meta: "剧本 / 提示词 / 生成 / 成片",
    image: asset("project-ai-drama.png"),
    desc: "从剧本拆解、素材处理、提示词撰写到 AI 成片输出，关注短剧叙事节奏、情绪推进和角色表现力。",
  },
  {
    title: "2D AI 漫剧视觉制作",
    meta: "角色 / 场景 / 分镜 / 包装",
    image: asset("project-character.png"),
    desc: "参与 2D AI 漫剧项目制作，负责角色、场景、分镜与后期包装，处理人物和场景一致性问题。",
  },
  {
    title: "AIGC 工具工作流搭建",
    meta: "ComfyUI / SD / Midjourney / Sora",
    image: asset("project-workflow.png"),
    desc: "引入并优化 AIGC 工具流程，让技术快速适配真人剧和漫剧的生产需求，提升制作效率与内容质量。",
  },
];

const skills = [
  {
    title: "AI 视频提示词设计",
    text: "能围绕人物表情、动作、镜头语言与剧情张力，构建更精准、可执行的提示词。",
  },
  {
    title: "短剧叙事与镜头语言",
    text: "理解短剧叙事逻辑，对节奏、情绪、分镜和角色表现力有较好的把控。",
  },
  {
    title: "AIGC 工作流搭建",
    text: "熟悉 Stable Diffusion、Midjourney、ComfyUI、Sora、海螺、即梦等 AI 视频工具。",
  },
  {
    title: "项目推进与质量把控",
    text: "具备工具落地、团队技术答疑、进度管理和生成质量把控经验。",
  },
];

function PortfolioLogo() {
  return (
    <svg viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#ffffff"
        d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex items-end justify-between gap-8">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/50">
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-3xl font-medium leading-tight text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="hidden max-w-xl text-sm leading-relaxed text-white/55 md:block">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function App() {
  return (
    <main className="bg-black text-white">
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-[1.06] contrast-[1.08] saturate-[1.06]"
          src={asset("video-1781348643.mp4")}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/16" />

        <div className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-10 md:pt-6">
          <nav className="mx-auto flex max-w-[1700px] items-center justify-between gap-4 rounded-full border border-white/12 bg-neutral-950/55 px-2 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-150">
            <a
              href="#hero"
              className="flex items-center gap-2 rounded-full bg-white/[0.06] py-3 pl-4 pr-6 backdrop-blur"
              aria-label="林钊宁作品集首页"
            >
              <PortfolioLogo />
              <span className="text-sm font-normal tracking-tight text-white">
                林钊宁
              </span>
            </a>

            <div className="hidden items-center gap-1 rounded-full bg-white/[0.04] px-3 py-2 backdrop-blur md:flex">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
            >
              联系我
            </a>
          </nav>
        </div>

        <div className="relative z-10 h-full w-full" id="hero">
          <div className="absolute left-6 top-[22%] max-w-[1120px] md:left-10 md:top-[20%]">
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-white/55 md:text-sm">
              AI VIDEO DESIGNER · SHORT DRAMA MAKER
            </p>
            <h1 className="hero-title max-w-[1280px] text-[15vw] font-medium text-white md:text-[10.5vw]">
              Linzhaoning
            </h1>
          </div>

          <div className="absolute right-6 top-[48%] max-w-[360px] -translate-y-1/2 md:right-12">
            <p className="text-right text-[15px] leading-7 text-white/82 md:text-base">
              产品视频设计师 / AI 视频设计师，擅长用提示词、镜头节奏和短剧逻辑，把故事转化为可交付的影像成片。
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent via-black/35 to-black" />
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1700px]">
          <SectionHeading
            eyebrow="个人经历"
            title="从美术视觉到 AI 视频生产，我负责把创意、工具和成片流程串起来。"
            description="我关注 AIGC 在真人剧与漫剧领域的技术应用，能推进剧本理解、提示词设计、场景一致性、动画分镜、后期包装和团队技术支持。"
          />
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden border border-white/10 bg-neutral-950">
              <img
                src={asset("profile-figure.png")}
                alt="林钊宁人物视觉"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="grid gap-5">
                {experience.map((item) => (
                  <article key={item.time} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                      {item.time}
                    </p>
                    <h3 className="mt-3 text-xl font-medium uppercase tracking-tight text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                      {item.value}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/60">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-28 border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1700px]">
          <SectionHeading
            eyebrow="作品集"
            title="这些项目展示我如何把提示词、结构和镜头运动转化为最终画面。"
            description="当前是基础版作品集结构，后续可以继续替换为真实作品封面、视频截图和项目详情。"
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="overflow-hidden border border-white/10 bg-neutral-950">
              <img src={asset("project-ai-drama.png")} alt="AI 短剧生成流程" className="h-[520px] w-full object-cover" />
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">剧本 / 提示词 / 生成 / 成片</p>
                <h3 className="mt-3 text-2xl font-medium uppercase tracking-tight md:text-4xl">AI 短剧生成流程</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                  从剧本拆解、素材处理、提示词撰写到 AI 成片输出，关注短剧叙事节奏、情绪推进和角色表现力。
                </p>
              </div>
            </article>

            <div className="grid gap-6">
              {projects.slice(1).map((project) => (
                <article key={project.title} className="overflow-hidden border border-white/10 bg-neutral-950">
                  <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">{project.meta}</p>
                    <h3 className="mt-3 text-xl font-medium uppercase tracking-tight md:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{project.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-28 border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1700px]">
          <SectionHeading
            eyebrow="个人优势"
            title="当 AI 视频既需要审美，也需要稳定执行时，我能提供这些能力。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <article key={skill.title} className="min-h-[220px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <h3 className="text-xl font-medium uppercase tracking-tight text-white">
                  {skill.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {skill.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative flex min-h-screen scroll-mt-28 items-center overflow-hidden border-t border-white/10 bg-black px-6 py-24 md:px-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-white/5" />
        <div className="relative mx-auto max-w-[1700px]">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/50">
            联系方式
          </p>
          <h2 className="max-w-5xl text-4xl font-medium uppercase tracking-tight md:text-7xl">
            一起把下一个故事，做成更有张力、更干净、更能被看见的画面。
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:1760386584@qq.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
            >
              1760386584@qq.com
            </a>
            <a
              href="tel:18814004878"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-normal text-white/80"
            >
              18814004878
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
