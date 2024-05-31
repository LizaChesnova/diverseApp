import Styles from './NewPlaceForm.module.css';
import { useState } from 'react';
import { endpoints } from '@/app/data/config';
import { addNewPlace } from '@/app/data/data-utils';

export const NewPlace = (props) => {
  const [formData, setPlaceData] = useState({ title: "", adress: "", description: "", date: "", image: "" });
  
  const handleInput = (e) => {
    setPlaceData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      place: {
        title: formData.title,
        adress: formData.adress,
        date: formData.date,
        description: formData.description
      }
    }
    await addNewPlace(endpoints.places, body); 
    props.onCloseClick()
    e.target.reset();
  
  };
  

  return (
    <form className={Styles['form']} onSubmit={handleSubmit}>
      <h2 className={Styles['form__title']}>Новое Место</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Название:</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="text" placeholder="Пример: Парк 300 летия" name="title" />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Точный адрес:</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="text" placeholder="Пример: Приморский пр., 74" name="adress" />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Описание:</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="text" name="description" />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Дата мероприятия:</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="date" name="date" />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Фотография</span>
          <input className={Styles.form_fieldinput} onInput={handleInput} type="file" placeholder="Фото" name="photo" />
        </label>
      </div>
      <div className={Styles['form__actions']}>
        <button className={Styles['form__submit']} type="submit">Добавить</button>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
      </div>
    </form>
  )
};
