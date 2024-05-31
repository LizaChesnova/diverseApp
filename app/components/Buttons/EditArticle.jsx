'use client';
import { useState } from "react";
import Styles from "./AddPlace.module.css"
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { ArticlEditForm } from "../Forms/ArticlEditForm";

export const EditArticle = (props) => {
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
        Редактировать информацию
      </button>}
      
      <Overlay onCloseClick={closePopup} isOpen={isPopUpOpened} />
      <Popup onCloseClick={closePopup} isOpen={isPopUpOpened} >
        <ArticlEditForm  close={closePopup} data={props.data}/>
      </Popup>

    </section>
  )
}