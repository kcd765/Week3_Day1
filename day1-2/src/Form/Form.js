import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: "",
            scoreErr: ""
        }
    }

    handleChange = (e) => {
        if (e.target.id == "score") {
            this.setState({
                score: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!(/^[0-9]*$/).test(this.state.score) || this.state.score === ""){
            this.props.display('You have entered an invalid score')
        } else if (parseInt(this.state.score) > parseInt(this.props.data) || this.props.data === "") {
            this.props.newNumber(this.state.score)
            this.props.display('Your new score is ' + this.state.score)
        } else {
            this.props.display('Please enter a higher score')
        }
    }

    //Will not go to render if false
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log(nextState.score)
        let change = false
        if (parseInt(this.props.data) >= parseInt(nextState.score) || nextState.score === "") {
            change = false
        } else {
            change = true
        }
        return change
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('Component Updated');
    }

    render() {
        return (
            <div>
                <p>Current Score: {this.props.data}</p>
                <form>
                    <label>Enter score: </label>
                    <input type="text" id="score" name="score" placeholder="Input a Score" onChange={this.handleChange} /> 
                    <br/> <br/>

                    <button onClick={this.handleSubmit}>Update Score</button>
                </form>
            </div>
        );
    }
}

export default Form;