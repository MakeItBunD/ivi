import AgeBadge from '@/components/UI/badges/AgeBadge/AgeBadge';
import PriceBadge from '@/components/UI/badges/PriceBadge/PriceBadge';
import PreviewPosterContent from '../PreviewPosterContent/PreviewPosterContent';
import IMovie from '@/models/IMovie';
import Image from 'next/image';
import Link from 'next/link';
import style from './PreviewPoster.module.scss';

interface PreviewPosterProps {
    movie: IMovie;
    className: string;
}

const PreviewPoster = ({ movie, className }: PreviewPosterProps) => {
    return (
        <Link className={[style.container, className].join(' ')} href="/">
            <div className={[style.container__block, style.container__block_image].join(' ')}>
                <div className={style.container__imageWrapper}>
                    <Image className={style.container__image} src={movie.posterpreviewUrl} alt={movie.name} fill />
                </div>
                <PreviewPosterContent movie={movie} />
                <AgeBadge className={style.container__badge} value={`${movie.ageRating}`} />
            </div>

            <div className={[style.container__block, style.container__block_text].join(' ')}>
                <p className={style.container__title}>
                    {movie.name.length > 15 ? movie.name.slice(0, 15) + '...' : movie.name}
                </p>
                <PriceBadge priceType="purchase" />
            </div>
        </Link>
    );
};

export default PreviewPoster;
