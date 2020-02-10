import React from 'react'
import styles from './Tip.module.scss'

const Tip = () => {

    return <>
        <h3 className={styles.titlte}>新型肺炎预防须知</h3>
        <div className={styles.concentbox}>
            <div className={styles.onw}>
                <img className={styles.imgIcon} src="https://puui.qpic.cn/vupload/0/1580113954413_67dj6qw9r34.png/0" />
                <p className={styles.imgshuo}>个人清洁</p>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>经常保持双手清洁，尤其在触摸口、鼻或眼之前。</div>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>经用洗手液和清水清洗双手，搓手最少20秒，并用纸巾擦干。</div>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>打喷嚏或咳嗽时应用纸巾掩盖口鼻，把用过的纸巾弃置于有盖垃圾箱内，然后彻底清洁双手。</div>
            </div>

            <div className={styles.onw}>
                <img className={styles.imgIcon} src="https://puui.qpic.cn/vupload/0/1580113954413_b3dr1w759hr.png/0"/>
                <p className={styles.imgshuo}>尽量避免</p>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>减少前往人流密集的场所。如不可避免，应戴上外科口罩。</div>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>避免到访医院。如有必要到访医院，应佩戴外科口罩及时刻注重个人和手部卫生。</div>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>避免接触动物（包括野味）、禽鸟或其粪便；避免到海鲜、活禽市场或农场。</div>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>切勿进食野味及切勿光顾有提供野味的餐馆。</div>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>注意食物安全和卫生，避免进食或饮用生或未熟透的动物产品，包括奶类、蛋类和肉类。</div>
            </div>

            <div className={styles.onw}>
                <img className={styles.imgIcon} src="https://puui.qpic.cn/vupload/0/1580113954413_qs8jz3v8m7.png/0"/>
                <p className={styles.imgshuo}>尽快就诊</p>
            </div>
            <div className={styles.dian}>
                <div></div>
                <div>如有身体不适，特别是有发烧或咳嗽，应戴上外科口罩并尽快就诊。</div>
            </div>
        </div>

        <div className={styles.teil}>
            <div className={styles.tail}>
                <div className={styles.open}>
                    <span>了解疫情动态，请前往</span>
                    <img src="https://mat1.gtimg.com/news/zhishiguan/page/logo-white.png" className={styles.logo}/>
                    <img src="https://mat1.gtimg.com/news/zhishiguan/page/buttom_sharp.png" className={styles.sharp}/>>
                </div>
            </div>
      </div>
    </>
}

export default Tip