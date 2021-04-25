import React,{Component} from 'react'
import { connect } from 'react-redux';
import { increate, increateAsync, fetch_user } from '../../actions/counter';
import {bindActionCreators} from 'redux';
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class SagaTest extends Component{
  render(){
    const { isFetch, error, user } = this.props.users;
    let data = "";
    if (isFetch) {
      data = '正在加载中。。。'
    } else if (user) {
      data = user.data[0]['name'];
    } else if (error) {
      data = error.message;
    }
    return (
        <div className={'com-list'}>
          {/* 触发dispatch，发送对应的action */}
          <div style={{ marginBottom: 20 }}>
            <p>{this.props.counter}</p>
            <button onClick={() => this.props.increate()}>新增</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => this.props.increateAsync()}>异步新增</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => this.props.fetch_user()}>axios请求</button>
          </div>
          <h2>{data}</h2>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter, // state 对应的 key, 在 reducers/index.js 中声明。
    users: state.us
  }
}

// 一 基础方式
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increate: (...args) => dispatch(increate(...args)),
//     increateAsync: (...args) => dispatch(increateAsync(...args)),
//     fetch_user: (...args) => dispatch(fetch_user(...args)),
//   }
// }

// 二 bindActionCreators包装dispatch方式
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({
//     increate: increate,
//     increateAsync: increateAsync,
//     fetch_user: fetch_user,
//   }, dispatch);
// }

// 三 connect 中 执行 bindActionCreators

export default connect(mapStateToProps, {increate, increateAsync, fetch_user})(SagaTest);