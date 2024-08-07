export type ExperienceType = {
  type: 'job' | 'learn'
  period: string,
  сompany: string
  title: string
  responsibilities?: string[]
  results?: string[]
  tags?: string[]
  links?: {
    to:string,
    text: string
  }[]
}
export type ContactType = {
  title: string
  icon: string
  link: string
}
export type ConfigType = {
  start: Date
  name: string
  jobtitle: string
  description: string
  experience: ExperienceType[]
  contacts: ContactType[],
  hobbies: ContactType[]
}
export default {
  start: new Date(2014,5,1),
  name: 'Зинов Никита Александрович',
  jobtitle: 'Full Stack разработчик',
  description: 'Начиная с 2014 года я занимаюсь разработкой и сопровождением веб-приложений в банковской сфере, анализом и внедрением бизнес-процессов. Продолжаю развиваться в сфере разработки...',
  experience: [
    {
      type: "job",
      period: "2024 - по н.в.",
      сompany: "БАНК УРАЛСИБ",
      title: "Релиз-менеджер",
      responsibilities: [
        "Релиз-менеджер",
        "Менеджер сервиса",
        "Проверка доработок, внедрение их на боевую среду",
        "Выявление проблем",
        "Устранение аварий",
        "Планирвоание релизов"
      ],
      tags: ["Vuejs","Ruby on Rails","PostgreSQL", "Ant Design", "Kubernetes"],
      links: [{to: 'https://www.uralsib.ru/', text: 'Банк УРАЛСИБ'}]
    },
    {
      type: "job",
      period: "2023 - 2024",
      сompany: "Интеллектуальные программные решения",
      title: "Главный разработчик",
      responsibilities: [
        "Frontend + Backend + DevOps",
        "Поддержка и доработка реализованных ранее для Банка Уралсиб систем",
        "Доработка и сопровождение Производственной системы, в которой ведется работа разработчиков, учет трудозатрат, сметы для взаиморасчетов с заказчиками"
      ],
      results: [
        "Выстроен процесс взаимодействия с заказчиком",
        "Проведено обчение новых сотрудников по передачи части функционала",
        "Выстроен процесс документирования и код-ревью"
      ],
      tags: ["Vuejs","Ruby on Rails","PostgreSQL", "Ant Design", "Kubernetes"],
      links: [{to: 'https://www.smartsoftware.ru/', text: 'Smart Software Solutions'}]
    },
    {
      type: "learn",
      period: "2022 - 2023",
      сompany: "Яндекс Практикум",
      title: "Мидл фронтенд-разработчик",
      responsibilities: [
        "Проект «Веб-мессенджер»",
        "Командный проект - выполнял роль лидера команды",
        "Алгоритмы и структуры данных"
      ],
      tags: ["TypeScript","Webpack","Parcel","React","Web API","Canvas API","CI / CD","Yandex Cloud",
        "React-router","Nginx","WebSocket","PostgreSQL","Server Side Rendering","Docker","Jest"],
        links: [{to: 'https://practicum.yandex.ru/middle-frontend/', text: 'Описание курса'}]
        
    },
    {
      type: "job",
      period: "2017 - 2023",
      сompany: "БАНК УРАЛСИБ",
      title: "Главный разработчик",
      responsibilities: [
        "Frontend + Backend + DevOps",
        "Разработка портала управление ИТ-услугами (ITSM) и Service Desk",
        "Разработка системы управления проектами",
        "Моделирование и настройка бизнес-процессов в системе",
        "Организация интеграций c другими системами банка",
        "Формирование отчетности на основе данных системы"
      ],
      results: [
        "Масштабирование с портала оформления заявок Service Desk, до полноценного портала ITSM",
        "Внедрение механизма ведения проектов ИТ - работ, трудозатрат, смет, планирование итд",
        "Создание инструмента описания практически любого бизнес-процесса банка"
      ],
      tags: ["Vue JS","Ruby on Rails","Oracle", "My SQL", "Bootstrap Vue", "Gitlab", "Docker"],
      links: [{to: 'https://www.uralsib.ru/', text: 'Банк УРАЛСИБ'}]
    },
    {
      type: "learn",
      period: "2014 - 2018",
      сompany: "УГАТУ",
      title: "Факультет информатики и робототехники",
      responsibilities:[
        "Анализ бизнес-процессов",
        "Разработка проектов автоматизации процессов",
        "Создание информационных систем в прикладных областях",
        "Управление проектами информатизации"
      ],
      tags: ["09.03.03 Прикладная информатика", "Анализ данных", "C#", "Java", "ООП", "Базы данных"],
      links: [{to: 'https://ugatu.su/', text: 'УГАТУ'}]
    },
    {
      type: "job",
      period: "2014 - 2017",
      сompany: "БАНК УРАЛСИБ",
      title: "Ведущий специалист",
      responsibilities: [
        "Поддержка и развитие системы для обслуживания эквайрингового оборудования клиентов банка",
        "Работа с заявками пользователей",
        "Устранение неисправностей в работе ИС",
        "Выявление недостач и излишков по обращению клиентов банка по логам банкоматов и банковских терминалов"
      ],
      results: [
        "Масштабирование системы с региона, на федеральный округ",
        "Реализована возможность формирования отчетности по данным системы",
        "Сформированы организационные правила по контролю версий",
        "Настроено информирование администраторов о возникших ошибках"
      ],
      tags: ["IIS","VBScript","MS SQL","JavaScript"],
      links: [{to: 'https://www.uralsib.ru/', text: 'Банк УРАЛСИБ'}]
    }
  ],
  contacts: [{
    title: 'Никита Зинов',
    icon: '/about/hh.png',
    link: 'https://ufa.hh.ru/resume/5498def9ff083d236c0039ed1f6d33314f7a75'
  },{
    title: 'Контактный Email',
    icon: '/about/email.png',
    link: 'mailto:zinov.nikita2010@ya.ru'
  },{
    title: '@ZinovNikita',
    icon: '/about/github.png',
    link: 'https://github.com/ZinovNikita'
  },{
    title: '@ZinNikAlex',
    icon: '/about/vk.png',
    link: 'https://vk.com/zinnikalex'
  },{
    title: '@ZinovNA',
    icon: '/about/tg.png',
    link: 'https://t.me/ZinovNA'
  },{
    title: '@ZinNikAlex',
    icon: '/about/youtube.png',
    link: 'https://www.youtube.com/@zinnikalex'
  }],
  hobbies: [{
    title: 'Babylon JS - Web GL фреймворк, для веб. Можно создавать гибкие приложения, начиная с простой визуализации 3D, заканчивая онлайн играми.',
    icon: '/about/babylon.png',
    link: 'https://www.babylonjs.com/'
  },{
    title: 'Blender - Средство 3D моделирования, анимации, тестурирования и т.д. Мощный инструмент, позволяет создать объекты или персонажей.',
    icon: '/about/blender.png',
    link: 'https://www.blender.org/'
  },{
    title: 'Kdenlive - Мощный инструмент обработки и монтажа видео, аналог Adobe Premiere Pro',
    icon: '/about/kdenlive.png',
    link: 'https://kdenlive.org/'
  }]
} as ConfigType
