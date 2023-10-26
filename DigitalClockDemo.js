import React,{useState,useEffect} from 'react';
function DigitalClockDemo(){
    const[mytime,setTime]=useState("");
    const tick=()=>{
        let d=new Date();
        let hours=d.getHours();
        let minutes=d.getMinutes();
        let seconds=d.getSeconds();
        let time=`${hours>12?hours-12:hours}:${minutes}:${seconds}`
        if(hours<12){
            time=time+"AM"
        }
            setTime(time);
    }
    useEffect(()=>{
        const t=setInterval(tick,1000);
        return()=>{
            clearInterval(t);
        }
    },[mytime])
    return(
        <div>
            <h1>DigitalClockDemo</h1>
            <h2>{mytime}</h2>
        </div>
    );
}
export default DigitalClockDemo;