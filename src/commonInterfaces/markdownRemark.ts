export type Fields = {
  slug: string;
};

export type Frontmatter = Partial<{
  templateKey: string;
  isNavRoot: boolean;
  order: number;
  tags: string;
  title: string;
}>;

export type MarkdownNode = {
  id: string;
  fields: Fields;
  frontmatter: Frontmatter;
  excerpt: string;
};

export type MarkdownEdge = {
  node: MarkdownNode;
};

export type AllMarkdownRemarkData = {
  allMarkdownRemark: {
    edges: MarkdownEdge[];
  };
};
