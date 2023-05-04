import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial state goes here
    };
  }

  render() {
    return (
        <div className="footer">
            <div className="copyright">
                <p>Copyright © <a href="/" target="_blank">DriverBase</a> 2023</p>
            </div>
        </div>
   );
}
}

export default Footer;