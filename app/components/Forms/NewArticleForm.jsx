import Styles from './NewPlaceForm.module.css';
import { useState } from 'react';
import { endpoints } from '@/app/data/config';
import { addNewPlace } from '@/app/data/data-utils';

export const NewArticle = (props) => {
  const [formData, setPlaceData] = useState({ title: "", description: "", text: "" });
  
  const handleInput = (e) => {
    setPlaceData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      news: {
        title: formData.title,
        description: formData.description,
        text: formData.text
      }
    }
    await addNewPlace(endpoints.news, body); 
    props.onCloseClick()
    e.target.reset();
  
  };
  

  return (
    <form className={Styles['form']} onSubmit={handleSubmit}>
      <h2 className={Styles['form__title']}>Новая Статья</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Название:</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="text"  name="title" />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Описание:</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="text" name="description" />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Текст:</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="text" name="text" />
        </label>
      </div>
      <div className={Styles['form__actions']}>
        <button className={Styles['form__submit']} type="submit">Добавить</button>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
      </div>
    </form>
  )
};
