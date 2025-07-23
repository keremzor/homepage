import styles from './TextSwitcher.module.scss';
import { useEffect, useState } from 'react';

export interface TextSwitcherConfig {
  interval: number;
  texts: string[];
}

export function TextSwitcher({ config }: { config: TextSwitcherConfig }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % config.texts.length);
      }, config.interval);
      return () => {
        clearTimeout(delay);
        clearInterval(timer);
      };
    }, 1000);
    return () => clearTimeout(delay);
  }, [config.interval, config.texts.length]);

  return <h1 className={`${styles.switcher} ff-700 fs-32 text-white`}>{config.texts[index]}</h1>;
}
