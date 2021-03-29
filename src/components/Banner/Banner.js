import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.image} 
                src='/img/virus.jpg'
                alt='Background Image'
                // layout='fill'
                // layout='responsive'
                objectFit= 'cover'
                height={400}
                width={2000}
                objectPosition = 'center'
            />
            <h1 className={styles.title}>Covid Statistics</h1>
        </div>
    )
}

export default Banner;
