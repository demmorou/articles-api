import ArticleDTO from '~modules/articles/domain/ArticleDTO';

export type ShowArticleInput = {
  loggedUser?: boolean;
  id: string;
};

export type ShowArticleOutput = Partial<ArticleDTO>;
