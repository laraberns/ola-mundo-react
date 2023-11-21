import { Link } from "react-router-dom";
import styles from "./postCard.module.css";
import BotaoPrincipal from "../botaoPrincipal";

export default function postCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/posts/${post.id}/capa.png`}
                    alt="imagem de capa do post"
                />
                <h2 className={styles.titulo}>
                    {post.titulo}
                </h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )

}