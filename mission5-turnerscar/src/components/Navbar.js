import styles from "./Navbar.module.css";
import logo from "../images/turners_logo.png";
import search from "../images/search.png";
import phone from "../images/phone-call.png";
import arrow from "../images/downarrow.png";
import lock from "../images/padlock.png";
import user from "../images/user.png";

function Navbar() {
    return (
        <div className={styles.Navbar}>
            <img src={logo} alt="logo"></img>
                <div className={styles.menu}>
                    <div className={styles.menu1}><div>Buy/sell/subscribe <img className={styles.menuarrow} src={arrow} alt="arrow"></img> </div> </div>
                    <div className={styles.menu2}><div>All insurance<img className={styles.menuarrow} src={arrow} alt="arrow"></img> </div></div>
                    <div className={styles.menu3}><div>Finance<img className={styles.menuarrow} src={arrow} alt="arrow"></img> </div></div>
                    <div className={styles.menu4}><div>Help/FAQ<img className={styles.menuarrow} src={arrow} alt="arrow"></img> </div></div>
                    <div className={styles.search}>
                        <input type="text" placeholder="  search.."></input>
                        <img className={styles.searchicon} src={search} alt="search"></img>
                    </div>
                    
                    
                </div>

                <div className={styles.navright}>
                    <img className={styles.phone} src={phone} alt="phone"></img>
                    <div className={styles.info}>Need Help? Call us on 0800  887 637</div>
                </div>
                <div className={styles.signup}>
                    <div className={styles.loginbox}><img className={styles.lock} src={lock} alt="lock"></img><div className={styles.login}>Login</div></div>
                    <div className={styles.regbox}><img className={styles.user} src={user} alt="user"></img><div className={styles.reg}>Register</div></div>
                </div>
        </div>
    )
}

export default Navbar;