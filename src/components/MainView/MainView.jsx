import styles from './style.module.scss';
import classNames from 'classnames';
import mainPhoto from '../../assets/they/mainPhoto.png'
import lines from '../../assets/lines/DoubleLineWide.svg'

function MainView() {
    

    
  return (
    <div className={classNames(styles.container, styles.MainView)}>
      <div className={styles.MainView_flex_wrap}>
        <div className={styles.MainView_photo_box}>
          <img className={styles.MainView_photo_img} src={mainPhoto} alt="" />
        </div>
        <div className={styles.MainView_text_wrap}> 
          <p className={styles.MainView_text}>
            <span className={styles.MainView_text_modifier}>Один день</span> в этом году будет для нас особенным <br/>и мы хотим провести его в кругу <span className={styles.MainView_text_modifier}>близких и друзей</span>.<br />
            <span className={styles.MainView_text_modifier}>С большим</span> удовольствием приглашаем вас на знаменательный праздник - <span className={styles.MainView_text_modifier}>нашу свадьбу</span>
          </p> 
        </div>
        <img className={classNames(styles.MainView_photo_line, styles.MainView_photo_line_top)} src={lines} alt="" />
        <img className={classNames(styles.MainView_photo_line, styles.MainView_photo_line_bottom)} src={lines} alt="" />
      </div>
    </div>
  )
}

export default MainView