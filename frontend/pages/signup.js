import React, { Component } from 'react';
import HtmlHead from '@/components/Meta/HtmlHead'
import HtmlFoot from '@/components/Meta/HtmlFoot'
import SignUpForm from  '@/components/Forms/SignUpForm'
import { api_url } from '@/Constants';

export default function signup(props) {
    const [userType, setType] = React.useState({typeSet: false, type: 'driver'});


    const renderDriverSignUpForm = (e)=>{
        setType({typeSet: true, type: 'driver'});
    }
    const renderCarOwnerSignUpForm = (e)=>{
        setType({typeSet: true, type: 'car-owner'});
    }

    const renderSignUpForm = ()=>{
        if(userType.typeSet){
            if(userType.type === 'car-owner'){
                return <SignUpForm api_url={api_url} user_type='car-owner'/>
            }
            else{
                return <SignUpForm api_url={api_url} user_type='driver'/>
            }
        }
        else{
            return (<>
                    <p>Register As A</p>
                    <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={renderDriverSignUpForm}>Driver</button>
                    <button type="button" className="btn btn-default">  </button>
                    <button type="button" className="btn btn-info" onClick={renderCarOwnerSignUpForm}>Car Owner</button>
                    </div></>)
        }
    }

    return (<>
        <HtmlHead pageTitle='Signup'/>
        <div className="authincation h-100 m-1">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                    <div className="row no-gutters">
                        <div className="col-xl-12" >
                        {renderSignUpForm()}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        <HtmlFoot/>
        </>)
}
