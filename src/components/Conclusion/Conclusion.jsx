import styles from './styles.module.scss'

function Conclusion({title, subtitle}){
    
    return (
        <div className={styles.Conclusion}>
            <h3 className={styles.Conclusion_title}>
                {title} 
            </h3>
            {subtitle ?
            <p className={styles.Conclusion_subtitle}>
                {subtitle}
            </p> : null
            } 
        </div>    
    )
}

export default Conclusion