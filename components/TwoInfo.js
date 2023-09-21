import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const TwoInfo = () => {
    const { twoInfo } = useSelector((state)=>state.image);
    const [count, setCount] = useState(0);
    const [ one, setOne ] = useState(twoInfo[count].src);
    // console.log("twoInfo",twoInfo);
    let image = one
    const onRight = useCallback(()=>{
        if(count === 2) {
            return setOne(twoInfo[2].src)
        }
        setCount(count+1);
        setOne(twoInfo[count+1].src);
    },[twoInfo,count,one]);
    const onLeft = useCallback(()=>{
        if( count === 0) {
            return setOne(twoInfo[0].src)
        }
        setCount(count-1);
        setOne(twoInfo[count-1].src);
    },[twoInfo,count,one]);
    return (
        <div style={{border:'10px solid gray', display:'flex'}}>
            <img src={image} width="50%"/>
            <div>
                {
                    
                    count === 0 && <>

                        <h1>COVID-19 신속검사111</h1>
                        <p style={{padding:'10%'}}>
                            민감도 97% 특이도 93%111,<br />
                            비전문가도 사용할수 있습니다111
                        </p>
                        </>
                }
                {
                    count === 1 && <>
                        <h1>COVID-19 신속검사22</h1>
                        <p style={{padding:'10%'}}>
                            민감도 97% 특이도 93%222,<br />
                            비전문가도 사용할수 있습니다222
                        </p>
                        </>
                }
                {
                        count === 2 && <>
                        <h1>COVID-19 신속검사333</h1>
                        <p style={{padding:'10%'}}>
                            민감도 97% 특이도 93%333,<br />
                            비전문가도 사용할수 있습니다333
                        </p>
                        </>
                }
                <Button onClick={onLeft}>
                    <LeftOutlined />
                </Button>
                <Button onClick={onRight}>
                    <RightOutlined />
                </Button>
            </div>
        </div>
    );
}

export default TwoInfo;