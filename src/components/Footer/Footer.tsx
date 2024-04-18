function Footer () {
    return (
        <div className="bg-zinc-950 border-t-4 border-zinc-900 text-white">
  <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
    <div className="xl: grid xl:grid-cols-3 xl:gap-8">
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6">Website</h3>
            <ul className="mt-6 space-y-4" role="list">
              <li>
                <span
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                  v-else=""
                  v-on:click="start_scroll"
                >
                  Start
                </span>
              </li>
              <li>
                <span
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                  v-on:click="portfolio_scroll"
                >
                  Portfolio
                </span>
              </li>
              <li>
                <span
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                  v-else=""
                  v-on:click="services_scroll"
                >
                  Leistungen
                </span>
              </li>
              <li>
                <span
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition hover:cursor-pointer"
                  v-else=""
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
            <h3 className="text-sm font-semibold leading-6" v-else="">
              Soziale Medien
            </h3>
            <ul className="mt-6 space-y-4" role="list">
              <li>
                <a
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                  href="https://www.instagram.com/ferbion_web/ target="
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                  href="https://www.youtube.com/channel/UC-UchX30BaknW8U25JiSgDA"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                  href="https://www.tiktok.com/@ferbionweb"
                  target="_blank"
                >
                  Tiktok
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                  href="https://twitter.com/FerbionWeb"
                  target="_blank"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-zinc-400 hover:text-zinc-300 transition"
                  href=""
                  target="_blank"
                >
                  Facebook
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
                  v-on:click="impressum_change"
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