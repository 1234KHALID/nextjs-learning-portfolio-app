import React from 'react'
import style from './footer.module.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className={style.container}>
      <div>
        <h4>11 @ copy
          right act
        </h4>
      </div>
      <div className={style.social}>
        <Image src='/1.png' className={style.icon} width={20} height={20} alt='loading' />
        <Image src='/2.png' className={style.icon} width={20} height={20} alt='loading' />
        <Image src='/3.png' className={style.icon} width={20} height={20} alt='loading' />
        <Image src='/4.png' className={style.icon} width={20} height={20} alt='loading' />
        {/* <ul className={style.socialmedia}>
          <li>YouTube</li>
          <li>Facebook</li>
          <li>twitter</li>
          <li>Telegram</li>
        </ul> */}
      </div>
    </div>
  )
}

export default Footer