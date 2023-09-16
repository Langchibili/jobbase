import React, { Component } from 'react';
import Head from 'next/head';
import { Padding } from '@mui/icons-material';
class HtmlHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial state goes here
    };
  }

  render() {
    return (
            <Head>
              <meta charSet="utf-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="keywords" content="" />
              <meta name="author" content="" />
              <meta name="robots" content="" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="description" content="driverbase : your number one portal for finding jobs as a driver" />
              <meta property="og:image" content="social-image.png" />
              <meta name="format-detection" content="telephone=no" />
              <title>{this.props.pageTitle+' | DriverBase'}</title>
              {/* Favicon icon */}
              <link rel="icon" type="image/png" sizes="16x16" href="/DriverBaseTransparentBackground.png" />
              {/* <link href="/template/vendor/jqvmap/css/jqvmap.min.css" rel="stylesheet" /> */}
              {/* <link rel="stylesheet" href="/template/vendor/chartist/css/chartist.min.css" /> */}
              {/* Vectormap */}
              {/* <link href="/template/vendor/jqvmap/css/jqvmap.min.css" rel="stylesheet" /> */}
              <link href="/template/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />
              {/* <link href="/template/vendor/owl-carousel/owl.carousel.css" rel="stylesheet" /> */}
              <link href="/cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet" />
              <link href="/template/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />
              <link href="/template/css/style.css" rel="stylesheet" />
              {/* <link href="/template/vendor/jquery-smartwizard/dist/css/smart_wizard.min.css" rel="stylesheet"/> */}
              {/* <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
              <meta http-equiv="Pragma" content="no-cache" />
              <meta http-equiv="Expires" content="0" /> */}
            </Head>
    );
  }
}

export default HtmlHead;
