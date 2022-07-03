import Header from '../components/header';
import Footer from '../components/footer';
import utilStyles from '../styles/utils.module.scss';
import styles from '../components/thanks.module.scss';
import Link from 'next/link';

export default function Thanks() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.thanks}>
                    <div className={utilStyles.sectionInner}>
                        <div className={utilStyles.sectionHead}>
                                <p className={`${utilStyles.en} ${styles.en}`}>Thank You</p>
                                <h1 className={utilStyles.jp}>お問い合わせ完了</h1>  
                        </div>
                        <p className={styles.text}>お問い合わせありがとうございます。確認のために自動返信メールをお送りしております。<br />
                        万が一、自動返信メールが届かない場合は、お手数ですが再度お問い合わせをお願いいたします。</p>
                        <div className={styles.return}>
                            <Link href="/">
                                <a className={`${utilStyles.primaryBtn} ${styles.btn}`}>トップへ</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}