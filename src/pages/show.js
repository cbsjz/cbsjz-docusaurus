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
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Docusaurus Tutorial - 5min ⏱️
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <header className={clsx('hero', styles.headerBox)}>
      <div className={clsx(styles.headerBoxContainer)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.tagline} {siteConfig.title}</h1>
          <p className="hero__subtitle">HoshinoYuzu</p>
          <div className={clsx(styles.headerBoxIco)}>
            <a href="https://space.bilibili.com/39060970">
              <FontAwesomeIcon icon={faBilibili} size="lg" />
            </a>
            <a href="https://weibo.com/cbsjz">
              <FontAwesomeIcon icon={faWeibo} size="lg" />
            </a>
            <a href="https://pd.qq.com/s/9ffm36qi">
              <FontAwesomeIcon icon={faQq} size="lg" />
            </a>
            <a href="https://github.com/shaotori">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
          <div>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/video">
                <font className={styles.buttonsLink}>项目作品-视频</font>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <INDEXImg className={clsx(styles.indexImg)} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
