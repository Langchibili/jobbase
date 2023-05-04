import React, { Component } from 'react';

class CarOwners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial state goes here
    };
  }
  
  renderCarOwnersList = ()=>{
    const listFormat = this.props.listFormat;
    if(listFormat === 'grid'){
        return <></>;
    }
    else{
        return (    
        <div className="card">
          <div className="card-header  border-0 pb-0">
            <h4 className="card-title">Top Car Owners</h4>
          </div>
          <div className="card-body"> 
            <div id="DZ_W_Todo1" className="widget-media dz-scroll height370 ps ps--active-y">
              <ul className="timeline">
                <li>
                  <div className="timeline-panel">
                    <div className="media me-2">
                      <img alt="image" width={50} src="images/avatar/1.jpg" />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">Dr sultads Send you Photo</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                    <div className="d-flex">
                      <a className="contact-icon me-3" href="#"><i className="fa fa-car" aria-hidden="true" /></a>
                      <a className="contact-icon" href="#"><i className="fa fa-phone" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-panel">
                    <div className="media me-2 media-info">
                      KG
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">Resport created successfully</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                    <div className="d-flex">
                      <a className="contact-icon me-3" href="#"><i className="fa fa-truck" aria-hidden="true" /></a>
                      <a className="contact-icon" href="#"><i className="fa fa-phone" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-panel">
                    <div className="media me-2 media-success">
                      <i className="fa fa-home" />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">Reminder : Treatment Time!</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                    <div className="d-flex">
                      <a className="contact-icon me-3" href="#"><i className="fa fa-bus" aria-hidden="true" /></a>
                      <a className="contact-icon" href="#"><i className="fa fa-phone" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-panel">
                    <div className="media me-2">
                      <img alt="image" width={50} src="images/avatar/1.jpg" />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">Dr sultads Send you Photo</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                    <div className="dropdown">
                      <button type="button" className="btn btn-primary light sharp" data-bs-toggle="dropdown">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-panel">
                    <div className="media me-2 media-danger">
                      KG
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">Resport created successfully</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                    <div className="dropdown">
                      <button type="button" className="btn btn-danger light sharp" data-bs-toggle="dropdown">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-panel">
                    <div className="media me-2 media-primary">
                      <i className="fa fa-home" />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-1">Reminder : Treatment Time!</h5>
                      <small className="d-block">29 July 2020 - 02:26 PM</small>
                    </div>
                    <div className="dropdown">
                      <button type="button" className="btn btn-primary light sharp" data-bs-toggle="dropdown">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="ps__rail-x" style={{"left":"0px","bottom":"0px"}}><div className="ps__thumb-x" tabIndex={0} style={{"left":"0px","width":"0px"}} /></div><div className="ps__rail-y" style={{"top":"0px","height":"370px","right":"0px"}}><div className="ps__thumb-y" tabIndex={0} style={{"top":"0px","height":"301px"}} /></div></div>
          </div>
        </div>
      )
    }
  }

  render() {
    return this.renderCarOwnersList()
  }
}

export default CarOwners;

