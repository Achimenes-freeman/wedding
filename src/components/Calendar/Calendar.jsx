import styles from './styles.module.scss'
import classNames from 'classnames'
import circleImg from '../../assets/circle/circle4_1.png'

import Conclusion from '../Conclusion/Conclusion';

function Calendar({desktop}){    
    const calendarElements = [
        {id:1, month: "июль", day: "среда",     date: 8 },
        {id:2, month: "июль", day: "четверг",   date: 9 },
        {id:3, month: "июль", day: "пятница",   date: 10},
    ];
    
    const calendarElementsExtended = [
        {id:1, month: "июль", day: "вторник",   date: 7 },
        {id:2, month: "июль", day: "среда",     date: 8 },
        {id:3, month: "июль", day: "четверг",   date: 9 },
        {id:4, month: "июль", day: "пятница",   date: 10},
        {id:5, month: "июль", day: "суббота",   date: 11},
    ];
    
    return (
        <div className={classNames(styles.container, styles.Calendar)}>
            
            <div className={styles.Calendar_items}>
               {(!desktop ? calendarElements : calendarElementsExtended).map((item)=> (
                    <div className={styles.Calendar_item} key={item.id}>
                        <div className={styles.Calendar_item_header}>
                            <p className={styles.Calendar_item_header_text}>{item.day}</p>
                        </div>
                        <div className={styles.Calendar_item_body}>
                            <p className={styles.Calendar_item_subtitle}>{item.month}</p>
                            <span className={styles.Calendar_item_date}>{item.date}</span>
                        </div>
                    </div>  
                ))} 
                
                <div className={styles.Calendar_decoration}>
                    <img className={styles.Calendar_decoration_circle_img} src={circleImg} alt="" />
                </div>
            </div>
            
            <Conclusion title={"save our date!"} subtitle={"(освободите день для нас!)"}/>
        </div>
    )
}

export default Calendar 