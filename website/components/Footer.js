import styles from '../styles/Layout.module.css'

import { SocialIcon } from 'react-social-icons'

const Footer = ({ children }) => {
  return (
    <div>
      <div className={styles.footer}>
        <h3>Reach Me @:</h3>
        <SocialIcon url="https://www.linkedin.com/in/thomas-mcnutt-97526588/" />
        <a></a>
        <SocialIcon url="https://github.com/pachown" />

        <br />
        <br />
        <a href="mailto:Pachown@gmail.com">
          Email Me
          </a>
      </div>
    </div>
  )
}

export default Footer
