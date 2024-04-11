import { TNews, TNewsBar } from "../../../types/DataTypes"
import { NewsBar } from "../NewsBar/NewsBar"
import { NewsList } from "../NewsList/NewsList"

interface Props {
    newsBar: TNewsBar[]
    news: TNews[]
}

export const NewsBlock = ({newsBar, news}: Props ) => {
  return (
    <div className="news">
        <NewsBar newsBarArr={newsBar}/>
        <NewsList newsArr={news}/>
    </div>
  )
}
