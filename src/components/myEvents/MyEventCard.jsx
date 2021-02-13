import React from 'react';
// import eventpic from '../../icons/eventpic.png'
import eventpic2 from '../../icons/MyEvents/eventBackground1.png'
import calender from '../../icons/calender.svg'
import heart from '../../icons/Heart.svg'

const MyEventCard = (props) => {
    const Arr = ["None", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = parseInt(props.date.substr(5, 2));
    const day = props.date.substr(8, 2);
    const month_str = Arr[month];

    const toUpper = (title) => {
        let newTitle = title.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

        return newTitle;
    }


    return (
        <div className="myEventCardContainer">
            <img className="myEventCardContainer_cardImage" src={props.img} />
            <div className="myEventCardContainer_footer" >
                <div className="myEventCardContainer_footer_date" >
                    <div className="month">
                        {month_str}
                    </div>
                    <div className="day">
                        {day}
                    </div>
                </div>
                <div className="myEventCardContainer_footer_content">
                    <div className="heading">
                        {toUpper(props.title.substr(0, 50))}
                    </div>
                    <div className="content">
                        {props.desc === null ? null : props.desc.substr(0, 120)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEventCard;