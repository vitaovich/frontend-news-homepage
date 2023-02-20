import ArticleContainer from '@/components/articleContainer'
import Nav from '@/components/nav'
import Topic from '@/components/topic'
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
          <ArticleContainer></ArticleContainer>
        </div>


        {/* Topics section */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-2">
          <Topic 
          imagePath={'/images/image-retro-pcs.jpg'} 
          imageAlt={'retro pcs'} 
          header={'01'} 
          title={'Reviving Retro PCs'} 
          content={'What happens when old PCs are given modern upgrades?'}
          />
          <Topic 
          imagePath={'/images/image-top-laptops.jpg'} 
          imageAlt={'top laptops'} 
          header={'02'} 
          title={'Top 10 Laptops of 2022'} 
          content={'Our best picks for various needs and budgets.'}
          />
          <Topic 
          imagePath={'/images/image-gaming-growth.jpg'} 
          imageAlt={'gaming growth'} 
          header={'03'} 
          title={'The Growth of Gaming'} 
          content={'How the pandemic has sparked fresh opportunities.'}
          />
        </div>

      </div>
    </div>
  )
}
