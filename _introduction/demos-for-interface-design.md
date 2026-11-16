---
title: Demos for Interface Design
description: Three demos exploring approaches for the future SETS interface — how a question is answered in a SETS graph, how scholars can query SETS data without writing code, and how computer vision can help encode data from manuscript images.
date: 2026-11-16
image: /assets/images/introduction/demos-for-interface-design/fig-01.webp
---

{% assign img = '/assets/images/introduction/demos-for-interface-design/' | relative_url %}

We built three demos to explore and test approaches for the future SETS interface.

SETS represents a researcher’s source data as a network of sets: every person, place, date and relationship recorded in a document becomes a node, and every statement in the record becomes a link between them. This makes it possible to ask complex questions, such as *who travelled with whom* or *whose guardian was freed on the same day*, across thousands of entries at once.

The first demo illustrates how a question is encoded and answered in SETS language; the second one tests three approaches (choosing among pre-determined questions, free question typing in natural language, and raw querying in SETS language) for scholars’ engagement with data encoded in SETS; the third one explores how computer vision can aid data collection and encoding in SETS under active scholars’ direction.

These demos established a shared basis for discussion with scholars, for gathering feedback and fostering collaborative reflection before moving forward with development. They were also presented in the October 2026 London convening of the 2025–2027 HAVI awardees.

Here below are screenshots and more details about each of the demos.

## Demo 1: How a natural language question is encoded in the SETS query language, and how it is answered in a SETS graph

The first demo provides scholars with insight into the process of how a query written in natural language is translated into a SETS query, which steps are taken to answer it, and how these steps are reflected in and form the structure of the SETS graph. To optimise for speed and to make the query more modular and transparent, SETS does not answer a query in a single step. It rather breaks the query down into a series of sub-questions and solves them in a given order, moving from what is already known to what is being sought. The SETS query graph is then matched to the complete SETS graph representation of the entire data. The nodes in the data graph to which the unlabelled nodes in the query graph are matched provide the answers to the scholar’s query.

The demo is constructed around two sample queries. The first query, based on the *Grand Tour* case study dataset, looks for the age of travelers when they visited Rome (Figure 1). The second query, based on the *Senegal Liberations Registers* case study dataset, looks for instances in which a guardian has the same name as another person seeking liberation on the same date (Figure 2).

