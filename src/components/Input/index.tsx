import React from 'react';

import styles from './styles.module.css';

interface InputType extends React.ComponentProps<'input'> {
  label?: string;
  isMandatory?: boolean;
  error?: string;
}

const Input: React.FC<InputType> = ({
  label = 'label',
  isMandatory = true,
  error,
  ...props
}) => {
  return (
    <div className={styles.textfield}>
      <label className={styles.textfield__label}>
        <p>
          {label}
          {isMandatory ? (
            <span className={styles['textfield__label--mandatory']}>*</span>
          ) : null}
        </p>
        <input {...props} className={styles.textfield__input} />
      </label>
      {error ? (
        <span className={styles['textfield__helper-text']}>{error}</span>
      ) : null}
    </div>
  );
};

export default Input;
