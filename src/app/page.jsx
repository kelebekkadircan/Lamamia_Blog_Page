import Image from "next/image";
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from "@/components/Button/Button";






export default function Home() {


  return (
    <>

      <div>
        <div className={styles.container}>
          {/* <Image width={350} height={280} src="https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=600" /> */}
          <div className={styles.item}>
            <h1 className={styles.title}>
              Better design for your digital products
            </h1>
            <p className={styles.desc}>
              Turning your Idea into Reality. We bring together the teams from the global tech industry
            </p>
            {/* <button className={styles.button}>
              See Our Works
            </button> */}
            <Button url='/portfolio' text="See Our Works" />
          </div>
          <div className={styles.item}>
            <Image src={Hero} className={styles.img} />

          </div>
        </div>
      </div>

    </>

  )
}
