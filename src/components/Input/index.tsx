import React from 'react';

import styles from './styles.module.css';

interface InputType extends React.ComponentProps<'input'> {
  label?: string;
  isMandatory?: boolean;
}

const Input: React.FC<InputType> = ({
  label = 'label',
  isMandatory = true,
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
    </div>
  );
};

export default Input;
