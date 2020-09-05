import React from 'react';

class InputForm extends React.Component {
    render() {
        return (
            <div className="uk-container">
                <h2>Add a new gamer:</h2>
                <form>
                    <div className="uk-margin">
                        <input
                            type="text"
                            className="uk-input"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="uk-margin">
                        <input
                            type="text"
                            className="uk-input"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="uk-margin">
                        <input
                            type="text"
                            className="uk-input"
                            placeholder="Username"
                        />
                    </div>
                    <div className="uk-margin">
                        <button className="uk-button uk-button-default">
                            Submit
                    </button>
                    </div>
                </form >
            </div>

        )
    }
}

export default InputForm;