import { ReactNode } from "react"
import './Card.css'

interface TCard { 
    img?: string,
    title?: string,
    content?: string, 
    children?: ReactNode,
    href?: string,
    className?: string,
    index?: number,
    active?: boolean,
    position?: string
}

export const Card = ({className, index, content, title, active, img, position}: TCard) => {
  return (
    <div className={position}>
        {img? <img className={`${className+'-img'}`} src={img} alt="" /> : ''}
        {title? <h2 key={index} className={`${className} ${active? active:''}`}>{title}</h2>: ''}
        {content? <div key={index} className={`${className} ${active? active:''}`}>{content}</div>: ''}
    </div>
    
  )
}
