import React from 'react';
import { Row } from 'antd';

const Map = () => {
    return (
        <>
            <Row style={{
                border:'10px solid gray',display:'flex', flexDirection:'column',
                textAlign:'center', height:'100vh'
            }}>
                <h1 style={{ fontSize:'3rem' }}>찾아오시는 길</h1>
                <p style={{fontSize:'1rem'}}>본사 : 충북 청주시 흥덕구 공단로 134, 1409호</p>
                <p style={{fontSize:'1rem'}}>연구소 : 충북 청주시 흥덕구 오송읍 오송생명1로 194-25, 405호 (청주SB플라자)</p>
                <p style={{fontSize:'1rem'}}>공장 : 충북 청주시 흥덕구 월명로 55번길 57 (이진스 공장)</p>
            </Row>
        </>
    );
}

export default Map;