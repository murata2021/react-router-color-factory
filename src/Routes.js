import React,{useState,useEffect} from "react";
import { Redirect,Link,Route,Switch } from "react-router-dom";
import ColorFactory from './ColorFactory';

import Color from "./Color"
import ColorForm from "./ColorForm";

const Routes=()=>{

    const INITIAL_STATE= JSON.parse(localStorage.getItem("colors"))||[];

    const [colorList,setColorList]=useState(INITIAL_STATE)
    const [errMsg,setErrMsg]=useState(null)

    const createColor=(color)=>{
        // setColorList(clist=>clist.push(color))

        if(checkDuplicate(color)){
            setColorList(clist=>[...clist,color])
        }
        
    }

    const checkDuplicate=(color)=>{
        setErrMsg("")
        if(colorList.indexOf(color)===-1){
            return true
        }
        else {
            setErrMsg(`${color} is in your list`)
            return false
        }
    }

    useEffect(() =>{
        localStorage.setItem("colors", JSON.stringify(colorList));
    },[colorList]);


    return(
        <Switch>
            <Route exact path='/colors'>
                <ColorFactory colorList={colorList}/>
            </Route>
            <Route exact path='/colors/new'>
                <ColorForm createColor={createColor} errMsg={errMsg}/>
            </Route>
            <Route exact path='/colors/:color'>
                <Color colorList={colorList}/>
                <Link exact to='/'>Go Back</Link>
            </Route>
            <Redirect to='/colors'/>
        </Switch>
    )
    
}

export default Routes;