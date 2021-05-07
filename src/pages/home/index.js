import React, { PureComponent } from "react";
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style.js'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store'
import {connect} from 'react-redux'
class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  render() {
    const {showScroll} = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
        <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic></Topic>
        <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }
  componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {  
    dispatch(actionCreators.getHomeInfo())
  },
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
})
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
export default connect(mapState, mapDispatch)(Home);
