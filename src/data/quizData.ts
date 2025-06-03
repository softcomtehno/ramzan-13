export interface Topic {
  id: string
  title: string
  description: string
  questionsCount: number
  image?: string
}

export interface Question {
  id: string
  text: string
  options: Array<{
    id: string
    text: string
    isCorrect: boolean
  }>
  image?: string
  imageCaption?: string
}

export interface Quiz {
  topicId: string
  questions: Question[]
}

export const topics: Topic[] = [
  {
    id: 'cell',
    title: 'Клетка и её строение',
    description:
      'Вопросы о структуре и функциях клетки, клеточных органеллах и процессах',
    questionsCount: 10,
    image: 'https://images.pexels.com/photos/5795566/pexels-photo-5795566.jpeg',
  },
  {
    id: 'human-anatomy',
    title: 'Анатомия человека',
    description:
      'Проверьте свои знания о строении человеческого тела, органах и системах',
    questionsCount: 10,
    image: 'https://images.pexels.com/photos/4226215/pexels-photo-4226215.jpeg',
  },
  {
    id: 'botany',
    title: 'Ботаника',
    description: 'Вопросы о растениях, их строении, физиологии и классификации',
    questionsCount: 10,
    image: 'https://images.pexels.com/photos/1090977/pexels-photo-1090977.jpeg',
  },
]

