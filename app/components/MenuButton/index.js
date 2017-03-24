/**
*
* MenuButton
*
*/

import React from 'react';

class MenuButton extends React.PureComponent {
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
      fontFamily:"arial",
      fontWeight:"bold",

      textAlign:"center",
    }
    const menu={
      background:"#ffffff",
      width:"550px",
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
    return (
      <div>
        {this.showMenu()}
      </div>
    );
  }
}

export default MenuButton;
