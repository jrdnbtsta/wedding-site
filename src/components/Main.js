import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import ScrollToTop from 'react-scroll-up'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

import Guide from './articles/Guide'
import Accommodations from './articles/Accommodations'
import Wedding from './articles/Wedding'
import Photos from './articles/Photos'
import Rsvp from './articles/Rsvp'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.handleScrollToElement = this.handleScrollToElement.bind(this)
  }

  handleScrollToElement(refName) {
    const node = ReactDOM.findDOMNode(this.refs[refName]);
    window.scrollTo(0, node.offsetTop);
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <Guide article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
        <Rsvp article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
        <Accommodations article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
        <Wedding article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
        <Photos article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>

        <ScrollToTop 
          showUnder={160}
          style={{
            position: 'fixed',
            bottom: 100,
            right: 50,
            cursor: 'pointer',
            transitionDuration: '0.2s',
            transitionTimingFunction: 'linear',
            transitionDelay: '0s'
          }}>
          <FontAwesomeIcon
            className='up-arrow'
            icon={faChevronCircleUp}
            style={{
              color: 'rgba(255,255,255,0.175)',
              fontSize: '30px',
            }}/>
        </ScrollToTop>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main