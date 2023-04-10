import styles from "./PostFilter.module.css";
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="search..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
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
    </div>
  );
};
