import styles from "./PostForm.module.css";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", desc: "" });

  const createNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", desc: "" });
  };
  return (
    <form className={styles.PostForm}>
      <Input
        placeholder="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        value={post.desc}
        onChange={(e) => setPost({ ...post, desc: e.target.value })}
        placeholder="description"
      />
      <Button onClick={createNewPost} />
    </form>
  );
};
