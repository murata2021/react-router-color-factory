import React from "react";
import {Link,useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const Color=({colorList})=>{

    const {color}=useParams();
    const history=useHistory();
    
    colorList.indexOf(color)!==-1?<p style={{backgroundColor:`${color}`}}>it is beautiful</p>:history.push('/colors')
    return (
        <>
            {colorList.indexOf(color)!==-1?<h1 style={{padding:'40vh',backgroundColor:`${color}`}}>it is beautiful</h1>:history.push('/colors')}


        </>
        
    )

}
export default Color;