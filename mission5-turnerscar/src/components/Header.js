import styles from "./Header.module.css";


function Header() {
    return (
        <div className={styles.bgimage}>
            <div className={styles.title}>Get a quote in 2 minutes!</div>
            <div className={styles.heading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique arcu a nisi, semper. Ut cras odio ac sem ac.</div>
            <button className={styles.button1}>GET A QUOTE</button>
            <button className={styles.button2}>RETRIEVE YOUR QUOTE</button>

            
        </div>
        
        
    )
}

export default Header;