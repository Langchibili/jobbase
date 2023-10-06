import React from 'react';
import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import CopyAndWhatsAppButtons from '@/components/Includes/CopyAndWhatsAppButtons';

export default function Points() {
    return (
    <>
    <UpAndBackButton/>
    <CopyAndWhatsAppButtons buttonText="Text Us On WhatsApp" info={<>To buy points, please send a whatsapp message or call this number on whatsapp: <strong><span id="copyNumber">+260954816277</span></strong></>}/>
    </>
  )
}
