import React from 'react';

import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const BuyMeCoffee = () => {
  return (
    <ScreenEgg type="right">
      <div
        className={styles.buyCoffee}
      >
        <a
          href="https://buy.stripe.com/5kA7sL9574SG7xCfZ3"
          target="blank"
          className={styles.buyCoffeeButton}
        >
          Buy me a coffe...
        </a>
      </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee