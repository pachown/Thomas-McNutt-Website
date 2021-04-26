import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = ({ children }) => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.mainListDiv} className={navStyles.main_list}>
        <ul className={navStyles.navLinks}>
          {/* <li>
            <img className={navStyles.mug} src="Thomas-McNutt-Photo.png"></img>
          </li> */}
          <li>
            <p className={navStyles.name}>
              {'Thomas R McNutt'}
              </p>
          </li>
        </ul>
        <ul className={navStyles.navLinks}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/casino/videoPoker'>Casino</Link>
          </li>
          {/* <li>
            <Link href='/blog'>Blog</Link>
          </li> */}
          <li>
            <Link href='/algos'>Algos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav