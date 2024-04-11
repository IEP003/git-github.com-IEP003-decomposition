import { TNewsBar } from "../../../types/DataTypes"
import { Card } from "../../Card/Card"
import { cardCondition } from "../../Card/condition"
import './NewBar.css'

interface Props {
    newsBarArr: TNewsBar[]
}

export const NewsBar = ({newsBarArr}:Props) => {
  return (

    <div className="news-bar">
        {newsBarArr.map((item, index) => (
            <Card 
            index={index} 
            className={'news-bar-item'} 
            content={item.title} 
            position={cardCondition.inline}
            active={item.active}
            />
        ))} 
    </div>
    )
}
