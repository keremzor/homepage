import styles from './TextSwitcher.module.scss';
import { useEffect, useRef, useState } from 'react';

export interface TextSwitcherConfig {
  interval: number;
  texts: string[];
}

function useTextSwitcher(texts: string[], interval: number, initialDelay = 1000) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const delayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIndex(0);
    delayRef.current = setTimeout(() => {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % texts.length);
      }, interval);
    }, initialDelay);

    return () => {
      if (delayRef.current) clearTimeout(delayRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [texts, interval, initialDelay]);

  return texts.length > 0 ? texts[index] : '';
}

export function TextSwitcher({ config }: { config: TextSwitcherConfig }) {
  const currentText = useTextSwitcher(config.texts, config.interval);

  return (
    <h1 className={`${styles.switcher} ff-700 fs-32 text-white`}>
      {currentText}
    </h1>
  );
}
