import { useState } from 'react'
import { fetchFirst10Artworks } from '../api';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [article, setArticle]= useState({});
  fetchFirst10Artworks().then((articles)=>{
    console.log(articles)
    setArticle(articles);
    console.log(article[0].artistDisplayBio)
  })

  return (
    <>
      <p className="read-the-docs">
        {article[0].artistDisplayBio}
      </p>
    </>
  )
}

export default App
