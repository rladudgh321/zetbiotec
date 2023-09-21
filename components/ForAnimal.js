import React from 'react';
import { Row, Button } from 'antd';

const ForAnimal = () => {
    return(
        <>
             <Row style={{    
                
                width: '100%',
                height: '50%'}}>
                <div style={{
                    position: 'relative',
                    bottom: '-50%',
                    backgroundImage:"url('http://zetbio.com/theme/zb/img/main/section01_02.png')",
                zIndex:'101', width:'100%', height:'100%', backgroundSize:'cover', backgroundRepeat:'no-repeat',
                backgroundPosition:'50% 0%'
                    }}>
                    <div style={{
                        padding:'30px', fontSize:'0.7rem', lineHeight:'28px'
                    }}>
                        <h1>동물용 제품정보</h1>
                        <p>검사, 진단키트 기기 제트바이오텍 동물용 제품</p>
                        <Button>자세히 보기</Button>
                    </div>
                </div>
            </Row>
        </>
    );
}

export default ForAnimal;
