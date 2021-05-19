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
        <Link href={linkResolver(slice.primary.link)}>
        <a>
        <RichText render={slice.primary.linkLabel} />
        </a>
      </Link>
      </div>
      
    </section>
)

export default BannerSlice
