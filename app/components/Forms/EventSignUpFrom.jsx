'use client'
import Styles from './NewPlaceForm.module.css';
import { AddTeam,getMe,signUpOnEvent } from '@/app/data/data-utils';
import { useEffect, useState } from 'react';
import { endpoints } from '@/app/data/config';
import { useParams } from 'next/navigation';
import { useStore } from '@/app/store/app-store';
export const EventSingUpForm =  (props) => {
    const authContext=useStore();
    const isAuth=(authContext.user? true:false)
    const [user,setUser] = useState(null)
    const [formData, setPlaceData] = useState({ team: "" });
    const params = useParams();
    const placeid = params.id
    const teams = props.teams
    useEffect(()=>{
        getMe(endpoints.users, authContext.token).then((userData => {
            setUser(userData)
        }))
    },[])
    const handleInput = (e) => {
        setPlaceData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let body1={}
        if(!teams){
            body1 = {
                place: {
                    teams: formData.team 
                }
            }
        }
        else{
            body1 = {
            place: {
                teams: teams + ',' + formData.team
            }
        }}
        let body2
        if(!events){
            body2 = {
                user: {
                    events: '"'+placeid+'"'
                }
            }
        }
        else{
            body2 = {
                user: {
                    events: '"'+ authContext.user.events + placeid +'"'
                }
            }

        }
        
        await AddTeam(endpoints.places+'/'+ placeid, body1);
        await signUpOnEvent(endpoints.users+'/'+ authContext.user.id, body2)
        props.signedUp();
        props.close();
        e.target.reset();
    };
    return (
        <div>
            {isAuth ?

                <form className={Styles['form']} onSubmit={handleSubmit}>
                    <div className={Styles['form__fields']}>
                        <label className={Styles['form__field']}>
                            <span className={Styles['form__field-title']}>Ваша Команда/ Ваше Имя:</span>
                            <input className={Styles['form__field-input']} onInput={handleInput} type="text" placeholder="Пример: Команда GohstBusters" name='team' />
                        </label>
                    </div>
                    <div className={Styles['form__actions']}>
                        <button className={Styles['form__submit']} type="submit">Записаться</button>
                    </div>
                </form>
                :
                <div className="error_message">
                    <p className="error_text">
                        Зарегистрируйтесь, чтобы записаться на мероприятие
                    </p>
                    <img src="/images/LogIn.png" className="error_img" />
                    <form action='/profile'>
                        <button className="error_button"> Зрегистрироваться</button>
                    </form>

                </div>


            }

        </div>


    )
};