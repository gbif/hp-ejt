---
lang-ref: home
layout: home
title: European Journal of Taxonomy
description: Find data contained in our publications.
background:  "{{ site.data.images.acalypha_gillespieae.src }}"
imageLicense: "{{ site.data.images.acalypha_gillespieae.caption }}"
height: 90vh
cta:
  - text: Papers
    href: /dataset/search
    isPrimary: true
  - text: Material
    href: /occurrence/search
composition:
  - type: heroImage # the block type
  - type: statisticsWithTextOnly
    data:
      - label: "Datasets"
        value: "1413"
      - label: "Occurrences"
        value: "41372"
      - label: "Citations"
        value: "590"
permalink: /

# Intégration du CSS directement dans la page avec une bonne structure YAML
css: |
  /* Style pour le bloc des statistiques avec valeurs au-dessus des labels */
  .statistics-with-text-only {
    display: flex; /* Utilisation de Flexbox pour aligner les éléments */
    justify-content: space-between; /* Distribution uniforme des éléments */
    gap: 30px; /* Espacement entre les éléments */
    flex-wrap: wrap; /* Permet aux éléments de passer à la ligne suivante si l'espace est insuffisant */
  }

  .statistics-item {
    display: flex;
    flex-direction: column; /* Disposition verticale : valeur au-dessus du label */
    align-items: center; /* Centrer les éléments dans chaque item */
    max-width: 150px; /* Limiter la largeur des éléments pour un meilleur rendu */
  }

  .statistics-item .value {
    font-size: 2em; /* Augmenter la taille de la valeur pour la faire ressortir */
    font-weight: bold; /* Mettre la valeur en gras */
    margin-bottom: 10px; /* Espacement entre la valeur et le label */
  }

  .statistics-item .label {
    font-size: 1em; /* Taille de police du label */
    font-weight: normal; /* Le label en poids normal */
  }

  ---
