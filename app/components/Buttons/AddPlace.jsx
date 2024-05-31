'use client';
import { useState } from "react";
import Styles from "./AddPlace.module.css"
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { NewPlace } from "../Forms/NewPlaceForm";
export const AddPlace = () => {
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
        Добавить грязное место
      </button>}
      
      <Overlay onCloseClick={closePopup} isOpen={isPopUpOpened} />
      <Popup onCloseClick={closePopup} isOpen={isPopUpOpened} >
        <NewPlace onCloseClick={closePopup} />
      </Popup>

    </section>
  )
}