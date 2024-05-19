const expertise = [
    {
        id: 0,
        title: 'CTO',
        time: 'JUL 2023 - Current',
        at:'KEBO',
        desc: `Define the technological strategy by designing the application 
        architecture, ensuring interoperability and the secure integration 
        of various APIs to connect financial platforms using cloud technologies, 
        in addition to evaluating and integrating emerging technologies and 
        artificial intelligence in the development of requirements.`,
    },
    {
        id: 0,
        title: 'FullStack developer .Net + Angular',
        time: 'Jun 2021 - Current',
        at:'Effective Computer Solutions',
        desc: `Develop and design custom modules in backend, frontend
        and database stored procedures using several tools such as
        c# API, ASP. Net form, MVC, Angular, ionic and SQLserver`,
    },
    {
        id: 1,
        title: ' Research assistant',
        time: 'Feb 2021 - Jun 2021',
        at:'Francisco José de Caldas University',
        desc: ` Develop and design an web app as including, database,
        backend and frontend development using tools like SDR,
        MEAN stack, MySql and Ionic for IoT services.`,
    },
    {
        id: 2,
        title: 'FullStack developer .Net + Angular',
        time: 'Jun 2021 - Current',
        at:'Effective Computer Solutions',
        desc: `Develop and design custom modules in backend, frontend
        and database stored procedures using several tools such as
        c# API, ASP. Net form, MVC, Angular, ionic and SQLserver`,
    },{
        id: 3,
        title: 'Freelance software developer',
        time: ' Aug 2019 - Jun 2021',
        desc: ` Develop and design software by requirements as fullstack
        developer including mobile apps, database maintenance,
        existing software using tools like MEAN stack, PostgreSQL,
        Ionic.`,
    },{
        id: 4,
        title: '.Net Developer',
        time: 'Feb 2016 - Apr 2019',
        at:'Effective Computer Solutions',
        desc: `Develop modules by requirements in backend, frontend and
        database stored procedures using several tools such as
        PowerBuilder, ASP. Net form, MVC, Jquery and SQL Server
        for custom services of reporting, sms and email
        notifications, data management customizing the own
        company software.`,
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
