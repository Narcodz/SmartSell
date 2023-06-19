import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    AppstoreOutlined
  } from '@ant-design/icons';
  import SmartSellLogo from "../aseets/img/logo/smartsell.png";

  import { Button, Layout, Menu, theme, Image } from 'antd';
  import { useState } from 'react';
  const { Header, Sider, Content } = Layout;

  const LayoutNoSiteNavBar = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const getItem = (label, key, icon, children, type) => {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }

    const items = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Option 3', '3', <ContainerOutlined />),
        getItem('Navigation One', 'sub1', <MailOutlined />, [
          getItem('Option 5', '5'),
          getItem('Option 6', '6'),
          getItem('Option 7', '7'),
          getItem('Option 8', '8'),
        ]),
        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
          getItem('Option 9', '9'),
          getItem('Option 10', '10'),
          getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
      ];


    return (
      <Layout>
        <Layout>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '88vh',
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default LayoutNoSiteNavBar;