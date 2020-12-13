import React from 'react';
import PacksCard from './PackCard'

const PacksSection = ()=>{
    return (
       <>
       <div className="packcardsection">
         <PacksCard heading="Basic" className="packcardsection__card"/>
         <PacksCard heading="Best Buy" className="packcardsection__card"/>
         <PacksCard heading="Monthly" className="packcardsection__card"/>
       </div>
         
       </>
    )
}

export default PacksSection;