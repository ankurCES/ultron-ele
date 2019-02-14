import React from 'react'
import { Link } from 'gatsby'
import github from '../images/github56.png'
import twitter from '../images/twitter56.png'

const Footer = () => (
  <footer
    style={{
      margin: `4em auto 0em auto`,
      textAlign: `center`
    }}>
    <div>
      © {new Date().getFullYear()}, Present by{` `}
      <a href="http://runbytech.co" target="_blank">Runbytech</a>
      <span style={{marginLeft: `40px`, color: `#888`}}>
        Logo made with 
        <a style={{marginLeft: `4px`}}
          href="https://www.designevo.com/en/" 
          title="Free Online Logo Maker"
          target="_blank"
          >DesignEvo</a>
      </span>
    </div>

    <div style={{ marginTop: `25px`,}}>
      <Link to="/" style={{margin:`10px`}}>
        <img src={github} style={{width:`32px`, height:`32px`}} alt="github" />
      </Link>
      <Link to="/" style={{margin:`10px`}}>
        <img src={twitter} style={{width:`32px`, height:`32px`}} alt="twitter" />
      </Link>
    </div>
  </footer>
)

export default Footer