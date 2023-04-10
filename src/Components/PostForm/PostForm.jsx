import styles from "./PostForm.module.css";
import { useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const createNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form className={styles.PostForm}>
      <Input
        placeholder="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="description"
      />
      <Button onClick={createNewPost} />
    </form>
  );
};
