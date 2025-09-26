# 1.4 Expert-Directed Analysis of Deep Sources
This experiment is to measure how the models improve (or not) with expert guidance. This experiment was run manaually on three document images across three frontier models as of September 2025, Claude Opus, GPT5, and Gemini 2.5 Pro. The scale of this analysis made it possible to provide accurate transcriptions as ground truth and carefully evaluate the model outputs including the "thinking" "reasoning" steps. 

## Question Answering - Tasks 1 and 2

The questions are meant to be straightforward and easily measurable. There are binary questions, counting questions, structural questions, and two that require OCR.

TASK 1: The guidance comes in the form of 1. Contextual information about the sources from a scholar’s point of view. \(See [](1.3 LLM-aided Document Analysis.)\)

TASK 2: In addition to the contextual information, the models are given full transcriptions of the documents. 

## Task 1.1 Instructions
For the attached document images, provide answers to the following questions in a tabular format. Create a separate table for each image. Include the confidence value \(as percentage measure\) of the answer for each question.

### Task 1 Performance

To evaluate Task 1.1 performance, we compared the model responses to the ground truth answers for each of the three documents using an evaluation methodology that we arrived at by first allowing the three models to define their own methodology, reviewing and revising. See the methodology described here: [task-1-task2-comparison-methodology.md](task-1-task2-comparison-methodology.md) 

| Rank | Model | Total Score | Percentage |
|------|-------|-------------|------------|
| 1 | Gemini 2.5 Pro | 35/66 | 53.0% |
| 2 | Claude Opus 4 | 32/66 | 48.5% |
| 3 | GPT-5 | 30/66 | 45.5% |


#### Factual Accuracy
- **Gemini 2.5 Pro**: Best at basic document features (dates, columns, signatures)
- **Claude Opus 4**: Moderate accuracy, inconsistent with complex counts  
- **GPT-5**: Good on structural elements, struggles with detailed content

#### Text Recognition  
- **GPT-5**: Acknowledges illegibility but provides fewer answers
- **Gemini 2.5 Pro**: Confident responses but many inaccuracies in text extraction
- **Claude Opus 4**: Mixed performance, some good transcriptions but many errors

#### Analytical Capability
- All models struggled with distinguishing word usage contexts ("con" vs "e")
- **Gemini 2.5 Pro**: Most consistent attempts at analysis
- **GPT-5**: Often acknowledged difficulty rather than guessing

#### Completeness vs Accuracy Trade-off
- **Gemini 2.5 Pro**: High completion rate but lower accuracy
- **GPT-5**: Lower completion rate and introduces confusing qualifications of certainty
- **Claude Opus 4**: Moderate completion with variable accuracy


## Task 2 Instructions
For the attached document images and transcriptions, provide answers to the following questions in a tabular format. Create a separate table for each image. Include the confidence value (as percentage measure)of the answer for each question.

### Task 2 Performance

See the full results at [task2-comparison.md](task2-comparison.md). The same evaluation methodology was used as for Task 1.1.

| Model | Document 1 | Document 2 | Document 3 | Total Score | Percentage |
|-------|------------|------------|------------|-------------|------------|
| Claude Opus | 9/21 | 9/21 | 16/21 | 34/63 | 54.0% |
| Gemini 2.5 Pro | 18/21 | 16/21 | 19/21 | 53/63 | 84.1% |
| GPT-5 | 19/21 | 16/21 | 18/21 | 53/63 | 84.1% |

## Model Rankings

1. **Tie: Gemini 2.5 Pro & GPT-5**: 53/63 (84.1%)
2. **Claude Opus**: 34/63 (54.0%)

## Category Performance Analysis

### Binary Questions (Y/N)
- **Claude Opus**: 13/15 (86.7%)
- **Gemini 2.5 Pro**: 15/15 (100%)
- **GPT-5**: 15/15 (100%)

### Factual Extraction (Counts, Values)
- **Claude Opus**: 11/30 (36.7%)
- **Gemini 2.5 Pro**: 25/30 (83.3%)
- **GPT-5**: 24/30 (80.0%)

### Complex Text Analysis (Word following, annotations)
- **Claude Opus**: 10/18 (55.6%)
- **Gemini 2.5 Pro**: 13/18 (72.2%)
- **GPT-5**: 14/18 (77.8%)

## Key Findings

1. **Overall Performance**: Gemini 2.5 Pro and GPT-5 had identical overall scores (84.1%). Claude Opus (54.0%).

2. **Strengths by Model**:
   - **Gemini 2.5 Pro**: Perfect on binary questions, strong factual extraction
   - **GPT-5**: Perfect on binary questions, best at complex text analysis
   - **Claude Opus**: Good at binary questions but struggled with counting and extraction tasks

3. **Common Error Patterns**:
   - All models had difficulty with counting circular marks
   - Column-specific counting proved challenging
   - Complex annotations with curly brackets caused errors

