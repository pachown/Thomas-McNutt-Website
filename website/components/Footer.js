import Styles from '../styles/Footer.module.css'
import { SocialIcon } from 'react-social-icons'

const Footer = ({ children }) => {
  return (
    <div className={Styles.foot}>
      <div className={Styles.title}>
        <h3><u>Contact Me</u></h3>
      </div>
      <div className={Styles.container}>
        <SocialIcon url="https://www.linkedin.com/in/thomas-mcnutt-97526588/" />
        <SocialIcon url="https://github.com/pachown" />
        <a className={Styles.email} href="mailto:Pachown@gmail.com">
          Email
        </a>
      </div>
    </div>
  )
}

export default Footer
