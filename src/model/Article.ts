export interface Article {
    cover: string;
    title: string;
    description: string;
    createTime: string;
    tags: string[];
    id: number;
    content: () => Promise<typeof import('*?raw')>;
    recommend?: boolean;
}
