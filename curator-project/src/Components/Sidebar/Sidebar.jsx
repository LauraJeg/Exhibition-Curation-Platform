import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { mainSidebarItems,  categoriesSidebarItems} from './consts/sidebarItems';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();
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
        {mainSidebarItems.map(({id, label, route}) => (
          <ListItem button="true" key={id}  onClick={() => navigate(route)} >
            <ListItemButton>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
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
      </List>
    </Drawer>
    );
};

export default Sidebar;