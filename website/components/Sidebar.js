import Link from 'next/link'
import { bubble as Menu } from 'react-burger-menu'
import '../styles/Nav.module.css'

const Sidebar = ({props}) => {

    return (
        <Menu styles={styles} {...props} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right width={'15%'} noOverlay>
            <a href="/" className="menu-item">About Me</a>
            <a href="/casino/videoPoker" className="menu-item">Projects</a>
            <a href="/algos" className="menu-item">Algorithms Blog</a>
            <a href="/" className="menu-item">Contact Me</a>
        </Menu>
    );
};

export default Sidebar;

var styles = {
bmBurgerButton: {
  position: 'fixed',
  width: '5em',
  height: '4.5em',
  left: '5 em',
  top: '5 em',
  color: 'white'
},
bmBurgerBars: {
  background: '#373a47'
},
bmBurgerBarsHover: {
  background: 'white'
},
bmCrossButton: {
  height: '3em',
  width: '3em'
},
bmMenuWrap: {
  overflow: 'hidden',
  position: 'fixed',
  height: '20%',
  background: 'grey',
},
bmItemList: {
  overflow: 'hidden',
  color: 'white',
  padding: '0.8em'
},
bmItem: {
  overflow: 'hidden',
  color: 'white',
  fontSize: '2.2em'
},
bmMenu: {
  background: 'grey',
  overflow: 'hidden',
},
bmMorphShape: {
  background: 'grey',
}

}