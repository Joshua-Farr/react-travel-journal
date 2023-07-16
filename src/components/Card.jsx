import React from "react";
import "./Card.css"

export default function Card(props){
    console.log(props)
    return(
        <section>
            <img src ={props.imageUrl} className="location-img"/>
            <div className="card-text-content"> 
                <div className="card-header">
                    <img src={"../assets/marker.png"} alt="" />
                    <p className="country-visited">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <p className="date-visited">{props.startDate} - {props.endDate}</p>
                <p className="trip-description">{props.description}</p>
            </div>

        </section>
    )
}



// title= {item.title}
// location = {item.location}
// googleMapsUrl = {item.googleMapsUrl}
// startData = {item.startDate}
// endDate = {item.endDate}
// description = {item.description}
// imageUrl = {item.imageUrl}


// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"