---
layout: default
title: Propel 1.3
description: Naive LLM Analysis of Archival Document Images.
permalink: /propel-1.3/
---

<p class="parent-link"><a href="{{ '/deep-sources/' | relative_url }}">← Deep Source Analysis with LLMs</a></p>

# 1.3 Naive LLM Analysis of Deep Sources
This experiment is to measure how the models' answers to a set of questions posed about 39 document images compare to the ground truth. This experiment was run across three frontier models as of January 2026: , Claude Opus, GPT5.2, and Gemini 3 Pro. Our intention was to run this experiment before 1.4. We were not able to that because of initial obstacles to gathering ground truth data for all 39 images. Instead, we ran the expert-guided experiment in September 2025 and then returned to run this naive experiment in December 2025 - January 2026.

Generating the accurate ground truth data for all 39 images was essential to the final analysis of the results and to the revisions to the questions themselves. The careful analysis of the 39 images and interpretation of results influenced the final questions. Close analysis of the 39 images.

Since we had already run the expert-guided experiment on three of the images, we anticipated that the models would fare better on this naive experiment. Instead, the errors reveal basic limitations to relying on LLMs for question-answering on deep sources. We concluded that: 1. Due to model variability (non-determinism) there were significant variations in results even on the same images; 2. Repeated queries yielded different results; 3. Accuracy measurements vary but do not necessarily improve with later runs. See the [consistency report](consistency_report.md) for a full analysis.

For example, on model results generated 2026-01-06 at 14:49:32 compared to model results generated 2026-01-06 at 15:34:48 (45 minutes later), we see the following differences in answers to the same questions on the same images: 

 - Claude Opus: 255 differences across all questions 
 - Gemini: 395 differences across all questions
 
 For the first image AVS IS 758-781 1766 02.jpg
 
 Claude differences: 
  - Additional circular marks: 0 vs 21 
  - Curly brackets on page: 14 vs 0  
  - Named travelers: 20 vs 13 
  - Top left mark: N vs Y 
  - Annotation text: "tutti annottati infermi..." vs N/A                                  
  
  Gemini differences:
  - Year: 1768 vs 1765                    
  - Is signed: Y vs N 
  - Instances of "con": 5 vs 4
  - Instances of quondam: 5 vs 8      
  - Named travelers: 19 vs 20     


## Question Answering - Prompt and Tasks

For the attached document images, provide answers to the following questions in a tabular format. Create a separate table for each image. Include the confidence value (as percentage measure)of the answer for each question.


Is there a date (with year) near or at the top of the page? (Y/N) 
If so, what is the year? (Value) 


Does the page have two columns? (Y/N) 


Is the page signed? (Y/N) 
If it is signed, where does the signature appear on the page? (Location) 


Is there a small circular mark in the top left corner of the page? (Y/N) 
How many additional small circular marks are on the page (not part of a word, but as an annotation mark)? (Count) 


How many instances of quondam? (Count) 


How many instances of “con” as a preposition are on the page? (Count) 
What two words immediately follow each instance of “con”? (Value) 


How many instances of “e” as a conjunction? (Count) 
What two words immediately follow “e” as a conjunction? (Value) 


How many travelers are mentioned by name? (Count) 
How many travelers are mentioned who are not named? (Count) 

How many instances of place of origin and nationality describing the travelers appear in the document? Count the same place (expressed either as an adjective or as “di” + placename) only once. (Count) 


How many unique places of stay are mentioned on the page? (Count) 
How many places of stay (count all) are mentioned per column? (Count for left column, count for right column)


How many indications of place of stay (i.e. ‘in casa di [x]) include a person’s name? (Count for each instance even if the name is repeated) 

How many curly brackets appear on the page? (Count) 
How many curly brackets appear per column? (Count for left column, count for right column)


Where there are curly brackets, is there an annotation describing the bracketed information? (Y/N)  Write the words in the annotation. (Multiple values)

