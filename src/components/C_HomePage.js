import React from 'react';

import PropTypes from 'prop-types';

const HomePage = props => {
    return (
        <>
            <h2>Home Page</h2>
            <p>Hello {props.name}</p>
            <p>YOU MADE A HOMEPAGE</p>
        </>
    );
};

export default HomePage;

HomePage.propTypes = {
    name: PropTypes.string
};