import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const MainNav = ({ routes }) => {

    return (
        <nav>
            <ul>
                {routes.map(route =>
                    <li key={`link-${route.linkName}`}>
                        <Link to={route.linkRoute}>{route.linkName}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default MainNav;

MainNav.propTypes = {
    routes: PropTypes.array
}