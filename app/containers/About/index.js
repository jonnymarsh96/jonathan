/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
export default class About extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
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
