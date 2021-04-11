export interface Image {
    id?: string | number;
    width?: string | number;
    height?: string | number;
    author?: string;
    url?: string;
    download_url?: string;
}

export interface Page {
    page: number;
    limit: number;
}