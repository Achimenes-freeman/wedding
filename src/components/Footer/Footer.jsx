import { useState, useEffect } from "react";
import styles from "./footer.module.scss"
import classNames from "classnames"

import photo from "../../assets/they/footerPhoto.png"

function Footer(){
    
    const MAX_MOBILE_SIZE = 767;
      const [width, setWidth] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const photoElement = 
        (<div className={styles.Footer_image_box}>
            <img className={styles.Footer_image} src={photo} alt="" />
        </div>)
      
    return (
        <div className={classNames(styles.container, styles.Footer)}>
            <div className={styles.Footer_backdrop}>
                
                <div className={styles.Footer_text_wrap}>
                    <p className={styles.Footer_text}>
                        при создании сайта ни один программист не пострадал 
                    </p>
                    <p className={styles.Footer_text}>
                        при создании сайта ни один программист не пострадал 
                    </p>
                </div>
                
                <div className={styles.Footer_content}>
                    {[photoElement, photoElement, photoElement]}
                    
                    {width > 1279 ? ([photoElement, photoElement]) : null}
                    
                </div>
            </div>
            
        </div>
    )
}

export default Footer