import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Nav />
    <div className={styles.container} >
      <main >
    {children}
      </main>
    </div>
    </>
  )
}

export default Layout