export interface ArticleConfig {
    edition: number;
    introHeader: string;
    introDetails: string;
    sections: SectionConfig[];
}

export interface SectionConfig {
    heading: string;
    subsections: SubsectionConfig[];
}

export interface SubsectionConfig {
    heading: string;
    subsectionElements: (Image | PShapeWrapper| OrderedList | ExternalArticles | string)[]
}

export interface OrderedList {
    items: ListItem[]
}

export interface ListItem {
    orderNumber: number;
    summary: string;
    details: string;
}

export interface Image {
    src: string;
    alt: string;
}

export interface PShapeWrapper {
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

// They did this in story RAMP but I'm not sure why. Ask aleks
// export enum SubsectionElementKind {
//     Image = 'ImageGraphic',
//     PShapeWrapper = 'PShapeWrapper',
//     ArticleRecommendations = 'ArticleRecommendations',
//     List = 'OrderedList'
// }

