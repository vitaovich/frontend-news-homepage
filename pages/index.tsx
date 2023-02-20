import HeroContainer from '@/components/heroContainer'
import Nav from '@/components/nav'
import Topic from '@/components/topic'
import { useState } from 'react'

export default function Home() {
  const [topics, setTopics] = useState(
    [
      {
        imagePath: '/images/image-retro-pcs.jpg', 
        imageAlt: 'retro pcs', 
        header: '01', 
        title: 'Reviving Retro PCs', 
        content: 'What happens when old PCs are given modern upgrades?'
      },
      {
        imagePath: '/images/image-top-laptops.jpg', 
        imageAlt: 'top laptops', 
        header: '02', 
        title: 'Top 10 Laptops of 2022', 
        content: 'Our best picks for various needs and budgets.'
      },
      {
        imagePath: '/images/image-gaming-growth.jpg', 
        imageAlt: 'gaming growth', 
        header: '03', 
        title: 'The Growth of Gaming', 
        content: 'How the pandemic has sparked fresh opportunities.'
      },
    ]
  )

  return (
    <div className='flex flex-col items-center'>
      <div className="flex flex-col justify-center m-4 space-y-8 font-inter xl:w-3/4">
        <Nav />
        <HeroContainer />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            topics.map((topic) => (
              <Topic key={topic.header} imagePath={topic.imagePath} imageAlt={topic.imageAlt} header={topic.header} title={topic.title} content={topic.content} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
