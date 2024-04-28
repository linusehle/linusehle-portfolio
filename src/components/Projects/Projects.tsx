// import { motion, useScroll } from "framer-motion";

function Projects () {
  return (
    <div className="bg-[#000000] text-white select-none overflow-hidden py-14 pb-20" id="work">
      <div className="mx-auto px-4 py-5 sm:px-6 max-w-7xl">
        <div className="max-w-3xl">
          <span
          className="font-semibold text-xl"
          style={{
            background: "-webkit-linear-gradient(90deg, #9f55ff, #7000ff)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          >
            Meine Projekte
          </span>
          <p
          className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Portfolio
          </p>
        </div>
        <div className="mt-8 space-y-16 border-t border-gray-200 pt-10 sm:mt-10">
          <a
          className="group mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:flex items-center"
          href=""
          >
            <div>
              <div className="text-xl font-bold">Projekt Eins</div>
              <div className="text-zinc-400 w-72">
                <div
                className="mt-2"
                >
                  Beschreibung zu Projekt Eins
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 space-y-6 md:flex-row md:space-y-0 lg:mt-0 md:space-x-6 overscroll-x-auto lg:pl-16">
              <div className="flex justify-center md:block">
                <img
                className="rounded-xl h-[150px] md:h-auto"
                src="src\assets\stonks.png"
                />
              </div>
              <div className="flex justify-center md:block">
                <img
                className="rounded-xl h-[150px] md:h-auto"
                src="src\assets\stonks.png"
                />
              </div>
              <div className="flex justify-center md:block">
                <img
                className="rounded-xl h-[150px] md:h-auto"
                src="src\assets\stonks.png"
                />
              </div>
            </div>
          </a>
          <a
          className="group mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:flex items-center"
          href=""
          >
            <div>
              <div className="text-xl font-bold">Projekt Zwei</div>
              <div className="text-zinc-400 w-72">
                <div
                className="mt-2"
                >
                  Beschreibung zu Projekt Zwei
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 space-y-6 md:flex-row md:space-y-0 lg:mt-0 md:space-x-6 overscroll-x-auto lg:pl-16">
              <div className="flex justify-center md:block">
                <img
                className="rounded-xl h-[150px] md:h-auto"
                src="src\assets\stonks.png"
                />
              </div>
              <div className="flex justify-center md:block">
                <img
                className="rounded-xl h-[150px] md:h-auto"
                src="src\assets\stonks.png"
                />
              </div>
              <div className="flex justify-center md:block">
                <img
                className="rounded-xl h-[150px] md:h-auto"
                src="src\assets\stonks.png"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects