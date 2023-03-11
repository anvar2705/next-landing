import Image from 'next/image';

import Icons from 'assets/icons';

import styles from './TestComponent.module.scss';

const TestComponent = (): JSX.Element => (
  <div className={styles.root}>
    TestComponent
    <Image src="./next.svg" alt="next-app" width={150} height={50} />
    <div>
      <Icons.Close fill="red" />
    </div>
  </div>
);

export default TestComponent;
