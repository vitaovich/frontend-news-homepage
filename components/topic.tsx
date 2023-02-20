import Image from 'next/image'

const Topic: React.FC<{ imagePath:string, imageAlt: string, header: string, title: string, content: string  }> = (props) => {

    return (
        <div className="flex flex-row">
            <Image
              alt={props.imageAlt}
              src={props.imagePath}
              width={200}
              height={254}
              className='aspect-[4/4]'
            />
            <div className="flex flex-col ml-6 space-y-2">
              <h1 className="text-grayishBlue text-3xl">{props.header}</h1>
              <h2 className="text-veryDarkBlue text-xl hover:text-softRed font-bold">{props.title}</h2>
              <p className="text-grayishBlue">{props.content}</p>
            </div>
          </div>
    )
}

export default Topic