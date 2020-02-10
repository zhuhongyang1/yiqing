import React, { useState, useEffect } from 'react'
import { getTruth } from '../services/index'
import styles from './Truth.module.scss'
import { Carousel } from 'antd';
import 'antd/dist/antd.css'

interface ProType {
    explain: string,
    title: string,
    abstract: string,
    afterChange: void
}

const Truth = () => {
    // 定义全国医院数据
    let [truth, setTruth] = useState<ProType[]>([]);

    // 获取全国医院数据
    useEffect(() => {
        getTruth().then((res: any) => {
            if (res.code == 0) {
                setTruth(res.content);
            }
        })
    }, []);
    console.log('辟谣信息res..', truth)

    return <div className={styles.box}>
        <div className={styles.h3}>
            辟谣信息
            <div className={styles.healthIcon}></div>
        </div>
        <Carousel autoplay>
            {
                truth.map((item, index) => {
                    return <div className={styles.middlebox} key={index}>
                        <div className={styles.smallbox}>
                            <p className={styles.explainfont}>{item.explain}</p>
                            <div className={styles.title}>
                                {item.title}
                            </div>
                            <div className={styles.abstract}>
                                {item.abstract}
                            </div>
                            <p className={styles.look}>查看详情</p>
                            <div className={styles.dajai}></div>
                        </div>
                    </div>
                })
            }
        </Carousel>
    </div>
}

export default Truth