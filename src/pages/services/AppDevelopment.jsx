import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";
import SectionNavigator from "../../components/SectionNavigator";

import { translations } from "../../locales";

const supportedLanguages = ["zh", "es", "pt", "de", "ko", "ja"];

const languages = [
  {
    code: "en",
    path: "/web-development",
    label: "🇺🇸 English",
  },
  {
    code: "zh",
    path: "/zh/web-development",
    label: "🇨🇳 简体中文",
  },
  {
    code: "es",
    path: "/es/web-development",
    label: "🇪🇸 Español",
  },
  {
    code: "pt",
    path: "/pt/web-development",
    label: "🇧🇷 Português",
  },
  {
    code: "de",
    path: "/de/web-development",
    label: "🇩🇪 Deutsch",
  },
  {
    code: "ko",
    path: "/ko/web-development",
    label: "🇰🇷 한국어",
  },
  {
    code: "ja",
    path: "/ja/web-development",
    label: "🇯🇵 日本語",
  },
];

/* ============================================================
   FEATURES
============================================================ */

const features = [
  "Custom Website Development",
  "Business Website Development",
  "E-Commerce Development",
  "Web Application Development",
  "CMS Development",
  "Responsive Web Design",
  "UI/UX Design",
  "Backend API Integration",
];

/* ============================================================
   SERVICES
============================================================ */

const services = [
  {
    title: "Custom Website Development",
    description:
      "Professionally designed custom websites built around your business goals, brand identity, target audience, and specific requirements.",
  },
  {
    title: "Business Website Development",
    description:
      "Modern and responsive business websites that help companies establish a strong online presence, generate leads, and build customer trust.",
  },
  {
    title: "E-Commerce Website Development",
    description:
      "Feature-rich online stores with product catalogs, shopping carts, secure payments, order management, and customer dashboards.",
  },
  {
    title: "Web Application Development",
    description:
      "Powerful and scalable web applications designed to automate business operations, manage data, and provide custom digital experiences.",
  },
  {
    title: "CMS Development",
    description:
      "Flexible content management solutions that allow businesses to easily manage pages, products, blogs, media, and website content.",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Ongoing maintenance, security updates, bug fixes, performance optimization, backups, and technical support for your website.",
  },
];

/* ============================================================
   WEB CATEGORIES
============================================================ */

