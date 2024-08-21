___



___
## 📊 Analyse des Réseaux Sociaux - Détection de Communautés et Influenceurs


## 🎯 Objectifs du Projet

- **Implémenter l'algorithme LPAm+** pour détecter les communautés.
- **Identifier les influenceurs** en utilisant des métriques d'influence (centralité de degré, de proximité, d'intermédiarité).
- **Construire un modèle** pour détecter les méchants dans la communauté Marvel.

## 🛠️ Technologies Utilisées

- **Python** : Pour l'implémentation de l'algorithme et la manipulation des données.
- **NetworkX** : Pour l'analyse des graphes et la détection des communautés.
- **Pandas** : Pour la manipulation et l'analyse des données.
- **Scikit-learn** : Pour les algorithmes de machine learning et les métriques d'évaluation.
- **XGBoost** : Pour la création du modèle de détection des méchants avec boosting de gradient.

## 📚 Description du Projet

### 1. 🔍 Détection de Communautés avec LPAm+
L'algorithme **LPAm+ (Label Propagation Algorithm with Modularity)** a été implémenté pour regrouper les individus en communautés selon leurs connexions. Cet algorithme optimisait la modularité du réseau pour détecter des communautés denses.

### 2. 🌐 Identification des Influenceurs
L'objectif était de déterminer les individus les plus influents en utilisant des métriques d'influence telles que :
- **Centralité de degré**
- **Centralité de proximité**
- **Centralité d'intermédiarité**

### 3. 🦹 Modèle de Détection des Méchants avec XGBoost
Un modèle basé sur **XGBoost** a été développé pour identifier les méchants dans la communauté Marvel. Cet algorithme de boosting de gradient a été utilisé pour améliorer la précision de la détection.

## 📈 Conclusion sur la Qualité du Modèle Final

L'évaluation du modèle de détection des méchants a été réalisée à l'aide de plusieurs métriques de performance, dont :

- **Précision (Accuracy)** : Mesure de la proportion de prédictions correctes parmi l'ensemble des prédictions. Notre modèle a atteint une précision satisfaisante, démontrant sa capacité à classifier correctement la majorité des individus.
  
- **Rappel (Recall)** : Indicateur clé pour ce projet, le rappel a été maximisé pour s'assurer que le modèle détecte le plus grand nombre possible de méchants dans l'univers Marvel. Un rappel élevé était crucial pour réduire les faux négatifs, où des méchants potentiels auraient pu être manqués.

- **Précision (Precision)** : Bien que le rappel soit prioritaire, la précision a également été prise en compte pour réduire les faux positifs. Cela a permis de garantir que les individus identifiés comme méchants avaient une forte probabilité de l'être réellement.

- **F1-Score** : Le F1-score, une moyenne harmonique entre la précision et le rappel, a été utilisé comme mesure globale de la performance du modèle, équilibrant les deux métriques pour obtenir une évaluation plus nuancée de l'efficacité du modèle.

Grâce à ces analyses, le modèle final a prouvé sa robustesse dans la détection des méchants de la communauté marvel, tout en maintenant un bon équilibre entre précision et rappel. Ces résultats peuvent avoir des applications pratiques dans des domaines variés tels que la sécurité, le marketing ciblé et la surveillance des réseaux sociaux.
