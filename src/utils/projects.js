import greendrive from '../assets/projects-img/greendrive.png'
import easybank from '../assets/projects-img/easybank.png'
import adviceGenerator from '../assets/projects-img/adviceGenerator.png'
import tipCalculator from '../assets/projects-img/tipCalculator.png'
import cinetag from '../assets/projects-img/cinetag.png'
import productPage from '../assets/projects-img/product-page.png'
import pokedex from '../assets/projects-img/pokedex.png'
import instagram from '../assets/projects-img/instagram.png'
import i18n from '../i18n' // ajuste o caminho se necessário

export const getProjects = () => [
  {
    name: 'GreenDrive',
    description: i18n.t('easyBankDescription'),
    img: greendrive,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'personal', title: i18n.t('portfolioPersonal') },
    ],
    github: 'https://github.com/Abner-Ferreira/EasyBank',
    liveProject: 'https://abner-easy-bank.vercel.app/',
  },
  {
    name: 'Easy Bank',
    description: i18n.t('easyBankDescription'),
    img: easybank,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'personal', title: i18n.t('portfolioPersonal') },
    ],
    github: 'https://github.com/Abner-Ferreira/EasyBank',
    liveProject: 'https://abner-easy-bank.vercel.app/',
  },
  {
    name: 'Advice Generator',
    description: i18n.t('adviceDescription'),
    img: adviceGenerator,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'personal', title: i18n.t('portfolioPersonal') },
    ],
    github: 'https://github.com/Abner-Ferreira/AdviceGenerator',
    liveProject: 'https://advice-generator-abner.vercel.app/',
  },
  {
    name: 'Tip Calculator',
    description: i18n.t('tipCalculatorDescription'),
    img: tipCalculator,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'personal', title: i18n.t('portfolioPersonal') },
    ],
    github: 'https://github.com/Abner-Ferreira/Tip-calculator/tree/main/tip',
    liveProject: 'https://tip-calculator-abner.vercel.app/',
  },
  {
    name: 'Cinetag',
    description: i18n.t('cinetagDescription'),
    img: cinetag,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'study', title: i18n.t('portfolioStudy') },
    ],
    github: 'https://github.com/Abner-Ferreira/cinetag',
    liveProject: 'https://cinetag-cyan.vercel.app/',
  },
  {
    name: 'Product page',
    description: i18n.t('productPageDescription'),
    img: productPage,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'personal', title: i18n.t('portfolioPersonal') },
    ],
    github: 'https://github.com/Abner-Ferreira/product-page',
    liveProject: 'https://corinthians-shirt-product-page.vercel.app/',
  },
  {
    name: 'Pokedex',
    description: i18n.t('pokedexDescription'),
    img: pokedex,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'study', title: i18n.t('portfolioStudy') },
    ],
    github: 'https://github.com/Abner-Ferreira/pokedex',
    liveProject: 'https://abner-pokedex.vercel.app/',
  },
  {
    name: 'Login Instagram',
    description: i18n.t('loginInstagramDescription'),
    img: instagram,
    titleAccessibility: i18n.t('projectComplete'),
    status: [
      { name: 'complete', title: i18n.t('portfolioComplete') },
      { name: 'personal', title: i18n.t('portfolioPersonal') },
    ],
    github: 'https://github.com/Abner-Ferreira/instagram',
    liveProject: 'https://login-intagram-non-responsive.vercel.app/',
  },
]
