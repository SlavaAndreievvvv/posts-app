import styles from "./PostFilter.module.css";
import { Input } from "../Input";
import { Select } from "../Select";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
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
          { value: "desc", name: "description" },
        ]}
      />
    </>
  );
};
