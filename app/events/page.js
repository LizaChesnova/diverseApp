'use client'
import Link from "next/link";
import { CloseEvents } from "../components/Profile/closeEvents";
import { useStore } from "../store/app-store";
import { useEffect, useState } from "react";

export default function Home() {
  const authContext = useStore();
  const [haveEvents, setHaveEvents] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authContext.user.events ) {
      setHaveEvents(false);
    } else {
      setHaveEvents(true);
    }
    setIsLoading(false);
  }, [authContext.user.events]);
  


  return (

    <main className="main">
      <div className="page_head">
        <Link href="/profile">
          <img src="./images/right_arrow.png" className="arrow" />
        </Link>
        <h2 className="page_title">
          Ближайшие мероприятия
        </h2>

      </div>
      {
        isLoading ? (
          <div>Загрузка...</div>) :
          haveEvents ?
            (<CloseEvents user={authContext.user} />)
            :
            (<div className="error_message">
              <p className="error_text">
                У вас нет ближайших мероприятий
              </p>
              <img src="./images/NoEvents.png" className="error_img" />
              <form action="/">
                <button className="error_button"> Записаться на мероприятие </button>

              </form>
            </div>)
      }


    </main>
  );
}
