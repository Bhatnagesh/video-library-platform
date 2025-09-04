# 🎥 Video Library Application (React + Spring Boot)

A **full-stack video library management application** with a React frontend and Spring Boot backend.  
It supports **video uploads, category management, comments, and admin/user authentication.**  
Built for scalability, with a clean layered architecture and RESTful API design. 🚀

---

## 🔗 Navigation
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [📂 Project Structure](#-project-structure)
- [📡 API Endpoints](#-api-endpoints)
- [🗂️ ER Diagram](#%EF%B8%8F-entity-relationship-diagram)
- [🛠️ Setup & Installation](#%EF%B8%8F-setup--installation)
- [🔮 Future Enhancements](#-future-enhancements)
- [👨‍💻 Author](#-author)

---

## 🚀 Features
✅ User registration and login with email validation  
✅ Admin authentication with custom exception handling  
✅ Video upload, edit, delete, and category assignment  
✅ Comment system linked to videos and users  
✅ Category management for better content organization  
✅ REST API architecture with DTOs for clean data transfer  
✅ Global exception handling for better API responses  
✅ Layered architecture: Controller → Service → Repository → Entity  
✅ Responsive React frontend to consume APIs  

---

## 🛠️ Tech Stack
| Technology       | Purpose                               |
|------------------|---------------------------------------|
| ReactJS          | Frontend UI                          |
| Spring Boot      | Backend framework                    |
| Spring Data JPA  | ORM and DB persistence               |
| Hibernate        | JPA Implementation                   |
| MySQL            | Relational Database                  |
| Maven            | Build & Dependency Management        |
| Lombok           | Boilerplate code reduction           |
| Swagger / Postman| API Testing & Documentation          |
| Git/GitHub       | Version Control                      |

---

## 📂 Project Structure
video-library/
├── frontend/ # React Frontend
│ └── src/components/ # Components (Login, Dashboard, Video CRUD)
└── backend/ # Spring Boot Backend
├── controller/ # REST Controllers
├── entity/ # JPA Entities
├── repo/ # Spring Data JPA Repos
├── service/impl/ # Business Logic
├── utils/ # Mapper/Helpers
└── pojo/ # DTOs


---

## 📡 API Endpoints

| Method  | Endpoint                         | Description                     | Auth Required |
|---------|---------------------------------|---------------------------------|--------------|
| **Auth & Admin** |
| POST    | `/admin/login`                  | Admin login                     | No           |
| GET     | `/admin/data`                   | Admin greeting message          | Yes          |
| **User** |
| POST    | `/user/register`                | Register a new user             | No           |
| POST    | `/user/login`                   | Login as user                   | No           |
| GET     | `/user/email/{email}`           | Check if email exists           | No           |
| **Video** |
| POST    | `/video/upload`                 | Upload a new video              | Admin        |
| PUT     | `/video/edit/{id}`              | Edit video                      | Admin        |
| GET     | `/video/all`                    | Get all videos                  | No           |
| GET     | `/video/{id}`                   | Get video by ID                 | No           |
| GET     | `/video/category/{categoryId}`  | Get videos by category          | No           |
| DELETE  | `/video/{id}`                   | Delete video                    | Admin        |
| **Category** |
| POST    | `/category/create`              | Create a new category           | Admin        |
| GET     | `/category/all`                 | Get all categories              | No           |
| **Comment** |
| POST    | `/comment/video`                | Add a comment to a video        | User         |

---

## 🗂️ Entity Relationship Diagram
```mermaid
erDiagram
    USER {
        int id
        string userName
        string email
        string password
    }
    ADMIN {
        int id
        string userName
        string password
    }
    CATEGORY {
        int id
        string categoryName
    }
    VIDEO {
        int id
        string title
        string url
        string description
        int likes
        int views
        int dislike
    }
    COMMENT {
        int id
        string text
    }

    USER ||--o{ COMMENT : writes
    VIDEO ||--o{ COMMENT : has
    CATEGORY ||--o{ VIDEO : categorizes
```   <-- **close Mermaid here**
---

## 🛠️ Setup & Installation

1️⃣ Clone Repository  
git clone https://github.com/your-username/video-library.git  
cd video-library

2️⃣ Configure Database  
CREATE DATABASE video_library;

Update application.properties:  
spring.datasource.url=jdbc:mysql://localhost:3306/video_library  
spring.datasource.username=your_username  
spring.datasource.password=your_password  
spring.jpa.hibernate.ddl-auto=update

3️⃣ Run Backend  
mvn spring-boot:run

4️⃣ Run Frontend  
cd frontend  
npm install  
npm start
