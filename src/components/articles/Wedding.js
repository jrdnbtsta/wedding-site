import React from 'react';
import ReactDOM from 'react-dom'
import pic01 from '../../images/pic01.jpg'
import wailua from '../../images/wailua_falls.jpg'
import hanalei from '../../images/hanalei.jpg'

class Wedding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: 'travel',
    }
  }

  
  handleScrollToElement(refName) {
    const node = ReactDOM.findDOMNode(this.refs[refName]);
    window.scrollTo(0, node.offsetTop);
  }

  render() {
    return (

      <article id="wedding" className={`${this.props.article === 'wedding' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <span className="image main">
          <h1 id="title">
            The Wedding
          </h1>
          {createImage(this.state.currentTab)}
        </span>
  
        <nav>
          <ul>
            <li onClick={() => this.handleScrollToElement('welcome')}>Welcome Reception</li>
            <li onClick={() => this.handleScrollToElement('wedding')}>Wedding</li>
            <li onClick={() => this.handleScrollToElement('beachDay')}>Beach Day</li>
          </ul>
        </nav>
  
        <p>We are honored that you are able to join us on our special day. Below you will find suggestions on where to book your travel and hotel accomendations.</p>
        
        <section>
          <h2 ref="welcome" className="center sub-header">Welcome Reception</h2>
          <p>
          We would love to welcome you to Kauai, as we kick off our wedding weekend celebration with a dinner.
          </p>
          <p>
            <h4>Location</h4>
            Somewhere in Kapahi
            <h4>Attire</h4>
            This is a fun, casual welcome dinner party. Please dress comfortably
          </p>
        </section>

        <section>
          <h2 ref="wedding" className="center sub-header">Our Big Day</h2>
          <p>
            <h4>Location</h4>
            Somewhere in Kapahi
            <h4>Attire</h4>
            This is a fun, casual welcome dinner party. Please dress comfortably
          </p>
        </section>

        <section>
          <h2 ref="beachDay" className="center sub-header">Beach Day</h2>
          <p>
            Before everybody parts ways, we'd love for you to join us in a lunch picnic at the beach.
            <h4>Location</h4>
            Somewhere in Kapahi
            <h4>Attire</h4>
            This is a fun, casual welcome dinner party. Please dress comfortably
          </p>
        </section>

        {this.props.close}
      </article>
    )
  }

}

// Content Display

function createImage(region) {
  switch (region) {
    case 'travel':
      return <img src={hanalei} alt="" />;
    case 'east':
      return <img src={wailua} alt="" />;
    default:
      return <img src={pic01} alt="" />;
  }
}

export default Wedding;
