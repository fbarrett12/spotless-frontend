import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Load(props) {

    const status = () => {
        console.log(props.load)
        if (props.load.washed === null){
            return "Awaiting pickup"
        } else if (props.load.done === true){
            return "Completed"
        }
    }

    let progress = 0

    if (props.load.done === true) {
        progress = 100
    }
    
    console.log(status())
        return(
            <div className='laundry-list'>
              <div style={{'margin-bottom': '16px'}}>
                   {props.load.provider_name}
               </div>
               <div>
                   <CircularProgressbarWithChildren value={progress} >
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong>{status()}</strong> 
                        </div>
                    </CircularProgressbarWithChildren>
               </div>
               <div>
               
               </div>
           </div>
       )
        
    }
    
