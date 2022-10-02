import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Cover = ({
  className,
  title
}) => {
  return (
    <div className={cl(styles.cover, className)}>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{__html: title}}
      />
    </div>
  )
}

export default Cover