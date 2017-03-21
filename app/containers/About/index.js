/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
export default class About extends React.PureComponent {
  render() {
    const abStyle1={
      backgroundImage:"url(http://c.fastcompany.net/multisite_files/coexist/imagecache/1280/article_feature/1280-cassava-beer-africa.jpg)",
      backgroundSize:"cover"

    }
    const abStyle2={
      background:"rgba(247, 249, 204,.7)",
      width:"600px",
      fontSize:"50px",
      fontFamily:"cursive",
      textAlign:"center",
      margin:"0 auto",
      marginTop:"200px",
      fontWeight:"300"
    }
    const abstyle3={
      background:"rgba(247, 249, 204,.7)",
      width:"300",
      height:"1000px"


    }
    return (
      <div styl={abStyle1}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <header>

          <nav>
              <Link to="/">HOME</Link>
              <Link to="/About">ABOUT</Link>

          </nav>

        </header>
        <main>
          <div style={abStyle2}>
            WE LOVE BREWSKI
          </div>
          <div style={abstyle3}>
          </div>
        </main>
        <footer>

        </footer>

      </div>
    );
  }
}
