import React from 'react';

class InputForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: ''
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addGamer({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username
        })
        this.setState({
            firstName: '',
            lastName: '',
            username: ''
        })
    }

    render() {
        return (
            <div className="uk-container">
                <form className="uk-margin-top" onSubmit={this.handleOnSubmit}>
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">Add a new Gamer</legend>
                        <div className="uk-margin">
                            <input
                                type="text"
                                className="uk-input"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.handleFirstNameChange}
                            />
                        </div>
                        <div className="uk-margin">
                            <input
                                type="text"
                                className="uk-input"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.handleLastNameChange}
                            />
                        </div>
                        <div className="uk-margin">
                            <input
                                type="text"
                                className="uk-input"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                            />
                        </div>
                    </fieldset>
                    <button className="uk-align-center uk-button uk-button-default">
                        Submit
                    </button>
                </form >
            </div >

        )
    }
}

export default InputForm;