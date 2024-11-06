import React from 'react';

const SuccessIndicator = () => (
    <div className="success-indicator">
        <div className="checkmark">
            <span className="line tip"></span>
            <span className="line long"></span>
            <div className="circle"></div>
            <div className="fix"></div>
        </div>
        <p>Success! Your message has been sent.</p>
    </div>
);

export default SuccessIndicator;
