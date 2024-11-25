---
lang-ref: home
layout: home
title: European Journal of Taxonomy
description: Browse data contained in our publications.
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
permalink: /

# Intégration du CSS directement dans la page
css: |
  .statistics-with-text-only {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
  }

  .statistics-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 150px;
  }

  .statistics-item .value {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .statistics-item .label {
    font-size: 1em;
    font-weight: normal;
  }
---
