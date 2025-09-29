---
layout: default
title: SETS
description: SETS project page.
---

<section class="hero">
  <h1>SETS: A Set-Based Architecture for Knowledge Integration and Discovery</h1>
  <p class="lead">The goal of SETS is to improve the performance of AI in the domain of humanities research on archival sources.</p>
</section>

<section id="about">
    <p>Our primary focus is on what we call “deep sources.” These are handwritten archival documents that contain multiple layers of meaning: their meaning is encoded as text, but also in distinctive graphical marks, physical attributes and visual layout patterns. Meaning further accumulates over time as the documents are modified, change ownership, and are reused and reinterpreted beyond the intention of their initial creation.</p>
    <p>Deep sources are as important as they are difficult to
    access and read. Archival collections measure in the millions of shelving kilometers worldwide and
    hold unique documents of high information density per square centimeter. These materials are crucial to the
    understanding of our shared past, which in turn informs choices about the future. Analyzing these materials is not
    simply a matter of information retrieval. It requires careful attention, mediation and interpretation.</p>
    <p>The name SETS is rooted in our belief that leveraging the mathematical flexibility of set theory will be fundamental
    to achieving our goal. Set theory will allow us to represent knowledge as a dynamic graph structure where entities,
    relationships, and even concepts are defined within the graph itself as nested sets. In a SETS graph, meaning
    resides in the topological structure, which is inherently mutable and extensible, allowing the framework to evolve
    alongside scholarly inquiry and discovery. This architecture complements the complex and layered history of deep
    sources and the scholarship that makes them accessible, thus enabling the creation of new knowledge.</p>
    <p>Preliminary work on the development of SETS began in the Spring of 2025 when the team was awarded a Propel grant from
    the Dean of Research at Stanford University. The Propel grant funded experiments to improve efficiency in learning
    from archival handwritten sources, a complex and time-consuming task that severely constrains the scope of research
    agendas. We examined approaches to scaling the analysis of several archival images. This operationrequired defining: 1. the components of scholarly analysis;  and 2. the dimensions to be considered when designing evaluation metrics.</p>
      <h2>Phase 1: Evaluating Human-AI Interaction with Deep Sources</h2>
      <p>Our first step was creating a benchmark for human-model interaction in the analysis of deep sources (Lee et al, 2024). This evaluation framework aims to improve upon existing benchmarks for multi-modal models by taking a deep and focused approach rather than a broader but flatter approach (Yue et al, 2024). Our framework attends to the complexity of deep sources as textual, visual, and physical objects, while also taking into account the theoretical and methodological approaches of the scholar.</p>
      <p>Whereas existing benchmarks address general reasoning capabilities, we offer a benchmark for deep sources that evaluates models on an actual workflow, measuring real task completion rather than using proxy metrics. Our benchmark design is grounded in the following assumptions:</p>
      <ul>
      <li>A world model in the humanities is not singular and general, but discipline-specific, informed by previous research,  evolving as research insights emerge and as interpretive paradigms change.</li>
      <li>Deep sources hold information in their physical qualities that cannot be accessed in current digital surrogates.</li>
      <li>While the potential to scale-up research in the humanities motivates our interest in AI, deep sources will always be a minority data domain because their unique qualities are intertwined with historical moments, geographical setting, political circumstances, etc.</li>
    </ul>
</section>

<section id="outcomes">
  <h3 id="outcomes-title" style="margin-top:0;">Experiments and Outcomes</h3>

  <div class="card" aria-labelledby="outcomes-title">
    <!-- Mermaid diagram -->
    <div class="mermaid">
    flowchart LR
      A[1.1 Deep Source Analysis by Scholar] --> B[1.2 Image Pre-processing & Text Transcription]
      B --> C[1.3 LLM-aided Document Analysis]
      C --> D[1.4 Historian-guided LLM Document Analysis]
   

      A1[Establishing sophisticated benchmark<br/>for archival document understanding]
      B1[Comparison of methods and models<br/>for document digitization]
      C1[Measure confidence, entropy, and accuracy<br/>on 21 information retrieval tasks<br/>across three frontier models]
      D1[Evaluate scholar-language model<br/>interaction on analysis tasks]
     

      A -.-> A1
      B -.-> B1
      C -.-> C1
      D -.-> D1

      style A fill:#e1f5fe
      style B fill:#f3e5f5
      style C fill:#e8f5e8
      style D fill:#fff3e0
  
    </div>
    <p class="small"></p>
  </div> 
  
<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.1: Deep Source Analysis</h4>
<p>We propose a real-world benchmark based on an expert analysis of deep sources. We address the critique that most benchmarks test breadth over depth by assuming that AI and scholars will work in collaboration. We address concerns that current benchmarks do not adequately present real-world relevant tasks by testing with an actual use case employing actual source materials, rather than artificial tasks or generated images.<a href="/propel-1.1/">Read the report.</a></p>
<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.2: Image pre-processing</h4>
<p>For many archives professionally produced digital images do not exist. Rather, scholars often enter archives with their own digital camera and are permitted to photograph documents themselves under sufficient but not ideal lighting conditions. The images for this case study were acquired this way. We experiment with existing methods to improve machine-readability of photographed archival manuscripts. We arrive at: 1. a merely adequate expedient method and 2. a preferred method that is computationally costly. Further work will need to be done to improve upon this preferred method.<a href="/propel-1.2/">Read the report.</a></p>
<h4 id="outcomes-title" style="margin-top:0;">Propel Experiment 1.4: Expert-directed Analysis</h4>
<p>This experiment builds on 1.1 and 1.3 to complete a manual, close evaluation of how LLMs fare when provided with expert scholarly guidance. We run this experiment over 3 deep source documents for which we have established accurate transcriptions. In 1.1 we determine how a scholar analyzes a deep source document. In experiment 1.3, we evaluate how a range of LLMs responded to a set of questions about a set of deep source documents. In 1.4, we evaluate the same range of LLMs’ responses to those same questions, but first we provide the LLMs with guidance in the form of context (background information about the deep sources documents ), and then we add transcriptions of the deep sources. Finally, we introduce a request that requires atomizing and synthesizing information retrieved from deep sources. <a href="/propel-1.4/">Read the report.</a></p>
</section>

<section id="team" class="card" aria-labelledby="team-title">
  <h2 id="team-title">Team</h2>
  <div class="team-grid">
    <div class="team-col" aria-labelledby="leads-title">
      <h3 id="leads-title">Leads</h3>
      <ul class="people">
        <li><span class="name">Giovanna Ceserani</span><br><span class="affil">Stanford University</span></li>
        <li><span class="name">Sebastian Ahnert</span><br><span class="affil">Cambridge University</span></li>
      </ul>
    </div>
    <div class="team-col" aria-labelledby="contributors-title">
      <h3 id="contributors-title">Contributors</h3>
      <ul class="people">
            <li><span class="name">Nicole Coleman</span><br><span class="affil">Independent</span></li>
            <li><span class="name">Allen Romano</span><br><span class="affil">Independent</span></li>
            <li><span class="name">Huijun Mao</span><br><span class="affil">Stanford University</span></li>
            <li><span class="name">Teresa Ceserani</span><br><span class="affil">Independent</span></li>
      </ul>
    </div>
    <div class="team-col" aria-labelledby="consultants-title">
      <h3 id="consultants-title">Consultants</h3>
      <ul class="people">
            <li><span class="name">Diyi Yang</span><br><span class="affil">Stanford University</span></li>
            <li><span class="name">Michele Mauri</span><br><span class="affil">Politecnico di Milano, DensityDesign</span></li>
      </ul>
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
