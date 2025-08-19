# Historical Document Processing: From Scanned Images to Digital Text

## Complete Workflow Overview

Our research combines specialized image processing with LLMs to transform historical handwritten documents into searchable digital text. The complete pipeline consists of four main stages:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Scanned       │───▶│     Image       │───▶│  Enhanced       │───▶│    LLM OCR      │
│   Historical    │    │  Processing     │    │   Output        │    │   Pipeline      │
│   Document      │    │                 │    │   Images        │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
                                ↓                        ↓                        ↓
                       Multiple Methods:           Ready for AI:            📝 Digital Text:
                       • Adaptive                 • Clean, enhanced        • Accurate transcription
                       • Graph Analysis           • High contrast          • Structured output
                       • Color Filtering          • Noise-free             • Historical analysis
                       • Edge Detection           • Optimized format       • Searchable content
```

## The Challenge We're Solving

Historical archives worldwide contain millions of handwritten documents that are:
- **Physically deteriorating** due to age and environmental factors
- **Difficult to read** because of faded ink, discolored paper, and damaged surfaces
- **Inaccessible to researchers** who need digital, searchable text
- **Time-consuming to transcribe** manually by historians and archivists

**Our solution:** Automated enhancement and transcription to make handwritten archival documents more available for computational analysis.

---

## Image Processing Methods
Our workflow starts with image preprocessing. We employ computer vision techniques to enhance text visibility, reduce noise, and improve readability of historical documents.

### Processing Methods Overview

```
Input Document ──┬── Edge Detection ────────── Enhanced Output
                 ├── Color Filtering ──────── Enhanced Output  
                 ├── Adaptive Thresholding (3 types) ── Enhanced Output
                 ├── Graph Analysis ──── Enhanced Output
                 └── CLAHE Enhancement ──────────────── Enhanced Output
```

### Method Details and Applications

#### Edge Detection Approach
**Technique**: Canny Edge Detection + Morphological Closing
- **Best for**: Documents with clear text boundaries and strong edge definition
- **Process**: Detects text edges → Connects broken character segments → Removes noise
- **Parameters**: Threshold1=50, Threshold2=150 for edge detection
- **Use case**: Modern handwriting with good contrast

#### Color-Based Ink Isolation  
**Technique**: HSV Color Space Filtering
- **Best for**: Historical documents with brown or sepia ink on aged paper
- **Process**: Converts to HSV → Isolates brown ink range → Filters background
- **Parameters**: HSV range [20,20,100] to [30,100,255] targets brown ink
- **Use case**: Vintage documents with distinctive ink coloration

#### Adaptive Thresholding (Primary Method)
**Our most reliable and versatile approach** with three variants:

**Standard**
- Adaptive Gaussian thresholding with moderate parameters
- Morphological closing (4x4 kernel) to connect text segments  
- Morphological opening (2x2 kernel) to remove noise
- **Best for**: General historical documents

**Stronger**  
- More aggressive thresholding for severely faded documents
- Enhanced parameters: block size 21, C parameter 12
- **Best for**: Documents with very light or faded text

**Mean**
- Uses mean-based adaptive thresholding instead of Gaussian
- Better performance on documents with uneven illumination
- **Best for**: Documents with varying lighting conditions

#### Graph Analysis (Advanced Structural Method)
**Technique**: Connected Component Analysis + Graph Theory
- **Best for**: Complex document layouts and detailed structural understanding
- **Process**: 
  1. Converts document pixels to graph nodes based on connectivity
  2. Identifies connected components representing text elements
  3. Analyzes component shapes using shortest path algorithms
  4. Groups similar components using network analysis
  5. Tests multiple thresholds (130-210) for robustness
- **Output**: Detailed structural analysis with text component relationships
- **Use case**: Research applications requiring document structure understanding

#### CLAHE Enhancement
**Technique**: Contrast Limited Adaptive Histogram Equalization
- **Best for**: Documents with poor contrast and uneven lighting
- **Process**: Local contrast enhancement → Adaptive thresholding → Noise removal
- **Features**: Prevents over-amplification while enhancing faint text
- **Use case**: Severely deteriorated documents with minimal visible text


### Processing Methods Comparison

| Method                   | Core Technique                                   | Best For                                   | Complexity |
| ------------------------ | ------------------------------------------------ | ------------------------------------------ | ---------- |
| **Edge Detection**       | Canny Edge Detection                             | Edge-heavy documents                       | Low        |
| **Color Filtering**      | HSV Color Space                                  | Brown/sepia ink                            | Low        |
| **Adaptive Threshold**   | Gaussian Thresholding                            | General enhancement                        | Medium     |
| **Contrast Enhancement** | Histogram Equalization                           | Severely faded text                        | Medium     |
| **CLAHE Enhancement**    | Contrast Limited Adaptive Histogram Equalization | Uneven lighting, localized contrast issues | Medium     |
| **Graph Analysis**       | Connected Components                             | Structural understanding                   | High       |

### Performance Notes
- **Adaptive Threshold** shows most consistent results across document types
- **Graph Analysis** provides detailed structural information but requires higher computational resources

## LLM OCR Experimental Framework

After image enhancement, we employ an AI-powered transcription pipeline. The LLM-powered OCR pipeline is a step-by-step process that turns messy scans, photos, or PDFs into clear, usable text. It begins by cleaning up the image to fix issues like skew, noise, or uneven lighting. Next, it identifies different parts of the page—such as paragraphs or tables—and then uses OCR or large language models to read the text. The output is polished to correct mistakes, improve readability, and extract important details like names, dates, or numbers. Finally, the results can be saved as plain text, structured data, or even a searchable PDF, with an option for human review when extra accuracy is needed.

### Complete LLM Pipeline Architecture

```
   Enhanced Images (from above) ──┬── Preprocessing Pipeline ────┬── Multi-Model Processing
                                  │                              │
