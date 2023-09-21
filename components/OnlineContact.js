import React from 'react';
import { Row, Button } from 'antd';

const OnlineContact = () => {
    return (
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
                    backgroundImage:"url('http://zetbio.com/theme/zb/img/main/section-04-bg.jpg')",
                zIndex:'101', width:'100%', height:'100%', backgroundSize:'cover', backgroundRepeat:'no-repeat',
                backgroundPosition:'50% 0%', backgroundAttachment:'fixed'
                    }}>
                    <div style={{
                        padding:'30px', fontSize:'0.7rem', lineHeight:'28px'
                    }}>
                        <h1>온라인 문의</h1>
                        <p>인간과 동물의 보호와 복지를 위해 최선을 다하는 건강과 행복을 추구하는 기업</p>
                        <Button>문의하기</Button>
                    </div>
                </div>
                
            </Row>    
        </>
    );
}

export default OnlineContact;

// http://zetbio.com/theme/zb/img/main/section-04-bg.jpg