import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class Create extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            error: '',
            active: true
        }
    }

    render() {
        const { error, text, active } = this.state
        const { createUser } = this.props
        return (
            <div>
                { error && <h6 className='error'>{ error }</h6>}
                <span>Name</span>
                <input type="text" value={ text } placeholder="Add name" onChange={ (ev) => this.setState({ text: ev.target.value })} />
                <span>Active</span>
                <input type="checkbox" checked={ active } onChange={ (ev) => this.setState({active: ev.checked}) }/>
                <button disabled={ !text } onClick={ createUser }>Create</button>
            </div>
        );
    }
}

export default connect(({ users }) => {
    return {
        users
    };
}, (dispatch, otherProps) => {
    return {
        createUser: (user) => dispatch(actions.createUser(user))
    };
})(Create);
