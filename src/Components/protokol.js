// Components/beranda.js
import React from 'react'
import covid2 from '../Images/covid2.jpg'

class Protokol extends React.Component {
    render() {
        return (
            <div className="top-wrapper">
                <br /><br /><br />
                <h1>PROTOKOL KESEHATAN COVID-19</h1>
                <div className="container">
                    <div className="top-txt">
                        <img src={covid2} alt="covid2"></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default Protokol;