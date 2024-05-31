'use client'
import Styles from './NewPlaceForm.module.css';
import { editProfile } from '@/app/data/data-utils';
import { useEffect, useState } from 'react';
import { endpoints } from '@/app/data/config';

import { useStore } from '@/app/store/app-store';

export const EditForm = (props) => {
    const authContext = useStore()
    const user = authContext.user
    const [formData, setPlaceData] = useState({ name: ""});

    const handleInput = (e) => {
        setPlaceData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let body = {}
            body = {
                user: {
                    name: formData.name
                }
            }

        await editProfile(endpoints.users + '/' + user.id, body);
        props.close();
        e.target.reset();
    };
    return (
        <div>


            <form className={Styles['form']} onSubmit={handleSubmit}>
                <div className={Styles['form__fields']}>
                    <label className={Styles['form__field']}>
                        <span className={Styles['form__field-title']}>Новые данные</span>
                        <input className={Styles['form__field-input']} onInput={handleInput} type="text" placeholder="Пример: Артем" name='name' />
                    </label>
                </div>
                <div className={Styles['form__actions']}>
                    <button className={Styles['form__submit']} type="submit">Редактировать</button>
                </div>
            </form>


        </div>


    )
};