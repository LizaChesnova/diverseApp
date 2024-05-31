import Styles from "./CardsList.module.css"
import Link from "next/link";
import { Card } from "./Card";

export const CardsList =  (props) => {
    return (
        <section className={Styles.list_section}>
            <ul className={Styles.place_list}>
                {props.data.places.map((item) => {
                    return (
                        <li className={Styles.place_item} key={item.id} >
                            <Link href={`/places/${item.id}`} className={Styles.place_link}>
                                <Card {...item}/>
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </section>
    )
}

