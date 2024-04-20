function Footer () {
  const scrollStart = () => {
    document.getElementById("start")?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollAbout = () => {
    document.getElementById("about")?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollSkills = () => {
    document.getElementById("skills")?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollWork = () => {
    document.getElementById("work")?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="bg-zinc-950 border-t-4 border-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Website</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li>
                    <span
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                    onClick={scrollStart}
                    >
                      Start
                    </span>
                  </li>
                  <li>
                    <span
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                    onClick={scrollAbout}
                    >
                      Über mich
                    </span>
                  </li>
                  <li>
                    <span
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                    onClick={scrollSkills}
                    >
                      Kompetenzen
                    </span>
                  </li>
                  <li>
                    <span
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                    onClick={scrollWork}
                    >
                      Projekte
                    </span>
                  </li>
                  <li>
                    <span
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                    >
                      Kontakt
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Support</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href=""
                    >
                      Zahlungsmethoden
                    </a>
                  </li>
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href=""
                    >
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href=""
                    >
                      Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Soziale Medien</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href=""
                    target="_blank"
                    >
                      Email / Mail
                    </a>
                  </li>
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href="https://www.linkedin.com/in/linus-ehle-196a612ba/"
                    target="_blank"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href="https://github.com/linusehle"
                    target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href="https://www.instagram.com/linusehle/"
                    target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    href="https://twitter.com/ehlelinus"
                    target="_blank"
                    >
                      Twitter / X
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Rechtliches</h3>
                <ul className="mt-6 space-y-4" role="list">
                  <li>
                    <span
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    >
                      Impressum
                    </span>
                  </li>
                  <li>
                    <span
                    className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                    >
                      Datenschutz
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer