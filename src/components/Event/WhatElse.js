import Link from 'gatsby-link'
import { object } from 'prop-types'
import React from 'react'

const WhatElse = (props, { socialMedia }) => (
  <section>
    <header>
      <h2>What else?</h2>
    </header>
    <p>
      Want to speak at a future meetup? We accept 15, 30, and 45-minute talks on
      a wide variety of topics.{' '}
      <Link to="/speaking">
        Let us know what you&apos;d like to talk about.
      </Link>
    </p>
    <p>
      Find us on{' '}
      <a href={`https://twitter.com/${socialMedia.twitter.username}`}>
        Twitter
      </a>, <a href={socialMedia.youTube.url}>YouTube</a>,{' '}
      <a href={socialMedia.slack.url}>Slack</a>, and help us{' '}
      <a
        href={`https://github.com/${socialMedia.github.username}/${socialMedia
          .github.username}.github.io/issues`}
      >
        plan future meetups
      </a>{' '}
      on{' '}
      <a href={`https://github.com/${socialMedia.github.username}`}>GitHub</a>
    </p>
  </section>
)

WhatElse.contextTypes = {
  socialMedia: object
}

export default WhatElse
