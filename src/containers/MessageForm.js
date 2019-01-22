import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postNewMessage } from '../store/actions/messages.action'

class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    handleNewMessage = (e) => {
        e.preventDefault()
        this.props.postNewMessage(this.state.message)
        this.setState({ message: '' })
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleNewMessage}>
                {this.props.errors.message && 
                    <div className="alert alert-danger">
                        {this.props.errors}
                    </div>
                }
                <input type="text"
                    id="message" name="message"
                    className="form-control"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button type="submit"
                    className="btn btn-success pull-right">
                    Add my message
                </button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm)