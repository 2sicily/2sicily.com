import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'prismic-reactjs'

const BannerSlice = ({ slice }) => (
    <section>
      <div>
        <h2 className="bg-pink-600 text-blue-600">{RichText.asText(slice.primary.title)}</h2>
        <div>
          <RichText render={slice.primary.description} />
        </div>
        <a href={Link.url(slice.primary.link)}>
          { slice.primary.linkLabel }
        </a>
      </div>
      
    </section>
)

export default BannerSlice
