/*
 *
 * Wuzgudhome
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
import Responsive from 'react-responsive';


export default class Wuzgudhome extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state={
      menuOpen:false
    }

  }

  handleMenu = () => {
    this.setState({
      menuOpen:true
    })
  }

  showMenu = () => {
    const naWolf={
      fontSize:"150px",
      fontFamily:"arial",
      fontWeight:"bold",
      color:"#3c13d3",
      textAlign:"center",
    }
    const wuzGud={
      fontSize:"150px",
      fontFamily:"Amiko",
      fontWeight:"bold",

      textAlign:"center",
    }
    const menu={
      background:"#ffffff",
      width:"750px",
      height:"70px",
      outlineStyle:"double",
      outlineColor:"#eab126",
      position:"fixed",
      top:"0",
      right:"0",
      left:"0",
      margin:"0 auto",
      marginTop:"116px",

    }
    const button={
      margin:"0 auto",
      height:"20px",
      width:"15px",
      display:"flex",
      flexDirection:"row",
      alignSelf:"center",
      outlineStyle:"double",
      outlineColor:"#eab126",
      fontFamily:"Modak",
      color:"#1b7b34",
      fontSize:"20px",
      fontWeight:"bold",
      zIndex:"3"
    }

    if(this.state.menuOpen == true) {
      return(
        <div style={menu}>
          <Link to="/Wuzgudhome"><FlatButton label="WUZ GUD" style={wuzGud}/></Link>
          <Link to="/About"><FlatButton label="THE CYBER TRAIN" style={wuzGud}/></Link>
          <Link to="/Commerce"><FlatButton label="COMMERCE" style={wuzGud}/></Link>
          <Link to="/"><FlatButton label="North American Wolf" style={naWolf}/></Link>
        </div>
      )
    }
    else if(this.state.menuOpen == false) {
      return (
        <RaisedButton label="=" zDepth={3} style={button} onTouchTap={this.handleMenu}/>
      )
    }

  }




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
      marginTop:"45px",
      marginBottom:"300px",
      background:"rgba(231, 223, 221,0.925)",
      border:"#e7dfdd",
      borderRadius:"20px"




    }

    const abStyle1={
      backgroundImage:"url(http://www.solib.org/wp-content/uploads/2016/02/oriental-rug-1.jpg)",
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
    const augHead={
      fontFamily:"Shrikhand",
      fontSize:"60px",
      textAlign:"center",
      color:"rgb(46, 132, 68)",
      marginTop:"150px",
      textShadow:"1px 3px 2px rgba(234, 177, 38,.7) ",
      background:"rgba(231, 223, 221,.95)",
      height:"170px",
      borderBottom:"5px solid rgba(0, 0, 000,.3)"
    }
    const ahClick={
      fontFamily:"Shrikhand",
      color:"#3c13d3",
      fontSize:"30px",
      marginTop:"30px",
      wordSpacing:"300px",
      height:"50px",
      background:"rgba(231, 223, 221,.95)",
      borderBottom:"5px solid rgba(0, 0, 000,.3)"


    }
    const read={
      fontFamily:"Modak",
      color:"#f24c4e",
      fontSize:"100px",
      textShadow:"1px 5px 3px #eab126",
      background:"rgba(231, 223, 221,.975)",
      hieght:"100px",
      borderBottom:"2px solid rgba(0, 0, 000,.1)"

    }
    const cyberTrain={
      color:"#4717f6",
      fontFamily:"Bungee Hairline",
      fontSize:"30px",
      fontWeight:"3000",
      textShadow:"1px 1px 2px #0e0b16 ",
      borderBottom:"2px solid rgba(0, 0, 000,.1)",
      wordSpacing:"10px",
      width:"500px",
      margin:"auto",
      marginTop:"30px"
    }
    const text={
      fontFamily:"Amiko",
      fontSize:"15px",
      height:"100px",
      width:"700px",
      margin:"0 auto",
      marginTop:"80px"
    }
    const article={
      background:"rgb(231, 223, 221)",
      height:"500px",
      width:"700px",
      margin:"0 auto",
      marginTop:"20px",
      border:"2px solid rgba(0, 0, 000,.1)"
    }

    // Space Theme:
    //TitleCard Div red-"#f24c4e" green-"#1b7b34" ocean-"#1fb58f" yellow-"#eab126"
    const boxDiv = {
      width:"400px",
      height:"116px",
      background:"#ffffff",
      position:"fixed",
      top:"0",
      right:"0",
      left:"0",
      margin:"0 auto",
      zIndex:"5",
      textAlign:"center",
      fontFamily:"Modak",
      fontSize:"80px",
      color:"#eab126",
      fontWeight:"lighter",
      textShadow:"4.3px 1.5px 1px rgb(0,0,0)",
      borderRadius:"10px",
      outlineStyle:"double"
    }
    const topBar={
      background:"#0e0b16",
      height:"10px",
      position:"fixed",
      top:"0",
      right:"0",
      left:"0",
      margin:"0 auto",
      zIndex:"6",

    }
    const bottomLayer={
      background:"#4717f6",
      height:"100px",
      position:"fixed",
      top:"0",
      right:"0",
      left:"0",
      outline:"5px solid #3c13d3"

    }

    const nathanDeal={
      width:"250px",
      marginTop:"20px",
      border:"5px solid #3c13d3",
      borderRadius:"10px",

    }
    const aizPhoto={
      display:"block",
      border:"5px solid #e7dfdd",
      borderRadius:"10px",
      width:"400px",
      margin:"0 auto",
      marginTop:"50px",
      display:"flex",
      flexDirection:"left"
    }

    return (
      <div style={abStyle1}>
        <Helmet title="Wuzgudhome" meta={[ { name: 'description', content: 'Description of Wuzgudhome' }]}/>
        <header>
        <div style={topBar}></div>
        <div style={bottomLayer}>
        </div>



        <div style={boxDiv}>WUZ GUD

          {this.showMenu()}


        </div>
          <nav>
              <Link to="/"><FlatButton label="Home"/></Link>
              <Link to="/About"><FlatButton label="About"/></Link>

          </nav>

        </header>
        <main>


          <div>

            <div style={augHead}>
              Augusta, Ga
              <div style={ahClick} >
                SHOP JAM GRUB RADNESS
              </div>

            </div>
            <img style={aizPhoto} src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/15894261_246290605807777_6355833874460611782_n.jpg?oh=025b70f96d9ab031eb72044bafbefe17&oe=59592BAE"/>
            <Paper style={stylePaper} zDepth={5} >
              <div style={read}>
                Read
              </div>
              <div style={article}>
                <img style={nathanDeal} src="http://ocmsites.org/news/wp-content/uploads/sites/15/2017/02/Gov2.png"/>
                <div><h3 style={cyberTrain}>THE CYBER TRAIN</h3>
                <p style={text}>
                Choo Choo! C'mon y'all. Augusta is fastly chuggin' to becoming the cyber capital of the nation! So, hop onboard NOW while the tickets are cheap!
                --- Click and see WUZ GUD in Cyber-Augusta HERE.
                </p>
             </div>
            </div>
            </Paper>
          </div>
        </main>
        <footer>

        </footer>

      </div>

    );
  }
}