┌─────────────────────────────────┴──────────────────────────────┴────────────────────┐
│                              MODULAR OCR PIPELINE                                   │
│                                                                                     │
│     PREPROCESSING              AI PROCESSING                POSTPROCESSING          │ 
│  ┌─────────────────┐       ┌─────────────────────┐       ┌─────────────────────┐    │
│  │ • Contrast      │──────▶│  API Models:        │──────▶│ • Text Cleaning     │    │
│  │   Enhancement   │       │  • GPT-4o/4o-mini   │       │ • Entity Extraction │    │
│  │ • Image Resize  │       │  • Claude 3 Sonnet  │       │ • Format Validation │    │
│  │ • Sharpening    │       │  • Gemini 1.5/2.5   │       │ • Quality Scoring   │    │
│  │ • Noise Removal │       │                     │       │                     │    │
│  └─────────────────┘       │  Local Models:      │       └─────────────────────┘    │
│                            │  • TrOCR Handwritten│                                  │
│                            │  • LLaVA-1.5        │                                  │
│                            │  • Moondream2       │                                  │
│                            │  • InstructBLIP     │                                  │
│                            └─────────────────────┘                                  │
└────────────────────────────────────────────────────────────────────────────────────┘
                                           ↓
                            BATCH PROCESSING & ANALYSIS
                        ┌──────────────────────────────────┐
                        │ • Multi-image processing         │
                        │ • Model comparison analysis      │
                        │ • Parameter sensitivity testing  │
                        │ • Ground truth evaluation        │
                        │ • Performance benchmarking       │
                        └──────────────────────────────────┘
```

### Processing Options and Capabilities

#### Preprocessing Stage
**Purpose**: Optimize images specifically for LLM vision models
- **Contrast Enhancement**: Improves text visibility for AI models
- **Image Resizing**: Optimizes file size while preserving text quality  
- **Sharpening**: Enhances character definition for better recognition
- **Noise Removal**: Eliminates artifacts that confuse AI models

#### Multi-Model AI Processing
**Three categories of models tested:**

**API-Based Models** (Cloud)
- **GPT-4o/4o-mini**: Excellent general performance, structured output
- **Claude 3 Sonnet**: Superior reasoning, historical context understanding
- **Gemini 1.5/2.5 Pro**: Strong multimodal capabilities, cost-effective

**Local HuggingFace Models** (Self-hosted)
- **TrOCR (Handwritten)**: Specialized for handwritten text recognition
- **LLaVA-1.5**: Strong vision-language understanding
- **Moondream2**: Lightweight, efficient vision model
- **InstructBLIP**: Instruction-following vision model

**Traditional OCR** (Baseline comparison)
- **EasyOCR**: Modern neural OCR with multilingual support
- **Tesseract**: Classical OCR for comparison benchmarks

#### Postprocessing and Analysis
- **Text Cleaning**: Removes artifacts and standardizes formatting
- **Named Entity Recognition**: Extracts people, places, organizations, dates
- **Quality Assessment**: Confidence scoring and error detection
- **Format Conversion**: Structured output (JSON, XML, plain text)

### Systematic Evaluation Approach
```
Historical Document ─┬─ Adaptive Threshold Processing ─┬─ GPT-4o (temp=0.1) ─┬─ Compare vs
                     │                                 ├─ GPT-4o (temp=0.7) ─┤  Ground Truth
                     │                                 └─ Claude 3 Sonnet ───┤
                     │                                             
                     └─ Graph Analysis ─────┬─ GPT-4o (temp=0.1) ─┤
                                            ├─ GPT-4o (temp=0.7) ─┤
                                            └─ Claude 3 Sonnet ───┘
```

### Experimental Dataset Structure
```
Data/
├── document_1/
│   ├── original.jpg                      # Source document
│   ├── adaptive_threshold.jpg            # Standard processing
│   ├── graph_analysis.jpg                # Advanced processing
│   ├── {model}_{method}_{temp}.txt       # LLM transcriptions
│   └── ground_truth.txt                  # Reference transcription
└── [more document folders]
```

**Transcription Naming:** `{model}_{method}_{temperature}`

### Implementation and Impact

**Scalable Solution**: The pipeline can process thousands of documents automatically while maintaining high accuracy standards.

**Cultural Preservation**: Making historical archives digitally searchable preserves knowledge while protecting original documents from handling damage.

**Research Acceleration**: Historians and researchers can now process years of archival work in days, enabling new discoveries and insights.

**Educational Access**: Historical documents become accessible to students and the public worldwide, democratizing access to cultural heritage.
