import PostModelo from "../../componentes/postModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png"
import styles from "./sobreMim.module.css"
import fotoSobreMim from "../../assets/Lara.jpg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim">

            <h3 className={styles.subtitulo}>
                Olá, eu sou a Lara!
            </h3>

            <img
                src={fotoSobreMim}
                alt="foto da Lara"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Impulsionada pelo desejo de combinar meu conhecimento de negócios com desenvolvimento web, estou comprometida em criar experiências digitais bem-sucedidas. Atualmente estudo e aperfeiçoo habilidades técnicas para me consolidar como uma profissional neste campo, participando de cursos e projetos para adquirir proficiência nas principais Stacks (:
            </p>

            <br />
            <p className={styles.paragrafo}>Estou animada para me conectar com profissionais, mentores e empregadores em potencial que compartilham da paixão por tecnologia e compreendem seu potencial transformador. Vamos explorar juntos as oportunidades de colaborar e contribuir para o mundo em constante evolução do desenvolvimento? 🌎
            </p>
        </PostModelo>
    )
}