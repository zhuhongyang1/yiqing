import React, { useState, useEffect } from 'react'
import { AreaType } from '../utils/types'
import styles from './Area.module.scss'

const Area = (props: { areaTree: AreaType[] }) => {

    console.log('国内/海外area...', props.areaTree);
    console.log('中国数据..............', props.areaTree.slice(0, 1))
    // console.log('国外数据。。。。。', props.areaTree.slice(1, -1))

    return <>
        <div>
            <div className={styles.titles}>
                <p className={styles.namesc}>中国疫情（包括港澳台）</p>
                <p className={styles.names}>7:00-10:00为更新高峰，数据如有滞后请谅解。</p>
            </div>
            <div>
                {/* nav */}
                <div className={styles.nav}>
                    <h2 className={styles.areach2}>地区</h2>
                    <p className={styles.areacp}>新增确诊</p>
                    <p className={styles.areacp}>累计确诊</p>
                    <p>治愈</p>
                    <p>死亡</p>
                </div>

                {/* 各个省份 */}
                {
                    props.areaTree.slice(0, 1).map(ite=>{
                       return ite.children.map((item,indexx)=>{
                           return <div className={styles.concentss} key={indexx}>
                           <h2 className={styles.concentsname}>{item.name}</h2>
                           <p>{ite.today.confirm}</p>
                           <p>{item.total.confirm}</p>
                           <p>{item.total.heal}</p>
                           <p>{item.total.dead}</p>
                       </div>
                       })
                    })
                }
                
            </div>
        </div>

        {/* 海外国家 */}
        <div>
            {/* 海外国家标题 */}
            <div className={styles.title}>
                <p className={styles.name}>海外国家</p>
                <span className={styles.num}>
                    确诊{202}例，死亡{1}例
                </span>
            </div>
            {/* nav */}
            <div className={styles.nav}>
                <h2 className={styles.areah2}>地区</h2>
                <p>确诊</p>
                <p>治愈</p>
                <p>死亡</p>
            </div>
            {/* 各个国家  最后一个城市截取不出来，丢掉 */}
            <div className={styles.countries}>
                {
                    props.areaTree.slice(1, -1).map((item, index) => {
                        return <div className={styles.concents} key={index}>
                            <h2 className={styles.concentsname}>{item.name}</h2>
                            <p>{item.total.confirm}</p>
                            <p>{item.total.heal}</p>
                            <p>{item.total.dead}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}

export default Area