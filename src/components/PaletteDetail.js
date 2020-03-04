import React, { Fragment } from 'react';
import PaletteList from './PaletteList';

function PaletteDetail({ paletteSelected }) {

    if(!paletteSelected) return null; 
    
    return (
        <Fragment> 
            <p>{paletteSelected.title}</p>
            <p>{paletteSelected.colors}</p>
        </Fragment>
    )
}

export default PaletteDetail;