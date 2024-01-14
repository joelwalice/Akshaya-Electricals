import React from 'react'
// import Pamp from "../assets/css/Diwali/pamp1.png"
// import p6 from "../assets/css/Diwali/pam6.gif"
// import Carousel from './Carousel'
import HPage from "../assets/css/New Year/kalyana.svg"
import P1 from "../assets/css/New Year/elec.png"
import P2 from "../assets/css/New Year/9w bulb.jpg"
import P3 from "../assets/css/New Year/2024.jpg"
import P4 from "../assets/css/New Year/NEW YEAR.png"
import H1 from "../assets/css/New Year/HomePg (1).png";
import H2 from "../assets/css/New Year/HomePg (2).png";
import H3 from "../assets/css/New Year/HomePg (3).png";
import H4 from "../assets/css/New Year/HomePg (4).png";
import H5 from "../assets/css/New Year/HomePg (5).png";
import { Helmet } from 'react-helmet-async'
import DiwaliP1 from "../assets/css/Diwali Prize winners/Prize 1.heic"
import DiwaliP2 from "../assets/css/Diwali Prize winners/Prize 2.heic"
import DiwaliP3 from "../assets/css/Diwali Prize winners/Prize 3.heic"
import Pongal1 from '../assets/css/pongal1.png'
import Pongal2 from '../assets/css/pongal2.png'
import Pongal3 from '../assets/css/pongal3.png'
const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home Page</title>
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
      <div className='flex flex-col items-center justify-center gap-10'>
        {/* <Carousel /> */}
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 flex items-center rounded-lg justify-between gap-4 w-screen'>
          <img src={p6} alt='/' className='w-full' />
  
            <div className='flex lg:hidden items-center justify-center '><iframe src="https://drive.google.com/file/d/1r8TJu_Iy-YM0T8R5a0zbaLYe_p261nqd/preview" sandbox="allow-forms allow-same-origin allow-scripts" allow="autoplay"  className='min-w-[300px] h-[650px] px-4'></iframe>
          </div> 
          <div className='hidden lg:flex items-center justify-center '><iframe src="https://drive.google.com/file/d/1r8TJu_Iy-YM0T8R5a0zbaLYe_p261nqd/preview" sandbox="allow-forms allow-scripts allow-same-origin" allow="autoplay"  className='min-w-[500px] h-[650px] px-4'></iframe>
          </div>        
            
        </div> */}
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 flex items-center justify-between p-4 gap-5 w-screen'>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=How to claim the Diwali's Lucky Draw Coupon? &type=phone_number&app_absent=0">
            <img src={Pamp} alt="/" className='rounded-lg md:m-6 shadow-gray-700 shadow-lg' />
          </a>
          <div className='flex flex-col items-center p-8 w-full'>
            <h1 className='hidden md:flex text-4xl font-semibold space-between leading-[50px] justify-center '>
              Get a chance to win a  lucky draw contest by grabbing coupon when you purchase products worth ₹10,000 or more this Diwali and receive surprise gifts.
            </h1>
            <h1 className='flex md:hidden text-2xl font-semibold space-between justify-center '>
              Get a chance to win a  lucky draw contest by grabbing coupon when you purchase products worth ₹10,000 or more this Diwali and receive surprise gifts.
            </h1>
          </div>
        </div> */}
        <div>
          <a href="https://wa.me/919600957373?text=டும்%20டும்%20மேள%20ஆப்பர்....%20%0A%0A%20உங்கள்%20அக்ஷயா%20ஹோம்%20அப்ளையன்ஸ்-யில்%20%0A%0A%20மொத்தம்%2025%20கல்யாண%20சீர்வரிசை%20பொருட்கள்%20வெறும்%20ருபாய்.100001/-%20மட்டுமே...%0A%0A%20%20%20சீர்வரிசை%20பொருட்கள்%20%0A%20-----------------------------%0A%20மர%20கட்டில்%20%2075*%2060%20(தேக்கு)%20%20-%201%0A%20மெத்தை%20%2075*60%20-%201%0A%20மெத்தை%20விரிப்பு%20-%201%20%20%20%20%0A%20தலையணை%20-%202%0A%20மர%20பீரோ%20-%201%0A%20ட்ரெஸ்ஸிங்%20டேபிள்%20+%20%20ஸ்டூல்%20-%202%0A%20PREETHI%20/%20BUTTERFLY%20மிக்ஸி%20-%201%0A%20BUTTERFLY%20கிரைண்டர்%20-%201%0A%203L,%205L,%207.5L%20குக்கர்%20-%203%0A%20டைனிங்%20டேபிள்%20+%204%20CHAIRS%20-%205%0A%20PIGEON%203%20BURNER%20அடுப்பு%20+%20(HOSE%20,%20LIGHTER%20,%20CYLINDER%20STAND)%20-%202%0A%20டேபிள்%20பேன்%20-%201%0A%20வாஷிங்%20மெஷின்%20டாப்%20லோடு-%201%0A%20பிரிட்ஜ்%20-1%0A%20%2032%20INCH%20ANDROID%20LED%20TV%20-%201%0A%20காமாட்சி%20விளக்கு%20-%201%0A%20%0A%20தொடர்புக்கு%20:%209865974107%0A%20%0A%20மின்னஞ்சல்%20-%20akshayahomeappliancesathy@gmail.com%0A%20%0A%20Instagram:%20[akshaya_home_appliances](https://www.instagram.com/akshaya_home_appliances?igsh=OXk3dTR3MDVzcmI1)%0A%20%0A%20Website:%20[www.akshayahomeappliances.in](https://www.akshayahomeappliances.in)" target="_blank" rel="noreferrer">
            <img src={HPage} alt='Home page' className='w-full h-full rounded-lg' loading='lazy' />
          </a>
        </div>
        <div>
          <h1 className='md:text-5xl text-xl font-500 px-5 font-semibold flex items-center justify-center'>Pongal Offers - 2024</h1>
        </div>
        <div className='flex items-center justify-center w-screen'>
          <div className='flex items-center justify-center grid grid-cols-2 md:grid-cols-3 md:p-4 px-4 gap-8'>
            <a href="https://wa.me/919600957373?text=Want to know more about Sowbaghya 3 products combo new year offer" target="_blank" rel="noreferrer">
              <img src={Pongal1} alt='Pongal offers' className='rounded-lg' loading='lazy' />
            </a>

            <a href="https://wa.me/919600957373?text=Celebrate%20this%20New%20Year%20with%20Akshaya%20Home%20Appliances%20discount%20offer%20-%20%0A%0A*Details*%0ACrompton%20Immersion%20Heater%20and%20more%20now%20at%20₹2024%20instead%20of%20₹5000.%20%0A%0AVisit%20[www.akshayahomeappliances.in](https://www.akshayahomeappliances.in)%20for%20more%20information.%0A%0A" target="_blank" rel="noreferrer">
              <img src={Pongal2} alt='Pongal offers' className='rounded-lg' loading='lazy' />
            </a>
            <div className='hidden md:block'>
              <a target="_blank" rel="noreferrer" href="https://wa.me/919600957373?text=Celebrate%20this%20New%20Year%20with%20Akshaya%20Home%20Appliances%20discount%20offer%20-%20%0A%0A*Details*%0ABAJAJ%203L%20INDUCTION%20BASE%20COOKER%20,%20TAWA%20%20CELLO%20HOT%20BOX%20now%20at%20₹2024%20instead%20of%20₹3800.%20%0A%0AVisit%20[www.akshayahomeappliances.in](https://www.akshayahomeappliances.in)%20for%20more%20information.%0A%0A" className='' style={{ textAlign: 'center' }}>
                <img src={Pongal3} alt='Pongal offers' className='rounded-lg' style={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }} loading='lazy' />
              </a>
            </div>
          </div>
        </div>
        <div className='p-2 px-2 mx-auto w-[200px] h-[200px] md:hidden'>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more about this limited offer?&typephone_number&app_absent=0" className=''>
            <img src={Pongal3} alt='Pongal offers' className='rounded-lg' loading='lazy' />
          </a>
        </div>
        <div>
          <h1 className='md:text-5xl text-xl font-500 px-5 font-semibold flex items-center justify-center'>New Year Offers - 2024</h1>
        </div>
        <div className=''>
          <div className='grid grid-cols-2 md:grid-cols-3 md:p-4 px-4 gap-8'>

            <a href="https://wa.me/919600957373?text=Want to know more about Sowbaghya 2 products combo new year offer" target="_blank" rel="noreferrer">
              <img src={H1} alt='New year offer 1' className='rounded-lg' loading='lazy' />
            </a>
            <a href="https://wa.me/919600957373?text=Want to know more about Sowbaghya 5 products combo new year offer" target="_blank" rel="noreferrer">
              <img src={H2} alt='New year offer 2' className='rounded-lg' loading='lazy' />
            </a>
            <a href="https://wa.me/919600957373?text=Want to know more about Sowbaghya 2 products combo new year offer" target="_blank" rel="noreferrer">
              <img src={H3} alt='New year offer 3' className='rounded-lg' loading='lazy' />
            </a>
            <a href="https://wa.me/919600957373?text=Want to know more about Sowbaghya 2 products combo new year offer" target="_blank" rel="noreferrer">
              <img src={H4} alt='New year offer 4' className='rounded-lg' loading='lazy' />
            </a>
            <a href="https://wa.me/919600957373?text=Want to know more about Sowbaghya 3 products combo new year offer" target="_blank" rel="noreferrer">
              <img src={H5} alt='New year offer 5' className='rounded-lg' loading='lazy' />
            </a>

            <a href="https://wa.me/919600957373?text=Celebrate%20this%20New%20Year%20with%20Akshaya%20Home%20Appliances%20discount%20offer%20-%20%0A%0A*Details*%0ACrompton%20Immersion%20Heater%20and%20more%20now%20at%20₹2024%20instead%20of%20₹5000.%20%0A%0AVisit%20[www.akshayahomeappliances.in](https://www.akshayahomeappliances.in)%20for%20more%20information.%0A%0A" target="_blank" rel="noreferrer">
              <img src={P3} alt='New year offer 6' className='rounded-lg' loading='lazy' />
            </a>
            <a href="https://wa.me/919600957373?text=Celebrate%20this%20New%20Year%20with%20Akshaya%20Home%20Appliances%20discount%20offer%20-%20%0A%0A*Details*%0ABAJAJ%203L%20INDUCTION%20BASE%20COOKER%20,%20TAWA%20%20CELLO%20HOT%20BOX%20now%20at%20₹2024%20instead%20of%20₹3800.%20%0A%0AVisit%20[www.akshayahomeappliances.in](https://www.akshayahomeappliances.in)%20for%20more%20information.%0A%0A" target="_blank" rel="noreferrer">
              <img src={P4} alt='New year offer 7' className='rounded-lg' loading='lazy' />
            </a>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more about this special offer?&typephone_number&app_absent=0">
              <img src={P1} alt='New year offer 8' className='rounded-lg' loading='lazy' />
            </a>
            <div className='hidden md:block'>
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more about this limited offer?&typephone_number&app_absent=0" className='' style={{ textAlign: 'center' }}>
                <img src={P2} alt='New year offer 9' className='rounded-lg' style={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }} loading='lazy' />
              </a>
            </div>
          </div>
          <div className='p-8 px-8 mx-auto w-[225px] h-[225px] md:hidden'>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text=Want to know more about this limited offer?&typephone_number&app_absent=0" className=''>
              <img src={P2} alt='New year offer 9' className='rounded-lg' loading='lazy' />
            </a>
          </div>
        </div>
        <div>
          <h1 className='md:text-5xl font-500 px-5 font-semibold flex items-center justify-center '>Our Diwali Prize Coupon winners - 2023</h1>
        </div>
        <div className='grid md:grid-cols-3 gap-10 md:p-4 px-4'>
          <img src={DiwaliP1} alt='Diwali Ist prize winner' className='rounded-lg' loading='lazy' />
          <img src={DiwaliP2} alt='Diwali IInd prize winner' className='rounded-lg' loading='lazy' />
          <img src={DiwaliP3} alt='Diwali IIIrd prize winner' className='rounded-lg' loading='lazy' />
        </div>
      </div>
      <div className='sticky bottom-0 right-0 p-3 flex justify-end'>
        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text&type=phone_number&app_absent=0" className="bg-green-500 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 47 47">
            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
          </svg>
        </a>

      </div>
    </>
  )
}

export default Home;