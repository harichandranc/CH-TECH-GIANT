import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import PageBanner from "../../components/PageBanner";
import SectionWrapper from "../../components/SectionWrapper";

const features = [
  "Android App Development",
  "iOS App Development",
  "Flutter App Development",
  "Cross Platform Apps",
  "Enterprise App Solutions",
  "Custom Mobile Applications",
  "App UI/UX Design",
  "Backend API Integration",
];

const services = [
  {
    title: "Android App Development",
    description:
      "Custom Android applications built for startups, businesses, and enterprises using modern technologies.",
  },
  {
    title: "iOS App Development",
    description:
      "Premium iPhone and iPad applications optimized for performance, security, and user experience.",
  },
  {
    title: "Flutter App Development",
    description:
      "Single codebase mobile applications for Android and iOS with faster development and lower costs.",
  },
  {
    title: "Enterprise Mobile Apps",
    description:
      "Professional React Native solutions with modern technology and scalable architecture.",
  },
  {
    title: "App UI/UX Design",
    description:
      "Modern interfaces and seamless user experiences that increase engagement and retention.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, bug fixing, and performance optimization.",
  },
];

const appCategories = [
  {
    id: 1,
    title: "Android App Development",
    image: "/images/app-categories/android.png",
    description:
      "Build powerful, scalable, and feature-rich Android applications for startups, SMEs, and enterprises. We develop high-performance Android apps.",
    features: [
      "Android Development",
      "Material UI Design",
      "Google API Integration",
      "Firebase Integration",
      "Play Store Deployment",
      "Ongoing Support",
    ],
  },
  {
    id: 2,
    title: "iOS App Development",
    image: "/images/app-categories/ios.png",
    description:
      "Premium iPhone and iPad applications designed for speed, security, and exceptional user experiences. Our iOS apps are optimized for every Apple device.",
    features: [
      "Swift Development",
      "Apple Guidelines",
      "App Store Publishing",
      "Secure Architecture",
      "High Performance",
      "Maintenance & Updates",
    ],
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: "/images/app-categories/flutter.png",
    description:
      "Develop Android and iOS applications using a single Flutter codebase, reducing development cost while maintaining excellent performance.",
    features: [
      "Single Codebase",
      "Cross Platform",
      "Fast Development",
      "Native Performance",
      "Beautiful UI",
      "API Integration",
    ],
  },
  {
    id: 4,
    title: "Dating App Development",
    image: "/images/app-categories/dating.png",
    description:
      "Create modern dating applications with intelligent matching, location-based discovery, secure messaging, voice & video calling, and premium subscriptions.",
    features: [
      "Location Matching",
      "Swipe System",
      "Private Chat",
      "Voice & Video Calls",
      "Profile Verification",
      "Premium Membership",
    ],
  },
  {
    id: 5,
    title: "E-Commerce App Development",
    image: "/images/app-categories/ecommerce.png",
    description:
      "Launch feature-rich online shopping applications with secure payment gateways, inventory management, customer analytics, and order tracking.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Secure Payments",
      "Wishlist",
      "Order Tracking",
      "Admin Dashboard",
    ],
  },
  {
    id: 6,
    title: "Shopping App Development",
    image: "/images/app-categories/shopping.png",
    description:
      "Deliver engaging shopping experiences with personalized recommendations, loyalty programs, multiple payment options, and seamless checkout.",
    features: [
      "Product Search",
      "Discount Coupons",
      "Payment Gateway",
      "Reviews & Ratings",
      "Push Notifications",
      "Order History",
    ],
  },
  {
    id: 7,
    title: "Marketplace App Development",
    image: "/images/app-categories/marketplace.png",
    description:
      "Develop multi-vendor marketplace applications connecting buyers and sellers with secure transactions, vendor dashboards, and commission management.",
    features: [
      "Vendor Panel",
      "Commission System",
      "Buyer Dashboard",
      "Seller Dashboard",
      "Analytics",
      "Order Management",
    ],
  },
  {
    id: 8,
    title: "Food Delivery App Development",
    image: "/images/app-categories/food.png",
    description:
      "Build food delivery solutions for restaurants, cloud kitchens, and aggregators with real-time tracking, online payments, and customer engagement features.",
    features: [
      "Restaurant Listing",
      "Live Tracking",
      "Online Payments",
      "Delivery Partner Panel",
      "Offers & Coupons",
      "Ratings & Reviews",
    ],
  },
  {
    id: 9,
    title: "Restaurant App Development",
    image: "/images/app-categories/restaurant.png",
    description:
      "Digital restaurant applications for online ordering, reservations, menu management, loyalty programs, and customer relationship management.",
    features: [
      "Digital Menu",
      "Table Reservation",
      "Online Ordering",
      "Customer Loyalty",
      "QR Ordering",
      "Restaurant Dashboard",
    ],
  },
  {
    id: 10,
    title: "Grocery Delivery App Development",
    image: "/images/app-categories/grocery.png",
    description:
      "Smart grocery delivery applications with inventory management, instant ordering, scheduled deliveries, and secure payment solutions.",
    features: [
      "Product Categories",
      "Delivery Scheduling",
      "Multiple Payments",
      "Inventory Management",
      "Real-Time Tracking",
      "Customer Support",
    ],
  },
  {
  id: 11,
  title: "Medical App Development",
  image: "/images/app-categories/medical.png",
  description:
    "Develop secure medical applications that help healthcare providers deliver better patient care through digital health solutions, online consultations, prescriptions, and health monitoring.",
  features: [
    "Doctor Consultation",
    "Electronic Prescriptions",
    "Patient Records",
    "Appointment Booking",
    "Health Monitoring",
    "HIPAA Ready",
  ],
},
{
  id: 12,
  title: "Hospital Management App",
  image: "/images/app-categories/hospital.png",
  description:
    "Comprehensive hospital management applications for clinics and healthcare organizations with appointment scheduling, billing, patient management, and medical record systems.",
  features: [
    "Patient Management",
    "Doctor Dashboard",
    "Billing System",
    "Appointment Scheduling",
    "Laboratory Reports",
    "Admin Panel",
  ],
},
{
  id: 13,
  title: "Pharmacy App Development",
  image: "/images/app-categories/pharmacy.png",
  description:
    "Online pharmacy applications that allow customers to order medicines, upload prescriptions, schedule deliveries, and receive medicine reminders.",
  features: [
    "Medicine Catalog",
    "Prescription Upload",
    "Online Payments",
    "Order Tracking",
    "Medicine Reminder",
    "Inventory Management",
  ],
},
{
  id: 14,
  title: "Fitness & Health App",
  image: "/images/app-categories/fitness.png",
  description:
    "Build engaging fitness applications with workout tracking, nutrition plans, wearable integration, progress analytics, and health monitoring.",
  features: [
    "Workout Plans",
    "Diet Tracking",
    "BMI Calculator",
    "Step Counter",
    "Progress Reports",
    "Wearable Integration",
  ],
},
{
  id: 15,
  title: "Educational App Development",
  image: "/images/app-categories/education.png",
  description:
    "Interactive educational applications for schools, colleges, coaching institutes, and online learning platforms with engaging digital learning experiences.",
  features: [
    "Video Lessons",
    "Live Classes",
    "Quizzes",
    "Assignments",
    "Certificates",
    "Student Dashboard",
  ],
},
{
  id: 16,
  title: "Learning Management System",
  image: "/images/app-categories/lms.png",
  description:
    "Powerful Learning Management Systems (LMS) that enable organizations to deliver online courses, assessments, certifications, and learner analytics.",
  features: [
    "Course Management",
    "Student Tracking",
    "Online Exams",
    "Certificates",
    "Progress Reports",
    "Admin Dashboard",
  ],
},
{
  id: 17,
  title: "School ERP App",
  image: "/images/app-categories/school.png",
  description:
    "End-to-end school ERP solutions that automate admissions, attendance, fee management, examinations, communication, and academic reporting.",
  features: [
    "Attendance",
    "Fee Management",
    "Exam Module",
    "Parent Portal",
    "Teacher Dashboard",
    "Student Reports",
  ],
},
{
  id: 18,
  title: "Travel App Development",
  image: "/images/app-categories/travel.png",
  description:
    "Travel applications for booking flights, hotels, tour packages, itineraries, and travel experiences with GPS navigation and digital payments.",
  features: [
    "Flight Booking",
    "Hotel Booking",
    "Trip Planner",
    "Maps Integration",
    "Reviews",
    "Secure Payments",
  ],
},
{
  id: 19,
  title: "Hotel & Resort App",
  image: "/images/app-categories/hotel.png",
  description:
    "Modern hotel and resort booking applications with room reservations, digital check-in, guest services, online payments, and loyalty programs.",
  features: [
    "Room Booking",
    "Availability Calendar",
    "Guest Check-In",
    "Online Payments",
    "Reviews",
    "Loyalty Program",
  ],
},
{
  id: 20,
  title: "Taxi Booking App",
  image: "/images/app-categories/taxi.png",
  description:
    "Build taxi and ride-hailing applications with live GPS tracking, fare estimation, driver management, secure payments, and ride history.",
  features: [
    "Driver Panel",
    "Passenger App",
    "GPS Tracking",
    "Fare Estimation",
    "Ride History",
    "SOS Support",
  ],
},
{
  id: 21,
  title: "Social Networking App",
  image: "/images/app-categories/social.png",
  description:
    "Build engaging social networking applications that connect people through posts, stories, messaging, communities, and real-time interactions.",
  features: [
    "User Profiles",
    "News Feed",
    "Stories",
    "Private Messaging",
    "Communities",
    "Push Notifications",
  ],
},
{
  id: 22,
  title: "Community App Development",
  image: "/images/app-categories/community.png",
  description:
    "Build online community applications where users can connect, discuss topics, organize events, and share knowledge securely.",
  features: [
    "Discussion Forums",
    "Groups",
    "Events",
    "Live Chat",
    "Member Profiles",
    "Notifications",
  ],
},
{
  id: 23,
  title: "Video Streaming App",
  image: "/images/app-categories/video-streaming.png",
  description:
    "Launch OTT and video streaming platforms with HD streaming, subscriptions, recommendations, watchlists, and multi-device support.",
  features: [
    "HD Streaming",
    "Watchlist",
    "Subscription Plans",
    "Recommendations",
    "Offline Viewing",
    "Multi-Device Access",
  ],
},
{
  id: 24,
  title: "Music Streaming App",
  image: "/images/app-categories/music.png",
  description:
    "Develop music streaming applications featuring playlists, podcasts, offline downloads, recommendations, and premium memberships.",
  features: [
    "Music Library",
    "Playlists",
    "Offline Mode",
    "Podcasts",
    "Favorites",
    "Premium Plans",
  ],
},
{
  id: 25,
  title: "News & Magazine App",
  image: "/images/app-categories/news.png",
  description:
    "Create digital news and magazine applications with live updates, personalized feeds, offline reading, bookmarks, and push notifications.",
  features: [
    "Breaking News",
    "Categories",
    "Offline Reading",
    "Bookmarks",
    "Search",
    "Push Alerts",
  ],
},
{
  id: 26,
  title: "Sports App Development",
  image: "/images/app-categories/sports.png",
  description:
    "Develop sports applications with live scores, match schedules, player statistics, fantasy leagues, and fan engagement features.",
  features: [
    "Live Scores",
    "Fixtures",
    "Player Statistics",
    "Fantasy Sports",
    "Highlights",
    "Notifications",
  ],
},
{
  id: 27,
  title: "Event & Conference App",
  image: "/images/app-categories/event.png",
  description:
    "Develop event and conference management applications with registrations, ticketing, live schedules, networking, and attendee engagement.",
  features: [
    "Event Registration",
    "Ticket Booking",
    "Agenda Management",
    "Speaker Profiles",
    "Networking",
    "Live Notifications",
  ],
},
{
  id: 28,
  title: "Job Portal App Development",
  image: "/images/app-categories/job.png",
  description:
    "Develop modern recruitment platforms connecting employers and job seekers with AI-powered matching, resume management, and interview scheduling.",
  features: [
    "Job Listings",
    "Resume Upload",
    "Employer Dashboard",
    "Interview Scheduling",
    "Job Alerts",
    "Application Tracking",
  ],
},
{
  id: 29,
  title: "Real Estate App Development",
  image: "/images/app-categories/real-estate.png",
  description:
    "Property listing applications with advanced search, virtual tours, agent management, mortgage calculators, and appointment booking.",
  features: [
    "Property Listings",
    "Virtual Tours",
    "Map Search",
    "Agent Dashboard",
    "Mortgage Calculator",
    "Appointments",
  ],
},
{
  id: 30,
  title: "CRM Application",
  image: "/images/app-categories/crm.png",
  description:
    "Customer Relationship Management applications to streamline sales, customer interactions, lead tracking, and business growth.",
  features: [
    "Lead Management",
    "Sales Pipeline",
    "Customer Database",
    "Analytics",
    "Task Management",
    "Reports",
  ],
},
{
  id: 31,
  title: "ERP Application",
  image: "/images/app-categories/erp.png",
  description:
    "Enterprise Resource Planning applications integrating finance, HR, inventory, operations, and reporting into one platform.",
  features: [
    "HR Management",
    "Inventory",
    "Finance",
    "Payroll",
    "Reports",
    "Dashboard",
  ],
},
{
  id: 32,
  title: "Cloud Based Application",
  image: "/images/app-categories/cloud.png",
  description:
    "Cloud-native applications with secure data storage, real-time synchronization, scalability, and high availability.",
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
  id: 33,
  title: "GPS & Geo-Fencing App",
  image: "/images/app-categories/gps.png",
  description:
    "Location-aware applications using GPS tracking, geo-fencing, live navigation, and location analytics for businesses.",
  features: [
    "Live GPS",
    "Geo-Fencing",
    "Route Tracking",
    "Maps",
    "Location History",
    "Alerts",
  ],
},
{
  id: 34,
  title: "Directory App Development",
  image: "/images/app-categories/directory.png",
  description:
    "Business directory applications that organize companies, services, and contact information with search and filtering.",
  features: [
    "Business Listings",
    "Search",
    "Categories",
    "Reviews",
    "Maps",
    "Favorites",
  ],
},
{
  id: 35,
  title: "Utility App Development",
  image: "/images/app-categories/utility.png",
  description:
    "Utility applications that simplify everyday tasks, productivity, file management, conversions, and device optimization.",
  features: [
    "Tools",
    "File Management",
    "Offline Support",
    "Quick Access",
    "Productivity",
    "Cloud Backup",
  ],
},
{
  id: 36,
  title: "Lifestyle App Development",
  image: "/images/app-categories/lifestyle.png",
  description:
    "Lifestyle applications covering fashion, beauty, food, travel, wellness, shopping, and personalized recommendations.",
  features: [
    "Recommendations",
    "Wishlist",
    "Notifications",
    "Bookings",
    "Rewards",
    "Social Sharing",
  ],
},
{
  id: 37,
  title: "On-Demand Service App",
  image: "/images/app-categories/on-demand.png",
  description:
    "Develop on-demand applications for home services, beauty, repairs, healthcare, and other instant booking businesses.",
  features: [
    "Instant Booking",
    "Provider Panel",
    "Live Tracking",
    "Ratings",
    "Payments",
    "Notifications",
  ],
},
{
  id: 38,
  title: "Enterprise Mobile App",
  image: "/images/app-categories/enterprise.png",
  description:
    "Enterprise-grade mobile applications designed for large organizations with secure workflows, integrations, and role-based access.",
  features: [
    "Role Management",
    "SSO Login",
    "Workflow Automation",
    "Reporting",
    "Security",
    "API Integration",
  ],
},
{
  id: 39,
  title: "Push Notification Solutions",
  image: "/images/app-categories/push.png",
  description:
    "Increase user engagement with intelligent push notification systems featuring segmentation, automation, and analytics.",
  features: [
    "Instant Alerts",
    "Segmentation",
    "Automation",
    "Scheduling",
    "Analytics",
    "A/B Testing",
  ],
},
{
  id: 40,
  title: "Feedback & Survey App",
  image: "/images/app-categories/feedback.png",
  description:
    "Collect valuable customer insights using survey and feedback applications with analytics, forms, and reporting dashboards.",
  features: [
    "Custom Forms",
    "Survey Builder",
    "Analytics",
    "Reports",
    "Ratings",
    "Export Data",
  ],
},
{
  id: 41,
  title: "Startup MVP Development",
  image: "/images/app-categories/startup.png",
  description:
    "Transform innovative ideas into Minimum Viable Products (MVPs) with rapid development, scalable architecture, and market-ready solutions.",
  features: [
    "Rapid Development",
    "Scalable Design",
    "Cloud Ready",
    "Investor Ready",
    "Analytics",
    "Future Expansion",
  ],
},
{
  id: 42,
  title: "AI Powered Application",
  image: "/images/app-categories/ai.png",
  description:
    "Develop intelligent AI-powered mobile applications using machine learning, natural language processing, computer vision, and predictive analytics to automate business processes and enhance user experiences.",
  features: [
    "Artificial Intelligence",
    "Machine Learning",
    "Predictive Analytics",
    "Smart Recommendations",
    "Automation",
    "AI Assistant",
  ],
},
{
  id: 43,
  title: "Chatbot Application",
  image: "/images/app-categories/chatbot.png",
  description:
    "Build AI chatbot applications that provide instant customer support, automate conversations, generate leads, and improve customer engagement.",
  features: [
    "AI Chatbot",
    "24/7 Support",
    "Lead Generation",
    "Live Chat",
    "Knowledge Base",
    "Analytics",
  ],
},
{
  id: 44,
  title: "Logistics & Fleet App",
  image: "/images/app-categories/logistics.png",
  description:
    "Develop logistics applications for fleet management, shipment tracking, warehouse operations, and route optimization.",
  features: [
    "Fleet Tracking",
    "GPS Monitoring",
    "Warehouse Management",
    "Route Optimization",
    "Driver App",
    "Reports",
  ],
},
{
  id: 45,
  title: "Inventory Management App",
  image: "/images/app-categories/inventory.png",
  description:
    "Inventory management applications that simplify stock control, barcode scanning, warehouse operations, supplier management, and reporting.",
  features: [
    "Stock Management",
    "Barcode Scanner",
    "Purchase Orders",
    "Supplier Management",
    "Reports",
    "Low Stock Alerts",
  ],
},
{
  id: 46,
  title: "Courier Delivery App",
  image: "/images/app-categories/courier.png",
  description:
    "Courier management applications with parcel booking, shipment tracking, delivery scheduling, proof of delivery, and customer notifications.",
  features: [
    "Parcel Booking",
    "Shipment Tracking",
    "Delivery Partner App",
    "Notifications",
    "Digital Signature",
    "Reports",
  ],
},
{
  id: 47,
  title: "Salon & Spa App",
  image: "/images/app-categories/salon.png",
  description:
    "Appointment booking applications for salons, spas, and wellness centers with staff scheduling, online payments, and loyalty programs.",
  features: [
    "Appointment Booking",
    "Staff Scheduling",
    "Online Payments",
    "Offers",
    "Customer History",
    "Notifications",
  ],
},
{
  id: 48,
  title: "Appointment Booking App",
  image: "/images/app-categories/appointment.png",
  description:
    "Develop appointment scheduling applications for doctors, consultants, service providers, and businesses with calendar integration.",
  features: [
    "Calendar",
    "Booking",
    "Reminders",
    "Payments",
    "Availability",
    "Rescheduling",
  ],
},
{
  id: 49,
  title: "Agriculture App",
  image: "/images/app-categories/agriculture.png",
  description:
    "Agriculture applications that assist farmers with crop management, weather forecasts, market prices, irrigation monitoring, and farm analytics.",
  features: [
    "Weather Updates",
    "Crop Monitoring",
    "Market Prices",
    "Farm Reports",
    "Irrigation",
    "Analytics",
  ],
},
{
  id: 50,
  title: "Manufacturing App",
  image: "/images/app-categories/manufacturing.png",
  description:
    "Manufacturing applications for production planning, quality control, workforce management, maintenance scheduling, and operational efficiency.",
  features: [
    "Production Planning",
    "Quality Control",
    "Maintenance",
    "Reports",
    "Inventory",
    "Dashboards",
  ],
},
{
  id: 51,
  title: "Booking & Reservation App",
  image: "/images/app-categories/booking.png",
  description:
    "Booking applications for hotels, travel, events, healthcare, sports, and service providers with real-time availability and online payments.",
  features: [
    "Online Booking",
    "Availability",
    "Payments",
    "Notifications",
    "Calendar",
    "Customer Dashboard",
  ],
},
{
  id: 52,
  title: "Business Automation App",
  image: "/images/app-categories/business.png",
  description:
    "Business automation applications that streamline workflows, approvals, document management, communication, and reporting.",
  features: [
    "Workflow Automation",
    "Document Management",
    "Approvals",
    "Reports",
    "Notifications",
    "Dashboards",
  ],
},
{
  id: 53,
  title: "Custom Enterprise Solution",
  image: "/images/app-categories/custom.png",
  description:
    "Tailor-made enterprise applications designed specifically for your organization's workflows, processes, and long-term digital transformation goals.",
  features: [
    "Custom Modules",
    "Enterprise Security",
    "Cloud Ready",
    "API Integration",
    "Scalable",
    "Long-Term Support",
  ],
},
{
  id: 54,
  title: "Custom Mobile Application",
  image: "/images/app-categories/custom-mobile.png",
  description:
    "Need something unique? We design and develop fully customized mobile applications based on your business goals, target audience, and industry requirements.",
  features: [
    "100% Custom",
    "UI/UX Design",
    "Backend Development",
    "Cloud Integration",
    "Deployment",
    "Maintenance",
  ],
},
];

