import styles from './MovieButtons.module.scss';
import ColoredButton from '@/components/UI/buttons/ColoredButton/ColoredButton';
import Image from 'next/image';
import playIcon from '../../../../public/icons/movie/play.svg';
import bookmarkIcon from '../../../../public/icons/movie/bookmark.png';
import shareIcon from '../../../../public/icons//movie/share.png';
import { useTranslation } from 'next-i18next';

const MovieButtons = () => {
    const { t } = useTranslation('movie');
    return (
        <div className={styles.container} role={'div-buttons'}>
            <ColoredButton className={styles.container__item} color="lightGray" size="medium">
                <Image src={playIcon} alt="playIcon" /> <span>{t('trailer')}</span>
            </ColoredButton>
            <ColoredButton className={styles.container__item} color="lightGray" size="medium">
                <Image src={bookmarkIcon} alt="bookmarkIcon" />
            </ColoredButton>
            <ColoredButton className={styles.container__item} color="lightGray" size="medium">
                <Image src={shareIcon} alt="shareIcon" />
            </ColoredButton>
        </div>
    );
};

export default MovieButtons;
