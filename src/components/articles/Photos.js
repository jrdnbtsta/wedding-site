import React from 'react';
import ReactDOM from 'react-dom'
import pic01 from '../../images/pic01.jpg'
import wailua from '../../images/wailua_falls.jpg'
import hanalei from '../../images/hanalei.jpg'

class Photos extends React.Component {
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

      <article id="Wedding" className={`${this.props.article === 'photos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <span className="image main">
          <h1 id="title">
            Photos
          </h1>
          {createImage(this.state.currentTab)}
        </span>
  

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

export default Photos;
