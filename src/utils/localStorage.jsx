const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      completed: 1,
      accepted: 1,
      failed: 1,
      newtask: 0
    },
    tasks: [
      {
        taskTitle: "Prepare Q3 Report",
        description: "Compile and finalize the financial report for the third quarter.",
        taskDue: "2025-08-10",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "Reporting"
      },
      {
        taskTitle: "Update client database",
        description: "Ensure all new client information is entered and existing data is current.",
        taskDue: "2025-08-05",
        completed: false,
        newtask: false,
        accepted: true,
        failed: false,
        category: "Data Entry"
      },
      {
        taskTitle: "Attend team meeting",
        description: "Participate in the weekly sync to discuss project progress and blockers.",
        taskDue: "2025-08-01",
        completed: false,
        newtask: false,
        accepted: false,
        failed: true,
        category: "Meetings"
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      completed: 2,
      accepted: 1,
      failed: 0,
      newtask: 1
    },
    tasks: [
      {
        taskTitle: "Design new UI mockups",
        description: "Create visual drafts for the upcoming user interface redesign.",
        taskDue: "2025-08-08",
        completed: false,
        newtask: true,
        accepted: false,
        failed: false,
        category: "Design"
      },
      {
        taskTitle: "Fix header responsiveness",
        description: "Adjust the website header to work seamlessly on mobile devices.",
        taskDue: "2025-07-31",
        completed: false,
        newtask: false,
        accepted: true,
        failed: false,
        category: "Development"
      },
      {
        taskTitle: "Submit bug report",
        description: "Document and submit a detailed report for a newly found software bug.",
        taskDue: "2025-08-03",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "QA"
      },
      {
        taskTitle: "Update GitHub README",
        description: "Revise the project's README file with the latest setup instructions.",
        taskDue: "2025-08-06",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      completed: 2,
      accepted: 1,
      failed: 1,
      newtask: 1
    },
    tasks: [
      {
        taskTitle: "Deploy staging build",
        description: "Push the latest application build to the staging server for testing.",
        taskDue: "2025-08-04",
        completed: false,
        newtask: true,
        accepted: false,
        failed: false,
        category: "DevOps"
      },
      {
        taskTitle: "Conduct code review",
        description: "Review a teammate's code submission for quality and best practices.",
        taskDue: "2025-08-02",
        completed: false,
        newtask: false,
        accepted: true,
        failed: false,
        category: "Development"
      },
      {
        taskTitle: "Fix login bug",
        description: "Resolve the issue preventing users from logging into their accounts.",
        taskDue: "2025-08-07",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "Debugging"
      },
      {
        taskTitle: "Write test cases",
        description: "Develop a set of automated tests for the new user authentication feature.",
        taskDue: "2025-08-10",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "Testing"
      },
      {
        taskTitle: "Database backup",
        description: "Perform a scheduled backup of the main production database.",
        taskDue: "2025-07-30",
        completed: false,
        newtask: false,
        accepted: false,
        failed: true,
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      completed: 0,
      accepted: 2,
      failed: 0,
      newtask: 1
    },
    tasks: [
      {
        taskTitle: "Research competitor tools",
        description: "Analyze competing products to identify key features and market gaps.",
        taskDue: "2025-08-05",
        completed: false,
        newtask: true,
        accepted: false,
        failed: false,
        category: "Research"
      },
      {
        taskTitle: "Prepare presentation slides",
        description: "Create a slide deck for the upcoming project review meeting.",
        taskDue: "2025-08-02",
        completed: false,
        newtask: false,
        accepted: true,
        failed: false,
        category: "Documentation"
      },
      {
        taskTitle: "Review policy documents",
        description: "Check the latest company policy documents for accuracy and compliance.",
        taskDue: "2025-08-06",
        completed: false,
        newtask: false,
        accepted: true,
        failed: false,
        category: "Admin"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      completed: 3,
      accepted: 1,
      failed: 1,
      newtask: 1
    },
    tasks: [
      {
        taskTitle: "Organize team outing",
        description: "Plan and coordinate the next quarterly team-building event.",
        taskDue: "2025-08-15",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "HR"
      },
      {
        taskTitle: "Send project update email",
        description: "Draft and send a weekly progress report to all project stakeholders.",
        taskDue: "2025-08-01",
        completed: false,
        newtask: false,
        accepted: true,
        failed: false,
        category: "Communication"
      },
      {
        taskTitle: "Migrate legacy system",
        description: "Transfer data and functionality from the old system to the new platform.",
        taskDue: "2025-08-12",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "IT"
      },
      {
        taskTitle: "Set up new employee accounts",
        description: "Create system and email accounts for new team members.",
        taskDue: "2025-08-03",
        completed: false,
        newtask: true,
        accepted: false,
        failed: false,
        category: "Onboarding"
      },
      {
        taskTitle: "Update training manual",
        description: "Revise the employee training manual with new procedures.",
        taskDue: "2025-07-30",
        completed: false,
        newtask: false,
        accepted: false,
        failed: true,
        category: "Training"
      },
      {
        taskTitle: "Verify invoices",
        description: "Check incoming invoices against purchase orders for accuracy.",
        taskDue: "2025-08-09",
        completed: true,
        newtask: false,
        accepted: false,
        failed: false,
        category: "Finance"
      }
    ]
  }
];

  const admin = [
     {
      id: 100,
      firstName: "Lucky",
      email: "admin@example.com",
      password: "1234"
      }
]

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}