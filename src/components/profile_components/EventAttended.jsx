import React from 'react';
import SimilarEventCard from '../event_components/SimilarEventCard';

const EventAttended = ()=>{
    return(
      <div className="eventattended">
          <div className="eventattended__upper">
              <span className="eventattended__upper--heading">Events Attended</span>
              <button className="eventattended__upper--btn">Know More</button>
          </div>
          <div className="eventattended__cards">
             <SimilarEventCard className="eventattended__cards--card"/>
             <SimilarEventCard className="eventattended__cards--card"/>
             <SimilarEventCard className="eventattended__cards--card"/>
          </div>
      </div>
    )
}

export default EventAttended;