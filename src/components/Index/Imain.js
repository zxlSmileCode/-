import React from 'react';
import './Imain.css';

const Imain = () => {
    return (
      <>
        <div className="main">
            <div className="banner-index">
                <div className="bannerMid clearfix container">
                    <div className="download-index clearfix">
                        <div
                            className="download-guide"
                            style={{
                            display: 'none'
                        }}/>
                        <div className="qrcode">
                            <img
                                id="qrcode"
                                src="https://www.baifubao.com/o2o/0/qrcode?text=https://icash.baidu.com/cloan/operation/activity%3FCH%3Dinfo%26fr%3DErtDxeaK1&size=4"
                                width="100%"
                                height="100%"
                                alt="查看额度二维码"/>
                            <span className="qrcode-desc">扫码查看额度</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="feature-part" />
        <div className="process-part" />
        <div className="normal-question">
          <div className="title">常见问题</div>
          <div className="underline" />
          <div className="question-part">
            <div className="questions">1. 有钱花的借款门槛高吗？</div>
            <div className="answers">提供本人身份证，本人银行卡。年龄在18-55周岁的注册用户，均可申请有钱花。<span className="fontColor">提示：有钱花谢绝向在校大学生提供消费分期贷款，如您是在校大学生，请您放弃申请。</span>
            </div>
            <div className="questions">2. 有钱花借款后多久可以到账?</div>
            <div className="answers">通过审核后最快3分钟到账，发放到银行卡。但因网络原因，到账时间可能会有延迟，具体到账时间请以收款银行卡通知为准。</div>
            <div className="questions">3. 有钱花是否可以提前还款？</div>
            <div className="answers">可以进行提前还款，今天借，明天就能还。还款时只计算截止到当天的利息。</div>
          </div>
          <div className="more-questions"><a href="/help#about-umoney">查看更多问题</a></div>
        </div>
        <div className="banner-nav clearfix container">
          <div className="margin-list-left clearfix" style={{width: 220}}>
            <div className="margin-list-box">
              <b className="logo" />
              <div className="contain-msg">
                <h3 className="con-title">快捷服务</h3>
                <ul className="header-backmoney">
                  <li id="freepassword-repayment">
                    <a href="/edu/freeloginpay/freelogin">免密还款</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="margin-list-left clearfix">
            <div className="margin-list-box">
              <b className="logo-service" />
              <div className="contain-msg">
                <h3 className="con-title con-service-title">在线客服</h3>
                <a href="https://aicsc.duxiaoman.com/page/moneyuc" target="_blank" style={{color: '#4d7eff'}}>进入人工客服</a>
              </div>
            </div>
          </div>
          <div className="margin-list-right conten-list-right" style={{width: 480}}>
            <div className="clearfix">
              <b className="logo-phone" />
              <div className="contain-msg">
                <h3 className="con-title">如需联系我们请拨打客服热线</h3>
                <p className="phone-number">95055<span className="phone-word">（服务时间为周一至周日，每日9:00至21:00。）</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="credit-banner"></div>
      </>
    );
};

Imain.propTypes = {};

export default Imain;