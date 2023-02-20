import Image from 'next/image'
import ArticleContainer from '@/components/articleContainer'

const HeroContainer = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className='md:col-span-2'>
                <div className='md:relative md:h-1/2'>
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
                        fill
                        className='hidden md:block'
                    />
                </div>
                <div className="flex flex-col md:flex-row mt-8">
                    <div className='md:w-1/2'>
                        <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className='md:w-1/2 space-y-6'>
                        <p className="text-darkGrayishBlue">
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <div><a href="#" className="bg-softRed text-offWhite py-3 px-8 w-1/2 uppercase text-center tracking-widest hover:bg-veryDarkBlue">Read more</a></div>
                    </div>
                </div>
            </div>
            <ArticleContainer />
        </div>
    )
}

export default HeroContainer