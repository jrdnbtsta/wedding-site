import React from 'react';
import ReactDOM from 'react-dom'
import pic01 from '../../images/pic01.jpg'
import wailua from '../../images/wailua_falls.jpg'
import hanalei from '../../images/hanalei.jpg'

class Accommodations extends React.Component {
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

      <article id="accommodations" className={`${this.props.article === 'accommodations' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <span className="image main">
          <h1 id="title">
            Travel & Accommodations
          </h1>
          {createImage(this.state.currentTab)}
        </span>
  
        <nav>
          <ul>
            <li onClick={() => this.handleScrollToElement('travel')}>Flights</li>
            <li onClick={() => this.handleScrollToElement('rentals')}>Rentals</li>
            <li onClick={() => this.handleScrollToElement('hotels')}>Hotels</li>
          </ul>
        </nav>
  
        <p>We are honored that you are able to join us on our special day. Below you will find suggestions on where to book your travel and hotel accomendations.</p>
        
        <section>
          <h2 ref="travel" className="center sub-header">Flights To Lihue [LIH] </h2>
          <img id="airport-img" className="sub-img" src="http://1.bp.blogspot.com/-ehKZ2OkCmy4/VJnoj_mxnhI/AAAAAAAAJdU/0y3IlFcmxfs/s1600/KAUAI%2BONE%2B-%2B008.jpg"></img>
          <p>
          Direct flights are fairly common with Alaskan, Hawaiian, Delta and soon Southwest. Prices tend to drop closer to September; we suggest booking your flight 1-2 months prior to our wedding.
          </p>
          <p><b>From LAX:</b> Roundtrip nonstop flights from LAX to LIH typically run for $350 to $450<br/>
          <b>From SFO/OAK:</b> Roundtrip nonstop flights from LAX to LIH typically run for $300 to $400</p>
          <p>
          We recommend signing up for airfare alerts through the following services to track travel rates:
          </p>
          <div className="center small-btn-container">
            <a href="https://www.hopper.com/" target="_blank"><button className="small-btn">Hopper</button></a>
            <a href="https://www.skyscanner.com/transport/flights/lax/lih/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&oym=1909&iym=1909&ref=home&selectedoday=01&selectediday=01" target="_blank"><button className="small-btn">Skyscanner</button></a>
            <a href="https://www.kayak.com/flights/LAX-LIH/2019-09-25/2019-10-25-flexible-calendar-5to6?sort=bestflight_a" target="_blank"><button className="small-btn">Kayak</button></a>
            <a href="https://www.google.com/flights?hl=en#flt=/m/030qb3t.LIH.2019-09-25*LIH./m/030qb3t.2019-09-30;c:USD;e:1;sd:1;t:f" target="_blank"><button className="small-btn">Google Flights</button></a>
          </div>
        </section>

        <section>
          <h2 ref="rentals" className="center sub-header">Car Rentals</h2>
          <p>
            <b>Uber and Lyft drivers are not common in Kauai.</b> </p>
            <p>That being said, the most efficient means of travel around the island will be via car rental. We typically book our car rentals through Costco for $40 / day.</p>
          <p>
          <div className="center">
            <a href="https://www.costcotravel.com/h=4005" target="_blank"><button className="small-btn">Costco Travel</button></a>
          </div>
          </p>
        </section>

        <section>
          <h2 ref="hotels" className="center sub-header">Hotels</h2>
          <img id="marriott-img" className="sub-img" src="https://images.myguide-cdn.com/hawaii/companies/courtyard-by-marriott-kauai-at-coconut-beach/large/courtyard-by-marriott-kauai-at-coconut-beach-274876.jpg"></img>

          <h4>Room Block</h4>
          <p>
            We highly recommend taking advantage of our group rate available at the Courtyard by Marriott Kaua'i at Coconut Beach. We've stayed here a few times and have never been disappointed.
            They've also completed recent renovations to their pool and bar area.
          </p> 
          <p><b>Pricing:</b> We have room block rates ranging from $100 to $150 per night. This rate is valid during the week before and after the wedding in case you would like to extend your vacation in Kauai.<br/>
          <b>Booking:</b> This rate expires TODO [SOME_DATE] <br/>
          <b>Amentities: </b> TODO Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk. Last own loud and knew give gay four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be. 
          </p>
          <p>
          <div className="center">
            <button className="small-btn">Join Our Room Block</button>
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

export default Accommodations;
