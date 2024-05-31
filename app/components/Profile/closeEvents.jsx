import { getUserPlaceByID } from "@/app/data/data-utils";
import { endpoints } from "@/app/data/config";
import { Card } from "../CardsList/Card";
import Styles from "../CardsList/CardsList.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";

export const CloseEvents = (props) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = () => {
            getUserPlaceByID(endpoints.places, props.user)
                .then(filteredPlaces => {
                    setEvents(filteredPlaces);
                })
                .catch(error => {
                    console.error(error);
                });
        };
        fetchEvents();
    }, [props.user]);

    return (
        <section className={Styles.list_section}>
            <ul className={Styles.place_list}>
                {events.map((item) => (
                    <li className={Styles.place_item} key={item.id}>
                        <Link href={`/places/${item.id}`} className={Styles.place_link}>
                            <Card {...item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}