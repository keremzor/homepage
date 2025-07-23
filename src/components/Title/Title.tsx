import React from 'react';
import styles from './Title.module.scss';

export function Title({ text }: { text: string }) {
  return <h3 className={`${styles.title} ff-700 fs-26 text-accent`}>{text}</h3>;
}
