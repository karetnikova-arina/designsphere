export const USER_PROFILE = {
    id: '1',
    nickname: 'alex_des',
    name: 'Александр Сидоров',
    nickname_photo: '1',
    city: 'Москва',
    direction: ['Веб-дизайн'],
    programm: ['Figma'],
    button_follow: 'small, done'
}

export interface PORTFOLIO_INTERFACE {
    id: string,
    title: string
    photo: string
    direction: string
    programm: string
    like: string
    comments: string
    data: string
}

export const PORTFOLIO = [
    {
        id: '1',
        title: 'Лендинг для AI обучения',
        photo: '33',
        direction: 'Веб-дизайн',
        programm: 'Figma',
        like: '56',
        comments: '2',
        data: '01.04.2024'
    },
]