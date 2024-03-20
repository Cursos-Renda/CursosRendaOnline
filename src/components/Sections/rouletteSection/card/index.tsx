import styles from "./styles.module.scss";
import React from "react";


export const CardLi = ({ img, title, link, className, style }: any) => {
    return (
        <li className={className} style={style}>
            <figure style={{
                width: "100%"
            }}>
                <img src={img} alt={title} style={{
                    width: "100%"
                }} />
            </figure>
            <div className={styles.infos}>
                <h3 style={{
                    fontWeight: "bold"
                }}>{title}</h3>
                <a href={link}><button>Mais Detalhes</button></a>
            </div>
        </li>
    )
}