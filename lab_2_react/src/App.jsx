import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Languages from './components/Languages'
import Footer from './components/Footer'

const summary = [
  '.NET Backend Developer focused on designing and building modern backend applications with C# and ASP.NET Core Web API. Developed several production-style backend projects implementing Clean Architecture, Domain-Driven Design, Onion Architecture, CQRS, JWT authentication, Redis caching, RabbitMQ, MassTransit, Hangfire background processing, Docker containerization and automated testing.',
  'Skilled in designing RESTful APIs, working with Entity Framework Core and PostgreSQL, integrating external APIs and applying modern backend development practices including dependency injection, validation, logging, resilient HTTP communication and software architecture patterns.',
  'Proficient in AI-assisted development, leveraging AI coding agents and LLMs (Claude, DeepSeek, Cursor) to accelerate feature delivery, test generation and code refactoring while maintaining clean architecture standards.',
  "Currently pursuing a Bachelor's degree in Cybersecurity at Lviv Polytechnic National University and actively seeking a Trainee or Junior .NET Developer position.",
]

const skills = {
  'Programming Language': ['C#'],
  Backend: ['ASP.NET Core Web API', 'ASP.NET Core MVC', 'REST API'],
  'Architecture & Design': [
    'Clean Architecture',
    'Onion Architecture',
    'CQRS',
    'MediatR',
    'Domain-Driven Design',
    'Repository Pattern',
    'Unit of Work',
    'Specification Pattern',
    'Dependency Injection',
    'MassTransit',
  ],
  Databases: [
    'PostgreSQL',
    'MySQL',
    'Entity Framework Core',
    'Code First Migrations',
    'Dapper',
    'Explain Analyze & Transactions',
  ],
  'Authentication & Security': [
    'JWT Authentication',
    'Refresh Tokens',
    'ASP.NET Identity',
    'Role-Based Authorization',
    'HTTP-Only Cookies',
    'Optimistic Concurrency (RowVersion)',
  ],
  'Caching & Background Processing': ['Redis', 'Hangfire', 'RabbitMQ'],
  'Validation & Logging': ['FluentValidation', 'Serilog', 'Global Exception Handling'],
  Testing: ['xUnit', 'Moq', 'FluentAssertions', 'Unit Testing', 'Integration Testing'],
  'AI & Productivity': [
    'AI Coding Agents (Claude, DeepSeek, Cursor)',
    'AI-Assisted Development, Prompt Engineering for Code & Unit Test Generation',
    'AI Refactoring & Debugging',
  ],
  'DevOps & Tools': [
    'Docker',
    'Docker Compose',
    'Git',
    'GitHub',
    'Swagger / OpenAPI',
    'Visual Studio',
  ],
  Other: ['Polly', 'Telegram Bot API', 'Fondy Checkout API'],
}

const projects = [
  {
    title: 'Tattoo Salon Web API',
    stack:
      'ASP.NET Core Web API, Clean Architecture, CQRS, MediatR, PostgreSQL, Entity Framework Core, Redis, Hangfire, JWT Authentication, Docker, xUnit',
    description: 'REST API for automating tattoo salon business processes.',
    achievements: [
      'Designed and implemented REST API using Clean Architecture.',
      'Applied CQRS pattern with MediatR.',
      'Implemented JWT authentication with Refresh Tokens.',
      'Added Role-Based Authorization.',
      'Integrated Redis distributed caching.',
      'Developed Hangfire background jobs.',
      'Implemented PDF report generation and email notifications.',
      'Added optimistic concurrency control using RowVersion.',
      'Implemented FluentValidation and global exception handling.',
      'Wrote unit and integration tests.',
      'Dockerized the entire application using Docker Compose.',
    ],
    repoName: 'TattooSalon-API-',
    url: 'https://github.com/Dimab-b/TattooSalon-API-',
  },
  {
    title: 'Crypto Monitoring API & Telegram Bot',
    stack:
      'ASP.NET Core Web API, Onion Architecture, CQRS, MediatR, Redis, Hangfire, Polly, Telegram Bot API, Docker',
    description:
      'Backend service for automated cryptocurrency monitoring and Telegram notifications.',
    achievements: [
      'Built scalable backend using Onion Architecture.',
      'Applied CQRS with MediatR.',
      'Integrated Telegram Bot API.',
      'Implemented scheduled background jobs with Hangfire.',
      'Added Redis distributed cache.',
      'Implemented Polly Retry and Circuit Breaker policies.',
      'Dockerized the application using Docker Compose.',
      'Integrated external cryptocurrency API.',
    ],
    repoName: 'Crypto-Monitoring-TelegramBot-Api',
    url: 'https://github.com/Dimab-b/Crypto-Monitoring-TelegramBot-Api',
  },
  {
    title: 'Best Shop — ASP.NET Core MVC',
    stack:
      'ASP.NET Core MVC, Entity Framework Core, MySQL, ASP.NET Identity, Fondy API, Docker',
    description:
      'Educational e-commerce application built to learn server-side web development.',
    achievements: [
      'Implemented product catalog and shopping cart.',
      'Added ASP.NET Identity authentication.',
      'Integrated Fondy payment gateway.',
      'Worked with Session State.',
      'Used Entity Framework Core with MySQL.',
      'Dockerized the application.',
    ],
    repoName: 'E-Commerce-Shop-ASP.NET-Core-MVC-Docker-Fondy',
    url: 'https://github.com/Dimab-b/E-Commerce-Shop-ASP.NET-Core-MVC-Docker-Fondy',
  },
]

const education = {
  university: 'Lviv Polytechnic National University',
  degree: "Bachelor's Degree in Cybersecurity",
  period: '2025 – Present',
}

const languages = [
  'Ukrainian — Native',
  'English — Intermediate (B1)',
  'Russian — Professional Working Proficiency',
]

const additionalInfo = [
  'Looking for a Trainee or Junior ASP.NET Core Backend Developer position.',
  'Available for both remote and on-site work in Lviv.',
  'Ready to complete a technical assessment.',
  'Actively improving knowledge of ASP.NET Core ecosystem, Git, SQL and software architecture.',
]

function App() {
  return (
    <div className="min-h-screen bg-slate-200/60 text-slate-700">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:grid lg:grid-cols-[340px_1fr] lg:items-start lg:gap-6 lg:py-10">
        <aside className="rounded-2xl bg-slate-900 p-6 shadow-xl sm:p-7">
          <Header />
          <Skills skills={skills} />
          <Languages languages={languages} />
        </aside>
        <main className="mt-4 space-y-4 lg:mt-0">
          <Summary paragraphs={summary} />
          <Projects projects={projects} />
          <Education education={education} />
          <Footer additionalInfo={additionalInfo} />
        </main>
      </div>
    </div>
  )
}

export default App
