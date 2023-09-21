import React from 'react';

import { Row, Button } from 'antd';
const Certificate = () => {
    return(
        <>
             <Row style={{    
                
                width: '100%',
                height: '50%',
                }}>
                <div style={{backgroundColor:'rgba(0,0,0,0.7)', width:'100%', height:'100%',
                
            }}>
                </div>
                <div style={{
                    position: 'relative',
                    bottom: '-50%',
                    backgroundImage:"url('http://zetbio.com/theme/zb/img/main/section-03-bg.jpg')",
                zIndex:'101', width:'100%', height:'100%', backgroundSize:'cover', backgroundRepeat:'no-repeat',
                backgroundPosition:'50% 0%', backgroundAttachment:'fixed'
                    }}>
                    <div style={{
                        padding:'30px', fontSize:'0.7rem', lineHeight:'28px'
                    }}>
                        <h1>인증 내역</h1>
                        <p>첨단 검사기기 및 진단키트 제조 업체 제트바이오텍</p>
                    </div>
                </div>
                
            </Row>            
        </>
    );
}

export default Certificate;
//
//