# 🚀 Kubernetes Demo App (k8s-demo-app)
---

## 📌 Overview

This project demonstrates a **complete containerized application deployment on Kubernetes**, including:

- Application containerization using Docker
- Deployment of a multi-tier application on Kubernetes
- Use of **ConfigMaps and Secrets** for configuration management
- Internal communication between services
- Scalable and declarative infrastructure using YAML manifests

💡 This project reflects real-world DevOps practices such as **infrastructure as code, container orchestration, and service-based architecture**.

---
## 🏗️ Architecture
            +----------------------+
            |     Web Browser      |
            +----------+-----------+
                       |
                       v
            +----------------------+
            |   K8s Service        |
            | (NodePort/ClusterIP) |
            +----------+-----------+
                       |
                       v
            +----------------------+
            |   Web App Pod        |
            |  (Frontend/App)      |
            +----------+-----------+
                       |
                       v
            +----------------------+
            |   MongoDB Pod        |
            |   (Database Layer)   |
            +----------------------+

    +-------------------+   +-------------------+
    |   ConfigMap       |   |      Secret       |
    | (App Config)      |   | (DB Credentials)  |
    +-------------------+   +-------------------+
---

## ⚙️ Tech Stack

- **Kubernetes** – Container orchestration
- **Docker** – Containerization
- **MongoDB** – Database
- **kubectl** – Deployment management
- **YAML** – Infrastructure as Code
---

## 📁 Project Structure
 
```
k8s-demo-app/
├── mongo.yaml             # MongoDB deployment & service
├── mongo-config.yaml      # ConfigMap for DB connection
├── mongo-secret.yaml      # Secret for DB credentials
├── webapp.yaml            # Web application deployment & service
├── Dockerfile             # App container definition
└── README.md
```

---

## 🔧 Key Features

- ✅ Multi-tier architecture (App + Database)
- ✅ Kubernetes **Deployments & Services**
- ✅ Secure configuration using **Secrets**
- ✅ Externalized configuration via **ConfigMaps**
- ✅ Scalable workloads using replicas
- ✅ Clean separation of infrastructure and application

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Anusha-3109/k8s-demo-app.git
cd k8s-demo-app
```
### 2. Start Kubernetes cluster

```bash
minikube start
```
---

### 3. Apply Kubernetes manifests

```bash
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo-config.yaml
kubectl apply -f mongo.yaml
kubectl apply -f webapp.yaml
```

---

### 4. Verify deployment

```bash
kubectl get pods
kubectl get services
```

---

### 5. Access the application

```bash
minikube service webapp-service
```

---

## 📈 Scaling the Application

```bash
kubectl scale deployment webapp-deployment --replicas=3
```

---

## 🧠 What I Learned

- Worked with **Kubernetes core components (Pods, Services, Deployments)**
- Managed sensitive data using **Secrets**
- Externalized configuration using **ConfigMaps**
- Deployed and connected **multi-tier applications**
- Practiced **container-based deployment workflows**

---
