import React from 'react'
import Head from 'next/head';
import styles from './Layout.module.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link';


const Layout = ({children, title="Covid Stats"}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}></header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <div className={styles.footer_items}>
                    <Link href='https://github.com/melissa2527' target='_blank'>
                        <GitHubIcon className={styles.footer_item}/>
                    </Link>
                    <Link href='mailto:melissa.anne.genger@gmail.com' target='_blank'>
                        <EmailIcon className={styles.footer_item}/>
                    </Link>    
                    <Link  href='https://www.linkedin.com/in/melissa-anne-genger/' target='_blank'>
                        <LinkedInIcon className={styles.footer_item}/>
                    </Link>    
                </div>

                <div className={styles.footer_name}>
                    Melissa Genger - 2021
                </div>
                {/* {children} */}
            </footer>
        </div>
    )
}

export default Layout;