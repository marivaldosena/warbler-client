import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Homepage from '../components/Homepage'
import AuthForm from '../components/AuthForm'
import { authUser } from '../store/actions/auth.action'
import { removeError } from '../store/actions/errors.action'
import withAuth from '../hocs/withAuth.hocs'
import MessageForm from '../containers/MessageForm'

const Main = (props) => {
    const { authUser, errors, removeError, currentUser } = props

    return (
        <div className="container">
            <Switch>
                <Route exact path="/"
                    render={props =>
                        <Homepage currentUser={currentUser}
                            {...props} />
                    }
                />
                <Route exact path="/signin"
                    render={
                        props => {
                            return (
                                <AuthForm buttonText="Log in"
                                    heading="Welcome Back."
                                    {...props}
                                    onAuth={authUser}
                                    errors={errors}
                                    removeError={removeError}
                                     />
                            )
                        }
                    }
                />
                <Route exact path="/signup"
                    render={props => {
                        return (
                            <AuthForm buttonText="Sign me up!"
                                heading="Join Warbler today."
                                signUp {...props}
                                onAuth={authUser}
                                errors={errors}
                                removeError={removeError}
                            />
                        )
                    }

                    }
                />
                <Route path="/users/:id/messages/new"
                    component={withAuth(MessageForm)}
                />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps,
    { authUser, removeError })(Main))