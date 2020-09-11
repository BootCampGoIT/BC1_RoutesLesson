import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from '../../../routes';


const Navigation = (props) => {
    return (
        <div >
            <ul className={["list", styles.flex].join(" ")}>

                {/* <li className="listItem">
                    <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>Home</NavLink>
                </li>
                <li className="listItem">
                    <NavLink to="/about" className={styles.link} activeClassName={styles.activeLink}>About</NavLink>
                </li> */}
                {routes.map(({ name, path, exact }) =>
                    <li className="listItem" key={name}>
                        <NavLink
                            exact={exact}
                            to={{
                                pathname: path,
                                // search: "film cjhsjch",
                                state: { from: props.location.pathname },
                            }}
                            className={styles.link}
                            activeClassName={styles.activeLink}>
                            {name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default withRouter(Navigation);