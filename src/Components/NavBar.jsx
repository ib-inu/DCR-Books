import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './NavBar.module.css';
import Logo from './Logo';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.listContainer}>

                <ul className={styles.navLinks}>
                    <li>
                        <NavLink to="/overview" >
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contribute">
                            Contribute&#10132;
                        </NavLink>
                    </li>
                </ul>
                <div className={styles.dropdown}>
                    <button onClick={toggleMenu} className={styles.dropbtn}>
                        {isMenuOpen ?
                            <i className="fa fa-caret-up"></i>
                            :
                            <i className="fa fa-caret-down"></i>
                        }
                    </button>
                    <div className={`${styles.dropdownContent} ${isMenuOpen ? styles.open : ''}`}>
                        <NavLink to="/overview" onClick={toggleMenu}>
                            Overview
                        </NavLink>
                        <NavLink to="/about" onClick={toggleMenu}>
                            About
                        </NavLink>
                        <NavLink to="/contribute" onClick={toggleMenu}>
                            Contribute &#10132;
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default NavBar;
