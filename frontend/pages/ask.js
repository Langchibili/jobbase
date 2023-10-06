import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import React from 'react';
import CopyAndWhatsAppButtons from '@/components/Includes/CopyAndWhatsAppButtons';

export default function Ask() {
    return (
    <>
    <UpAndBackButton/>
    <CopyAndWhatsAppButtons buttonText="Text Us On WhatsApp" info={<>To get help or ask anything about our app, please send a whatsapp message or call this number on whatsapp: <strong><span id="copyNumber">+260954816277</span></strong></>}/>
    </>
  )
}