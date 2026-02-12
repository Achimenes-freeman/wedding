import styles from './style.module.scss';
import envelope from '../../assets/envelop/envelopeShort.png'
import classNames from 'classnames'
import { useState, useEffect} from 'react';

function Invite() {
  
  let [modalActive, SetModalActive] = useState(false);
  
  function ToggleModel(e){
    e.preventDefault;
    e.stopPropagation;
    SetModalActive(!modalActive);
  }
  
  useEffect(()=>{
    if (modalActive){
      document.body.classList.add(styles.scroll_disable)
    }
    
    return () => {
      document.body.classList.remove(styles.scroll_disable)
    }
  },[modalActive])
  
  return (
    <div className={classNames(styles.container, styles.Invite)}>
        <div className={styles.Invite_envelop_box} onClick={ToggleModel}>
            <img className={styles.Invite_envelop_img} src={envelope} alt="" />
            <span className={styles.Invite_envelop_action_text}>click</span>
        </div>
        <div className={classNames(styles.Invite_envelop_modal, modalActive ? '' :  styles.hide)}>
          <div className={styles.Invite_envelop_modal_mask}  onClick={ToggleModel}></div>
          <div className={styles.Invite_envelop_text_wrap}>
            <p className={styles.Invite_envelop_text}>
                <span className={styles.Invite_envelop_text_modifier}>Один день</span> в этом году будет для нас особенным <br/>и мы хотим провести его в кругу <span className={styles.Invite_envelop_text_modifier}>близких и друзей</span>.<br />
                <span className={styles.Invite_envelop_text_modifier}>С большим</span> удовольствием приглашаем вас на знаменательный праздник - <span className={styles.Invite_envelop_text_modifier}>нашу свадьбу</span>
            </p> 
          </div>
        </div>
    </div>
  )
}

export default Invite