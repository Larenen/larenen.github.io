import React,{useEffect} from 'react';
import './css/About.css';
import {useSpring, animated} from 'react-spring';

export default function About() {
    useEffect(() => {
        document.title = `About - Łukasz Czerniawski`;
      });
    const animationProps = useSpring({config: {duration: 1500}, opacity: 1, from: {opacity: 0}})
    return (
        <animated.div style={animationProps} className="contentAbout">
            <h1 style={{'font-size': '2.5rem'}}>Hello, my name is Łukasz Czerniawski</h1>
            <p>I am a programming enthusiast and backend developer from Poland. <br/>
             Mainly focused on .NET and JavaScript ecosystems. <br/>
            In my spare time, I like to try new technologies and broaden my programming horizons.</p>
        </animated.div>
    )
};