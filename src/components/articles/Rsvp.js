import React from 'react';
import ReactDOM from 'react-dom'
import pic01 from '../../images/pic01.jpg'


class Rsvp extends React.Component {
  constructor(props) {
    super(props)

    this.handleScrollToElement = this.handleScrollToElement.bind(this)

    this.state = {
      maxPartyCount: 5,
      currentGuestCount: 1,
    };
  }

  handleScrollToElement(refName) {
    const node = ReactDOM.findDOMNode(this.refs[refName]);
    window.scrollTo(0, node.offsetTop);
  }

  render() {

    const addGuestField = () => {
      if (this.state.maxPartyCount > 1) {
        return (
          <div className="field half first">
            <label htmlFor="add-guests">Additional Guests</label>
            <input type="number" name="add-guests" id="add-guests" className="three-quarter" defaultValue='0' min='0' max={this.state.maxPartyCount}/>
            <button className="special">Add</button>
            {/* <input type="submit" name="add-guests" className="half" value="Add" /> */}
          </div>

        )
      }
      return '';
    }

    return (

      <article id="contact" className={`${this.props.article === 'rsvp' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">RSVP</h2>
          <p>These are some instructions for RSVP</p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="address">address</label>
              <input type="text" name="address" id="address" />
            </div>
            {/* <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div> */}
            <div className="field half first">
              <label htmlFor="RSVP">RSVP</label>

              <input type="radio" name="rsvp" id="going" value='going'/>
              <label htmlFor="going">Going</label>

              <input type="radio" name="rsvp" id="not-going" value="not-going"/>
              <label htmlFor="not-going" >Not Going</label>

              {/* <input type="radio" name="rsvp" id="undecided" />
              <label htmlFor="not-going">Undecided</label> */}
            </div>

            {addGuestField()}

            {/* <ul className="actions">
              <li><input type="submit" value="Send RSVP" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul> */}
          </form>
          {/* <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul> */}
          {this.props.close}
        </article>
    )
  }

}

export default Rsvp;
