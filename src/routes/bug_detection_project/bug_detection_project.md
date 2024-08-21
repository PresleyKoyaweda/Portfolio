___



___
## 🐞 Détection de Rapports de Bogues Dupliqués

## 🎯 Objectif
L'objectif de ce projet était de développer un algorithme capable de détecter les rapports de bogues dupliqués dans un large ensemble de données de rapports de bogues. Ceci permet de réduire le temps et les efforts nécessaires pour résoudre les problèmes logiciels en évitant le traitement des rapports de bogues redondants.

## 🔧 Mise en œuvre

### 🔍 Extraction des données
- **Collecte des données :** Extraction des rapports de bogues à l'aide de techniques de web scraping, en utilisant BeautifulSoup pour le parsing HTML.
- **Prétraitement :** Préparation des données des rapports de bogues pour l'analyse.

### 🛠 Prétraitement des données
- **NLP :** Application de techniques de traitement du langage naturel (NLP) incluant la tokenisation, la suppréssion des StopWords, le stemming, le calcul des cosinus similarity etc.
- **Représentation des textes :** Création de représentations de texte utilisant Bag of Words (BoW), TF-IDF, et les embeddings de mots.

### 💻 Développement de l'algorithme
- **Modèle de similarité :** Developpement d'un Pipeline suivit de l'implémentation d'un modèle basé sur la mesure de similarité cosinus pour comparer les rapports de bogues.
- **Réduction de dimensionnalité :** Utilisation de techniques de réduction de dimensionnalité ainsi que celle d'ablation study (qui consiste à retirer un seul composant de l'architecture d'origine, et à mesurer à quel point cette modification isolée impacte les performances du modèle. Plus un composant affecte les performances, plus il est considéré comme efficace) pour améliorer l'efficacité du modèle.

### ✅ Validation et évaluation
- **Tests :** Validation de l'algorithme sur un jeu de données de test pour évaluer sa précision et son rappel.
- **Optimisation :** Ajustement des hyperparamètres pour optimiser les performances du modèle.

## 📊 Résultats

- **Efficacité :** L'algorithme développé a significativement amélioré la détection des rapports de bogues dupliqués, réduisant ainsi les efforts liés au traitement des rapports redondants.
- **Performance :** Le modèle a atteint une précision de 95% et un rappel de 92% sur le jeu de données de test, démontrant son efficacité.

