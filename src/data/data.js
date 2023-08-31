import {reactive} from 'vue'
const data = reactive({
    basics: {
        name: 'Mehedi Jaman',
        title: 'Fullstack Developer',
        image: 'https://randomuser.me/api/portraits/men/18.jpg',
        email: 'mail4mjaman@gmail.com',
        phone: '+880 1914090747',
        portfolio: 'mehedipata.com',
        summary: 'I am a web developer having expertise in frontend development and exposure to back- end development. I design and develop web applications using the latest technologies to deliver the product with quality code.',
        location: {
            address: '',
            city: 'Khulna',
            country: 'Bangladesh',
        },
        totalExp: '6 Years',
        objective: 'Eager to expand my skill set through external trainings to help boost all major front desk KPIs. Hoping to leverage organizational skills to help ABC Corp introduce time-saving schemes for all executives.',
        profiles: [
            {
                network: 'linkedin',
                username: 'profileofmehedi',
                url: 'https://www.linkedin.com/in/profileofmehedi/'
            },
            {
                network: 'twitter',
                username: 'ProfileOfMehedi',
                url: 'https://www.twitter.com/ProfileOfMehedi/'
            },
            {
                network: 'github',
                username: 'mehedijaman',
                url: 'https://github.com/mehedijaman/'
            },
            {
                network: 'facebook',
                username: 'ProfieOfMehedi',
                url: 'https://www.facebook.com/ProfieOfMehedi/'
            },
        ]
    },
    skills: {
        languages: [
            {
                name: 'PHP',
                level: 90
            },
            {
                name: 'JavaScript',
                level: 80
            }
        ],
        frameworks: [
            {
                name: 'Laravel',
                level: 70
            },
            {
                name: 'VueJS',
                level: 70
            }
        ],
        technologies: [
            {
                name: 'Github',
                level: 3
            },
            {
                name: 'Trello',
                level: 3
            }
        ],
        libraries: [
            {
                name: 'jQuery',
                level: 3
            }
        ],
        databases: [
            {
                'name': 'MySQL',
                'level': 3
            }
        ],
        'practices': [
            {
                'name': 'SOLID',
                'level': 3
            },
            {
                'name': 'Design Patterns',
                'level': 3
            },
            {
                'name': 'TDD',
                'level': 3
            },
            {
                'name': 'MVC',
                'level': 3
            }
        ],
        tools: [
            {
                name: 'Git',
                level: 3
            },
            {
                name: 'VS Code',
                level: 3
            },
            {
                name: 'Trello',
                level: 3
            },
            {
                name: 'Slack',
                level: 3
            },
            {
                name: 'Notion',
                level: 3
            },
            {
                name: 'Bitbucket',
                level: 3
            }
        ]
    },
    experiences: [
        {
            id: 1,
            name: 'Company 1',
            position: 'Senior Software Developer',
            url: '',
            startDate: 'Apr 2021',
            currentlyWorking: true,
            endDate: null,
            highlights: [
                '* Worked on a team of 5 developers to develop a web application for a client'
            ],
            summary: '<ul><li> Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable</li><li>Keep the code quality high reviewing code from other developers and suggesting improvements</li><li> Interact with the designer to suggest changes and to make sure the view he has about the design is translated into actual functionality</li><li> E-commerce maintenance <strong>with Fastcommerce</strong>, a Brazilian e-commerce platform</li></ul>',
            years: ''
        },
        {
            id: 2,
            name: 'Company 2',
            position: 'Software Developer',
            url: '',
            startDate: 'Jun 2015',
            currentlyWorking: false,
            endDate: 'Dec 2017',
            highlights: [
                '* Worked on a team of 5 developers to develop a web application for a client'
            ],
            summary: "<ul><li>Develop web applications based on Sharepoint, Drupal 8 and Episerver</li><li>Lead a team of 10 front end developers, giving support to the client's multi-cultural team, providing feedback, clarifying requirements and helping with technical questions</li><li>Keep the Project Manager and the IT Leads updated on the overall progress of the projects and manage the tasks distributed to the team</li><li>Keep the code and the features implemented by the other developers in accordance to the requirements</li></ul>",
            years: '2 years'
        },
        {
            id: 3,
            name: 'Company 3',
            position: 'Trainee Developer',
            url: '',
            startDate: 'Aug 2011',
            currentlyWorking: false,
            endDate: 'May 2015',
            highlights: [
                "* Worked on a team of 5 developers to develop a web application for a client"
            ],
            summary: "<ul><li>Design easy user interfaces and great user experiences for the digital platforms of small companies</li><li>Wordpress development, including themes creation or customization, custom plugins development and training</li><li>E-commerce maintenance with Fastcommerce, a Brazilian e-commerce platform</li><li>E-commerce development with Magento, customizing preexisting themes</li><li>Integrate external services such as payment services, delivery, etc into Magento solutions</li></ul>",
            years: '4 year'
        }
    ],
    education: [
        {
            id: '1',
            institution: 'MIT, University',
            url: 'https://www.mit.edu/',
            studyType: 'MS',
            area: 'Cloud technology',
            startDate: '2014',
            isStudyingHere: false,
            endDate: '2016',
            score: '68%',
            courses: []
        },
        {
            id: '2',
            institution: 'NMAMIT, Nitte',
            url: 'https://www.mit.edu/',
            studyType: 'B.Tech (VTU)',
            area: 'Computer Science',
            startDate: '2010',
            isStudyingHere: false,
            endDate: '2014',
            score: '8.3 CGPA',
            courses: []
        }
    ],
    // 'activities': {
    //     'involvements': '<ul><li>Prevented millions of dollars in state sales tax undercharges by initiating tests that revealed a bug in a new release of shopping cart software.</li><li>Isolated previously undiscovered flaw in price checking tool resulting in more competitive pricing and a 20 percent increase in revenue.</li><li>Implemented automated testing tools spawning more diligent levels of regression testing, negative testing, error/bug retests and usability.</li><li>Prevented millions of dollars in state sales tax undercharges by initiating tests that revealed a bug in a new release of shopping cart software.</li></ul>',
    //     'achievements': '<ul><li>React and redux - A complete guide 2020 from Udemy</li><li>Agile and Scrum Master Certificate from Udacity</li><li>Best performer award for consistently exceeding the performance</li><li>Certificate of exceptional bug finder by XYZ client</li><li>Recognition zero defect delivery</li><li>Best performer award for consistently exceeding the performance</li></ul>'
    // },
    // 'volunteer': [
    //     {
    //         'id': '1',
    //         'organization': 'Company XYZ',
    //         'position': 'Organizer',
    //         'url': 'https://xyx.com/',
    //         'startDate': '2012-01-01',
    //         'endDate': '2013-01-01',
    //         'summary': 'Organized several hackthons & monthly meetup to improve the community',
    //         'highlights': [
    //             'Awarded 'Volunteer of the Month''
    //         ],
    //         'isVolunteeringNow': false
    //     }
    // ],
    // 'awards': [
    //     {
    //         'title': 'Certificate of exceptional bug finder',
    //         'date': '2014-11-01',
    //         'awarder': 'XYZ client',
    //         'summary': '* Recognition zero defect delivery',
    //         'id': '1'
    //     },
    //     {
    //         'title': 'Certificate of best frontend developer',
    //         'date': '2016-11-01',
    //         'awarder': 'XYZ client',
    //         'summary': 'Awarded for exceptional improvements made to improve user experience',
    //         'id': '1'
    //     }
    // ]
})

export {data}