import styles from "./PostFilter.module.css";
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";

export const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="search..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <div className={styles.selectWrapper}>
        <Select
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          defaultOptions="sort"
          options={[
            { value: "title", name: "title" },
            { value: "body", name: "body" },
          ]}
        />
        <Select
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultOptions="number of posts"
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 25, name: "25" },
            { value: -1, name: "all posts" },
          ]}
        />
      </div>
    </div>
  );
};
