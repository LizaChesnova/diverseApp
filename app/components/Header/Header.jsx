'use client';

import Link from 'next/link';
import Styles from './Header.module.css'

export const Header = () =>{
  
    return (
      <header className={Styles.header}>
        <Link href="/" className="logo"><img className="logo_img" src="/images/Vector.svg" /></Link>
        <img className="notification" src="/images/Bell.svg" />
    </header>
    )
  }

  