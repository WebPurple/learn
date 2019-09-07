import nodePath from 'path';
import { CreatePages } from '../interfaces';
import { AllMarkdownRemarkData } from '../../src/commonInterfaces/markdownRemark';
import allMarkdownQuery from './utils/allMarkdownQuery';
import getNavRoots from './utils/getNavRoots';
import getNavRootPath from './utils/getNavRootPath';
import console = require('console');

const createPages: CreatePages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql<AllMarkdownRemarkData>(allMarkdownQuery);

  if (result.errors) {
    result.errors.forEach((e: { toString: () => string }) => console.error(e.toString()));

    return Promise.reject(result.errors);
  }

  if (!result.data) {
    return Promise.reject(`CreatePages: graphql's request is failed`);
  }

  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = result;

  edges.forEach(({ node: { id, fields: { slug: path }, frontmatter: { templateKey } } }) => {
    if (!path) {
      console.log(`node ${id} nas no slug. Page will not be creeted.`);

      return;
    }

    const navRoots = getNavRoots(edges);
    const navRootPath = getNavRootPath(navRoots, path);

    createPage({
      path,
      component: nodePath.resolve(`src/templates/${String(templateKey)}/component.tsx`),
      context: {
        id,
        navRootPath,
      },
    });
  });
};

export default createPages;
