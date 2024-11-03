import { useState, useEffect } from 'react'
import { testBothAPI } from '../api';

import './App.css'

function App() {
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    testBothAPI('picasso').then((res) => {
      setResults(res);
      setIsLoading(false);
    });
  }, []);
  isLoading===false?console.log(results.clevData[0].images):console.log('no')

  return (
    <>

          {isLoading === false? (
            <>
            {results.clevData.map((art) => {
            return (
              <div key={art.id}>
                <h2>{art.title}</h2>
                <img src={art.images?.web?.url} alt={art.title} />
              </div>
            );
          })}
             
              </>):
              <p></p>
          } 
      {/* {results.clevData.length > 0 || results.VAData.length? (
        <>
          {" "}
          {results.clevData.map((art) => {
            return (
              <div key={art.id}>
                <h2>{art.title}</h2>
                <img src={art.images?.web?.url} alt={art.title} />
              </div>
            );
          })} */}
          {/* {results.artObjects.map((result) => {
            return (
              <div key={result.id}>
                <h2>{result.title}</h2>
                <img src={result.webImage.url} alt={result.title} />
              </div>
            );
          })} */}
        </>
  //     ) : (
  //       <p>Nothing to display</p>
  //     )}

  )
}

export default App

{/* <div key={results.clevData[0].id}>
<h2>{results.clevData[0].title}</h2>
<img src={results.clevData[0].images?.web?.url} alt={results.clevData[0].title} />
</div> */}
