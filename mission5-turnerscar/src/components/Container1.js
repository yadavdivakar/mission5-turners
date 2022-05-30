import styles from "./Container1.module.css";
import { Link } from "react-router-dom";

function Container1 () {
    return (
        <div>
            <div className={styles.image1}></div>
                <div className={styles.detail1}>
                    <div className={styles.title1}>Mechanical Breakdown Insurance</div>
                    <div className={styles.heading1}>What is included</div>
                    <div className={styles.points1}>
                        Comprehensive cover for mechanical and electrical breakdown<br></br><br></br>
                        Parts & labour<br></br><br></br>
                        AA Roadservice & 24/7 breakdown assistance<br></br><br></br>
                        Vehicle recovery and towing<br></br><br></br>
                        Accommodation & rental car costs for out of town breakdowns<br></br><br></br>
                        Generous claim limits that are set when you purchase your policy<br></br>
                        <Link to="Quote"><button className={styles.btn1}>GET A QUOTE</button></Link>
                    </div>
            

                </div>
            
        </div>
    )
}

export default Container1;