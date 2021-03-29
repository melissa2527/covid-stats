import React from 'react'
import styles from './Footer.module.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer_items}>
                    <GitHubIcon />
                    <EmailIcon />
                    <LinkedInIcon />
            </div>

            <div className={styles.footer_name}>
                Melissa Genger - 2021
            </div>
        </div>
    )
}

export default Footer