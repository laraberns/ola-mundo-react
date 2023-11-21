import styles from "./banner.module.css"
import circuloColorido from "../../assets/circulo_colorido.png"
import minhaFoto from "../../assets/Lara.jpg"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>Graduada em Administração pela Udesc e pós-graduanda em Coding & Tech Journey na FIAP, estou em transição de carreira com foco nos estudos de desenvolvimento Front-End.</p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="imagem de circulo colorido"
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    aria-hidden={true}
                    alt="imagem de minha foto"
                />

            </div>
        </div>
    )
}

