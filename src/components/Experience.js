import React from 'react';
import { Row, Col, Timeline } from 'antd';

function Experience() {
  return (
    <Row>
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
    </Row>
  );
}

export default Experience;
