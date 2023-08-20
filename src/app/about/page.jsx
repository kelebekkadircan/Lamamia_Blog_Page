import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt="" />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storylerrs</h1>
                    <h2 className={styles.imgDesc} >Hnadcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1>Who Are We?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, tempora veritatis maiores aperiam sint ut nostrum dolores rem qui consectetur alias aut! Sint natus aut et accusamus a autem reprehenderit adipisci id quasi, ipsa sed. Quaerat, a cupiditate impedit saepe minima obcaecati possimus voluptas nostrum? Blanditiis nemo porro aspernatur assumenda ex temporibus consectetur, ipsam totam officia voluptatum rerum provident reiciendis!                        <br />
                        <br />
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto magni expedita dolore temporibus amet illum dicta, eos excepturi pariatur laudantium inventore placeat labore, molestiae facilis animi quam assumenda repellendus?
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>
                        What We Do ?
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat autem unde enim aliquam necessitatibus nihil odit laudantium delectus quidem sed est nesciunt rem eligendi impedit in velit iure quaerat amet consequuntur, itaque aut optio? Aspernatur ea dolore sit est ducimus. Nemo repudiandae tempora quia in esse officiis! Voluptate, vel a.
                        <br />
                        <br />
                        - Creative Illustrations
                        <br />
                        <br />
                        - Dynamic Websites
                        <br />
                        <br />
                        - Fast and Handy Mobile Apps
                    </p>
                    <Button url='/contact' text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About