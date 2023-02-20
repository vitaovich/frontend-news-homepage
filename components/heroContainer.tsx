import Image from 'next/image'
import ArticleContainer from '@/components/articleContainer'

const HeroContainer = () => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-4">
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
                        <a href="#" className="bg-softRed text-offWhite py-2 px-6 w-1/2 uppercase text-center tracking-widest hover:bg-veryDarkBlue">Read more</a>
                    </div>
                </div>
            </div>
            <ArticleContainer />
        </div>
    )
}

export default HeroContainer