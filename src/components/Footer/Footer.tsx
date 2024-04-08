function Footer () {
    return (
        <footer className="bg-[#120e16]" style={{backgroundImage: "linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);" }}>
            <div className="flex flex-col pt-[75px]">
                <div className="flex justify-center mb-12">
                    <span className="text-white font-bold font-mono text-3xl">Feel free to contact me!</span>
                </div>
                <div className="flex justify-center space-x-8 text-white">
                    <div>
                        <a href="" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-white h-6 hover:mb-2 transition-all duration-150">
                                <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 
                                50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 
                                8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 
                                31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 
                                64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-white h-6 hover:mb-2 transition-all duration-150">
                                <path fill="currentColor" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 
                                0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 
                                37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer