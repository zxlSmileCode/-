import React from 'react';
import './Ifooter.css';

const Ifooter = () => {
    return (
        <div className="footer">
            <div className="float-window">
                <div className="mask"/>
                <div className="download-float">
                    <div className="hide-aboutus"/>
                </div>
                <div className="about-us">
                    <div className="hide-aboutus"/>
                    <div className="wechat">
                        <div>官方微信</div>
                        <div>扫码关注有钱花官方微信公众号，或微信内搜索“有钱花”</div>
                    </div>
                    <div className="weibo">
                        <div>官方微博</div>
                        <div>官方新浪微博账号<a href="https://weibo.com/u/6008381932" target="view_window">@有钱花</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerMid clearfix">
                <div className="fl-div parent" id="aboutUs">
                    <h4
                        className="title"
                        style={{
                        cursor: 'pointer'
                    }}>关于我们</h4>
                    <div className="parent-list clearfix">
                        <div className="media">
                            <div>
                                <span
                                    style={{
                                    cursor: 'pointer'
                                }}>官方微博</span>
                            </div>
                            <div>
                                <span
                                    style={{
                                    cursor: 'pointer'
                                }}>官方微信</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fl-div contactUs">
                    <h4 className="title">联系我们</h4>
                    <div className="list-contact">
                        <ul>
                            <li className="clear">
                                官方邮箱：<a href="mailto:umoney_help@duxiaoman.com" className="footer-tomail">umoney_help@duxiaoman.com</a>
                            </li>
                            <li>地址：北京市海淀区西北旺东路10号院西区4号楼 (国际与区域协同创新中心大厦)</li>
                        </ul>
                    </div>
                </div>
                <div className="fl-div download-app">
                    <h4 className="title">下载APP</h4>
                    <div className="list-bot">
                        <span
                            style={{
                            cursor: 'pointer'
                        }}>iOS客户端</span>
                        <span
                            style={{
                            cursor: 'pointer'
                        }}>Android客户端</span>
                    </div>
                </div>
                <div className="fl-div credit-objection">
                    <h4 className="title">
                        <a href="#">征信异议</a>
                    </h4>
                </div>
                <div className="fl-div qrcode" style={{
                    width:'1080px'
                }}>
                    <img
                        src="https://umoney.baidu.com/v/static/umoneyweb/common/widget/footer/img/umoney-service_8669b78.png"
                        alt=""/>
                    <img
                        src="https://umoney.baidu.com/v/static/umoneyweb/common/widget/footer/img/umoney-download_608ac8f.png"
                        alt=""/></div>
            </div>
            <div className="bot-footer">
                <div>
                    <div>借款服务提供方详见借款协议；根据监管要求，暂不对在校学生开放</div>
                    <div>版权归有钱花所有 ©2019Baidu 京ICP证030173号</div>
                </div>
            </div>
        </div>

    );
};
Ifooter.propTypes ={}

export default Ifooter;