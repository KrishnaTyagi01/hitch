import React from 'react'

function Upper() {
    return (
        <div className="upper">
            <div className="upper__container">
                <h3 className="upper__container--head">My Events</h3>
                <div className="upper__container--category">
                    <button className="upper__container--btnactive" id ="upper__container--btnactive">
                        Bookmark
                    </button>
                    <button className="upper__container--btn">
                        Your Hosted Events
                    </button>
                    <button className="upper__container--btn">
                        Upcoming Events
                    </button>
                    <button className="upper__container--btn" >
                        Events Attended
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Upper
