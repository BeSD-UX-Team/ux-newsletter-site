export interface EditionConfig {
    edition: number;
    publishDate: Date;
    sections: ArticleConfig[];
}

export interface ArticleConfig {
    heading: string;
    subsections: SectionConfig[];
}

export interface SectionConfig {
    heading?: string;
    subsectionElements: (Image | PShapeWrapper| OrderedList | ExternalArticlesGroup | string | ThreeColumns | TwoColumns)[]
}

export enum ElementKind{
    Image = 'Image',
    OrderedList = 'OrderedList',
    PShapeWrapper = 'PShapeWrapper',
    ExternalArticlesGroup = 'ExternalArticlesGroup',
    ThreeColumns = 'ThreeColumns',
    TwoColumns = 'TwoColumns'
}

export interface Image {
    type: ElementKind.Image;
    src: string;
    alt: string;
}

export interface OrderedList {
    type: ElementKind.OrderedList;
    items: ListItem[]
}

export interface ListItem {
    variant: "light"|"dark";
    summary: string;
    details: (Image | PShapeWrapper| OrderedList | ExternalArticlesGroup | string| ThreeColumns | TwoColumns)[];
}

export interface PShapeWrapper {
    type: ElementKind.PShapeWrapper;
    title: string;
    wrapperContent: (Image|string)[]
}

export interface ExternalArticlesGroup {
    type: ElementKind.ExternalArticlesGroup;
    recommendationList: ExternalArticle[]
}

export interface ExternalArticle {
    title: string;
    author?: string;
    source: string;
    description?: string;
}

export interface ThreeColumns {
    type: ElementKind.ThreeColumns;
    columns: (Image | PShapeWrapper| OrderedList | ExternalArticlesGroup | string)[]
}

export interface TwoColumns {
    type: ElementKind.TwoColumns;
    columns: (Image | PShapeWrapper| OrderedList | ExternalArticlesGroup | string)[]
}

// This is even more complicated than coding it out... Ask how to simplify this
const edition1: EditionConfig = {
    edition: 1,
    publishDate: new Date('2021-09-01Z'),
    sections: [
        {
            heading: "Intro to UX and our team",
            subsections: [
                {
                    heading: "What is UX?",
                    subsectionElements: [
                        {
                            type: ElementKind.TwoColumns,
                            columns: [
                                {
                                    type: ElementKind.PShapeWrapper,
                                    title: "UX is",
                                    wrapperContent: [
                                        `studying **interactions** between users and products`,
                                        `**understanding** user needs, values, and limitations`,
                                        `**removing friction** between user and goals`
                                    ]
                                },
                                {
                                    type: ElementKind.PShapeWrapper,
                                    title: "UX is NOT",
                                    wrapperContent: [
                                        `just user interface`,
                                        `just graphic design`,
                                        `just web development`
                                    ]
                                }
                                // to be continued
                            ]
                        }
                    ]

                }

            ]

        }
    ]
}

