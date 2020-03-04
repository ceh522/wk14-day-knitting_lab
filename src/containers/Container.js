import React, { Component } from 'react'
import PaletteList from '../components/PaletteList';

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


    render() {
        return (
            <article>
            <h1>Knitting App</h1>
            <PaletteList palettes={this.state.palettes}/>
            </article>
        )
    }

}

export default Container;