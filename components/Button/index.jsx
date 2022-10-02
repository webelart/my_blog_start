import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss'

const Button = ({
  className,
  children,
  onClick,
  disabled
}) => {
  return (
    <button
      disabled={disabled}
      className={cl(className, styles.button)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;