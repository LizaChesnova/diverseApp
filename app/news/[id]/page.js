
import Styles from "./Place.module.css";
import { getData, getPlaceByID } from "../../data/data-utils";
import { EventSingUp } from "@/app/components/Buttons/EventsSignUp";
import Link from "next/link";

import { endpoints } from "@/app/data/config";
import { ArticlById } from "@/app/components/NewsList/ArticalByID";
export default async function Articl(props) {
    
    const data = await getData(endpoints.news)
    const params = props.params;
    const artical = getPlaceByID(data.news,params.id);
    return (

        <section className="main">
            <div className="page_head">
                <Link href="/news">
                    <img src="/images/right_arrow.png" className="arrow" />
                </Link>

            </div>
            <ArticlById data={artical}/>
            

        </section>


    )
}