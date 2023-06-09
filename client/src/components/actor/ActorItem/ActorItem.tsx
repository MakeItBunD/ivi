import Link from 'next/link';
import styles from './ActorItem.module.scss';
import Image from 'next/image';
import IActor from '../../../models/IActor';
import { declineWord } from '../../../utils/functions';
import { useTranslation } from 'next-i18next';

interface ActorItemProps {
    className?: string;
    actor: IActor;
    size: 'large' | 'medium' | 'small';
}

const ActorItem = ({ className, actor, size }: ActorItemProps) => {
    const { t } = useTranslation('moviesPage');
    return (
        <Link
            href={`actors/${actor.id}`}
            className={[styles.container, styles[`container_${size}`], className].join(' ')}
        >
            <div className={styles.container__imageContainer}>
                <div className={styles.container__imageWrapper}>
                    <Image
                        className={styles.container__image}
                        src={actor.img}
                        alt={`${actor.firstName} ${actor.lastName}`}
                        fill
                    />
                </div>

                {size === 'large' && <div className={styles.container__amountBadge}>{actor.amtMovies}</div>}
            </div>

            <div className={styles.container__textContainer}>
                <h2 className={styles.container__fullName}>
                    {actor.firstName}
                    <br />
                    {actor.lastName}
                </h2>

                {size === 'small' ? (
                    <h3 className={styles.container__role}>{actor.role}</h3>
                ) : (
                    <p className={styles.container__amountMovies}>
                        {actor.amtMovies}{' '}
                        {declineWord(actor.amtMovies, [
                            t('filmography.singleMovie'),
                            t('filmography.fewMovies'),
                            t('filmography.manyMovies'),
                        ])}
                    </p>
                )}
            </div>
        </Link>
    );
};

export default ActorItem;
