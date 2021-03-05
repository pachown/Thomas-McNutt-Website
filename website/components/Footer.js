import styles from '../styles/Layout.module.css'

import { SocialIcon } from 'react-social-icons'

const Footer = ({ children }) => {
  return (
    <div>
      <footer className={styles.footer}>
        <h3>Reach Me:</h3>
        <a>
          <SocialIcon url="https://www.linkedin.com/in/thomas-mcnutt-97526588/" />
        </a>
        <a>
          <SocialIcon url="https://github.com/pachown" />
        </a>
        <br />
        <a>
          Phone: 720-840-9658
        </a>
        <br />
        <a>
          Email: <a href="mailto:Pachown@gmail.com">Email Me</a>
        </a>
      </footer>
    </div>
  )
}

export default Footer
