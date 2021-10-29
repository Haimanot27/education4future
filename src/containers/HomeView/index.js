import React, { Component } from 'react'



class HomeView extends Component {
  render() {
    return (
      <div className="container">
       {/* A platform that creates an alternative to child labour by incentivizing families to send their children to school. */}
       
      <table width="100%" border="1" cellSpacing="0">
        <tr>
          <td>School</td>
          <td>Region</td>
          <td>#Students</td>
          <td>Attendance Rate</td>
          <td>Paid Out</td>
        </tr>
        <tr>
          <td>Alpha Rehoboth</td>
          <td>Nigeria</td>
          <td>20</td>
          <td>95%</td>
          <td>cUSD 200</td>
        </tr>
        <tr>
          <td>Cedar Oak</td>
          <td>Nigeria</td>
          <td>40</td>
          <td>75%</td>
          <td>cUSD 100</td>
        </tr>
        <tr>
          <td>Emerald</td>
          <td>Liberia</td>
          <td>30</td>
          <td>80%</td>
          <td>cUSD 280</td>
        </tr>
        <tr>
          <td>Sene 9</td>
          <td>Ethiopia</td>
          <td>40</td>
          <td>85%</td>
          <td>cUSD 290</td>
        </tr>
      </table>
      </div>
    )
  }



//export default HomeView
