import Image from 'next/image'
import ButtonRedUI from '@/components/UI/ButtonUI/ButtonRedUI'
import LinkUI from '@/components/UI/LinkUI/LinkUI'
import styles from '@/styles/pages/HomePage.module.scss'
import appleIcon from '@/../public/icons/social/apple.svg'
import Navbar from '@/components/menu/Navbar/Navbar'

function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <ButtonRedUI 
                className={styles.button}>
                Смотреть
            </ButtonRedUI>
            <LinkUI className={styles.link} href='/'>
                Покупки
            </LinkUI>
            <LinkUI className={styles.deviceLink} href='/'>
                <Image 
                    className={styles.deviceLink__img} 
                    src={appleIcon} 
                    alt="apple"
                />
                <div className={styles.deviceLink__textContainer}>
                    <p 
                        className={[styles.deviceLink__text, styles.deviceLink__text_top].join(' ')}>
                        Загрузить в
                    </p>
                    <p 
                        className={[styles.deviceLink__text, styles.deviceLink__text_bottom].join(' ')}>
                        Apple Store
                    </p>
                </div>
            </LinkUI>
        </>
    )
}

export default HomePage