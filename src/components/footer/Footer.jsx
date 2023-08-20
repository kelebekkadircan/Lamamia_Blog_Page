import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

function Footer() {

    console.log("Merhaba");

    return (
        <>
            <div className={styles.container}>
                <div>
                    &copy; 2023 Lamamia. All Rights Reserved
                </div>

                <div className={styles.social}>
                    <Image src="/1.png" width={18} height={18} className={styles.icon} alt="Kadircanın Sitesi" />
                    <Image src="/2.png" width={18} height={18} className={styles.icon} alt="Kadircanın Sitesi" />
                    <Image src="/3.png" width={18} height={18} className={styles.icon} alt="Kadircanın Sitesi" />
                    <Image src="/4.png" width={18} height={18} className={styles.icon} alt="Kadircanın Sitesi" />

                </div>

            </div>

        </>

    )
}

export default Footer