export interface OBUCHENIE_STATYA_INTERFACE {
    id: string,
    photo: string,
    title: string,
    description: string,
    data: string,
    likes: string,
    comments: string
}

export const OBUCHENIE_STATYA = [
    {
        id: '1',
        photo: '22',
        title: '8 способов быстро придумать концепцию логотипа',
        description: 'Расскажем о том, как создать оригинальный логотип быстро и эффективно.',
        data: '09.04.2024',
        likes: '32',
        comments: '3'
    },
    {
        id: '2',
        photo: '23',
        title: 'Пресеты для Photoshop',
        description: 'Превратить обычные фотографии в шедевры помогут пресеты, благодаря которым одним кликом можно добавить яркость, контраст, насыщенность и другие эффекты, а также создать единый стиль для всех ваших работ.',
        data: '08.04.2024',
        likes: '82',
        comments: '9'
    },
    {
        id: '3',
        photo: '24',
        title: 'Сложности дизайна',
        description: 'Если вы только начинающий специалист, то эта статья будет полезна для вас. Прочтите ее прежде, чем сделать дизайн смыслом своей жизни, чтобы не разочароваться в нем.',
        data: '07.04.2024',
        likes: '97',
        comments: '15'
    },
    {
        id: '4',
        photo: '25',
        title: 'Плюсы и минусы фриланса',
        description: 'С каждым годом фриланс становится все популярнее. Расскажем о всех преимуществах и недостатках такого способа заработка.',
        data: '06.04.2024',
        likes: '64',
        comments: '7'
    },

]

export interface OBUCHENIE_VIDEO_INTERFACE {
    id: string
    photo: string
    title: string
    description: string
    data: string
    likes: string
    comments: string
}

export const OBUCHENIE_VIDEO = [
    {
        id: '1',
        photo: '26',
        title: 'Симуляция полета бумаги в Cinema 4D',
        description: 'Видеоурок, в котором показан очень простой способ создания симуляции летящей бумаги в C4D с использованием cloth tag.',
        data: '09.04.2024',
        likes: '46',
        comments: '2'
    },
    {
        id: '2',
        photo: '27',
        title: 'Анимация фонарика в Figma за пару минут',
        description: 'Такие анимации используют, чтобы привлечь и впечатлить возможных клиентов, зачастую для них это настоящий вау-эффект.',
        data: '03.04.2024',
        likes: '94',
        comments: '5'
    },
    {
        id: '3',
        photo: '28',
        title: 'Figma - анимация эффекта воды в шаре',
        description: 'На этом видео за 6 минут вы научитесь делать простую, но достаточно эффектную анимацию эффекта воды в шаре.',
        data: '02.04.2024',
        likes: '32',
        comments: '3'
    },
    {
        id: '4',
        photo: '29',
        title: 'МАСКА В PHOTOSHOP, О КОТОРОЙ ВЫ НЕ ЗНАЛИ',
        description: 'Есть стандартный способ создание маски в фотошопе, а есть и скрытый, и сегодня мы о нем расскажем!',
        data: '01.04.2024',
        likes: '72',
        comments: '14'
    },

]

export interface OBUCHENIE_WEBINAR_INTERFACE {
    id: string,
    photo: string,
    direction: string,
    topic: string,
    title: string,
    nickname: string,
    nickname_photo: string,
    data: string,
    time: string
}

export const OBUCHENIE_WEBINAR = [
    {
        id: '1',
        photo: '30',
        direction: 'UX/UI-дизайн',
        topic: 'Дизайн',
        title: 'Умная анимация в Figma',
        nickname: 'volgin64',
        nickname_photo: '5',
        data: '11.04.2024',
        time: '14:00'
    },
    {
        id: '2',
        photo: '31',
        direction: 'Графический дизайн',
        topic: 'Портфолио',
        title: 'Портфолио графического дизайнера в 2024 году',
        nickname: 'maria-fil',
        nickname_photo: '2',
        data: '12.04.2024',
        time: '15:00'
    },
    {
        id: '3',
        photo: '32',
        direction: 'Веб-дизайн',
        topic: 'Трудоустройство',
        title: 'Тестовое задание для дизайнера',
        nickname: 'eva-sv',
        nickname_photo: '8',
        data: '09.04.2024',
        time: '15:00'
    },

]