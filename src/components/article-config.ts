export interface EditionConfig {
    edition: number;
    publichDate: Date;
    sections: ArticleConfig[];
}

export interface ArticleConfig {
    heading: string;
    subsections: SectionConfig[];
}

export interface SectionConfig {
    heading?: string;
    subsectionElements: (Image | PShapeWrapper| OrderedList | ExternalArticles | string)[]
}

export interface OrderedList {
    items: ListItem[]
}

export interface ListItem {
    variant: "light"|"dark";
    summary: string;
    details: (Image | PShapeWrapper| OrderedList | ExternalArticles | string)[];
}

export interface Image {
    src: string;
    alt: string;
}

export interface PShapeWrapper {
    title: string;
    wrapperContent: (Image|string)[]
}

export interface ExternalArticles {
    recommendationList: ExternalArticle[]
}

export interface ExternalArticle {
    title: string;
    author?: string;
    source: string;
    description?: string;
}


