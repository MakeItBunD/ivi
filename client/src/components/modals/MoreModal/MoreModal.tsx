import ModalUI from '@/components/UI/Modal/ModalUI';
import styles from './MoreModal.module.scss';
import { IMovie } from '../../movie/movieMedallion/MovieMedallionsList/Temp/IMovie';
import MoviePersonsItem from '@/components/movie/MoviePersonsItem/MoviePersonsItem';
import Link from 'next/link';
import Image from 'next/image';
import PreviewPosterContentBrief from '@/components/posters/PreviewPosterContentBrief/PreviewPosterContentBrief';
import { ratingMovies } from '@/components/posters/RatingPoster/ratingMovies.data';
import { useTranslation } from 'react-i18next';

interface MoreModalProps {
    movie: IMovie;
}

const MoreModal = ({ movie }: MoreModalProps) => {
    const { t } = useTranslation('movie');
    return (
        <ModalUI className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.container__inner}>
                    <h1 className={styles.container__title}>{movie.title}</h1>
                    <MoviePersonsItem movie={movie} title={t('personsInvolved.0')} />
                    <MoviePersonsItem movie={movie} title={t('personsInvolved.1')} />
                </div>
                <div className={styles.container__poster}>
                    <Link href="/">
                        <Image
                            className={styles.container__posterImage}
                            src={ratingMovies[1].posterUrl}
                            alt={ratingMovies[1].name}
                            width={128}
                            height={196}
                        />
                    </Link>

                    <PreviewPosterContentBrief className={styles.container__posterBrief} movie={ratingMovies[0]} />
                </div>
            </div>
        </ModalUI>
    );
};

export default MoreModal;
