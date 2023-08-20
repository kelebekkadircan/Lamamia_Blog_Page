import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
// 'http://localhost:3000/api/posts'

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: 'no-store'
    })

    if (!res.ok) {

        throw new Error('Failed to fetch dataa')
    }

    return res.json()

}


const Blog = async () => {

    const data = await getData()



    return (
        <>
            <div className={styles.mainContainer}>

                {data.map((item) => (

                    <Link href={`/blog/${item._id}`} className={styles.container} key={item.id} >
                        <div className={styles.imageContainer}>
                            <Image
                                src={item.img}
                                alt="blog1"
                                width={400}
                                height={250}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title} </h1>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    </Link>


                ))}

            </div>


            {/* <Link href='/blog/testId' className={styles.container} >
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="blog2"
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Test</h1>
                        <p className={styles.desc}>Descripition</p>
                    </div>
                </Link>
                <Link href='/blog/testId' className={styles.container} >
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.pexels.com/photos/326709/pexels-photo-326709.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="blog3"
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Test</h1>
                        <p className={styles.desc}>Descripition</p>
                    </div>
                </Link>
                <Link href='/blog/testId' className={styles.container} >
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="blog4"
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Test</h1>
                        <p className={styles.desc}>Descripition</p>
                    </div>
                </Link> */}

        </>
    )
}

export default Blog