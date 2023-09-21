import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'atnd';

const TwoInfo = () => {
    const { twoInfo } = useSelector((state)=>state.image);
    // console.log("twoInfo",twoInfo);
    return (
        <div style={{border:'10px solid gray', display:'flex'}}>
            <img src={twoInfo[0].src} width="50%"/>
            <div>
                <h1>COVID-19 신속검사</h1>
                <p style={{padding:'10%'}}>
                    민감도 97% 특이도 93%,<br />
                    비전문가도 사용할수 있습니다
                </p>
                <Button></Button>
            </div>
        </div>
    );
}

export default TwoInfo;