type ArticleMeta = {
    title: string;
    slug: string;
    editionNum: number;
};

type Edition = {
    num: number;
    date: string;
    articles: ArticleMeta[];
};

export type { ArticleMeta, Edition };
