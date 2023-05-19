import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faQq,
  faWeixin,
  faWeibo,
  faBilibili,
} from "@fortawesome/free-brands-svg-icons";
import INDEXImg from "@site/static/img/working_from_anywhere.svg";

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
<<<<<<< HEAD
    //   {/* <div className="container">
=======
    //   <div className="container">
>>>>>>> kkt-next
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Docusaurus Tutorial - 5min ⏱️
    //       </Link>
    //     </div>
<<<<<<< HEAD
    //   </div> */}
    // </header>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* <div className="container"> */}
      <div className={clsx('container', styles.indexContainer)}>
        <div>
          <h1 className={clsx("hero__title", styles.indexTitle)}>{siteConfig.tagline} | {siteConfig.title}</h1>
          <p className={clsx("hero__subtitle", styles.indexInfo)}>{siteConfig.title}烧鸡中</p>
          <div className={clsx(styles.indexIco)}>
=======
    //   </div>
    // </header>
    <header className={clsx('hero', styles.headerBox)}>
      <div className={clsx(styles.headerBoxContainer)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.tagline} {siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.title}烧鸡中</p>
          <div className={clsx(styles.headerBoxIco)}>
>>>>>>> kkt-next
            <a href="https://space.bilibili.com/39060970">
              <FontAwesomeIcon icon={faBilibili} size="lg" />
            </a>
            <a href="https://weibo.com/cbsjz">
              <FontAwesomeIcon icon={faWeibo} size="lg" />
            </a>
            <a href="https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1YLos5Pcj3J&businessType=9&jumpInfo=ChAXMiDtGIdOphKhWYhwFtDQEgN2cDE%3D&from=246610&biz=ka#/pc">
              <FontAwesomeIcon icon={faQq} size="lg" />
            </a>
            <a href="https://github.com/shaotori">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
        <div>
<<<<<<< HEAD
          <INDEXImg className={clsx(styles.indexImg)}/>
        </div>
      </div>
    </header >
=======
          <INDEXImg className={clsx(styles.indexImg)} />
        </div>
      </div>
    </header>
>>>>>>> kkt-next
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
<<<<<<< HEAD
      title={`cb烧鸡中`}
      description="cbsjz-docusaurus <head />">
      <HomepageHeader className={clsx(styles.indexHeader)} />
      <main>
        {/* <HomepageFeatures /> */}
        {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
          border: '1px #000 solid',
        }}>主页正文区</div> */}
      </main>
    </Layout >
=======
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
>>>>>>> kkt-next
  );
}
