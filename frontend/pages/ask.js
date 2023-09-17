import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import React from 'react';
import Alert from '@mui/material/Alert'; 
export default function Ask() {
    return (
    <>
    <UpAndBackButton/>
    <Alert severity="info">this page is under construction, it will be released on next app update</Alert>
    </>
  )
}