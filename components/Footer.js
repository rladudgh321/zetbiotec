import React from 'react';
import { Row } from 'antd';

const Footer = () => {
    return (
        <>
            <Row style={{
                border:'10px solid gray',display:'flex', flexDirection:'column',
                background:'#0D3562',height:'40vh', color:'white'
            }}>
                <p style={{fontSize:'1rem'}}>(주)제트바이오텍 대표 : 이석제 TEL : 043-278-0075 FAX : 043-278-0074 E-MAIL : sales@zetbio.com</p>
                <p style={{fontSize:'1rem'}}>본사 : 충북 청주시 흥덕구 공단로 134, 1409호</p>
                <p style={{fontSize:'1rem'}}>연구소: 충북 청주시 흥덕구 오송읍 오송생명1로 194-25, 405호 (청주SB플라자)</p>
                <p style={{fontSize:'1rem'}}>Copyright © Z Biotech Inc. ALL Rights Reserved.</p>
            </Row>
        </>
    );
}

export default Footer;

//#0D3562