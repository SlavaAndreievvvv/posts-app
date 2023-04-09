import styles from "./App.module.css";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { PostsList } from "../Components/UI/PostsList";
import { PostForm } from "../Components/UI/PostForm";
import { PostFilter } from "../Components/UI/PostFilter";
import { Modal } from "../Components/UI/Modal/Modal";
import { Button } from "../Components/UI/Button";

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

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className={styles.App}>
      <div className={clsx(styles.container)}>
        <Button onClick={() => setModal(true)}>Create Post</Button>
        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} />
      </div>
    </div>
  );
};
