import React from 'react';
import HostCard from './HostCard';
import host1 from '../../icons/Host.png'
import host2 from '../../icons/Host2.png'
import host3 from '../../icons/Host3.png'
import host4 from '../../icons/Host4.png'

const Speakers = ()=>{
    return (
        <div className="speakers">
            <p className="speakers__header">HOST AND SPEAKERS</p>

            <div className="speakers__cards">
                <HostCard className="speakers__card" imgsrc={host1} role="Artist" name= "Coldplay" category="Rock Band" />
                <HostCard className="speakers__card" imgsrc={host2} role="Host" name= "Jane Doe" category="Public Speaker" />
                <HostCard className="speakers__card" imgsrc={host3} role="Presenter" name= "Toni Kroos" category="Manager-jio Stadium" />
                <HostCard className="speakers__card" imgsrc={host4} role="Closing Act" name= "Sergio Ramos" category="Stand Up Comedian" /> 
            </div>
        </div>
    )
}

export default Speakers;