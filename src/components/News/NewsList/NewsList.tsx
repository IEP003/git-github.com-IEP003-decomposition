import { TNews } from '../../../types/DataTypes'
import { Card } from '../../Card/Card'
import { cardCondition } from '../../Card/condition'
import './NewList.css'

interface Props {
    newsArr: TNews[]
}

export const NewsList = ({newsArr}:Props) => {  
     
  return (
    <div className='news-list'>
        {newsArr.map((item, index) => (
            <Card 
            index={index} 
            className={'news-list-item'} 
            content={item.content} 
            img={item.img}
            position={cardCondition.inline}
            />
        ))}
    </div>
  )
}
