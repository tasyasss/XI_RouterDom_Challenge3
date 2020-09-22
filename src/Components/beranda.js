// Components/beranda.js
import React from 'react'
import covid1 from '../Images/covid1.png'

class Beranda extends React.Component {
    render() {
        return (
            <div className="top-wrapper">
                <br /><br /><br />
                <h1>CORONA VIRUS</h1>
                <div className="container">
                    <div className="top-txt">
                        <img src={covid1} alt="covid1"></img>
                    </div>
                </div>
            </div>
        )            
    }
}
export default Beranda;