import React from 'react';
import { Row } from 'antd';

const ForBody = () => {
    return (
        <>
            <Row style={{
                border:'10px solid gray',display:'flex', flexDirection:'column',
                textAlign:'center', height:'30vh'
            }}>
                <h1 style={{ fontSize:'3rem' }}>인체용 제품정보</h1>
                <p style={{fontSize:'1rem'}}>검사,진단키트 기기 제트바이오텍 인체용 제품</p>
            </Row>
        </>
    );
}

export default ForBody;