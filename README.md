# Mini-Projet : Déploiement d’une Architecture Microservices Conteneurisée avec CI/CD et Monitoring

## Auteur
Projet réalisé par : **[Fatma Sliti]**  
Date : 2025-12-13

## Contexte
Une entreprise souhaite déployer une application composée de plusieurs microservices dans un environnement cloud.  
Exigences :  
- Conteneurisation avec Docker  
- Orchestration avec Kubernetes  
- Pipeline CI/CD avec GitHub Actions ou Jenkins  
- Monitoring (Prometheus + Grafana)  

## Objectifs pédagogiques
À l’issue du projet, je suis capable de :  
1. Concevoir une architecture microservices adaptée à un besoin métier  
2. Conteneuriser des services avec Docker et gérer les dépendances  
3. Déployer les services sur Kubernetes (Minikube)  
4. Mettre en place un pipeline CI/CD pour automatiser le build et le déploiement  
5. Intégrer un système de monitoring pour superviser les services  
6. Documenter le projet de manière professionnelle  

---

# 1. 

Mon projet comprend :  
- **Greeting Service** (Node.js)  
- **Quote Service** (Node.js)  
- **Prometheus** pour la collecte des métriques  
- **Grafana** pour la visualisation  

---
<img width="619" height="622" alt="image" src="https://github.com/user-attachments/assets/a02973de-02be-4c5e-947f-2f59d3e84643" />


# 2. Conteneurisation avec Docker

### Dockerfile pour Greeting Service
<img width="542" height="308" alt="image" src="https://github.com/user-attachments/assets/d38dbec8-14f8-4c54-be92-1d4a6d7fd6cd" />

### Dockerfile pour quote Service
<img width="807" height="437" alt="image" src="https://github.com/user-attachments/assets/705119fa-672b-4e99-8826-14fd5f5ac5ac" />


### Build et test local
###### Greeting Service
docker build -t greeting-service:latest ./greeting-service
docker run -p 3000:3000 greeting-service:latest

###### Quote Service
docker build -t quote-service:latest ./quote-service
docker run -p 4000:4000 quote-service:latest


# Architecture globale

L’architecture du projet comprend :

Microservices : Greeting Service et Quote Service

Orchestration : Kubernetes (Minikube)

CI/CD : GitHub Actions

Monitoring : Prometheus pour la collecte des métriques et Grafana pour la visualisation

### l'architecture

<img width="433" height="769" alt="image" src="https://github.com/user-attachments/assets/c330a17d-3637-402f-8dd3-fca019bb3c7e" />


# Conteneurisation

Chaque microservice est conteneurisé dans son propre conteneur Docker pour assurer :

Isolation et portabilité

Gestion simplifiée des dépendances

Déploiement uniforme sur Kubernetes

### test local
<img width="814" height="472" alt="image" src="https://github.com/user-attachments/assets/0cafc319-dcb6-4ed5-9a2d-d418d010e646" />

<img width="893" height="559" alt="image" src="https://github.com/user-attachments/assets/7e98e35c-1c4a-4aa2-ba72-bebb0d9cf8b8" />



# Déploiement sur Kubernetes

Les microservices sont déployés sur Minikube.
Chaque service dispose d’un deployment et d’un service pour exposer les ports nécessaires.
Les pods sont vérifiés pour être en état Running afin de garantir le bon fonctionnement de l’application.

##### Afficher les pods dans tous les namespaces
<img width="975" height="364" alt="image" src="https://github.com/user-attachments/assets/e748dd32-6e21-4be7-b0b1-131d7ee4329d" />

##### Afficher les services
<img width="1081" height="252" alt="image" src="https://github.com/user-attachments/assets/5b963d90-82e7-4d6b-abf4-39eb86da439c" />



# CI/CD avec GitHub Actions

La pipeline CI/CD automatise :

Le build des images Docker

Le push vers Docker Hub


<img width="785" height="412" alt="image" src="https://github.com/user-attachments/assets/8ea69aac-bbd8-4cf2-9738-ffe2b9bee66c" />


# Monitoring

Prometheus collecte les métriques des microservices et du cluster Kubernetes

Grafana permet de visualiser ces métriques sous forme de dashboards

Les dashboards montrent les performances des microservices et l’état du cluster


# Résultat final

Pour s’assurer que tout fonctionne correctement :

## Les pods doivent être Running

<img width="807" height="120" alt="image" src="https://github.com/user-attachments/assets/ae3351f4-4045-4120-b780-25a83a48d15b" />



## Les services exposés doivent être accessibles via Minikube

<img width="728" height="170" alt="image" src="https://github.com/user-attachments/assets/e9bd6088-f5f1-40da-bc42-68631dbf0f32" />

<img width="732" height="56" alt="image" src="https://github.com/user-attachments/assets/ad1da72b-63e4-47ad-9c1a-62b726a0562a" />

<img width="756" height="107" alt="image" src="https://github.com/user-attachments/assets/9480f5b9-e6ac-4d93-8ccb-b8c6d761b4dd" />



## La pipeline CI/CD doit se déclencher automatiquement lors d’un push

<img width="933" height="388" alt="image" src="https://github.com/user-attachments/assets/34ed3b8e-41c5-492a-8d5b-d42d280b2d21" />

<img width="932" height="330" alt="image" src="https://github.com/user-attachments/assets/f8c00598-0561-4614-94e4-dcd13224488c" />



## Le dashboard Grafana 
<img width="936" height="466" alt="image" src="https://github.com/user-attachments/assets/f9c96215-bcbc-4fae-8ab0-bbb9d371582b" />
<img width="935" height="435" alt="image" src="https://github.com/user-attachments/assets/8241ef52-cd5e-459c-873a-3379b48a1c67" />

### The services are successfully linked to Grafana

<img width="1919" height="712" alt="image" src="https://github.com/user-attachments/assets/0c681f47-f2c2-4592-bba9-343a74d52c25" />


# Test d’accès aux services exposés via NodePort(type de service Kubernetes)

###### the greeting service

<img width="1174" height="557" alt="image" src="https://github.com/user-attachments/assets/ccd87b68-5063-4972-9f75-e79e9d3a93c0" />


###### the quote service

<img width="1176" height="578" alt="image" src="https://github.com/user-attachments/assets/81dc7a5c-1f81-471e-815a-0884ed3fb235" />


# Conclusion

Ce projet illustre la mise en place complète d’une architecture microservices conteneurisée avec automatisation et supervision. J'ai:

Conçu et développé deux microservices fonctionnels (greeting-service et quote-service).

Conteneurisé chaque service avec Docker et défini des fichiers de configuration propres.

Déployé les services sur un cluster Kubernetes (Minikube) avec les manifests appropriés (Deployment et Service).

Mis en place un pipeline CI/CD avec GitHub Actions.

Intégré un système de monitoring avec Prometheus pour la collecte des métriques et Grafana pour la visualisation.

Documenté toutes les étapes avec captures d’écran.

### En Fin 

DevOps est un état d’esprit, pas seulement un ensemble d’outils ⚙️✨







