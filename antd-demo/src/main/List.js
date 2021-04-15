import React,{Component} from 'react'
import { connect } from 'react-redux';
import './index.less'
import { increate, increateAsync, fetch_user } from '../actions/counter';



class List extends Component{
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

export default connect(mapStateToProps, { increate, increateAsync, fetch_user })(List);