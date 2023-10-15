import React from 'react';
import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import CopyAndWhatsAppButtons from '@/components/Includes/CopyAndWhatsAppButtons';
import { Alert, Typography } from '@mui/material';

export default function Payments() {
    return (
    <div style={{width:'100%',textAlign:'center'}}>
    <UpAndBackButton/>
    <h2 style={{marginTop:5,marginBottom:5}}><Typography component="lagend" sx={{fontWeight:'bold',textTransform:'uppercase'}}>A <strong style={{fontWeight:900,color:'green',fontFamily:"Helvetica"}}>K10</strong> fee has to be paid for any application to be listed.</Typography></h2>
    <h3 style={{marginTop:5,marginBottom:5,opacity:0.7}}><Typography component="legend">(An optional amount from <strong style={{fontWeight:600,color:'green',fontFamily:"Helvetica"}}>K15 - k100</strong> can be paid for any application to be listed among <strong style={{color:"crimson"}}>Recommended Drivers</strong>)</Typography></h3>
    <h3 style={{marginTop:10,marginBottom:5,fontFamily:"Helvetica"}}><Typography component="legend">Payments should strictly be made to this number: <strong style={{fontWeight:900,color:'green'}}>0975630500</strong></Typography></h3>
    <p style={{color:'blue',marginBottom:10,fontFamily:"Helvetica"}}><Typography component="legend">Follow the guidelines listed below</Typography></p>
    <div style={{border:"1px solid lightgray",padding:5,marginBottom:10}}>
        <p style={{fontFamily:"Helvetica"}}>Step 1: ensure that you are using an airtel number</p>
        <p style={{fontFamily:"Helvetica"}}>Step 2: dial *115#</p>
        <p style={{fontFamily:"Helvetica"}}>Step 3: select option 1 : Send Money</p>
        <p style={{fontFamily:"Helvetica"}}>Step 4: select option 1 : Airtel Customers</p>
        <p style={{fontFamily:"Helvetica"}}>Step 5: select option 1 : Enter Number</p>
        <p style={{fontFamily:"Helvetica"}}>Step 6: enter the number provided: <strong style={{fontWeight:900,color:'green'}}>0975630500</strong></p>
        <p style={{fontFamily:"Helvetica"}}>Step 7: enter amount</p>
        <p style={{fontFamily:"Helvetica"}}>Step 8: make sure the name that comes up is: <strong style={{fontWeight:900,color:'green'}}>Goldwyn Zimba</strong></p>
        <p style={{fontFamily:"Helvetica",marginBottom:10}}>Step 9: then enter your pin to confirm</p>
    </div>
    <p style={{color:'blue',marginBottom:10,fontFamily:"Helvetica"}}><Typography component="legend">After making payments, you can come back to this page to text us</Typography></p>

    <div style={{maxWidth:500,margin:'0 auto',fontFamily:"Helvetica"}}><CopyAndWhatsAppButtons buttonText="Text Us On WhatsApp" info={<><></>To make sure we consider your payment, you must send a whatsapp message to: <strong><span id="copyNumber">+260966213952</span></strong></>}/> 
    <Alert severity='warning'><strong>You must send us a screenshot of the transaction, as proof of payment, otherwise we will not consider your payment.<br/> And please note that any mistakes you make in your transactions, we are not responsible and we shall not refund.</strong></Alert></div>
      <div style={{border:"1px solid lightgray",padding:5,marginTop:10}}>
            <h3 style={{marginTop:10,marginBottom:10,fontFamily:"Helvetica"}}>Why We Charge a Fee for Job Applications?</h3>
            
            <p style={{fontFamily:"Helvetica"}}>
                We understand that you might have questions about why we charge a fee for job applications on our site. We want to assure you that this decision was made after careful consideration and for the benefit of both job applicants and employers.
            </p>
            <p style={{fontFamily:"Helvetica"}}>
                <strong>1. Quality Assurance:</strong> Charging a small fee helps ensure that the applicants who apply are genuinely interested in the positions they are applying for. This reduces the number of spam or non-serious applications, making the job search process more efficient for everyone.
            </p>
            <p style={{fontFamily:"Helvetica"}}>
                <strong>2. Investment in Your Success:</strong> We take your job search seriously and believe that the fee you pay is an investment in your career. It helps us maintain and improve our platform to provide you with better job opportunities and services.
            </p>
            <p style={{fontFamily:"Helvetica"}}>
                <strong>3. Support for Employers:</strong> By charging a nominal fee, we can offer a more robust and effective platform for employers. This, in turn, attracts a wider range of job opportunities, giving you a better chance of finding the perfect job.
            </p>
            <p style={{fontFamily:"Helvetica"}}>
                <strong>4. Fair and Equal Opportunity:</strong> Our goal is to provide equal opportunities to all applicants. Charging a fee ensures that everyone has access to the same application process, regardless of their financial situation.
            </p>
            <p style={{fontFamily:"Helvetica"}}>
                <strong>5. Reducing Spam and Fraud:</strong> A small fee helps us deter potential scammers and those with malicious intentions from using our platform, making it safer for all users.
            </p>
            <p style={{fontFamily:"Helvetica"}}>
                We appreciate your understanding and support in making our job platform the best it can be. If you have any questions or concerns, please don't hesitate to reach out to our customer support team. We're here to help and make your job search as effective as possible.
            </p>
            <p style={{fontFamily:"Helvetica",color:'green'}}>Thank you for choosing our platform to further your career.</p>
       </div>
    </div>
  )
}
