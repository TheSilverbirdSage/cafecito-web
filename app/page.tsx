import Image from "next/image";
import Navbar from '@/components/Navbar'
import TextBubble from '@/components/Textbubble'
import image from "@/images/phone1.png"
import image2 from "@/images/getshort.png"
import image3 from "@/images/advancedtal.png"
import image4 from "@/images/watchshare.png"

export default function Home() {
  return (
    <main>
      <div className="bg-orange-50">
      <Navbar />
     <div className='relative p-16 text-center mt-2 lg:mt-10'>
      <h1 className="text-2xl lg:text-6xl lg:mb-4 font-bold whitespace-nowrap">Personalized videos from </h1>
      <h1 className="text-2xl lg:text-6xl lg:mb-4 font-bold whitespace-nowrap">your favorite hispanic </h1>
      <h1 className="text-2xl lg:text-6xl mb-4 font-bold whitespace-nowrap">influencers! </h1>
     <p className="text-sm md:text-2xl lg:text-2xl tracking-wide ">Be the first to know about the newest stars and best deals on Cafecito.</p>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-20">
      <input type="email" placeholder="Email Address" className="lg:w-1/2 py-2 px-4 border border-black rounded"/>
      <button className="bg-orange-300 hover:bg-orange-200 text-black py-2 px-4 rounded"> Get started</button>
     </div>
     </div>
     {/* What is Cafetico*/}
     <div className="bg-orange-200 p-16">
      <div className="relative p-10 text-center mt-2">
       {/* <p className="text-2xl lg:text-6xl whitespace-nowrap">What is Cafetico ?</p> */}
       <TextBubble
  message="What is Cafecito ? "
  bgColor="bg-white"
  textColor="text-black"
  textSize="text-xl"
  maxWidth="max-w-xl"
  alignment="center"
  arrowPosition="bottom"
  arrowSize={20}
/>


        {/* Phone And Text*/}
        <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        {/* Image (Left on large screens, below text on mobile) */}
        <div className="lg:w-1/2 p-4 mb-4 lg:mb-0 ">
          <Image
            src={image}
            alt="Image"// Adjust width and height
            height={600}
          />
        </div>

        {/* Text content (Right on large screens, above image on mobile) */}
        <div className="text-center lg:text-left lg:w-1/2 p-4 lg:mt-40">
          <p className="text-lg lg:text-3xl whitespace-nowrap tracking-wide">
          Cafecito connects you to your <br /> favorite LatinX/Hispanic <br /> celebrities en español o inglés. <br /> Our star-studded roster features <br /> fútbol players, novela stars, radio <br /> legends, comedians, musicians,<br /> influencers, and more. . 
          </p>
        </div>
      </div>
    </div>
      </div>
     </div>

     {/* Get short vidoes */}
     <div>
     <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        {/* Image (Left on large screens, below text on mobile) */}
        <div className="lg:w-1/2 p-4 mb-4 lg:mb-0 ">
          <Image
            src={image2}
            alt="Image"// Adjust width and height
            height={500}
          />
        </div>

        {/* Text content (Right on large screens, above image on mobile) */}
        <div className="text-center justify-between lg:text-left lg:w-1/2 p-4 lg:mt-20">
          <h1 className="text-6xl lg:text-7xl font-bold mb-5">Get short <br /> videos</h1>
          <p className="text-lg">
          Give your familia the gift they’ll <br/> always remember through a <br/> personalized video. In-screen video <br/> recording allows you to be up close <br/> and personal - like video chatting <br/> with a friend! 
          </p>
        </div>
      </div>
    </div>
     </div>

     {/* Advanced talent search */}
     <div className="p-10">
      <div className="container mx-auto p-4 mt-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">

          {/* Text content (Right on large screens, above image on mobile) */}
        <div className="text-center lg:text-left lg:w-1/2 p-4 ml-3 lg:mt-40">
          <h1 className="text-6xl lg:text-7xl font-bold mb-5">Advanced <br/> Talent <br/> Search </h1>
          <p className="text-lg">
          Have someone specific in mind? <br/> Use our advanced talent search to <br/> find exactly who you are looking for.  
          </p>
        </div>
        {/* Image (Left on large screens, below text on mobile) */} 
        <div className="lg:w-1/2 p-4 mb-4 lg:mb-0 ">
          <Image
            src={image3}
            alt="Image"// Adjust width and height
            height={500}
          />
        </div>
        </div>
      </div>
     </div>

     {/* Watch & share */}
     <div>
     <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        {/* Image (Left on large screens, below text on mobile) */}
        <div className="lg:w-1/2 p-4 mb-4 lg:mb-0 ">
          <Image
            src={image4}
            alt="Image"// Adjust width and height
            height={500}
          />
        </div>

        {/* Text content (Right on large screens, above image on mobile) */}
        <div className="text-center justify-between lg:text-left lg:w-1/2 p-4 lg:mt-40">
          <h1 className="text-5xl lg:text-7xl font-bold mb-5">Watch &<br /> Share</h1>
          <p className="text-lg">
          Show off your custom video by <br /> sharing it on social media with your <br /> friends and family!  
          </p>
        </div>
      </div>
    </div>
     </div>

     {/* Download app */}
     <div className="bg-orange-50">
     <div className='relative p-16 text-center mt-2 lg:mt-10'>
      <h1 className="text-4xl lg:text-6xl lg:mb-4 lg:mt-10 font-bold whitespace-nowrap">Donwload our app</h1>
      <h1 className="text-4xl lg:text-6xl mb-4 font-bold whitespace-nowrap">to get started.  </h1>
     <p className="text-sm md:text-2xl lg:text-2xl tracking-wide ">Get instant access to watch & shop at thousands of <br />  brands—online or in-store.</p>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-20">
      <input type="email" placeholder="Phone number" className="lg:w-1/2 py-2 px-4 border border-black rounded"/>
      <button className="bg-orange-300 hover:bg-orange-200 text-black py-2 px-4 rounded">Send me the link</button>
     </div>
     </div>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-20 bg-orange-50">
     <button className="bg-red-700 hover:bg-red-400 text-white py-2 px-4 rounded">Get on App Store</button>
     <button className="bg-red-700 hover:bg-red-400 text-white py-2 px-4 rounded">Get on Google Play</button>
     </div>
    </main>
  );
}
