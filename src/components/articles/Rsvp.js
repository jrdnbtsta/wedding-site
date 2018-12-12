import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import pic01 from '../../images/pic01.jpg'


class Rsvp extends React.Component {
  constructor(props) {
    super(props)

    this.handleScrollToElement = this.handleScrollToElement.bind(this)
    this.onRSVPChanged = this.onRSVPChanged.bind(this)
    this.onAddGuestCountChange = this.onAddGuestCountChange.bind(this)
    this.onGetPartyInputChange = this.onGetPartyInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      rsvp: '',
      party: [],
      error: '',
      initialGuest: {
        first_name: '',
        last_name: '',
        email: '',
      },
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

  onGetPartyInputChange(e) {
    let initialGuest = Object.assign(this.state.initialGuest);
    initialGuest[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ initialGuest })
  }

  onAddGuestCountChange(e) {
    this.setState({
      addGuestCount: e.currentTarget.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.getParty();
  }


  // APIs

  getParty() {
    let params = {}
    const initialGuest = this.state.initialGuest;   
    for (let input in initialGuest) {
      if (initialGuest[input].length > 0) {
        console.log('input: ', initialGuest[input])
        params[input] = initialGuest[input].trim().toLowerCase();
      }
    }

    axios.get(
      'http://127.0.0.1:8002/api/party/',
      { params }
    )
      .then(res => this.setState({ party: res.data.party }))
      .catch(err => {
        let errMessage = err.response.data.message;

        if (errMessage === 'no-guest-found') {
          let error = 'We were unable to locate a party with the information provided. Please contact Jordan and/or Carey for assistance.'
          this.setState({ error })

          setTimeout(() => this.setState({ error: '' }), 5000)
        }
      })
  }

  render() {
    let subHeader = "Please enter your first and last name or email address to retreive your party's invitation.";
    let subHeaderClasses = ''

    if (this.state.error.length) {
      subHeader = this.state.error;
      subHeaderClasses += ' error'
    }

    return (

      <article id="contact" className={`${this.props.article === 'rsvp' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">RSVP</h2>
          <p className={subHeaderClasses} >{subHeader}</p>
          <form id="get-party-form" method="post" action="#">
            <div className="field half first">
              <label htmlFor="first_name">First Name</label>
              <input type="text" name="first_name" id="first-name" onChange={this.onGetPartyInputChange}/>
            </div>
            <div className="field half">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" name="last_name" id="last-name" onChange={this.onGetPartyInputChange}/>
            </div>
            <div className="center">- OR -</div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={this.onGetPartyInputChange}/>
            </div>
            {/* <div className="field half first">
              <label htmlFor="RSVP">RSVP</label>

              <span>
                <input type="radio" name="rsvp" id="going" value='going' checked={this.state.rsvp === 'going'} onChange={this.onRSVPChanged} />
                <label htmlFor="going">Going</label>

                <input type="radio" name="rsvp" id="not-going" value="not-going" checked={this.state.rsvp === 'not-going'} onChange={this.onRSVPChanged} />
                <label htmlFor="not-going" >Not Going</label>
              </span>

            </div> */}

            <div className="submit-button-group">
              <button>cancel</button>
              <button className="special" onClick={this.onSubmit}>Submit</button>
            </div>
          </form>
          {this.props.close}
        </article>
    )
  }

}

export default Rsvp;
