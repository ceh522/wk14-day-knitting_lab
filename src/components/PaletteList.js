import React from 'react'

function PaletteList(props) {

const handleClick = (event) => {
    props.onPaletteClicked(event.target.value)
}

    const paletteListItems = props.palettes.map(palette => {
        return (
                <p>
                <img  value = { palette.id } 
                key = {palette.id} 
                onClick = { handleClick } 
                src ={palette.imageUrl} />
                </p>
            
        )
    })

    return (
        <ul>
            {paletteListItems}
        </ul>
    )
    


    
}
export default PaletteList;
