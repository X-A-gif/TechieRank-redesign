import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import Banner from './components/Banner';

import bg from './assets/land-bg.png';


function App() {

  return (
    <>
        <div id="smooth-content">

          <header className="header">
            <Navbar />
          </header>

            <div className='flex justify-center items-center'>
              <div className="box box-a" data-speed="0.5">
                <Hero />
              </div>


                <div className="box box-b flex justify-center items-center" data-speed="1">
                  <div
                      className='max-w-full bg-cover bg-no-repeat'
                      style={{backgroundImage: `url(${bg})` }}>
                        <Card />
                  </div> 
                </div>

                
                <div className="box box-c flex justify-center items-center" data-speed="0.8">
                  <Banner />            
                </div>  
              
              <div >
                <div className=" box-d" data-speed="1.5">
                  <Footer />
                </div>
              </div>
          </div>
         
        </div>

    </>
  );
}

export default App;
