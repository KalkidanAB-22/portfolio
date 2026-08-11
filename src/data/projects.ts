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
      "The main engineering challenges were implementing JWT authentication, protecting frontend routes, connecting React with the FastAPI backend, designing relational database models between users, projects, members, and tasks, and deploying a full-stack application.",

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
      "Vendor-Cart is a full-stack ecommerce application designed around a realistic online shopping experience. Customers can browse products, manage their cart, complete checkout, and place orders, while administrators can manage products, inventory, and order workflows.",

    challenges:
      "The main challenges were designing ecommerce database relationships between users, products, carts, orders, payments, and inventory while maintaining a consistent workflow between frontend and backend services.",

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
      "Payment workflow",
    ],

    decisions: [
      "React for reusable frontend components",
      "Node.js and Express for backend APIs",
      "PostgreSQL for structured ecommerce data",
      "JWT authentication and authorization",
      "REST API architecture",
      "Stripe payment integration",
    ],

    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Stripe",
    ],

    githubUrl: "https://github.com/KalkidanAB-22",

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
