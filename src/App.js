// import { Grid } from 'semantic-ui-react';
import React from 'react';
import { Row, Col, Icon, Divider, Timeline, Card } from 'antd';
import './App.css';
import portfolio_cover_1 from './assets/img/cover_1.jpg';
import portfolio_cover_2 from './assets/img/cover_2.jpg';
import portfolio_cover_3 from './assets/img/cover_3.jpg';


const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Row>
          <Col span={24}>
            <h1>邱毅柏</h1>
            <h2>Web developer</h2>
            <div className="contact">
              <div>
                <Icon type="mobile" /> 0935-828-026
              </div>
              <div>
                <Icon type="mail" /> cypressyi1990@gmail.com
              </div>
            </div>
          </Col>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={24}>
            <h2>Summary</h2>
            <p>網站開發相關經驗約一年半，對於網路相關的一切事物均感興趣，相信科技的進步與環境的改變密不可分。對於網站前後端皆有基礎，目前正熟習 Javascript(ES6) 與 React 相關技術。</p>
          </Col>
          <Col span={24}>
            <h2>Work experience</h2>
          </Col>
          <Col span={24}>
            <Timeline>
              <Timeline.Item>
                <div>
                <div className="job-title">外包工程師<span className="job-date">2016/11 ~ 2017/06</span></div>
                </div>
                
                <div className="compony-title"><a href="https://towingnet.com.tw" rel="noopener noreferrer" target="_blank">台灣道路救援網</a></div>
                <ul className="job-description">
                  <li>使用 Wordpress 開發公司官方網站，並架設於 Google cloud</li>
                  <li>執行 SEO 優化網站，道路救援相關頁面皆列於 Google 搜尋第一頁</li>
                  <li>網站數據串接與分析，包含 Google Analytics、Search Console 與 Adwords</li>
                </ul>
              </Timeline.Item>
              <Timeline.Item>
                <div className="job-title">外包工程師<span className="job-date">2015/10 ~ 2016/09</span></div>
                <div className="compony-title"><a href="https://flipermag.com" rel="noopener noreferrer" target="_blank">FLiPER Creative Inc. 飛柏創意</a></div>
                <ul className="job-description">
                  <li>Wordpress 開發主題版面與網站前後端，內容包含品牌形象官網與媒體網站</li>
                  <li>基於 Wordpress 開發電子商務系統，並使用歐付寶串接網站金流</li>
                </ul>
              </Timeline.Item>
              <Timeline.Item>
                <div className="job-title">志工<span className="job-date">2015/10 ~ 2016/09</span></div>
                <div className="compony-title"><a href="https://batonproject.com/portfolio/careerhunter/" rel="noopener noreferrer" target="_blank">Agile 網站開發實戰營</a></div>
                <ul className="job-description">
                  <li>擔任 Scrum 課程模擬 Product Owner，居中協調開發方向與客戶需求</li>
                  <li>擔任課程助教，協助前端技術支援與分享</li>
                </ul>
              </Timeline.Item>
            </Timeline>
          </Col>
          <Col span={24}>
            <h2>Main skill</h2>
            <ul className="job-description">
              <li>HTML、CSS、Javascript、PHP</li>
              <li>SASS、NPM、Webpack、Git</li>
              <li>Wordpress、React</li>
              <li>對於網站前後端運作皆有基本認知，有過從零獨立開發並架設網站的經驗</li>
              <li>SEO 優化相關經驗，熟習 Google Analytics、Search Console 等工具</li>
            </ul>
          </Col>
          <Col span={24}>
            <h2>Education</h2>
            <div>中國文化大學, 資訊工程學系 <span className="job-date">2011/09 ~ 2014/06</span></div>
          </Col>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={24}>
            <h2>Portfolio</h2>
            <Row gutter={16}>
              <Col className="portfolio-item" xs={24} sm={12} md={8}>
                <a href="https://towingnet.com.tw" rel="noopener noreferrer" target="_blank">
                  <Card
                    hoverable
                    cover={<img src={portfolio_cover_1}/>}
                  >
                    <h3>台灣道路救援網</h3>
                    <ul className="portfolio-desc">
                      <li>路程計價系統</li>
                      <li>SEO 優化</li>
                      <li>官網開發、營運</li>
                    </ul>
                  </Card>
                </a>
              </Col>
              <Col className="portfolio-item" xs={24} sm={12} md={8}>
                <a href="https://towingnet.com.tw" rel="noopener noreferrer" target="_blank">
                  <Card
                    hoverable
                    cover={<img src={portfolio_cover_2}/>}
                  >
                    <h3>Plain-me</h3>
                    <ul className="portfolio-desc">
                      <li>前端頁面製作</li>
                      <li>商品相簿 Carousel</li>
                      <li>CSS 組織</li>
                    </ul>
                  </Card>
                </a>
              </Col>
              <Col className="portfolio-item" xs={24} sm={12} md={8}>
                <a href="https://towingnet.com.tw" rel="noopener noreferrer" target="_blank">
                  <Card
                    hoverable
                    cover={<img src={portfolio_cover_3}/>}
                  >
                    <h3>天地人文創</h3>
                    <ul className="portfolio-desc">
                      <li>購物車系統客製化</li>
                      <li>Shortcode 嵌入</li>
                      <li>部分版面改版</li>
                    </ul>
                  </Card>
                </a>
              </Col>
              <Col className="portfolio-item" xs={24} sm={12} md={8}>
                <a href="https://towingnet.com.tw" rel="noopener noreferrer" target="_blank">
                  <Card
                    hoverable
                    cover={<img src={"http://fakeimg.pl/1200x666/282828/EAE0D0/?text=Project"}/>}
                  >
                    <h3>群眾募資平台</h3>
                    <ul className="portfolio-desc">
                      <li>部分前端切版</li>
                      <li>電子報系統（Sendgrid）</li>
                      <li>金流串接（歐付寶）</li>
                    </ul>
                  </Card>
                </a>
              </Col>
              <Col className="portfolio-item" xs={24} sm={12} md={8}>
                <a href="https://towingnet.com.tw" rel="noopener noreferrer" target="_blank">
                  <Card
                    hoverable
                    cover={<img src={"http://fakeimg.pl/1200x666/282828/EAE0D0/?text=Project"}/>}
                  >
                    <h3>品牌形象官網</h3>
                    <ul className="portfolio-desc">
                      <li>前端頁面製作</li>
                      <li>WP 主題製作</li>
                      <li>串接點數系統</li>
                    </ul>
                  </Card>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
