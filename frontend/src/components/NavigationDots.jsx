 import React from 'react'
 
 const NavigationDots = ({active}) => {
   return (
     <div className = "app__navigation">
          {['home', 'about','experience', 'projects', 'skills','contact', 'base'].map((item, index) => (
                  <a 
                  href={`#${item}`} 
                  key = {item + index}
                  className = "app__navigation-dot"
                  style = {active === item ? {backgroundColor: '#ffa903'} : {}}
                  >
                  </a>
              ))}
    </div>
   )
 }
 
 export default NavigationDots