import styles from "../../css/events.module.css";




function Card({ image, text, type, button,buttonText }) {
    if (button == true) {

        return (
            <div className={` ${type}`}>

                <div className={`${styles.box}   ${styles.border}`}>
                  
                    <img className={styles.imageBox} src={image} alt= "image"></img>
               
                    <div className={`text-white ${styles.textBox}`}>    
                    {text}
                    </div>

                    <button className={`${styles.button} font-text mt-3 text-white`}>{buttonText}</button>
                </div>
                
            </div>
        );
    }
    else{
        return (
            <div className={` ${type}`}>

            <div className={`${styles.box}   ${styles.border}`}>
              
                <img className={styles.imageBox} src={image} alt= "image"></img>
           
                <div className={styles.textBox}>    
                {text}
                </div>
            </div>
            
        </div>
        );
    }
}
    export default Card;
