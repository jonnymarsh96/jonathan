/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
export default class Home extends React.PureComponent {

  imgHover() {

  }
  LinkVisited(){
    textDecoration:"none"
  }
  Link(){
    textDecoration:"none"
  }
  render() {


    const NB1={
      textAlign:"center",
      wordSpacing:"10px",
      backgroundImage: "url(http://www.clipartkid.com/images/1/vectorscape-green-soda-can-clip-art-at-clker-com-vector-clip-art-0uCoLe-clipart.png)",
      backgroundSize:"cover",
      textDecoration:"none",
      width:"210px",
      height:"400px",
      margin:"0 auto",
      fontFamily:"monospace",
      fontSize:"30px",
      fontWeight:"100px",
      opacity:".7"


    }
    const NB2={
      paddingTop:"80px",
      display:"flex",
      flexDirection:"column"
    }
    const linkStyle={
      paddingTop:"30px",
      textDecoration:"none",
      color:"rgb(222, 226, 145)",
      fontSize:"60px",
      fontWeight:"bold",


    }
    const divStyle2={
      width:"900px",
      background:"rgba(109,9,239,.7)",

      margin:"0 auto",
      marginBottom: "600px",
      marginTop:"800px",
      textAlign:"center",
      fontWeight:"900",
      color:"#03000f",
      fontSize:"30px",
      letterSpacing:"4px",
      alignContent:"stretch",
      backgroundClip:"contentBox"
    }
    const divstyle={
      backgroundImage:"url(http://proof.nationalgeographic.com/files/2016/04/wolf-bison.adapt_.1900.1.jpg)",
      backgroundAttachment:"fixed",

      backgroundSize:"cover"
    }
    const divstyle3={textDecoration:"none",
    borderLeftWidth:"5px",
    textAlign:"center",
    fontWeight:"500px"
  }
    const divstyle4={background:"rgba(76,71,99,.5)",
    height:"6000px",
    width:"1200px",
    margin:"0 auto",
    overflow:"hidden"


  }
    const divstyle5={
      width:"500px",
      background:"rgba(109,9,239,.7)",
      margin:"0 auto",
      marginBottom: "400px",
      marginTop:"200px",
      textAlign:"center",
      fontWeight:"900",
      color:"#03000f",
      fontSize:"30px",
      letterSpacing:"4px",
      alignContent:"stretch",
      backgroundClip:"contentBox"
    }
    const label={
      textAlign:"center",
      textShadow:"2px 3px rgb(224, 211, 116)",
      marginBottom:"200px",
      fontSize:"90px",
      color:"#000000",
      fontWeight:"50px",
      fontFamily:"monospace",
      fontBorder:"ffffff",
      borderBottom:"3px solid rgba(0, 0, 000,.3) ",
      width:"700px",
    margin:"0 auto"}
    const img={
      border:"10px solid rgba(109,9,239,.7) ",
      borderRadius:"5px",
      margin:"auto",
      marginTop:"100px",
      display:"block"
    }
    const img2={
      border:"10px solid rgba(109,9,239,.7) ",
      borderRadius:"5px",
      margin:"auto",
      marginTop:"20px",
      display:"block",
      width:"850px"
    }
    const img3={
      border:"10px solid rgba(153, 3, 3, 1.0) ",
      borderRadius:"5px",
      margin:"auto",
      marginTop:"60px",
      marginBottom:"200px",
      display:"block",
      width:"350px"

    }
    const img4={
      border:"10px solid rgba(109,9,239,.7) ",
      borderRadius:"5px",
      margin:"auto",
      marginTop:"100px",
      display:"block",
      width:"600px"
    }
    return (
      <div style={divstyle}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
          <div style={divstyle3}>
          <nav style={NB1}>
            <div style={NB2}>
              <Link style={linkStyle} to="/">HOME</Link>

              <Link style={linkStyle} to="/about">ABOUT</Link>
            </div>
          </nav>
          </div>

        </header>
        <main>
          <div style={divStyle2}>
            THE NORTH AMERICAN WOLF
          </div>
          <div style={divstyle5}>HIS APPETITE...?</div>
          <div style={divstyle4}>
            <div style={label}>ELK</div>
            <img style={img4} src="http://www.oregonzoo.org/sites/default/files/gallery/images/V_orig_elk_gal.jpg"/>
            <img style={img3} src="http://www.city-data.com/forum/attachments/montana/92336-wolf-hunting-montana-your-thoughts-nice-wolfelk.jpg"/>
            <div style={label}>WHITETAIL</div>
            <img style={img} src="http://outbacksd.com/wp-content/uploads/2015/02/Outback-Whitetail-Deer.jpg"/>
            <img style={img3} src="http://www.natgeocreative.com/comp/AS/001/1180522.jpg"/>
            <div style={label}>RACCOON</div>
            <img style={img} src="http://kingofwallpapers.com/racoon/racoon-003.jpg"/>
            <img style={img3} src="http://s.hswstatic.com/gif/predator-hunting-1.jpg"/>
            <div style={label}>BUFFALO</div>
            <img style={img} src="http://bloximages.chicago2.vip.townnews.com/bozemandailychronicle.com/content/tncms/assets/v3/editorial/6/a7/6a736afc-2526-11e1-8b2d-0019bb2963f4/4ee6a4a047860.image.jpg"/>
            <img style={img3} src="http://bowhunting.net/wp-content/uploads/2011/02/Wyoming-Wolf.jpg"/>


          </div>
        </main>
        <footer>

        </footer>


      </div>
    );
  }
}
