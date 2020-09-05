import React from 'react';

class GamerList extends React.Component {
    render() {
        return (
            <div className="uk-container">
                <h2 className="uk-margin-top">GamerList</h2>
                <div className="uk-align-left">
                    <ul className="uk-list uk-list-divider">
                        {this.props.gamers.map(gamer => (
                            <li key={gamer.username}>
                                <div>
                                    <p>{gamer.firstName} {gamer.lastName}</p>
                                    <p>Username: {gamer.username}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        )
    }
}

export default GamerList;