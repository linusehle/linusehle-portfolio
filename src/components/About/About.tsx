function About () {
    return (
        <div className="pt-16 sm:pt-32 bg-[#000000] text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#01a7ee]">Über mich</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Alles was DU wissen musst
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-400 text-justify">
                        Wir sind eine Web-Agentur bestehend aus zwei Personen, die professionelle Websites nicht nur,
                        designet und SEO maximiert, sondern auch Websites entwickelt. Bei uns haben Sie die Möglichkeit,
                        eine individuelle gestaltete Website zu einem fairen Preis erstellen zu lassen. Unsere Lösungen
                        sind zudem auf Nachhaltigkeit und Zukunfstfähigkeit ausgerichtet.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-none text-[#01a7ee]">
                                    <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25
                                    11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25
                                    2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z">
                                    </path>
                                </svg>
                                Web-Design   
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                                <p className="flex-auto">
                                    Hochwertiges und benutzerfreundliches Design für optimales Nutererlebnis
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-none text-[#01a7ee]">
                                    <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25
                                    11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25
                                    2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z">
                                    </path>
                                </svg>
                                Suchmaschienenoptimierung
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                                <p className="flex-auto">
                                    SEO gemäß Google-Standarts für langfristige Erfolge.
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-none text-[#01a7ee]">
                                    <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25
                                    11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25
                                    2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z">
                                    </path>
                                </svg>
                                Web-Entwicklung 
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                                <p className="flex-auto">
                                    Hochwertige und moderne Entwicklung Ihrer neuen Website
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default About