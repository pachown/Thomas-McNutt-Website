import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = ({children}) => {
  return (
    <nav className={navStyles.nav}>
      <img className={navStyles.logo} src="/logo-dark.png"></img>
      <div className={navStyles.mainListDiv} className={navStyles.main_list}>
        <ul className={navStyles.navLinks}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/casino'>Casino (projects)</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/algos'>Algo A Day</Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav