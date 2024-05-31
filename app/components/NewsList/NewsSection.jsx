'use client'
import { useEffect, useState } from "react";
import { NewsList } from "./Newslist";
import { useStore } from "@/app/store/app-store";
import { AddNews } from "../Buttons/AddNews";

export const NewsSection = (props) => {
    const authContext = useStore();
    const [adminMode, setAdminMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const data = props.data

    useEffect(() => {
        if (authContext.user.email === "admindiverse@gmail.com") {
            setAdminMode(true)
        }
    }, [authContext.user])

    useEffect(() => {
        setIsLoading(false);
        setIsDataAvailable(Object.keys(data).length > 0)
    }, [data]);

    return (

        <div>
            {isLoading ?
                (
                    <div>Загрузка...</div>
                )
                : isDataAvailable ?
                    (
                        <div>
                            <NewsList data={data} />
                            {adminMode && <AddNews/>}
                        </div>

                    )
                    :
                    (
                        <div className="error_message">
                            <p className="error_text">Новые Статьи появятся свосем скоро</p>
                            <img src="./images/NoFriends.png" className="error_img" />
                        </div>
                    )
            }

        </div>


    );
}