const webCategories = [
  {
    id: 1,
    title: "Business Website Development",
    image: "/images/web-categories/business.png",
    description:
      "Professional business websites designed to establish a strong digital presence, showcase services, generate leads, and build customer trust.",
    features: [
      "Professional Design",
      "Responsive Layout",
      "Service Pages",
      "Lead Generation",
      "Contact Forms",
      "SEO Friendly",
    ],
  },
  {
    id: 2,
    title: "Corporate Website Development",
    image: "/images/web-categories/corporate.png",
    description:
      "Modern corporate websites for established companies, organizations, and enterprises with professional branding, scalable architecture, and powerful content management.",
    features: [
      "Corporate Branding",
      "Company Profiles",
      "Service Management",
      "Team Profiles",
      "Investor Information",
      "CMS Integration",
    ],
  },
  {
    id: 3,
    title: "Portfolio Website Development",
    image: "/images/web-categories/portfolio.png",
    description:
      "Creative portfolio websites for individuals, designers, developers, photographers, agencies, and professionals to showcase their work online.",
    features: [
      "Project Showcase",
      "Gallery",
      "Responsive Design",
      "Animations",
      "Contact Form",
      "Social Integration",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Website Development",
    image: "/images/web-categories/ecommerce.png",
    description:
      "Complete online shopping platforms with product management, secure checkout, payment integration, order tracking, and customer accounts.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Secure Payments",
      "Order Tracking",
      "Customer Accounts",
      "Admin Dashboard",
    ],
  },
  {
    id: 5,
    title: "Online Store Development",
    image: "/images/web-categories/online-store.png",
    description:
      "Modern online stores designed to provide seamless shopping experiences with product discovery, checkout, promotions, and order management.",
    features: [
      "Product Search",
      "Categories",
      "Wishlist",
      "Coupons",
      "Payments",
      "Order History",
    ],
  },
  {
    id: 6,
    title: "Multi-Vendor Marketplace",
    image: "/images/web-categories/marketplace.png",
    description:
      "Scalable multi-vendor marketplaces connecting multiple sellers and customers with vendor dashboards, commissions, orders, and analytics.",
    features: [
      "Vendor Panel",
      "Seller Dashboard",
      "Buyer Dashboard",
      "Commission System",
      "Order Management",
      "Analytics",
    ],
  },
  {
    id: 7,
    title: "Real Estate Website",
    image: "/images/web-categories/real-estate.png",
    description:
      "Property listing platforms for real estate companies, agents, builders, and property owners with advanced search and location-based discovery.",
    features: [
      "Property Listings",
      "Advanced Search",
      "Map Integration",
      "Agent Profiles",
      "Property Gallery",
      "Inquiry Forms",
    ],
  },
  {
    id: 8,
    title: "Hotel Booking Website",
    image: "/images/web-categories/hotel.png",
    description:
      "Hotel and resort websites with room listings, availability management, booking systems, online payments, and guest services.",
    features: [
      "Room Listings",
      "Booking System",
      "Availability",
      "Online Payments",
      "Guest Management",
      "Admin Panel",
    ],
  },
  {
    id: 9,
    title: "Restaurant Website",
    image: "/images/web-categories/restaurant.png",
    description:
      "Modern restaurant websites that showcase menus, locations, reservations, online ordering, promotions, and customer reviews.",
    features: [
      "Digital Menu",
      "Online Ordering",
      "Reservations",
      "Gallery",
      "Reviews",
      "Contact Integration",
    ],
  },
  {
    id: 10,
    title: "Food Delivery Website",
    image: "/images/web-categories/food-delivery.png",
    description:
      "Food delivery platforms connecting customers, restaurants, and delivery partners with ordering, payments, tracking, and management features.",
    features: [
      "Restaurant Listings",
      "Online Ordering",
      "Live Tracking",
      "Online Payments",
      "Delivery Panel",
      "Order Management",
    ],
  },
  {
    id: 11,
    title: "Grocery Delivery Website",
    image: "/images/web-categories/grocery.png",
    description:
      "Online grocery platforms with product catalogs, inventory management, shopping carts, scheduled delivery, and secure payments.",
    features: [
      "Product Categories",
      "Shopping Cart",
      "Inventory",
      "Delivery Scheduling",
      "Payments",
      "Order Tracking",
    ],
  },
  {
    id: 12,
    title: "Healthcare Website",
    image: "/images/web-categories/healthcare.png",
    description:
      "Secure healthcare websites for hospitals, clinics, doctors, and healthcare organizations with patient-focused digital services.",
    features: [
      "Doctor Profiles",
      "Appointments",
      "Patient Information",
      "Medical Services",
      "Contact Forms",
      "Admin Panel",
    ],
  },
  {
    id: 13,
    title: "Hospital Website",
    image: "/images/web-categories/hospital.png",
    description:
      "Professional hospital websites with department information, doctor profiles, appointment booking, services, and patient resources.",
    features: [
      "Departments",
      "Doctor Profiles",
      "Appointments",
      "Patient Resources",
      "Emergency Information",
      "Admin Dashboard",
    ],
  },
  {
    id: 14,
    title: "Medical Website",
    image: "/images/web-categories/medical.png",
    description:
      "Modern medical websites for doctors, clinics, specialists, and healthcare providers with professional service presentation and appointment features.",
    features: [
      "Doctor Profile",
      "Medical Services",
      "Appointment Booking",
      "Patient Queries",
      "Testimonials",
      "Contact Forms",
    ],
  },
  {
    id: 15,
    title: "Education Website",
    image: "/images/web-categories/education.png",
    description:
      "Educational websites for schools, colleges, coaching institutes, and training organizations with courses, admissions, resources, and student services.",
    features: [
      "Course Information",
      "Admissions",
      "Student Resources",
      "Faculty Profiles",
      "Events",
      "Online Forms",
    ],
  },
  {
    id: 16,
    title: "College Website",
    image: "/images/web-categories/college.png",
    description:
      "Complete college websites providing departments, courses, faculty information, admissions, notices, events, and academic resources.",
    features: [
      "Departments",
      "Courses",
      "Faculty",
      "Admissions",
      "Notices",
      "Student Portal",
    ],
  },
  {
    id: 17,
    title: "School Website",
    image: "/images/web-categories/school.png",
    description:
      "Modern school websites with academic information, admissions, announcements, events, faculty profiles, and parent resources.",
    features: [
      "School Information",
      "Admissions",
      "Faculty",
      "Events",
      "Announcements",
      "Parent Resources",
    ],
  },
  {
    id: 18,
    title: "Learning Management System",
    image: "/images/web-categories/lms.png",
    description:
      "Powerful LMS platforms that allow organizations to manage courses, learning content, assessments, students, and progress tracking.",
    features: [
      "Course Management",
      "Student Management",
      "Online Exams",
      "Quizzes",
      "Progress Tracking",
      "Admin Dashboard",
    ],
  },
  {
    id: 19,
    title: "Job Portal Website",
    image: "/images/web-categories/job-portal.png",
    description:
      "Recruitment platforms connecting employers and job seekers with job listings, applications, resumes, employer dashboards, and notifications.",
    features: [
      "Job Listings",
      "Resume Upload",
      "Job Search",
      "Employer Dashboard",
      "Application Tracking",
      "Job Alerts",
    ],
  },
  {
    id: 20,
    title: "Recruitment Website",
    image: "/images/web-categories/recruitment.png",
    description:
      "Custom recruitment platforms designed to streamline candidate management, job postings, interviews, applications, and hiring workflows.",
    features: [
      "Candidate Management",
      "Job Posting",
      "Resume Management",
      "Interview Scheduling",
      "Recruiter Dashboard",
      "Reports",
    ],
  },
  {
    id: 21,
    title: "News & Magazine Website",
    image: "/images/web-categories/news.png",
    description:
      "Fast and content-rich news and magazine websites with categories, articles, search, authors, media galleries, and publishing tools.",
    features: [
      "News Categories",
      "Article Management",
      "Author Profiles",
      "Search",
      "Media Gallery",
      "CMS",
    ],
  },
  {
    id: 22,
    title: "Blog Website Development",
    image: "/images/web-categories/blog.png",
    description:
      "SEO-friendly blog platforms designed for businesses, publishers, creators, and individuals to publish and manage content effectively.",
    features: [
      "Blog Management",
      "Categories",
      "Tags",
      "Comments",
      "SEO Optimization",
      "Search",
    ],
  },
  {
    id: 23,
    title: "Membership Website",
    image: "/images/web-categories/membership.png",
    description:
      "Membership platforms with user registration, subscription plans, restricted content, profiles, payments, and member management.",
    features: [
      "User Registration",
      "Membership Plans",
      "Restricted Content",
      "Subscriptions",
      "Member Dashboard",
      "Payments",
    ],
  },
  {
    id: 24,
    title: "Community Website",
    image: "/images/web-categories/community.png",
    description:
      "Interactive community platforms where users can create profiles, participate in discussions, join groups, share content, and communicate.",
    features: [
      "User Profiles",
      "Discussion Forums",
      "Groups",
      "Messaging",
      "Notifications",
      "Moderation",
    ],
  },
  {
    id: 25,
    title: "Social Networking Website",
    image: "/images/web-categories/social.png",
    description:
      "Social networking platforms with user profiles, posts, feeds, messaging, communities, notifications, and real-time interactions.",
    features: [
      "User Profiles",
      "News Feed",
      "Posts",
      "Private Messaging",
      "Communities",
      "Notifications",
    ],
  },
  {
    id: 26,
    title: "Forum Website Development",
    image: "/images/web-categories/forum.png",
    description:
      "Discussion and knowledge-sharing platforms with topics, threads, user profiles, moderation, search, and community engagement.",
    features: [
      "Discussion Threads",
      "Categories",
      "User Profiles",
      "Moderation",
      "Search",
      "Notifications",
    ],
  },
  {
    id: 27,
    title: "Event Management Website",
    image: "/images/web-categories/event.png",
    description:
      "Event management websites for conferences, workshops, exhibitions, and public events with registrations, tickets, schedules, and attendee management.",
    features: [
      "Event Registration",
      "Ticket Booking",
      "Event Schedules",
      "Speaker Profiles",
      "Attendee Management",
      "Notifications",
    ],
  },
  {
    id: 28,
    title: "Booking & Reservation Website",
    image: "/images/web-categories/booking.png",
    description:
      "Online booking platforms for hotels, services, appointments, events, travel, and other businesses with real-time availability.",
    features: [
      "Online Booking",
      "Availability",
      "Calendar",
      "Payments",
      "Notifications",
      "Customer Dashboard",
    ],
  },
  {
    id: 29,
    title: "Appointment Booking Website",
    image: "/images/web-categories/appointment.png",
    description:
      "Appointment scheduling websites for doctors, consultants, salons, professionals, and service businesses with calendar-based booking.",
    features: [
      "Appointment Booking",
      "Calendar",
      "Availability",
      "Reminders",
      "Online Payments",
      "Rescheduling",
    ],
  },
  {
    id: 30,
    title: "Service Business Website",
    image: "/images/web-categories/services.png",
    description:
      "Lead-generating websites for service businesses such as agencies, consultants, repair companies, contractors, and professional service providers.",
    features: [
      "Service Pages",
      "Lead Forms",
      "Booking",
      "Testimonials",
      "Gallery",
      "Contact Integration",
    ],
  },
  {
    id: 31,
    title: "Directory Website",
    image: "/images/web-categories/directory.png",
    description:
      "Business and service directory websites that organize listings with categories, search, filtering, maps, reviews, and user submissions.",
    features: [
      "Business Listings",
      "Categories",
      "Advanced Search",
      "Maps",
      "Reviews",
      "User Submissions",
    ],
  },
  {
    id: 32,
    title: "Classifieds Website",
    image: "/images/web-categories/classifieds.png",
    description:
      "Online classified platforms where users can publish, search, manage, and respond to advertisements across multiple categories.",
    features: [
      "Ad Listings",
      "Categories",
      "Search & Filters",
      "User Accounts",
      "Messaging",
      "Featured Ads",
    ],
  },
  {
    id: 33,
    title: "CRM Web Application",
    image: "/images/web-categories/crm.png",
    description:
      "Custom CRM web applications that help businesses manage leads, customers, sales pipelines, tasks, communication, and reports.",
    features: [
      "Lead Management",
      "Customer Database",
      "Sales Pipeline",
      "Task Management",
      "Analytics",
      "Reports",
    ],
  },
  {
    id: 34,
    title: "ERP Web Application",
    image: "/images/web-categories/erp.png",
    description:
      "Enterprise web applications integrating business operations such as finance, HR, inventory, sales, purchasing, and reporting.",
    features: [
      "HR Management",
      "Inventory",
      "Finance",
      "Purchasing",
      "Reports",
      "Dashboard",
    ],
  },
  {
    id: 35,
    title: "HRMS Web Application",
    image: "/images/web-categories/hrms.png",
    description:
      "Human Resource Management Systems for employee records, attendance, leave, payroll, recruitment, and workforce management.",
    features: [
      "Employee Management",
      "Attendance",
      "Leave Management",
      "Payroll",
      "Recruitment",
      "Reports",
    ],
  },
  {
    id: 36,
    title: "Inventory Management System",
    image: "/images/web-categories/inventory.png",
    description:
      "Web-based inventory management systems that simplify stock control, purchasing, suppliers, warehouses, and inventory reporting.",
    features: [
      "Stock Management",
      "Purchase Orders",
      "Supplier Management",
      "Warehouse",
      "Low Stock Alerts",
      "Reports",
    ],
  },
  {
    id: 37,
    title: "Hospital Management System",
    image: "/images/web-categories/hospital-management.png",
    description:
      "Complete hospital management platforms for managing patients, doctors, appointments, billing, departments, staff, and reports.",
    features: [
      "Patient Management",
      "Doctor Management",
      "Appointments",
      "Billing",
      "Staff Management",
      "Reports",
    ],
  },
  {
    id: 38,
    title: "School Management System",
    image: "/images/web-categories/school-management.png",
    description:
      "Web-based school management systems that automate student records, attendance, fees, examinations, communication, and academic operations.",
    features: [
      "Student Management",
      "Attendance",
      "Fee Management",
      "Examinations",
      "Teacher Dashboard",
      "Reports",
    ],
  },
  {
    id: 39,
    title: "College Management System",
    image: "/images/web-categories/college-management.png",
    description:
      "Complete college management platforms for students, faculty, departments, attendance, examinations, fees, and academic administration.",
    features: [
      "Student Management",
      "Faculty Management",
      "Departments",
      "Attendance",
      "Examinations",
      "Reports",
    ],
  },
  {
    id: 40,
    title: "Billing & POS System",
    image: "/images/web-categories/pos.png",
    description:
      "Point-of-sale and billing web applications for retail stores, restaurants, businesses, and service providers with inventory integration.",
    features: [
      "Billing",
      "Product Management",
      "Inventory",
      "Invoices",
      "Sales Reports",
      "Customer Management",
    ],
  },
  {
    id: 41,
    title: "Accounting Web Application",
    image: "/images/web-categories/accounting.png",
    description:
      "Accounting platforms for managing invoices, expenses, payments, customers, financial records, and business reports.",
    features: [
      "Invoices",
      "Expenses",
      "Payments",
      "Customers",
      "Financial Reports",
      "Dashboard",
    ],
  },
  {
    id: 42,
    title: "Project Management System",
    image: "/images/web-categories/project-management.png",
    description:
      "Project management web applications for planning projects, assigning tasks, tracking progress, managing teams, and generating reports.",
    features: [
      "Project Management",
      "Task Management",
      "Team Management",
      "Deadlines",
      "Progress Tracking",
      "Reports",
    ],
  },
  {
    id: 43,
    title: "Customer Portal",
    image: "/images/web-categories/customer-portal.png",
    description:
      "Secure customer portals that provide users with access to orders, invoices, documents, support requests, and account information.",
    features: [
      "Customer Login",
      "Orders",
      "Invoices",
      "Documents",
      "Support Tickets",
      "Profile Management",
    ],
  },
  {
    id: 44,
    title: "Employee Portal",
    image: "/images/web-categories/employee-portal.png",
    description:
      "Secure employee portals for accessing company resources, attendance, leave requests, tasks, documents, and internal information.",
    features: [
      "Employee Login",
      "Attendance",
      "Leave Requests",
      "Tasks",
      "Documents",
      "Notifications",
    ],
  },
  {
    id: 45,
    title: "Admin Dashboard Development",
    image: "/images/web-categories/admin-dashboard.png",
    description:
      "Powerful administrative dashboards that provide centralized control over users, content, transactions, analytics, and business operations.",
    features: [
      "User Management",
      "Analytics",
      "Reports",
      "Role Management",
      "Data Management",
      "System Settings",
    ],
  },
  {
    id: 46,
    title: "SaaS Web Application",
    image: "/images/web-categories/saas.png",
    description:
      "Scalable Software-as-a-Service platforms with subscription management, user accounts, dashboards, billing, and cloud-based architecture.",
    features: [
      "Multi-Tenant",
      "Subscriptions",
      "User Dashboard",
      "Payments",
      "Analytics",
      "Cloud Deployment",
    ],
  },
  {
    id: 47,
    title: "AI-Powered Web Application",
    image: "/images/web-categories/ai.png",
    description:
      "Intelligent web applications using AI for automation, content generation, search, recommendations, document processing, and business workflows.",
    features: [
      "Artificial Intelligence",
      "AI Automation",
      "Smart Search",
      "Recommendations",
      "Document Processing",
      "AI Assistant",
    ],
  },
  {
    id: 48,
    title: "AI Chatbot Website",
    image: "/images/web-categories/chatbot.png",
    description:
      "AI-powered chatbot solutions that provide automated customer support, answer questions, generate leads, and assist website visitors.",
    features: [
      "AI Chatbot",
      "24/7 Support",
      "Lead Generation",
      "Knowledge Base",
      "Live Chat",
      "Analytics",
    ],
  },
  {
    id: 49,
    title: "Cloud-Based Web Application",
    image: "/images/web-categories/cloud.png",
    description:
      "Cloud-ready web applications designed for scalability, secure data storage, real-time synchronization, availability, and remote access.",
    features: [
      "Cloud Storage",
      "Real-Time Sync",
      "Backup",
      "Scalable Architecture",
      "Security",
      "High Availability",
    ],
  },
  {
    id: 50,
    title: "Custom Web Application",
    image: "/images/web-categories/custom-web.png",
    description:
      "Fully customized web applications developed around your unique business processes, requirements, workflows, users, and future growth plans.",
    features: [
      "100% Custom",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Deployment",
    ],
  },
];

