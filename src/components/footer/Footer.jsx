import React from 'react';
import {Link} from 'react-router-dom'
import GoogleBtn from '../../icons/googlePlayBtn.png';
import AppleBtn from '../../icons/AppStoreBtn.png';
import emailIcon from '../../icons/emailIcon.svg';
import instagramIcon from '../../icons/InstagramIcon.svg';
import linkedInIcon from '../../icons/linkedInIcon.svg';
import twitterIcon from '../../icons/twitterIcon.svg';
import webIcon from '../../icons/webIcon.svg';

const Footer = ()=>{
    return(
        <>
            <div className="footer">
                <div className="footer__upper">
                    <p className="footer__upper--text" >Get the Hitch App for the matchmaking experience</p>
                    <div className="footer__upper--buttons">
                      <a className=" footer__upper--googlebtn">
                          <img src={GoogleBtn} alt="google btn"/>
                      </a>
                      <a className=" footer__upper--applebtn">
                           <img src={AppleBtn} alt="google btn"/>
                      </a>
                    </div>
                </div>

                <div className="footer__mid">
                    <ul className="footer__mid--list">
                        <li className="footer__mid--listhead">About</li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">About Hitch</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Our team</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">careers</a>
                        </li>
                    </ul>
                    <ul className="footer__mid--list">
                        <li className="footer__mid--listhead">Events</li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Featured Events</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Bookmarks</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Visited Events</a>
                        </li>
                    </ul>
                    <ul className="footer__mid--list">
                        <li className="footer__mid--listhead">Discover</li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Music</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">webinars</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Stand up</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Art and culture</a>
                        </li>
                    </ul>
                    <ul className="footer__mid--list">
                        <li className="footer__mid--listhead">Create</li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Pricing</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">How to create events</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Create New Events</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Created Events</a>
                        </li>
                    </ul>
                    <ul className="footer__mid--list">
                        <li className="footer__mid--listhead">Account</li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Login Help</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Privacy Setting</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Security Setting</a>
                        </li>
                        <li className="footer__mid--listitem">
                            <a className="footer__mid--listlink" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__lower">
                    <div className="footer__lower--left">
                        <span className="footer__lower--contact">Contact Us : </span>
                        <span className="footer__lower--icons">
                            <a className="footer__lower--iconlink">
                              
                                <img src={twitterIcon} className=" footer__lower--icon" alt="twitter"/>
                            </a>
                            <a className="footer__lower--iconlink">
                                <img src={linkedInIcon} className=" footer__lower--icon" alt="twitter"/>
                            </a>
                            <a className="footer__lower--iconlink">
                                <img src={emailIcon} className=" footer__lower--icon" alt="twitter"/>
                            </a>
                            <a className="footer__lower--iconlink">
                                <img src={webIcon} className=" footer__lower--icon" alt="twitter"/>
                            </a>
                            <a className="footer__lower--iconlink">
                                <img src={instagramIcon} className=" footer__lower--icon" alt="twitter"/>
                            </a>
                       </span>
                    </div>
                   
                    <Link className="footer__lower--text">Our Terms, Conditions and Privacy Policies</Link>
                </div>
            </div>
        </>
        )
    }

export default Footer;