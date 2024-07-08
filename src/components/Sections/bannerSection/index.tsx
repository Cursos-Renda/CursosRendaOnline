import styles from "./styles.module.scss";
import IMGBannerLeft from "../../../assets/bannerImgLeft.png"
import IMGBannerRight from "../../../assets/bannerIMG.svg"

export const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerSection__container}>
                <div className={styles.bannerSection__leftSide}>
                    <h2 className={styles.bannerSection__leftSide__title}>Aprenda cada vez mais e RENDA na sua vida.</h2>
                    <img src={IMGBannerLeft} className={styles.bannerSection__leftSide__img}/>
                </div>
                <div className={styles.bannerSection__rightSide}>
                    <img src={IMGBannerRight} className={styles.bannerSection__rightSide__img}/>
                </div>
            </div>
        </section>
    )
}