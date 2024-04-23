function About () {
	return (
		<div className="bg-[#000000] text-white pt-16 sm:pt-32" id="about">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-3xl lg:text-center">
					<h2
					className="font-semibold text-xl"
					style={{
						background: "-webkit-linear-gradient(90deg, #9f55ff, #7000ff)",
						backgroundClip: "text",
						WebkitTextFillColor: "transparent"
					}}
					>
						Über mich
					</h2>
					<p 
					className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
					>
						Alles was DU wisen musst
					</p>
					<p
					className="mt-6 text-lg leading-8 text-zinc-400 text-justify"
					>
						Willkommen auf meiner Webseite. Ich bin Linus und programmiere hobbymäßig. 
            Zurzeit mache ich noch meinen Schulabschluss und will in der Zukunft auch als Programmierer
            arbeiten beziehungsweise mich in diesem Bereich selbständig machen. Schaue dich gerne
            auf meiner Webseite um, um über meine Kompetenzen und mehr zu Erfahren.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						<div className="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
							<dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
								<svg
								className="h-5 w-5 flex-none text-[#7000ff]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								>
									<path
									fillRule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8
									10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75
									0 011.06-1.06l3.894 3.893 7.48-9.817a.75.
									0 011.05-.143z"
									clipRule={"evenodd"}
									/>
								</svg>
								Erfahrung
							</dt>
							<dd className="mt-4 flex flex-auto flex-col text-base leading-7">
								<p
								className="flex-auto"
								>
									Über 4 Jahre lange Erfahrung im Programmieren
								</p>
							</dd>
						</div>
						<div className="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
							<dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
								<svg
								className="h-5 w-5 flex-none text-[#7000ff]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								>
									<path
									fillRule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8
									10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75
									0 011.06-1.06l3.894 3.893 7.48-9.817a.75.
									0 011.05-.143z"
									clipRule={"evenodd"}
									/>
								</svg>
								Zufriedenheit
							</dt>
							<dd className="mt-4 flex flex-auto flex-col text-base leading-7">
								<p
								className="flex-auto"
								>
									Über 50+ absolvierte zufriedene Kunden
								</p>
							</dd>
						</div>
						<div className="flex flex-col outline outline-1 outline-zinc-800 rounded-lg p-8">
							<dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
								<svg
								className="h-5 w-5 flex-none text-[#7000ff]"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								>
									<path
									fillRule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8
									10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75
									0 011.06-1.06l3.894 3.893 7.48-9.817a.75.
									0 011.05-.143z"
									clipRule={"evenodd"}
									/>
								</svg>
								Professionalität
							</dt>
							<dd className="mt-4 flex flex-auto flex-col text-base leading-7">
								<p
								className="flex-auto"
								>
									Hochwertige und moderne Entwicklung
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