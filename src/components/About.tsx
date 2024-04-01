function About () {
    return (
        <div className="bg-[#120e16] h-screen w-full flex justify-center">
            <div className="flex justify-center">
                <h1 className="font-semibold text-[2.70rem] md:text-6xl lg:text-[4rem] text-center max-w-[75%]">
                    <div className="w-full hover:text-white">
                        <span className="leading-tight text-[#423e45] hover:text-white">I'm a passionate Developer who's focues on building scalable and performant apps<br></br></span>
                    </div>
                    <div className="w-full hover:text-white">
                        <span className="leading-tight text-[#423e45] hover:text-white">I take responsibility to craft a good user experience using modern frontend tools.</span>
                    </div>
                </h1>
            </div>
        </div>
    );
}

export default About