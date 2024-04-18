import './header.scss';

function Header () {
    return (
        <div className='bg-[#000000] text-white'>
            <div className="relative">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div className="mt-24 text-4xl font-bold tracking-tight sm:mt-10 sm:text-6xl">
                            <h1>We create</h1>
                            <h1>professional<br />Websites</h1>
                        </div>
                        <div className="mt-10 flex items-center gap-x-6">
                            <span className="bg-[#00a8f0] rounded-full p-2 text-lg px-3 text-white font-semibold">
                                Contact
                            </span>
                            <span className="text-lg font-semibold leading-6 hover:text-[#00a8f0] transition cursor-pointer" v-on:click="about_scroll">
                                More information
                                <span aria-hidden="true">→</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Header