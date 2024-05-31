'use client'
import Styles from './Footer.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className={Styles.menu}>

            <ul className={Styles.menu_list}>
                <li className={Styles.menu_item}>
                    {
                        pathname.startsWith("/news") || pathname.startsWith("/news/") ?
                            (<Link href="/news" className={Styles.menu_link}><img src="/images/news_active.svg" className={Styles.nav_img} />Новости</Link>)
                            :
                            (<Link href="/news" className={Styles.menu_link}><img src="/images/news.svg" className={Styles.nav_img} />Новости</Link>)
                    }
                </li>
                <li className={Styles.menu_item}>
                    {
                        pathname === "/" || pathname.startsWith("/places/") ?
                            (<Link href="/" className={Styles.menu_link}><img src="/images/location_active.svg" className={Styles.nav_img} />Места</Link>)
                            :
                            (<Link href="/" className={Styles.menu_link}><img src="/images/location.svg" className={Styles.nav_img} />Места</Link>)
                    }
                </li>
                <li className={Styles.menu_item}>
                    {
                        pathname === "" ?
                            (<Link href="/chat" className={Styles.menu_link}><img src="/images/chat_active.svg" className={Styles.nav_img} />Чаты</Link>)
                            :
                            (<Link href="/chat" className={Styles.menu_link}><img src="/images/chat.svg" className={Styles.nav_img} />Чаты</Link>)
                    }
                </li>
                <li className={Styles.menu_item}>
                    {
                        pathname === "/profile" || pathname === "/events" || pathname === "/friends" || pathname === "/sets" ?
                            (<Link href="/profile" className={Styles.menu_link}><img src="/images/profile_active.svg" className={Styles.nav_img} />Профиль</Link>)
                            :
                            (<Link href="/profile" className={Styles.menu_link}><img src="/images/profile.svg" className={Styles.nav_img} />Профиль</Link>)
                    }
                </li>


            </ul>

        </footer>
    )

}

