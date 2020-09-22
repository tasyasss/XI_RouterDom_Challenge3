// Components/beranda.js
import React from 'react'
import data2 from '../Images/data2.png'
import data3 from '../Images/data3.png'

class Data extends React.Component {
    render() {
        return (
            <div className="top-wrapper">
                <br /><br /><br />
                <h1>DATA KASUS PER-SEPTEMBER 2020</h1>
                <i>sumber: https://covid19.go.id/</i>
                <br /><br />
                <div className="container">
                    <div className="top-txt">
                        <img src={data3} alt="data3" width="800"></img>
                        <br /><br />
                        <img src={data2} alt="data2" width="800"></img>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Data;