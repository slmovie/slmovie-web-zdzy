const types = [
    { list_id: 1, list_name: '电影片' },
    { list_id: 2, list_name: '连续剧' },
    { list_id: 3, list_name: '综艺片' },
    { list_id: 4, list_name: '动漫片' },
    { list_id: 5, list_name: '动作片' },
    { list_id: 6, list_name: '喜剧片' },
    { list_id: 7, list_name: '爱情片' },
    { list_id: 8, list_name: '科幻片' },
    { list_id: 9, list_name: '恐怖片' },
    { list_id: 10, list_name: '剧情片' },
    { list_id: 11, list_name: '战争片' },
    { list_id: 12, list_name: '国产剧' },
    { list_id: 13, list_name: '香港剧' },
    { list_id: 14, list_name: '韩国剧' },
    { list_id: 15, list_name: '欧美剧' },
    { list_id: 16, list_name: '福利片' },
    { list_id: 17, list_name: '伦理片' },
    { list_id: 18, list_name: '音乐片' },
    { list_id: 19, list_name: '台湾剧' },
    { list_id: 20, list_name: '日本剧' },
    { list_id: 21, list_name: '海外剧' },
    { list_id: 22, list_name: '记录片' }
]

export const getMovieType = (type: number): string | undefined => {
    return types.find((list) => list.list_id === type)?.list_name
}