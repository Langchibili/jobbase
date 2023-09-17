import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import { AddBox, ArrowCircleRight, ArrowForwardOutlined, CarRental, Delete, DirectionsCar, Edit, Mode, Work } from '@mui/icons-material';
import { Menu } from '@material-ui/icons';
import { Fab } from '@mui/material';
import { useRouter } from 'next/router'

export default function MobileSideBAr(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const renderLinkIcon = (linkName)=>{
        if(linkName === 'Jobs') return <Work/>
        if(linkName === 'Drivers') return <DirectionsCar/>
        if(linkName === 'Car Owners') return <CarRental/>
        if(linkName === 'Create Job') return <AddBox/>
        if(linkName === 'Edit Jobs') return <Edit/>
        if(linkName === 'Delete Jobs') return <Delete/>
  }

  const renderLoggedInLinks = (texts,loggedInUserProfile)=>{
    if(loggedInUserProfile === 'logged-out') return <></>
    if(loggedInUserProfile.type === 'driver'){
        return <></>
    }
    return (<List>
        {texts.map((text, index) => (
        <ListItem key={text[0]} disablePadding onClick={(e)=>{router.push(text[1]); props.handlePageChange(e)}}>
            <ListItemButton>
            <ListItemIcon>
                {renderLinkIcon(text[0])}
            </ListItemIcon>
            <ListItemText primary={text[0]} />
            </ListItemButton>
        </ListItem>
        ))}
    </List>)
}

  const router = useRouter()  // the router stuff
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[['Jobs','/jobs?act=show-all'], ['Drivers','/drivers'], ['Car Owners','/car-owners']].map((text, index) => (
          <ListItem key={text[0]} disablePadding onClick={(e)=>{router.push(text[1]); props.handlePageChange(e)}}>
            <ListItemButton>
              <ListItemIcon>
                {renderLinkIcon(text[0])}
              </ListItemIcon>
              <ListItemText primary={text[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {renderLoggedInLinks([['Create Job','/jobs?act=add'], ['Edit Jobs','/jobs?act=edit'], ['Delete Jobs','/jobs?act=delete']],props.loggedInUserProfile)}
    </Box>
  );

  return (
    <div className="nav-header" style={{backgroundColor: 'transparent',marginTop:5,marginLeft:5}}>
      <React.Fragment >
          <Fab><Menu onClick={toggleDrawer('left', true)} color='secondary'/></Fab>
          {/* <div onClick={toggleDrawer('left', true)} style={{backgroundColor: 'transparent',backgroundImage:'url("/menu-icon-img.png")',backgroundSize: 'cover'}} className="nav-header"></div> */}
          <SwipeableDrawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  )
}


