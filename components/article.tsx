const Article: React.FC<{ title: string, content: string }> = (props) => {
    return (
        <div className='py-6'>
            <a href="#" className="text-offWhite text-xl font-bold hover:text-softOrange">{props.title}</a>
            <p className="text-grayishBlue">{props.content}</p>
        </div>
    )
}

export default Article