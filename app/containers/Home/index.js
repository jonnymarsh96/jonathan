/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>

          </nav>

        </header>
        <main>

        </main>
        <footer>

        </footer>


      </div>
    );
  }
}
