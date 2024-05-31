'use client'
import Styles from './NewPlaceForm.module.css';
import { deletArticl, editProfile } from '@/app/data/data-utils';
import { useEffect, useState } from 'react';
import { endpoints } from '@/app/data/config';

import { useStore } from '@/app/store/app-store';

export const ArticlEditForm = (props) => {
    
    const [formData, setPlaceData] = useState({ title: "", description: "", text: ""});
    const title = props.data.title
    const descr = props.data.description
    const text = props.data.text
    const id = props.data.id

    const handleInput = (e) => {
        setPlaceData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let body = {
          news: {
            title: formData.title || props.data.title,
            description: formData.description || props.data.description,
            text: formData.text || props.data.text
          }
        };
      
        await editProfile(endpoints.news + '/' + id, body);
        props.close();
        e.target.reset();
      };
    return (
        <div>


            <form className={Styles['form']} onSubmit={handleSubmit}>
            <h2 className={Styles['form__title']}> {props.data.title}</h2>
                <div className={Styles['form__fields']}>
                    <label className={Styles['form__field']}>
                        <span className={Styles['form__field-title']}>Название</span>
                        <input className={Styles['form__field-input']} onInput={handleInput} type="text"  name='title' />
                    </label>
                    <label className={Styles['form__field']}>
                        <span className={Styles['form__field-title']}>Описание</span>
                        <input className={Styles['form__field-input']} onInput={handleInput} type="text"  name='description' />
                    </label>
                    <label className={Styles['form__field']}>
                        <span className={Styles['form__field-title']}>Текст</span>
                        <input className={Styles['form__field-input']} onInput={handleInput} type="text"  name='text' />
                        
                    </label>
                </div>
                <div className={Styles['form__actions']}>
                    <button className={Styles['form__submit']} type="submit">Редактировать статью</button>
                    <button className={Styles['form__delet']} type="button" onClick={deletArticl(endpoints.news + '/' + id)}>Удалить статью</button>
                </div>
            </form>


        </div>


    )
};