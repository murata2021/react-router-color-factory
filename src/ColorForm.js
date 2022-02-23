import React, { useState,useEffect } from "react";
import { Redirect,useHistory } from "react-router-dom";

const ColorForm=({createColor,errMsg})=>{

    const INITIAL_FORM_DATA={color:""}

    let history = useHistory();
    const [formData,setFormData]=useState(INITIAL_FORM_DATA)


    const handleChange=(e)=>{

        const {name,value}=e.target
        setFormData(data=>({...data,
        [name]:value}))

    }

    const isValidColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
      }

    const handleSubmit=(e)=>{

        e.preventDefault();

        if (isValidColor(formData.color)){
            createColor(formData.color)
            setFormData({color:""})
            history.push(`/colors`)
        }
        else {
            alert(`${formData.color} is not a valid color!`)
        }
        
        
    }
    return(
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <div className="col-auto">
                            <input  className="form-control"
                                    id="color"
                                    name="color"
                                    type='text'
                                    placeholder='color'
                                    value={formData.color}
                                    onChange={handleChange}
                            />
                        </div>           
                    </div>
                        
                    <div className="form-group row">
                        <div className="col-auto">
                            <button className="btn btn-success mt-2" onClick={handleSubmit} >Submit</button>
                        </div>
                    </div>
                    
            </form>

        </div>
    )
}

export default ColorForm;