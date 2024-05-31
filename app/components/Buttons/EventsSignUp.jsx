'use client';
import { useState } from "react";
import Styles from "./AddPlace.module.css"
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { EventSingUpForm } from "../Forms/EventSignUpFrom";
import { useStore } from "@/app/store/app-store";
import { useEffect } from "react";
export const EventSingUp = (props) => {
  const authContext=useStore();
  const [isPopUpOpened, setIsPopUpOpened] = useState(null);
  const [isAtanding,setIsAtanding]=useState(false)
  useEffect(()=>{
    if (authContext.user){
      if(!authContext.user.events){
        setIsAtanding(false)
      }
      else if(authContext.user.events.includes(props.id)){
        setIsAtanding(true)
      }
    }
    
  },[])


  const openPopup = () => {
    setIsPopUpOpened(true);
  }
  const closePopup = () => {
    setIsPopUpOpened(false);
  }
  const changeBtn=()=>{
    setIsAtanding(true)
  }
  return (
    <section className={Styles.add}>
      {!isPopUpOpened &&<button className={Styles.add_button} onClick={openPopup} disabled={isAtanding}>
        {isAtanding? "Вы записаны":"Учааствовать"}
      </button>}
      
      <Overlay onCloseClick={closePopup} isOpen={isPopUpOpened} />
      <Popup onCloseClick={closePopup} isOpen={isPopUpOpened} >
        <EventSingUpForm users={props.users} teams={props.teams} close={closePopup} signedUp={changeBtn}/>
      </Popup>

    </section>
  )
}