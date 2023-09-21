import React from 'react';
import { Row, Button } from 'antd';
const TestKit = () => {
    return (
        <>
            <Row style={{    
                
                width: '100%',
                height: '50%'}}>
                <div style={{
                    position: 'relative',
                    bottom: '-50%',
                    backgroundImage:"url('http://zetbio.com/theme/zb/img/main/section01_01.png')",
                zIndex:'101', width:'100%', height:'100%', backgroundSize:'cover', backgroundRepeat:'no-repeat',
                backgroundPosition:'50% 0%'
                    }}>
                    <div style={{
                        padding:'30px', fontSize:'0.7rem', lineHeight:'28px'
                    }}>
                        <h1>COVID-19 전문가용 항원 신속 진단 테스트 키트</h1>
                        <p>AnyLab COVID-19 Ag Test<br /> Kit 500 Test COVID-19 전문가용 항원 신속 진단 테스트 키트</p>
                        <Button>제품 구매</Button>
                    </div>
                </div>
            </Row>
        </>
    );
}

export default TestKit;

//