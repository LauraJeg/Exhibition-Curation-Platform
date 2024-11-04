import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { museumList } from './consts/sidebarItems';
import CommonCheckbox from '../common/CommonCheckbox';

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
          <CommonCheckbox arr={museumList}/>
      </Collapse>
    </>
    );
};

export default LowerSidebar;