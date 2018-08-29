import React from 'react';
import ReactDOM from 'react-dom'
import pic01 from '../../images/pic01.jpg'


class Rsvp extends React.Component {
  constructor(props) {
    super(props)

    this.handleScrollToElement = this.handleScrollToElement.bind(this)
    this.onRSVPChanged = this.onRSVPChanged.bind(this)
    this.onAddGuestCountChange = this.onAddGuestCountChange.bind(this)
    this.onAddGuestClick = this.onAddGuestClick.bind(this)

    this.state = {
      maxGuestCount: 5,
      addGuestCount: 0,
      addGuestRows: [],
      rsvp: '',
    };
  }

  handleScrollToElement(refName) {
    const node = ReactDOM.findDOMNode(this.refs[refName]);
    window.scrollTo(0, node.offsetTop);
  }

  onRSVPChanged(e) {
    this.setState({
      rsvp: e.currentTarget.value,
    })
  }

  onAddGuestCountChange(e) {
    this.setState({
      addGuestCount: e.currentTarget.value
    })
  }

  onAddGuestClick(e) {
    e.preventDefault();
    let rows = [];
    for(let i=0; i < this.state.addGuestCount; i += 1) {
      rows.push({
        "name": '',
        "rsvp": '',
      });
    }

    this.setState({ addGuestRows: rows });
  }

  render() {

    const addGuestField = () => {
      if (this.state.maxGuestCount) {
        return (
          <div className="field half">
            <label htmlFor="add-guests">Additional Guests</label>
            <input type="number" name="add-guests" id="add-guests" className="three-quarter" defaultValue='0' min='0' max={this.state.maxGuestCount} onChange={this.onAddGuestCountChange}/>
            <button className="special" onClick={this.onAddGuestClick}>Add</button>
            {/* <input type="submit" name="add-guests" className="half" value="Add" /> */}
          </div>

        )
      }
      return '';
    }

    const addGuestForm = () => {
      return this.state.addGuestRows.map((guest, i) => {
        return (
          <div className="field" key={i}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={guest.name} />
            </div>

            <div className="field half">
              <label htmlFor="RSVP">RSVP</label>
              <span>
                <input type="radio" name="rsvp" id="going" value='going' checked={this.state.rsvp === 'going'} onChange={this.onRSVPChanged} />
                <label htmlFor="going">Going</label>

                <input type="radio" name="rsvp" id="not-going" value="not-going" checked={this.state.rsvp === 'not-going'} onChange={this.onRSVPChanged} />
                <label htmlFor="not-going" >Not Going</label>
              </span>
            </div>
          </div>
        )
      });
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

              <span>
                <input type="radio" name="rsvp" id="going" value='going' checked={this.state.rsvp === 'going'} onChange={this.onRSVPChanged} />
                <label htmlFor="going">Going</label>

                <input type="radio" name="rsvp" id="not-going" value="not-going" checked={this.state.rsvp === 'not-going'} onChange={this.onRSVPChanged} />
                <label htmlFor="not-going" >Not Going</label>
              </span>

            </div>

            {addGuestField()}

            {/* <ul className="actions">
              <li><input type="submit" value="Send RSVP" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul> */}

            <section id="add-guests-form">
              {addGuestForm()}
            </section>
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