const industries = [
  {
    title: "Healthcare",
    icon: "🏥",
    description:
      "Hospital management, telemedicine, pharmacy, patient management and healthcare solutions.",
  },
  {
    title: "Education",
    icon: "🎓",
    description:
      "School ERP, LMS, online learning, student management and examination systems.",
  },
  {
    title: "Retail & E-Commerce",
    icon: "🛒",
    description:
      "Online stores, marketplaces, POS systems, inventory and payment solutions.",
  },
  {
    title: "Finance",
    icon: "💳",
    description:
      "Digital wallets, banking apps, payment gateways and fintech applications.",
  },
  {
    title: "Hospitality",
    icon: "🏨",
    description:
      "Hotel booking, resort management, restaurant ordering and travel platforms.",
  },
  {
    title: "Transportation",
    icon: "🚖",
    description:
      "Taxi booking, logistics, courier tracking and fleet management solutions.",
  },
  {
    title: "Real Estate",
    icon: "🏠",
    description:
      "Property listings, broker management and real estate CRM solutions.",
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    description:
      "Production planning, inventory management and workflow automation.",
  },
  {
    title: "Entertainment",
    icon: "🎬",
    description:
      "Music streaming, OTT platforms, gaming and social networking applications.",
  },
  {
    title: "Startups",
    icon: "🚀",
    description:
      "Rapid MVP development, scalable architecture and investor-ready applications.",
  },
  {
    title: "Agriculture",
    icon: "🌾",
    description:
      "Crop management, farm monitoring, weather updates and smart agriculture.",
  },
  {
    title: "Enterprise",
    icon: "🏢",
    description:
      "Custom ERP, CRM, HRMS, workflow automation and business intelligence solutions.",
  },
];

