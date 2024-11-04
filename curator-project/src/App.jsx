
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Exhibition from './Components/Pages/Exhibition';
import About from './Components/Pages/About';
import Sidebar from './Components/Sidebar/Sidebar';
import Grid from '@mui/material/Grid2';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <><Grid container>
    <Sidebar />
    <Outlet />
    <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/exhibition" component={Exhibition} />
            <Route path="/about" component={About} />
        </Routes>
  </Grid>
        
        </>
);
};

export default App
