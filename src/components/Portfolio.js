import React from 'react';
import { Row, Col, Card } from 'antd';
import PortfolioCover1 from '../assets/img/cover_towingnet.jpg';
import PortfolioCover2 from '../assets/img/cover_plainme.jpg';
import PortfolioCover3 from '../assets/img/cover_tiandiren.jpg';

function Portfolio() {
  return (
    <Row>
      <Col span={24}>
        <h2>Portfolio</h2>
        <Row gutter={16}>
          <Col className="portfolio-item" sm={24} md={12}>
            <a href="https://towingnet.com.tw" rel="noopener noreferrer" target="_blank">
              <Card
                hoverable
                cover={<img src={PortfolioCover1} alt="台灣道路救援網" />}
              >
                <h3>台灣道路救援網</h3>
                <ul className="portfolio-desc">
                  <li>使用 google map api 與 vuejs 製作救援計價系統</li>
                  <li>SEO 優化，主要關鍵字皆列於 google 搜尋第一頁</li>
                  <li>網站架設並運行於 GCP</li>
                </ul>
              </Card>
            </a>
          </Col>
          <Col className="portfolio-item" sm={24} md={12}>
            <a href="https://www.plain-me.com/" rel="noopener noreferrer" target="_blank">
              <Card
                hoverable
                cover={<img src={PortfolioCover2} alt="Plain-me" />}
              >
                <h3>Plain-me</h3>
                <ul className="portfolio-desc">
                  <li>端頁面切版製作</li>
                  <li>頁面互動效果、相簿製作</li>
                  <li>CSS 組織（RSCSS）</li>
                </ul>
              </Card>
            </a>
          </Col>
          <Col className="portfolio-item" sm={24} md={12}>
            <a href="https://www.tiandiren.tw/" rel="noopener noreferrer" target="_blank">
              <Card
                hoverable
                cover={<img src={PortfolioCover3} alt="天地人文創" />}
              >
                <h3>天地人文創</h3>
                <ul className="portfolio-desc">
                  <li>Woocommerce 購物車客製化</li>
                  <li>Shortcode 嵌入製作</li>
                </ul>
              </Card>
            </a>
          </Col>
          <Col className="portfolio-item" sm={24} md={12}>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <Card
                hoverable
                cover={<img src={"https://fakeimg.pl/1200x666/282828/939393/?text=Project"} alt="群眾募資平台" />}
              >
                <h3>群眾募資平台</h3>
                <ul className="portfolio-desc">
                  <li>前端頁面切版製作</li>
                  <li>電子報系統（Sendgrid）串接</li>
                  <li>金流串接（歐付寶）</li>
                </ul>
              </Card>
            </a>
          </Col>
          <Col className="portfolio-item" sm={24} md={12}>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <Card
                hoverable
                cover={<img src={"https://fakeimg.pl/1200x666/282828/939393/?text=Project"} alt="品牌形象官網" />}
              >
                <h3>品牌形象官網</h3>
                <ul className="portfolio-desc">
                  <li>WP 主題製作</li>
                  <li>RWD 前端頁面製作</li>
                </ul>
              </Card>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Portfolio;