const technologies = [
  // Mobile
  {
    category: "Mobile",
    items: [
      "Flutter",
      "Android",
      "Java",
      "Kotlin",
      "iOS",
      "Swift",
    ],
  },

  // Frontend
  {
    category: "Frontend",
    items: [
      "React",
      "Vite",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap 5",
    ],
  },

  // Backend
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Socket.IO",
      "Multer",
    ],
  },

  // Database
  {
    category: "Database",
    items: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Firebase",
    ],
  },

  // Server
  {
    category: "Server",
    items: [
      "Ubuntu Server",
      "VPS Hosting",
      "Nginx",
      "PM2",
      "SSL",
      "Linux",
    ],
  },

  // DevOps
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

  // APIs
  {
    category: "Integrations",
    items: [
      "Google Maps",
      "Firebase FCM",
      "PayPal",
      "Razorpay",
      "WhatsApp",
      "YouTube API",
    ],
  },

  // Security
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

  // AI
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

const whyChooseUs = [
  {
    title: "Custom Mobile Solutions",
    icon: "📱",
    description:
      "Every application is designed specifically for your business objectives, target audience, and operational requirements.",
  },
  {
    title: "Scalable Architecture",
    icon: "🚀",
    description:
      "Applications are built with future growth in mind, allowing your platform to scale as your business expands.",
  },
  {
    title: "Modern UI/UX",
    icon: "🎨",
    description:
      "Beautiful, intuitive, and responsive user interfaces that improve engagement and user satisfaction.",
  },
  {
    title: "High Performance",
    icon: "⚡",
    description:
      "Optimized code and efficient architecture ensure smooth performance across all supported devices.",
  },
  {
    title: "Secure Development",
    icon: "🔒",
    description:
      "Industry-standard security practices including authentication, encryption, and secure API integration.",
  },
  {
    title: "API Integration",
    icon: "🔗",
    description:
      "Seamless integration with payment gateways, maps, messaging services, CRMs, ERPs, and third-party platforms.",
  },
  {
    title: "Self Hosted Deployment",
    icon: "🖥️",
    description:
      "Applications can be deployed on your own VPS or dedicated server, giving you complete ownership and control.",
  },
  {
    title: "Long-Term Support",
    icon: "🛠️",
    description:
      "Continuous maintenance, monitoring, feature enhancements, security updates, and technical assistance.",
  },
];

const AppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>
          Mobile App Development Company | Android, iOS & Flutter Apps | CH
          TECH GIANT
        </title>

        <meta
          name="description"
          content="CH TECH GIANT provides Android app development, iOS app development, Flutter app development, enterprise mobile applications, UI/UX design, and custom software solutions."
        />

        <meta
          name="keywords"
          content="mobile app development company, android app development, ios app development, flutter app development, custom mobile apps, enterprise app development"
        />

        <link
          rel="canonical"
          href="https://chtechgiant.com/app-development"
        />
      </Helmet>

      <div className="bg-[#050816] text-white">
        <PageBanner
          title="Mobile App Development"
          subtitle="Building scalable Android, iOS, and Flutter applications for startups, businesses, and enterprises."
        />

        {/* Hero Section */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Mobile App Development Company
              </h1>

              <p className="text-gray-400 leading-relaxed mb-6">
                CH TECH GIANT specializes in creating powerful mobile
                applications that help businesses grow, engage customers,
                streamline operations, and generate revenue. Our team develops
                modern Android, iOS, and Flutter applications tailored to your
                unique business requirements.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're launching a startup MVP, building an enterprise
                platform, or modernizing an existing application, our experts
                deliver secure, scalable, and high-performing mobile solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-cyan-500/10 rounded-2xl p-4 hover:border-cyan-400/30 transition"
                  >
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
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
                Why Choose CH TECH GIANT?
              </h2>

              <div className="space-y-4 text-gray-400">
                <p>✔ Android & iOS Specialists</p>
                <p>✔ Flutter Cross-Platform Experts</p>
                <p>✔ Modern UI/UX Design</p>
                <p>✔ Secure Backend Integration</p>
                <p>✔ Cloud-Based Architecture</p>
                <p>✔ Fast Development Cycles</p>
                <p>✔ App Store & Play Store Publishing</p>
                <p>✔ Long-Term Support & Maintenance</p>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our App Development Services
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto">
              End-to-end mobile application development solutions designed for
              startups, SMEs, and enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Mobile Apps We Develop */}
        <SectionWrapper>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mobile Apps We Develop
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We build powerful mobile applications tailored to different industries
              and business models. From startups to enterprises, our experienced
              developers create secure, scalable, and feature-rich mobile solutions
              that help businesses increase customer engagement, streamline operations,
              and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {appCategories.map((app) => (
              <div
                key={app.id}
                className="overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.03] border border-cyan-500/10 hover:border-cyan-400 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-[#06101c]">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent"></div>


                  {/* Title */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {app.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">

                  <p className="text-gray-400 text-[15px] leading-7 mb-6">
                    {app.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-8">
                    {app.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3 shrink-0"></div>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">

                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Custom Development
                      </p>

                      <p className="text-cyan-400 font-semibold text-sm">
                        Android • iOS 
                      </p>
                    </div>

                    <a
                      href="/contact"
                      className="px-5 py-2.5 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors duration-300"
                    >
                      Get Quote
                    </a>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Industries We Serve */}

        <SectionWrapper>

        <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold mb-5">
        Industries We Serve
        </h2>

        <p className="text-gray-400 max-w-4xl mx-auto leading-8">
        We build digital products for startups, SMEs, enterprises, government
        organizations, educational institutions, hospitals and businesses across
        multiple industries.
        </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

        {industries.map((industry,index)=>(

        <motion.div
        key={index}
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:index*0.05}}
        viewport={{once:true}}
        whileHover={{y:-8}}
        className="bg-white/5 border border-cyan-500/10 hover:border-cyan-400 rounded-3xl p-7 transition-all duration-300"
        >

        <div className="text-5xl mb-5">
        {industry.icon}
        </div>

        <h3 className="text-2xl font-semibold mb-4">
        {industry.title}
        </h3>

        <p className="text-gray-400 leading-7">
        {industry.description}
        </p>

        </motion.div>

        ))}

        </div>

        </SectionWrapper>

        {/* Technologies */}
        <SectionWrapper>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Technologies We Use
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-8">
              Our developers use modern technologies and industry best practices to
              build secure, high-performance and scalable mobile applications for
              startups, businesses and enterprises.
            </p>
          </div>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-3xl border border-cyan-500/10 p-8"
              >
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                  {tech.category}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {tech.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Why Choose Us */}
        <SectionWrapper>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Why Choose CH TECH GIANT
            </h2>

            <p className="text-gray-400 max-w-4xl mx-auto leading-8">
              We combine innovative technologies, modern design principles, and industry
              experience to deliver reliable mobile applications that help businesses
              grow faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-cyan-500/10 rounded-3xl p-8"
              >
                <div className="w-14 h-14 mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper>

        <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-3">50+</h2>
        <p className="text-gray-300">App Categories Covered</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-3">100%</h2>
        <p className="text-gray-300">Custom Development</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-3">24/7</h2>
        <p className="text-gray-300">Technical Support</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/20 p-8 text-center">
        <h2 className="text-5xl font-bold text-cyan-400 mb-3">∞</h2>
        <p className="text-gray-300">Innovation & Growth</p>
        </div>

        </div>

        </SectionWrapper>

        {/* Process */}
        <SectionWrapper>
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Discovery",
              "Design",
              "Development",
              "Testing",
              "Launch",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/5 border border-cyan-500/10 rounded-3xl p-6 text-center"
              >
                <div className="text-cyan-400 text-3xl font-bold mb-3">
                  {index + 1}
                </div>

                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </SectionWrapper>


        {/* SEO Content */}
        <SectionWrapper>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Professional Mobile App Development Solutions
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Mobile applications have become essential tools for businesses
                looking to improve customer engagement, automate processes, and
                increase revenue. At CH TECH GIANT, we create innovative mobile
                applications that deliver measurable business results.
              </p>

              <p>
                Our development team uses the latest technologies including
                Flutter, Android, iOS, Firebase, Node.js, and cloud platforms
                to build secure and scalable applications. Every project is
                designed with performance, usability, and future growth in
                mind.
              </p>

              <p>
                From healthcare and education to fintech, logistics,
                e-commerce, and enterprise solutions, we help organizations
                leverage mobile technology to stay competitive in today's
                digital marketplace.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper>
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-3xl p-6">
              <h3 className="font-semibold mb-3">
                How much does mobile app development cost?
              </h3>
              <p className="text-gray-400">
                The cost depends on features, complexity, platforms, and
                integrations required. We provide custom quotes based on your
                project requirements.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6">
              <h3 className="font-semibold mb-3">
                Do you develop both Android and iOS apps?
              </h3>
              <p className="text-gray-400">
                Yes. We develop Android applications, iOS applications, and
                Flutter cross-platform apps.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6">
              <h3 className="font-semibold mb-3">
                Do you provide post-launch support?
              </h3>
              <p className="text-gray-400">
                Yes. We offer maintenance, updates, monitoring, bug fixes, and
                feature enhancements after launch.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper>
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 rounded-3xl p-10 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready To Build Your App?
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Partner with CH TECH GIANT to transform your idea into a
              powerful mobile application.
            </p>

            <a
              href="/contact"
              className="inline-flex px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition"
            >
              Get Free Consultation
            </a>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};

export default AppDevelopment;