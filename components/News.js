import React from 'react';
import { Row, Button } from 'antd';

const News = () => {
    return (
        <>
            <Row style={{display:'flex', flexDirection:'column', padding:'5%'}}>
                <h1>뉴스 & 공지사항</h1>
                <p>첨단 검사기기 및 진단키트 제조 업체 제트바이오텍</p>
                <ul>
                    <li><a href="1">1</a></li>
                    <li><a href="2">2</a></li>
                    <li><a href="3">3</a></li>
                    <li><a href="4">4</a></li>
                </ul>
                <Button>자세히 보기</Button>
            </Row>
        </>
    );
}

export default News;