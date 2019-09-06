export type CommonPageQueryResult = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    order?: number;
  };
};

export interface Article extends CommonPageQueryResult {
  html: string;
}

export interface ArticleHTMLAST extends CommonPageQueryResult {
  htmlAst: {};
}

export interface PageContext {
  navRootPath: string;
  isNavDeep: boolean;
}

export interface MarkdownPageProps<Article> extends Partial<{ pageContext: PageContext }> {
  data: {
    markdownRemark: Article;
  };
}
