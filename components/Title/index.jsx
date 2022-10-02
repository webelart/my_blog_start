import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Title = ({
  className,
  type,
  children
}) => {
  if (type === 'small') {
    return (
      <h2
        className={cl(className, styles.title, styles.titleSmall)}
      >
        {children}
      </h2>
    );
  }

  return (
    <h2
      className={cl(className, styles.title, styles.titleMedium)}
    >
      {children}
    </h2>
  );
}

export default Title