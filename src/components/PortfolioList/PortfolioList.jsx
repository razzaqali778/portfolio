import React from 'react'
import "./portfolioList.scss"
const PortfolioList = ({tiltle, setSelected, active, id}) => {
  return (
    <li className={active ? "portfolioList active" :"portfolioList "}
    onClick={()=>{setSelected(id)}}
    >
        {tiltle}
    </li>
  )
}

export default PortfolioList