import React from 'react';
import { render } from 'react-dom';
import RepLogApp from "./RepLog/RepLogApp";


const shouldShowEmoji = true;

render(<RepLogApp withHeart={shouldShowEmoji}/>,
    document.getElementById('lift-stuff-app'));