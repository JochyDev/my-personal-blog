export interface Section {
    name:          string;
    status:        boolean;
    markdown:      string;
    order:         number;
    path:          string;
    sanitizedHtml: string;
    createdAt:     Date;
    updatedAt:     Date;
    id:            string;
}
