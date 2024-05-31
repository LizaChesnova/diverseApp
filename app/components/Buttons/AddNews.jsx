'use client';
import { useState } from "react";
import Styles from "./AddPlace.module.css"
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { NewArticle } from "../Forms/NewArticleForm";
import { useStore } from "@/app/store/app-store";
export const AddNews = () => {
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);
  const openPopup = () => {
    setIsPopUpOpened(true);
  }
  const closePopup = () => {
    setIsPopUpOpened(false);
  }
  return (
    <section className={Styles.add}>
      {!isPopUpOpened &&<button className={Styles.add_button} onClick={openPopup}>
        <img className={Styles.plus} src="/images/plus.svg" />
        Добавить статью
      </button>}
      
      <Overlay onCloseClick={closePopup} isOpen={isPopUpOpened} />
      <Popup onCloseClick={closePopup} isOpen={isPopUpOpened} >
        <NewArticle onCloseClick={closePopup} />
      </Popup>

    </section>
  )
}