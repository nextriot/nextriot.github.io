import React from 'react'
import { Sidebar as SiteSidebar, Wrapper } from './styles/sidebar.style'

const image = require('../images/gatsby-astronaut.png')

const Sidebar = () => {
  return (
    <SiteSidebar className="article-sidebar">
      <Wrapper>
        <h2>More Stories</h2>
        <ul>
          <li>
            <figure>
              <a href="">
                <img src={image} alt="" />
              </a>
            </figure>
            <div>
              <h3>
                <a href="">What You Need to Know About the Coronavirus</a>
              </h3>
              <b>1 min read</b>
            </div>
          </li>
          <li>
            <figure>
              <a href="">
                <img src={image} alt="" />
              </a>
            </figure>
            <div>
              <h3>
                <a href="">What You Need to Know About the Coronavirus</a>
              </h3>
              <b>1 min read</b>
            </div>
          </li>
          <li>
            <figure>
              <a href="">
                <img src={image} alt="" />
              </a>
            </figure>
            <div>
              <h3>
                <a href="">What You Need to Know About the Coronavirus</a>
              </h3>
              <b>1 min read</b>
            </div>
          </li>
        </ul>
      </Wrapper>
    </SiteSidebar>
  )
}

export default Sidebar
