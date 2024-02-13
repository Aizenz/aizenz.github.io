/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hua Capital',
    position: 'Investment Research Intern',
    url: 'https://eng.huacapital.com/',
    startDate: '2023-02-01',
    endDate: '2023-4-30',
    summary: 'summary',
    highlights: [
      'Played a key role in organizing 7 high-profile investor meetings with top neo-energy industry leaders, significantly contributing topotential multi-million dollar investment discussions.',
      'Conducted comprehensive evaluations of business plans, influencing investment decisions through detailed analysis of technologyroadmaps, market capacity assessments, competitive strategy reviews, and mass production feasibility studies.',
      'Demonstrated strong analytical and interpersonal skills, facilitating effective communication between investors and entrepreneurs,which led to enhanced understanding and collaboration',
    ],
  },
  {
    name: 'Ablian Capital LP,',
    position: 'Quantitative Equity Research Intern',
    url: 'http://www.abeliantec.com/',
    startDate: 'time',
    summary: 'summary',
    highlights: [
      'Conducted extensive research on chemicals, electrical, metals, and neo-energy sectors, analyzing over 200 listed companies andformed over 20 reports with data visualization as a key contributor to the quantamental research team.',
      'Delivered over 20 presentations on qundamental investment frameworks, contributing to the team’s understanding and strategies invarious sectors.',
      'Developed sector indicator manuals using MySQL and implemented a Python-based monitoring tool and trading signal generator,which enhanced investment decision-making processes.',
      'Demonstrated the effectiveness of research strategies through backtesting, achieving a 58% hit rate and a 1.6% annual increase inportfolio return since 2016.',
      'Spearheaded the design of the company’s database for quantamental investments, managing data ETL processes for over 50GB ofdata from vaious unstructured data sources including PDF, EXCEL, graphs using Python and SQL.',
      'Created a Flask and Pyecharts-based data visualization website, enabling real-time monitoring of dynamic sector trends.',
    ],
  },
];

export default work;
