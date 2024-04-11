import './Banner.css'
import { TBanner } from "../../types/DataTypes"
import { Card } from "../Card/Card"
import { cardCondition } from "../Card/condition"


interface Props {
    banner: TBanner[]
}

export const Banner = ({banner}:Props) => {

  return (
    <div className='banner'>
        {banner.map((item, index) => (
            <form key={index} action={item.href} className="banner-item">
                <Card 
                index={index} 
                className={'banner-card'} 
                content={item.content} 
                title={item.title}
                position={cardCondition.card}
                img={item.img}
                />
            </form>
        ))}
        
    </div>
  )
}
