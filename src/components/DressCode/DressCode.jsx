import styles from "./style.module.scss"
import classNames from "classnames";

function DressCode(){
    
    return (
        <div className={classNames(styles.container, styles.DressCode)}>
            <ul className={styles.DressCode_colors}>
                <div className={styles.DressCode_text_wrap}>
                    <p className={styles.DressCode_text}>Мы очень старались сделать праздник красивым и будем рады, если в своих нарядах Вы поддержите цветовую гамму <span className={styles.no_wrap}>нашей свадьбы:</span></p>
                </div>
                <li className={classNames(styles.DressCode_colors_item, styles.DressCode_colors_item_darkGreen)}></li>
                <li className={classNames(styles.DressCode_colors_item, styles.DressCode_colors_item_normalGreen)}></li>
                <li className={classNames(styles.DressCode_colors_item, styles.DressCode_colors_item_normalPink)}></li>
                <li className={classNames(styles.DressCode_colors_item, styles.DressCode_colors_item_darkPink)}></li>
                <li className={classNames(styles.DressCode_colors_item, styles.DressCode_colors_item_lightPink)}></li>
            </ul>
            
        </div>
    )
}

export default DressCode;