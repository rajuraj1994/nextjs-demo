import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Navabar.module.css'
const Navbar = () => {
    return (
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
      </Head>
        <nav>
            <ul className={styles.nav}>
                <li className={styles.list}><Link  href="/"><a className={styles.text}>Home</a></Link></li>
                <li className={styles.list}><Link href="/about"><a className={styles.text}>About</a></Link></li>
                <li className={styles.list}><Link href="/learn/books"><a className={styles.text}>Books</a></Link></li>
                <li className={styles.list}><Link href="/learn"><a className={styles.text}>Learn</a></Link></li>
            </ul>
        </nav>
        </>
      );
}
 
export default Navbar;