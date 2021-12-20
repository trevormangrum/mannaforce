export interface BlogPost {
    sys?: {
        id?: string;
    }
    title: string;
    author: string;
    date: Date;
    text: string;
}