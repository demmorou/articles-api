import Author from '~modules/authors/domain/Author';

type ArticleDTO = {
  id?: string;
  category: string;
  title: string;
  summary: string;
  first_paragraph: string;
  body: string;
  author_id?: string;
  author?: Author;
};

export default ArticleDTO;
