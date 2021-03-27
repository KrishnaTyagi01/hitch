import React from 'react';
import Button1 from '../components/HostEvent/Button1';
import mezami from '../icons/mezami.png';
import person1 from '../icons/about Hitch/person1_small.png';
import person2 from '../icons/about Hitch/person2_small.png';
import person3 from '../icons/hostIntro/image2.svg';
import person4 from '../icons/hostIntro/image3.svg'
import hand from '../icons/about Hitch/matchmaking.png';
import yes from '../icons/about Hitch/yes.png';


const SurveyPage = () => {
    return (
        <div className="surveyPage">
            <section className="signup">
                <span>
                    <img src={mezami} />
                </span>
                <span>
                    Help us to change how people meet.
                </span>
                <span>
                    Sign up now to gain a chance to access Mezami, a member-exclusive Community!
                </span>
                <Button1 text={"Sign Up"} />
                <span>
                    Takes less than a minute! No, we don’t spam your inbox.
                </span>
            </section>
            <section className="survey1">
                <div className="image1">
                    <img src={person3} />
                </div>
                <div className="question">
                    <div className="heading">
                        Do you like meeting new people?
                    </div>
                    <div className="content">
                        <Button1 text="Hell yes! 100%" width="230px" height="55px" />
                        <Button1 text="Don’t hate it, don’t love it" width="230px" height="55px" />
                        <Button1 text="Okay in small doses" width="230px" height="55px" />
                        <Button1 text="Nope. Nope. Nope" width="230px" height="55px" />
                    </div>
                </div>
            </section>
            <section className="survey2">
                <div className="question">
                    <div className="heading">
                        What kind of interesting person do you most like to meet?
                    </div>
                    <div className="content">
                        <Button1 text="Someone I can learn from" width="270px" height="55px" />
                        <Button1 text="If they have experiences to share" width="270px" height="55px" />
                        <Button1 text="Anyone is good!" width="270px" height="55px" />
                        <Button1 text="A person I can team up with" width="270px" height="55px" />
                    </div>
                </div>
                <div className="image2">
                    <img src={person4} />
                </div>
            </section>
            <section className="survey3">
                <div className="content">
                    <div className="heading">
                        Please tell us a bit about yourself
                    </div>
                    <form className="surveyForm">
                        <label>
                            Name
                        </label>
                        <input type="text"></input>
                        <label>
                            Email
                        </label>
                        <input type="text"></input>
                        <label>
                            Phone Number
                        </label>
                        <input type="text"></input>
                        <label>
                            Tell us a little about things you find interesting - anything goes!
                        </label>
                        <input type="text"></input>
                        <Button1 text="Count me in!" width="140px" height="40px" />
                    </form>
                </div>
                <div className="image3">
                    <img src={person1} />
                    <img src={person2} />
                </div>
            </section>
            <section className="fitIn">
                <div className="text">
                    <div className="heading">
                        Wondering if you fit?
                    </div>
                    <div className="content">
                        <div>
                            <strong>Short answer</strong> - Yes, you do.
                        </div>
                        <div>
                            <strong>Slightly longer answer</strong> - Yes, you do! We want the Mezami community to be as diverse and as welcoming as possible. No matter how niche your interests, we’ll find a place for you.
                        </div>
                    </div>
                </div>
                <div className="rightPics">
                    <img src={yes}></img>
                    <img src={hand}></img>
                </div>
            </section>
            <section className="surveyPage_about">
                <div className="text">
                    <div className="header">
                        About Mezami.
                    </div>
                    <div className="content">
                        <div>We want to create a space to encourage dialogue, for ideas to grow together.</div>
                        <div>We’re starting with the way people meet.</div>
                        <div>With Mezami, we’re cutting through the clutter - networking that’s more people-centric. We’re here to preserve time.</div>
                    </div>
                </div>
                <div className="img">
                    <span>
                        <img src={mezami} />
                    </span>
                </div>
            </section>
        </div>
    );
}

export default SurveyPage;