import React from 'react';
import {connect} from 'dva';
import Umoney from '../../components/Umoney/Umoney';
import Ufoot from '../../components/Index/Ifooter';
import './UPage.css';

function UPage() {
    return (
        <>
          <div className="topbox-wrap">
              <div className="topbox">
                  <div className="container topnav">
                      <div className="logo-area">
                          <h1>
                              <a href="/">有钱花</a>
                          </h1>
                      </div>
                  </div>
              </div>
          </div>
          <Umoney></Umoney>
          <Ufoot></Ufoot>
        </>
    );
}

UPage.propTypes = {};

export default connect()(UPage);