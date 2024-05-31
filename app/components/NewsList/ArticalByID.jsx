'use client'
import Styles from "@/app/news/[id]/Place.module.css";

import { useState, useEffect } from "react";

import { useStore } from "@/app/store/app-store";
import { EditArticle } from "../Buttons/EditArticle";
import { deletArticl } from "@/app/data/data-utils";
import { endpoints } from "@/app/data/config";
export const ArticlById = (props) => {
    const authContext = useStore();
    const [adminMode, setAdminMode] = useState(false)
    useEffect(() => {
        if (authContext.user.email === "admindiverse@gmail.com") {
            setAdminMode(true)
        }
    }, [authContext.user])

    return (
        <section>
            <div className={Styles.place}>
                <p className={Styles.place_title}>{props.data.title} </p>
                <p className={Styles.place_disc}>{props.data.text}</p>
            </div>

            {adminMode && <EditArticle data={props.data} />}

        </section>




    )
}