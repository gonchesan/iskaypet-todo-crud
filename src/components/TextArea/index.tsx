import React from 'react';

import styles from './styles.module.css';

interface InputType extends React.ComponentProps<'textarea'> {
  label?: string;
  isMandatory?: boolean;
  error?: string;
}

const TextArea: React.FC<InputType> = ({
  label = 'label',
  isMandatory = true,
  error,
  ...props
}) => {
  return (
    <div className={styles.textfield_area}>
      <label className={styles.textfield_area__label}>
        <p>
          {label}
          {isMandatory ? (
            <span className={styles['textfield_area__label--mandatory']}>
              *
            </span>
          ) : null}
        </p>
        <textarea {...props} className={styles.textfield_area__input} />
      </label>
      {error ? (
        <span className={styles['textfield_area__helper-text']}>{error}</span>
      ) : null}
    </div>
  );
};

export default TextArea;
