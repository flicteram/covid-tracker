import React from "react";
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
    const iconsStyles={
        color:'white',
        fontSize:'30px',
        transition:'color 500ms',
        '&:hover':{
            color:'rgb(113, 149, 255)',
        }
    }
    return (
        <footer>
            <h4>Made by Alexandru Flicter</h4>
            <div className='iconsFooter'>
                <a href='https://github.com/flicteram' target={'_blank'} rel='noreferrer'><GitHubIcon sx={iconsStyles}/></a>
                <a href='https://www.linkedin.com/in/alexandru-flicter-3b70ab220/' target={'_blank'} rel='noreferrer'><LinkedInIcon sx={iconsStyles}/></a>
                <a href='https://www.facebook.com/profile.php?id=100009972224077' target={'_blank'} rel='noreferrer'><FacebookIcon sx={iconsStyles}/></a>
            </div>
        </footer>
    )
}