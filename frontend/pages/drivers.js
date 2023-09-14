import React, { Component } from 'react';
import HtmlHead from '@/components/Meta/HtmlHead'
import HtmlFoot from '@/components/Meta/HtmlFoot'
import ItemListAll from '@/components/Lists/ItemListAll';
import { api_url,minimal_driver_populate_url,getJwt } from '@/Constants';
import { useRouter } from 'next/router';
import PageLoader from '@/components/Includes/PageLoader';
import ContentLoader from '@/components/Includes/ContentLoader';


export default function drivers(props) {
    
    return (
        <>
        <HtmlHead pageTitle='Drivers'/>
        <div className="authincation h-100">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                    <div className="row no-gutters">
                        <div className="col-xl-12" >
                        <ItemListAll
                            itemsName ='users'
                            reqUrlPath={'/driver-profiles?populate=details,details.profile_thumbnail_image'}
                            api_url={api_url}
                            listType="drivers" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <HtmlFoot/>
        </>   
    )
}
