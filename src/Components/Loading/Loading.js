import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './Loading.css'
class Show extends Component {

    render() {
        return (
           <div className="loading">
                     <ReactLoading type={'spin'} color={'#000'} height={'60px'} width={'60px'} />
                 </div>
        );
    }
}

export default Show;