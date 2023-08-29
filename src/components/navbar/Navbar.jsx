"use client"
import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css';
import DarkModetoggle from '../DarkModeToggle/DarkModetoggle';
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/"
    },
    {
      id: 2,
      title: "About",
      url: "/about"
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog"
    },
    {
      id: 4,
      title: "Portfolio",
      url: "/portfolio"
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact"
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard"
    }
  ]
  return (
    <div className={style.container}>
      <Link href='/' className={style.logo}>React devloper</Link>
      <div className={style.links}>
        <DarkModetoggle />
        {
          links.map(({ id, title, url }, idx) => (
            <Link key={id} href={url} className={style.link}>{title}</Link>
          ))
        }
        <button className={style.logout} onClick={() => {
          console.log("logout")
        }}>
          logout
        </button>
      </div>
    </div>
  )
}

export default Navbar