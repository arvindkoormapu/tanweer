import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  return (
    <Layout>
      <Content>
        <Title>Welcome to the Home Page</Title>
        {/* Add your home page content here */}
      </Content>
    </Layout>
  );
};

export default Home;
