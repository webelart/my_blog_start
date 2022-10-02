import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import cl from 'classnames';

import {urlFor} from '../../lib/client';
import Title from '../Title';

import styles from './index.module.scss';

const Post = ({
  className,
  image,
  title,
  description,
  slug
}) => {
  
  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(styles.post, className)}
    >
      <a className={styles.postLink}>
        <Title
          type="small"
          className={styles.postTitle}
        >
          {title}
        </Title>
        <div className={styles.postContent}>
          <div className={styles.postImage}>
            <Image
              src={urlFor(image).url()}
              alt={image.caption}
              width="100"
              height="100"
            />
          </div>
          <p className={styles.postDescription}>
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default Post