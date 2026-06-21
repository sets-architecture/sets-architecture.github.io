---
layout: default
title: LLMs and Handwritten Archival Documents
description: SETS project page.
---

<section class="hero">
  <h1>SETS: LLMs and Handwritten Archival Documents</h1>
</section>

<section id="about">

    <p>Preliminary work on the development of SETS began in the Spring of 2025 when the team was awarded a Propel grant from the Dean of Research at Stanford University. The Propel grant funded experiments to improve efficiency in learning from archival handwritten sources, a complex and time-consuming task that severely constrains the scope of research agendas. We examined approaches to scaling the analysis of several archival images. This operationrequired defining: 1. the components of scholarly analysis;  and 2. the dimensions to be considered when designing evaluation metrics.</p>
      <p>Our first step was creating a benchmark for human-model interaction in the analysis of handwritten archival sources (Lee et al, 2024). This evaluation framework aims to improve upon existing benchmarks for multi-modal models by taking a handwritten archival and focused approach rather than a broader but flatter approach (Yue et al, 2024). Our framework attends to the complexity of handwritten archival sources as textual, visual, and physical objects, while also taking into account the theoretical and methodological approaches of the scholar.</p>
      <p>Whereas existing benchmarks address general reasoning capabilities, we offer a benchmark for handwritten archival sources that evaluates models on an actual workflow, measuring real task completion rather than using proxy metrics. Our benchmark design is grounded in the following assumptions:</p>
      <ul>
      <li>A world model in the humanities is not singular and general, but discipline-specific, informed by previous research,  evolving as research insights emerge and as interpretive paradigms change.</li>
      <li>Handwritten archival sources hold information in their physical qualities that cannot be accessed in current digital surrogates.</li>
      <li>While the potential to scale-up research in the humanities motivates our interest in AI, handwritten archival sources will always be a minority data domain because their unique qualities are intertwined with historical moments, geographical setting, political circumstances, etc.</li>
    </ul>
</section>

<section id="outcomes">
  <h3 id="outcomes-title" style="margin-top:0;">Experiments and Outcomes</h3>

  <div class="card" aria-labelledby="outcomes-title">
    <!-- Mermaid diagram -->
    <div class="mermaid">
    flowchart LR
      A[1.1 Archival Document Analysis by Scholar] --> B[1.2 Image Pre-processing & Text Transcription]
      B --> C[1.3 Naive LLM Document Analysis]
      C --> D[1.4 Expert-guided LLM Document Analysis]
      D --> E[1.5 LLM Data Extraction]


      A1[Establishing sophisticated benchmark<br/>for archival document understanding]
      B1[Comparison of methods and models<br/>for document digitization]
      C1[Measure confidence, entropy, and accuracy<br/>on 21 information retrieval tasks<br/>across three frontier models]
      D1[Evaluate scholar-language model<br/>interaction on analysis tasks]
      E1[Structured per-traveler extraction<br/>across naive, guided, and<br/>guided + transcription phases]


      A -.-> A1
      B -.-> B1
      C -.-> C1
      D -.-> D1
      E -.-> E1

      style A fill:#e1f5fe
      style B fill:#f3e5f5
      style C fill:#e8f5e8
      style D fill:#fff3e0
      style E fill:#fce4ec

    </div>
    <p class="small"></p>
  </div>

<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.1: Handwritten archival Source Analysis</h4>
<p>We propose a real-world benchmark based on an expert analysis of handwritten archival sources. We address the critique that most benchmarks test breadth over depth by assuming that AI and scholars will work in collaboration. We address concerns that current benchmarks do not adequately present real-world relevant tasks by testing with an actual use case employing actual source materials (see examples <a href="/archives/">here</a>), rather than artificial tasks or generated images. <a href="/handwritten archival-sources/propel-1.1/">Read the report.</a></p>
<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.2: Image pre-processing</h4>
<p>For many archives professionally produced digital images do not exist. Rather, scholars often enter archives with their own digital camera and are permitted to photograph documents themselves under sufficient but not ideal lighting conditions. The images for this case study were acquired this way. We experiment with existing methods to improve machine-readability of photographed archival manuscripts. We arrive at: 1. a merely adequate expedient method and 2. a preferred method that is computationally costly. Further work will need to be done to improve upon this preferred method. <a href="/handwritten archival-sources/propel-1.2/">Read the report.</a></p>
<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.3: Naive Handwritten archival Source Analysis</h4>
<p>This experiment measures how the models’ answers to a set of questions posed about 39 document images compare to the ground truth. For each image there were three runs across the frontier models: Claude Opus, GPT 5.2, Gemini 2.5 Pro, Gemini 3.1 Pro, and Claude Opus with thinking. <a href="/handwritten archival-sources/propel-1.3/">Read the report.</a> &middot; <a href="{{ '/handwritten archival-sources/question-answering/' | relative_url }}">View analyses</a></p>
<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.4: Expert-directed Handwritten archival Source Analysis</h4>
<p>This experiment builds on 1.1 and 1.3 to complete a manual, close evaluation of how LLMs fare when provided with expert scholarly guidance. We ran this experiment over the same 39 handwritten archival source documents used in 1.3 and we evaluate the same range of LLMs’ responses to the 22 questions. The difference is that we provide the LLMs with guidance established in 1.1. <a href="/handwritten archival-sources/propel-1.4/">Read the report.</a> &middot; <a href="{{ '/handwritten archival-sources/question-answering/' | relative_url }}">View analyses</a></p>
<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.5: LLM Data Extraction</h4>
<p>This experiment extends 1.3 and 1.4 from question answering to structured data extraction, asking models to populate a 9-field per-traveler schema (name, titles, dates, place of stay, family, origin, etc.) for three representative pages spanning page density (10, 18, and 37 travelers). Each (model, page) is run under three phases — naive, guided, and guided + transcription — for 10 runs each. <a href="{{ '/handwritten archival-sources/data-extraction/' | relative_url }}">View analyses</a></p>
</section>

