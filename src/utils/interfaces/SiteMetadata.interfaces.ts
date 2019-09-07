export type MetaData = {
  title: string;
  description: string;
};

export type MetaDataResponse = {
  site: {
    siteMetadata: MetaData;
  };
};

export type UseSiteMatadata = () => MetaData;
