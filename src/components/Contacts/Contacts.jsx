import styles from "./contacts.module.scss"
import classNames from "classnames"

import lines from '../../assets/lines/DoubleLineWide.svg'

import Conclusion from "../Conclusion/Conclusion"

function Contacts(){
    
    return (
        <div className={classNames(styles.container, styles.Contacts)}>
            
            <Conclusion title={"Контакты:"}/>
            
            <div className={styles.Contacts_content}>
                    <div className={styles.Contacts_text_wrap}>
                        <p className={styles.Contacts_text}>
                            Просим вас вступить в чат, где ближе к дате будет появляться вся необходимая информация по поводу мероприятия
                            <br />
                            <a href="https://t.me/+dcfVIcOno2diNTUy" target="_blank" className={classNames(styles.Contacts_text_tgLink)}>
                                <span className={styles.Contacts_text_negativeLetter}>==&gt;</span> Перейти в чат<span className={styles.Contacts_text_negativeLetter}> &lt;==</span>
                            </a>
                        </p>
                    </div>
                <img className={classNames(styles.Contacts_content_line, styles.Contacts_content_line_top)} src={lines} alt="" />
                <img className={classNames(styles.Contacts_content_line, styles.Contacts_content_line_bottom)} src={lines} alt="" />
            </div>
        </div>
    )
}

export default Contacts