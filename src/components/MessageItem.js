import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import DefaultProfileImg from '../images/default-profile-image.jpg'

const MessageItem = ({
    date,
    profileImageUrl,
    text,
    username,
    removeMessage,
    isCorrectUser
}) => {
    return (
        <div>
            <li className="list-group-item">
                <img src={profileImageUrl || DefaultProfileImg }
                    alt={username} height="100" width="100"
                    className="timeline-image" />
                <div className="message-area">
                    <Link to="/">@{username} &nbsp;</Link>
                    <span className="text-muted">
                        <Moment className="text-muted"
                            format="Do MMM YYYY">
                            {date}
                        </Moment>
                        <p>{text}</p>
                        {isCorrectUser &&
                            /* eslint-disable-next-line jsx-a11y/anchor-is-valid  */
                            <a href="#" className="btn btn-danger"
                                onClick={removeMessage}
                            >
                            Delete
                            </a>
                        }
                    </span>
                </div>
            </li>
        </div>
    )
}

export default MessageItem