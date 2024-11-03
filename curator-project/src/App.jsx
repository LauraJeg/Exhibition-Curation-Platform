
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Exhibition from './Components/Exhibition';
import About from './Components/About';
import Header from './Components/Header';

const App = () => {
  return (
    <>
        <Routes>
        <Route
          element={
            <>
              <Header />
            </>
          }
        >
            <Route path="/" exact component={Home} />
            <Route path="/exhibition" component={Exhibition} />
            <Route path="/about" component={About} />
            </Route>
        </Routes>
        </>
);
};

export default App
