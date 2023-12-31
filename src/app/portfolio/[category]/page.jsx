import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import { items } from "./data.js"
import { notFound } from 'next/navigation'

const getData = (cat) => {
    const data = items[cat]

    if (data) {
        return data
    }

    return notFound()

}

const Category = ({ params }) => {

    const data = getData(params.category)

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle} > {params.category} </h1>

            {data.map(item => (


                <div className={styles.item}>

                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button text='See More' url="#" />
                    </div>

                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.imgContainer}
                            fill={true}
                            src={item.image}
                            alt="deneme"

                        />

                    </div>

                </div>

            ))}




        </div>

    )
}

export default Category