import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <p>With love from <img src="public/img/logo.png" className="logo"/>
                    and <img src="public/img/soundcloud.png" className="soundcloud"/>
                </p>
            </div>
        )
    }
}

export default Footer;