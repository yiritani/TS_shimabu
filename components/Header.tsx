import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/" className={styles.anchor}>
                    Index
                </Link>

                <Link href="/about" className={styles.anchor}>
                    About
                </Link>
            </nav>
        </header>
    )
}
