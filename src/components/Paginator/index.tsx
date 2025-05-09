import React, { useMemo, useCallback } from 'react';
import styles from './styles.module.css';
import { useTasks } from '@/hooks/useTasks';

const Paginator = () => {
  const { userTasks, currentPage, setCurrentPage, LIMIT } = useTasks();

  const totalCount = userTasks.length;

  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / LIMIT);
  }, [totalCount, LIMIT]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages, setCurrentPage],
  );

  const pageButtons = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        className={`${styles.paginator__button} ${
          currentPage === index + 1 ? styles['paginator__button--active'] : ''
        }`}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </button>
    ));
  }, [totalPages, currentPage, handlePageChange]);

  if (totalCount <= LIMIT) return null;

  return (
    <footer className={styles.paginator}>
      <button
        className={styles.paginator__button}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        ‹
      </button>

      {pageButtons}

      <button
        className={styles.paginator__button}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        ›
      </button>
    </footer>
  );
};

export default React.memo(Paginator);
