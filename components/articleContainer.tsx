import { useState } from "react"
import Article from "./article"

const ArticleContainer = () => {
    const [articles, setArticles] = useState<{key: number, title: string, content: string}[]>(
        [
            {key: 1, title: 'Hydrogen VS Electric Cars', content: 'Will hydrogen-fueled cars ever catch up to EVs?'},
            {key: 2, title: 'The Downsides of AI Artistry', content: 'What are the possible adverse effects of on-demand AI image generation?'},
            {key: 3, title: 'Is VC Funding Drying Up?', content: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'},
        ]
    )
    return (
        <div className="flex flex-col bg-veryDarkBlue p-4">
            <h1 className="text-softOrange text-3xl">New</h1>
            <div className="grid grid-cols-1 divide-y divide-darkGrayishBlue ">
                {
                    articles.map((article) => (
                        <Article key={article.key} title={article.title} content={article.content} />
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleContainer