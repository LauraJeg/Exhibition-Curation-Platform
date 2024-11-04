import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { categoriesSidebarItems} from './consts/sidebarItems';
import { Link} from "react-router-dom";
import LowerSidebar from './LowerSidebar';


const Sidebar = () => {

    const drawerWidth = 150;
    return ( 
      <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#D7CEC7',
          color: '565656'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        
          <ListItem button="true" key={'home'} >
          <Link to='/home'>
            <ListItemButton>
              <ListItemText primary='Home' />
            </ListItemButton>
            </Link>
          </ListItem>

          <Link to='/about'   style={{ textDecoration: "none"}}>
          <ListItem button="true" key={'about'} >
            <ListItemButton>
              <ListItemText primary='About' />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/exhibition'>
          <ListItem button="true" key={'exhibition'} >
            <ListItemButton>
              <ListItemText primary='Your Exhibition' />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        {categoriesSidebarItems.map(({id, label, route}) => (
          <ListItem button="true" key={id} >
            <ListItemButton>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
         <LowerSidebar/>
      </List>
    </Drawer>
    );
};

export default Sidebar;