import styles from './style.module.scss'
import classNames from 'classnames';

function DateSplitter()
{
    let date = "09.07.2026";
    
    let even = []; 
    let odd = []; 
    
    for (let i = 0; i < 30; i++){
      even[i] = (<h3 key={i} className={styles.DateSplitter_date}>{date}</h3>);
      if (i < 29)
      {
        odd[i] = (<h3 key={i} className={styles.DateSplitter_date}>{date}</h3>);
      }
    }    
    
    return (
        <div className={classNames(styles.DateSplitter)}>
          <div className={styles.DateSplitter_flex}>
            {even.map(item => item)}
          </div>
          
          <div className={styles.DateSplitter_flex}>
            {odd.map(item => item)}  
          </div>
          
          <div className={styles.DateSplitter_flex}>
            {even.map(item => item)}
          </div>    
        </div>
    )
}

export default DateSplitter