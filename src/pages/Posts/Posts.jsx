import styles from "./Posts.module.css";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { PostsList } from "../../Components/PostsList";
import { PostForm } from "../../Components/PostForm";
import { PostFilter } from "../../Components/PostFilter";
import { Modal } from "../../Components/UI/Modal/Modal";
import { Button } from "../../Components/UI/Button";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import { Loader } from "../../Components/UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount } from "../../utils/page";
import { Pagination } from "../../Components/UI/Pagination";
import { useObserver } from "../../hooks/useObserver";

export const Posts = () => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) ?? []
  );
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const changePage = (page) => {
    setPage(page);
  };

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  const savePosts = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  useEffect(() => {
    savePosts();
  }, [posts]);

  return (
    <div className={styles.Posts}>
      <div className={clsx(styles.container)}>
        <div className={styles.createSortBlock}>
          <PostFilter
            filter={filter}
            setFilter={setFilter}
            value={limit}
            setLimit={setLimit}
          />
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
        {isPostsLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px",
            }}
          >
            <Loader />
          </div>
        )}
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} />
        <div
          ref={lastElement}
          style={{ height: "20px", background: "transparent" }}
        ></div>
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
        <Modal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modal>
      </div>
    </div>
  );
};
