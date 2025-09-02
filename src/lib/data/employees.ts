export type Employee = {
  id: number
  name: string
  email: string
  skills: string[]
  experience_years: number
  projects: string[]
  availability: 'available' | 'busy' | 'in 2 weeks'
}

export const employees: Employee[] = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 2,
    "name": "Michael Rodriguez",
    "email": "michael.rodriguez@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 3,
    "name": "Emily Williams",
    "email": "emily.williams@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 4,
    "name": "David Brown",
    "email": "david.brown@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 5,
    "name": "Sophia Miller",
    "email": "sophia.miller@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 6,
    "name": "Daniel Jones",
    "email": "daniel.jones@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 7,
    "name": "Olivia Garcia",
    "email": "olivia.garcia@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 8,
    "name": "James Martinez",
    "email": "james.martinez@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 9,
    "name": "Isabella Davis",
    "email": "isabella.davis@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 10,
    "name": "Liam Wilson",
    "email": "liam.wilson@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 11,
    "name": "Ava Anderson",
    "email": "ava.anderson@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 12,
    "name": "Noah Taylor",
    "email": "noah.taylor@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 13,
    "name": "Mia Thomas",
    "email": "mia.thomas@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 14,
    "name": "Lucas Moore",
    "email": "lucas.moore@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 15,
    "name": "Charlotte Jackson",
    "email": "charlotte.jackson@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 16,
    "name": "Henry White",
    "email": "henry.white@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 17,
    "name": "Amelia Harris",
    "email": "amelia.harris@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 18,
    "name": "Benjamin Martin",
    "email": "benjamin.martin@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 19,
    "name": "Harper Thompson",
    "email": "harper.thompson@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 20,
    "name": "Elijah Lee",
    "email": "elijah.lee@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 21,
    "name": "Evelyn Clark",
    "email": "evelyn.clark@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 22,
    "name": "Logan Lewis",
    "email": "logan.lewis@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 23,
    "name": "Abigail Walker",
    "email": "abigail.walker@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 24,
    "name": "Alexander Hall",
    "email": "alexander.hall@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 25,
    "name": "Sofia Allen",
    "email": "sofia.allen@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 26,
    "name": "Jackson Young",
    "email": "jackson.young@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 27,
    "name": "Madison Hernandez",
    "email": "madison.hernandez@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 28,
    "name": "Aiden King",
    "email": "aiden.king@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 29,
    "name": "Chloe Wright",
    "email": "chloe.wright@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 30,
    "name": "Sebastian Lopez",
    "email": "sebastian.lopez@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 31,
    "name": "Grace Hill",
    "email": "grace.hill@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 32,
    "name": "Jack Scott",
    "email": "jack.scott@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 33,
    "name": "Lily Green",
    "email": "lily.green@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 34,
    "name": "Owen Adams",
    "email": "owen.adams@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 35,
    "name": "Zoe Baker",
    "email": "zoe.baker@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 36,
    "name": "Carter Nelson",
    "email": "carter.nelson@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 37,
    "name": "Penelope Carter",
    "email": "penelope.carter@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 38,
    "name": "Jayden Mitchell",
    "email": "jayden.mitchell@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 39,
    "name": "Riley Perez",
    "email": "riley.perez@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 40,
    "name": "Luke Roberts",
    "email": "luke.roberts@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 41,
    "name": "Aria Turner",
    "email": "aria.turner@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 42,
    "name": "Gabriel Phillips",
    "email": "gabriel.phillips@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 43,
    "name": "Nora Campbell",
    "email": "nora.campbell@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 44,
    "name": "Leo Parker",
    "email": "leo.parker@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 45,
    "name": "Layla Evans",
    "email": "layla.evans@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 46,
    "name": "Wyatt Edwards",
    "email": "wyatt.edwards@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 47,
    "name": "Hannah Collins",
    "email": "hannah.collins@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 48,
    "name": "Isaac Stewart",
    "email": "isaac.stewart@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 49,
    "name": "Stella Sanchez",
    "email": "stella.sanchez@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 50,
    "name": "Julian Morris",
    "email": "julian.morris@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 51,
    "name": "Genesis Washington",
    "email": "genesis.washington@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 52,
    "name": "Damian Butler",
    "email": "damian.butler@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 53,
    "name": "Angelina Simmons",
    "email": "angelina.simmons@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 54,
    "name": "Leo Foster",
    "email": "leo.foster@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 55,
    "name": "Maya Gonzales",
    "email": "maya.gonzales@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 56,
    "name": "Adrian Bryant",
    "email": "adrian.bryant@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 57,
    "name": "Naomi Alexander",
    "email": "naomi.alexander@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 58,
    "name": "Jeremiah Russell",
    "email": "jeremiah.russell@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 59,
    "name": "Aubrey Griffin",
    "email": "aubrey.griffin@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 60,
    "name": "Xavier Diaz",
    "email": "xavier.diaz@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 61,
    "name": "Camila Hayes",
    "email": "camila.hayes@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 62,
    "name": "Dominic Myers",
    "email": "dominic.myers@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 63,
    "name": "Ariana Ford",
    "email": "ariana.ford@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 64,
    "name": "Jaxon Hamilton",
    "email": "jaxon.hamilton@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 65,
    "name": "Gianna Graham",
    "email": "gianna.graham@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 66,
    "name": "Austin Sullivan",
    "email": "austin.sullivan@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 67,
    "name": "Valentina Wallace",
    "email": "valentina.wallace@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 68,
    "name": "Jose Woods",
    "email": "jose.woods@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 69,
    "name": "Alice Cole",
    "email": "alice.cole@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 70,
    "name": "Elias West",
    "email": "elias.west@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 71,
    "name": "Eliana Jordan",
    "email": "eliana.jordan@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 72,
    "name": "Kai Owens",
    "email": "kai.owens@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 73,
    "name": "Clara Reynolds",
    "email": "clara.reynolds@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 74,
    "name": "Axel Fisher",
    "email": "axel.fisher@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 75,
    "name": "Jasmine Ellis",
    "email": "jasmine.ellis@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 76,
    "name": "Everett Harrison",
    "email": "everett.harrison@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 77,
    "name": "Cora Gibson",
    "email": "cora.gibson@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 78,
    "name": "Miles McDonald",
    "email": "miles.mcdonald@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 79,
    "name": "Josie Cruz",
    "email": "josie.cruz@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 80,
    "name": "Robert Marshall",
    "email": "robert.marshall@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 81,
    "name": "Nova Ortiz",
    "email": "nova.ortiz@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 82,
    "name": "Parker Gomez",
    "email": "parker.gomez@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 83,
    "name": "Amara Murray",
    "email": "amara.murray@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 84,
    "name": "James Freeman",
    "email": "james.freeman@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 85,
    "name": "Willow Wells",
    "email": "willow.wells@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 86,
    "name": "Beau Webb",
    "email": "beau.webb@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 87,
    "name": "Ivy Simpson",
    "email": "ivy.simpson@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 88,
    "name": "Weston Stevens",
    "email": "weston.stevens@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 89,
    "name": "Athena Tucker",
    "email": "athena.tucker@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 90,
    "name": "Jason Porter",
    "email": "jason.porter@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 91,
    "name": "Emilia Hunter",
    "email": "emilia.hunter@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 92,
    "name": "Xander Hicks",
    "email": "xander.hicks@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 93,
    "name": "Leilani Crawford",
    "email": "leilani.crawford@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 94,
    "name": "Theo Henry",
    "email": "theo.henry@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 95,
    "name": "Isla Boyd",
    "email": "isla.boyd@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 96,
    "name": "Mateo Mason",
    "email": "mateo.mason@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 97,
    "name": "Amaya Morales",
    "email": "amaya.morales@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 98,
    "name": "Oscar Kennedy",
    "email": "oscar.kennedy@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 99,
    "name": "Valeria Warren",
    "email": "valeria.warren@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 100,
    "name": "Ezra Dixon",
    "email": "ezra.dixon@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 101,
    "name": "Fatima Ramos",
    "email": "fatima.ramos@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 102,
    "name": "Silas Reyes",
    "email": "silas.reyes@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 103,
    "name": "Lila Burns",
    "email": "lila.burns@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 104,
    "name": "Arthur Gordon",
    "email": "arthur.gordon@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 105,
    "name": "Adeline Shaw",
    "email": "adeline.shaw@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 106,
    "name": "Abel Holmes",
    "email": "abel.holmes@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 107,
    "name": "Daniela Rice",
    "email": "daniela.rice@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 108,
    "name": "Milo Robertson",
    "email": "milo.robertson@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 109,
    "name": "Sawyer Hunt",
    "email": "sawyer.hunt@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 110,
    "name": "Kingston Black",
    "email": "kingston.black@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 111,
    "name": "Eloise Daniels",
    "email": "eloise.daniels@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 112,
    "name": "Matias Palmer",
    "email": "matias.palmer@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 113,
    "name": "Londyn Mills",
    "email": "londyn.mills@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 114,
    "name": "Thiago Nichols",
    "email": "thiago.nichols@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 115,
    "name": "Lucia Grant",
    "email": "lucia.grant@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 116,
    "name": "Jayce Knight",
    "email": "jayce.knight@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 117,
    "name": "Juliette Snyder",
    "email": "juliette.snyder@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 118,
    "name": "Kyler Kelley",
    "email": "kyler.kelley@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 119,
    "name": "Carmen Howard",
    "email": "carmen.howard@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 120,
    "name": "Jax Ferguson",
    "email": "jax.ferguson@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 121,
    "name": "Magnolia Stone",
    "email": "magnolia.stone@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 122,
    "name": "Atlas Hawkins",
    "email": "atlas.hawkins@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 123,
    "name": "Brielle Dunn",
    "email": "brielle.dunn@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 124,
    "name": "Callum Perkins",
    "email": "callum.perkins@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 125,
    "name": "Remi Hudson",
    "email": "remi.hudson@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 126,
    "name": "Emiliano Spencer",
    "email": "emiliano.spencer@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 127,
    "name": "Phoenix Gardner",
    "email": "phoenix.gardner@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 128,
    "name": "Gael Stephens",
    "email": "gael.stephens@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 129,
    "name": "Celeste Payne",
    "email": "celeste.payne@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 130,
    "name": "Ace Pierce",
    "email": "ace.pierce@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 131,
    "name": "Juniper West",
    "email": "juniper.west@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 132,
    "name": "Enzo Johnston",
    "email": "enzo.johnston@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 133,
    "name": "Winter Cunningham",
    "email": "winter.cunningham@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 134,
    "name": "Apollo Ray",
    "email": "apollo.ray@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 135,
    "name": "Journey Lane",
    "email": "journey.lane@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 136,
    "name": "Crew Lawson",
    "email": "crew.lawson@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 137,
    "name": "Haven Fields",
    "email": "haven.fields@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 138,
    "name": "Cody Meyer",
    "email": "cody.meyer@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 139,
    "name": "Kenzie Riley",
    "email": "kenzie.riley@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 140,
    "name": "Nash Gilbert",
    "email": "nash.gilbert@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 141,
    "name": "Kali Fox",
    "email": "kali.fox@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 142,
    "name": "Kade Carpenter",
    "email": "kade.carpenter@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 143,
    "name": "Alani Lawrence",
    "email": "alani.lawrence@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 144,
    "name": "Lane Patterson",
    "email": "lane.patterson@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 145,
    "name": "Sloane Washington",
    "email": "sloane.washington@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 146,
    "name": "Rowan Butler",
    "email": "rowan.butler@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 147,
    "name": "Lainey Simmons",
    "email": "lainey.simmons@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 148,
    "name": "Zane Foster",
    "email": "zane.foster@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 149,
    "name": "Amira Gonzales",
    "email": "amira.gonzales@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 150,
    "name": "Legend Bryant",
    "email": "legend.bryant@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 151,
    "name": "Sarai Alexander",
    "email": "sarai.alexander@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 152,
    "name": "Bodhi Russell",
    "email": "bodhi.russell@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 153,
    "name": "Catalina Griffin",
    "email": "catalina.griffin@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 154,
    "name": "Saint Diaz",
    "email": "saint.diaz@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 155,
    "name": "Alina Hayes",
    "email": "alina.hayes@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 156,
    "name": "Zayn Myers",
    "email": "zayn.myers@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 157,
    "name": "Mckenna Ford",
    "email": "mckenna.ford@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 158,
    "name": "Armando Hamilton",
    "email": "armando.hamilton@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 159,
    "name": "Aniyah Graham",
    "email": "aniyah.graham@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 160,
    "name": "Princeton Sullivan",
    "email": "princeton.sullivan@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 161,
    "name": "Daleyza Wallace",
    "email": "daleyza.wallace@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 162,
    "name": "Messiah Woods",
    "email": "messiah.woods@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 163,
    "name": "Rosalie Cole",
    "email": "rosalie.cole@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 164,
    "name": "Major West",
    "email": "major.west@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 165,
    "name": "Linda Jordan",
    "email": "linda.jordan@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 166,
    "name": "Kason Owens",
    "email": "kason.owens@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 167,
    "name": "Patricia Reynolds",
    "email": "patricia.reynolds@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 168,
    "name": "Kairo Fisher",
    "email": "kairo.fisher@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 169,
    "name": "Susan Ellis",
    "email": "susan.ellis@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 170,
    "name": "Titus Harrison",
    "email": "titus.harrison@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 171,
    "name": "Jessica Gibson",
    "email": "jessica.gibson@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 172,
    "name": "Cassius McDonald",
    "email": "cassius.mcdonald@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 173,
    "name": "Sarah Cruz",
    "email": "sarah.cruz@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 174,
    "name": "Anderson Marshall",
    "email": "anderson.marshall@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 175,
    "name": "Karen Ortiz",
    "email": "karen.ortiz@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 176,
    "name": "Warren Gomez",
    "email": "warren.gomez@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 177,
    "name": "Nancy Murray",
    "email": "nancy.murray@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 178,
    "name": "Karson Freeman",
    "email": "karson.freeman@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 179,
    "name": "Lisa Wells",
    "email": "lisa.wells@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 180,
    "name": "Finley Webb",
    "email": "finley.webb@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 181,
    "name": "Betty Simpson",
    "email": "betty.simpson@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 182,
    "name": "Zeke Stevens",
    "email": "zeke.stevens@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 183,
    "name": "Helen Tucker",
    "email": "helen.tucker@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 184,
    "name": "Santino Porter",
    "email": "santino.porter@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 185,
    "name": "Sandra Hunter",
    "email": "sandra.hunter@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 186,
    "name": "Kian Hicks",
    "email": "kian.hicks@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 187,
    "name": "Donna Crawford",
    "email": "donna.crawford@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 188,
    "name": "Maximus Henry",
    "email": "maximus.henry@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 189,
    "name": "Carol Boyd",
    "email": "carol.boyd@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 190,
    "name": "Lennox Mason",
    "email": "lennox.mason@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 191,
    "name": "Ruth Morales",
    "email": "ruth.morales@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 192,
    "name": "Khalid Kennedy",
    "email": "khalid.kennedy@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 193,
    "name": "Sharon Warren",
    "email": "sharon.warren@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 194,
    "name": "Ronan Dixon",
    "email": "ronan.dixon@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 195,
    "name": "Michelle Ramos",
    "email": "michelle.ramos@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 196,
    "name": "Alonzo Reyes",
    "email": "alonzo.reyes@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 197,
    "name": "Laura Burns",
    "email": "laura.burns@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 198,
    "name": "Kendrick Gordon",
    "email": "kendrick.gordon@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 199,
    "name": "Kimberly Shaw",
    "email": "kimberly.shaw@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 200,
    "name": " Memphis Holmes",
    "email": "memphis.holmes@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 201,
    "name": "Amanda Rice",
    "email": "amanda.rice@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 202,
    "name": "Jensen Robertson",
    "email": "jensen.robertson@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 203,
    "name": "Deborah Hunt",
    "email": "deborah.hunt@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 204,
    "name": "Jericho Black",
    "email": "jericho.black@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 205,
    "name": "Cynthia Daniels",
    "email": "cynthia.daniels@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 206,
    "name": "Kaysen Palmer",
    "email": "kaysen.palmer@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 207,
    "name": "Kathleen Mills",
    "email": "kathleen.mills@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 208,
    "name": "Jedidiah Nichols",
    "email": "jedidiah.nichols@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 209,
    "name": "Barbara Grant",
    "email": "barbara.grant@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 210,
    "name": "Harley Knight",
    "email": "harley.knight@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 211,
    "name": "Amy Snyder",
    "email": "amy.snyder@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 212,
    "name": "Aziel Kelley",
    "email": "aziel.kelley@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 213,
    "name": "Shirley Howard",
    "email": "shirley.howard@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 214,
    "name": "Boston Ferguson",
    "email": "boston.ferguson@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 215,
    "name": "Melissa Stone",
    "email": "melissa.stone@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 216,
    "name": "Cain Hawkins",
    "email": "cain.hawkins@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 217,
    "name": "Anna Dunn",
    "email": "anna.dunn@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 218,
    "name": "Nikolai Perkins",
    "email": "nikolai.perkins@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 219,
    "name": "Brenda Hudson",
    "email": "brenda.hudson@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 220,
    "name": "Yusuf Spencer",
    "email": "yusuf.spencer@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 221,
    "name": "Pamela Gardner",
    "email": "pamela.gardner@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 222,
    "name": "Ariel Stephens",
    "email": "ariel.stephens@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 223,
    "name": "Virginia Payne",
    "email": "virginia.payne@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 224,
    "name": "Makai Pierce",
    "email": "makai.pierce@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 225,
    "name": "Katherine West",
    "email": "katherine.west@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 226,
    "name": "Roy Johnston",
    "email": "roy.johnston@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 227,
    "name": "Debra Cunningham",
    "email": "debra.cunningham@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 228,
    "name": "Dio Ray",
    "email": "dio.ray@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 229,
    "name": "Christine Lane",
    "email": "christine.lane@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 230,
    "name": "Jadiel Lawson",
    "email": "jadiel.lawson@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 231,
    "name": "Janet Fields",
    "email": "janet.fields@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 232,
    "name": "Koda Meyer",
    "email": "koda.meyer@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 233,
    "name": "Maria Riley",
    "email": "maria.riley@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 234,
    "name": "Saint Gilbert",
    "email": "saint.gilbert@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 235,
    "name": "Rachel Fox",
    "email": "rachel.fox@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 236,
    "name": "Calum Carpenter",
    "email": "calum.carpenter@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 237,
    "name": "Catherine Lawrence",
    "email": "catherine.lawrence@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 238,
    "name": "Franco Patterson",
    "email": "franco.patterson@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 239,
    "name": "Carolyn Washington",
    "email": "carolyn.washington@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 240,
    "name": "Jaxx Butler",
    "email": "jaxx.butler@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 241,
    "name": "Samantha Simmons",
    "email": "samantha.simmons@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 242,
    "name": "Benicio Foster",
    "email": "benicio.foster@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 243,
    "name": "Diane Gonzales",
    "email": "diane.gonzales@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 244,
    "name": "Zakai Bryant",
    "email": "zakai.bryant@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 245,
    "name": "Alice Alexander",
    "email": "alice.alexander@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 246,
    "name": "Semaj Russell",
    "email": "semaj.russell@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 247,
    "name": "Frances Griffin",
    "email": "frances.griffin@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 248,
    "name": "Marvin Diaz",
    "email": "marvin.diaz@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 249,
    "name": "Beverly Hayes",
    "email": "beverly.hayes@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 250,
    "name": "Case Myers",
    "email": "case.myers@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 251,
    "name": "Joan Ford",
    "email": "joan.ford@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 252,
    "name": "Kasen Hamilton",
    "email": "kasen.hamilton@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 253,
    "name": "Teresa Graham",
    "email": "teresa.graham@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 254,
    "name": "Cohen Sullivan",
    "email": "cohen.sullivan@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 255,
    "name": "Ann Wallace",
    "email": "ann.wallace@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 256,
    "name": "Corbin Woods",
    "email": "corbin.woods@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 257,
    "name": "Denise Cole",
    "email": "denise.cole@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 258,
    "name": "Leroy West",
    "email": "leroy.west@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 259,
    "name": "Jean Jordan",
    "email": "jean.jordan@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 260,
    "name": "Cory Owens",
    "email": "cory.owens@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 261,
    "name": "Julie Reynolds",
    "email": "julie.reynolds@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 262,
    "name": "Clayton Fisher",
    "email": "clayton.fisher@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 263,
    "name": "Judith Ellis",
    "email": "judith.ellis@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 264,
    "name": "Davis Harrison",
    "email": "davis.harrison@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 265,
    "name": "Rose Gibson",
    "email": "rose.gibson@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 266,
    "name": "Rodney McDonald",
    "email": "rodney.mcdonald@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 267,
    "name": "Janice Cruz",
    "email": "janice.cruz@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 268,
    "name": "Alvin Marshall",
    "email": "alvin.marshall@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 269,
    "name": "Kelly Ortiz",
    "email": "kelly.ortiz@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 270,
    "name": "Eugene Gomez",
    "email": "eugene.gomez@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 271,
    "name": "Heather Murray",
    "email": "heather.murray@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 272,
    "name": "Willie Freeman",
    "email": "willie.freeman@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 273,
    "name": "Cheryl Wells",
    "email": "cheryl.wells@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 274,
    "name": "Gabriel Webb",
    "email": "gabriel.webb@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 275,
    "name": "Mildred Simpson",
    "email": "mildred.simpson@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 276,
    "name": "Logan Stevens",
    "email": "logan.stevens@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 277,
    "name": "Doris Tucker",
    "email": "doris.tucker@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 278,
    "name": "Dylan Porter",
    "email": "dylan.porter@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 279,
    "name": "Megan Hunter",
    "email": "megan.hunter@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 280,
    "name": "Noah Hicks",
    "email": "noah.hicks@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 281,
    "name": "Jacqueline Crawford",
    "email": "jacqueline.crawford@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 282,
    "name": "Jesse Henry",
    "email": "jesse.henry@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 283,
    "name": "Martha Boyd",
    "email": "martha.boyd@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 284,
    "name": "Bryan Mason",
    "email": "bryan.mason@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 285,
    "name": "Gloria Morales",
    "email": "gloria.morales@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 286,
    "name": "Billy Kennedy",
    "email": "billy.kennedy@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 287,
    "name": "Andrea Warren",
    "email": "andrea.warren@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 288,
    "name": "Alan Dixon",
    "email": "alan.dixon@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 289,
    "name": "Danielle Ramos",
    "email": "danielle.ramos@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 290,
    "name": "Bruce Reyes",
    "email": "bruce.reyes@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 291,
    "name": "Denise Burns",
    "email": "denise.burns@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 292,
    "name": "Arthur Gordon",
    "email": "arthur.gordon@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 293,
    "name": "Amber Shaw",
    "email": "amber.shaw@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 294,
    "name": "Lawrence Holmes",
    "email": "lawrence.holmes@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 295,
    "name": "Diana Rice",
    "email": "diana.rice@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 296,
    "name": "Randy Robertson",
    "email": "randy.robertson@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 297,
    "name": "Brittany Hunt",
    "email": "brittany.hunt@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 298,
    "name": "Harry Black",
    "email": "harry.black@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 299,
    "name": "Lori Daniels",
    "email": "lori.daniels@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 300,
    "name": "Carlos Palmer",
    "email": "carlos.palmer@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 301,
    "name": "Olivia Mills",
    "email": "olivia.mills@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 302,
    "name": "Albert Nichols",
    "email": "albert.nichols@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 303,
    "name": "Ruby Grant",
    "email": "ruby.grant@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 304,
    "name": "Clarence Knight",
    "email": "clarence.knight@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 305,
    "name": "Tiffany Snyder",
    "email": "tiffany.snyder@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 306,
    "name": "Johnny Kelley",
    "email": "johnny.kelley@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 307,
    "name": "Christina Howard",
    "email": "christina.howard@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 308,
    "name": "Roy Ferguson",
    "email": "roy.ferguson@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 309,
    "name": "Wanda Stone",
    "email": "wanda.stone@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 310,
    "name": "Earl Hawkins",
    "email": "earl.hawkins@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 311,
    "name": "Darlene Dunn",
    "email": "darlene.dunn@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 312,
    "name": "Wayne Perkins",
    "email": "wayne.perkins@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 313,
    "name": "Phyllis Hudson",
    "email": "phyllis.hudson@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 314,
    "name": "Jack Spencer",
    "email": "jack.spencer@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 315,
    "name": "Annette Gardner",
    "email": "annette.gardner@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 316,
    "name": "Jacob Stephens",
    "email": "jacob.stephens@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 317,
    "name": "Marion Payne",
    "email": "marion.payne@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 318,
    "name": "Terry Pierce",
    "email": "terry.pierce@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 319,
    "name": "Yvonne West",
    "email": "yvonne.west@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 320,
    "name": "Henry Johnston",
    "email": "henry.johnston@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 321,
    "name": "Sylvia Cunningham",
    "email": "sylvia.cunningham@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 322,
    "name": "Austin Ray",
    "email": "austin.ray@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 323,
    "name": "Jose Lane",
    "email": "jose.lane@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 324,
    "name": "Judith Lawson",
    "email": "judith.lawson@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 325,
    "name": "Alfred Fields",
    "email": "alfred.fields@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 326,
    "name": "Evelyn Meyer",
    "email": "evelyn.meyer@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 327,
    "name": "Carl Riley",
    "email": "carl.riley@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 328,
    "name": "Gladys Gilbert",
    "email": "gladys.gilbert@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 329,
    "name": "David Fox",
    "email": "david.fox@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 330,
    "name": "Edna Carpenter",
    "email": "edna.carpenter@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 331,
    "name": "Arthur Lawrence",
    "email": "arthur.lawrence@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 332,
    "name": "Beatrice Patterson",
    "email": "beatrice.patterson@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 333,
    "name": "Ray Washington",
    "email": "ray.washington@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 334,
    "name": "Leona Butler",
    "email": "leona.butler@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 335,
    "name": "Francis Simmons",
    "email": "francis.simmons@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 336,
    "name": "Paul Foster",
    "email": "paul.foster@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 337,
    "name": "Rosa Gonzales",
    "email": "rosa.gonzales@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 338,
    "name": "Roger Bryant",
    "email": "roger.bryant@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 339,
    "name": "Clara Alexander",
    "email": "clara.alexander@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 340,
    "name": "Dennis Russell",
    "email": "dennis.russell@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 341,
    "name": "Lucille Griffin",
    "email": "lucille.griffin@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 342,
    "name": "Jerry Diaz",
    "email": "jerry.diaz@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 343,
    "name": "Jeanette Hayes",
    "email": "jeanette.hayes@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 344,
    "name": "Walter Myers",
    "email": "walter.myers@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 345,
    "name": "Esther Ford",
    "email": "esther.ford@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 346,
    "name": "Patrick Hamilton",
    "email": "patrick.hamilton@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 347,
    "name": "Irene Graham",
    "email": "irene.graham@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 348,
    "name": "Harold Sullivan",
    "email": "harold.sullivan@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 349,
    "name": "Marie Wallace",
    "email": "marie.wallace@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 350,
    "name": "Douglas Woods",
    "email": "douglas.woods@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 351,
    "name": "Jennie Cole",
    "email": "jennie.cole@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 352,
    "name": "Peter West",
    "email": "peter.west@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 353,
    "name": "Viola Jordan",
    "email": "viola.jordan@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 354,
    "name": "Frank Owens",
    "email": "frank.owens@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 355,
    "name": "Stella Reynolds",
    "email": "stella.reynolds@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 356,
    "name": "Scott Fisher",
    "email": "scott.fisher@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 357,
    "name": "Victoria Ellis",
    "email": "victoria.ellis@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 358,
    "name": "Eric Harrison",
    "email": "eric.harrison@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 359,
    "name": "Eleanor Gibson",
    "email": "eleanor.gibson@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 360,
    "name": "Stephen McDonald",
    "email": "stephen.mcdonald@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 361,
    "name": "Lucy Cruz",
    "email": "lucy.cruz@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 362,
    "name": "Andrew Marshall",
    "email": "andrew.marshall@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 363,
    "name": "Ruby Ortiz",
    "email": "ruby.ortiz@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 364,
    "name": "Joseph Gomez",
    "email": "joseph.gomez@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 365,
    "name": "Laura Murray",
    "email": "laura.murray@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 366,
    "name": "Joshua Freeman",
    "email": "joshua.freeman@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 367,
    "name": "Eva Wells",
    "email": "eva.wells@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 368,
    "name": "Justin Webb",
    "email": "justin.webb@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 369,
    "name": "Clara Simpson",
    "email": "clara.simpson@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 370,
    "name": "William Stevens",
    "email": "william.stevens@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 371,
    "name": "Madison Tucker",
    "email": "madison.tucker@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 372,
    "name": "James Porter",
    "email": "james.porter@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 373,
    "name": "Alice Hunter",
    "email": "alice.hunter@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 374,
    "name": "John Hicks",
    "email": "john.hicks@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 375,
    "name": "Patricia Crawford",
    "email": "patricia.crawford@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 376,
    "name": "Robert Henry",
    "email": "robert.henry@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 377,
    "name": "Jennifer Boyd",
    "email": "jennifer.boyd@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 378,
    "name": "Michael Mason",
    "email": "michael.mason@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 379,
    "name": "Linda Morales",
    "email": "linda.morales@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 380,
    "name": "William Kennedy",
    "email": "william.kennedy@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 381,
    "name": "Elizabeth Warren",
    "email": "elizabeth.warren@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 382,
    "name": "David Dixon",
    "email": "david.dixon@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 383,
    "name": "Barbara Ramos",
    "email": "barbara.ramos@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 384,
    "name": "Richard Reyes",
    "email": "richard.reyes@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 385,
    "name": "Susan Burns",
    "email": "susan.burns@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 386,
    "name": "Joseph Gordon",
    "email": "joseph.gordon@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 387,
    "name": "Jessica Shaw",
    "email": "jessica.shaw@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 388,
    "name": "Thomas Holmes",
    "email": "thomas.holmes@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 389,
    "name": "Sarah Rice",
    "email": "sarah.rice@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 390,
    "name": "Charles Robertson",
    "email": "charles.robertson@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 391,
    "name": "Karen Hunt",
    "email": "karen.hunt@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 392,
    "name": "Christopher Black",
    "email": "christopher.black@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 393,
    "name": "Nancy Daniels",
    "email": "nancy.daniels@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 394,
    "name": "Daniel Palmer",
    "email": "daniel.palmer@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 395,
    "name": "Lisa Mills",
    "email": "lisa.mills@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 396,
    "name": "Matthew Nichols",
    "email": "matthew.nichols@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 397,
    "name": "Betty Grant",
    "email": "betty.grant@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 398,
    "name": "Anthony Knight",
    "email": "anthony.knight@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 399,
    "name": "Dorothy Snyder",
    "email": "dorothy.snyder@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 400,
    "name": "Mark Kelley",
    "email": "mark.kelley@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 401,
    "name": "Sandra Howard",
    "email": "sandra.howard@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 402,
    "name": "Paul Ferguson",
    "email": "paul.ferguson@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 403,
    "name": "Ashley Stone",
    "email": "ashley.stone@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 404,
    "name": "Steven Hawkins",
    "email": "steven.hawkins@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 405,
    "name": "Kimberly Dunn",
    "email": "kimberly.dunn@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 406,
    "name": "Andrew Perkins",
    "email": "andrew.perkins@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 407,
    "name": "Donna Hudson",
    "email": "donna.hudson@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 408,
    "name": "Kenneth Spencer",
    "email": "kenneth.spencer@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 409,
    "name": "Emily Gardner",
    "email": "emily.gardner@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 410,
    "name": "George Stephens",
    "email": "george.stephens@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 411,
    "name": "Nicole Payne",
    "email": "nicole.payne@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 412,
    "name": "Edward Pierce",
    "email": "edward.pierce@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 413,
    "name": "Michelle West",
    "email": "michelle.west@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 414,
    "name": "Ronald Johnston",
    "email": "ronald.johnston@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 415,
    "name": "Amanda Cunningham",
    "email": "amanda.cunningham@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 416,
    "name": "Timothy Ray",
    "email": "timothy.ray@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 417,
    "name": "Melissa Lane",
    "email": "melissa.lane@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 418,
    "name": "Jason Lawson",
    "email": "jason.lawson@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 419,
    "name": "Deborah Fields",
    "email": "deborah.fields@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 420,
    "name": "Jeffrey Meyer",
    "email": "jeffrey.meyer@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 421,
    "name": "Stephanie Riley",
    "email": "stephanie.riley@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 422,
    "name": "Ryan Gilbert",
    "email": "ryan.gilbert@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 423,
    "name": "Rebecca Fox",
    "email": "rebecca.fox@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 424,
    "name": "Gary Carpenter",
    "email": "gary.carpenter@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 425,
    "name": "Sharon Lawrence",
    "email": "sharon.lawrence@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 426,
    "name": "Nicholas Patterson",
    "email": "nicholas.patterson@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 427,
    "name": "Laura Washington",
    "email": "laura.washington@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 428,
    "name": "Eric Butler",
    "email": "eric.butler@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 429,
    "name": "Cynthia Simmons",
    "email": "cynthia.simmons@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 430,
    "name": "Jonathan Foster",
    "email": "jonathan.foster@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 431,
    "name": "Kathleen Gonzales",
    "email": "kathleen.gonzales@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 432,
    "name": "Stephen Bryant",
    "email": "stephen.bryant@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 433,
    "name": "Amy Alexander",
    "email": "amy.alexander@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 434,
    "name": "Larry Russell",
    "email": "larry.russell@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 435,
    "name": "Angela Griffin",
    "email": "angela.griffin@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 436,
    "name": "Scott Diaz",
    "email": "scott.diaz@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 437,
    "name": "Brenda Hayes",
    "email": "brenda.hayes@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 438,
    "name": "Frank Myers",
    "email": "frank.myers@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 439,
    "name": "Pamela Ford",
    "email": "pamela.ford@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 440,
    "name": "Justin Hamilton",
    "email": "justin.hamilton@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 441,
    "name": "Catherine Graham",
    "email": "catherine.graham@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 442,
    "name": "Brandon Sullivan",
    "email": "brandon.sullivan@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 443,
    "name": "Christine Wallace",
    "email": "christine.wallace@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 444,
    "name": "Raymond Woods",
    "email": "raymond.woods@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 445,
    "name": "Debra Cole",
    "email": "debra.cole@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 446,
    "name": "Gregory West",
    "email": "gregory.west@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 447,
    "name": "Janet Jordan",
    "email": "janet.jordan@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 448,
    "name": "Samuel Owens",
    "email": "samuel.owens@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 449,
    "name": "Maria Reynolds",
    "email": "maria.reynolds@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 450,
    "name": "Patrick Fisher",
    "email": "patrick.fisher@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  },
  {
    "id": 451,
    "name": "Heather Ellis",
    "email": "heather.ellis@example.com",
    "skills": ["Python", "Flask", "SQLAlchemy", "Jinja2", "REST APIs"],
    "experience_years": 4,
    "projects": ["Lightweight Microservice", "Blogging Platform API"],
    "availability": "available"
  },
  {
    "id": 452,
    "name": "Benjamin Harrison",
    "email": "benjamin.harrison@example.com",
    "skills": ["DevOps", "Azure DevOps", "PowerShell", "ARM Templates"],
    "experience_years": 7,
    "projects": ["CI/CD Pipeline for .NET Applications", "Azure Infrastructure Automation"],
    "availability": "unavailable"
  },
  {
    "id": 453,
    "name": "Willie Gibson",
    "email": "willie.gibson@example.com",
    "skills": ["GCP", "BigQuery", "Dataflow", "Cloud Functions"],
    "experience_years": 5,
    "projects": ["Serverless Data Processing Workflow", "Big Data Analytics Platform"],
    "availability": "available"
  },
  {
    "id": 454,
    "name": "Dennis McDonald",
    "email": "dennis.mcdonald@example.com",
    "skills": ["Elixir", "Phoenix", "Ecto", "LiveView"],
    "experience_years": 6,
    "projects": ["Fault-Tolerant Web Application", "Real-time Collaboration Tool"],
    "availability": "available"
  },
  {
    "id": 455,
    "name": "Jerry Cruz",
    "email": "jerry.cruz@example.com",
    "skills": ["QA", "Selenium", "Cypress", "Jira", "Automated Testing"],
    "experience_years": 5,
    "projects": ["E-commerce Test Automation Suite", "Regression Testing for SaaS"],
    "availability": "available"
  },
  {
    "id": 456,
    "name": "Jeanette Marshall",
    "email": "jeanette.marshall@example.com",
    "skills": ["C++", "Qt", "Boost", "CMake"],
    "experience_years": 12,
    "projects": ["Desktop Scientific Application", "High-Frequency Trading System"],
    "availability": "unavailable"
  },
  {
    "id": 457,
    "name": "Marie Ortiz",
    "email": "marie.ortiz@example.com",
    "skills": ["Svelte", "SvelteKit", "JavaScript", "Vite"],
    "experience_years": 2,
    "projects": ["Fast Static Blog", "Component Library"],
    "availability": "available"
  },
  {
    "id": 458,
    "name": "Tyler Gomez",
    "email": "tyler.gomez@example.com",
    "skills": ["Linux", "Bash Scripting", "Nginx", "System Administration"],
    "experience_years": 10,
    "projects": ["Server Fleet Management", "Web Server Performance Tuning"],
    "availability": "available"
  },
  {
    "id": 459,
    "name": "Irene Murray",
    "email": "irene.murray@example.com",
    "skills": ["WordPress", "PHP", "JavaScript", "Elementor", "WooCommerce"],
    "experience_years": 7,
    "projects": ["Custom Theme for a Corporate Client", "Multi-vendor Marketplace"],
    "availability": "available"
  },
  {
    "id": 460,
    "name": "Aaron Freeman",
    "email": "aaron.freeman@example.com",
    "skills": ["Haskell", "Yesod", "Persistent", "Functional Programming"],
    "experience_years": 5,
    "projects": ["Type-Safe Web API", "Compiler for a DSL"],
    "availability": "unavailable"
  },
  {
    "id": 461,
    "name": "Lillian Wells",
    "email": "lillian.wells@example.com",
    "skills": ["Solidity", "Ethereum", "Web3.js", "Truffle", "Smart Contracts"],
    "experience_years": 3,
    "projects": ["Decentralized Application (dApp)", "NFT Marketplace"],
    "availability": "available"
  },
  {
    "id": 462,
    "name": "Henry Webb",
    "email": "henry.webb@example.com",
    "skills": ["Perl", "Mojolicious", "DBI", "Legacy Code Maintenance"],
    "experience_years": 15,
    "projects": ["Data Migration Scripting", "System Administration Automation"],
    "availability": "available"
  },
  {
    "id": 463,
    "name": "Joan Simpson",
    "email": "joan.simpson@example.com",
    "skills": ["React", "Next.js", "Vercel", "GraphQL", "Server-Side Rendering"],
    "experience_years": 4,
    "projects": ["High-Performance Marketing Website", "Jamstack Blog"],
    "availability": "available"
  },
  {
    "id": 464,
    "name": "Sean Stevens",
    "email": "sean.stevens@example.com",
    "skills": ["Java", "Android", "RxJava", "Dagger", "Retrofit"],
    "experience_years": 8,
    "projects": ["Video Streaming App", "Offline-First Mobile Application"],
    "availability": "unavailable"
  },
  {
    "id": 465,
    "name": "Sara Tucker",
    "email": "sara.tucker@example.com",
    "skills": ["Python", "scikit-learn", "XGBoost", "Feature Engineering"],
    "experience_years": 5,
    "projects": ["Credit Scoring Model", "Customer Lifetime Value Prediction"],
    "availability": "available"
  },
  {
    "id": 466,
    "name": "Adam Porter",
    "email": "adam.porter@example.com",
    "skills": ["Node.js", "TypeScript", "Serverless Framework", "AWS Lambda", "DynamoDB"],
    "experience_years": 6,
    "projects": ["Serverless API Backend", "Event-Driven Architecture"],
    "availability": "available"
  },
  {
    "id": 467,
    "name": "Evelyn Hunter",
    "email": "evelyn.hunter@example.com",
    "skills": ["UI/UX Design", "Prototyping", "Wireframing", "InVision", "Zeplin"],
    "experience_years": 4,
    "projects": ["SaaS Platform UI Overhaul", "Design System Creation"],
    "availability": "available"
  },
  {
    "id": 468,
    "name": "Zachary Hicks",
    "email": "zachary.hicks@example.com",
    "skills": ["Ruby on Rails", "PostgreSQL", "RSpec", "Capybara"],
    "experience_years": 7,
    "projects": ["Project Management Tool", "Online Forum"],
    "availability": "unavailable"
  },
  {
    "id": 469,
    "name": "Frances Crawford",
    "email": "frances.crawford@example.com",
    "skills": ["Angular", "NgRx", "PrimeNG", "Jasmine", "Karma"],
    "experience_years": 6,
    "projects": ["Financial Services Portal", "Internal Admin Dashboard"],
    "availability": "available"
  },
  {
    "id": 470,
    "name": "Nathan Henry",
    "email": "nathan.henry@example.com",
    "skills": ["Python", "FastAPI", "Pydantic", "Docker", "AsyncIO"],
    "experience_years": 3,
    "projects": ["High-Speed Data Validation Service", "Machine Learning Model Serving API"],
    "availability": "available"
  },
  {
    "id": 471,
    "name": "Ann Boyd",
    "email": "ann.boyd@example.com",
    "skills": ["Kotlin", "Spring Boot", "WebFlux", "Reactive Programming"],
    "experience_years": 5,
    "projects": ["Reactive Microservice", "Live Data Streaming API"],
    "availability": "available"
  },
  {
    "id": 472,
    "name": "Walter Mason",
    "email": "walter.mason@example.com",
    "skills": ["Elasticsearch", "Logstash", "Kibana", "ELK Stack"],
    "experience_years": 8,
    "projects": ["Centralized Logging Platform", "Search Engine for Application Logs"],
    "availability": "unavailable"
  },
  {
    "id": 473,
    "name": "Beverly Morales",
    "email": "beverly.morales@example.com",
    "skills": ["Python", "React", "AWS", "Docker", "scikit-learn", "Pandas"],
    "experience_years": 5,
    "projects": ["E-commerce Platform", "Healthcare Dashboard"],
    "availability": "available"
  },
  {
    "id": 474,
    "name": "Eugene Kennedy",
    "email": "eugene.kennedy@example.com",
    "skills": ["Python", "Machine Learning", "scikit-learn", "Pandas", "AWS"],
    "experience_years": 4,
    "projects": ["Patient Risk Prediction System", "Fraud Detection Service"],
    "availability": "available"
  },
  {
    "id": 475,
    "name": "Denise Warren",
    "email": "denise.warren@example.com",
    "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    "experience_years": 3,
    "projects": ["Social Media App", "Real-time Chat Application"],
    "availability": "unavailable"
  },
  {
    "id": 476,
    "name": "Randy Dixon",
    "email": "randy.dixon@example.com",
    "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "GCP"],
    "experience_years": 7,
    "projects": ["Banking API Service", "Microservices Architecture Migration"],
    "availability": "available"
  },
  {
    "id": 477,
    "name": "Teresa Ramos",
    "email": "teresa.ramos@example.com",
    "skills": ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Keras"],
    "experience_years": 6,
    "projects": ["Image Recognition System", "Autonomous Vehicle Perception Module"],
    "availability": "available"
  },
  {
    "id": 478,
    "name": "Russell Reyes",
    "email": "russell.reyes@example.com",
    "skills": ["C#", ".NET Core", "Azure", "SQL Server", "Blazor"],
    "experience_years": 8,
    "projects": ["Enterprise Resource Planning (ERP) System", "Cloud-Native CRM"],
    "availability": "unavailable"
  },
  {
    "id": 479,
    "name": "Lori Burns",
    "email": "lori.burns@example.com",
    "skills": ["Swift", "iOS Development", "UIKit", "CoreData", "XCode"],
    "experience_years": 4,
    "projects": ["Mobile E-commerce App", "Fitness Tracking iOS App"],
    "availability": "available"
  },
  {
    "id": 480,
    "name": "Vincent Gordon",
    "email": "vincent.gordon@example.com",
    "skills": ["Kotlin", "Android Development", "Jetpack Compose", "Firebase"],
    "experience_years": 5,
    "projects": ["Food Delivery Android App", "Social Networking Mobile App"],
    "availability": "available"
  },
  {
    "id": 481,
    "name": "Ruby Shaw",
    "email": "ruby.shaw@example.com",
    "skills": ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase", "TailwindCSS"],
    "experience_years": 2,
    "projects": ["Portfolio Website", "Interactive Landing Page"],
    "availability": "available"
  },
  {
    "id": 482,
    "name": "Bobby Holmes",
    "email": "bobby.holmes@example.com",
    "skills": ["Go", "Gin", "PostgreSQL", "Docker", "gRPC"],
    "experience_years": 6,
    "projects": ["High-Performance API Gateway", "Distributed Logging System"],
    "availability": "unavailable"
  },
  {
    "id": 483,
    "name": "Marilyn Rice",
    "email": "marilyn.rice@example.com",
    "skills": ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
    "experience_years": 5,
    "projects": ["Task Management System", "Content Management System (CMS)"],
    "availability": "available"
  },
  {
    "id": 484,
    "name": "Roy Robertson",
    "email": "roy.robertson@example.com",
    "skills": ["Ruby", "Ruby on Rails", "Heroku", "Sidekiq"],
    "experience_years": 9,
    "projects": ["Subscription Billing Platform", "E-learning Portal"],
    "availability": "available"
  },
  {
    "id": 485,
    "name": "Judith Hunt",
    "email": "judith.hunt@example.com",
    "skills": ["PHP", "Laravel", "MySQL", "Vue.js", "Nginx"],
    "experience_years": 7,
    "projects": ["Booking System", "Custom E-commerce Site"],
    "availability": "available"
  },
  {
    "id": 486,
    "name": "Johnny Black",
    "email": "johnny.black@example.com",
    "skills": ["TypeScript", "Node.js", "NestJS", "TypeORM", "GraphQL"],
    "experience_years": 4,
    "projects": ["GraphQL API for Analytics", "Real-time Notification Service"],
    "availability": "unavailable"
  },
  {
    "id": 487,
    "name": "Mildred Daniels",
    "email": "mildred.daniels@example.com",
    "skills": ["Python", "Data Engineering", "Apache Spark", "Airflow", "Kafka"],
    "experience_years": 6,
    "projects": ["Real-time Data Pipeline", "Data Warehouse Modernization"],
    "availability": "available"
  },
  {
    "id": 488,
    "name": "Philip Palmer",
    "email": "philip.palmer@example.com",
    "skills": ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    "experience_years": 8,
    "projects": ["Infrastructure as Code (IaC) Setup", "CI/CD Pipeline Automation"],
    "availability": "available"
  },
  {
    "id": 489,
    "name": "Rose Mills",
    "email": "rose.mills@example.com",
    "skills": ["React Native", "Firebase", "JavaScript", "Redux"],
    "experience_years": 3,
    "projects": ["Cross-Platform Social App", "Mobile Inventory Manager"],
    "availability": "available"
  },
  {
    "id": 490,
    "name": "Louis Nichols",
    "email": "louis.nichols@example.com",
    "skills": ["R", "Shiny", "Tidyverse", "ggplot2", "Statistics"],
    "experience_years": 5,
    "projects": ["Statistical Analysis Dashboard", "Clinical Trial Data Visualization"],
    "availability": "unavailable"
  },
  {
    "id": 491,
    "name": "Janice Grant",
    "email": "janice.grant@example.com",
    "skills": ["Flutter", "Dart", "Firebase", "BLoC Pattern"],
    "experience_years": 2,
    "projects": ["Recipe App (iOS/Android)", "Local Events Finder App"],
    "availability": "available"
  },
  {
    "id": 492,
    "name": "Gerald Knight",
    "email": "gerald.knight@example.com",
    "skills": ["SQL", "Tableau", "Power BI", "Data Warehousing", "ETL"],
    "experience_years": 10,
    "projects": ["Business Intelligence Dashboard Suite", "Sales Data Analysis Report"],
    "availability": "available"
  },
  {
    "id": 493,
    "name": "Kelly Snyder",
    "email": "kelly.snyder@example.com",
    "skills": ["Cybersecurity", "Penetration Testing", "Metasploit", "Wireshark"],
    "experience_years": 6,
    "projects": ["Vulnerability Assessment for a Financial App", "Network Security Audit"],
    "availability": "available"
  },
  {
    "id": 494,
    "name": "Alan Kelley",
    "email": "alan.kelley@example.com",
    "skills": ["Unity", "C#", "Game Development", "3D Modeling"],
    "experience_years": 4,
    "projects": ["Mobile Puzzle Game", "VR Training Simulation"],
    "availability": "unavailable"
  },
  {
    "id": 495,
    "name": "Christina Howard",
    "email": "christina.howard@example.com",
    "skills": ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    "experience_years": 5,
    "projects": ["Enterprise Single Page Application (SPA)", "Data Visualization Dashboard"],
    "availability": "available"
  },
  {
    "id": 496,
    "name": "Terry Ferguson",
    "email": "terry.ferguson@example.com",
    "skills": ["Machine Learning", "NLP", "spaCy", "NLTK", "Hugging Face"],
    "experience_years": 7,
    "projects": ["Sentiment Analysis Engine", "Chatbot for Customer Service"],
    "availability": "available"
  },
  {
    "id": 497,
    "name": "Victoria Stone",
    "email": "victoria.stone@example.com",
    "skills": ["JavaScript", "D3.js", "Three.js", "WebGL"],
    "experience_years": 5,
    "projects": ["Interactive Data Visualization Gallery", "3D Product Configurator"],
    "availability": "available"
  },
  {
    "id": 498,
    "name": "Lawrence Hawkins",
    "email": "lawrence.hawkins@example.com",
    "skills": ["Scala", "Akka", "Play Framework", "SBT"],
    "experience_years": 8,
    "projects": ["Concurrent Data Processing System", "Real-time Bidding Platform"],
    "availability": "unavailable"
  },
  {
    "id": 499,
    "name": "Lori Dunn",
    "email": "lori.dunn@example.com",
    "skills": ["UI/UX Design", "Figma", "Sketch", "Adobe XD", "User Research"],
    "experience_years": 6,
    "projects": ["Mobile App Redesign", "Website Usability Testing"],
    "availability": "available"
  },
  {
    "id": 500,
    "name": "Jesse Perkins",
    "email": "jesse.perkins@example.com",
    "skills": ["Rust", "Actix", "Tokio", "Diesel"],
    "experience_years": 3,
    "projects": ["Secure Web Service", "Systems Programming Utility"],
    "availability": "available"
  }
]
