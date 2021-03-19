import { connect } from 'react-redux';
import Moment from 'moment';
import { Link } from 'react-router-dom';

import {
    getSelfProfile,
    addToWishlist,
    removeFromWishlist
} from '../../redux/actions/profileActions';
import { activateLoginPrompt } from '../../redux/actions/userActions';

const currency_symbols = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    GBP: '£', // British Pound Sterling
    ILS: '₪', // Israeli New Sheqel
    INR: '₹', // Indian Rupee
    JPY: '¥', // Japanese Yen
    KRW: '₩', // South Korean Won
    NGN: '₦', // Nigerian Naira
    PHP: '₱', // Philippine Peso
    PLN: 'zł', // Polish Zloty
    PYG: '₲', // Paraguayan Guarani
    THB: '฿', // Thai Baht
    UAH: '₴', // Ukrainian Hryvnia
    VND: '₫' // Vietnamese Dong
};

const PreviewSmallEventActions = (props) => {
    return (
        <div className='small-event-actions'>
            <div className='ticket-card'>
                <div className='wrapper'>
                    <h5 className='category'>Featured in Concerts</h5>

                    <div className='eventname'>
                        <span className='hostname'>{props.event?.title} </span>
                        <span className='tourname'>Viva La Viva Tour</span>
                        <span className='tourdate'> Mumbai-2021</span>
                    </div>
                    <div className='datewrapper'>
                        <span className='text'>DATE</span>
                        <p className='eventdate'>
                            {Moment(props.event?.scheduled_date).format('Do MMMM YYYY')}
                        </p>
                    </div>

                    <div className='start-time'>
                        <span className='text'>START TIME</span>
                        <p className='time'>
                            {Moment(props.event?.scheduled_time, ['hh:mm:ss']).format('hh:mm A')}
                        </p>
                    </div>

                    <hr />

                    <div className='lower'>
                        <div className='entry-fee'>
                            <span className='text'>ENTRY FEE</span>
                            <span className='fee'>
                                {props.event?.ticket_price === 0
                                    ? 'FREE'
                                    : `${currency_symbols['INR']} ${props.event?.ticket_price}`}
                            </span>
                        </div>
                        {/* <div className='starts-in'>
                            <span className='text'>EVENT STARTS IN</span>
                            <span className='timer'>01D: 08H: 30M: 25S</span>
                        </div> */}
                    </div>
                    <button className='register-button' onClick={e => e.preventDefault()}>
                        Register for this event
                    </button>
                </div>
            </div>

            <>
                <button className='action-button' onClick={e => e.preventDefault()}>
                    <i className='far fa-calendar-alt action-button__icon'></i>
						Add to Calender
					</button>
                <button className='action-button' onClick={e => e.preventDefault()}>
                    <i className='far fa-heart action-button__icon'></i>
						Add to Wishlist
					</button>
            </>

        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated,
    wishlist: state.profileState.wishlist
});

export default connect(mapStateToProps, {
    getSelfProfile,
    addToWishlist,
    removeFromWishlist,
    activateLoginPrompt
})(PreviewSmallEventActions);
