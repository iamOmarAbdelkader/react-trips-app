import React, { Component } from 'react';
import Trip from '../Trip/Trip'
import Search from '../Search/Search';
import Loading from '../Loading/Loading'; 
import NoData from '../NoData/NoData'; 
import axios from 'axios';
import './Trips.css'
class Trips extends Component {

    state = {
        trips:[],
        loading:true,
        found:false,
        err:false
    };
    componentDidMount(){
        this.getAll();
    }

    getAll() {
        axios.get('http://127.0.0.1:4400/list').then((res) => {
            this.setState({
                trips: res.data,
            });
            if (res.data.length) {
                this.setState({
                    found: true
                });
            }
        })
            .catch(() => {
                this.setState({
                    err: true
                });
            })
            .finally(() => {
                this.setState({
                    loading: false
                });
            });
    }

    getMatched(keyWord){
        if(keyWord.length)
            this.willSearchMatch(keyWord);
        else 
            this.getAll();
    }

    willSearchMatch(keyWord) {

        this.setState({
            loading: true,
            found: false,
        });
        axios.post('http://127.0.0.1:4400/search/', null, {
            params: {
                searchQuery: keyWord
            }
        })
        .then((res) => {
                if (res.data.length) {
                    this.setState({ trips: res.data, loading: false, found: true });
                }
                else {
                    this.setState({ loading: false, found: false });
                }
            })
            .catch(() => {
                this.setState({ err: true });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    mapTrips(){
        if(this.state.loading){
            return (
               <Loading />
            )
        } else {

          
            if(this.state.found && this.state.trips){
                return  this.state.trips.map((trip)=>{

                    return (<Trip key={trip.id}  trip={trip} />);
        
                });
            } else {
                return (
                   <NoData />
                )
            }
        } 
      
    }
    getTrips(){
            return (this.mapTrips());         
    }


    render() {
        return (
         
             <div>
                <Search getMatched={this.getMatched.bind(this)}/>
               {this.getTrips()}
             </div>   
          
        );
    }
}

export default Trips;