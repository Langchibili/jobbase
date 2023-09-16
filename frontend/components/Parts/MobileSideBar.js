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
import { ArrowCircleRight, ArrowForwardOutlined } from '@mui/icons-material';

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

//   <Link onClick={this.props.handlePageChange} href="/jobs?act=show-all">Jobs</Link></li>
//                 <li><Link onClick={this.props.handlePageChange} href="/jobs?act=edit">Edit Jobs</Link></li>
//                 <li><Link onClick={this.props.handlePageChange} href="/jobs?act=delete">Delete Jobs</Link></li> 
//                 <li><Link onClick={this.props.handlePageChange} href="/jobs?act=add">Add Job</Link></li>
//                 <li><Link onClick={this.props.handlePageChange} href="/drivers">All Drivers</Link></li>
//                 <li><Link onClick={this.props.handlePageChange} href="/car_owners">All CarOwners</Link></li>

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[['Jobs','/jobs?act=show-all'], ['Inbox','/jobs?act=show-all'], ['Inbox','/jobs?act=show-all'], ['Inbox','/jobs?act=show-all']].map((text, index) => (
          <ListItem sx={{marginLeft:2}} key={text} disablePadding>
            <Link onClick={props.handlePageChange} href={text[1]}>
              <ListItemIcon>
                <ArrowCircleRight />
              </ListItemIcon>
              </Link>
              <Link onClick={props.handlePageChange} href={text[1]}>
              <ListItemText primary={text[0]} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment >
          <div onClick={toggleDrawer('left', true)} style={{backgroundColor: 'transparent',backgroundImage:'url("/menu-icon-img.png")',backgroundSize: 'cover'}} className="nav-header"></div>
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
