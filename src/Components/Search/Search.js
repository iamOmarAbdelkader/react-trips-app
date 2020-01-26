import React, { Component } from 'react';
import './Search.css'
class Search extends Component {

    getKeyWord(e){
        this.props.getMatched(e.target.value)
    }
    render() {
        return (
             <div className="Search">
                <input
                onChange= {this.getKeyWord.bind(this)}
                type="text" 
                name="search"
                id="search-box"
                placeholder="ابحث بإسم الفندق أو المدينة"
                 />
             </div>
        );
    }
}

export default Search;