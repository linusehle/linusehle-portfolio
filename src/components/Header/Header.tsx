import { useEffect, useRef } from 'react';
import './header.scss';
import Typed from 'typed.js';

function Header () {

    const typedEl = useRef(null);
    const targetSection = useRef(null);
    const options = {
      strings: ['First sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
      startDelay: 1500,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    };
    
    useEffect(() => {
      const typed = new Typed(typedEl.current, options);    
        return () => typed.destroy();
    }, [typedEl, targetSection]);

    return (
      <div className='bg-[#000000] text-white'>
        <div className="relative">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="mt-24 text-4xl font-bold tracking-tight sm:mt-10 sm:text-6xl">
                  <span
                    className="font-semibold text-2xl"
                    style={{
                      background: "-webkit-linear-gradient(90deg, #9f55ff, #7000ff)",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                    >
                      Hi, ich bin
                    </span>
                    <div className="flex space-x-4">
                      <span className="emphasize border-gradient border-gradient-green font-bold text-6xl only-top">Linus</span>
                      <span className="font-bold text-6xl text-white">Ehle</span>
                    </div>
                  </div>
                  <div className=" my-12">
                    <p>
                      <span
                        ref={typedEl}
                        className="seq text-3xl text-gray-light-3 font-mono leading-relaxed"
                        ></span>
                    </p>
                  </div>
                  <div className='flex gap-6'>
                    <svg className='hover:text-[#9f55ff]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                    <svg className='hover:text-[#9f55ff]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> 
                    <svg className='hover:text-[#9f55ff]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <svg className='hover:text-[#9f55ff]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <svg className='hover:text-[#9f55ff]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </div>
                  <div className="mt-10 flex items-center gap-x-6">
                    <span className="btn-header rounded-xl p-2 text-lg px-3 text-white font-semibold">
                      Lass uns in Kontakt treten
                    </span>
                    <span className="text-lg font-semibold leading-6 space-x-2 hover:text-[#7000ff] transition cursor-pointer" v-on:click="about_scroll">
                      Weitere Informationen
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

         
 