export const quizzes: Quiz[] = [
  {
    topicId: 'cell',
    questions: [
      {
        id: 'cell-1',
        text: 'Какая органелла является "энергетической станцией" клетки?',
        options: [
          { id: 'cell-1-a', text: 'Митохондрия', isCorrect: true },
          { id: 'cell-1-b', text: 'Рибосома', isCorrect: false },
          { id: 'cell-1-c', text: 'Аппарат Гольджи', isCorrect: false },
          { id: 'cell-1-d', text: 'Лизосома', isCorrect: false },
        ],
      },
      {
        id: 'cell-2',
        text: 'В какой органелле происходит фотосинтез?',
        options: [
          { id: 'cell-2-a', text: 'Хлоропласт', isCorrect: true },
          { id: 'cell-2-b', text: 'Ядро', isCorrect: false },
          { id: 'cell-2-c', text: 'Вакуоль', isCorrect: false },
          { id: 'cell-2-d', text: 'Цитоплазма', isCorrect: false },
        ],
      },
      {
        id: 'cell-3',
        text: 'Какая структура контролирует, что входит и выходит из клетки?',
        options: [
          { id: 'cell-3-a', text: 'Клеточная мембрана', isCorrect: true },
          { id: 'cell-3-b', text: 'Ядерная оболочка', isCorrect: false },
          { id: 'cell-3-c', text: 'Клеточная стенка', isCorrect: false },
          {
            id: 'cell-3-d',
            text: 'Эндоплазматический ретикулум',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'cell-4',
        text: 'Где в клетке хранится генетическая информация?',
        options: [
          { id: 'cell-4-a', text: 'В ядре', isCorrect: true },
          { id: 'cell-4-b', text: 'В рибосомах', isCorrect: false },
          { id: 'cell-4-c', text: 'В митохондриях', isCorrect: false },
          { id: 'cell-4-d', text: 'В аппарате Гольджи', isCorrect: false },
        ],
      },
      {
        id: 'cell-5',
        text: 'Какие клетки НЕ имеют ядра?',
        options: [
          {
            id: 'cell-5-a',
            text: 'Зрелые эритроциты млекопитающих',
            isCorrect: true,
          },
          { id: 'cell-5-b', text: 'Нейроны', isCorrect: false },
          { id: 'cell-5-c', text: 'Клетки кожи', isCorrect: false },
          { id: 'cell-5-d', text: 'Клетки печени', isCorrect: false },
        ],
      },
      {
        id: 'cell-6',
        text: 'Какая органелла отвечает за переваривание клеточных отходов и разрушение старых органелл?',
        options: [
          { id: 'cell-6-a', text: 'Лизосома', isCorrect: true },
          { id: 'cell-6-b', text: 'Пероксисома', isCorrect: false },
          { id: 'cell-6-c', text: 'Вакуоль', isCorrect: false },
          { id: 'cell-6-d', text: 'Ядрышко', isCorrect: false },
        ],
      },
      {
        id: 'cell-7',
        text: 'Что такое цитоплазма?',
        options: [
          {
            id: 'cell-7-a',
            text: 'Желеобразное вещество, заполняющее клетку',
            isCorrect: true,
          },
          { id: 'cell-7-b', text: 'Внешняя оболочка клетки', isCorrect: false },
          { id: 'cell-7-c', text: 'Жидкость внутри вакуоли', isCorrect: false },
          { id: 'cell-7-d', text: 'Содержимое ядра', isCorrect: false },
        ],
      },
      {
        id: 'cell-8',
        text: 'Рибосомы отвечают за:',
        options: [
          { id: 'cell-8-a', text: 'Синтез белков', isCorrect: true },
          { id: 'cell-8-b', text: 'Клеточное дыхание', isCorrect: false },
          { id: 'cell-8-c', text: 'Транспорт веществ', isCorrect: false },
          {
            id: 'cell-8-d',
            text: 'Хранение генетической информации',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'cell-9',
        text: 'Что такое клеточный цикл?',
        options: [
          {
            id: 'cell-9-a',
            text: 'Последовательность событий, приводящих к делению клетки',
            isCorrect: true,
          },
          { id: 'cell-9-b', text: 'Процесс старения клетки', isCorrect: false },
          {
            id: 'cell-9-c',
            text: 'Круговорот веществ внутри клетки',
            isCorrect: false,
          },
          {
            id: 'cell-9-d',
            text: 'Движение цитоплазмы внутри клетки',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'cell-10',
        text: 'Какое утверждение о клетках растений и животных верно?',
        options: [
          {
            id: 'cell-10-a',
            text: 'Только растительные клетки имеют клеточную стенку',
            isCorrect: true,
          },
          {
            id: 'cell-10-b',
            text: 'Только животные клетки имеют митохондрии',
            isCorrect: false,
          },
          {
            id: 'cell-10-c',
            text: 'Только растительные клетки имеют ядро',
            isCorrect: false,
          },
          {
            id: 'cell-10-d',
            text: 'Только животные клетки имеют рибосомы',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    topicId: 'human-anatomy',
    questions: [
      {
        id: 'anatomy-1',
        text: 'Какой орган отвечает за очистку крови от токсинов?',
        options: [
          { id: 'anatomy-1-a', text: 'Печень', isCorrect: true },
          { id: 'anatomy-1-b', text: 'Почки', isCorrect: false },
          { id: 'anatomy-1-c', text: 'Селезёнка', isCorrect: false },
          { id: 'anatomy-1-d', text: 'Лёгкие', isCorrect: false },
        ],
      },
      {
        id: 'anatomy-2',
        text: 'Какая система органов отвечает за движение тела?',
        options: [
          { id: 'anatomy-2-b', text: 'Нервная', isCorrect: false },
          { id: 'anatomy-2-c', text: 'Эндокринная', isCorrect: false },
          { id: 'anatomy-2-d', text: 'Пищеварительная', isCorrect: false },
          { id: 'anatomy-2-a', text: 'Опорно-двигательная', isCorrect: true },
        ],
      },
      {
        id: 'anatomy-3',
        text: 'Сколько камер имеет сердце человека?',
        options: [
          { id: 'anatomy-3-b', text: '2', isCorrect: false },
          { id: 'anatomy-3-c', text: '3', isCorrect: false },
          { id: 'anatomy-3-a', text: '4', isCorrect: true },
          { id: 'anatomy-3-d', text: '5', isCorrect: false },
        ],
        image:
          'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg',
        imageCaption: 'Модель сердца человека',
      },
      {
        id: 'anatomy-4',
        text: 'Какой орган является частью пищеварительной системы?',
        options: [
          { id: 'anatomy-4-b', text: 'Лёгкие', isCorrect: false },
          { id: 'anatomy-4-c', text: 'Почки', isCorrect: false },
          { id: 'anatomy-4-a', text: 'Поджелудочная железа', isCorrect: true },
          { id: 'anatomy-4-d', text: 'Сердце', isCorrect: false },
        ],
      },
      {
        id: 'anatomy-5',
        text: 'Какая кость является самой длинной в человеческом теле?',
        options: [
          { id: 'anatomy-5-a', text: 'Бедренная кость', isCorrect: true },
          { id: 'anatomy-5-b', text: 'Плечевая кость', isCorrect: false },
          { id: 'anatomy-5-c', text: 'Большеберцовая кость', isCorrect: false },
          { id: 'anatomy-5-d', text: 'Позвоночник', isCorrect: false },
        ],
      },
      {
        id: 'anatomy-6',
        text: 'Какой орган отвечает за производство инсулина?',
        options: [
          { id: 'anatomy-6-b', text: 'Печень', isCorrect: false },
          { id: 'anatomy-6-c', text: 'Щитовидная железа', isCorrect: false },
          { id: 'anatomy-6-d', text: 'Надпочечники', isCorrect: false },
          { id: 'anatomy-6-a', text: 'Поджелудочная железа', isCorrect: true },
        ],
      },
      {
        id: 'anatomy-7',
        text: 'Из чего состоит большая часть крови человека?',
        options: [
          { id: 'anatomy-7-b', text: 'Эритроциты', isCorrect: false },
          { id: 'anatomy-7-c', text: 'Лейкоциты', isCorrect: false },
          { id: 'anatomy-7-d', text: 'Тромбоциты', isCorrect: false },
          { id: 'anatomy-7-a', text: 'Плазма', isCorrect: true },
        ],
      },
      {
        id: 'anatomy-8',
        text: 'Какой орган защищает головной мозг?',
        options: [
          { id: 'anatomy-8-b', text: 'Позвоночник', isCorrect: false },
          { id: 'anatomy-8-a', text: 'Череп', isCorrect: true },
          { id: 'anatomy-8-c', text: 'Мозговая оболочка', isCorrect: false },
          { id: 'anatomy-8-d', text: 'Кожа головы', isCorrect: false },
        ],
      },
      {
        id: 'anatomy-9',
        text: 'Какой орган участвует в дыхании?',
        options: [
          { id: 'anatomy-9-b', text: 'Почки', isCorrect: false },
          { id: 'anatomy-9-c', text: 'Печень', isCorrect: false },
          { id: 'anatomy-9-a', text: 'Лёгкие', isCorrect: true },
          { id: 'anatomy-9-d', text: 'Желудок', isCorrect: false },
        ],
      },
      {
        id: 'anatomy-10',
        text: 'Какая часть мозга отвечает за координацию движений?',
        options: [
          { id: 'anatomy-10-a', text: 'Мозжечок', isCorrect: true },
          {
            id: 'anatomy-10-b',
            text: 'Кора больших полушарий',
            isCorrect: false,
          },
          { id: 'anatomy-10-c', text: 'Гипоталамус', isCorrect: false },
          { id: 'anatomy-10-d', text: 'Продолговатый мозг', isCorrect: false },
        ],
      },
    ],
  },
  // Сокращенный набор вопросов для остальных тем для демонстрации
  {
    topicId: 'botany',
    questions: [
      {
        id: 'botany-1',
        text: 'Что такое фотосинтез?',
        options: [
          {
            id: 'botany-1-a',
            text: 'Процесс образования органических веществ из CO2 и H2O с использованием энергии света',
            isCorrect: true,
          },
          {
            id: 'botany-1-b',
            text: 'Процесс поглощения кислорода растением',
            isCorrect: false,
          },
          {
            id: 'botany-1-c',
            text: 'Процесс разложения органических веществ в растениях',
            isCorrect: false,
          },
          {
            id: 'botany-1-d',
            text: 'Движение растений к источнику света',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'botany-2',
        text: 'Какие органы растения поглощают воду и минеральные вещества из почвы?',
        options: [
          { id: 'botany-2-a', text: 'Корни', isCorrect: true },
          { id: 'botany-2-b', text: 'Листья', isCorrect: false },
          { id: 'botany-2-c', text: 'Стебель', isCorrect: false },
          { id: 'botany-2-d', text: 'Цветы', isCorrect: false },
        ],
        image:
          'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
        imageCaption: 'Корневая система растения',
      },
      {
        id: 'botany-3',
        text: 'Какая часть растения отвечает за фотосинтез?',
        options: [
          { id: 'botany-3-a', text: 'Листья', isCorrect: true },
          { id: 'botany-3-b', text: 'Корни', isCorrect: false },
          { id: 'botany-3-c', text: 'Цветки', isCorrect: false },
          { id: 'botany-3-d', text: 'Семена', isCorrect: false },
        ],
      },
      {
        id: 'botany-4',
        text: 'Что транспортирует флоэма?',
        options: [
          {
            id: 'botany-4-a',
            text: 'Органические вещества от листьев',
            isCorrect: true,
          },
          {
            id: 'botany-4-b',
            text: 'Воду и минеральные вещества от корней',
            isCorrect: false,
          },
          { id: 'botany-4-c', text: 'Кислород к клеткам', isCorrect: false },
          {
            id: 'botany-4-d',
            text: 'Углекислый газ к листьям',
            isCorrect: false,
          },
        ],
      },
      {
        id: 'botany-5',
        text: 'Какой пигмент придаёт листьям зелёный цвет?',
        options: [
          { id: 'botany-5-a', text: 'Хлорофилл', isCorrect: true },
          { id: 'botany-5-b', text: 'Каротин', isCorrect: false },
          { id: 'botany-5-c', text: 'Антоциан', isCorrect: false },
          { id: 'botany-5-d', text: 'Меланин', isCorrect: false },
        ],
      },
      {
        id: 'botany-6',
        text: 'Что происходит в устьицах листа?',
        options: [
          {
            id: 'botany-6-a',
            text: 'Газообмен и испарение воды',
            isCorrect: true,
          },
          { id: 'botany-6-b', text: 'Процесс цветения', isCorrect: false },
          { id: 'botany-6-c', text: 'Опыление', isCorrect: false },
          { id: 'botany-6-d', text: 'Формирование семян', isCorrect: false },
        ],
      },
      {
        id: 'botany-7',
        text: 'Что такое хемосинтез?',
        options: [
          {
            id: 'botany-7-a',
            text: 'Синтез органических веществ из неорганических с использованием энергии химических реакций',
            isCorrect: true,
          },
          {
            id: 'botany-7-b',
            text: 'Процесс дыхания растений',
            isCorrect: false,
          },
          {
            id: 'botany-7-c',
            text: 'Фотосинтез в условиях темноты',
            isCorrect: false,
          },
          { id: 'botany-7-d', text: 'Образование кислорода', isCorrect: false },
        ],
      },
      {
        id: 'botany-8',
        text: 'Как называется основной тип тканей, обеспечивающих рост растения?',
        options: [
          { id: 'botany-8-a', text: 'Меристема', isCorrect: true },
          { id: 'botany-8-b', text: 'Паренхима', isCorrect: false },
          { id: 'botany-8-c', text: 'Ксилема', isCorrect: false },
          { id: 'botany-8-d', text: 'Флоэма', isCorrect: false },
        ],
      },
      {
        id: 'botany-9',
        text: 'Какая структура отвечает за перенос воды в растении?',
        options: [
          { id: 'botany-9-a', text: 'Ксилема', isCorrect: true },
          { id: 'botany-9-b', text: 'Флоэма', isCorrect: false },
          { id: 'botany-9-c', text: 'Камбий', isCorrect: false },
          { id: 'botany-9-d', text: 'Эпидермис', isCorrect: false },
        ],
      },
      {
        id: 'botany-10',
        text: 'Какой процесс отвечает за образование плодов?',
        options: [
          {
            id: 'botany-10-a',
            text: 'Опыление и оплодотворение',
            isCorrect: true,
          },
          { id: 'botany-10-b', text: 'Фотосинтез', isCorrect: false },
          { id: 'botany-10-c', text: 'Испарение воды', isCorrect: false },
          { id: 'botany-10-d', text: 'Рост корней', isCorrect: false },
        ],
      },
    ],
  },

  // Другие темы тестов будут здесь...
]

export function getTopicById(topicId: string): Topic | undefined {
  return topics.find((topic) => topic.id === topicId)
}

export function getQuizByTopicId(topicId: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.topicId === topicId)
}
