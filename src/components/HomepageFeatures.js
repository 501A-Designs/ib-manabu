import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'IBについて知る',

    description: (
      <>
        IBについて知る事ができるリソースサイト。リソースをオープンに共有できる場：生徒による生徒のためのリソースサイトです。
      </>
    ),
  },
  {
    title: '科目別リソース',

    description: (
      <>
        IBDPの科目の学習に役立つ科目別リソースを提示しています。探す時間を減らし、学習にすばやく取り組めます。
      </>
    ),
  },
  {
    title: 'GitHubにてオープンソース',
    description: (
      <>
        IBまなぶはGitHubにてオープンソースです。開発者以外でも、Google Formを通し、誰もがコンテンツを提供することができます。
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.dot}></div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