/* ============================================================
   INDUSTRIES
============================================================ */

const industries = [
  {
    title: "Healthcare",
    icon: "🏥",
    description:
      "Hospital websites, healthcare portals, appointment systems, patient platforms, medical websites, and healthcare management solutions.",
  },
  {
    title: "Education",
    icon: "🎓",
    description:
      "School websites, college portals, LMS platforms, online learning systems, student management, and educational platforms.",
  },
  {
    title: "Retail & E-Commerce",
    icon: "🛒",
    description:
      "Online stores, marketplaces, product catalogs, inventory systems, payment solutions, and e-commerce platforms.",
  },
  {
    title: "Finance",
    icon: "💳",
    description:
      "Financial dashboards, payment platforms, accounting systems, billing applications, fintech portals, and business management solutions.",
  },
  {
    title: "Hospitality",
    icon: "🏨",
    description:
      "Hotel websites, booking systems, restaurant websites, reservation platforms, travel portals, and hospitality management solutions.",
  },
  {
    title: "Transportation",
    icon: "🚖",
    description:
      "Transportation websites, fleet management, logistics platforms, courier systems, booking platforms, and tracking solutions.",
  },
  {
    title: "Real Estate",
    icon: "🏠",
    description:
      "Property listing websites, real estate portals, agent platforms, property management systems, and real estate CRM solutions.",
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    description:
      "Production management, inventory systems, supply chain platforms, employee management, reporting, and workflow automation.",
  },
  {
    title: "Entertainment",
    icon: "🎬",
    description:
      "Streaming platforms, media websites, content portals, community platforms, entertainment websites, and digital experiences.",
  },
  {
    title: "Startups",
    icon: "🚀",
    description:
      "Startup websites, MVP development, SaaS products, custom web applications, landing pages, and scalable digital platforms.",
  },
  {
    title: "Agriculture",
    icon: "🌾",
    description:
      "Agriculture portals, farm management systems, market platforms, crop management, weather information, and agricultural solutions.",
  },
  {
    title: "Enterprise",
    icon: "🏢",
    description:
      "Custom ERP, CRM, HRMS, employee portals, workflow automation, analytics dashboards, and enterprise web applications.",
  },
];

