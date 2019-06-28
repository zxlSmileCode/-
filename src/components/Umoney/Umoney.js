import React from 'react';

const Umoney = () => {

    return (
        <div className="container">
            <p className="block-info">免密还款</p>
            <div className="content">
                <form
                    className="form-horizontal verification-form block-wrap"
                    name="form"
                    id="form">
                    <h2 className="con-title">请填写实际贷款人身份信息</h2>
                    <div className="control-group">
                        <label className="control-label" htmlFor="name">贷款人姓名</label>
                        <div className="controls">
                            <input
                                type="text"
                                id="name"
                                name="realname"
                                className="default need-valid "
                                data-valid="required:rName|name:vName"
                                placeholder="本人真实姓名"/>
                            <p className="msg"/></div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="prcid">贷款人身份证号</label>
                        <div className="controls">
                            <input
                                type="text"
                                id="prcid"
                                name="idcard"
                                className="default need-valid "
                                data-valid="required:rIdcard|idcard:vIdcard"
                                placeholder="中国大陆身份证"/>
                            <p className="msg"/></div>
                    </div>
                    <h2 className="con-title con-title-margin">请填写您的手机号</h2>
                    <div className="control-group control-margin-0" style={{
                        height:'46px'
                    }}>
                        <label className="control-label" htmlFor="phone">还款人手机号</label>
                        <div className="controls">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="default need-valid "
                                maxLength={11}
                                data-valid="required:rPhoneRequired|phone:rPhoneRule"
                                placeholder="请输入您的手机号"/>
                            <p className="msg"/></div>
                    </div>
                    <div className="control-group control-margin-10">
                        <div className="controls control-notice">
                            <span>温馨提示：该手机号无需和借款人手机号一致</span>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="phoneCode">短信验证码</label>
                        <div className="controls">
                            <input
                                type="text"
                                id="phoneCode"
                                name="pcode"
                                className="default phoneCode"
                                placeholder="请输入短信验证码"/>
                            <button
                                type="button"
                                className="btn btn-blue phoneCodeBtn width-100"
                                id="sendVerifyCode">
                                获取验证码</button>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <button type="button" className="btn btn-blue width-302" id="submit" data-type>验证</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

Umoney.propTypes = {};

export default Umoney;
