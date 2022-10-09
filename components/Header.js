import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faPaperPlane} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Steve Scammon</h1>
                <p>Full-Stack Software Engineer</p>
                <p>HTML5 - CSS3 - Python - Javascript - TypeScript - React - NextJS - NoSQL</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
