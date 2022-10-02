import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const PostGrid = ({
  className,
  children
}) => {
  return (
    <div className={cl(styles.postGrid, className)}>
      {children}
    </div>
  )
}

export default PostGrid;