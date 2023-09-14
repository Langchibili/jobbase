import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import LogoArea from './LogoArea';
import SideNav from './SideNav';
import List from '../Lists/List';
import { car_owner_populate_url, minimal_driver_populate_url} from '@/Constants';
import PageLoader from '../Includes/PageLoader';
import ProfileUpdatePercent from '../Includes/ProfileUpdatePercent';
import DriversCount from '../Includes/CountsDisplay/DriversCount';
import CarOwnersCount from '../Includes/CountsDisplay/CarOwnersCount';
import JobsCounts from '../Includes/CountsDisplay/JobsCounts';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
       linkClicked: false
    };
  }

  handlePageChange = (e)=>{
    this.setState({
      linkClicked: true
    })
  }
  // componentDidMount{
  //   document.body.
  // }
  render() {
  return( 
  <>
  
  {/********************
  Preloader start
    *********************/}
  {/* <div id="preloader">
    <div className="sk-three-bounce">
      <div className="sk-child sk-bounce1"></div> 
      <div className="sk-child sk-bounce2"></div> 
      <div className="sk-child sk-bounce3"></div>
    </div>
  </div>  
*/}
  {/********************
  Preloader end
    *********************/}
  {/***********************************
  Main wrapper start
    ************************************/}
  <div id="main-wrap">
  {this.state.linkClicked? <PageLoader/> : ''}
    {/***********************************
      Nav header start
  ************************************/}
   <LogoArea />
    {/***********************************
      Nav header end
  ************************************/}
    {/***********************************
      Chat box start
  ************************************/}
    {/* <div className="chatbox">
      <div className="chatbox-close"></div> 
      <div className="custom-tab-1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="chat" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
              <div className="card-header chat-list-header text-center">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
                <div>
                  <h6 className="mb-1">Chat List</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
              </div>
              <div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
                <ul className="contacts">
                  <li className="name-first-letter">A</li>
                  <li className="active dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Archie Parker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Alfie Mason</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon"></span> 
                      </div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">B</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Bashid Samim</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon"></span> 
                      </div>
                      <div className="user_info">
                        <span>Breddie Ronan</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Ceorge Carson</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">D</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon"></span> 
                      </div>
                      <div className="user_info">
                        <span>Darry Parker</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Denry Hunter</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">J</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Jack Ronan</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Jacob Tucker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>James Logan</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon"></span> 
                      </div>
                      <div className="user_info">
                        <span>Joshua Weston</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">O</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Oliver Acker</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                        <span className="online_icon offline"></span> 
                      </div>
                      <div className="user_info">
                        <span>Oscar Weston</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card chat dz-chat-history-box d-none">
              <div className="card-header chat-list-header text-center">
                <a href="#" className="dz-chat-history-back">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><polygon points="0 0 24 0 24 24 0 24" /><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x={14} y={7} width={2} height={10} rx={1} /><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) " /></g></svg>
                </a>
                <div>
                  <h6 className="mb-1">Chat with Khelesh</h6>
                  <p className="mb-0 text-success">Online</p>
                </div>							
                <div className="dropdown">
                  <a href="#" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2" /> View profile</li>
                    <li className="dropdown-item"><i className="fa fa-users text-primary me-2" /> Add to close friends</li>
                    <li className="dropdown-item"><i className="fa fa-plus text-primary me-2" /> Add to group</li>
                    <li className="dropdown-item"><i className="fa fa-ban text-primary me-2" /> Block</li>
                  </ul>
                </div>
              </div>
              <div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
              </div>
              <div className="card-footer type_msg">
                <div className="input-group">
                  <textarea className="form-control" placeholder="Type your message..." defaultValue={""} />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary"><i className="fa fa-location-arrow" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="alerts" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
              <div className="card-header chat-list-header text-center">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
                <div>
                  <h6 className="mb-1">Notications</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
              </div>
              <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
                <ul className="contacts">
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">KK</div>
                      <div className="user_info">
                        <span>David Nester Birthday</span>
                        <p className="text-primary">Today</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SOCIAL</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont success">RU<i className="icon fa-birthday-cake" /></div>
                      <div className="user_info">
                        <span>Perfection Simplified</span>
                        <p>Jame Smith commented on your status</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">AU<i className="icon fa fa-user-plus" /></div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont info">MO<i className="icon fa fa-user-plus" /></div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer"></div> 
            </div>
          </div>
          <div className="tab-pane fade" id="notes">
            <div className="card mb-sm-3 mb-md-0 note_card">
              <div className="card-header chat-list-header text-center">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
                <div>
                  <h6 className="mb-1">Notes</h6>
                  <p className="mb-0">Add New Nots</p>
                </div>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
              </div>
              <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
                <ul className="contacts">
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>New order placed..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Youtube, a video-sharing website..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>john just buy your product..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/***********************************
      Chat box End
  ************************************/}
    {/***********************************
      Header start
  ************************************/}
    <Header linkClicked={this.state.linkClicked} api_url={this.props.api_url} loggedInUserProfile={this.props.loggedInUserProfile}/>
    {/***********************************
      Header end ti-comment-alt
  ************************************/}
    {/***********************************
      Sidebar start
  ************************************/}
    <SideNav handlePageChange={this.handlePageChange}/>
    {/***********************************
      Sidebar end
  ************************************/}
    {/***********************************
      Content body start
  ************************************/}
    <div className="content-body pt-4">
      {/* row */}
      <div className="container-fluid">
        <div className="row">
           {this.props.loggedInUserProfile !== 'logged-out'?<ProfileUpdatePercent 
               loggedInUserProfile={this.props.loggedInUserProfile}
               api_url={this.props.api_url}
               jwt={this.props.jwt}/>:''}
          <div className="col-xl-4 col-xxl-6 col-lg-6">
              <List 
              loggedInUserProfile={this.props.loggedInUserProfile}
              handlePageChange={this.props.handlePageChange}
              itemsName ='jobs'
              reqUrlPath='/jobs?populate=car_owner_profile&pagination[limit]=5&sort=id%3Adesc&meta=true'
              api_url={this.props.api_url}
              listType='jobs' 
              listTitle='Latest Jobs'/>
          </div>
          <div className="col-xl-4 col-xxl-6 col-lg-6">
              <List 
              loggedInUserProfile={this.props.loggedInUserProfile}
              handlePageChange={this.props.handlePageChange}
              itemsName ='users'
              reqUrlPath={'/users?'+minimal_driver_populate_url+'&sort=id%3Adesc'}
              api_url={this.props.api_url}
              listType="drivers" 
              listTitle='Top Drivers'/>
           </div>
           <div className="col-xl-4 col-xxl-6 col-lg-6">
              <List 
              loggedInUserProfile={this.props.loggedInUserProfile}
              handlePageChange={this.props.handlePageChange}
              itemsName ='users'
              reqUrlPath={'/users?'+car_owner_populate_url+'&sort=id%3Adesc'}
              api_url={this.props.api_url}
              listType='car-owners' 
              listTitle='Car Owners'/>
           </div>
          <DriversCount api_url={this.props.api_url}/>
          <CarOwnersCount api_url={this.props.api_url}/>
          <JobsCounts api_url={this.props.api_url}/>
          <div className="col-xl-3 col-xxl-6 col-sm-6">
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="media align-items-center">
                  <span className="p-3 me-3 feature-icon rounded">
                    <svg width={36} height={36} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40.614 9.36994C40.443 8.22658 39.8679 7.18234 38.9932 6.4265C38.1184 5.67067 37.0018 5.25328 35.8457 5.25H6.1543C4.99822 5.25328 3.88159 5.67067 3.00681 6.4265C2.13203 7.18234 1.55701 8.22658 1.38599 9.36994L21 22.0618L40.614 9.36994Z" fill="white" />
                      <path d="M21.7127 24.7274C21.5003 24.8647 21.2529 24.9378 21 24.9378C20.7471 24.9378 20.4997 24.8647 20.2873 24.7274L1.3125 12.4503V31.9081C1.31389 33.1918 1.82445 34.4225 2.73217 35.3302C3.63988 36.238 4.87061 36.7485 6.15431 36.7499H35.8457C37.1294 36.7485 38.3601 36.238 39.2678 35.3302C40.1755 34.4225 40.6861 33.1918 40.6875 31.9081V12.449L21.7127 24.7274Z" fill="white" />
                    </svg>
                  </span>
                  <div className="media-body text-end">
                    <p className="fs-18 text-white mb-2">Unread Message</p>
                    <span className="fs-48 text-white font-w600">93</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card d-flex flex-xl-column flex-sm-column flex-md-row flex-column">
                  <div className="card-body text-center profile-bx">
                    <div className="profile-image mb-4">
                      <img src="images/avatar/1.jpg" className="rounded-circle" alt />
                    </div>
                    <h4 className="fs-22 text-black mb-1">Oda Dink</h4>
                    <p className="mb-4">Programmer</p>
                    <div className="row">
                      <div className="col-4 p-0">
                        <div className="d-inline-block mb-2 relative donut-chart-sale">
                          <span className="donut" data-peity="{ &quot;fill&quot;: [&quot;rgb(255, 142, 38)&quot;, &quot;rgba(236, 236, 236, 1)&quot;],   &quot;innerRadius&quot;: 27, &quot;radius&quot;: 10}">7/9</span>
                          <small className="text-black">66%</small>
                        </div>
                        <span className="d-block">PHP</span>
                      </div>
                      <div className="col-4 p-0">
                        <div className="d-inline-block mb-2 relative donut-chart-sale">
                          <span className="donut" data-peity="{ &quot;fill&quot;: [&quot;rgb(62, 168, 52)&quot;, &quot;rgba(236, 236, 236, 1)&quot;],   &quot;innerRadius&quot;: 27, &quot;radius&quot;: 10}">4/9</span>
                          <small className="text-black">31%</small>
                        </div>
                        <span className="d-block">Vue</span>
                      </div>
                      <div className="col-4 p-0">
                        <div className="d-inline-block mb-2 relative donut-chart-sale">
                          <span className="donut" data-peity="{ &quot;fill&quot;: [&quot;rgb(34, 172, 147)&quot;, &quot;rgba(236, 236, 236, 1)&quot;],   &quot;innerRadius&quot;: 27, &quot;radius&quot;: 10}">2/9</span>
                          <small className="text-black">7%</small>
                        </div>
                        <span className="d-block">Laravel</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body col-xl-12 col-md-6 col-sm-12 activity-card">
                    <h4 className="fs-18 text-black mb-3">Recent Activities</h4>
                    <div className="media mb-4">
                      <span className="p-3 border me-3 rounded">
                        <svg className="primary-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.3955 10.8038C19.9733 10.8038 19.5767 10.8742 19.2057 11.0213V4.79104H12.9883C13.1226 4.42004 13.193 4.01066 13.193 3.58849C13.193 1.60554 11.5874 0 9.60447 0C7.62152 0 6.01598 1.60554 6.01598 3.58849C6.01598 4.01066 6.08634 4.41365 6.22067 4.79104H0.00958252V11.7441C0.642845 11.1684 1.48719 10.8102 2.4083 10.8102C4.39125 10.8102 5.99679 12.4158 5.99679 14.3987C5.99679 16.3817 4.39125 17.9872 2.4083 17.9872C1.48719 17.9872 0.642845 17.629 0.00958252 17.0533V24H19.2121V17.7697C19.5831 17.9104 19.9797 17.9872 20.4019 17.9872C22.3912 17.9872 23.9904 16.3817 23.9904 14.3987C23.9904 12.4158 22.3912 10.8038 20.3955 10.8038Z" fill="#40189D" />
                        </svg>
                      </span>
                      <div className="media-body">
                        <p className="fs-14 mb-1 text-black font-w500">Your application has accepted in <strong>3 Vacancy</strong></p>
                        <span className="fs-14">12h ago</span>
                      </div>
                    </div>
                    <div className="media mb-4">
                      <span className="p-3 border me-3 rounded">
                        <svg className="primary-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.3955 10.8038C19.9733 10.8038 19.5767 10.8742 19.2057 11.0213V4.79104H12.9883C13.1226 4.42004 13.193 4.01066 13.193 3.58849C13.193 1.60554 11.5874 0 9.60447 0C7.62152 0 6.01598 1.60554 6.01598 3.58849C6.01598 4.01066 6.08634 4.41365 6.22067 4.79104H0.00958252V11.7441C0.642845 11.1684 1.48719 10.8102 2.4083 10.8102C4.39125 10.8102 5.99679 12.4158 5.99679 14.3987C5.99679 16.3817 4.39125 17.9872 2.4083 17.9872C1.48719 17.9872 0.642845 17.629 0.00958252 17.0533V24H19.2121V17.7697C19.5831 17.9104 19.9797 17.9872 20.4019 17.9872C22.3912 17.9872 23.9904 16.3817 23.9904 14.3987C23.9904 12.4158 22.3912 10.8038 20.3955 10.8038Z" fill="#40189D" />
                        </svg>
                      </span>
                      <div className="media-body">
                        <p className="fs-14 mb-1 text-black font-w500">Your application has accepted in <strong>3 Vacancy</strong></p>
                        <span className="fs-14">12h ago</span>
                      </div>
                    </div>
                    <div className="media mb-4">
                      <span className="p-3 border me-3 rounded">
                        <svg className="primary-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.3955 10.8038C19.9733 10.8038 19.5767 10.8742 19.2057 11.0213V4.79104H12.9883C13.1226 4.42004 13.193 4.01066 13.193 3.58849C13.193 1.60554 11.5874 0 9.60447 0C7.62152 0 6.01598 1.60554 6.01598 3.58849C6.01598 4.01066 6.08634 4.41365 6.22067 4.79104H0.00958252V11.7441C0.642845 11.1684 1.48719 10.8102 2.4083 10.8102C4.39125 10.8102 5.99679 12.4158 5.99679 14.3987C5.99679 16.3817 4.39125 17.9872 2.4083 17.9872C1.48719 17.9872 0.642845 17.629 0.00958252 17.0533V24H19.2121V17.7697C19.5831 17.9104 19.9797 17.9872 20.4019 17.9872C22.3912 17.9872 23.9904 16.3817 23.9904 14.3987C23.9904 12.4158 22.3912 10.8038 20.3955 10.8038Z" fill="#40189D" />
                        </svg>
                      </span>
                      <div className="media-body">
                        <p className="fs-14 mb-1 text-black font-w500">Your application has accepted in <strong>3 Vacancy</strong></p>
                        <span className="fs-14">12h ago</span>
                      </div>
                    </div>
                    <div className="media">
                      <span className="p-3 border me-3 rounded">
                        <svg className="primary-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.3955 10.8038C19.9733 10.8038 19.5767 10.8742 19.2057 11.0213V4.79104H12.9883C13.1226 4.42004 13.193 4.01066 13.193 3.58849C13.193 1.60554 11.5874 0 9.60447 0C7.62152 0 6.01598 1.60554 6.01598 3.58849C6.01598 4.01066 6.08634 4.41365 6.22067 4.79104H0.00958252V11.7441C0.642845 11.1684 1.48719 10.8102 2.4083 10.8102C4.39125 10.8102 5.99679 12.4158 5.99679 14.3987C5.99679 16.3817 4.39125 17.9872 2.4083 17.9872C1.48719 17.9872 0.642845 17.629 0.00958252 17.0533V24H19.2121V17.7697C19.5831 17.9104 19.9797 17.9872 20.4019 17.9872C22.3912 17.9872 23.9904 16.3817 23.9904 14.3987C23.9904 12.4158 22.3912 10.8038 20.3955 10.8038Z" fill="#40189D" />
                        </svg>
                      </span>
                      <div className="media-body">
                        <p className="fs-14 mb-1 text-black font-w500">Your application has accepted in <strong>3 Vacancy</strong></p>
                        <span className="fs-14">12h ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-xxl-8">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header border-0 pb-0 flex-wrap">
                    <h4 className="fs-20 text-black me-4 mb-2">Vacancy Stats</h4>
                    <div className="custom-control custom-switch toggle-switch text-end me-3 mb-2">
                      <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                      <label className="custom-control-label" htmlFor="customSwitch1">Application Sent</label>
                    </div>
                    <div className="custom-control custom-switch toggle-switch text-end me-3 mb-2">
                      <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                      <label className="custom-control-label" htmlFor="customSwitch2">Interviews</label>
                    </div>
                    <div className="custom-control custom-switch toggle-switch text-end me-3 mb-2">
                      <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                      <label className="custom-control-label" htmlFor="customSwitch3">Rejected</label>
                    </div>
                    <div className="dropdown custom-dropdown mb-0 mt-3 mt-sm-0 mb-2">
                      <div className="btn border text-black btn-rounded" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        This Month
                        <i className="las la-angle-down scale5 text-primary ms-3" />
                      </div>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="javascript:void(0);">Details</a>
                        <a className="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">	
                    <canvas id="lineChart" className="Vacancy-chart" />
                    <div className="d-flex flex-wrap align-items-center justify-content-center mt-3">
                      <div className="fs-14 text-black me-4">
                        <svg className="me-2" width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={19} height={19} rx="9.5" fill="#4E36E2" />
                        </svg>
                        Application Sent
                      </div>
                      <div className="fs-14 text-black me-4">
                        <svg className="me-2" width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={19} height={19} rx="9.5" fill="#1BD084" />
                        </svg>
                        Interviews
                      </div>
                      <div className="fs-14 text-black">
                        <svg className="me-2" width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={19} height={19} rx="9.5" fill="#FF424D" />
                        </svg>
                        Rejected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <h4 className="fs-20 text-black mb-sm-4 mt-sm-0 mt-2  mb-2">Recomended Jobs</h4>
                <div className="testimonial-one owl-carousel">
                  <div className="items">
                    <div className="card shadow">
                      <div className="card-body">	
                        <div className="media mb-2">
                          <div className="media-body">
                            <p className="mb-1">Maximoz Team</p>
                            <h4 className="fs-20 text-black">PHP Progammer</h4>
                          </div>
                          <svg className="ms-3" width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3" />
                            <path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#3144F3" />
                            <path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50399 29.8608 9.50399C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="#8FD7FF" />
                            <path d="M15.4661 44.2558C11.6484 40.4381 9.50365 35.2601 9.50365 29.8611C9.50365 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4378 11.6487 44.2555 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6635 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6635 37.0584L15.4661 44.2558Z" fill="white" />
                          </svg>
                        </div>
                        <span className="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                        <div className="d-flex align-items-center mt-4">
                          <a href="companies.html" className="btn btn-primary light btn-rounded me-auto">REMOTE</a>
                          <span className="text-black font-w500 ps-3">London, England</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="card shadow">
                      <div className="card-body">	
                        <div className="media mb-2">
                          <div className="media-body">
                            <p className="mb-1">Klean n Clin Studios</p>
                            <h4 className="fs-20 text-black">Senior Programmer</h4>
                          </div>
                          <svg className="ms-3" width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3" />
                            <path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#FE8024" />
                            <path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50398 29.8608 9.50398C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="white" />
                            <path d="M15.4661 44.2558C11.6484 40.4381 9.50364 35.2601 9.50364 29.8611C9.50363 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4377 11.6487 44.2554 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6634 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6634 37.0584L15.4661 44.2558Z" fill="white" />
                          </svg>
                        </div>
                        <span className="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                        <div className="d-flex align-items-center mt-4">
                          <a href="companies.html" className="btn btn-primary light btn-rounded me-auto">REMOTE</a>
                          <span className="text-black font-w500 ps-3">Manchester, England</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="card shadow">
                      <div className="card-body">	
                        <div className="media mb-2">
                          <div className="media-body">
                            <p className="mb-1">Maximoz Team</p>
                            <h4 className="fs-20 text-black">Intern UX Designer</h4>
                          </div>
                          <svg className="ms-3" width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#D3D3D3" />
                            <path d="M0 8.72727C0 3.90733 3.90733 0 8.72727 0H51.2727C56.0927 0 60 3.90733 60 8.72727V51.2727C60 56.0927 56.0927 60 51.2727 60H8.72727C3.90733 60 0 56.0927 0 51.2727V8.72727Z" fill="#FE8024" />
                            <path d="M15.4662 15.4665C17.3565 13.5761 19.6007 12.0766 22.0705 11.0536C24.5403 10.0305 27.1875 9.50398 29.8608 9.50398C32.5342 9.50399 35.1813 10.0305 37.6512 11.0536C40.121 12.0766 42.3652 13.5761 44.2555 15.4665C46.1459 17.3568 47.6453 19.6009 48.6684 22.0708C49.6914 24.5406 50.218 27.1878 50.218 29.8611C50.218 32.5345 49.6914 35.1816 48.6684 37.6515C47.6453 40.1213 46.1458 42.3655 44.2555 44.2558L37.0582 37.0585C38.0033 36.1133 38.7531 34.9912 39.2646 33.7563C39.7761 32.5214 40.0394 31.1978 40.0394 29.8611C40.0394 28.5245 39.7761 27.2009 39.2646 25.966C38.7531 24.731 38.0033 23.609 37.0582 22.6638C36.113 21.7186 34.9909 20.9689 33.756 20.4574C32.5211 19.9458 31.1975 19.6826 29.8608 19.6826C28.5242 19.6826 27.2006 19.9458 25.9657 20.4574C24.7307 20.9689 23.6087 21.7186 22.6635 22.6638L15.4662 15.4665Z" fill="white" />
                            <path d="M15.4661 44.2558C11.6484 40.4381 9.50364 35.2601 9.50364 29.8611C9.50363 24.462 11.6484 19.2841 15.4661 15.4664C19.2838 11.6487 24.4617 9.50395 29.8608 9.50395C35.2598 9.50394 40.4377 11.6487 44.2554 15.4664L37.0581 22.6637C35.1493 20.7549 32.5603 19.6825 29.8608 19.6825C27.1613 19.6825 24.5723 20.7549 22.6634 22.6638C20.7546 24.5726 19.6822 27.1616 19.6822 29.8611C19.6822 32.5606 20.7546 35.1496 22.6634 37.0584L15.4661 44.2558Z" fill="white" />
                          </svg>
                        </div>
                        <span className="text-primary font-w500 d-block mb-3">$14,000 - $25,000</span>
                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                        <div className="d-flex align-items-center mt-4">
                          <a href="companies.html" className="btn btn-primary light btn-rounded me-auto">FULTIME</a>
                          <span className="text-black font-w500 ps-3">London, England</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="d-sm-flex align-items-center mb-3 mt-sm-0 mt-2">
              <h4 className="text-black fs-20 me-auto">Featured Companies</h4>
              <a href="companies.html" className="btn btn-primary light btn-rounded">View More
                <svg className="ms-3" width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5607 5.93941L18.2461 0.62482C17.9532 0.331898 17.5693 0.185461 17.1854 0.185461C16.8015 0.185461 16.4176 0.331898 16.1247 0.62482C15.539 1.21062 15.539 2.16035 16.1247 2.74615L18.8787 5.50005L1.5 5.50005C0.671578 5.50005 0 6.17163 0 7.00005C0 7.82848 0.671578 8.50005 1.5 8.50005L18.8787 8.50005L16.1247 11.254C15.539 11.8398 15.539 12.7895 16.1247 13.3753C16.7106 13.9611 17.6602 13.9611 18.2461 13.3753L23.5607 8.06069C24.1464 7.47495 24.1464 6.52516 23.5607 5.93941Z" fill="#40189D" />
                </svg>
              </a>
            </div>
            <div className="testimonial-two owl-carousel">
              <div className="items">
                <div className="card">
                  <div className="card-body">
                    <div className="media">
                      <svg className="me-3" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#D3D3D3" />
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#40C7CF" />
                        <path d="M20.6216 20.6219C23.142 18.1015 26.1342 16.1022 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672C43.3789 12.672 46.9085 13.374 50.2016 14.7381C53.4947 16.1022 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.202C63.5271 53.4951 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.1511 51.6708 46.6549 52.3528 45.0084C53.0348 43.3618 53.3859 41.5971 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6213C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9582 46.6546 27.9585 45.008 27.2765C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184L20.6216 20.6219Z" fill="#8FD7FF" />
                        <path d="M20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219C25.7118 15.5316 32.6157 12.6719 39.8144 12.6719C47.0131 12.6719 53.917 15.5316 59.0073 20.6219L49.4108 30.2183C46.8657 27.6732 43.4138 26.2434 39.8144 26.2434C36.215 26.2434 32.7631 27.6732 30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4141 27.6728 46.8661 30.2179 49.4112L20.6215 59.0077Z" fill="white" />
                      </svg>
                      <div className="media-body">
                        <h6 className="fs-16 text-black font-w600">Herman-Carter</h6>
                        <span className="text-primary font-w500">21 Vacancy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="card">
                  <div className="card-body">
                    <div className="media">
                      <svg className="me-3" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#D3D3D3" />
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#6EC061" />
                        <path d="M39.8144 66.9577C36.25 66.9577 32.7205 66.2556 29.4273 64.8916C26.1342 63.5275 23.142 61.5282 20.6216 59.0077C18.1011 56.4873 16.1018 53.4951 14.7377 50.2019C13.3737 46.9088 12.6716 43.3793 12.6716 39.8148C12.6716 36.2504 13.3737 32.7208 14.7377 29.4277C16.1018 26.1346 18.1011 23.1424 20.6216 20.6219C23.142 18.1015 26.1342 16.1021 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672L39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184C28.9578 31.4786 27.9581 32.9747 27.2761 34.6213C26.5941 36.2678 26.243 38.0326 26.243 39.8148C26.243 41.597 26.5941 43.3618 27.2761 45.0084C27.9581 46.6549 28.9578 48.151 30.218 49.4113C31.4782 50.6715 32.9743 51.6712 34.6209 52.3532C36.2675 53.0352 38.0322 53.3863 39.8144 53.3863L39.8144 66.9577Z" fill="white" />
                        <path d="M20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219C25.7118 15.5316 32.6157 12.6719 39.8144 12.6719C47.0131 12.6719 53.917 15.5316 59.0073 20.6219L49.4108 30.2183C46.8657 27.6732 43.4138 26.2434 39.8144 26.2434C36.215 26.2434 32.7631 27.6732 30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4141 27.6728 46.8661 30.2179 49.4112L20.6215 59.0077Z" fill="white" />
                      </svg>
                      <div className="media-body">
                        <h6 className="fs-16 text-black font-w600">Funk Inc.</h6>
                        <span className="text-primary font-w500">21 Vacancy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="card">
                  <div className="card-body">
                    <div className="media">
                      <svg className="me-3" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#D3D3D3" />
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#F3C831" />
                        <path d="M20.6216 20.6219C23.142 18.1015 26.1342 16.1022 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672C43.3789 12.672 46.9085 13.374 50.2016 14.7381C53.4947 16.1022 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.202C63.5271 53.4951 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.1511 51.6708 46.6549 52.3528 45.0084C53.0348 43.3618 53.3859 41.5971 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6213C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9582 46.6546 27.9585 45.008 27.2765C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184L20.6216 20.6219Z" fill="white" />
                        <path d="M20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219C25.7118 15.5316 32.6157 12.6719 39.8144 12.6719C47.0131 12.6719 53.917 15.5316 59.0073 20.6219L49.4108 30.2183C46.8657 27.6732 43.4138 26.2434 39.8144 26.2434C36.215 26.2434 32.7631 27.6732 30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4141 27.6728 46.8661 30.2179 49.4112L20.6215 59.0077Z" fill="white" />
                      </svg>
                      <div className="media-body">
                        <h6 className="fs-16 text-black font-w600">Williamson Inc</h6>
                        <span className="text-primary font-w500">21 Vacancy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="card">
                  <div className="card-body">
                    <div className="media">
                      <svg className="me-3" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#D3D3D3" />
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#F331E0" />
                        <path d="M20.6216 20.6219C23.142 18.1015 26.1342 16.1022 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672C43.3789 12.672 46.9085 13.374 50.2016 14.7381C53.4947 16.1022 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.202C63.5271 53.4951 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.1511 51.6708 46.6549 52.3528 45.0084C53.0348 43.3618 53.3859 41.5971 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6213C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9582 46.6546 27.9585 45.008 27.2765C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184L20.6216 20.6219Z" fill="#F331E0" />
                        <path d="M20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219C25.7118 15.5316 32.6157 12.6719 39.8144 12.6719C47.0131 12.6719 53.917 15.5316 59.0073 20.6219L49.4108 30.2183C46.8657 27.6732 43.4138 26.2434 39.8144 26.2434C36.215 26.2434 32.7631 27.6732 30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4141 27.6728 46.8661 30.2179 49.4112L20.6215 59.0077Z" fill="#B60DA5" />
                      </svg>
                      <div className="media-body">
                        <h6 className="fs-16 text-black font-w600">Donnelly Ltd.</h6>
                        <span className="text-primary font-w500">21 Vacancy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="card">
                  <div className="card-body">
                    <div className="media">
                      <svg className="me-3" width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#D3D3D3" />
                        <path d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z" fill="#9B70A1" />
                        <path d="M20.6216 20.6219C23.142 18.1015 26.1342 16.1022 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672C43.3789 12.672 46.9085 13.374 50.2016 14.7381C53.4947 16.1022 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.202C63.5271 53.4951 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.1511 51.6708 46.6549 52.3528 45.0084C53.0348 43.3618 53.3859 41.5971 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6213C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9582 46.6546 27.9585 45.008 27.2765C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184L20.6216 20.6219Z" fill="white" />
                        <path d="M20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219C25.7118 15.5316 32.6157 12.6719 39.8144 12.6719C47.0131 12.6719 53.917 15.5316 59.0073 20.6219L49.4108 30.2183C46.8657 27.6732 43.4138 26.2434 39.8144 26.2434C36.215 26.2434 32.7631 27.6732 30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4141 27.6728 46.8661 30.2179 49.4112L20.6215 59.0077Z" fill="white" />
                      </svg>
                      <div className="media-body">
                        <h6 className="fs-16 text-black font-w600">Herman-Carter</h6>
                        <span className="text-primary font-w500">21 Vacancy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/***********************************
      Content body end
  ************************************/}
    {/***********************************
      Footer start
  ************************************/}
    <Footer />
    {/***********************************
      Footer end
  ************************************/}
    {/***********************************
     Support ticket button start
  ************************************/}
    {/***********************************
     Support ticket button end
  ************************************/}
  </div>
  {/***********************************
  Main wrapper end
    ************************************/}
  </>
      )
  }
}

export default Content;
