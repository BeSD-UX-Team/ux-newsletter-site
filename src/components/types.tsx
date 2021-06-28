type ArticleMeta = {
    title: string;
    slug: string;
    editionNum: number;
};

type Edition = {
    editionNum: number;
    datePublished: string;
    articles: ArticleMeta[];
};

export type { ArticleMeta, Edition };
