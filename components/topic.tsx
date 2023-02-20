import Image from 'next/image'

const Topic: React.FC<{ imagePath: string, imageAlt: string, header: string, title: string, content: string }> = (props) => {

  return (
    <div className="flex flex-row">
      <div className='relative w-1/3'>
        <Image
          alt={props.imageAlt}
          src={props.imagePath}
          fill
        />
      </div>
      <div className="flex flex-col ml-6 space-y-2 w-2/3">
        <h1 className="text-grayishBlue text-3xl">{props.header}</h1>
        <a href="#" className="text-veryDarkBlue text-lg hover:text-softRed font-bold">{props.title}</a>
        <p className="text-grayishBlue">{props.content}</p>
      </div>
    </div>
  )
}

export default Topic