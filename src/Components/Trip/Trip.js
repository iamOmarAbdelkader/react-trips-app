import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { FaUtensils , FaCalendarAlt } from "react-icons/fa";
import { withRouter} from "react-router-dom";

import './Trip.css'
class Trip extends Component {

    state={
        trip:{}
    };
    
    UNSAFE_componentWillMount(){
        this.setState({
            trip:this.props.trip
        });
    }

    goToDetails(){
        this.props.history.push(`/detail/${this.state.trip.id}`)
    }
    render() {
      
       if(this.state.trip)
        return (
             <div onClick={this.goToDetails.bind(this)} className="Trip container">
                <div className="image">
                    <img src={"http://127.0.0.1:4400/images/"+this.state.trip.image_url}  alt="hotel"/>
                </div> 

                <div className="trip-content">
                    <h6 className="hotel">{this.state.trip.hotel} </h6>
                    <p  className="city">{this.state.trip.city} </p>
                    <StarRatings
                        rating={this.state.trip.rating}
                        starRatedColor="#f5a623"
                        starDimension="25"
                        numberOfStars={5} 
                        starEmptyColor="#000"
                        name='rating'
                    />
                    <p className="offer">عرض من شركة {this.state.trip.Agency.name}</p>
                    <div>
                        <div className="trip-privileges">
                            <div className="meal">
                                <FaUtensils />
                               <span> {this.state.trip.meal_plan}</span>
                            </div>

                            <div className="calender">
                                <FaCalendarAlt />
                               <span>{this.state.trip.days}  أيام</span>
                            </div>
                        </div>
                    </div>
                </div>
                
             </div>
        );
    }
}

export default withRouter(Trip);