import React, { Component } from 'react'
import PaletteList from '../components/PaletteList';
import PaletteDetail from '../components/PaletteDetail';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palettes: [],
            selectedPaletteId: ''
        }
    }


    componentDidMount() {
        fetch("http://localhost:3000/palettes?format=json&jsonCallback=?")
            .then(response => response.json())
            .then(result => this.setState({ palettes: result["palettes"]["palette"]}))
            .catch(error => console.error(error))
    }

    getSelectedPalette = () => {
        const foundPalette = this.state.palettes.find(palette => {
            return palette.id == this.selectedPaletteId
        })
        return foundPalette;
    }

    handlePaletteClicked = (paletteIdClicked) => {
        this.setState({selectedPaletteId: paletteIdClicked})
    }


    render() {
        return (
            <article>
            <h1>Knitting App</h1>
            <p></p>
            <PaletteList palettes={this.state.palettes}
            onPaletteClicked = {this.handlePaletteClicked}/>
            <PaletteDetail paletteSelected = {this.getSelectedPalette()} />
            </article>
        )
    }

}

export default Container;