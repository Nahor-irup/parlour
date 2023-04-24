import React, { useEffect, useState } from 'react'
import "./BackToTop.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


const BackToTop = () => {
    const [backtoTopButton, setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        })
    },[]);

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
  return (
    <div>
        {backtoTopButton &&(
            <button className='to-top' onClick={scrollUp}>
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
        )}
    </div>
  )
}

export default BackToTop