'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navigation.module.scss';
import Button from '../button/Button';

const Navigation = () => {
  return (
    <nav className={styles.largeNavbar}>
      <div className={styles.navContainer}>
        <Link className={`display-s ${styles.navigationLogo}`} href="/">
          <Image src="/logo/logo.svg" alt="LearnHub Logo" width={250} height={55} />
        </Link>
        <div className={styles.buttonsContent}>
          <div>
            <Link href="/signup" passHref>
              <Button
                style={{
                  backgroundColor: '#f9664b',
                  padding: '10px',
                  fontSize: '17px',
                  marginRight: '10px',
                  paddingInline: '25px',
                  height: '48px',
                  width: '180px',
                }}
              >
                Регистрирај се
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/signin" passHref>
              <Button
                style={{
                  backgroundColor: 'var(--bg-color)',
                  padding: '10px',
                  height: '48px',
                  width: '131px',
                  color: '#FFFF',
                  border: '1px solid #ea713e',
                  fontSize: '17px',
                  paddingInline: '25px',
                }}
              >
                Најави се
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
