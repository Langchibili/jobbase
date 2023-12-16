import * as React from 'react';
import ContentLoader from '../ContentLoader';
import Link from 'next/link';

export default class DriversCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          driversCount: NaN
      };
    }
    async componentDidMount(){
         let driverBaseCount  = await fetch('https://api.driverbase.app/api/driver-profiles',{
            headers: {
              'Content-Type': 'application/json'
            }
           }).then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error))
            if(driverBaseCount === undefined) driverBaseCount = 0    
            if('meta' in driverBaseCount){
                driverBaseCount = driverBaseCount.meta.pagination.total
            }
            else{
                driverBaseCount = 0 
            } // getting drivers count from driverbase

         let count = await fetch(this.props.api_url+'/driver-profiles',{
            headers: {
              'Content-Type': 'application/json'
            }
           }).then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error))
            if(count === undefined) return    
            if('meta' in count){
                this.setState({
                    driversCount: driverBaseCount + count.meta.pagination.total
                }) // total users from the count
            }
    }

    render(){
        return(
            <div className="col-xl-3 col-xxl-6 col-sm-6">
            <Link href="/drivers" onClick={this.props.handlePageChange}>
                <div className="card bg-danger">
                <div className="card-body">
                    <div className="media align-items-center">
                    <span className="p-3 me-3 feature-icon rounded">
                        <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.25 5.75H28.5V2.25C28.5 1.78587 28.3156 1.34075 27.9874 1.01256C27.6593 0.684374 27.2141 0.5 26.75 0.5C26.2859 0.5 25.8407 0.684374 25.5126 1.01256C25.1844 1.34075 25 1.78587 25 2.25V5.75H11V2.25C11 1.78587 10.8156 1.34075 10.4874 1.01256C10.1592 0.684374 9.71413 0.5 9.25 0.5C8.78587 0.5 8.34075 0.684374 8.01256 1.01256C7.68437 1.34075 7.5 1.78587 7.5 2.25V5.75H5.75C4.35761 5.75 3.02226 6.30312 2.03769 7.28769C1.05312 8.27226 0.5 9.60761 0.5 11V12.75H35.5V11C35.5 9.60761 34.9469 8.27226 33.9623 7.28769C32.9777 6.30312 31.6424 5.75 30.25 5.75Z" fill="white" />
                        <path d="M0.5 30.25C0.5 31.6424 1.05312 32.9777 2.03769 33.9623C3.02226 34.9469 4.35761 35.5 5.75 35.5H30.25C31.6424 35.5 32.9777 34.9469 33.9623 33.9623C34.9469 32.9777 35.5 31.6424 35.5 30.25V16.25H0.5V30.25Z" fill="white" />
                        </svg>
                    </span>
                    <div className="media-body text-end">
                        <p className="fs-18 text-white mb-2">Professionals Registered</p>
                        <span className="fs-48 text-white font-w600">{this.state.driversCount? this.state.driversCount : <ContentLoader />}</span>
                    </div>
                    </div>
                </div>
                </div>
            </Link>
          </div>
          
        )
    }
}