import './App.css'
import { Banner } from "./components/Banner/Banner"
import { NewsBlock } from "./components/News/NewsBlock/NewsBlock"
import { headerBanner } from './data/headerBanner'
import { news } from "./data/news"
import { newsBar } from "./data/newsBar"

function App() {

  return (
    <>
      <header>
        <NewsBlock newsBar={newsBar} news={news}/>
        <Banner banner={headerBanner}/>
      </header>
      <main>

      </main>
      <aside>

      </aside>
    </>
  )
}

export default App
