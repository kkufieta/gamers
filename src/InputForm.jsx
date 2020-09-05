import React from 'react';

class InputForm extends React.Component {
    render() {
        return (
            <div className="uk-container">
                <form className="uk-margin-top">
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">Add a new Gamer</legend>
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
                    </fieldset>
                </form >
                <button className="uk-align-center uk-button uk-button-default">
                    Submit
                    </button>
            </div >

        )
    }
}

export default InputForm;