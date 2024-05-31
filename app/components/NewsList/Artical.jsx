import Styles from "./Artical.module.css"

export const Artical =  (props) => {
  return (
    <div className={Styles.place_card}>
      <div className={Styles.place_description}>
        <p className={Styles.place_name}>{props.title}</p>
        <p className={Styles.place_adress}>{props.description}</p>
      </div>
      <img src="/images/more_arrow.svg" className={Styles.more_arrow}/>
    </div>
  )
}