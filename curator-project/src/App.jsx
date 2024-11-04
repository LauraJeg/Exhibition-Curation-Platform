
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Exhibition from './Components/Pages/Exhibition';
import About from './Components/Pages/About';
import Sidebar from './Components/Sidebar/Sidebar';
import Grid from '@mui/material/Grid2';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
<>
<Grid container>
         <Routes>
      <Route
            element={<>
                    <Sidebar />
                <Outlet />
                </>
            }
          >
 
            <Route path="/" element={<Home/>} />
            <Route path="/exhibition" element={<Exhibition/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/home" element={<Home/>} />
            </Route>
        </Routes>
        </Grid>
        </>
);
};

export default App
