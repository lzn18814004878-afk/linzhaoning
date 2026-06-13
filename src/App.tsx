const navItems = [
  { label: "经历", href: "#experience" },
  { label: "作品集", href: "#work" },
  { label: "能力", href: "#skills" },
  { label: "联系", href: "#contact" },
];

const asset = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const chapters = [
  {
    code: "chapter 01 / 05",
    object: "origin",
    year: "2022 - 2026",
    title: "肇庆学院",
    kicker: "美术学本科",
    copy: "在美术、广告设计、场景设计、角色设计与影视后期里建立视觉基础，也开始把镜头语言当成作品的骨架。",
  },
  {
    code: "chapter 02 / 05",
    object: "motion",
    year: "2025",
    title: "AI 漫剧视觉",
    kicker: "角色 / 场景 / 分镜 / 包装",
    copy: "参与 2D AI 漫剧项目制作，处理人物、场景、分镜和后期包装，让画面在批量生成中保持统一。",
  },
  {
    code: "chapter 03 / 05",
    object: "system",
    year: "2026",
    title: "AI 制作组长",
    kicker: "工具引入 / 流程搭建 / 质量把控",
    copy: "负责 AIGC 工具引入、调试和落地，搭建高效生产流程，并把控真人剧与漫剧项目的生成进度和质量。",
  },
];

const projects = [
  {
    title: "AI 短剧生成流程",
    meta: "script / prompt / generate / edit",
    image: asset("project-ai-drama.png"),
    desc: "从剧本拆解、素材处理、提示词撰写到 AI 成片输出，关注短剧叙事节奏、情绪推进和角色表现力。",
  },
  {
    title: "2D AI 漫剧视觉制作",
    meta: "character / scene / storyboard",
    image: asset("project-character.png"),
    desc: "负责角色、场景、分镜与后期包装，处理人物和场景的一致性问题。",
  },
  {
    title: "AIGC 工具工作流搭建",
    meta: "comfyui / sd / midjourney / sora",
    image: asset("project-workflow.png"),
    desc: "引入并优化 AIGC 工具流程，让技术快速适配真人剧和漫剧的生产需求。",
  },
];

const skills = [
  "AI 视频提示词设计",
  "短剧叙事与镜头节奏",
  "AIGC 工作流搭建",
  "角色与场景一致性",
  "项目推进与质量把控",
  "后期包装与画面整理",
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

function VideoBackdrop({ dim = "bg-black/56" }: { dim?: string }) {
  return (
    <>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={asset("video-1781348643.mp4")}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className={`absolute inset-0 ${dim}`} />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-black" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 to-transparent" />
    </>
  );
}

function NavBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 pt-6 md:px-10">
      <nav className="mx-auto grid max-w-[1700px] grid-cols-[1fr_auto_auto] items-center">
        <a
          href="#hero"
          className="flex h-16 items-center gap-3 bg-black/55 px-4 backdrop-blur-xl md:px-6"
          aria-label="林钊宁作品集首页"
        >
          <PortfolioLogo />
          <span className="text-base font-medium text-white">林钊宁</span>
          <span className="hidden text-[11px] uppercase tracking-[0.3em] text-white/45 md:inline">
            / linzhaoning studio
          </span>
        </a>

        <div className="hidden h-16 items-center bg-black/55 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className="flex h-full items-center px-8 text-xs uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="flex h-16 items-center bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-neutral-200 md:px-9"
        >
          联系我
        </a>
      </nav>
    </header>
  );
}

