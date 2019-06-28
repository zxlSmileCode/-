import React from 'react';
import { connect } from 'dva';
import Cmain from '../../components/Cost/Cmain';
import Ccen from '../../components/Cost/Ccen';
import Cfoot from '../../components/Cost/Cfoot';

import './CostPage.css';

function CostPage() {
  return (
    <div id="pages-container">
        <div className="home-page">
            <div className="main">
                <Cmain></Cmain>
                <Ccen></Ccen>
                <Cfoot></Cfoot>
            </div>
        </div>
    </div>
  );
}

CostPage.propTypes = {
};

export default connect()(CostPage);