import React from 'react';
import item from './assets/item.jpg'
import './assets/eassy.css'
require('./assets/font');
export default class Eassy extends React.Component {
    state = {
        img: item,
    }
    render() {
        return (
            <div className="eassy-whole">
                <div className="eassy-left">
                    <div className="eassy-title">
                        推荐7个高质量音乐App,送给爱音乐的你!QQ音乐免费送！
                    </div>
                    <div className="eassy-body">
                        说它有逼格是没有什么网文穿越文耽美文，而且画面很清爽，内容主要是经典书籍，名给爱音乐的你!QQ音乐免费送！只需要0元即可领取半年人作品，还有近几年一些不错的畅销书，我就是在【藏书馆】看完东野圭吾所有的书，还顺便把自己本专业，但是还蛮轻松的经济学书《错误的行为》看完。
                    </div>
                    <div className="eassy-property">
                    <div className="property-left">
                        <p>小本前端鼻祖</p>
                        <p style={{paddingLeft:'15px'}}>2018-09-13 23:42:12</p>
                    </div>
                        <div className="property-right">
                        <div className="property-item">
                            <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-liulan"></use>
                        </svg>
                        <p>235231</p>
                        </div>
                        <div className="property-item">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-tubiaozhizuo-"></use>
                        </svg>
                        <p>224</p>
                        </div>
                        <div className="property-item">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-aixin"></use>
                        </svg>
                        <p>1245</p>
                        </div>
                        </div>
                    </div>

                </div>
                <div className="eassy-right">
                    <img src={this.state.img} width="160px" />
                </div>
            </div>
        )
    }
}
