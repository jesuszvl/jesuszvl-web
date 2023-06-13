import styles from "./BlogContent.module.scss";

const BlogContent = ({ message }) => {
  return (
    <div className={styles["blog-container"]}>
      <div className={styles["blog-message"]}>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default BlogContent;