/* ============================================================
   TECHNOLOGIES
============================================================ */

const technologies = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap 5",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "REST API",
      "JWT Authentication",
      "Socket.IO",
      "Multer",
    ],
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Firebase",
    ],
  },
  {
    category: "Server",
    items: [
      "Ubuntu Server",
      "VPS Hosting",
      "Nginx",
      "Apache",
      "PM2",
      "SSL",
      "Linux",
    ],
  },
  {
    category: "Deployment",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "CI/CD",
      "Domain Setup",
      "DNS Management",
    ],
  },
  {
    category: "Integrations",
    items: [
      "Google Maps",
      "Firebase",
      "PayPal",
      "Razorpay",
      "Stripe",
      "WhatsApp",
      "YouTube API",
    ],
  },
  {
    category: "Security",
    items: [
      "HTTPS",
      "JWT",
      "bcrypt",
      "Role Based Access",
      "API Security",
      "Data Encryption",
    ],
  },
  {
    category: "AI Solutions",
    items: [
      "OpenAI",
      "AI Chatbot",
      "OCR",
      "Image Processing",
      "Speech Recognition",
      "Automation",
    ],
  },
];

/* ============================================================
   WHY CHOOSE US
============================================================ */

const whyChooseUs = [
  {
    title: "Custom Web Solutions",
    icon: "🌐",
    description:
      "Every website and web application is designed specifically around your business objectives, target audience, workflows, and industry requirements.",
  },
  {
    title: "Scalable Architecture",
    icon: "🚀",
    description:
      "Our websites and web applications are developed with future growth in mind, allowing your platform to scale as your business expands.",
  },
  {
    title: "Modern UI/UX",
    icon: "🎨",
    description:
      "Beautiful, intuitive, responsive, and conversion-focused interfaces that provide an excellent experience across desktop, tablet, and mobile devices.",
  },
  {
    title: "High Performance",
    icon: "⚡",
    description:
      "Optimized code, efficient architecture, fast-loading pages, and performance-focused development help deliver a smooth web experience.",
  },
  {
    title: "Secure Development",
    icon: "🔒",
    description:
      "Industry-standard security practices including authentication, authorization, encryption, secure APIs, validation, and protected user data.",
  },
  {
    title: "API Integration",
    icon: "🔗",
    description:
      "Seamless integration with payment gateways, maps, messaging services, CRMs, ERPs, analytics platforms, and third-party APIs.",
  },
  {
    title: "Self Hosted Deployment",
    icon: "🖥️",
    description:
      "Websites and applications can be deployed on your own VPS or dedicated server, giving you complete ownership and control.",
  },
  {
    title: "Long-Term Support",
    icon: "🛠️",
    description:
      "Continuous maintenance, monitoring, feature enhancements, security updates, backups, performance optimization, and technical assistance.",
  },
];

