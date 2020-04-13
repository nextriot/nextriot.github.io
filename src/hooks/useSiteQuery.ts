import { graphql, useStaticQuery } from 'gatsby'
import { SiteQueryData } from '@/interfaces/SiteQuery.interface'

export const useSiteQuery = () => {
  const { site }: SiteQueryData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return site.siteMetadata
}
