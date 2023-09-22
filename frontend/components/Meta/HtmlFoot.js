import React, { Component } from 'react';

class HtmlFoot extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // remove the template's floating buttons
    if(window.innerWidth > 1040){
      if(document.getElementsByClassName('DZ-bt-support-now DZ-theme-btn')[0] === undefined) return
      document.getElementsByClassName('DZ-bt-support-now DZ-theme-btn')[0].style.display = 'none'
      document.getElementsByClassName('DZ-bt-buy-now DZ-theme-btn')[0].style.display = 'none'  
      
    }
  }
   
  
  render() {
    return (
      <React.Fragment>
               
        <script src="/template/vendor/global/global.min.js"></script>
        <script src="/template/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
        {/* <script src="/template/vendor/chart.js/Chart.bundle.min.js"></script> */}
        {/* <script src="/template/vendor/owl-carousel/owl.carousel.js"></script> */}
        <script src="/template/vendor/peity/jquery.peity.min.js"></script>
        {/* <script src="/template/js/dashboard/dashboard-1.js"></script> */}
        {/* <script src="template/js/plugins-init/jquery.validate-init.js"></script>
        <script src="template/vendor/jquery-validation/jquery.validate.min.js"></script> */}
        {/* <script src="/template/js/custom.min.js"></script> */}
        <script src="/template/js/deznav-init.js"></script>
        {/* <script src="/template/js/demo.js"></script> */}
        {/* <script src="/template/js/styleSwitcher.js"></script> */}
        {/* <script src="/template/vendor/jquery-smartwizard/dist/js/jquery.smartWizard.js"></script> */}
        {/* <script id="DZScript" src="/dzassets.s3.amazonaws.com/w3-global8bb6.js?btn_dir=right"></script> */}
      </React.Fragment>
    );
  }
}

export default HtmlFoot;
