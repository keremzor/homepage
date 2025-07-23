import React from 'react';
import styles from './Links.module.scss';
import { appConfig } from '@/config/appConfig';

export function Links() {
  return (
    <ul className={`${styles.links} ff-500 fs-14-16 text-accent`}>
      {appConfig.links.map((link) => (
        <li key={link.label}>
          <a href={link.url} target={link.target} rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