4. **Document-Specific Performance**:
   - Document 1 (August 20, 1770): GPT-5 performed best (90.5%)
   - Document 2 (May 28, 1770): Tie between Gemini and GPT-5 (76.2%)
   - Document 3 (February 20, 1768): Gemini 2.5 Pro performed best (90.5%)

5. **Consistency**: Gemini 2.5 Pro showed the most consistent performance across documents (85.7%, 76.2%, 90.5%), while Claude Opus showed significant variability (42.9%, 42.9%, 76.2%).

---
# Task 3 Named Travelers
This third task is to extract named travelers and their associated fields from the same three documents. The models were given the same contextual information as in Task 1.1 for Task 3.1, and the transcriptions as in Task 2 for Task 3.2. The evaluation methodology is described here: [task3-comparison-methodology.md](task3-comparison-methodology.md)

## Task 3.1 Instructions
Attached are three document images. Provide a table of output per image of all the named travelers (named foreign visitors) and the following information for each: Traveler Name, Traveler title, Date of arrival, Date of departure, Place of stay, Traveling with spouse (yes or no)?, Traveling with sibling/s (yes or no)?, Traveling with children? (count), Place of origin.

## Performance Metrics

| Model | Overall Strict Recall | Overall Relaxed Recall | Overall Field Accuracy | Mean Name Transcription Accuracy |
|-------|----------------------|------------------------|----------------------|----------------------------------|
| Claude Opus (Temperature 0) | 3.1% (2/65) | 4.6% (3/65) | 2.6% (15/585) | 73.5% |
| OpenAI GPT5 | 4.6% (3/65) | 6.2% (4/65) | 3.9% (23/585) | 71.4% |
| Gemini Pro 2.5 | 20.0% (13/65) | 24.6% (16/65) | 17.1% (100/585) | 80.7% |

## Key Findings

1. **Best Overall Performance**: Gemini Pro 2.5 significantly outperformed the other models with 20% strict recall and 17.1% field accuracy

2. **Document Difficulty**: May 28, 1770 proved most challenging for all models, with Claude and GPT5 unable to extract any matching travelers

3. **Name Transcription**: Gemini Pro 2.5 achieved the highest name transcription accuracy at 80.7%, suggesting better OCR capabilities

4. **Common Errors**:
   - All models struggled with handwritten text legibility
   - Place of origin often confused or incorrectly transcribed
   - Date fields frequently missing or incorrect
   - False positives (fabricated travelers) appeared in all model outputs

5. **Model-Specific Observations**:
   - Claude Opus: Conservative approach, many "not clear" entries
   - OpenAI GPT5: Acknowledged illegibility but attempted some extraction
   - Gemini Pro 2.5: Most aggressive extraction, highest accuracy but also more false positives

## Task 3.2 Instructions
Attached are three document images and their transcriptions. Provide a table of output per image of all the named travelers (named foreign visitors) and the following information for each: Traveler Name, Traveler title, Date of arrival, Date of departure, Place of stay, Traveling with spouse (yes or no)?, Traveling with sibling/s (yes or no)?, Traveling with children? (count), Place of origin.

## Performance Metrics
See full results at [task3.2-comparison.md](task3.2-comparison.md)

traveler detection rate (98.5% recall)
- Highest name transcription accuracy (99.8%)
- Tied for lowest false positives (1)

**Most Accurate Fields: GPT-5**
- Slightly highest field accuracy (81.5%)
- But missed more travelers than Claude (92.3% vs 98.5% recall)

**Most False Positives: Gemini 2.5 Pro**
- Generated 5 false positive travelers
- Lowest field accuracy (80.4%)
- But showed some ability to identify probable matches (relaxed recall 93.1% vs strict 92.3%)

### Performance Patterns:
- All models achieved >99% name transcription accuracy as expected since the transcriptions were provided.
- Field accuracy (80-82%) was similar across models, suggesting systematic challenges with certain field types
- The main differentiator was traveler detection completeness.



## Token usage by task and model

| Task | Model | Input tokens | Output tokens | Total |
|------|-------|--------------|---------------|-------|
| Task 1.1 | Gemini 2.5 Pro | 13,096 | 10,431 | 23,527 |
| Task 1.1 | Opus | 4,614 | 1,590 | 6,204 |
| Task 1.2 | Opus | 6,746 | 1,680 | 8,426 |
| Task 2 | Opus | 10,177 | 2,641 | 12,818 |
| Task 3.1 | Opus | 6,311 | 1,985 | 8,296 |
| Task 3.2 | Opus | 9,780 | 5,246 | 15,026 |
| Task 1.1 | GPT5 | 3,989 | 15,495 | 19,484 |
| Task 1.2 | GPT5 | 4,035 | 15,112 | 19,147 |
| Task 2 | GPT5 | 6,095 | 23,745 | 29,840 |
| Task 3.1 | GPT5 | 3,611 | 11,779 | 15,390 |
| Task 3.2 | GPT5 | 5,726 | 18,895 | 24,621 |
