import React, { Component } from 'react';

class HtmlFoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial state goes here
    };
  }
  componentDidMount() {
    // function checkDirection() {
    //   var htmlClassName = document.getElementsByTagName('html')[0].getAttribute('class');
    //   if(htmlClassName === 'rtl') {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    /*
    function carouselReview() {
       //testimonial one function by = owl.carousel.js 
      jQuery('.testimonial-one').owlCarousel({
        loop:true,
        autoplay:true,
        margin:15,
        nav:false,
        dots: false,
        left:true,
        rtl: checkDirection(),
        navText: ['', ''],
        responsive:{
          0:{
            items:1
          },
          800:{
            items:2
          }, 
          991:{
            items:2
          },      
      
          1200:{
            items:2
          },
          1600:{
            items:2
          }
        }
      })    
      jQuery('.testimonial-two').owlCarousel({
        loop:true,
        autoplay:true,
        margin:15,
        nav:false,
        dots: true,
        left:true,
        rtl: checkDirection(),
        navText: ['', ''],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },  
          991:{
            items:3
          },      
      
          1200:{
            items:3
          },
          1600:{
            items:4
          }
        }
      })          
    }
    
    jQuery(window).on('load', function() {
      setTimeout(function() {
        carouselReview();
      }, 1000); 
    });*/
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
        <script id="DZScript" src="/dzassets.s3.amazonaws.com/w3-global8bb6.js?btn_dir=right"></script>
      </React.Fragment>
    );
  }
}

export default HtmlFoot;
