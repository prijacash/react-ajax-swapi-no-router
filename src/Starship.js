import React, { Component } from 'react'


export default class Starship extends Component {
    render() {
        console.log('starship is rendering')
        console.log(this.props.starship)

        return (
            <div>
                <h2>{this.props.starship.name}</h2>
                <p>Class: {this.props.starship.starship_class}</p>
                <p>Model: {this.props.starship.model}</p>
                <p>Hyperdrive Rating: {this.props.starship.shyperdrive_rating}</p>

            </div>
        )
    }
}