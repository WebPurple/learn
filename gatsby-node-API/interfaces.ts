import { CreatePagesArgs, PluginOptions, PluginCallback, CreateNodeArgs } from 'gatsby';
import { MarkdownEdge } from '../src/commonInterfaces/markdownRemark';

export type CreatePages = (
  args: CreatePagesArgs & { traceId: 'initial-createPages' },
  options?: PluginOptions,
  callback?: PluginCallback,
) => void;

export type OnCreateNode = (args: CreateNodeArgs, options?: PluginOptions, callback?: PluginCallback) => void;
export type GetNavRoots = (edges: MarkdownEdge[]) => MarkdownEdge[];
export type GetNavRootPath = (navRoots: MarkdownEdge[], path: string) => string;
