import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class Create extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            active: true
        }
        this.create = this.create.bind(this);
    }
    create() {
        const { text, active } = this.state
        const { createUser } = this.props
        createUser({ name: text, active })
    }
    render() {
        const { text, active } = this.state
        const { error } = this.props
        return (
            <div>
                { error && <h6 className='error'>{error}</h6> }
                <span>Name</span>
                <input type="text" value={text} placeholder="Add name" onChange={(ev) => this.setState({ text: ev.target.value })} />
                <span>Active</span>
                <input type="checkbox" checked={active} onChange={(ev) => this.setState({ active: ev.checked })} />
                <button disabled={!text} onClick={this.create}>Create</button>
            </div>
        );
    }
}

export default connect(({ users, error }) => {
    return {
        users,
        error
    };
}, (dispatch, {history}) => {
    return {
        createUser: (user) => dispatch(actions.createUser(user, history))
    };
})(Create);
