import React from 'react';
import './Iheader.css';

const Iheader = () => {
    return (
        <div className="topbox-wrap">
            <div className="topbox">
                <div className="container topnav">
                    <div className="logo-area">
                        <h1>
                            <a href="/">有钱花</a>
                        </h1>
                    </div>
                    <div className="search-box">
                        <div id="search-input">
                            <input placeholder="搜索" type="text"/>
                        </div>
                        <div id="search-button">
                            百度搜索</div>
                        <div
                            className="close"
                        //     style={{
                        //     display: 'none'
                        // }}
                        />
                    </div>
                    <div className="top-guide">
                        <a href="/">首页</a>
                        <a href="/#/cost" target="_blank">消费分期</a>
                        <a href="/#/help">常见问题</a>
                        <a href="/">免密还款</a>
                    </div>
                    <div className="nav nav-pills" id="nav-pills"></div>
                </div>
            </div>
            <div
                className="search-result-container"
                style={{
                width: 1519,
                height: 374,
                display: 'none'
            }}></div>
        </div>
    );
};

Iheader.propTypes = {};

export default Iheader;
