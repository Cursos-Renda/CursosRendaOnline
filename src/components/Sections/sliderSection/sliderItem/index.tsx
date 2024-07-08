import styles from './styles.module.scss';

interface SliderItemProps {
    img: string;
    title: string;
    value: string | number;
    site: string;
    checkout: string;
}


export const SliderItem: React.FC<SliderItemProps> = ({ img, title, value, checkout, site }) => {
    return (
        <div className={styles.sliderItem}>
            <img src={img} alt={title} className={styles.sliderItem__img} />
            <h4 className={styles.sliderItem__title}>{title}</h4>
            <span className={styles.sliderItem__value}>{value}</span>
            <button className={styles.sliderItem__button}>
                <a href={site} target="_blank" rel="noopener noreferrer" className={styles.sliderItem__button__link}>Saiba Mais</a>
            </button>
            <button className={styles.sliderItem__button}>
                <a href={checkout} target="_blank" rel="noopener noreferrer" className={styles.sliderItem__button__link}>Comprar</a>
            </button>
        </div>
    )
}