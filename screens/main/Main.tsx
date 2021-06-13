import React from 'react';

import styles from './Main.module.scss';

import { Button } from 'components';

interface MainScreenProps {

}

export default function Main({  }: any) {
  return (
    <div className={styles.mainScreen}>
      <Button color="primary">button</Button>
    </div>
  );
}