import Image from 'next/image'

export default function Home() {
  return (
    <>

      <div className="flex flex-col m-4 space-y-6">
        <div className="flex flex-row">
          <Image
            alt='logo'
            src='/images/logo.svg'
            width={65}
            height={40}
          />
          <Image
            alt='logo'
            src='/images/icon-menu.svg'
            width={40}
            height={17}
          />
        </div>
        <div className="hidden flex flex-row">
          Home
          New
          Popular
          Trending
          Categories
        </div>
        <Image
          alt='top laptops'
          src='/images/image-web-3-mobile.jpg'
          width={686}
          height={500}
        />
        <h1 className="text-xl">The Bright Future of Web 3.0?</h1>
        <p className="text-darkGrayishBlue">
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
          But is it really fulfilling its promise?
        </p>
        <div className="bg-softRed text-offWhite py-4 px-6 w-1/2 uppercase">Read more</div>
        <div className="flex flex-col bg-veryDarkBlue p-4">
          <h1 className="text-softOrange text-2xl">New</h1>
          <div className="grid grid-cols-1 divide-y divide-darkGrayishBlue">
            <div>
              <h2 className="text-offWhite text-lg">Hydrogen VS Electric Cars</h2>
              <p className="text-grayishBlue">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div>
              <h2 className="text-offWhite text-lg">The Downsides of AI Artistry</h2>
              <p className="text-grayishBlue">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div>
              <h2 className="text-offWhite text-lg">Is VC Funding Drying Up?</h2>
              <p className="text-grayishBlue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <Image
            alt='retro pcs'
            src='/images/image-retro-pcs.jpg'
            width={200}
            height={254}
          />
          <div className="flex flex-col">
            <h1 className="text-grayishBlue text-3xl">01</h1>
            <h2 className="text-veryDarkBlue text-xl">Reviving Retro PCs</h2>
            <p className="text-grayishBlue">What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="flex flex-row">
          <Image
            alt='top laptops'
            src='/images/image-top-laptops.jpg'
            width={200}
            height={254}
          />
          <div className="flex flex-col">
            <h1 className="text-grayishBlue text-3xl">02</h1>
            <h2 className="text-veryDarkBlue text-xl">Top 10 Laptops of 2022</h2>
            <p className="text-grayishBlue">Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex flex-row">
          <Image
            alt='gaming growth'
            src='/images/image-gaming-growth.jpg'
            width={200}
            height={254}
          />
          <div className="flex flex-col">
            <h1 className="text-grayishBlue text-3xl">03</h1>
            <h2 className="text-veryDarkBlue text-xl">The Growth of Gaming</h2>
            <p className="text-grayishBlue">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </>
  )
}
