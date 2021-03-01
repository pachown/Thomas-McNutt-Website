import styles from '../styles/Layout.module.css'

import {SocialIcon} from 'react-social-icons'

const Footer = ({ children }) => {
  return (
    <div>
      <footer className={styles.footer}>
        <SocialIcon url="https://www.linkedin.com/in/thomas-mcnutt-97526588/"/>
        <SocialIcon url="https://github.com/pachown"/>
      </footer>
    </div>
  )
}

export default Footer