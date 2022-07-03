import styles from './top.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import { init, send } from '@emailjs/browser';
import React, { useState } from 'react';

export default function Top() {
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [budget, setBudget] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    
        if (userID && serviceID && templateID) {
            init(userID);
    
            const params = {
                from_name: name,
                company: company,
                name: name,
                email: email,
                address: address,
                budget: budget,
                message: message,
            }
    
            try {
                await send(serviceID, templateID, params)
                alert('送信成功')
            } catch (error) {
                alert(error)
            }
        }
    }

    return (
        <main>
            <section className={styles.mv}>
                <div className={styles.wrap}>
                    <div className={styles.block}>
                        <img src="/mv.svg" />
                    </div>
                    <div className={styles.block}>
                        <h2 className={styles.title}>なんかいい感じの<br />Webサイト作ります</h2>
                        <p className={styles.text}>NK WEB STUDIOは奈良県を拠点とし、個人・中小企業のお客様を中心にWebサイト制作のお手伝いをしています。</p>
                        <a href="/#contact" className={`${utilStyles.primaryBtn} ${styles.btn}`}>ご相談・お問い合わせはこちら</a>
                    </div>
                </div>
            </section>
            <section className={styles.price}>
                <div className={utilStyles.sectionInner}>
                    <div className={utilStyles.sectionHead}>
                        <p className={utilStyles.en}>Price</p>
                        <h2 className={utilStyles.jp}>料金・プラン</h2>  
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.block}>
                            <h3 className={styles.title}><span>シングルページ</span></h3>
                            <ul>
                                <li>
                                    <p>ページ数</p>
                                    <p>1ページ</p>
                                </li>
                                <li>
                                    <p>料金</p>
                                    <p>10万円から</p>
                                </li>
                                <li>
                                    <p>期間</p>
                                    <p>2週間</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.title}><span>ライト</span></h3>
                            <ul>
                                <li>
                                    <p>ページ数</p>
                                    <p>5〜10ページ</p>
                                </li>
                                <li>
                                    <p>料金</p>
                                    <p>30万円から</p>
                                </li>
                                <li>
                                    <p>期間</p>
                                    <p>1ヶ月</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.title}><span>ベーシック</span></h3>
                            <ul>
                                <li>
                                    <p>ページ数</p>
                                    <p>10〜20ページ</p>
                                </li>
                                <li>
                                    <p>料金</p>
                                    <p>50万円から</p>
                                </li>
                                <li>
                                    <p>期間</p>
                                    <p>2ヶ月</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.flow}>
                <div className={utilStyles.sectionInner}>
                    <div className={utilStyles.sectionHead}>
                        <p className={utilStyles.en}>Flow</p>
                        <h2 className={utilStyles.jp}>制作の流れ</h2>  
                    </div>
                    <div className={styles.wrap}>
                        <div className={styles.block}>
                            <h3 className={styles.title}>01 お問い合わせ・ヒアリング</h3>
                            <p className={styles.text}>まずはお気軽にお問い合わせください。予算・スケジュール・制作目的・必要ページなどをお伺いします。</p>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.title}>02 ご提案・お見積り</h3>
                            <p className={styles.text}>お打ち合わせの内容をもとに、制作期間や制作費用をご提案させていただきます。</p>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.title}>03 制作</h3>
                            <p className={styles.text}>画面設計・デザイン・コーディングといった流れでサイトを制作します。</p>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.title}>04 テスト・デバッグ</h3>
                            <p className={styles.text}>サイトの見え方に問題ないか、実装した機能が問題なく動作するか確認します。</p>
                        </div>
                        <div className={styles.block}>
                            <h3 className={styles.title}>05 サイト公開</h3>
                            <p className={styles.text}>最終確認をしていただき、問題なければサイトを公開します。</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.works}>
                <div className={utilStyles.sectionInner}>
                    <div className={utilStyles.sectionHead}>
                        <p className={utilStyles.en}>Works</p>
                        <h2 className={utilStyles.jp}>制作実績</h2>  
                    </div>
                    <ul>
                        <li>
                            <a href="" target="_blank" rel="nofollow noopener">
                                <div className={styles.img}>
                                    <img src="/works/umemidai-coffee.jpg" />
                                </div>
                                <h3 className={styles.title}>UMEMIDAI COFFEE & Roaster様 Webサイト</h3>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" rel="nofollow noopener">
                                <div className={styles.img}>
                                    <img src="/works/soba-fujii.jpg" />
                                </div>
                                <h3 className={styles.title}>そば切り ふじ井様 Webサイト</h3>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" rel="nofollow noopener">
                                <div className={styles.img}>
                                    <img src="/works/spology.jpg" />
                                </div>
                                <h3 className={styles.title}>SPOLOGY様 メディアサイト</h3>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" rel="nofollow noopener">
                                <div className={styles.img}>
                                    <img src="/works/aroma.jpg" />
                                </div>
                                <h3 className={styles.title}>アロマ研究会地域事業部様 Webサイト</h3>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" rel="nofollow noopener">
                                <div className={styles.img}>
                                    <img src="/works/tsubakien.jpg" />
                                </div>
                                <h3 className={styles.title}>椿園株式会社様 Webサイト</h3>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" rel="nofollow noopener">
                                <div className={styles.img}>
                                    <img src="/works/tousen.jpg" />
                                </div>
                                <h3 className={styles.title}>株式会社とう潜様 Webサイト</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.contact} id="contact">
                <div className={utilStyles.sectionInner}>
                    <div className={utilStyles.sectionHead}>
                        <p className={utilStyles.en}>Contact</p>
                        <h2 className={utilStyles.jp}>ご相談・お問い合わせ</h2>  
                    </div>
                    <div>
                        <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
                            <div className={styles.group}>
                                <div>
                                    <p>会社名</p>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="株式会社NK"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.group}>
                                <div>
                                    <p><span className={styles.required}>*</span>お名前</p>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="山田太郎"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.group}>
                                <div>
                                    <p><span className={styles.required}>*</span>メールアドレス</p>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="example@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                            </div>
                            <div className={styles.group}>
                                <div>
                                    <p>住所</p>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="奈良県奈良市○○町1-1-1"
                                        value={address} onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.group}>
                                <div>
                                    <p>ご予算</p>
                                </div>
                                <div className={styles.select}>
                                    <select value={budget} onChange={(e) => setBudget(e.target.value)} >
                                        <option>選択してください</option>
                                        <option value="10万円未満">10万円未満</option>
                                        <option value="10万円">10万円</option>
                                        <option value="20万円">20万円</option>
                                        <option value="30万円">30万円</option>
                                        <option value="40万円">40万円</option>
                                        <option value="50万円">50万円</option>
                                        <option value="60万円">60万円</option>
                                        <option value="70万円">70万円</option>
                                        <option value="80万円">80万円</option>
                                        <option value="90万円">90万円</option>
                                        <option value="100万円">100万円</option>
                                        <option value="100万円以上">100万円以上</option>
                                        <option value="特に決めていない">特に決めていない</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.group}>
                                <div>
                                    <p><span className={styles.required}>*</span>お問い合わせ内容</p>
                                </div>
                                <div>
                                    <textarea
                                        rows="8"
                                        placeholder="ご依頼・ご相談内容の詳細を教えてください。"
                                        value={message} onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.submit}>
                                <input type="submit" value="送信" className={`${utilStyles.primaryBtn} ${styles.btn}`} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
      </main>
    );
}