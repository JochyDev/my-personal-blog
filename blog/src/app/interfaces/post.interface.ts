export interface Post {
    id: string;
    status: boolean;
    title: string;
    subtitle?: string;
    markdown: string;
    sanitizedHtml: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}
