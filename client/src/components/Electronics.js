import React, { useEffect, useState } from 'react'
import elect from '../assets/css/elctr.png'
import elect2 from '../assets/css/elect.png'
import Acas from '../assets/css/ac_as.png'
import micset1 from '../assets/css/mic-set1.png'
import micset2 from '../assets/css/mic-set2.png'
import torch from '../assets/css/torch.png'
import led from '../assets/css/led_tl.png'
import Dcas from '../assets/css/dc_as.png'
import solar from '../assets/css/other_solar.png'
import HT from '../assets/css/home_th.png'
import SB from '../assets/css/speak_box.png'
import TS from '../assets/css/troll-spe.png'
import BS from '../assets/css/blu-spe.png'
import Remote from '../assets/css/remote.png'
import WM from '../assets/css/wall-mount.png'
import Stabilizer from '../assets/css/stabilizer.png'
import TSk from '../assets/css/tatas.png'
import SD from '../assets/css/sund.png'
import D2H from '../assets/css/d2h.png'
import Airtel from '../assets/css/airtel.png'
import { Helmet } from 'react-helmet-async'

const Electronics = () => {
    const [scroll, setScroll] = useState(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollDir, setScrollDir] = useState(1)
    useEffect(() => {
        if (scroll) {
            const scrollInterval = setInterval(() => {
                if (scroll.scrollLeft < scroll.scrollWidth - scroll.offsetWidth && scrollDir === 1) {
                    scroll.scrollLeft += 1
                    setScrollPosition(scroll.scrollLeft)
                } else if (scroll.scrollLeft > 0 && scrollDir === -1) {
                    scroll.scrollLeft -= 1;
                    setScrollPosition(scroll.scrollLeft)
                } else {
                    setScrollDir(scrollDir * -1)
                }
            }, 30)
            return () => clearInterval(scrollInterval)
        }
    }, [scroll, scrollDir])

    return (
        <div className=''>
            <Helmet>
                <title>Electronics Page</title>
                <meta name="description" content="This is a description of my page" />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="My Page Title" />
                <meta property="og:description" content="This is a description of my page" />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta property="og:url" content="https://example.com/my-page" />
                <meta name="twitter:title" content="My Page Title" />
                <meta name="twitter:description" content="This is a description of my page" />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className='hidden md:flex items-center relative'>
                <img src={elect} alt='Electronics' className="max-w-[1000px] max-h-[200px]" width={2000} />
                <p className='font-semibold tracking-tighter flex items-center justify-center text-7xl absolute right-10'>Akshaya Electronics</p>

            </div>
            <div className='flex items-center'>
                <div className='flex md:hidden'>
                    <img src={elect2} alt='Electronics' className="max-h-[200px]" />
                </div>
                <p className='md:hidden font-semibold tracking-tighter text-4xl flex'>Akshaya<br /> Electronics</p>
            </div>
            <p className='text-3xl font-semibold flex items-center justify-center m-4 md:text-4xl p-4'>Categories</p>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 p-5 md:p-4'>
                <div className='p-4 rounded-lg shadow-lg bg-gray-200 w-full'>
                    <p className='flex items-center justify-center text-2xl text-[#5a116b] font-semibold pb-4'>Amplifier</p>
                    <div className='flex items-center justify-center text-[#5a116b] gap-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Amplifier?&type=phone_number&app_absent=0">
                                <img src={Acas} className="shadow-lg rounded-lg" alt='dc-assembler' width={120} height={120} />
                            </a>
                            <p className='p-2 font-semibold'>Assemble AC</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Amplifier?&type=phone_number&app_absent=0">

                                <img src={Dcas} alt='dc-assembler' width={120} height={120} className='rounded-lg shadow-lg' />
                            </a>
                            <p className='p-2 font-semibold'>Assemble DC</p>
                        </div>
                    </div>
                </div>
                <div className=' p-4 rounded-lg shadow-lg bg-gray-200 w-full'>
                    <p className='flex items-center justify-center text-2xl text-[#5a116b] font-semibold pb-4'>Mic Set items</p>
                    <div className='flex items-center justify-center text-[#5a116b] gap-2 md:gap-10'>
                        <div className='flex flex-col items-center justify-center'>
                            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Horn speakers?&type=phone_number&app_absent=0">
                                <img src={micset1} alt='Mic set 1' width={120} height={120} className='rounded-lg shadow-lg' />
                            </a>
                            <p className='p-2 font-semibold'>Horn Speakers</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Microphone?&type=phone_number&app_absent=0">

                                <img src={micset2} alt='Mic set 2' width={120} height={120} className='rounded-lg shadow-lg' />
                            </a>
                            <p className='p-2 font-semibold'>Microphones</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 rounded-lg shadow-lg bg-gray-200 w-full'>
                    <p className='flex items-center justify-center text-2xl text-[#5a116b] font-semibold pb-4'>Lights</p>
                    <div className='flex items-center justify-center text-[#5a116b] gap-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Torch?&type=phone_number&app_absent=0">

                                <img src={torch} alt='Torch' width={120} height={120} className='rounded-lg shadow-lg' />
                            </a>
                            <p className='p-2 font-semibold'>Torches</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about LED, Lights?&type=phone_number&app_absent=0">

                                <img src={led} alt='LED' width={120} height={120} className='rounded-lg shadow-lg' />
                            </a>
                            <p className='p-2 font-semibold'>LED, Lights</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pb-10 md:p-4 mx-5 grid grid-cols-1 sm:grid-cols-2 gap-6'>

                <div className='pt-4 pb-4 rounded-lg shadow-lg bg-gray-200 w-full'>
                    <p className='flex items-center justify-center text-2xl text-[#5a116b] font-semibold pb-4'>Speakers</p>
                    <div className='flex items-center justify-center text-[#5a116b]'>
                        <div className='grid grid-cols-2 md:grid-cols-4 items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Home theatre?&type=phone_number&app_absent=0">

                                    <img src={HT} alt='Home-Theatre' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 text-sm font-semibold'>Home Theatre</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Speaker box?&type=phone_number&app_absent=0">
                                    <img src={SB} alt='Speaker-Box' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 text-sm font-semibold'>Speaker Box</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Trolley Speaker?&type=phone_number&app_absent=0">
                                    <img src={TS} alt='Trolley-Speaker' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 text-sm font-semibold'>Trolley Speaker</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Bluethooth Speaker?&type=phone_number&app_absent=0">
                                    <img src={BS} alt='Bluetooth Speaker' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 text-sm font-semibold'>Bluetooth Speaker</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-4 pb-4 rounded-lg shadow-lg bg-gray-200 w-full'>
                    <p className='flex items-center justify-center text-2xl text-[#5a116b] font-semibold pb-4'>Others</p>
                    <div className='flex items-center justify-center text-[#5a116b]'>
                        <div className='grid grid-cols-2 text-sm md:grid-cols-4 items-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Solar panel?&type=phone_number&app_absent=0">
                                    <img src={solar} alt='Solar panel' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 font-semibold'>Solar Panel Kit</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Remote?&type=phone_number&app_absent=0">
                                    <img src={Remote} alt='Remote' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 font-semibold'>Remote</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Stabilizer?&type=phone_number&app_absent=0">
                                    <img src={Stabilizer} alt='Stabilizer' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 font-semibold'>Stabilizer</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about TV and A/C mount?&type=phone_number&app_absent=0">
                                    <img src={WM} alt='Wall-Mount' width={100} height={100} className='rounded-lg shadow-lg' />
                                </a>
                                <p className='p-2 font-semibold'>TV & A/C Mount</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold flex items-center justify-center m-4 md:text-4xl p-4'>DTH</p>
                <div className='p-4 rounded-lg shadow-lg gap-4 overflow-x-auto' ref={(element) => setScroll(element)}>
                    <div className='flex items-center '>
                        {/* <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Sun direct DTH connection?&type=phone_number&app_absent=0"> */}
                        <img src={SD} width={180} height={100} alt="/" />
                        {/* </a> */}
                        {/* <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Tata play DTH connection?&type=phone_number&app_absent=0"> */}
                        <img src={TSk} width={180} height={100} alt="/" />
                        {/* </a> */}
                        {/* <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Airtel DTH connection?&type=phone_number&app_absent=0"> */}
                        <img src={Airtel} width={180} height={100} alt="/" />
                        {/* </a> */}
                        {/* <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want more information about Dish TV D2H DTH connection?&type=phone_number&app_absent=0"> */}
                        <img src={D2H} width={180} height={100} alt="/" />
                        {/* </a> */}
                    </div></div>
            </div>
            <div className='sticky bottom-0 right-0 p-3 flex justify-end'>
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text&type=phone_number&app_absent=0" className="bg-green-500 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 47 47">
                        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                    </svg>
                </a>

            </div>
        </div>
    )
}

export default Electronics