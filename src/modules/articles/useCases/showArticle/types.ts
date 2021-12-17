import ArticleDTO from '~modules/articles/domain/ArticleDTO';

export type ShowArticleInput = {
  isAdmin?: boolean;
  id: string;
};

export type ShowArticleOutput = Partial<ArticleDTO>;
