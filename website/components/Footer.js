import styles from '../styles/Layout.module.css'

import {SocialIcon} from 'react-social-icons'

const Footer = ({ children }) => {
  return (
    <div>
      <footer className={styles.footer}>
      Reach Me:
        <SocialIcon url="https://www.linkedin.com/in/thomas-mcnutt-97526588/"/>
        <SocialIcon url="https://github.com/pachown"/>
        Phone: 720-840-9658
        <br></br>
        Email: Pachown@gmail.com
      </footer>
    </div>
  )
}

export default Footer