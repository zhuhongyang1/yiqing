import React, { useState, useEffect } from 'react'
import { getProvinceNews } from '../services/index'
import { AreaType } from '../utils/types'
import styles from './News.module.scss'

interface ProvinceType {
    [key: string]: string
}
interface ItemType {
    "title": string,
    "publish_time": string,
    "news_url": string,
    "cms_id": string
}
const ProvinceList: ProvinceType = {
    "hb": "湖北",
    "zj": "浙江",
    "gd": "广东",
    "henan": "河南",
    "hn": "湖南",
    "ah": "安徽",
    "jiangxi": "江西",
    "cq": "重庆",
    "jiangsu": "江苏",
    "cd": "四川",
    "sd": "山东",
    "bj": "北京",
    "sh": "上海",
    "fj": "福建",
    "heilongjiang": "黑龙江",
    "xian": "陕西",
    "guangxi": "广西",
    "hebei": "河北",
    "yn": "云南",
    "hainan": "海南",
    "ln": "辽宁",
    "shanxi": "山西",
    "tj": "天津",
    "guizhou": "贵州",
    "gansu": "甘肃",
    "jilin": "吉林",
    "neimenggu": "内蒙古",
    "ningxia": "宁夏",
    "xinjiang": "新疆",
    "hk": "香港",
    "qinghai": "青海",
    "taiwan": "台湾",
    "macau": "澳门",
    "xizang": "西藏"
}

const News = (props: { areaTree: AreaType[] }) => {
    let [province, setProvince] = useState<string>('hb');
    let [items, setItems] = useState<ItemType[]>([])

    let changeArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProvince(e.target.value);
        getNews();
    }

    useEffect(() => {
        getNews();
    }, [])

    const getNews = () => {
        getProvinceNews(province).then((res: any) => {
            res = res.data;
            if (res.errno === 0) {
                setItems(res.data.items);
            }
        })
    }
    console.log('news...', items, props.areaTree);

    let curIndex = props.areaTree.findIndex(item => item.name === ProvinceList[province]);
    let curPro = props.areaTree[curIndex];

    // 拼接各省份选项
    const provinceHtml = [];
    for (let key in ProvinceList) {
        provinceHtml.push(<option value={key}>{ProvinceList[key]}</option>);
    }
    return <div className={styles.box}>
        <div className={styles.boxtitle}>
            <h3>
                <span className={styles.areaname}>{ProvinceList[province]}</span>
                疫情速报
            </h3>
            <div className={styles.cityname}>
                <select id="select-area" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeArea(e)}>
                    <option value="hb">切换城市</option>
                    {provinceHtml}
                </select>
            </div>
        </div>
        <div className={styles.concent}>
            <li>
                <h3 className={styles.numone}>{curPro && curPro.today.confirm}</h3>
                <p className={styles.fontsize}>新增确诊</p>
            </li>
            <li>
                <h3 className={styles.numtwo}>{curPro && curPro.total.confirm}</h3>
                <p className={styles.fontsize}>累计确诊</p>
            </li>
            <li>
                <h3 className={styles.numthree}>{curPro && curPro.total.heal}</h3>
                <p className={styles.fontsize}>治愈人数</p>
            </li>
            <li>
                <h3 className={styles.numfour}>{curPro && curPro.total.dead}</h3>
                <p className={styles.fontsize}>死亡人数</p>
            </li>
        </div>

        <div>{
            items.map((item,index)=>{
                return <div className={styles.namneIcon} key={index}>
                    <i></i>
                    <p>{item.title}</p>
                </div>
            })
        }</div>

        <div className={styles.bottomsize}>
            <p>分享{curPro && curPro.name}数据</p>
            <p>关注{curPro && curPro.name}疫情</p>
        </div>

    </div>
}

export default News