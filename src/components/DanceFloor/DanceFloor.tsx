import styles from "@/styles/danceFloor/dance-floor.module.scss"
import Image from 'next/image'

const DanceFloor = () => {
  return (
    <div className={styles.container}>
        <Image alt="dance video" src='/images/dance.gif' height={220} width={200} quality={100}/>
    </div>
  )
}

export default DanceFloor