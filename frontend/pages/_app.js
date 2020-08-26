import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const App = ({ Component }) => (
    <>
        <Head>
            <title>Repeat:After</title>
        </Head>
        <Component />
    </>
);

App.propTypes = {
    Component : PropTypes.elementType.isRequired
};

export default wrapper.withRedux(App);