import styles from "./App.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { PostsList } from "../Components/PostsList";
import { PostForm } from "../Components/PostForm";
import { PostFilter } from "../Components/PostFilter";
import { Modal } from "../Components/UI/Modal/Modal";
import { Button } from "../Components/UI/Button";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { Loader } from "../Components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.App}>
      <div className={clsx(styles.container)}>
        <div className={styles.createSortBlock}>
          <PostFilter filter={filter} setFilter={setFilter} />
          <Button onClick={() => setModal(true)}>Create Post</Button>
        </div>
        {postError && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px",
            }}
          >
            <h1>something wrong {postError}</h1>{" "}
          </div>
        )}
        {isPostsLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px",
            }}
          >
            <Loader />
          </div>
        ) : (
          <PostsList remove={removePost} posts={sortedAndSearchedPosts} />
        )}

        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>
      </div>
    </div>
  );
};
