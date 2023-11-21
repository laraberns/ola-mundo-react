import {useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../postModelo";
import ReactMarkdown from "react-markdown";
import "./post.css"
import NaoEncotrada from "../../paginas/naoEncontrada";
import PaginaPadrao from "../paginaPadrao";

export default function Post() {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id == parametros.id
    })

    if (!post) {
        return <NaoEncotrada />
    }

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
        </PaginaPadrao>

    )
}