import React, {useState} from 'react';
import upArrow from '../../icons/upArrow.svg';
import line from '../../icons/line.svg';
import circle from '../../icons/timelineCircle.svg'
import circle2 from '../../icons/timelineCircle2.svg'

const Timeline = ()=>{

    const [showButton, setShowButton] = useState(false);

    const clickBtn = () =>{
        setShowButton(!showButton);
    }
    return (
        <div className="timeline">
            <div className="timeline__header">
                <span className="timeline__header--text">EVENT TIMELINE</span>
                <button onClick={clickBtn} className="timeline__header--btn">
                    <img className="timeline__header--btnimg" src={upArrow} alt="btn"/>
                </button>
            </div>
                {showButton ? (
            <div className="timeline__body">
                <div className="timeline__body--block">
                    <img className="timeline__body--circleicon" src={circle2} alt="circle"/>
                    <span className="timeline__body--time">07:00AM</span>
                    <span className="timeline__body--event">COMMENCEMENT OF CONCERT</span>
                </div>
                <div className="timeline__body--block">
                    <img className="timeline__body--circleicon" src={circle} alt="circle"/>
                    <span className="timeline__body--time">07:30PM</span>
                    <span className="timeline__body--event">Performace from 1st Album - “Yellow”</span>
                </div>
                <div className="timeline__body--block">
                    <img className="timeline__body--circleicon" src={circle} alt="circle"/>
                    <span className="timeline__body--time">08:30PM</span>
                    <span className="timeline__body--event">Performance from 2nd Album - “X&Y”</span>
                </div>
                <div className="timeline__body--block">
                    <img className="timeline__body--circleicon" src={circle} alt="circle"/>
                    <span className="timeline__body--time">10:30PM</span>
                    <span className="timeline__body--event">Closing Act</span>
                </div>
                <div className="timeline__body--block">
                    <img className="timeline__body--circleicon" src={circle2} alt="circle"/>
                    <span className="timeline__body--time">11:00PM</span>
                    <span className="timeline__body--event">END OF CONCERT</span>
                </div>
                <div className="timeline__body--block">
                    <img className="timeline__body--circleicon" src={circle} alt="circle"/>
                    <span className="timeline__body--time">12:00AM</span>
                    <span className="timeline__body--event">VIP Meet and greet</span>
                </div>
            </div>
          ): (
            <div className="timeline__body">
            <div className="timeline__body--block">
                <img className="timeline__body--circleicon" src={circle2} alt="circle"/>
                <span className="timeline__body--time">07:00AM</span>
                <span className="timeline__body--event">COMMENCEMENT OF CONCERT</span>
            </div>
           
            <div className="timeline__body--block">
                <img className="timeline__body--circleicon" src={circle2} alt="circle"/>
                <span className="timeline__body--time">11:00PM</span>
                <span className="timeline__body--event">END OF CONCERT</span>
            </div>
           
        </div>
          )}
             
           
        </div>
    )
}

export default Timeline;