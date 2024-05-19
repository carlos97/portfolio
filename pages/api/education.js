const education = [{
    id: 0,
    title: 'Universidad El Bosque',
    time: 'Ingeniería de Sistemas',
    at: 'Current'
},
{
    id: 1,
    title: 'Universidad Distrital Francisco josé de Caldas',
    time: 'Ingeniería de sistemas',
    at: '2017-2021'
},
]

export default function handler(req, res) {
    res.status(200).json(education)
}
