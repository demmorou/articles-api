import ArticleDTO from '../../domain/ArticleDTO';

export type ListArticlesInput = {
  category?: string;
  loggedUser?: boolean;
};

export type ListArticlesOutput = Partial<ArticleDTO>[];
