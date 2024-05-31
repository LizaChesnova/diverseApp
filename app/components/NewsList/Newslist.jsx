import Styles from "./NewsList.module.css"
import Link from "next/link";
import { Artical } from "./Artical";


export const NewsList =(props) => {
    return (
        <section className={Styles.list_section}>
            <ul className={Styles.place_list}>
                {props.data.news.map((item) => {
                    return (
                        <li className={Styles.place_item} key={item.id} >
                            <Link href={`/news/${item.id}`} className={Styles.place_link}>
                                <Artical {...item}/>
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </section>
    )
}

