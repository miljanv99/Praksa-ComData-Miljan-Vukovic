export interface PaginationModel {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: {
        previous: string;
        current: string;
        next: string
    };
}