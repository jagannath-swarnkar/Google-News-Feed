import React, { useState, useEffect } from "react";
import Antd from "../Components/Antd";
import fetch from "isomorphic-unfetch";
require("dotenv").config();
import { Card, Avatar, Menu, Icon } from "antd";
const { SubMenu } = Menu;

const handleScroll = e => {
  const bottom =
    e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  if (bottom) {
    console.log("hello jagan....");
  }
};

const index = apiData => {
  const [pagesize, setPagesize] = useState(10);
  const [mainData, setMainData] = useState(apiData);

  async function scroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      if (pagesize <= apiData.totalResults) {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?pageSize=${pagesize +
            10}&country=in&apiKey=fb24325819be4747b1fe2e70ee40b57b`
        );

        const data = await res.json();
        setMainData({ apiData: data.articles });
        setPagesize(pagesize + 10);
      }
    }
  }

  return (
    <div style={{ height: "100%" }} onScroll={scroll}>
      <Antd style={{ height: "100%" }}>
        {mainData.apiData.map((e, i) => {
          return (
            <div key={i} className="index-main-div">
              <Card className="index-card">
                <a href={e.url} alt={"img"}>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "100%" }}>
                      <h3>
                        <b>{e.title}</b>
                      </h3>
                      <div style={{ color: "grey", marginTop: "-8px" }}>
                        {e.source ? e.source.name : "google-news"} .{" "}
                        {e.publishedAt.slice(0, 10)}
                      </div>
                      <div
                        id="description"
                        className="description"
                        style={{
                          color: "#464646",
                          marginTop: "18px",
                          marginLeft: "18px",
                          fontWeight: "bold"
                        }}
                      >
                        {e.description}
                      </div>
                    </div>
                    <div
                      style={{
                        justifyContent: "flex-end",
                        width: "100px",
                        marginLeft: "5px"
                      }}
                    >
                      <Avatar
                        shape="square"
                        src={e.urlToImage}
                        size={100}
                        icon="user"
                      />
                    </div>
                  </div>
                </a>
              </Card>
            </div>
          );
        })}
      </Antd>
    </div>
  );
};

index.getInitialProps = async ({ req }) => {
  // console.log(pagesize)
  // e.preventDefault();
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?pageSize=10&country=in&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const apiData = await res.json();
  console.log({ data: apiData.totalResults });
  return { apiData: apiData.articles, totalResults: apiData.totalResults };
};

export default index;

/*
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`
`https://newsapi.org/v1/articles?source=google-news&apiKey=${process.env.REACT_APP_API_KEY}`


*/
