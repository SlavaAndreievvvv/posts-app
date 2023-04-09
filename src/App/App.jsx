import styles from "./App.module.css";
import clsx from "clsx";
import { useState } from "react";
import { PostsList } from "../Components/UI/PostsList";
import { PostForm } from "../Components/UI/PostForm";
import { PostFilter } from "../Components/UI/PostFilter";
import { Modal } from "../Components/UI/Modal/Modal";
import { Button } from "../Components/UI/Button";
import { usePosts } from "../hooks/usePosts";

export const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "React",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "HTML",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={styles.App}>
      <div className={clsx(styles.container)}>
        <div className={styles.createSortBlock}>
          <Button onClick={() => setModal(true)}>Create Post</Button>
          <PostFilter filter={filter} setFilter={setFilter} />
        </div>
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} />
        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>
      </div>
    </div>
  );
};
