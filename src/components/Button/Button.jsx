import Link from 'next/link';
import React from 'react';
import style from './button.module.css';
const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className={style.container}>
        {text}
      </div>
    </Link>
  )
}

export default Button