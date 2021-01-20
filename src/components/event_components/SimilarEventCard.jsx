import React from 'react';
import eventpic from '../../icons/eventpic.png'
import eventpic2 from '../../icons/eventPicSvg.svg'
import calender from '../../icons/calender.svg'
import heart from '../../icons/Heart.svg'
const SimilarEventCard = () => {
    return (
        // <div className="similareventcard">
        //     <div className="similareventcard__img">
        //         <img src={eventpic} alt="event"/>
        //     <div className="similareventcard__upper">
        //         <span className="similareventcard__upper--cost">$15.00</span>
        //         <button className="similareventcard__upper--calender"></button>
        //         <button className="similareventcard__upper--heart"></button>
        //     </div>

        //     <div className="similareventcard__lower">
        //         <div className="similareventcard__eventdate">
        //             <span className="similareventcard__eventdate--month">OCT</span>
        //             <span className="similareventcard__eventdate--date">05</span>
        //         </div>

        //         <div className="similareventcard__eventdetails">
        //             <span className="similareventcard__eventdetails--head">Club Midnight</span>
        //             <p className="similareventcard__eventdetails--text">Lorem ipsum dolor sit amet, hello mat  consectetur adipiscing elit. ipsum dolor sit Lorem ame  hello mat chelsea</p>
        //         </div>
        //     </div>
        //     </div>
        // </div>

        // <div className="card" style={{width:"250px", height:"250px"}} >
        //     <img src={eventpic} class="card-img-top" alt="..." />
        //     <div className="card-body">
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        // </div>

        // <img src={eventpic} alt="afn"/>

        //HERE the part 

        <div class="card img-fluid cardContainer">
            <img className="card-img-top" src={eventpic2} alt="Card image"  />
            <div className="card-img-overlay similareventcard">
                <div className="similareventcard__upper">
                    <span className="similareventcard__upper--cost">
                     <p style={{textAlign:"center", marginTop:"8.63px"}}>$15.00</p>    
                    </span>
                    <div className="similareventcard__upper--buttons">
                      <button className="similareventcard__upper--calender">
                        <img className="similareventcard__upper--calendericon" src={calender} alt="calender"/>
                      </button>
                      <button className="similareventcard__upper--heart">
                        <img className="similareventcard__upper--hearticon" src={heart} alt="heart" />
                      </button>
                    </div>
                </div>

                <div className="similareventcard__lower">
                    <div className="similareventcard__eventdate">
                        <span className="similareventcard__eventdate--month">OCT</span>
                        <span className="similareventcard__eventdate--date">05</span>
                    </div>

                    <div className="similareventcard__eventdetails">
                        <span className="similareventcard__eventdetails--head">Club Midnight</span>
                        <p className="similareventcard__eventdetails--text">Lorem ipsum dolor sit amet, hello mat  consectetur adipiscing elit. ipsum dolor sit Lorem</p>
                    </div>
                </div>
            </div>
        </div> 


    )
}

export default SimilarEventCard;