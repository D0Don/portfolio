

const projects = [
  {
    id: "01",
    title: "UNTITLED_001",
    type: "MUSIC PRODUCTION",
    description: "Beats, textures and sounds from another place.",
    year: "2026",
  },
  {
    id: "02",
    title: "DIGITAL STATIC",
    type: "SOUND DESIGN",
    description: "Distorted sounds and digital experiments.",
    year: "2026",
  },
  {
    id: "03",
    title: "SIDE QUEST",
    type: "PERSONAL PROJECT",
    description: "A collection of ideas outside the ordinary.",
    year: "2025",
  },
];

const socials = [
  { name: "SoundCloud", url: "https://soundcloud.com/" },
  { name: "YouTube", url: "https://youtube.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
  { name: "GitHub", url: "https://github.com/D0Don" },
];

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <a href="#" className="logo">D0<span>.</span>DON</a>
        <nav>
          <a href="#works">WORKS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT ↗</a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">INDEPENDENT ARTIST / MUSIC PRODUCER</p>
          <h1>SOUND IS<br />MY <span>WORLD.</span></h1>
          <p className="intro">
            음악과 소리, 디지털 실험을 기록하는 공간.
            <br />
            아직 완성되지 않은 아이디어도 작품의 일부.
          </p>
          <a className="button" href="#works">
            EXPLORE WORKS <span>↘</span>
          </a>
        </div>

        <div className="art" aria-label="Abstract purple artwork">
          <div className="grid-bg" />
          <div className="orb" />
          <div className="orb-small" />
          <span className="art-top">FIG. 001</span>
          <span className="art-bottom">SOUND / SPACE / 2026</span>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span>PERSONAL ARCHIVE — VOL. 01</span>
        </div>
      </section>

      <section className="section wrap" id="works">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED OUTPUT</p>
            <h2>THE WORKS<span>®</span></h2>
          </div>
          <p className="muted">
            Things I've made,<br />
            things I'm still making.
          </p>
        </div>

        <div className="projects">
          {projects.map((project, index) => (
            <article className="project" key={project.id}>
              <span className="project-no">{project.id}</span>
              <div className={`cover cover-${index + 1}`}>
                <span>{project.id} / D0D</span>
              </div>
              <div className="project-content">
                <p className="eyebrow">
                  {project.type} · {project.year}
                </p>
                <h3>{project.title}</h3>
                <p className="muted">{project.description}</p>
                <span className="tag">PROJECT / {project.id}</span>
              </div>
              <a className="arrow" href="#contact" aria-label={`Ask about ${project.title}`}>↗</a>
            </article>
          ))}
        </div>
        <p className="disclaimer">
          SAMPLE PROJECTS — REPLACE WITH YOUR REAL WORK
        </p>
      </section>

      <section className="about">
        <div className="wrap about-inner" id="about">
          <div>
            <p className="eyebrow">02 / WHO AM I</p>
            <h2>MADE OF<br /><span>CURIOSITY.</span></h2>
          </div>
          <div className="about-text">
            <p className="lead">
              I'm D0DON — an independent artist exploring sound and digital culture.
            </p>
            <p>
              비트 메이킹부터 사운드 디자인까지, 장르와 형식에 얽매이지 않고
              새로운 분위기와 질감을 실험해. 이곳은 그 과정과 결과물을 모아두는
              개인 아카이브야.
            </p>
            <div className="tags">
              <span>MUSIC PRODUCTION</span>
              <span>SOUND DESIGN</span>
              <span>EXPERIMENTAL</span>
              <span>DIGITAL ART</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <p className="eyebrow">03 / START SOMETHING</p>
        <h2>LET'S MAKE<br /><span>SOMETHING LOUD.</span></h2>
        <p className="muted">협업, 작업 문의, 새로운 아이디어까지.</p>
        <a className="button" href="mailto:hello@example.com">
          GET IN TOUCH ↗
        </a>
      </section>

      <footer className="footer wrap">
        <a href="#" className="logo">D0<span>.</span>DON</a>
        <div className="socials">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noreferrer"
            >
              {social.name} ↗
            </a>
          ))}
        </div>
        <p>© 2026 D0DON. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
