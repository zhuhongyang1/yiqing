import React, { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import { TotalType } from '../utils/types'

const Header = (props: { total: TotalType }) => {
    console.log('total...', props.total)

    return <>
        <div>
            <div className={styles.header}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}>
                    <p>数据来源：国家及各地卫健委每日信息发布</p>
                </div>
            </div>

            <div className={styles.middle}>
                <div className={styles.four}>
                    <p className={styles.six}>
                        统计截至
                        <span className={styles.spantime}>{props.total && props.total.lastUpdateTime}</span>
                        <em className={styles.emone}>
                            更新于
                        <span className={styles.spantime}>{new Date().toLocaleTimeString()}</span>
                            前
                    </em>
                    </p>
                </div>
                
                <div className={styles.peopenum}>
                    <div className={styles.numone}>
                        <div className={styles.addnum}>
                            较上日
                            <span>+{props.total && props.total.chinaAdd.confirm}</span>
                        </div>
                        <div className={styles.zongshu}>{props.total && props.total.chinaTotal.confirm}</div>
                        <div className={styles.text}>全国确诊</div>
                    </div>

                    <div className={styles.numonea}>
                        <div className={styles.addnuma}>
                            较上日
                            <span>+{props.total && props.total.chinaAdd.suspect}</span>
                        </div>
                        <div className={styles.zongshua}>{props.total && props.total.chinaTotal.suspect}</div>
                        <div className={styles.texta}>
                            <span>疑似病例</span>
                        </div>
                    </div>

                    <div className={styles.numoneb}>
                        <div className={styles.addnumb}>
                            较上日
                            <span>+{props.total && props.total.chinaAdd.heal}</span>
                        </div>
                        <div className={styles.zongshub}>{props.total && props.total.chinaTotal.heal}</div>
                        <div className={styles.textb}>至治愈人数</div>
                    </div>

                    <div className={styles.numonec}>
                        <div className={styles.addnumc}>
                            较上日
                            <span>+{props.total && props.total.chinaAdd.dead}</span>
                        </div>
                        <div className={styles.zongshuc}>{props.total && props.total.chinaTotal.dead}</div>
                        <div className={styles.textc}>至治愈人数</div>
                    </div>
                </div>
            </div>

            <div className={styles.icona}>
                <a href="https://news.qq.com/hdh5/fycalendar.htm" className={styles.yi}>
                    <span className={styles.jieshaoa}>战疫日历</span>
                </a>
                <a href="https://ncov.html5.qq.com/community?channelid=85" className={styles.er}>
                    <span className={styles.jieshaob}>小区查询</span>
                </a>
                <a href="https://rl.inews.qq.com/h5/trip?from=newsapp">
                    <span className={styles.jieshaoc}>同乘查询</span>
                </a>
            </div>
        </div>
    </>
}

export default Header