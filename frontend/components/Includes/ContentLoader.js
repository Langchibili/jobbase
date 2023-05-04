import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function ContentLoader(props) {
  return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80%', height: '80%' }}>
    <CircularProgress color="secondary" disableShrink /><p>{props.text? props.text: ''}</p>
  </div>
  </div>);
}