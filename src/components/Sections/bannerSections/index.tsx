import banner from "../../../assets/fragment2_bannerSection.svg";
import styles from "./styles.module.scss";
import sloganGraphc from "../../../assets/sloganGraphc.svg";
import React from "react";

export const BannerSection = () => {
    return (
        <section id={styles.bannerSection}>
            <div className={styles.containerSlogan}>
                <span>Aprenda cada vez mais e RENDA na sua vida.</span>
                <img src={sloganGraphc} alt="Slogan Graphc" />
            </div>
            <figure>
                <img src={banner} alt="Banner" />
            </figure>
        </section>
    )
}