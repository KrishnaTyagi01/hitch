import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Sections = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);
    const ref10 = useRef(null);

    const makeActive = (currRef) => {
        ref1.current.className = "";
        ref2.current.className = "";
        ref3.current.className = "";
        ref4.current.className = "";
        ref5.current.className = "";
        ref6.current.className = "";
        ref7.current.className = "";
        ref8.current.className = "";
        ref9.current.className = "";
        ref10.current.className = "";
        currRef.current.className = "active";
    }


    return (
        <div className="linkToSections">
            <ul className="list">
                <a href="#basics">
                    <li ref={ref1} onClick={() => makeActive(ref1)} className="active">Basics</li>
                </a>

                <a href="#pictures">
                    <li ref={ref2} onClick={() => makeActive(ref2)} className="">Pictures</li>
                </a>

                <a href="#host">
                    <li ref={ref3} onClick={() => makeActive(ref3)} className="">Host and Speakers</li>
                </a>

                <a href="#schedule">
                    <li ref={ref4} onClick={() => makeActive(ref4)} className="">Schedule and Timeline</li>
                </a>

                <a href="#pricing">
                    <li ref={ref5} onClick={() => makeActive(ref5)} className="">Pricing</li>
                </a>

                <a href="#tags">
                    <li ref={ref6} onClick={() => makeActive(ref6)} className="">Tags</li>
                </a>

                <a href="#additional">
                    <li ref={ref7} onClick={() => makeActive(ref7)} className="">Additional Info</li>
                </a>

                <a href="#location">
                    <li ref={ref8} onClick={() => makeActive(ref8)} className="">Location</li>
                </a>

                <a href="#overview">
                    <li ref={ref9} onClick={() => makeActive(ref9)} className="">Overview</li>
                </a>

                <a href="#post">
                    <li ref={ref10} onClick={() => makeActive(ref10)} className="">Post Event</li>
                </a>
            </ul>
        </div>
    )
}

export default Sections;