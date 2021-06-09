import Link from 'next/link'
import { pushRotate as Menu } from 'react-burger-menu'
import '../styles/Nav.module.css'

const Sidebar = ({props}) => {

    return (
        <Menu styles={styles} {...props} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} left width={'25%'} disableAutoFocus>
            <h1 className="title"><u>Thomas McNutt's Portfolio</u></h1>
            <h2>Where would you like to go?</h2>
            <a href="/" className="menu-item">About Me</a>
            <a href="/projects" className="menu-item">Projects</a>
            <a href="/algos" className="menu-item">Algorithms Blog</a>
            <a href="/" className="menu-item">Contact Me</a>
        </Menu>
    );
};

export default Sidebar;

var styles = {
title: {
color: 'pearl',
textTransform: 'uppercase',
fontWeight: '800',
},
h2: {
color: 'rgb(224, 206, 206);',
},
bmBurgerButton: {
  position: 'fixed',
  width: '5em',
  height: '4.5em',
  left: '5em',
  top: '5em',
},
bmBurgerBars: {
  background: '#373a47'
},
bmBurgerBarsHover: {
  background: 'white'
},
bmCross: {
  background: 'white',
},
bmItemList: {
  color: 'white',
  padding: '0.8em'
},
bmItem: {
  color: 'white',
  fontSize: '2.2em',
  textDecoration: 'none',
  transition: 'color 0.2s',
  marginBottom: '10px',
},
bmMenu: {
  textAlign: 'center',
  padding: '2.5em 1.5em 0',
  background: '#373a47',
  overflow: 'hidden',
},
bmOverlay: {
  background: 'rgba(0,0,0,0.6)',
}

}