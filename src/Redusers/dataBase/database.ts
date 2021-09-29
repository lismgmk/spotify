import {nanoid} from "nanoid";

export const dataBase: Array<WidgetType> = [
        {
            id: nanoid(),
            title: 'Some track 1',
            artist: 'Some artist 1',
            album: 'Some album 1',
            date: '16 day ago',
            likes: 0,
            disLike: 0,
            sum: 0
        },
        {
            id: nanoid(),
            title: 'Some track 2',
            artist: 'Some artist 2',
            album: 'Some album 2',
            date: '16 day ago',
            likes: 0,
            disLike: 0,
            sum: 0
        },
        {
            id: nanoid(),
            title: 'Some track 3',
            artist: 'Some artist 3',
            album: 'Some album 3',
            date: '16 day ago',
            likes: 0,
            disLike: 0,
            sum: 0
        },
        {
            id: nanoid(),
            title: 'Some track 4',
            artist: 'Some artist 4',
            album: 'Some album 4',
            date: '16 day ago',
            likes: 0,
            disLike: 0,
            sum: 0
        },
        {
            id: nanoid(),
            title: 'Some track 5',
            artist: 'Some artist 5',
            album: 'Some album 5',
            date: '16 day ago',
            likes: 0,
            disLike: 0,
            sum: 0
        },
        {
            id: nanoid(),
            title: 'Some track 6',
            artist: 'Some artist 6',
            album: 'Some album 6',
            date: '16 day ago',
            likes: 0,
            disLike: 0,
            sum: 0
        }
    ]

export type WidgetType = {
    id: string
    title: string
    artist: string
    album: string
    date: string
    likes: number
    disLike: number
    sum: number
}