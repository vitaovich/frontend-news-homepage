import Nav from '@/components/nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className="flex flex-col justify-center m-4 space-y-8 font-inter xl:w-3/4">
        {/* NavBar Section */}
        <Nav></Nav>
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Main Area */}
          <div className='md:w-2/3'>
            <Image
              alt='top laptops'
              src='/images/image-web-3-mobile.jpg'
              width={686}
              height={500}
              className='md:hidden'
            />
            <Image
              alt='top laptops'
              src='/images/image-web-3-desktop.jpg'
              width={1460}
              height={600}
              className='hidden md:block'
            />
            <div className="flex flex-col md:flex-row md:mt-8">
              <div className='md:w-1/2'>
                <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
              </div>
              <div className='md:w-1/2 md:space-y-8'>
                <p className="text-darkGrayishBlue">
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <div className="bg-softRed text-offWhite py-2 px-6 w-1/2 uppercase text-center tracking-widest">Read more</div>
              </div>
            </div>
          </div>
          {/* Articles section */}
          <div className="flex flex-col bg-veryDarkBlue p-4 md:w-1/3">
            <h1 className="text-softOrange text-3xl">New</h1>
            <div className="grid grid-cols-1 divide-y divide-darkGrayishBlue ">
              <div className='my-4'>
                <h2 className="text-offWhite text-xl font-bold">Hydrogen VS Electric Cars</h2>
                <p className="text-grayishBlue">Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <div className='my-4'>
                <h2 className="text-offWhite text-xl font-bold">The Downsides of AI Artistry</h2>
                <p className="text-grayishBlue">What are the possible adverse effects of on-demand AI image generation?</p>
              </div>
              <div className='my-4'>
                <h2 className="text-offWhite text-xl font-bold">Is VC Funding Drying Up?</h2>
                <p className="text-grayishBlue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Topics section */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-2">
          <div className="flex flex-row md:w-1/3">
            <Image
              alt='retro pcs'
              src='/images/image-retro-pcs.jpg'
              width={200}
              height={254}
              className='w-1/4'
            />
            <div className="flex flex-col ml-6 space-y-2">
              <h1 className="text-grayishBlue text-3xl">01</h1>
              <h2 className="text-veryDarkBlue text-xl font-bold">Reviving Retro PCs</h2>
              <p className="text-grayishBlue">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="flex flex-row md:w-1/3">
            <Image
              alt='top laptops'
              src='/images/image-top-laptops.jpg'
              width={200}
              height={254}
              className='w-1/4'
            />
            <div className="flex flex-col ml-6 space-y-2">
              <h1 className="text-grayishBlue text-3xl">02</h1>
              <h2 className="text-veryDarkBlue text-xl font-bold">Top 10 Laptops of 2022</h2>
              <p className="text-grayishBlue">Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="flex flex-row md:w-1/3">
            <Image
              alt='gaming growth'
              src='/images/image-gaming-growth.jpg'
              width={200}
              height={254}
              className='w-1/4'
            />
            <div className="flex flex-col ml-6 space-y-2">
              <h1 className="text-grayishBlue text-3xl">03</h1>
              <h2 className="text-veryDarkBlue text-xl font-bold">The Growth of Gaming</h2>
              <p className="text-grayishBlue">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
