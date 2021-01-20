import React from 'react'
import heartIcon from '../../icons/Heart.svg'
import calenderIcon from '../../icons/calender.svg'
import { Link } from 'react-router-dom'
const ShowInfoCard = ()=> {
    return (
        <div className="showInfoCard">
          <div className="showInfoCard__upperpart">
              <div className="showInfoCard__upperpart--block">
                  <h2 className="showInfoCard__upperpart--head ">19 SEP</h2>
                  <h4 className="showInfoCard__upperpart--subhead">Date</h4>
              </div>
              <div className="showInfoCard__upperpart--block">
                  <h2 className="showInfoCard__upperpart--head">MUMBAI</h2>
                  <h4 className="showInfoCard__upperpart--subhead">Location</h4>
              </div>
              <div className="showInfoCard__upperpart--block">
                  <h2 className="showInfoCard__upperpart--head">19:00</h2>
                  <h4 className="showInfoCard__upperpart--subhead">Time</h4>
              </div>
          </div>

          <div className="showInfoCard__lower">
              <span className="showInfoCard__lower--icons">
                  <img className="showInfoCard__lower--icon" alt="icon" src={heartIcon}/>
                  <img className="showInfoCard__lower--icon" alt="icon" src={calenderIcon}/>
              </span>
              <div className="showInfoCard__lower--line"></div>
              <span >
                <Link className="showInfoCard__lower--know" >KNOW MORE</Link>
              </span>
          </div>
        </div>
    )
}

export default ShowInfoCard
