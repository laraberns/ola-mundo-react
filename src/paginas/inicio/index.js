import styles from "./inicio.module.css";
import posts from '../../json/posts.json';
import Posts from "../../componentes/postCard";

export default function Inicio() {
    return (
            <ul className={styles.posts}>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Posts post={post}/>
                        </li>
                    )
                })}
            </ul>
    )
}