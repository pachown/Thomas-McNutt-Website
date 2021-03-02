import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Nav />
    <div className={styles.container} >
      <main className={styles.main} >
    {children}
    <img className={styles.mug} src="mug-shot.jpeg"></img>
      </main>
    <Footer />
    </div>
    </>

  )
}

export default Layout