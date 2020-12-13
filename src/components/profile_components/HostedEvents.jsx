import React from 'react';
import SimilarEventCard from '../event_components/SimilarEventCard';

const HostedEvents = ()=>{
    return(
      <div className="hostedevents">
          <div className="hostedevents__upper">
              <span className="hostedevents__upper--heading">Hosted Events</span>
              <button className="hostedevents__upper--btn">Know More</button>
          </div>
          <div className="hostedevents__cards">
             <SimilarEventCard className="hostedevents__cards--card"/>
             <SimilarEventCard className="hostedevents__cards--card"/>
             <SimilarEventCard className="hostedevents__cards--card"/>
          </div>
      </div>
    )
}

export default HostedEvents;