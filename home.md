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

#CSS
style:
  .statistics-With-Text-Only
  {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
  }

  .statistics-item
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 150px;
  }

  .statistics-item .value
  {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .statistics-item .label
  {
    font-size: 1em;
    font-weight: normal;
  }

---
