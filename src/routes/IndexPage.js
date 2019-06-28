import React from 'react';
import { connect } from 'dva';
import Iheader from '../components/Index/Iheader';
import Imain from '../components/Index/Imain';
import Ifooter from '../components/Index/Ifooter';
import './IndexPage.css';

function IndexPage() {
  return (
    <div>
        <Iheader></Iheader>
        <Imain></Imain>
        <Ifooter></Ifooter>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
