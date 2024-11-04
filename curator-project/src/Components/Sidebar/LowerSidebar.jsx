import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

const LowerSidebar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (<>
    <ListItemButton onClick={handleClick} >
        <ListItemText primary="Museum" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary='V & A' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Cleveland Museum of Art" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
    );
};

export default LowerSidebar;