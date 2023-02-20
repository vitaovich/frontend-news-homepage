const Article: React.FC<{ title: string, content: string }> = (props) => {
    return (
        <div className='my-4'>
            <h2 className="text-offWhite text-xl font-bold">{props.title}</h2>
            <p className="text-grayishBlue">{props.content}</p>
        </div>
    )
}

export default Article