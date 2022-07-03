import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><img src="/logo.svg" /></h1>
        </header>
    );
}