import React from 'react';
import ReactDOM from 'react-dom'
import pic01 from '../../images/pic01.jpg'
import wailua from '../../images/wailua_falls.jpg'
import hanalei from '../../images/hanalei.jpg'

class Planning extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTab: 'travel',
    }
  }

  changeSelectedTab(tab) {
    this.setState({currentTab: tab});
  }

  render() {
    return (

      <article id="planning" className={`${this.props.article === 'planning' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Planning Your Trip</h2>
        <span className="image main">
          <h1 id="title">
            Travel & Accomendations
          </h1>
          {createImage(this.state.currentTab)}
        </span>
  
        <nav>
          <ul>
            <li onClick={() => this.changeSelectedTab('travel')}>Flights</li>
            <li onClick={() => this.changeSelectedTab('rentals')}>Rentals</li>
            <li onClick={() => this.changeSelectedTab('accomendations')}>Hotels</li>
          </ul>
        </nav>
  
        <p>We are honored that you are able to join us on our special day. Below you will find suggestions on where to book your travel and hotel accomendations.</p>
        
        <section>
          <h3 ref="travel">Flights To LIH</h3>
          <p>
          Direct flights are fairly common with Alaskan, Hawaiian, Delta and soon Southwest. Prices tend to drop closer to September; we suggest booking your flight 1-2 months prior to our wedding.
          </p>
          <p>
          We recommend signing up for airfare alerts through the following services to track travel rates:
          <div>
            <button>Hopper</button>
            <button>Skyscanner</button>
            <button>Kayak</button>
            <button>Google Flights</button>
          </div>
          </p>
          <p><b>From LAX:</b> Roundtrip nonstop flights from LAX to LIH typically run for $350 to $450<br/>
          <b>From SFO/OAK:</b> Roundtrip nonstop flights from LAX to LIH typically run for $300 to $400</p>
        </section>

        <section>
          <h3 ref="rentals">Car Rentals</h3>
          <p>
            <b>Uber and Lyft drivers are not common in Kauai.</b> </p>
            <p>That being said, the most efficient means of travel around the island will be via car rental. We typically book our car rentals through Costco for $40 / day.</p>
          <p>
          Car rental reservations:
          <div>
            <button>Costco Travel</button>
          </div>
          </p>
        </section>

        <section>
          <h3 ref="rentals">Hotels</h3>
          <h4>Room Block</h4>
          <p>
            We highly recommend taking advantage of our group rate available at the Courtyard by Marriott Kaua'i at Coconut Beach. We've stayed here a few times and have never been disappointed.
            They've also completed recent renovations to their pool and bar area.
          </p> 
          <p><b>Pricing:</b> We have room block rates ranging from $100 to $150 per night. This rate is valid during the week before and after the wedding in case you would like to extend your vacation in Kauai.<br/>
          <b>Booking:</b> This rate expires TODO [SOME_DATE] <br/>
          <b>Amentities: </b> 
          </p>
          <p>
          Car rental reservations:
          <div>
            <button>Costco Travel</button>
          </div>
          </p>
          <h4>Other Great Hotels</h4>
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

export default Planning;
