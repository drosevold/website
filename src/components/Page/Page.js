import Logo from '../../components/Logo'
import './Page.css'
import React from 'react'
import { string } from 'prop-types'

const Page = ({ content }) => (
  <article className="Page">
    <header className="Page-Header">
      <Logo className="Page-Logo"/>
    </header>
    <main
      className="Page-Content md"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </article>
)

Page.propTypes = {
  content: string
}

export default Page