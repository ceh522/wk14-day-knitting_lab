import React from 'react'

function PaletteList(props) {
    const paletteListItems = props.palettes.map(palette => {
        return (
             <li>
                <p><img src ={palette.imageUrl}></img></p>
            </li>
        )
    })

    return (
        <ul>
            {paletteListItems}
        </ul>
    )
    
}
export default PaletteList;