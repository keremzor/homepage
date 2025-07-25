import React from 'react';
import styles from './Layout.module.scss';
import { Title } from '@/components/Title';
import { TextSwitcher } from '@/components/TextSwitcher';
import type { TextSwitcherConfig } from '@/components/TextSwitcher';
import { Links } from '@/components/Links';
import { appConfig } from '@/config/appConfig';

const TextSwitcherConfig: TextSwitcherConfig = {
  interval: appConfig.TextSwitcherInterval,
  texts: appConfig.TextSwitcherTexts,
};

export function Layout() {
  return (
    <main className={styles.layout} role="main">
      <Title text={appConfig.name} />
      <TextSwitcher config={TextSwitcherConfig} />
      <Links />
    </main>
  );
}
