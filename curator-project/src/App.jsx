
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Exhibition from './Components/Pages/Exhibition';
import Artworks from './Components/Pages/Artworks';
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
            <Route path="/artworks" element={<Artworks/>} />
            <Route path="/home" element={<Home/>} />
            </Route>
        </Routes>
        </Grid>
        </>
);
};

export default App
