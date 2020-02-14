import Head from "next/head";
import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Antd = props => (
  <div style={{ height: "100%" }}>
    <Head>
      <title>Google News</title>
      <link
        rel="icon"
        href="https://cdn0.iconfinder.com/data/icons/ringtone-music-instruments/512/letter-n-latin-key-512.png"
      />
    </Head>
    <Layout>
      <Header className="header" style={{ padding: "0px", display: "flex" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px", width: "100%", display: "flex" }}
        >
          <Menu.Item
            style={{ fontWeight: "bold", fontSize: " xx-large", width: "100%" }}
            key="1"
          >
            Google News
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider className="sider" width={243}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              key="1"
              onClick={() => props.newUrl("v2/top-headlines?country=in")}
            >
              Top Headlines India
            </Menu.Item>
            <Menu.Item
              onClick={() =>
                props.newUrl("v2/top-headlines?country=us&category=business")
              }
              key="2"
            >
              Top headlines US
            </Menu.Item>

            <Menu.Item
              key="3"
              onClick={() =>
                props.newUrl(
                  "v2/everything?q=bitcoin&from=2020-01-14&sortBy=publishedAt"
                )
              }
            >
              All articles about Bitcoin
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() =>
                props.newUrl(
                  "v2/top-headlines?sources=bbc-news"
                )
              }
            >
              Top headlines from BBC News
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="content-layout">
          <Content
            className="mainContent"
            style={{
              margin: "0 auto"
              // maxWidth: "50%"
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
);

export default Antd;
