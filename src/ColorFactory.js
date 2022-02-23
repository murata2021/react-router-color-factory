import React,{useState} from "react";
import { Link } from "react-router-dom";

import ColorForm from "./ColorForm";

const ColorFactory=({colorList})=>{

    // useState(()=>

    // const INIlocalStorage.getItem('colors')
    
    // )

    // const INITIAL_STATE= JSON.parse(localStorage.getItem("colors"))||[];

    // const [colorList,setColorList]=useState(INITIAL_STATE)
    // const [errMsg,setErrMsg]=useState(null)

    // const createColor=(color)=>{
    //     // setColorList(clist=>clist.push(color))

    //     if(checkDuplicate(color)){
    //         setColorList(clist=>[...clist,color])
    //     }
        
    // }

    // const checkDuplicate=(color)=>{
    //     setErrMsg("")
    //     if(colorList.indexOf(color)===-1){
    //         return true
    //     }
    //     else {
    //         setErrMsg(`${color} is in your list`)
    //         return false
    //     }
    // }

    // localStorage.setItem("colors", JSON.stringify(colorList));
    return(
        <>  
            <div style={{padding:'2rem',backgroundColor:'black',color:'white'}}>
                <h1>WELCOME TO THE COLOR FACTORY</h1>
                <Link style={{textDecoration:'None',color:'white'}} exact to='/colors/new'>ADD A COLOR!!!</Link>
            </div>
            
            
            {/* <ColorForm createColor={createColor}/> */}
            {/* <p style={{color:'red',fontSize:'8px'}}>{errMsg}</p> */}

            <ul style={{ listStyleType: 'none'}}>
                {colorList.map(color=><li><Link exact to={`/colors/${color}`}
 >{color}</Link></li>)}
            </ul>
        </>
    )

}

export default ColorFactory;