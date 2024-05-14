// single selection 
// multiple selection 

import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordian(){

    const [ selected, setSelected ] = useState(null) ;
    
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    console.log(selected);
    return (
        <div className="wrapper">
            <button>Enable Multi-selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (   
                    data.map((dataItem) => ( 
                    <div className="item">
                        <div onClick={()=> handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span> + </span>
                        </div>
                        {
                            selected === dataItem.id ? (
                                <div className="content">{dataItem.answer}</div>
                            )
                            
                            : null
                        }
                    </div> )
                    ))
                     : ( <div> No data found! </div> 
                )}
                
            </div>
        </div>
)}