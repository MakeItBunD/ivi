import Link from 'next/link';
import Image from 'next/image';
import appleIcon from '../../../../public/icons/logo.svg';
import searchIcon from '../../../../public/icons/search.svg';
import bellIcon from '../../../../public/icons/bell.svg';
import userIcon from '../../../../public/icons/user.svg';
import LinksList from '../LinksList/LinksList';
import styles from './Header.module.scss';
import DropMenu from '../DropMenu/DropMenu';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TextLinkUI from '@/components/UI/links/TextLink/TextLinkUI';
import ColoredButton from '@/components/UI/buttons/ColoredButton/ColoredButton';
import { useTranslation } from 'next-i18next';

interface HeaderProps {
    page: 'home' | 'other';
}

const Header = ({ page }: HeaderProps) => {
    const { t } = useTranslation('header');
    const [isShowMoviesDrop, setIsShowMoviesDrop] = useState<boolean>(false);
    const [isShowSeriesDrop, setIsShowSeriesDrop] = useState<boolean>(false);
    const [isShowCartoonDrop, setIsShowCartoonDrop] = useState<boolean>(false);
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

    const { asPath, locale } = useRouter();

    const currentLocale = locale === 'ru' ? 'en' : 'ru';

    const clearShowHandler = () => {
        setIsShowMoviesDrop(false);
        setIsShowSeriesDrop(false);
        setIsShowCartoonDrop(false);
    };

    const mouseOverMovieHandler = () => {
        clearShowHandler();
        setIsShowMoviesDrop(true);
    };

    const mouseOverSeriesHandler = () => {
        clearShowHandler();
        setIsShowSeriesDrop(true);
    };

    const mouseOverСartoonHandler = () => {
        clearShowHandler();
        setIsShowCartoonDrop(true);
    };

    const clearMouseHandlers = () => {
        clearShowHandler();
    };

    useEffect(() => {
        if (isShowMoviesDrop || isShowSeriesDrop || isShowCartoonDrop) {
            setIsMouseOver(true);
        } else {
            setIsMouseOver(false);
        }
    }, [isShowMoviesDrop, isShowSeriesDrop, isShowCartoonDrop]);

    return (
        <div onMouseLeave={clearMouseHandlers} className="container">
            <div
                className={[
                    styles.container,
                    styles[`container_${page}`],
                    isMouseOver ? styles.container_mouseOver : '',
                ].join(' ')}
            >
                <Link className={styles.container__logo} href={'/'}>
                    <Image src={appleIcon} alt="ivi"></Image>
                </Link>

                <div className={styles.container__menuList}>
                    <LinksList
                        direction="row"
                        links={[
                            {
                                href: '/',
                                text: t('myIvi'),
                                option: 'dim',
                                onMouseOver: clearShowHandler,
                            },
                            {
                                href: '/',
                                text: t('latest'),
                                option: 'dim',
                                onMouseOver: clearShowHandler,
                            },
                            {
                                href: '/movies',
                                text: t('movies'),
                                option: 'dim',
                                onMouseOver: mouseOverMovieHandler,
                                className: [styles.container__menuLink, styles.container__menuLink_movie].join(' '),
                            },
                            {
                                href: '/',
                                text: t('tvShows'),
                                option: 'dim',
                                onMouseOver: mouseOverSeriesHandler,
                                className: [styles.container__menuLink, styles.container__menuLink_series].join(' '),
                            },
                            {
                                href: '/',
                                text: t('cartoons'),
                                option: 'dim',
                                onMouseOver: mouseOverСartoonHandler,
                                className: [styles.container__menuLink, styles.container__menuLink_cartoon].join(' '),
                            },
                            {
                                href: '/',
                                text: t('broadcast'),
                                option: 'dim',
                                onMouseOver: clearShowHandler,
                            },
                        ]}
                    />
                </div>

                <div className={styles.container__rightSide}>
                    <ColoredButton color="red" size="small" className={styles.container__button}>
                        {t('freePeriod')}
                    </ColoredButton>

                    <TextLinkUI href={`${asPath}?ivi_search`} option="bright" className={styles.container__search}>
                        <Image className={styles.container__icon} src={searchIcon} alt="" />
                        <p className={styles.container__text}>{t('search')}</p>
                    </TextLinkUI>

                    <Link href={'/'} className={[styles.container__link, styles.container__link_bell].join(' ')}>
                        <Image className={styles.container__icon} src={bellIcon} alt="Уведомления" />
                    </Link>

                    <Link
                        href={asPath}
                        locale={currentLocale}
                        className={[styles.container__link, styles.container__link_locale].join(' ')}
                    >
                        {currentLocale}
                    </Link>

                    <Link
                        href={`${asPath}?sign-in`}
                        className={[styles.container__link, styles.container__link_user].join(' ')}
                    >
                        <Image
                            className={[styles.container__icon, styles.container__icon_user].join(' ')}
                            src={userIcon}
                            alt="Пользователь"
                        />
                    </Link>
                </div>

                <DropMenu
                    className={[styles.container__dropMenu, isMouseOver ? styles.container__dropMenu_show : ''].join(
                        ' ',
                    )}
                    content={
                        isShowMoviesDrop
                            ? [
                                  {
                                      title: t('dropmenu.genres'),
                                      links: [
                                          { text: 'фильм', href: '/' },
                                          { text: 'фильм', href: '/' },
                                          { text: 'фильм', href: '/' },
                                          { text: 'фильм', href: '/' },
                                          { text: 'фильм', href: '/' },
                                          { text: 'фильм', href: '/' },
                                      ],
                                  },
                                  {
                                      title: t('dropmenu.countries'),
                                      links: [
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                      ],
                                  },
                                  {
                                      title: t('dropmenu.years'),
                                      links: [
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                      ],
                                  },
                              ]
                            : isShowSeriesDrop
                            ? [
                                  {
                                      title: t('dropmenu.genres'),
                                      links: [
                                          { text: 'сериал', href: '/' },
                                          { text: 'сериал', href: '/' },
                                          { text: 'сериал', href: '/' },
                                          { text: 'сериал', href: '/' },
                                          { text: 'сериал', href: '/' },
                                          { text: 'сериал', href: '/' },
                                      ],
                                  },
                                  {
                                      title: t('dropmenu.countries'),
                                      links: [
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                      ],
                                  },
                                  {
                                      title: t('dropmenu.years'),
                                      links: [
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                      ],
                                  },
                              ]
                            : [
                                  {
                                      title: t('dropmenu.genres'),
                                      links: [
                                          { text: 'мультфильм', href: '/' },
                                          { text: 'мультфильм', href: '/' },
                                          { text: 'мультфильм', href: '/' },
                                          { text: 'мультфильм', href: '/' },
                                          { text: 'мультфильм', href: '/' },
                                          { text: 'мультфильм', href: '/' },
                                      ],
                                  },
                                  {
                                      title: t('dropmenu.countries'),
                                      links: [
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                          { text: 'Страна', href: '/' },
                                      ],
                                  },
                                  {
                                      title: t('dropmenu.years'),
                                      links: [
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                          { text: 'Год', href: '/' },
                                      ],
                                  },
                              ]
                    }
                />
            </div>
        </div>
    );
};

export default Header;
