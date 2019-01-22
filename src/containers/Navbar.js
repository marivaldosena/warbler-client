import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/auth.action'
import Logo from '../images/warbler-logo.png'

class Navbar extends Component {
    logout = (e) => {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        const { currentUser } = this.props
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Home" />
                        </Link>
                    </div>
                    {currentUser.isAuthenticated ? (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={`/users/${currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" onClick={this.logout}>Log out</a>
                            </li>
                        </ul>    
                    ) : (
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Log in</Link>
                        </li>
                    </ul>
                )}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { logout })(Navbar)