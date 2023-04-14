import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  const main = useRef();
  const smoother = useRef();

  const scrollTo = () => {
    smoother.current.scrollTo('.box-c', true, 'center center');
  };

  const cRef = useRef(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: false,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <>

      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <header className="header">
          <Navbar />

          
          </header>
            <div className='flex justify-center items-center'>
              <div className="box box-a" data-speed="0.5">
              <Hero />

              </div>
              <div className="box box-b" data-speed="0.8">
                <Card />
              </div>

              <div >
              <div className="box box-c" data-speed="1.5">
                c
              </div>
            </div>
          
          </div>
         
          <div className="line"></div>
        </div>
      </div>

    </>
  );
}

export default App;
