import styles from "./Container3.module.css";

function Container3 () {
    return (
        <div>
            <div className={styles.image3}>

                <div className={styles.heading3}>Customer reviews</div>
                <div className={styles.review}>
                    <div className={styles.message}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Tortor, 
                        egestas leo massa nec quis nulla vehicula. 
                        Iaculis aliquet felis nec varius. <br></br>
                        – Geoffrey, Matamata
                    </div>
                </div>

            </div>
            <div className={styles.help}>Need more help?</div>
            <div className={styles.message2}>Can't find what you're looking for or need assistance? We're here to help.</div>
            <button className={styles.contactbtn}>CONTACT US</button>
            <button className={styles.faqbtn}>CHECK FAQ</button>
        </div>
    )
}

export default Container3;