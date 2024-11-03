import { useState, useEffect } from 'react'
import { clevApiTest, testMetQueryAPI } from '../api';

import './App.css'

function App() {
  useEffect(() => {
    testMetQueryAPI()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
      // clevApiTest()
  }, []);

  return (
    <>
      <p className="read-the-docs">
        hello
      </p>
    </>
  )
}

export default App
