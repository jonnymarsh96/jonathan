/*
 *
 * About
 *
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
export default class About extends React.PureComponent {

  render() {
    const navBar={
      textAlign:"center"
    }
    const stylePaper={
      height: "4000",
      width: "1000",
      textAlign: "center",
      display: "block",
      margin:"auto",
      marginTop:"500px",
      marginBottom:"200px",
      color:"rgb(231, 223, 221)",
      fontFamily:"Bungee Hairline",
      fontSize:"30px",

      background:"rgba(90, 67, 219,0.5)",
      borderRadius:"20px"



    }

    const abStyle1={
      backgroundImage:"url(http://www.etoolsmiths.com/wp-content/uploads/2008/12/pcbbanner1.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center center",
      margin:"0 auto"


    }
    const abStyle2={
      backgroundImage:"url(http://www.growerdirect.com/uploads/files/Flowers%20and%20Pets/azalea.png)",
      backgroundSize:"",

      width:"600px",
      height:"500px",
      borderRadius:"10px",
      fontSize:"50px",
      fontFamily:"cursive",
      fontStyle:"oblique",
      textAlign:"center",
      color:"#ffffff",
      margin:"auto auto",
      marginTop:"250px",
      fontWeight:"bold",
      textShadow:"1px 3px rgba(247, 249, 204,.7)"

    }
    const abstyle3={
      margin:"0 auto",

      marginTop:"100px",

      textAlign:"center",
      fontFamily:"monospace",
      fontSize:"20px"



    }
    // Space Theme:
    //TitleCard Div red-"#f24c4e" green-"#1b7b34" ocean-"#1fb58f" yellow-"#eab126"
    const boxDiv = {
      width:"500px",
      height:"200px",
      background:"#ffffff",
      backgroundImage:"url(https://c1.staticflickr.com/1/35/66862999_582f7b0998_z.jpg?zz=1)",
      backgroundSize:"250px",
      outlineStyle:"double",
      outlineColor:"rgb(0, 120, 73)",

      position:"fixed",
      top:"0",
      right:"0",
      left:"0",
      margin:"0 auto",
      zIndex:"5",
      textAlign:"center",
      fontFamily:"Bungee Hairline",
      fontSize:"100px",
      color:"#eab126",
      fontWeight:"bold",

      textShadow:"1px 2px rgb(0, 120, 73)"
    }
    const topBar={
      background:"#0e0b16",
      height:"10px",
      position:"fixed",
      top:"0",
      right:"0",
      left:"0",
      margin:"0 auto",
      zIndex:"1",
      outlineStyle:"double ",
      outlineColor:"#a239ca"
    }
    const bottomLayer={
      background:"#4717f6",
      height:"100px",
      position:"fixed",
      top:"0",
      right:"0",
      left:"0",
      outlineStyle:"double",
      outlineColor:"rgb(0, 120, 73)"


    }

    return (
      <div style={abStyle1}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <header>
        <div style={topBar}></div>
        <div style={bottomLayer}>
        </div>



        <div style={boxDiv}>
          WUZ GUD

        </div>
          <nav>
              <Link to="/"><FlatButton label="Home"/></Link>
              <Link to="/About"><FlatButton label="About"/></Link>

          </nav>

        </header>
        <main>


          <div><Paper style={stylePaper} zDepth={5} > <h2>THE CYBER TRAIN</h2></Paper>
          </div>
        </main>
        <footer>

        </footer>

      </div>
    );
  }
}
