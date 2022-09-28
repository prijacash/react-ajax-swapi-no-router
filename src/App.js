import React, { Component } from 'react'
import Starships from './Starships'
import axios from 'axios'

export default class App extends Component {

    state = {
      starships: []
    }

    // runs only once -- mounted to DOM
    componentDidMount(){
      axios.get('https://swapi.dev/api/starships')
          .then(response => {
              console.log('the API has responded')
              this.setState({ starships: response.data.results })
          })
          .catch(console.warn)
    }

    render() {
        console.log(this.state.starships)
          return (
              <div>
                <Starships 
                  starships={this.state.starships}
                />
              </div>
          )
    }
}