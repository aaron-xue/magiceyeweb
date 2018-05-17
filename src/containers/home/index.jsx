import React, { Component } from 'react';
import './index.css';
import $ from 'jquery'
import { Router, Route, Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <div id='mainNav'>
          <i id='main_logo'></i>
          <ul id='main_links'>
            <li className='active link_item'><a href="javascript:;">首页</a></li>
            <li className='link_item'><a href="javascript:;">简介</a></li>
            <li className='link_item'><a href="javascript:;">特点</a></li>
            <li className='link_item'><a href="javascript:;">技术</a></li>
            <li className='link_item'><a href="javascript:;">ROADMAP</a></li>
            <li><a href="javascript:;">白皮书</a></li>
          </ul>
        </div>
        <div className='tab_panel' id='tab_panel1'>
          <i />
          <p>基于物联网和区块链的3D数据生态系统</p>
        </div>
        <div className='tab_panel_wrap'>
          <div className='tab_panel' id='tab_panel2'>
            <h2>简介</h2>
            <i></i>
            <div></div>
            <p>Magic Eye是一个基于物联网和区块链技术的3D数据生态系统。通过物联网化的3D智能硬件集群和搭建<br />基于区块链底层架构的数据分享平台，构建一个集3D数据生成、分享和消费的生态体系。</p>
          </div>
          <div className='tab_panel' id='tab_panel3'>
            <h2>特点</h2>
            <i></i>
            <div className='tab_panel3_item1'>
              <div className='left1'>物联网与区块链紧密结合，智能3D终端将通过完整的物联网解决方案接入Magic Eye生态系统。</div>
              <div className='right1'></div>
            </div>
            <div className='tab_panel3_item2'>
              <div className='left2'></div>
              <div className='right2'>借助Magic Eye底层公链和分布式存储，生态系统参与者可以汇集各类3D影视、3D游戏、3DUGC等泛娱乐内容和3D模组等数据文件到区块链综合数据平台，且数据版权将得到保护。</div>
            </div>
            <div className='tab_panel3_item3'>
              <div className='left3'>建立内容分发过程的价值传播机制，形成用户积极参与内容分享与传播的良好生态环境。</div>
              <div className='right3'></div>
            </div>
          </div>
          <div className='tab_panel' id='tab_panel4'>
            <h2>技术</h2>
            <i></i>
            <div className='tab_panel4_item'>
              <div className='tab_panel4_item1 tab_panel4_itemA'>
                <i></i>
                <h3>Tendermint 共识</h3>
                <div>通过基于拜占庭容错的Tendermint(POS)形成共识。</div>
              </div>
              <div className='tab_panel4_item2 tab_panel4_itemA'>
                <i></i>
                <h3>分布式存储</h3>
                <div>通过基于区块链的去中心化存储网络，实现安全可靠的分布式文件共享。</div>
              </div>
              <div className='tab_panel4_item3 tab_panel4_itemA'>
                <i></i>
                <h3>智能合约</h3>
                <div>通过智能合约，保护3D内容创作者收益，去除平台中间环节，最大化创作者收益。</div>
              </div>
            </div>
          </div>
          <div className='tab_panel' id='tab_panel5'>
            <h2>ROADMAP</h2>
            <i></i>
            <div className='tab_panel5_item'>
            </div>
          </div>
        </div>
        <div id='main_footer'>
          <i id='main_logo_footer'></i>
          <ul>
            <li>
              <a href="javascript:;" className='icon-telegram'></a>
            </li>
            <li>
              <a href="javascript:;" className='icon-medium'></a>
            </li>
            <li>
              <a href="javascript:;" className='icon-uniE901'></a>
            </li>
            <li>
              <a href="javascript:;" className='icon-weixin'></a>
            </li>

          </ul>
          <small>2018 © Magic Eye. All rights reserved.</small>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let tab_panels = $('.tab_panel')
    let link_items = $('.link_item')
    window.addEventListener('scroll', () => {
      let scrollTop = $(document).scrollTop();
      tab_panels.each(function (index, element) {
        let contentItem = $(this);
        let offsetTop = contentItem.offset().top;
        if (scrollTop > offsetTop - 250) {
          $("#main_links").find(".active").removeClass("active");
          $(link_items[index]).addClass('active');
        }
      });

    })
    link_items.click(function () {
      let index = link_items.index(this);
      $('body,html').animate({ scrollTop: $('.tab_panel:eq(' + index + ')').offset().top - 200 }, 200);
  });
  }
}

export default Home;