<section id="analyses">
  <h3 style="margin-top:0;">Analysis Reports</h3>
  <p>Two experiment sets have produced quantitative results. Each links to a consolidated set of analysis reports:</p>
  <ul>
    <li><a href="{{ '/handwritten archival-sources/question-answering/' | relative_url }}"><b>Naive vs Guided Question Answering</b></a> — 22 questions across 39 archival page images, with and without expert guidance.</li>
    <li><a href="{{ '/handwritten archival-sources/data-extraction/' | relative_url }}"><b>Data Extraction</b></a> — 9-field structured extraction across 3 representative pages and 3 prompt phases.</li>
  </ul>
</section>

<section id="team" class="people" aria-labelledby="team-title">
  <h2 id="team-title">The Handwritten archival Source Analysis research team</h2>
  <div class="investigators">
    <div class="person">
      <span class="mug"><img src="{{ '/assets/images/people/ceserani-giovanna.webp' | relative_url }}" alt=""></span>
      <span class="name">Giovanna Ceserani</span>
      <span class="role">Principal Investigator</span>
      <span class="affiliation">Stanford University</span>
    </div>
    <div class="person">
      <span class="mug"><img src="{{ '/assets/images/people/coleman-nicole.jpg' | relative_url }}" alt=""></span>
      <span class="name">Nicole Coleman</span>
      <span class="affiliation">Independent</span>
    </div>
  </div>
  <div class="team">
    <div class="columns">
      <div class="person">
        <span class="mug"><img src="{{ '/assets/images/people/romano-allen.jpg' | relative_url }}" alt=""></span>
        <span class="name">Allen Romano</span>
        <span class="affiliation">Independent</span>
      </div>
      <div class="person">
        <span class="mug"><img src="{{ '/assets/images/people/mao-huijun.jpeg' | relative_url }}" alt=""></span>
        <span class="name">Huijun Mao</span>
        <span class="affiliation">Stanford University</span>
      </div>
      <div class="person">
        <span class="mug"><img src="{{ '/assets/images/people/ceserani-teresa.webp' | relative_url }}" alt=""></span>
        <span class="name">Teresa Ceserani</span>
        <span class="affiliation">Independent</span>
      </div>
    </div>
  </div>
  <div class="consultants">
    <h3>Consultants</h3>
    <div class="person">
      <span class="mug"><img src="{{ '/assets/images/people/Yang-Diyi.jpg' | relative_url }}" alt=""></span>
      <span class="name">Diyi Yang</span>
      <span class="affiliation">Stanford University</span>
    </div>
    <div class="person">
      <span class="mug"><img src="{{ '/assets/images/people/ahnert-sebastian.jpg' | relative_url }}" alt=""></span>
      <span class="name">Sebastian Ahnert</span>
      <span class="affiliation">Cambridge University</span>
    </div>
    <div class="person">
      <span class="mug"><img src="{{ '/assets/images/people/mauri-michele.jpg' | relative_url }}" alt=""></span>
      <span class="name">Michele Mauri</span>
      <span class="affiliation">Politecnico di Milano, DensityDesign</span>
    </div>
  </div>
</section>

<section id="references" aria-labelledby="references-title" class="section-spacer">
  <h2 id="references-title">References</h2>
  <ol class="refs">
    <li>Lee, Mina, Megha Srivastava, Amelia Hardy, et al. 2024. “Evaluating Human-Language Model Interaction.” https://arxiv.org/abs/2212.09746.</li>
    <li>Yue, Xiang, Yuansheng Ni, Kai Zhang, et al. 2024. “MMMU: A Massive Multi-Discipline Multimodal Understanding and Reasoning Benchmark for Expert AGI.” Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), June, 9556–67.</li>
  </ol>
</section>
