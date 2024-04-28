function Skills () {
  return (
    <div className="bg-[#000000] select-none py-24 sm:py-32 text-white" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <span
            className="font-semibold text-xl"
            style={{
              background: "-webkit-linear-gradient(90deg, #9f55ff, #7000ff)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            >
              Kompetenzen
            </span>
            <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Meine Kompetenzen
            </p>
            <p
            className="mt-6 text-base leading-7 text-zinc-400"
            >
              Ich mag es neue Dinge zu lernen und mich stets weiterzubilden.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:gap-y-16">
            <a>
              <div className="relative pl-9 group">
                <dt className="font-semibold">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-5 w-5 text-[#7000ff]"
                  >
                    <path
                    d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25
                    2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25
                    0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25
                    2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25
                    0 0118 4.25v2.5A2.25 .25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25
                    11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 
                    0v-2h2a.75.75 0 000-1.5h-2v-2z"
                    />
                  </svg>
                  <h3>Frontend-Entwicklung</h3>
                </dt>
                <dd
                className="mt-2 text-zinc-400 hover:no-underline"
                >
                  Html, Css, Sass/Scss, Javascript/Typescript, React-JS und Tailwind-Css
                </dd>
              </div>
            </a>
            <a>
              <div className="relative pl-9 group">
                <dt className="font-semibold">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-5 w-5 text-[#7000ff]"
                  >
                    <path
                    d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25
                    2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25
                    0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25
                    2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25
                    0 0118 4.25v2.5A2.25 .25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25
                    11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 
                    0v-2h2a.75.75 0 000-1.5h-2v-2z"
                    />
                  </svg>
                  <h3>Backend-Entwicklung</h3>
                </dt>
                <dd
                className="mt-2 text-zinc-400 hover:no-underline"
                >
                  Next-JS und PHP
                </dd>
              </div>
            </a>
            <a>
              <div className="relative pl-9 group">
                <dt className="font-semibold">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-5 w-5 text-[#7000ff]"
                  >
                    <path
                    d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25
                    2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25
                    0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25
                    2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25
                    0 0118 4.25v2.5A2.25 .25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25
                    11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 
                    0v-2h2a.75.75 0 000-1.5h-2v-2z"
                    />
                  </svg>
                  <h3>Weitere</h3>
                </dt>
                <dd
                className="mt-2 text-zinc-400 hover:no-underline"
                >
                  C/C++, Java, Rust und Solidity (Web3)
                </dd>
              </div>
            </a>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Skills