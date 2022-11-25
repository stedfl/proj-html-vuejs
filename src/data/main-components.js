const hero = {
    title: 'SEM campaigns made simple with avada',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ornare erat. Curabitur pulvinar elit',
    images: {
      mainImage: [
        {
          name: 'hero_1',
          path: ''
        },
        {
          name: 'hero_2',
          path: ''
        }
      ],
      background: [
        {
          name: 'background_1',
          path: ''
        },
        {
          name: 'background_2',
          path: ''
        }
      ]
    }
  };

const features = {
    title: 'Meet the new agency SEO template from the avada team',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    cards: [
      {
        icon: 'fa-road',
        title: 'establish goals',
        text: 'Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis mi ligula euismod odio vel dictum mi risus a mi'
      },
      {
        icon: 'fa-video',
        title: 'work with a team',
        text: 'Cras semper auctor aliquam. Sed porta sed lacus sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisce.'
      },
      {
        icon: 'fa-droplet',
        title: 'get results',
        text: 'Vestibulum scelerisque egestas lectus sit amet molestie. Donec consectetur cursus est sed blandit. Nunc sed risus lacus.',
      }
    ],
    image: {
      name: 'Agency Seo desk',
      path: 'agency-seo-desk-front-1200x570'
    }
  };

const services = {
    title: 'see our top notch services',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    cards: [
      {
        icon: 'fa-google',
        title: 'google seo',
        text: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        link: {
          placeholder: 'read more',
          link: '#'
        } 
      },
      {
        icon: 'fa-gear',
        title: 'brand strategy',
        text: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        link: {
          placeholder: 'read more',
          link: '#'
        }
      },
      {
        icon: 'fa-building',
        title: 'local SEO',
        text: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        link: {
          placeholder: 'read more',
          link: '#'
        }
      },
      {
        icon: 'fa-chart-column',
        title: 'SEO analysis',
        text: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        link: {
          placeholder: 'read more',
          link: '#'
        }
      }
    ]
};

const ourWork = {
    title: 'our work',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    cards: [
      'case-study-gallery-3-1-400x300',
      'case-study-gallery-2-400x300',
      'case-study-gallery-1-1-400x300',
      'case-study-gallery-4-1-400x300',
      'case-study-gallery-5-1-400x300',
      'case-study-gallery-6-1-400x300',
    ],
    hover: {
      link: '#',
      icon: 'fa-link'
    },
    button: 'view our work'
};

const plans = {
    title: 'our plans',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    cards: [
      {
        type: 'standard',
        price: '19',
        frequency: 'monthly',
        info: [
          '5 projects', 
          '5 GB storage', 
          'unlimited users'
        ],
        button: 'start today'
      },
      {
        type: 'premium',
        price: '29',
        frequency: 'monthly',
        info: [
          '10 projects', 
          '15 GB storage', 
          'unlimited users'
        ],
        button: 'start today'
      },
      {
        type: 'professional',
        price: '39',
        frequency: 'monthly',
        info: [
          '15 projects', 
          '30 GB storage', 
          'unlimited users'
        ],
        button: 'start today'
      },
      {
        type: 'extreme',
        price: '59',
        frequency: 'monthly',
        info: [
          'unlimited projects', 
          'unlimited storage', 
          'unlimited users'
        ],
        button: 'start today',
      },
    ]
};

const news = {
  title: 'latest news',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  cards: [
    {
      image: 'related-service-2-700x441',
      title: 'why you need a SEO agency now',
      link: '#',
      date: 'November 1st, 2017',
      text: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
    },
    {
      image: 'related-service-4-700x441',
      title: 'seo tips for your startup',
      link: '#',
      date: 'November 1st, 2017',
      text: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
    },
    {
      image: 'blog-post-6-700x441',
      title: 'image optimization for your site',
      date: 'November 1st, 2017',
      link: '#',
      text: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
    },
  ],
  button: 'go to news'
};

const clients = {
  title: 'what our clients say',
  testimonials: [
    {
      image: 'testimonials-2',
      name: 'luis desalvo',
      job: 'creo tech',
      opinion: 'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.'
    },
    // {
    //   image: 'testimonials-1',
    //   name: 'shelia mccourtney',
    //   job: 'architect',
    //   opinion: 'Beauty is when you can appreciate yourself. When you love yourself, that’s when you’re most beautiful.'
    // },
  ],
  partners: [
    {
      name: 'avada agency inc',
      image: 'clients_partner_1-200x202',
    },
    {
      name: 'avada law',
      image: 'clients_partner_2-200x200',
    },
    {
      name: 'avada vet',
      image: 'clients_partner_3-200x200',
    },
    {
      name: 'avada health',
      image: 'clients_partner_4-200x200',
    },
    {
      name: 'avada',
      image: 'clients_partner_5-200x200',
    },
    {
      name: 'the avada university',
      image: 'clients_partner_6-200x200',
    },
  ]
};

const callToAction = {
  title: 'start your free consultation',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
  button: 'contact us now',
}

export {hero, features, services, ourWork, plans, news, clients, callToAction};
