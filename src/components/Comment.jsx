import { ThumbsUp } from "phosphor-react";
import { Trash} from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Joaoof.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João de Deus </strong>
              <time title="08 de fevereiro as 16:10" dateTime="2023-02-08">
                Há cerca de 2 horas atrás!
              </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
