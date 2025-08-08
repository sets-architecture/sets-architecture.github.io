# Historical Document Image Processing Methods

## Overview: Processing Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Input     │───▶│ Processing  │───▶│  Enhanced   │───▶│ Application │
│ Document    │    │   Method    │    │   Output    │    │    (OCR)    │
│   (JPG)     │    │             │    │   Image     │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

## Processing Methods Comparison

| Method | Core Technique | Best For | Complexity |
|--------|---------------|----------|------------|
| **Edge Detection** | Canny Edge Detection | Edge-heavy documents | Low |
| **Color Filtering** | HSV Color Space | Brown/sepia ink | Low |
| **Adaptive Threshold** | Gaussian Thresholding | General enhancement | Medium |
| **Contrast Enhancement** | Histogram Equalization | Severely faded text | Medium |
| **Graph Analysis** | Connected Components | Structural understanding | High |
## LLM OCR Experimental Framework

### Pipeline Overview
```
Original Document
        │
        ▼
┌───────────────┐
│ Preprocessing │ ────▶ Adaptive Threshold Output
│               │ ────▶ Graph Analysis Output  
└───────────────┘
        │
        ▼
┌───────────────┐
│ LLM Processing│ ────▶ Multiple Models × Temperatures
└───────────────┘
        │
        ▼
┌───────────────┐
│   Evaluation  │ ────▶ Compare vs Ground Truth
└───────────────┘
```

### Method Details & Applications

#### Standard Enhancement Methods
```
Edge Detection:     Input ──▶ [Canny Edge] ──▶ [Morphological Closing] ──▶ Output
Color Filtering:    Input ──▶ [HSV Filter] ──▶ [Brown Ink Isolation] ──▶ Output  
Adaptive Threshold: Input ──▶ [Adaptive Threshold] ──▶ [Morphological Ops] ──▶ Output
Contrast Enhancement: Input ──▶ [CLAHE] ──▶ [Local Adaptation] ──▶ Output
```

#### Advanced Structural Analysis
```
Graph Analysis: Input ──▶ [Connected Components] ──▶ [Graph Construction] ──▶ [Shape Analysis] ──▶ [Token Network] ──▶ Output
```

**Graph Analysis Process:**
1. Convert document pixels to graph representation
2. Identify connected text components
3. Analyze component shapes and relationships
4. Build spatial network of text elements
5. Apply multi-threshold robustness testing

## Method Selection Decision Tree

```
Document Type?
├── General historical text ────────────▶ Adaptive Threshold
├── Brown/sepia ink ───────────────────▶ Color Filtering + Adaptive Threshold  
├── Severely faded ────────────────────▶ Contrast Enhancement
├── Edge-dominant content ─────────────▶ Edge Detection
└── Need structural analysis ──────────▶ Graph Analysis
```

### Performance Comparison Matrix

| Document Type           | Edge Detection | Color Filtering | Adaptive Threshold | Contrast Enhancement | Graph Analysis |
| ----------------------- | -------------- | --------------- | ------------------ | -------------------- | -------------- |
| **General Text**        | ⚪              | ⚪               | ✅                  | ⚪                    | ✅              |
| **Brown Ink**           | ⚪              | ✅               | ⚪                  | ⚪                    | ⚪              |
| **Faded Text**          | ⚪              | ⚪               | ⚪                  | ✅                    | ⚪              |
| **Edge-Heavy**          | ✅              | ⚪               | ⚪                  | ⚪                    | ⚪              |
| **Structural Analysis** | ⚪              | ⚪               | ⚪                  | ⚪                    | ✅              |

*Legend: ✅ Optimal, ⚪ Suboptimal*


### Experimental Dataset Structure
```
Data/
├── document_1/
│   ├── original.jpg                      # Source document
│   ├── adaptive_threshold.jpg            # Standard processing
│   ├── graph_analysis.jpg                # Advanced processing
│   ├── {model}_{method}_{temp}.txt       # LLM transcriptions
│   └── ground_truth.txt                  # Reference transcription
└── [6 more document folders]
```

**Transcription Naming:** `{model}_{method}_{temperature}`

**Evaluation Focus:**
- Processing method effectiveness comparison
- LLM model performance evaluation
- Temperature parameter sensitivity analysis
- Cross-method transcription consistency

## Method Selection Guidelines

### Quick Reference
- **Default choice:** Adaptive Threshold for most historical documents
- **Aged documents:** Color Filtering + Adaptive Threshold for brown ink
- **Poor quality:** Contrast Enhancement for severely faded text
- **Research applications:** Graph Analysis for document structure understanding
- **LLM OCR experiments:** Adaptive Threshold + Graph Analysis preprocessing

### Performance Notes
- **Adaptive Threshold** shows most consistent results across document types
- **Graph Analysis** provides detailed structural information but requires higher computational resources
- **Combined methods** (e.g., Color Filtering + Adaptive Threshold) often yield best results for specific document characteristics
