
import Styles from "./SetList.module.css";
import Link from 'next/link';

export const Sets = () => {
    

    return (

        <section className={Styles.setlist_section}>
            <ul className={Styles.set_list}>
                <li className={Styles.set_item} >
                    <Link href="/personalinfo" className={Styles.set_link}>
                    <img src="./images/event.svg" className={Styles.set_img}/>
                    <p className={Styles.set_text}>Личные данные</p>
                    </Link>
                </li>
                <li className={Styles.set_item} >
                    <Link href="" className={Styles.set_link}>
                    <img src="./images/friends.svg" className={Styles.set_img}/>
                    <p>О проекте</p>
                    </Link>
                </li>
                <li className={Styles.set_item} >
                    <Link href="" className={Styles.set_link}>
                    <img src="./images/notif.svg" className={Styles.set_img}/>
                    <p>Служба поддержки</p>
                    </Link>
                </li>
                
            </ul>
            
        </section>


    )
}