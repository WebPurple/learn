import { graphql, useStaticQuery } from 'gatsby';
import { MetaDataResponse, UseSiteMatadata } from './interfaces/SiteMetadata.interfaces';

const useSiteMatadata: UseSiteMatadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<MetaDataResponse>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );
  return siteMetadata;
};

export default useSiteMatadata;
