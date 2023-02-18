import React, { useState } from "react"
import PortfolioList from "../PortfolioList/PortfolioList"
import "./portfolio.scss"

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data"
import { useEffect } from "react"

const Portfolio = () => {
  const [selected, setSelected] = useState("featured")

  const [datas, setDatas] = useState("")
  const list = [
    { id: "featured", tiltle: "Featured" },
    { id: "web", tiltle: "Web App" },
    { id: "mobile", tiltle: "Mobile" },
    { id: "design", tiltle: "Design" },
    { id: "content", tiltle: "Content" },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setDatas(featuredPortfolio)
        break
      case "web":
        setDatas(webPortfolio)
        break
      case "mobile":
        setDatas(mobilePortfolio)
        break
      case "design":
        setDatas(designPortfolio)
        break
      case "content":
        setDatas(contentPortfolio)
        break
      default:
        setDatas(featuredPortfolio)
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            tiltle={item.tiltle}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      {/* <div className="container">
        {datas.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.tiltle}</h3>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Portfolio
