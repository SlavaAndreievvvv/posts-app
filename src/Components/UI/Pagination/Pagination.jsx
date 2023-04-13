import styles from "./Pagination.module.css";
import { getPagesArray } from "../../../utils/page";
import clsx from "clsx";

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={styles.pageWrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p
              ? clsx(styles.pageButton, styles.active)
              : styles.pageButton
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};
