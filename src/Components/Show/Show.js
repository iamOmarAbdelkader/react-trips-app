import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { FaUtensils , FaCalendarAlt , FaAngleRight } from "react-icons/fa";
import Loading from '../Loading/Loading'; 
import NoData from '../NoData/NoData'; 
import './Show.css'
import { withRouter } from "react-router-dom";
import axios from 'axios';
class Show extends Component {

    state = {
        id:null,
        trip:null,
        found:null,
        loading:true
    };

    async UNSAFE_componentWillMount(){
       await  this.setState( {
            id:this.props.match.params.id
        });
        await axios.get(`http://127.0.0.1:4400/detail/${this.state.id}`)
        .then((res)=>{
            this.setState({
                trip:res.data,
                found:true,
            });
        })
        .catch(err =>{
            if(err.status === 404)
            this.setState({found:false});
               
        })
        .finally(()=>{
            this.setState({
                loading:false
            });
        });
      
    }

    PremiumCheck(){
        if(this.state.trip.Agency.plan === 'premium'){
            console.log('here');
            // set the email first
            let email = this.state.trip.Agency.email.replace('@',' at ');
            return (
                <div className="center">
                    <button className="btn btn-success">
                        {email}
                    </button>
                </div>
            )
        }
    }
    getTrip(){
    if(this.state.loading)
        return ( 
            <Loading />
         )

    else
        if(this.state.trip)
            return (   
               <div className="Show">
               <div className="image">
                    <img src={"http://127.0.0.1:4400/images/"+this.state.trip.image_url} alt="hotel" />
                </div>
                <div className="content container">
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
                        <div className="advantages">
                        ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. 
                        </div>

                        <div className="plan">
                        ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. 
                        </div>

                      <div>
                      {this.PremiumCheck()}
                      </div>
                </div>
               </div>
                )
            else
            return (
              <div>
                  <NoData />
              </div>
            )
        
    }

    goToList(){
        this.props.history.push('/list');
    }
    render() {
        return (
          
             <div>
                 <div  onClick={this.goToList.bind(this)} className="back">
                    <FaAngleRight />
                   <span> الرجوع إلي قائمة الرحلات</span>
                 </div>
                 {this.getTrip()}
             </div>
        );
    }
}

export default withRouter(Show);