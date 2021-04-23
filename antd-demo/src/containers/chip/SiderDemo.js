import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {connect} from 'react-redux'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

import SagaTest from './saga-test'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onTitleClick = () => {}

  render() {
    const { collapsed } = this.state;
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" >
                列表 1
              </Menu.Item>
              <SubMenu key="sub1"  title="列表 2" onTitleClick={this.onTitleClick}>
                <Menu.Item key="3">table</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" >
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <SagaTest></SagaTest>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>footer</Footer>
          </Layout>
        </Layout>
    );
  }
}

function mapStateToProps(state){
  return {
  }
}
export default connect(mapStateToProps)(SiderDemo)