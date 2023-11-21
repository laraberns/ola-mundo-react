import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../postModelo";
import ReactMarkdown from "react-markdown";
import "./post.css"
import NaoEncotrada from "../../paginas/naoEncontrada";
import PaginaPadrao from "../paginaPadrao";
import styles from "./post.module.css";
import Posts from "../../componentes/postCard";

export default function Post() {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id == parametros.id
    })

    if (!post) {
        return <NaoEncotrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/posts/${post.id}/capa.png`}
                titulo={post.titulo}>
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
            <h2
                className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
            </h2>

            <ul 
            className={styles.posts}>
                {postsRecomendados.map((post)=>(
                    <li key={post.id}>
                        <Posts post={post}/>
                    </li>
                ))}
            </ul>
        </PaginaPadrao>
    )
}