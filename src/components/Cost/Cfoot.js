import React from 'react';

const Cfoot = () => {
    return (
        <div  className="footer">
            <div  className="contact">
                <div  className="contact-way">
                <p >联系我们</p>
                <div >
                    <p >客服热线：95055（每周一至周日 9:00-21:00)</p>
                    <p  className="e-mail">邮<span  />箱：u_money@duxiaoman.com</p>
                    <p >公司地址：北京市海淀区信息路甲9号奎科大厦</p>
                </div>
                </div>
                <div  className="server">
                <div  className="ym-server">
                    <div  />
                    <p >有钱花场景分期服务号</p>
                </div>
                </div>
            </div>
            <div  className="copyright">
                <p >借款服务提供方详见借款协议；根据监管要求，暂不对在校学生开放</p>
                <p >版权归度小满金融所有 2018 baidu 京ICP证030173号</p>
            </div>
        </div>

    );
};

Cfoot.propTypes = {};

export default Cfoot;
