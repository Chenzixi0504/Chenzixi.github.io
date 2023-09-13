/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';
import Nav3 from './Nav3';
import Content11 from './Content11';
import Pricing0 from './Pricing0';
import Feature1 from './Feature1';
import Footer0 from './Footer0';

import {
  Nav32DataSource,
  Content110DataSource,
  Pricing00DataSource,
  Pricing01DataSource,
  Pricing02DataSource,
  Pricing03DataSource,
  Feature10DataSource,
  Nav31DataSource,
  Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    /* 如果不是 dva 2.0 请使用以下代码
    // 实现整屏滚动
    scrollScreen.init({ location: ['Content11_0', 'Pricing0_0', 'Pricing0_1', 'Pricing0_2', 'Pricing0_3', 'Feature1_0', 'Footer0_0'] });
    */
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
        // 实现整屏滚动
        scrollScreen.init({
          location: [
            'Content11_0',
            'Pricing0_0',
            'Pricing0_1',
            'Pricing0_2',
            'Pricing0_3',
            'Feature1_0',
            'Footer0_0',
          ],
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_2"
        key="Nav3_2"
        dataSource={Nav32DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content11
        id="Content11_0"
        key="Content11_0"
        dataSource={Content110DataSource}
        isMobile={this.state.isMobile}
      />,
      <Pricing0
        id="Pricing0_0"
        key="Pricing0_0"
        dataSource={Pricing00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Pricing0
        id="Pricing0_1"
        key="Pricing0_1"
        dataSource={Pricing01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Pricing0
        id="Pricing0_2"
        key="Pricing0_2"
        dataSource={Pricing02DataSource}
        isMobile={this.state.isMobile}
      />,
      <Pricing0
        id="Pricing0_3"
        key="Pricing0_3"
        dataSource={Pricing03DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Nav3
        id="Nav3_1"
        key="Nav3_1"
        dataSource={Nav31DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
