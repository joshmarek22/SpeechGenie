import React from 'react';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
function Footer() {
    const footerContainer = {
        color: 'white',
        position: 'fixed',
        bottom: 0,
        left: 0, 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: '10px 20px', 
        boxSizing: 'border-box', 
    };

    const leftFoot = {
        textAlign: 'left'
    };

    const rightFoot = {
        textAlign: 'right',
        alignItems: 'center', 
    };

    return (
        <div style={footerContainer}>
            <div style={leftFoot}>
                <p>&copy; 2024 SpeechGeenie</p>
            </div>
            <div style={rightFoot}>
                <a href="https://github.com/joshmarek22" style={{ marginRight: '10px', textDecoration: 'none'}} target='_blank'> <GitHubIcon/> </a>
                <a href="https://www.linkedin.com/in/josh-marek-02166a232/" style={{textDecoration: 'none'}} target='_blank'><LinkedInIcon /></a>
            </div>
        </div>
    );
}

export default Footer;
