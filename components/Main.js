import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import emailjs from '@emailjs/browser'
import Card from './Card'
import React, { useRef } from 'react';

class Main extends React.Component {

  sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('gmail_service', 'template_zkwotw5', document.querySelector('#contactForm'), 'A_-dXkPFj8-6Ky9Bq')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  render() {
    
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        {/* <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>If someone needs what you provide, will your website draw them in? What will they see if they are on their phone? A responsive & accessible web presence is no longer merely a 'bonus' or 'nice to have' - it is essential.</p><p>
It is my privilege to offer a chance to be seen on the web to small businesses and individuals around me. Whether that be creating a website for you from the ground up, or updating an existing presence for the mobile age. Providing a place for interested parties to find and learn about what you offer is what I offer.</p>
          {close}
        </article> */}

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <Card title='Tasker'></Card>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/me.jpg" alt="" /></span>
          <p>Steve is a full-stack web developer and has been coding for the past 25 years. He has contributed to projects at ESPN, Disney and Apple. When he isn't at a keyboard, he can be found on mountaintops, flying drones, or running a tabletop session.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" id='contactForm' ref={this.formRef} action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" onClick={this.sendEmail} /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.twitter.com/stevescammon">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://www.linkedin.com/in/steve-scammon-911ab169/">
              <FontAwesomeIcon icon={faLinkedIn} />
            </a></li>
            <li><a href="https://github.com/scamelot">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main