/* ============================================================
   COMPONENT
============================================================ */

const WebDevelopment = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const language = supportedLanguages.includes(lang) ? lang : "en";
  const t = translations[language];

  const webT = t.webDevelopment || {};

  const currentLanguage =
    languages.find((item) => item.code === language) || languages[0];

  /* ============================================================
     TRANSLATION HELPERS
  ============================================================ */

  const getCategoryTranslation = (id) => {
    const translated = webT.webCategories?.find(
      (item) => item.id === id
    );

    return translated || webCategories.find((item) => item.id === id);
  };

  const getServiceTranslation = (index) => {
    return webT.services?.[index] || services[index];
  };

  const getIndustryTranslation = (index) => {
    return webT.industries?.[index] || industries[index];
  };

  const getTechnologyTranslation = (index) => {
    return webT.technologies?.[index] || technologies[index];
  };

  const getWhyChooseTranslation = (index) => {
    return webT.whyChooseUs?.[index] || whyChooseUs[index];
  };

  /* ============================================================
     LANGUAGE CHANGE
  ============================================================ */

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    const selected = languages.find(
      (item) => item.code === selectedLanguage
    );

    if (selected) {
      navigate(selected.path);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <html lang={language} />

        <title>
          {webT.metaTitle ||
            "Web Development Company | Website & Web Application Development | CH TECH GIANT"}
        </title>

        <meta
          name="description"
          content={
            webT.metaDescription ||
            "CH TECH GIANT provides custom website development, business website development, e-commerce development, web application development, CMS development, responsive web design, UI/UX design, API integration, and custom software solutions."
          }
        />

        <meta
          name="keywords"
          content={
            webT.metaKeywords ||
            "web development company, website development company, web development services, custom website development, web application development, e-commerce website development, business website development, responsive web design, website development company in Davangere, web development company in Karnataka, web development company in India"
          }
        />

        <meta
          name="author"
          content="CH TECH GIANT"
        />

        <link
          rel="canonical"
          href={`https://chtechgiant.com${
            language === "en" ? "" : `/${language}`
          }/web-development`}
        />

        {languages.map((item) => (
          <link
            key={item.code}
            rel="alternate"
            hrefLang={
              item.code === "zh"
                ? "zh-CN"
                : item.code === "pt"
                ? "pt-BR"
                : item.code === "ko"
                ? "ko-KR"
                : item.code === "ja"
                ? "ja-JP"
                : item.code
            }
            href={`https://chtechgiant.com${
              item.code === "en" ? "" : `/${item.code}`
            }/web-development`}
          />
        ))}

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://chtechgiant.com/web-development"
        />
      </Helmet>

      <div className="bg-[#050816] text-white min-h-screen">

        {/* =====================================================
            LANGUAGE SELECTOR
        ===================================================== */}

        <div className="relative z-50 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex justify-end">
            <div className="relative">
              <select
                value={language}
                onChange={handleLanguageChange}
                aria-label="Select language"
                className="appearance-none h-10 w-40 bg-black/80 backdrop-blur-xl border border-white/20 hover:border-cyan-400 text-white text-sm font-medium rounded-xl pl-3 pr-10 outline-none cursor-pointer shadow-lg transition duration-300 focus:border-cyan-400"
              >
                {languages.map((item) => (
                  <option
                    key={item.code}
                    value={item.code}
                    className="bg-[#050816] text-white"
                  >
                    {item.label}
                  </option>
                ))}
              </select>

              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-400 text-xs" />
            </div>
          </div>
        </div>

        {/* =====================================================
            PAGE BANNER
        ===================================================== */}

        <PageBanner
          title={
            webT.bannerTitle ||
            "Web Development"
          }
          subtitle={
            webT.bannerSubtitle ||
            "Building modern, scalable, secure, and high-performance websites and web applications for startups, businesses, and enterprises."
          }
        />

        {/* =====================================================
            HERO
        ===================================================== */}

        <SectionWrapper id="hero">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {webT.heroTitle ||
                  "Custom Web Development Company"}
              </h1>

              <p className="text-gray-400 leading-relaxed mb-6">
                {webT.heroDescription1 ||
                  "CH TECH GIANT specializes in creating modern websites and powerful web applications that help businesses establish a strong online presence, attract customers, automate operations, and grow revenue. Our development team builds responsive, secure, scalable, and high-performance digital solutions tailored to your business requirements."}
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                {webT.heroDescription2 ||
                  "Whether you need a professional business website, e-commerce platform, custom web application, enterprise system, SaaS product, or fully customized digital solution, our team delivers reliable web experiences designed for long-term growth."}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {(webT.features || features).map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 hover:border-cyan-400/30 transition"
                    >
                      <p className="text-gray-300">
                        {feature}
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">
                {webT.whyChooseTitle ||
                  "Why Choose CH TECH GIANT?"}
              </h2>

              <div className="space-y-4 text-gray-400">
                {(
                  webT.heroBenefits || [
                    "Custom Website & Web Application Development",
                    "Modern Responsive UI/UX Design",
                    "High-Performance Architecture",
                    "Secure Backend & API Integration",
                    "E-Commerce & Payment Gateway Integration",
                    "SEO-Friendly Development",
                    "VPS & Cloud Deployment",
                    "Long-Term Support & Maintenance",
                  ]
                ).map((item, index) => (
                  <p key={index}>
                    ✔ {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <SectionWrapper id="services">
          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold mb-4">
              {webT.servicesTitle ||
                "Our Web Development Services"}
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto">
              {webT.servicesDescription ||
                "End-to-end web development solutions designed for startups, SMEs, enterprises, organizations, and growing businesses."}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => {

              const serviceData =
                getServiceTranslation(index);

              return (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {serviceData.title}
                  </h3>

                  <p className="text-gray-400">
                    {serviceData.description}
                  </p>
                </div>
              );
            })}

          </div>
        </SectionWrapper>

        {/* =====================================================
            WEB SOLUTIONS
        ===================================================== */}

        <SectionWrapper id="web-solutions">

          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {webT.webSolutionsTitle ||
                "Web Solutions We Develop"}
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {webT.webSolutionsDescription ||
                "We build modern websites and powerful web applications tailored to different industries, business models, and organizational requirements. From professional business websites and e-commerce platforms to enterprise systems, SaaS products, and custom web applications, our solutions are designed for performance, security, scalability, and long-term growth."}
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {webCategories.map((web) => {

              const translatedWeb =
                getCategoryTranslation(web.id);

              return (
                <div
                  key={web.id}
                  className="overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.03] border border-cyan-500/10 hover:border-cyan-400 transition-colors duration-300"
                >

                  <div className="relative aspect-video overflow-hidden bg-[#06101c]">

                    <img
                      src={web.image}
                      alt={translatedWeb.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                    <div className="absolute bottom-5 left-6 right-6">

                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {translatedWeb.title}
                      </h3>

                    </div>
                  </div>

                  <div className="p-7">

                    <p className="text-gray-400 text-[15px] leading-7 mb-6">
                      {translatedWeb.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-8">

                      {translatedWeb.features.map(
                        (feature, i) => (
                          <div
                            key={i}
                            className="flex items-start text-sm text-gray-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3 shrink-0" />

                            <span>
                              {feature}
                            </span>
                          </div>
                        )
                      )}

                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6">

                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          {webT.customDevelopment ||
                            "Custom Development"}
                        </p>

                        <p className="text-cyan-400 font-semibold text-sm">
                          Web • Cloud • API
                        </p>
                      </div>

                      <Link
                        to={
                          language === "en"
                            ? "/contact"
                            : `/${language}/contact`
                        }
                        className="px-5 py-2.5 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors duration-300"
                      >
                        {webT.getQuote ||
                          "Get Quote"}
                      </Link>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

        </SectionWrapper>

        {/* =====================================================
            INDUSTRIES
        ===================================================== */}

        <SectionWrapper id="industries">

          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              {webT.industriesTitle ||
                "Industries We Serve"}
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-8">
              {webT.industriesDescription ||
                "We develop websites and web applications for startups, SMEs, enterprises, government organizations, educational institutions, hospitals, retailers, service providers, and businesses across multiple industries."}
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

            {industries.map((industry, index) => {

              const industryData =
                getIndustryTranslation(index);

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="bg-white/5 border border-cyan-500/10 hover:border-cyan-400 rounded-3xl p-7 transition-all duration-300"
                >

                  <div className="text-5xl mb-5">
                    {industry.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {industryData.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {industryData.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </SectionWrapper>

        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        <SectionWrapper id="technologies">

          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              {webT.technologiesTitle ||
                "Technologies We Use"}
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-8">
              {webT.technologiesDescription ||
                "Our developers use modern technologies, secure architecture, and industry best practices to build fast, scalable, responsive, and reliable websites and web applications for startups, businesses, and enterprises."}
            </p>

          </div>

          <div className="space-y-8">

            {technologies.map((tech, index) => {

              const techData =
                getTechnologyTranslation(index);

              return (
                <div
                  key={index}
                  className="bg-white/5 rounded-3xl border border-cyan-500/10 p-8"
                >

                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                    {techData.category}
                  </h3>

                  <div className="flex flex-wrap gap-4">

                    {techData.items.map(
                      (item, i) => (
                        <div
                          key={i}
                          className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                        >
                          {item}
                        </div>
                      )
                    )}

                  </div>

                </div>
              );
            })}

          </div>

        </SectionWrapper>

        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}

        <SectionWrapper id="why-us">

          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              {webT.whyUsTitle ||
                "Why Choose CH TECH GIANT"}
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-8">
              {webT.whyUsDescription ||
                "We combine modern technologies, creative design principles, secure development practices, and business-focused strategies to deliver reliable websites and web applications that help organizations grow."}
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {whyChooseUs.map((item, index) => {

              const itemData =
                getWhyChooseTranslation(index);

              return (
                <div
                  key={index}
                  className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8"
                >

                  <div className="w-14 h-14 mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {itemData.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {itemData.description}
                  </p>

                </div>
              );
            })}

          </div>

        </SectionWrapper>

        {/* =====================================================
            STATS
        ===================================================== */}

        <SectionWrapper id="stats">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">

              <h2 className="text-5xl font-bold text-cyan-400 mb-3">
                50+
              </h2>

              <p className="text-gray-300">
                {webT.stats?.[0] ||
                  "Web Solutions"}
              </p>

            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">

              <h2 className="text-5xl font-bold text-cyan-400 mb-3">
                100%
              </h2>

              <p className="text-gray-300">
                {webT.stats?.[1] ||
                  "Custom Development"}
              </p>

            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">

              <h2 className="text-5xl font-bold text-cyan-400 mb-3">
                24/7
              </h2>

              <p className="text-gray-300">
                {webT.stats?.[2] ||
                  "Technical Support"}
              </p>

            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">

              <h2 className="text-5xl font-bold text-cyan-400 mb-3">
                ∞
              </h2>

              <p className="text-gray-300">
                {webT.stats?.[3] ||
                  "Innovation & Growth"}
              </p>

            </div>

          </div>

        </SectionWrapper>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <SectionWrapper id="process">

          <h2 className="text-4xl font-bold text-center mb-12">
            {webT.processTitle ||
              "Our Web Development Process"}
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {(
              webT.process || [
                "Discovery",
                "UI/UX Design",
                "Development",
                "Testing",
                "Launch",
              ]
            ).map((step, index) => (

              <div
                key={index}
                className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6 text-center"
              >

                <div className="text-cyan-400 text-3xl font-bold mb-3">
                  {index + 1}
                </div>

                <h3>
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </SectionWrapper>

        {/* =====================================================
            SEO CONTENT
        ===================================================== */}

        <SectionWrapper id="seo">

          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold mb-6 text-center">
              {webT.seoTitle ||
                "Professional Web Development Solutions"}
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">

              {(
                webT.seoContent || [
                  "A professional website has become an essential part of every modern business. At CH TECH GIANT, we develop custom websites and web applications that help businesses establish a strong online presence, connect with customers, generate leads, automate operations, and increase revenue.",

                  "Our web development team uses modern technologies including HTML5, CSS3, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, cloud platforms, VPS servers, and secure API integrations to build fast, responsive, scalable, and reliable digital solutions. Every project is developed with performance, usability, security, maintainability, and future growth in mind.",

                  "From business websites and e-commerce platforms to healthcare, education, real estate, hospitality, logistics, CRM, ERP, SaaS, AI-powered applications, and enterprise solutions, CH TECH GIANT helps organizations transform their ideas into powerful web experiences. We also provide deployment, hosting support, maintenance, security updates, performance optimization, and long-term technical assistance.",
                ]
              ).map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

        </SectionWrapper>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <SectionWrapper id="faq">

          <h2 className="text-4xl font-bold text-center mb-12">
            {webT.faqTitle ||
              "Frequently Asked Questions"}
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">

            {(
              webT.faq || [
                {
                  question:
                    "How much does website development cost?",
                  answer:
                    "The cost depends on the type of website, number of pages, features, design requirements, integrations, backend functionality, and overall project complexity. We provide custom quotes based on your requirements.",
                },
                {
                  question:
                    "How long does it take to develop a website?",
                  answer:
                    "The development timeline depends on the project scope and complexity. A simple business website can be completed faster, while e-commerce platforms and custom web applications may require more development and testing time.",
                },
                {
                  question:
                    "Do you develop custom websites?",
                  answer:
                    "Yes. We build completely customized websites and web applications based on your business requirements, target audience, workflows, branding, and future growth plans.",
                },
                {
                  question:
                    "Do you develop e-commerce websites?",
                  answer:
                    "Yes. We develop e-commerce websites with product management, shopping carts, payment gateways, customer accounts, order management, inventory, coupons, and admin dashboards.",
                },
                {
                  question:
                    "Do you develop web applications?",
                  answer:
                    "Yes. We develop custom web applications such as CRM, ERP, LMS, hospital management systems, school management systems, inventory systems, SaaS platforms, dashboards, portals, and other business applications.",
                },
                {
                  question:
                    "Will the website be mobile responsive?",
                  answer:
                    "Yes. Our websites are designed to work across desktops, laptops, tablets, and smartphones with responsive layouts and modern user interfaces.",
                },
                {
                  question:
                    "Can you integrate payment gateways?",
                  answer:
                    "Yes. We can integrate payment gateways and payment services such as Razorpay, PayPal, Stripe, and other supported payment platforms based on project requirements.",
                },
                {
                  question:
                    "Do you provide website hosting and deployment?",
                  answer:
                    "Yes. We can assist with domain configuration, DNS setup, VPS deployment, SSL certificates, server configuration, application deployment, and production setup.",
                },
                {
                  question:
                    "Do you provide SEO-friendly website development?",
                  answer:
                    "Yes. We develop websites with SEO-friendly structures including optimized metadata, semantic HTML, responsive layouts, clean URLs, performance considerations, sitemap support, and search-engine-friendly content structures.",
                },
                {
                  question:
                    "Do you provide website maintenance and support?",
                  answer:
                    "Yes. We provide ongoing maintenance, bug fixes, security updates, performance optimization, monitoring, content-related changes, feature enhancements, and technical support after launch.",
                },
              ]
            ).map((item, index) => (

              <div
                key={index}
                className="bg-white/5 rounded-3xl p-6"
              >

                <h3 className="font-semibold mb-3">
                  {item.question}
                </h3>

                <p className="text-gray-400">
                  {item.answer}
                </p>

              </div>

            ))}

          </div>

        </SectionWrapper>

        {/* =====================================================
            CTA
        ===================================================== */}

        <SectionWrapper id="cta">

          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-bold mb-4">
              {webT.ctaTitle ||
                "Ready To Build Your Website?"}
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              {webT.ctaDescription ||
                "Partner with CH TECH GIANT to transform your idea into a powerful, modern, secure, and scalable website or web application."}
            </p>

            <Link
              to={
                language === "en"
                  ? "/contact"
                  : `/${language}/contact`
              }
              className="inline-flex px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
            >
              {webT.ctaButton ||
                "Get Free Consultation"}
            </Link>

          </div>

        </SectionWrapper>

        {/* =====================================================
            SECTION NAVIGATOR
        ===================================================== */}

        <SectionNavigator
          sections={[
            "hero",
            "services",
            "web-solutions",
            "industries",
            "technologies",
            "why-us",
            "stats",
            "process",
            "seo",
            "faq",
            "cta",
          ]}
        />

      </div>
    </>
  );
};

export default WebDevelopment;