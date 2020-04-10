export interface IMovieDetail {
    name: string,
    post: string,
    describe: string,
    year: string,
    location: string,
    type: string,
    actor: string,
    director: string,
    status: string,
    downloadUrls: IMovieFile[],
    webUrls: IMovieFile[],
    m3u8Urls: IMovieFile[],
    id: string,
    addTime: string
}

export interface IMovieFile {
    name: string,
    url: string
}