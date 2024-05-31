
import Styles from "./Place.module.css";
import { getData, getPlaceByID } from "../../data/data-utils";
import { EventSingUp } from "@/app/components/Buttons/EventsSignUp";
import Link from "next/link";

import { endpoints } from "@/app/data/config";
export default async function Place(props) {
    
    const data = await getData(endpoints.places)
    const params = props.params;
    const place = getPlaceByID(data.places,params.id);
    return (

        <section className="main">
            <div className="page_head">
                <Link href="/">
                    <img src="/images/right_arrow.png" className="arrow" />
                </Link>
                <h2 className={Styles.place_title}> {place.title}</h2>

            </div>
            <div className={Styles.place}>
                <p className={Styles.place_adress}> Адресс:{place.adress}</p>
                <p className={Styles.event_date}> Дата мероприятия: {place.date}</p>
                <p className={Styles.place_disc}>{place.description}</p>
                <img className={Styles.place_img} src={place.image} />


            </div>
            <EventSingUp  users={place.users} teams={place.teams} id={params.id}/>

        </section>


    )
}