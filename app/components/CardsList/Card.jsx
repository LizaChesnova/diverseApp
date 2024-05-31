import Styles from "./Card.module.css"

export const Card =  (props) => {
  return (
    <div className={Styles.place_card}>
      <div className={Styles.gradient}>
      </div>
      <img className={Styles.place_img} src={props.image} />
      <div className={Styles.place_description}>
        <p className={Styles.place_name}>{props.title}</p>
        <p className={Styles.place_adress}>{props.adress}</p>
      </div>

    </div>
  )
}