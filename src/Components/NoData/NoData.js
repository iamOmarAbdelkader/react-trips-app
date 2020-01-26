import React from 'react'
import './NoData.css'
const NoData = ()=>{
    return (
        <div className="container">
           <div className="alert alert-danger" role="alert">No Data Found</div>
        </div>
    );
}

export default NoData;