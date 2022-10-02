import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import { clientConfig } from '../../lib/client';

import cl from 'classnames';
import styles from './index.module.scss';

const Content = ({
  className,
  body
}) => {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <div className={cl(styles.content, className)}>
      <BlockContent
        blocks={body}
        imageOptions={{w: 1000, h: 750, fit: 'max'}}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  )
}

export default Content