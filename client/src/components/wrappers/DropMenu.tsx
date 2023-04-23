import styles from './DropMenu.module.scss';
import TextLinkUI from '../UI/links/TextLink/TextLinkUI';

interface IContent {
    title: string;
    genres: {
        name: string;
        href: string;
    }[];
}

interface DropMenuProps {
    className: string;
    content: IContent[];
}

const DropMenu = ({ className, content }: DropMenuProps) => {
    return (
        <div className={[styles.container, className].join(' ')}>
            {content.map((item) => (
                <div key={item.title} className={styles.container__item}>
                    <h2 className={styles.container__title}>{item.title}</h2>
                    <div className={styles.container__content}>
                        {item.genres.map((genre) => (
                            <TextLinkUI
                                key={genre.name}
                                className={styles.container__link}
                                href={genre.href}
                                option="dim"
                            >
                                {genre.name}
                            </TextLinkUI>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DropMenu;