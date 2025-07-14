import React from 'react'
// import Pamp from "../assets/css/Diwali/pamp1.png"
// import p6 from "../assets/css/Diwali/pam6.gif"
// import Carousel from './Carousel'
import HPage from "../assets/css/New Year/kalyana.svg"
// import P1 from "../assets/css/New Year/elec.png"
// import P2 from "../assets/css/New Year/9w bulb.jpg"
// import P3 from "../assets/css/New Year/2024.jpg"
// import P4 from "../assets/css/New Year/NEW YEAR.png"
// import H1 from "../assets/css/New Year/HomePg (1).png";
// import H2 from "../assets/css/New Year/HomePg (2).png";
// import H3 from "../assets/css/New Year/HomePg (3).png";
// import H4 from "../assets/css/New Year/HomePg (4).png";
// import H5 from "../assets/css/New Year/HomePg (5).png";
import { Helmet } from 'react-helmet-async'
import cooking_main from "../assets/css/cooking/main.png";
import price_pool from "../assets/css/cooking/price_pool.png";
import DiwaliP1 from "../assets/css/Diwali Prize winners/Prize 1.heic"
import DiwaliP2 from "../assets/css/Diwali Prize winners/Prize 2.heic"
import DiwaliP3 from "../assets/css/Diwali Prize winners/Prize 3.heic"
// import Pongal1 from '../assets/css/pongal1.png'
// import Pongal2 from '../assets/css/pongal2.png'
// import Pongal3 from '../assets/css/pongal3.png'
const Home = () => {

  return (
    <>
      <Helmet>
        <title>Akshaya Home Appliances</title>
        <meta name="description" content="Best home appliances in Tamil Nadu. Special offers on kitchen, electronics and more!" />
        <meta name="keywords" content="home appliances, akshaya, sathy, diwali offers, pongal, new year" />
        <meta name="author" content="Akshaya Home Appliances" />

        <meta property="og:title" content="Akshaya Home Appliances - Official Site" />
        <meta property="og:description" content="Check out the latest Diwali and Pongal offers. Visit our store or shop online now!" />
        <meta property="og:image" content="https://akshayahomeappliances.in/logo.png" />
        <meta property="og:url" content="https://akshayahomeappliances.in/" />

        <meta name="twitter:title" content="Akshaya Home Appliances - Official Site" />
        <meta name="twitter:description" content="Check out our 2024 festival deals on home appliances!" />
        <meta name="twitter:image" content="https://akshayahomeappliances.in/logo.png" />
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

        <div className='p-0 m-0'>
          <img src={cooking_main} alt='Cooking Contest' className='w-screen h-full rounded-t-lg block' loading='lazy' />
          <img src={price_pool} alt='Cooking Contest' className='w-screen h-full rounded-b-lg block' loading='lazy' />
        </div>


        <div className='lg:flex justify-content-center align-items-center lg:gap-[10px]'>
          <div className="max-w-4xl lg:w-[50%] mx-auto p-6  shadow-lg rounded-lg mt-6 text-white-900 mx-[10px] lg:me-[0px] border border-white border-1">
            <h1 className="text-xl md:text-3xl font-bold text-center text-white-700 mb-6">
              அக்ஷயாவின் சூப்பர் ஷெஃப் போட்டி 2025 – விதிமுறைகள் மற்றும் நிபந்தனைகள்
            </h1>

            <div className="space-y-4 text-[12px] md:text-[16px] leading-relaxed">
              <p><strong>தேதி:</strong> 27 ஜூலை 2025 (ஞாயிற்றுக்கிழமை)</p>
              <p><strong>இடம்:</strong> அக்ஷயா ஹோம் அப்லையன்சஸ், அரியப்பம்பாளையம், சத்தியமங்கலம்</p>

              <h2 className="md:text-xl font-semibold mt-4">பொதுவான வழிகாட்டிகள்</h2>
              <ul className="list-disc ml-6">
                <li>பதிவுக்கட்டணம்: ₹299 (அப்ரன், சான்றிதழ் மற்றும் ரிட்டர்ன் கிப்ட் உட்பட)</li>
                <li>கடைசி பதிவு தேதி: 25 ஜூலை 2025</li>
              </ul>

              <h2 className="md:text-xl font-semibold mt-4">பங்கேற்பு தகுதிகள்</h2>
              <ul className="list-disc ml-6">
                <li>பங்கேற்பாளர்கள் 18 வயதிற்கு மேற்பட்டவராக இருக்க வேண்டும்</li>
                <li>செய்முறை சமையல் அனுபவமில்லாதவர்கள் பங்கேற்கலாம் (தொழில்முறை ஷெஃப்கள் தேவையில்லை)</li>
                <li>ஒவ்வொரு பங்கேற்பாளரும் ஒரு புதிய கீரை/மிளட் அடிப்படையிலான உணவை வீட்டிலேயே தயார் செய்து கொண்டுவர வேண்டும்</li>
              </ul>

              <h2 className="md:text-xl font-semibold mt-4">போட்டி விதிமுறைகள்</h2>
              <ol className="list-decimal ml-6">
                <li>அனைத்து உணவுகளும் வீட்டில் தயார் செய்யப்பட்டிருக்க வேண்டும் – இடத்திலேயே சமைக்க அனுமதியில்லை</li>
                <li>பங்கேற்பாளர்கள் தங்களின் சொந்த பளாக்கள், பவுல்கள் மற்றும் பரிமாறும் பாத்திரங்களை கொண்டு வர வேண்டும்</li>
                <li>முதன்மையான பொருளாக மிளட் (சாமை, கேழ்வரகு, தினை, வரகு, குதிரைவாலி, போன்றவை) இருக்க வேண்டும்</li>
                <li>
                  மதிப்பீடு அளவுகள்:
                  <ul className="list-disc ml-6">
                    <li>சுவை</li>
                    <li>சுகாதாரம்</li>
                    <li>காண்பித்தல்</li>
                    <li>படைப்பாற்றல்</li>
                    <li>விளக்கம்</li>
                  </ul>
                </li>
                <li>Judges முடிவு இறுதியானது</li>
                <li>பங்கேற்பாளர்கள் தங்கள் பாத்திரங்கள் மற்றும் தனிப்பட்ட பொருட்களை பாதுகாப்பது அவர்களின் பொறுப்பு</li>
              </ol>

              <h2 className="md:text-xl font-semibold mt-4">பரிசுகள் மற்றும் மதிப்பீடு</h2>
              <ul className="list-disc ml-6">
                <li>வெற்றியாளருக்கு ₹10,000 மதிப்புள்ள கிச்சன் அப்பிளையன்ஸ்</li>
                <li>அனைத்து பங்கேற்பாளர்களுக்கும் ரிட்டர்ன் கிப்ட் + பங்கேற்பு சான்றிதழ்</li>
                <li>போட்டிக்குப் பிறகு பரிசளிப்பு விழா உடனடியாக நடைபெறும்</li>
              </ul>

              <h2 className="md:text-xl font-semibold mt-4">மற்ற நிபந்தனைகள்</h2>
              <ul className="list-disc ml-6">
                <li>பதிவு கட்டணம் திரும்பப்பெற முடியாது</li>
                <li>பங்கேற்பாளர்கள் நேரத்தில் நிகழ்வில் பங்கேற்க வேண்டும்</li>
                <li>ஒழுங்கை மீறுபவர்கள் நீக்கப்படுவர்</li>
                <li>மேலும் விளக்கங்களுக்கு, நிகழ்ச்சி ஒருங்கிணைப்பு குழுவை தொடர்புகொள்ளலாம்</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl lg:w-[50%] mx-auto p-6 text-gray-800 bg-white shadow-lg rounded-lg mt-6 lg:me-[10px] mx-[10px] lg:ms-[0px]">
            <h1 className="text-xl md:text-3xl font-bold text-center text-black-700 mb-6">
              Akshaya-vin Super Chef Contest 2025 – Rules & Regulations
            </h1>

            <div className="space-y-4 text-[12px] md:text-[16px] leading-relaxed">
              <p><strong>Date:</strong> 27th July 2025 (Sunday)</p>
              <p><strong>Venue:</strong> Akshaya Home Appliances, Ariyapapampalayam, Sathyamangalam</p>

              <h2 className="md:text-xl font-semibold mt-4">General Guidelines</h2>
              <ul className="list-disc ml-6">
                <li>Registration Fee: ₹299 (Includes apron , certificate & return gift)</li>
                <li>Last Date to Register: 25th July 2025</li>
              </ul>

              <h2 className="md:text-xl font-semibold mt-4">Participation Criteria</h2>
              <ul className="list-disc ml-6">
                <li>Participants must be 18 years or older</li>
                <li>Open to home cooks and food enthusiasts</li>
                <li>Each participant must bring one innovative millet-based dish prepared at home for display and tasting</li>
              </ul>

              <h2 className="md:text-xl font-semibold mt-4">Contest Rules</h2>
              <ol className="list-decimal ml-6">
                <li>All dishes must be prepared at home – on-the-spot cooking is not allowed</li>
                <li>Participants must bring their own serving utensils, bowls, and plates</li>
                <li>The dish must feature millets as the primary ingredient (e.g. samai, ragi, foxtail millet, etc.)</li>
                <li>
                  Judging will be based on:
                  <ul className="list-disc ml-6">
                    <li>Taste</li>
                    <li>Hygiene</li>
                    <li>Presentation</li>
                    <li>Creativity</li>
                    <li>Explanation of the dish</li>
                  </ul>
                </li>
                <li>The decision of the judges will be final</li>
                <li>Participants are responsible for keeping their utensils and items safe throughout the event</li>
              </ol>

              <h2 className="md:text-xl font-semibold mt-4">Prizes & Judging</h2>
              <ul className="list-disc ml-6">
                <li>₹10,000 worth of kitchen appliance for the Title Winner</li>
                <li>Return gift worth ₹500 + Certificate of Participation for all Participants</li>
                <li>Award Ceremony will be held immediately after judging</li>
              </ul>

              <h2 className="md:text-xl font-semibold mt-4">Other Conditions</h2>
              <ul className="list-disc ml-6">
                <li>Registration fees are non-refundable</li>
                <li>Participants must report on time</li>
                <li>Any violation of rules or misconduct may lead to disqualification</li>
                <li>For assistance, participants may contact the organizing team at the venue</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center gap-2 mt-3">
          <p className="lg:text-[24px] md:text-[32px] text-[14px] font-extrabold text-white flex lg:items-center gap-2 mx-[6px]">
            🍽️ <span className="text-purple-300">For Participation in Super Chef Contest</span>
          </p>
<div className='flex items-center justify-center '>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfrAHSdctR-hKEUPytm7azlw0sfY6ceqN7IN07yT8VELMKc7Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-[10px] lg:mt-0 text-white font-bold px-3 py-2 lg:px-6 lg:py-3 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 lg:text-lg"
          >
            ✨ <span className="drop-shadow-sm">Register Now</span>
          </a>
          </div>
        </div>

        <div>
          <a href="https://wa.me/919600957373?text=டும்%20டும்%20மேள%20ஆப்பர்....%20%0A%0A%20உங்கள்%20அக்ஷயா%20ஹோம்%20அப்ளையன்ஸ்-யில்%20%0A%0A%20மொத்தம்%2025%20கல்யாண%20சீர்வரிசை%20பொருட்கள்%20வெறும்%20ருபாய்.100001/-%20மட்டுமே...%0A%0A%20%20%20சீர்வரிசை%20பொருட்கள்%20%0A%20-----------------------------%0A%20மர%20கட்டில்%20%2075*%2060%20(தேக்கு)%20%20-%201%0A%20மெத்தை%20%2075*60%20-%201%0A%20மெத்தை%20விரிப்பு%20-%201%20%20%20%20%0A%20தலையணை%20-%202%0A%20மர%20பீரோ%20-%201%0A%20ட்ரெஸ்ஸிங்%20டேபிள்%20+%20%20ஸ்டூல்%20-%202%0A%20PREETHI%20/%20BUTTERFLY%20மிக்ஸி%20-%201%0A%20BUTTERFLY%20கிரைண்டர்%20-%201%0A%203L,%205L,%207.5L%20குக்கர்%20-%203%0A%20டைனிங்%20டேபிள்%20+%204%20CHAIRS%20-%205%0A%20PIGEON%203%20BURNER%20அடுப்பு%20+%20(HOSE%20,%20LIGHTER%20,%20CYLINDER%20STAND)%20-%202%0A%20டேபிள்%20பேன்%20-%201%0A%20வாஷிங்%20மெஷின்%20டாப்%20லோடு-%201%0A%20பிரிட்ஜ்%20-1%0A%20%2032%20INCH%20ANDROID%20LED%20TV%20-%201%0A%20காமாட்சி%20விளக்கு%20-%201%0A%20%0A%20தொடர்புக்கு%20:%209865974107%0A%20%0A%20மின்னஞ்சல்%20-%20akshayahomeappliancesathy@gmail.com%0A%20%0A%20Instagram:%20[akshaya_home_appliances](https://www.instagram.com/akshaya_home_appliances?igsh=OXk3dTR3MDVzcmI1)%0A%20%0A%20Website:%20[www.akshayahomeappliances.in](https://www.akshayahomeappliances.in)" target="_blank" rel="noreferrer">
            <img src={HPage} alt='Home page' className='w-full h-full rounded-lg' loading='lazy' />
          </a>
        </div>
        {/* <div>
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
        </div> */}
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
        {/* <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text&type=phone_number&app_absent=0" className="bg-green-500 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 47 47">
            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
          </svg>
        </a> */}

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfrAHSdctR-hKEUPytm7azlw0sfY6ceqN7IN07yT8VELMKc7Q/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black font-bold text-lg px-6 py-3 text-center rounded-full shadow-lg border-4 border-dashed border-pink-600 animate-bounce hover:animate-none hover:bg-[#6d116b] hover:border-[#6d116b] hover:text-white transition-all duration-300"
        >
          🍛 Join the Super Chef Contest – Register Now!
        </a>

      </div>
    </>
  )
}

export default Home;