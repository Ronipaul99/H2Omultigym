import React, { useEffect, useState } from 'react'
import Header from './Header'
import HomeContent from './HomeContent'

export default function Landing() {
    const [flag, setFlag] = useState("");
    useEffect(()=>{
        setTimeout(() => {
            setFlag(true)
        }, 1500);
    },[])
  return (
    <div>
        {/* Preloader Start */}
        {!flag ?        
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>           
                <Header/>
                <HomeContent/>
            </div>
        }

        {/* Preloader Start */}
    </div>
  )
}
