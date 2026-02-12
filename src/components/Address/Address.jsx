import styles from './styles.module.scss'
import classNames from 'classnames'
import photo from '../../assets/they/addressPhoto.png'
import lines from '../../assets/lines/DoubleLineWide.svg'

import Conclusion from '../Conclusion/Conclusion'

function Address(){
    return (
        <div className={classNames(styles.container, styles.Address)}>
            <div className={styles.Address_content}>
                <div className={styles.Address_text_wrap}>
                    <p className={styles.Address_text}>
                        Праздник будет проходить в шикарном месте
                        <br />
                        <span className={classNames(styles.Address_text_modifier, styles.Address_text_modifier_place)}>"Sherwood" LOFT </span>
                        <br />
                        <span className={classNames(styles.Address_text_modifier, styles.Address_text_modifier_address)}>
                            По адресу: Московская область, округ Пушкинский, 
                            <br />деревня Герасимиха, территория Раздолье 5
                        </span>
                        
                    </p>
                </div>
                <div className={styles.Address_image_box}>
                    <img className={styles.Address_image} src={photo} alt="" />
                    <div className={styles.Address_image_background}></div>
                </div>
                <img className={classNames(styles.Address_content_line, styles.Address_content_line_top)} src={lines} alt="" />
                <img className={classNames(styles.Address_content_line, styles.Address_content_line_bottom)} src={lines} alt="" />
            </div>
            
            <Conclusion title={"Start at 15:00"} subtitle={"(Не опаздывать!)"}/>
            
        </div>
    )
}

export default Address