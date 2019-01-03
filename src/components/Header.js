import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Carey & Jordan</h1>
                <p>Kauai 2019</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Wedding</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('planning')}}>Planning</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('guide')}}>Guide</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('planning')}}>Photos</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('rsvp')}}>RSVP</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
