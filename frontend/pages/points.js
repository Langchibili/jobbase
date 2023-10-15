import React from 'react';
import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import CopyAndWhatsAppButtons from '@/components/Includes/CopyAndWhatsAppButtons';

export default function Points() {
    return (
    <>
    <UpAndBackButton/>
    <CopyAndWhatsAppButtons buttonText="Text Us On WhatsApp" info={<>To buy points, please send a whatsapp message to: <strong><span id="copyNumber">+260966213952</span></strong></>}/>
    </>
  )
}
