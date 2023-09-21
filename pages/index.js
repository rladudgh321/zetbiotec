import React from 'react';
import Slider from '../components/Slider';
import AppLayout from '../components/AppLayout';
import { Row } from 'antd';
import { useSelector } from 'react-redux'
import TestKit from '../components/TestKit';
import ForBody from '../components/ForBody';
import TwoInfo from '../components/TwoInfo';
import ForAnimal from '../components/ForAnimal';
import Certificate from '../components/Certificate';
import News from '../components/News';
import OnlineContact from '../components/OnlineContact';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Home = () => {
  const { isMenu } = useSelector((state)=>state.image);
    return (
        <>
            <AppLayout>
                <div style={{ position:'relative', top:'-12vh'}}>
                    {
                        isMenu
                        ? <Slider op="rgba(0,0,0,0.7)"/>
                        : <Slider />
                    }
                    <TestKit />
                    <ForBody />
                    <TwoInfo />
                    <ForAnimal />
                    <Certificate />
                    <News />
                    <OnlineContact />
                    <Map />
                    <Footer />
                </div>
            </AppLayout>
        </>
    );
}

export default Home;

//url('http://zetbio.com/theme/zb/img/main/sl-img02.jpg') top center / cover no-repeat