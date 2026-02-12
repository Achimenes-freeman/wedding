import styles from "./wishes.module.scss"
import classNames from "classnames";
import Conclusion from "../Conclusion/Conclusion";

function Wishes(){
    
    return (
        <div className={classNames(styles.container, styles.Wishes)}>
            
            <Conclusion title={"Пожелания:"}/>
            
            <ul className={styles.Wishes_list}>
                <li className={styles.Wishes_list_item}>
                    <p className={styles.Wishes_text}>
                       Надеемся, что у вас будет <span className={classNames(styles.Wishes_text_modifier, styles.Wishes_text_nowrap)}>возможность</span> оставить детей под присмотром на этот вечер и полностью погрузиться в атмосферу праздника вместе с нами
                    </p>
                    <div className={styles.Wishes_number}>1</div>
                </li>
                
                <li className={styles.Wishes_list_item}>
                    <p className={styles.Wishes_text}>
                        Лучшая <span className={classNames(styles.Wishes_text_modifier, styles.Wishes_text_nowrap)}>поддержка</span> для нас – ваши искренние пожелания и лучезарные улыбки, остальное можно поместить в конверт
                    </p>
                    <div className={styles.Wishes_number}>2</div>
                </li>
                
                <li className={styles.Wishes_list_item}>
                    <p className={styles.Wishes_text}>
                        Пожалуйста, <span className={classNames(styles.Wishes_text_modifier, styles.Wishes_text_nowrap)}>не дарите</span> нам цветы - сразу после свадьбы мы отправимся в путешествие и <span className={styles.Wishes_text_nowrap}>не успеем</span> насладиться их красотой 
                    </p>
                    <div className={styles.Wishes_number}>3</div>
                </li>
            
                <li className={styles.Wishes_list_item}>
                    <p className={styles.Wishes_text}>
                        Для тех, кто все же хочет порадовать нас дополнительным сюрпризом, мы с благодарностью составили<span className={classNames(styles.Wishes_text_modifier, styles.Wishes_text_nowrap)}> список желаний</span>
                        <br />
                        <a className={styles.Wishes_wishList} target="_blank" href="https://followish.io/mywishlist/nrfbfyetvxfd6m">=&gt; перейти к списку &lt;=</a>
                    </p>

                    <div className={styles.Wishes_number}>4</div>
                </li>
            
                <li className={styles.Wishes_list_item}>
                    <p className={styles.Wishes_text}>
                        Будем очень признательны, если Вы воздержитесь от криков <span className={classNames(styles.Wishes_text_modifier, styles.Wishes_text_nowrap)}>«Горько»</span>. 
                        Ведь поцелуй – это знак выражения чувств, <span className={styles.Wishes_text_nowrap}>а они не могут быть по заказу</span>
                    </p>
                    <div className={styles.Wishes_number}>5</div>
                </li>
            </ul>
        </div>
    )
}

export default Wishes;