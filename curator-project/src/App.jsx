
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Exhibition from './Components/Pages/Exhibition';
import Artworks from './Components/Pages/Artworks';
import Sidebar from './Components/Navigation/Sidebar';
import Grid from '@mui/material/Grid2';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import TopMenu from './Components/Navigation/TopBar';

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleApplyFilter = (categories) => {
    setSelectedCategories(categories);
  };
  
  return (
<>
<Grid container>
         <Routes>
      <Route
            element={<>
            
                    <Sidebar onApplyFilter={handleApplyFilter} />
                    <TopMenu/>
                <Outlet />
                </>
            }
          >
 
            <Route path="/" element={<Home/>} />
            <Route path="/exhibition" element={<Exhibition/>} />
            <Route path="/artworks" element={<Artworks selectedCategories={selectedCategories}/>} />
            <Route path="/home" element={<Home/>} />
            </Route>
        </Routes>
        </Grid>
        </>
);
};

export default App
