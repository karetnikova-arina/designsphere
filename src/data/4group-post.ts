export interface SOOBSCHESTVO_GROUP_POST_INTERFACE {
    id: string,
    photo: string,
    title: string,
    direction: string,
    programm: string,
    likes: string,
    comments: string,
    time: string
    save: boolean
}
export const SOOBSCHESTVO_GROUP_POST = [
    {
        id: '1',
        photo: '19',
        title: 'Плагин с 3D элементами',
        direction: 'Веб-дизайн',
        programm: 'Figma',
        likes: '12',
        comments: '1',
        time: '35 минут назад',
        save: true
    },
    {
        id: '2',
        photo: '20',
        title: 'Горячие клавиши в Figma',
        direction: 'Веб-дизайн',
        programm: 'Figma',
        likes: '67',
        comments: '5',
        time: 'Вчера в 11:33',
        save: false
    },
    {
        id: '3',
        photo: '21',
        title: 'Виджет для настройки тени',
        direction: 'Веб-дизайн',
        programm: 'Tilda',
        likes: '212',
        comments: '15',
        time: '09.04.2024',
        save: true
    },
    
]