function HeroIdCard() {
  return (
    <div className="absolute bottom-20 right-10 hidden w-[310px] border border-white/12 bg-black/70 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:block">
      <div className="mb-3 flex items-center justify-between border-b border-white/12 pb-3">
        <span className="text-4xl font-semibold uppercase leading-none text-white">
          LIN
        </span>
        <span className="text-[11px] uppercase tracking-[0.26em] text-white/45">
          creator id
        </span>
      </div>
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
        <img
          src={asset("profile-figure.png")}
          alt="林钊宁个人视觉"
          className="h-40 w-full object-cover grayscale"
        />
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
            AI video designer
          </p>
          <p className="mt-3 text-sm leading-6 text-white/78">
            产品视频设计师 / AI 视频设计师，擅长把故事转化为可交付影像。
          </p>
          <div className="mt-5 h-8 bg-[repeating-linear-gradient(90deg,#fff_0_2px,transparent_2px_6px)] opacity-70" />
        </div>
      </div>
    </div>
  );
}

function ChapterCard({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[number];
  index: number;
}) {
  const alignRight = index % 2 === 0;

  return (
    <section
      className="cinema-section relative h-[150vh] scroll-mt-28 bg-black"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-28 md:px-10">
        <VideoBackdrop dim={index === 1 ? "bg-black/62" : "bg-black/58"} />
        <div className="cinema-panel relative mx-auto grid w-full max-w-[1700px] gap-10 lg:grid-cols-2">
        <div className={alignRight ? "lg:col-start-2" : ""}>
          <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
            {chapter.code}
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/45">
            object · {chapter.object}
          </p>
          <div className="mt-16">
            <p className="text-6xl font-light leading-none text-white md:text-8xl">
              {chapter.year}
            </p>
            <h2 className="mt-8 text-6xl font-medium uppercase leading-none text-white md:text-8xl">
              {chapter.title}
            </h2>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/45">
              {chapter.kicker}
            </p>
          </div>
        </div>

        <div className="flex items-end">
          <div className="max-w-xl">
            <h3 className="text-3xl font-medium leading-tight text-white md:text-5xl">
              {chapter.copy}
            </h3>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              这些经历共同形成现在的工作方式：先理解内容，再设计镜头，最后把 AI 工具变成稳定的生产流程。
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function WorkArchive() {
  return (
    <section
      id="work"
      className="relative min-h-screen scroll-mt-28 overflow-hidden border-t border-white/10 bg-black px-6 py-28 md:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(180deg,#050505,#000)]" />
      <div className="relative mx-auto max-w-[1700px]">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
              chapter 04 / 05 · work archive
            </p>
            <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-none text-white md:text-8xl">
              Portfolio storage.
              <br />
              每个作品一个卡槽。
            </h2>
          </div>
          <p className="hidden max-w-md text-right text-sm leading-7 text-white/55 lg:block">
            参考视频里的黑白档案视觉，把作品集做成一个打开的收纳箱：卡片、编号、索引和前面板都围绕“存放作品”展开。
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <aside className="flex min-h-[720px] flex-col justify-between border border-white/12 bg-white/[0.03] p-6 backdrop-blur md:p-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                storage list
              </p>
              <h3 className="mt-6 text-4xl font-medium leading-tight text-white md:text-6xl">
                一个箱体，
                <br />
                三个项目档案。
              </h3>
            </div>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <a
                  href="#contact"
                  key={project.title}
                  className="group flex items-center justify-between gap-6 border border-white/10 bg-black/30 px-5 py-5 transition-colors hover:bg-white hover:text-black"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/40 group-hover:text-black/45">
                      slot {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-xl font-medium">{project.title}</p>
                  </div>
                  <span className="text-3xl leading-none text-white/35 group-hover:text-black/40">
                    →
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <div className="relative min-h-[720px] overflow-hidden border border-white/12 bg-neutral-950 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.12),transparent_26%)]" />
            <div className="absolute bottom-8 right-8 z-30 w-[44%] min-w-[300px] border border-white/12 bg-black/72 p-5 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  front panel
                </p>
                <p className="text-sm text-white/65">portfolio box</p>
              </div>
              <div className="space-y-3">
                <div className="h-11 border border-white/10 bg-white/[0.04]" />
                <div className="h-11 border border-white/10 bg-white/[0.04]" />
                <div className="h-11 border border-white/10 bg-white/[0.04]" />
              </div>
            </div>

            {projects.map((project, index) => {
              const positions = [
                "left-[7%] top-[12%] rotate-[-6deg]",
                "left-[18%] top-[20%] rotate-[-1deg]",
                "left-[29%] top-[28%] rotate-[5deg]",
              ];

              return (
                <article
                  key={project.title}
                  className={`absolute z-20 w-[58%] max-w-[560px] overflow-hidden border border-white/14 bg-black/80 shadow-[0_24px_80px_rgba(0,0,0,0.58)] backdrop-blur ${positions[index]}`}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute left-4 top-4 border border-white/20 bg-black/55 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/75">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                      {project.meta}
                    </p>
                    <h3 className="mt-3 text-3xl font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">
                      {project.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen scroll-mt-28 overflow-hidden border-t border-white/10 bg-black px-6 py-28 md:px-10"
    >
      <VideoBackdrop dim="bg-black/72" />
      <div className="relative mx-auto grid max-w-[1700px] gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
            chapter 05 / 05 · toolkit
          </p>
          <h2 className="mt-8 text-6xl font-medium leading-none text-white md:text-8xl">
            Making art
            <br />
            with the machine.
          </h2>
        </div>
        <div className="grid content-end gap-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="grid grid-cols-[80px_1fr] items-center border-t border-white/12 py-5"
            >
              <span className="text-sm text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-medium text-white md:text-5xl">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen scroll-mt-28 items-center overflow-hidden border-t border-white/10 bg-black px-6 py-28 md:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),transparent_26%),linear-gradient(180deg,#050505,#000)]" />
      <div className="relative mx-auto w-full max-w-[1700px]">
        <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
          contact · audience of one
        </p>
        <h2 className="mt-8 max-w-6xl text-6xl font-medium leading-none text-white md:text-8xl">
          一起把下一个故事，
          <br />
          做成更有张力的画面。
        </h2>
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="mailto:1760386584@qq.com"
            className="bg-white px-8 py-5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
          >
            1760386584@qq.com
          </a>
          <a
            href="tel:18814004878"
            className="border border-white/12 bg-white/[0.04] px-8 py-5 text-sm font-medium text-white/80"
          >
            18814004878
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="bg-black text-white">
      <NavBar />

      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-black px-6 md:px-10"
      >
        <VideoBackdrop dim="bg-black/48" />
        <div className="relative mx-auto flex h-full max-w-[1700px] items-end pb-24">
          <div className="w-full">
            <div className="mb-16 flex justify-between gap-8">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/45 md:text-xs">
                AI video designer · short drama maker
              </p>
              <p className="hidden max-w-xs text-right text-2xl leading-tight text-white/75 lg:block">
                Product video designer.
                <br />
                AIGC artist.
                <br />
                A studio of one.
              </p>
            </div>

            <h1 className="hero-title max-w-6xl text-5xl font-medium leading-none text-white md:text-7xl xl:text-8xl">
              By day, I build AI videos.
              <br />
              By night, I make visual stories.
              <br />
              Same machine. Different rules.
            </h1>
          </div>
        </div>
        <HeroIdCard />
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 py-28 md:px-10">
        <VideoBackdrop dim="bg-black/60" />
        <div className="relative mx-auto w-full max-w-[1700px]">
          <h2 className="max-w-6xl text-5xl font-medium leading-tight text-white md:text-7xl">
            A video designer who builds images with prompts by day.
            <br />
            An artist who lets characters move by night.
            <br />
            Same machine. Different rules.
          </h2>
          <p className="mt-20 max-w-md text-sm leading-7 text-white/55">
            当前 · studio 01 / 把短剧逻辑、镜头节奏和 AI 工具整合成稳定的视觉生产方式。
          </p>
        </div>
      </section>

      <div id="experience">
        {chapters.map((chapter, index) => (
          <ChapterCard
            chapter={chapter}
            index={index}
            key={chapter.title}
          />
        ))}
      </div>

      <WorkArchive />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
