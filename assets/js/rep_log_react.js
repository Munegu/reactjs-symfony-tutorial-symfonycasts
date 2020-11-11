import React from 'react';
import { render } from 'react-dom';
import RepLogApp from "./RepLog/RepLogApp";


const shouldShowEmoji = false;

render(<RepLogApp
        withHeart={shouldShowEmoji}
        {...window.REP_LOG_APP_PROPS}
    />,
    document.getElementById('lift-stuff-app'));