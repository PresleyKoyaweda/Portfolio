___



___
# 🛒 Market Basket Analysis (MBA)

**Affiliation :** Laboration du cours **Fouille des Données** à l'Ecole Polytechnique Montréal

## 📝 Présentation
Le Market Basket Analysis (MBA) est une technique de fouille de données utilisée pour découvrir des associations entre produits, révélant ainsi les comportements d'achat des clients. Cette méthode aide à identifier les articles souvent achetés ensemble.

## 🎯 Objectif
L'objectif de ce projet était de développer un algorithme de Market Basket Analysis (MBA) pour révéler des motifs d'achat dans un vaste ensemble de données contenant trois millions de transactions de supermarché, puis d'appliquer cet algorithme à des données médicales pour détecter les cooccurrences de symptômes.

## 🔧 Mise en œuvre

### 🛠 Développement de l'algorithme MBA
- **Traitement distribué :** Utilisation de l'approche MapReduce avec Apache Spark sur Google Cloud Platform (GCP) pour le traitement distribué des données.
- **Analyse des transactions :** Exploration des transactions de supermarché pour identifier les motifs d'achat fréquents et les associations entre les produits.

### 💉 Application aux données médicales
- **Préparation des données :** Filtrage et préparation des données VAERS (1990-2024).
- **Adaptation de l'algorithme :** Modification de l'algorithme MBA pour analyser les données médicales et détecter les cooccurrences de symptômes.
- **Manipulation des données :** Utilisation de Spark SQL pour manipuler les données et générer des insights médicaux.

## 📊 Résultats

- **Supermarchés :** L'analyse des données a révélé des motifs d'achat fréquents et des associations entre les produits, ce qui facilite la prise de décision pour les détaillants.
- **Médical :** L'algorithme a mis en lumière des cooccurrences de symptômes, aidant ainsi à anticiper l'apparition de symptômes et à planifier les traitements préventifs adéquats.
