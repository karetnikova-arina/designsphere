export interface SOOBSCHESTVO_GROUPS_INTERFACE {
    id: string,
    photo: string,
    title: string,
    direction: string,
    programm: string,
    subscribers: string,
    save: boolean
}
export const SOOBSCHESTVO_GROUPS = [
    {
        id: '1',
        photo: '10',
        title: 'Веб-дизайн для начинающих',
        direction: 'Веб-дизайн',
        programm: 'Figma',
        subscribers: '123',
        save: true
    },
    {
        id: '2',
        photo: '11',
        title: 'Интерфейсы и не только',
        direction: 'UX/UI дизайн',
        programm: 'Figma',
        subscribers: '212',
        save: false
    },
    {
        id: '3',
        photo: '12',
        title: 'Верстка сайтов',
        direction: 'Веб-дизайн',
        programm: 'Tilda',
        subscribers: '548',
        save: true
    },
]


export const SOOBSCHESTVO_GROUPS_RECOMEND = [

    {
        id: '1-recomed',
        photo: '13',
        title: 'Фотошоперы',
        direction: 'Графический дизайн',
        programm: 'Photoshop',
        subscribers: '1261',
    },
    {
        id: '2-recomed',
        photo: '14',
        title: 'Нескучная Tilda',
        direction: 'Веб-дизайн',
        programm: 'Tilda',
        subscribers: '1128',
    },    
    {
        id: '3-recomed',
        photo: '15',
        title: 'UX/UI-дизайн для профи',
        direction: 'UX/UI-дизайн',
        programm: 'Figma',
        subscribers: '912',
    },
    {
        id: '4-recomed',
        photo: '16',
        title: 'Верстка журналов',
        direction: 'Графический дизайн',
        programm: 'InDesign',
        subscribers: '874',
    },    
    {
        id: '5-recomed',
        photo: '17',
        title: 'eMotion design',
        direction: 'Motion-дизайн',
        programm: 'After Effects',
        subscribers: '835',
    },    
    {
        id: '6-recomed',
        photo: '18',
        title: '3D фигуры',
        direction: '3D-дизайн',
        programm: '3Ds Max',
        subscribers: '642',
    },

    
]