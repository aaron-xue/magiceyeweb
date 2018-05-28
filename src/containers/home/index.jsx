import React, { Component } from 'react';
import './index.css';
import $ from 'jquery'
import { Router, Route, Link } from 'react-router'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNav:false
    }
  }
  render() {
    return (
      <div>
        <div id='mainNav'>
          <i id='main_logo'></i>
          <ul className='main_links'>
            <li className='active link_item'><a href="javascript:;">首页</a></li>
            <li className='link_item'><a href="javascript:;">简介</a></li>
            <li className='link_item'><a href="javascript:;">特点</a></li>
            <li className='link_item'><a href="javascript:;">技术</a></li>
            <li className='link_item'><a href="javascript:;">ROADMAP</a></li>
            <li><a href="whiteBook2.5.pdf" target="_Blank">白皮书</a></li>
          </ul>
          <i id='nav_button'></i>
        </div>
        <div className='tab_panel' id='tab_panel1'>
          <i />
          <p>基于物联网和区块链的3D数据生态系统</p>
        </div>
        <div className='tab_panel_wrap'>
          <div className='tab_panel' id='tab_panel2'>
            <h2>简介</h2>
            <i></i>
            <div className='tab_panel2_items'>
              <div className='tab_panel2_items_title'>DAPP</div>
              <div className='tab_panel2_items_c'>
                <h3>数据平台</h3>
                <a href="javascript:;">SDKs</a>
                <a href="javascript:;">Plugins</a>
              </div>
              <div className='tab_panel2_items_title'>智能合约</div>
              <div className='tab_panel2_items_c'>
                <h3>Magic Eye Blockchain</h3>
                <a href="javascript:;">IPFS分布式储存</a>
                <a href="javascript:;">超级账本</a>
              </div>
            </div>
            <p>Magic Eye 通过搭建底层公链环境和简单易用的开发环境，构建一个可无限扩展的3D综合数据平台。</p>
            <p>系统自身平台可以支持丰富的泛娱乐化的3D内容和版权规范化的3D数据，同时也支持第三方团队或个人在生态系统中建立Dapp来不断丰富整个生态。</p>
          </div>
          <div className='tab_panel' id='tab_panel3'>
            <h2>特点</h2>
            <i></i>
            <div className='tab_panel3_item1'>
              <div className='right1'>
                <p>泛娱乐化的3D内容平台</p>
              </div>
              <div className='left1'>Magic Eye生态系统提供泛娱乐化的内容平台，社区成员可以贡献3D图片、3D影视等3D内容，任何第三方团体及个人可以利用开发工具包和智能合约来开发自己的Dapp，从而不断丰富和扩展整个系统。
</div>
            </div>
            <div className='tab_panel3_item2'>
              <div className='left2'>
                <p>3D数据版权价值创造平台</p>
              </div>
              <div className='right2'>Magic Eye生态系统为广大3D数据创造者提供一个版权保护和价值创造的平台，为形成规范化的版权交易搭建桥梁。</div>
            </div>
            <div className='tab_panel3_item3'>
              <div className='right3'>
                <p>Magic Eye 用户角色</p>
              </div>
              <div className='left3'>基于数据在生态中的各个环节，Magic Eye生态系统参与者也拥有不同的角色，并通过token激励机制形成积极参与分享内容和数据的良性运转，构建良好的价值传播机制。</div>
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
              <div className='tab_panel5_item1'>
                <div className='tab_panel5_item_c'>Magic Eye <br />生态系统理念确定</div>
                <div className='tab_panel5_item_c'>完成公链搭建基础工作，<br />搭建分布式内容平台框架</div>
                <div className='tab_panel5_item_c'>公链主网发布，<br />数字钱包开发测试</div>
                <div className='tab_panel5_item_c'>分布式数据平台 <br />正式版发布</div>
              </div>
              <div className='tab_panel5_item2'>
                <div className='tab_panel5_item_c'>Magic Eye <br />生态之旅开启</div>
                <div className='tab_panel5_item_c'>白皮书、官网发布，公链<br />基础环境搭建</div>
                <div className='tab_panel5_item_c'>公链测试网络发布</div>
                <div className='tab_panel5_item_c'>推出Dapp，<br />分布式数据平台测试版本</div>
              </div>
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
    let nav_button = $('#nav_button')
    let main_links = $('.main_links')
    window.addEventListener('scroll', () => {
      let scrollTop = $(document).scrollTop();
      tab_panels.each(function (index, element) {
        let contentItem = $(this);
        let offsetTop = contentItem.offset().top;
        if (scrollTop > offsetTop - 200) {
          $(".main_links").find(".active").removeClass("active");
          $(link_items[index]).addClass('active');
        }
      });

    })
    link_items.click(function () {
      let index = link_items.index(this);
      $('body,html').animate({ scrollTop: $('.tab_panel:eq(' + index + ')').offset().top - 50 }, 200);
    });
    nav_button.click( ()=> {
      this.setState({
        showNav:!this.state.showNav
      })
      if (this.state.showNav) {
        main_links.addClass('showNav');
      }else{
        main_links.removeClass('showNav');
      }
    })
  }
}

export default Home;
