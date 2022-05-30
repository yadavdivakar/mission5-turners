import styles from "./Container2.module.css";

function Container2 () {
    return (
        <div>
            <div className={styles.image2}></div>
            <div className={styles.detail2}>
                    <div className={styles.title2}>Mechanical Breakdown Insurance</div>
                    <div className={styles.heading2}>What is included</div>
                    <div className={styles.points2}>
                        Nil excess for windscreen repairs<br></br><br></br>
                        Optional AA Roadside Assistance cover<br></br><br></br>
                        Trailer cover<br></br><br></br>
                        Replacement vehicle cover<br></br><br></br>
                        Keys & locks<br></br><br></br>
                        Emergency travel, accommodation & repairs<br></br>
                        
                        <button className={styles.btn2}>GET A QUOTE</button>
                    </div>

                    
            

                </div>
                
            

                
            
        </div>
    )
}

export default Container2;