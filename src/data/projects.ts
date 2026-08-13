export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  challenges: string;
  features: string[];
  decisions: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "taskflow-saas",

    title: "TaskFlow SaaS",

    description:
      "A full-stack project management platform for teams to organize projects, manage tasks, assign work, and track progress.",

    longDescription:
      "TaskFlow SaaS is a full-stack project management platform built around real team workflows. Users can register and authenticate, create projects, manage project details, add members, create and assign tasks, manage task priorities and statuses, and collaborate through a responsive dashboard.",

    challenges:
      "The main engineering challenges involved building a secure authentication system with JWT, protecting application routes, connecting a React frontend with a FastAPI backend, designing relational database structures for users, projects, members, and tasks, and creating collaborative workflows such as project membership and task assignment. I also faced real production challenges including database schema changes, API debugging, environment configuration, CORS issues, and deploying a full-stack application to the cloud.",

    features: [
      "User registration and authentication",
      "Protected application routes",
      "Project creation and management",
      "Project details workspace",
      "Project member management",
      "Task creation and deletion",
      "Task assignment to members",
      "Task status management",
      "Task priority management",
      "Responsive dashboard",
    ],

    decisions: [
      "React and TypeScript for scalable frontend development",
      "Tailwind CSS for responsive UI design",
      "FastAPI for REST API development",
      "PostgreSQL for relational data storage",
      "SQLAlchemy for database modeling",
      "JWT authentication for secure user sessions",
    ],

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
    ],

    githubUrl: "https://github.com/KalkidanAB-22/taskflow-saas",

    liveUrl: "https://taskflow-saaas.netlify.app",

    featured: true,

    images: [
      "/images/taskflow-dashboard.png",
      "/images/taskflow-projects.png",
      "/images/taskflow-projects-details.png",
      "/images/taskflow-tasks.png",
      "/images/taskflow-members.png",
    ],
  },

  {
    id: "vendor-cart",

    title: "Vendor-Cart",

    description:
      "A full-stack ecommerce platform with product management, shopping cart, orders, inventory, and payment workflows.",

    longDescription:
      "Vendor-Cart is a full-stack ecommerce application designed around a realistic online shopping experience. Customers can browse products, search the catalog, manage their cart, complete checkout, and place orders. Administrators can manage products, inventory, and order workflows through dedicated management functionality.",

    challenges:
      "The main engineering challenges were designing and connecting the ecommerce workflow across users, products, carts, orders, payments, and inventory. Another major challenge was production deployment. Getting the Express and PostgreSQL backend running reliably in a serverless environment required troubleshooting routing, CORS configuration, environment variables, database connectivity, and Vercel's deployment structure. Working through these issues helped me understand the difference between getting an application working locally and preparing it for a real production environment.",

    features: [
      "Customer registration and authentication",
      "Product browsing",
      "Product search",
      "Shopping cart management",
      "Checkout workflow",
      "Order management",
      "Product management",
      "Inventory management",
      "Admin functionality",
      "Stripe payment integration",
    ],

    decisions: [
      "React for reusable frontend components",
      "Node.js and Express for backend API development",
      "PostgreSQL for structured ecommerce data",
      "JWT authentication and authorization",
      "REST API architecture",
      "Stripe for payment processing",
      "Cloudinary for product image management",
    ],

    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Stripe",
      "Cloudinary",
    ],

    githubUrl: "https://github.com/KalkidanAB-22/vendor-cart-ecommerce",

    liveUrl: "https://vendor-cart-app.vercel.app",

    featured: true,

    images: [
      "/images/vendor-cart-home.png",
      "/images/vendor-cart-products.png",
      "/images/vendor-cart-cart.png",
      "/images/vendor-cart-checkout.png",
      "/images/vendor-cart-admin.png",
    ],
  },
];