<figure markdown="1">
![Screenshot of Demo 1. On the left, the Grand Tour query in natural language, its SETS-language version and the first explanatory step; on the right, the SETS graph with pills, circles and diamonds, where only the elements of the first step are coloured.]({{ img }}fig-01.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 1
</figcaption>
</figure>

### Interface design notes

The interface is a single screen divided in two parts: the query and the SETS graph.

For example in Figure 1, on the left, the scholar first sees the query composed in natural language: “For travelers who have Rome as a stop find their age at the time of their visit”. Just below is the same query written in SETS language. Underneath is an explanation that the query can be answered by solving four sub-questions in order. We see the first of those four: “Which stops happened in Rome?” On the right is the SETS graph for the same query. This graph is interactive. The scholar can open each step from the explanation, or click on a term in the query or a node in the graph, and the interface shows the parts of the graph involved in that step.

#### Visual language

The shapes of the nodes in the graph, as seen in Figure 1, show what role each element plays:

* **Pills** are known terms taken directly from the query, such as *Rome* or *person*.
* **Circles** are searched items, the things the system has to find.
* **Diamonds** are junction nodes, which link two items together, such as the visit that connects a traveller to a stop.

Below each step, a short list explains each symbol of the SETS language. The `%` symbols are blanks the system has to fill in. The `@` symbols are the results passed on from the previous step. Hovering over a line in the list highlights the matching element in the graph.

The visual language is deliberately restrained. Black outlines on white, a limited selection of soft colors, and a serif italic for the natural-language query keep attention on the structure of the query rather than on the interface. This first prototype offers a basis for discussion with scholars. The purpose is to test whether making the logic of SETS visible helps the scholars question and refine the queries they write.

<figure markdown="1">
![Screenshot of Demo 1 with the Senegal register query: each concept has its own colour in the sentence, in the SETS-language query and in the graph, and the explanation lists five steps.]({{ img }}fig-02.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 2
</figcaption>
</figure>

#### Colour code

The main design device is a shared colour code. Each concept in the query has a colour, and that colour is used in all four representations of the query: 1. the term in the natural-language sentence; 2. the matching element of the SETS-language query; 3. the nodes in the graph; and 4. the symbols in the explanation of each step.

When an explanatory step is selected, as seen in Figure 2, only the elements it involves keep their colour. Everything else turns grey. This lets the scholar trace a concept such as “stop” or “traveller”, across all four representations, and see how SETS breaks the query into subquestions.

## Demo 2: Asking questions of structured data in SETS, without writing code

SETS’ representation of structured data drawn from historical sources as a network of sets makes it possible to ask complex questions. But the SETS query language (`graph_match`) is hard to read for anyone outside the technical team.

Demo 2 explores how this gap might be addressed. The goal is to imagine how scholars will put their questions to an existing dataset, see the answer, and understand how it was obtained.

It is a Python application built with Streamlit on top of the SETS engine and the two case study datasets. The interface was developed through rapid iterations between design and code: the layout and visual identity were first defined as static mock-ups, then applied to the working application and refined directly on real data, section by section. A lightweight, self-contained HTML version of selected views was also produced, so that results can be shared and browsed without the user having to install and compile software.

### Two sources, one interface

<figure markdown="1">
![Screenshot of Demo 2 with the Grand Tour itineraries loaded. A sidebar lets the user switch between the two datasets; the main area shows the three tabs Ask a question, Preset questions and Raw query.]({{ img }}fig-03.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 3
</figcaption>
</figure>

The demo works on two datasets with very different structures. Both are loaded into the same SETS graph engine and explored through the same interface, to demonstrate that the approach does not depend on any particular source.

* **The Senegal Liberations Registers (1881)**: this is a dataset drawn from the records of the liberations of enslaved people in colonial Senegal, which provides information of their origins, ages, guardians, places and dates of liberation.
* **Grand Tour Itineraries**: this is a dataset drawn from the Grand Tour Explorer, about the lives and journeys of 6007 eighteenth-century travellers, in particular the locations and dates of their itineraries in Italy, and their family relations (parents and marriages).

### Three entry points

The demo offers three ways to interrogate the data:

<figure markdown="1">
![Screenshot of the Preset questions tab of Demo 2: the question People at a place, its action sentence, a place name field filled with Venice, and summary counts of stops and people found.]({{ img }}fig-04.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 4
</figcaption>
</figure>

**1. Select a preset question.** The interface displays a curated set of research questions, formulated on the basis of the scholars’ expressed interests. Each question is designed around a specific line of inquiry, such as: for the Grand Tour Itineraries, which travelers visited certain places and at what age, which travelers traveled together or which travelers mentioned each other (Figure 4); for the Senegal Liberations Registers (1881), a person’s record and their connections, the monthly rhythm of liberations, where people came from and where they were freed, the groups liberated together, and guardian–ward pairings.

<figure markdown="1">
![Screenshot of the Ask a question tab of Demo 2: example questions as buttons, the typed question who visited Padua, and a table of travellers as the answer.]({{ img }}fig-05.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 5
</figcaption>
</figure>

**2. Type a question.** The question is typed in plain English, such as *“who was liberated in Dakar”* or *“family of Charles Abbot”*. SETS recognises the concepts in the question that have been defined in the encoding and translates the questions using those concepts into SETS queries.

<figure markdown="1">
![Screenshot of the Raw query tab of Demo 2: an action sentence, an optional English question, and an editable SETS graph_match query ready to run.]({{ img }}fig-06.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 6
</figcaption>
</figure>

**3. Raw query.** The interface offers the possibility of using the SETS language itself, for users who want to write or adapt queries directly. This option might be unlikely to be used by scholars but is included to track the process.

### Interface design notes

**An action before every answer.** For each entry point, the screen shows an *action*: a short sentence that states what the user can do or see, for example *“See where liberated people came from and where they were liberated.”*

**Full data table first, then visualisation.** Wherever the answer to a question generates multiple visualizations, the first one to be displayed is the table: the data as recorded, which can be checked line by line. The other visualisations can be selected with a single click, without re-running the search: a diagram of a person’s connections, the raw SETS graph, a chart of liberations by month, a bar chart of origins coloured by place of liberation. Each visualisation remains anchored to the records the user has already seen in the table. This maintains a concrete point of reference while exploring different visualizations.

<figure markdown="1">
![Screenshot of Demo 2 with the Senegal liberation register: the preset question Flow by month shown as a table of liberations per jurisdiction and month in 1881.]({{ img }}fig-07.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 7
</figcaption>
</figure>

<figure markdown="1">
![Screenshot of the same preset question shown as a line chart comparing liberations by month in Saint Louis, Gorée and Dakar.]({{ img }}fig-08.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 8
</figcaption>
</figure>

## Demo 3: How to encode data from manuscript images into SETS?

<figure markdown="1">
![Screenshot of the Annotate view of Demo 3 in Select mode: the manuscript page with numbered elements outlined in white, one selected in red, and its record (transcription, translation, debtor, place, amount, year, element type, visual characteristics) on the right.]({{ img }}fig-09.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 9
</figcaption>
</figure>

This demo explores whether a computer vision (CV) pipeline, revealed through an interface, can 1) assist scholars in creating structured, searchable data through direct interaction with a digitized archival manuscript image and 2) use that data to search across the corpus for distinct elements.

The proposed design solutions below use one page from an Ottoman fiscal codex (MAD 9726, p. 261, Başbakanlık Osmanlı Arşivi, Istanbul). This page lists outstanding debts (*zimmet*) owed to the treasury by officials, tax farmers and private individuals. Each entry indicates a debtor, a place, an amount in *guruş* (the Ottoman currency) and a year in the Ottoman Hijri calendar.

### Annotate: digital images to structured data

In the Annotate view, elements are pre-selected automatically by the CV. The scholar can choose one of these pre-selected elements (represented as boxes outlined in white in Figure 9) or make an alternative element selection by drawing directly on the image of the manuscript to identify an area of interest (dotted black lines in Figure 10).

Once an element is selected, a dedicated window opens up where the scholar can fill in information related to it: the transcription, an English translation, and various fields defined by the scholar. For this case study we see, for example, debtor, place, amount, year, element type and visual characteristics.

<figure markdown="1">
![Screenshot of the Annotate view in Draw mode: a new element outlined freehand with a dotted black line on the manuscript, next to an empty record form.]({{ img }}fig-10.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 10
</figcaption>
</figure>

#### Interface design notes

* **The image is the main source.** The manuscript takes up most of the screen and the input form for annotating the selected element is placed right next to it. The scholar never loses sight of the document image, maintaining a visible link to the numbered element in the image being annotated.
* **Free drawing.** Elements are selected by freely drawn outlines rather than fixed boxes. This is important because the records in the Ottoman fiscal codexes are often irregular, crowded or written across one another. The flexibility of free drawing reflects how the text appears on the page.
* **Interpretation rests with the scholar.** The element type (“you classify it”) and the visual characteristics (“you tick what you see”) are entered by the scholar, not inferred automatically.
* **The material features of the document count as data.** Corrections, red-ink annotations and faded or uncertain readings can be recorded for each element and serve as search criteria across the set of manuscript images.

### Query: from records back to the images

<figure markdown="1">
![Screenshot of the Query view of Demo 3: search filters for debtor, place, minimum amount, year, element type and visual characteristics, above a grid of eleven manuscript fragments with their key data.]({{ img }}fig-11.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 11
</figcaption>
</figure>

The Query view lets researchers search all annotated elements by debtor, place, minimum amount, year, element type and visual characteristics. Results appear as a grid of image fragments, each with its key information.

#### Interface design notes

* **Search fields match the annotation fields.** Annotating and searching use the same structure, so what is recorded in one view can always be found in the other.
* **Results are shown as images, not table rows.** Each result keeps its fragment of the manuscript. Researchers compare entries by what they look like as well as by their data, and can check every result against the source.
* **Uncertainty is searchable.** A scholar can, for example, find all entries with corrections or uncertain readings. That makes it possible to explore visual characteristics of the sources.

<figure markdown="1">
![The manuscript page MAD 9726, p. 261, next to its transcription with marginal notes reproduced in position.]({{ img }}fig-12.webp){: .img-full .can-fullscreen }
<figcaption markdown="1">
Figure 12
</figcaption>
</figure>
