import Styles from "./SetList.module.css";
import Link from 'next/link';

export const SetList = () => {

    return (

        <section className={Styles.setlist_section}>
            <ul className={Styles.set_list}>
                <li className={Styles.set_item} >
                    <Link href="/events" className={Styles.set_link}>
                    <img src="./images/event.svg" className={Styles.set_img}/>
                    <p className={Styles.set_text}>Ближайшие мероприятия</p>
                    </Link>
                </li>
                <li className={Styles.set_item} >
                    <Link href="/friends" className={Styles.set_link}>
                    <img src="./images/friends.svg" className={Styles.set_img}/>
                    <p>Друзья</p>
                    </Link>
                </li>
                <li className={Styles.set_item} >
                    <Link href="" className={Styles.set_link}>
                    <img src="./images/notif.svg" className={Styles.set_img}/>
                    <p>Уведомления</p>
                    </Link>
                </li>
                <li className={Styles.set_item} >
                    <Link href="/sets" className={Styles.set_link}>
                    <img src="./images/sets.svg" className={Styles.set_img}/>
                    <p>Настройки</p>
                    </Link>
                </li>
            </ul>
        </section>


    )
}