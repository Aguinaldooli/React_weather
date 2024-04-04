import React from "react";
import Card from "../Card/Card";
import "./Forecast.css";

function Forecast(){
    return(
        <div className="ForecastContainer">
            <div className="CardWrapper">
                <Card/>
            </div>
            <div className="CardWrapper">
                <Card/>
            </div>
            <div className="CardWrapper">
                <Card/>
            </div>
            <div className="CardWrapper">
                <Card/>
            </div>
            <div className="CardWrapper">
                <Card/>
            </div>
            <div className="CardWrapper">
                <Card/>
            </div>
            
        </div>
    )
}

export default Forecast;
