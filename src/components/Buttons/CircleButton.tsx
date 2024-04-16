import React from 'react'
import styles from "@/styles/buttons/circle-button.module.scss"
import ICircleButton from '@/interfaces/ICircleButton'

const CircleButton = (props:ICircleButton) => {
  return (
   <button className={styles.button} onClick={props.onClick}>{props.children}</button>
  )
}

export default CircleButton