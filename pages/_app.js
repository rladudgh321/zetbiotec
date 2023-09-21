import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import wrapper from '../store/configureStore';
const app = ({Component}) => {
    const Global = createGlobalStyle`
    html,body{
        margin:0;
        padding:0;
    }
    `;
    return (
        <>
            <Global />
            <div style={{
                boxSizing:'border-box',
                margin: 0,
                padding: 0,
                height: '100%',
            }}>
                <Component />
            </div>
        </>
    );
}

app.propTypes = {
    Component:PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(app);