import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display'
import axios from 'axios'
import _ from 'lodash'
import BeatLoader from "react-spinners/BeatLoader";

class App extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://api.sampleapis.com/countries/countries')
            .then(res => {
                const data = res.data
                const countries = _.slice(data, 0, 5)
                this.setState({ countries })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        const displayData = this.state.countries.length ? <Display data={this.state.countries} /> : (<div>
            <BeatLoader
                color={'#083AA9'}
                loading={true}
                size={20}
                style={{ display: "flex", justifyContent: "center", marginTop: "250px"}}
            /></div>)

        return (
            <React.Fragment>
                <Navbar /> <br />
                {displayData}
            </React.Fragment>
        );
    }
}

export default App;