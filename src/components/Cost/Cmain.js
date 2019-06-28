import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const Cmain = () => {
    return (
        <>
            <Carousel>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
            <div className="header">
                <div className="title">
                    <div className="title-top">
                        <div className="logo" />
                        <div className="title-item">
                        <span >
                            <a  href="/">有钱花首页</a>
                        </span>
                        <span >
                            <a  href="#">免密还款</a>
                        </span>
                        <span >
                            <a style={{
                                color:'#fff'
                            }}>业务合作</a>
                        </span>
                        <span className="download">
                            <a style={{
                                color:'#fff'
                            }}>下载APP</a>
                        </span>
                        </div>
                    </div>
                    <div className="title-line" />
                    <div className="down" style={{display: 'none'}}>
                        <span className="close" />
                        <div className="down-method">
                        <p >下载有钱花APP, 享受更多服务</p>
                        <p >方法一：扫描下方二维码, 立即下载</p>
                        <p  />
                        <p >方法二：手机应用商店搜索“有钱花”</p>
                        </div>
                    </div>
                    </div>
                    <div className="swiper">
                        <div className="el-carousel">
                            <div className="el-carousel__container" style={{
                                width:6000,
                                height: 470}}>
                                <button type="button" className="el-carousel__arrow el-carousel__arrow--left" style={{display: 'block'}}>
                                    <i className="el-icon-arrow-left">&lt;</i>
                                </button>
                                <button type="button" className="el-carousel__arrow el-carousel__arrow--right" style={{display: 'block'}}>
                                    <i className="el-icon-arrow-right">&gt;</i>
                                </button>
                                <div  className="el-carousel__item" style={{float:'left'}}>
                                    <img  src="https://umoney.baidu.com/static/union/img/yqh-swiper.6088a49d.png" /></div>
                                <div  className="el-carousel__item is-animating" style={{float:'left'}}>
                                    <img  src="https://umoney.baidu.com/static/union/img/edu-swiper.c1ccf4a1.png" /></div>
                                <div  className="el-carousel__item is-active is-animating" style={{float:'left'}}>
                                    <img  src="https://umoney.baidu.com/static/union/img/ym-swiper.4d671e61.png" /></div>
                                </div>
                                <ul className="el-carousel__indicators">
                                    <li className="el-carousel__indicator">
                                        <button className="el-carousel__button">
                                        </button>
                                    </li>
                                    <li className="el-carousel__indicator">
                                        <button className="el-carousel__button">
                                        </button>
                                    </li>
                                    <li className="el-carousel__indicator is-active">
                                        <button className="el-carousel__button" />
                                    </li>
                                </ul>
                        </div>
                    </div>
            </div>
        </>

    ); 
}; 
Cmain.propTypes ={

}

export default Cmain;
