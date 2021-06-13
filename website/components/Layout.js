import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../styles/Nav.module.css'

const Layout = ({children}) => {
  return (
    <div className="App" id="outer-container">
      <Sidebar />
      <div className={styles.container} id="page-wrap">
        <main >
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout