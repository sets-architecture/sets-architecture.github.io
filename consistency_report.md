# Model Consistency Report

Comparison between two separate runs of the same models on the same 39 images.

**Run 1:** model_results_Gemini_Claude.md (2026-01-06 14:49:32)
**Run 2:** model_comparison_results.md (2026-01-06 15:34:48)

---

## Overall Consistency

| Model | Consistent | Inconsistent | Total | Consistency % |
|-------|------------|--------------|-------|---------------|
| Claude Opus 4 | 233 | 255 | 488 | 47.75% |
| Gemini 3 Pro | 351 | 395 | 746 | 47.05% |

---

## Claude Opus 4: Per-Question Consistency

| Question | Consistent | Inconsistent | Total | Consistency % |
|----------|------------|--------------|-------|---------------|
| Is there a date (with year) near or at the top of the page? | 7 | 0 | 7 | 100.0% |
| How many instances of quondam? | 11 | 0 | 11 | 100.0% |
| Does the page have two columns? (Y/N) | 14 | 0 | 14 | 100.0% |
| How many instances of quondam? (Count) | 11 | 0 | 11 | 100.0% |
| If so, what is the year? (Value) | 4 | 0 | 4 | 100.0% |
| Is the page signed? (Y/N) | 13 | 1 | 14 | 92.9% |
| If it is signed, where does the signature appear on the p... | 10 | 1 | 11 | 90.9% |
| Is the page signed? | 7 | 1 | 8 | 87.5% |
| Does the page have two columns? | 7 | 1 | 8 | 87.5% |
| How many instances of "con" as a preposition are on the p... | 9 | 2 | 11 | 81.8% |
| Is there a small circular mark in the top left corner of ... | 9 | 2 | 11 | 81.8% |
| Is there a date (with year) near or at the top of the pag... | 12 | 3 | 15 | 80.0% |
| Where there are curly brackets, is there an annotation de... | 8 | 3 | 11 | 72.7% |
| How many additional small circular marks are on the page ... | 8 | 3 | 11 | 72.7% |
| Where there are curly brackets, is there an annotation de... | 8 | 3 | 11 | 72.7% |
| How many additional small circular marks are on the page ... | 8 | 3 | 11 | 72.7% |
| If so, what is the year? | 14 | 10 | 24 | 58.3% |
| Is there a small circular mark in the top left corner of ... | 6 | 5 | 11 | 54.5% |
| If it is signed, where does the signature appear on the p... | 6 | 5 | 11 | 54.5% |
| How many instances of "con" as a preposition are on the p... | 6 | 5 | 11 | 54.5% |
| How many instances of "e" as a conjunction? (Count) | 6 | 5 | 11 | 54.5% |
| How many travelers are mentioned who are not named? | 5 | 6 | 11 | 45.5% |
| How many instances of "e" as a conjunction? | 5 | 6 | 11 | 45.5% |
| How many travelers are mentioned who are not named? (Count) | 5 | 6 | 11 | 45.5% |
| How many indications of place of stay (i.e. 'in casa di [... | 4 | 6 | 10 | 40.0% |
| How many curly brackets appear on the page? | 3 | 8 | 11 | 27.3% |
| How many indications of place of stay (i.e. 'in casa di [... | 3 | 8 | 11 | 27.3% |
| How many curly brackets appear on the page? (Count) | 3 | 8 | 11 | 27.3% |
| How many curly brackets appear per column? (Count for lef... | 3 | 8 | 11 | 27.3% |
| Write the words in the annotation. | 2 | 9 | 11 | 18.2% |
| How many instances of place of origin and nationality des... | 2 | 9 | 11 | 18.2% |
| How many places of stay (count all) are mentioned per col... | 2 | 9 | 11 | 18.2% |
| How many unique places of stay are mentioned on the page?... | 2 | 9 | 11 | 18.2% |
| Write the words in the annotation. (Multiple values) | 2 | 9 | 11 | 18.2% |
| What two words immediately follow "e" as a conjunction? (... | 2 | 9 | 11 | 18.2% |
| How many travelers are mentioned by name? | 1 | 10 | 11 | 9.1% |
| How many places of stay (count all) are mentioned per col... | 1 | 10 | 11 | 9.1% |
| What two words immediately follow each instance of "con"? | 1 | 10 | 11 | 9.1% |
| How many curly brackets appear per column? | 1 | 10 | 11 | 9.1% |
| How many unique places of stay are mentioned on the page? | 1 | 10 | 11 | 9.1% |
| How many travelers are mentioned by name? (Count) | 1 | 10 | 11 | 9.1% |
| What two words immediately follow "e" as a conjunction? | 0 | 11 | 11 | 0.0% |
| What two words immediately follow each instance of "con"?... | 0 | 11 | 11 | 0.0% |
| How many instances of place of origin and nationality des... | 0 | 10 | 10 | 0.0% |

---

## Gemini 3 Pro: Per-Question Consistency

| Question | Consistent | Inconsistent | Total | Consistency % |
|----------|------------|--------------|-------|---------------|
| Where there are curly brackets, is there an annotation de... | 33 | 1 | 34 | 97.1% |
| Does the page have two columns? (Y/N) | 32 | 2 | 34 | 94.1% |
| Is there a date (with year) near or at the top of the pag... | 32 | 2 | 34 | 94.1% |
| Is the page signed? (Y/N) | 27 | 7 | 34 | 79.4% |
| Is there a small circular mark in the top left corner of ... | 27 | 7 | 34 | 79.4% |
| How many indications of place of stay (i.e. ‘in casa di [... | 25 | 8 | 33 | 75.8% |
| How many instances of “con” as a preposition are on the p... | 20 | 14 | 34 | 58.8% |
| How many instances of quondam? (Count) | 17 | 17 | 34 | 50.0% |
| How many travelers are mentioned who are not named? (Count) | 16 | 18 | 34 | 47.1% |
| If so, what is the year? (Value) | 16 | 18 | 34 | 47.1% |
| How many curly brackets appear on the page? (Count) | 15 | 19 | 34 | 44.1% |
| How many unique places of stay are mentioned on the page?... | 15 | 19 | 34 | 44.1% |
| If it is signed, where does the signature appear on the p... | 14 | 20 | 34 | 41.2% |
| How many additional small circular marks are on the page ... | 13 | 21 | 34 | 38.2% |
| How many instances of place of origin and nationality des... | 9 | 24 | 33 | 27.3% |
| How many instances of “e” as a conjunction? (Count) | 9 | 25 | 34 | 26.5% |
| How many travelers are mentioned by name? (Count) | 9 | 25 | 34 | 26.5% |
| How many places of stay (count all) are mentioned per col... | 8 | 26 | 34 | 23.5% |
| How many curly brackets appear per column? (Count for lef... | 6 | 28 | 34 | 17.6% |
| What two words immediately follow each instance of “con”?... | 3 | 31 | 34 | 8.8% |
| Write the words in the annotation. (Multiple values) | 3 | 31 | 34 | 8.8% |
| What two words immediately follow “e” as a conjunction? (... | 2 | 32 | 34 | 5.9% |

---

## Claude Opus 4: Per-Page Consistency

| Page # | Image Name | Consistent | Total | Consistency % |
|--------|------------|------------|-------|---------------|
| 1 | AVS IS 758-781 1766 02.jpg | 9 | 22 | 40.9% |
| 2 | AVS IS 758-781 1767 02 01 p1.jpg | 7 | 19 | 36.8% |
| 3 | AVS IS 758-781 1767 02 01 p2.jpg | 15 | 22 | 68.2% |
| 4 | AVS IS 758-781 1767 02 01 p3.jpg | 1 | 2 | 50.0% |
| 5 | AVS IS 758-781 1767 02 01 p4.jpg | 5 | 19 | 26.3% |
| 6 | AVS IS 758-781 1767 07 01.jpg | 9 | 22 | 40.9% |
| 7 | AVS IS 758-781 1768 01 09.jpg | 3 | 4 | 75.0% |
| 8 | AVS IS 758-781 1768 01 16 p1.jpg | 10 | 21 | 47.6% |
| 9 | AVS IS 758-781 1768 01 16 p2.jpg | 12 | 22 | 54.5% |
| 10 | AVS IS 758-781 1768 01 16 p3.jpg | 4 | 19 | 21.1% |
| 11 | AVS IS 758-781 1768 02 20.jpg | 8 | 21 | 38.1% |
| 12 | AVS IS 758-781 1768 05 02.jpg | 14 | 22 | 63.6% |
| 13 | AVS IS 758-781 1768 05 08 p3.jpg | 9 | 22 | 40.9% |
| 14 | AVS IS 758-781 1768 05 08 p4.jpg | 10 | 22 | 45.5% |
| 15 | AVS IS 758-781 1768 05 08.jpg | 0 | 1 | 0.0% |
| 16 | AVS IS 758-781 1768 05 09 p1.jpg | 11 | 22 | 50.0% |
| 17 | AVS IS 758-781 1768 05 09 p2.jpg | 12 | 22 | 54.5% |
| 18 | AVS IS 758-781 1768 05 09 p3.jpg | 15 | 22 | 68.2% |
| 19 | AVS IS 758-781 1768 05.jpg | 3 | 4 | 75.0% |
| 20 | AVS IS 758-781 1768 09.jpg | 2 | 3 | 66.7% |
| 21 | AVS IS 758-781 1768 11 07.jpg | 0 | 1 | 0.0% |
| 22 | AVS IS 758-781 1768 11 28.jpg | 13 | 22 | 59.1% |
| 23 | AVS IS 758-781 1769 05 p1.jpg | 7 | 22 | 31.8% |
| 24 | AVS IS 758-781 1770 03.jpg | 14 | 22 | 63.6% |
| 25 | AVS IS 758-781 1770 05 13.jpg | 1 | 1 | 100.0% |
| 26 | AVS IS 758-781 1770 05 17 p2.jpg | 11 | 22 | 50.0% |
| 27 | AVS IS 758-781 1770 05 28 p1.jpg | 1 | 1 | 100.0% |
| 28 | AVS IS 758-781 1770 05 28 p2.jpg | 13 | 22 | 59.1% |
| 29 | AVS IS 758-781 1770 05 28 p3.jpg | 0 | 1 | 0.0% |
| 30 | AVS IS 758-781 1770 05.jpg | 6 | 22 | 27.3% |
| 31 | AVS IS 758-781 1770 08.jpg | 8 | 19 | 42.1% |

---

## Gemini 3 Pro: Per-Page Consistency

| Page # | Image Name | Consistent | Total | Consistency % |
|--------|------------|------------|-------|---------------|
| 1 | AVS IS 758-781 1766 02.jpg | 11 | 22 | 50.0% |
| 2 | AVS IS 758-781 1767 02 01 p1.jpg | 7 | 22 | 31.8% |
| 3 | AVS IS 758-781 1767 02 01 p2.jpg | 16 | 22 | 72.7% |
| 4 | AVS IS 758-781 1767 02 01 p3.jpg | 7 | 22 | 31.8% |
| 5 | AVS IS 758-781 1767 02 01 p4.jpg | 6 | 22 | 27.3% |
| 6 | AVS IS 758-781 1767 07 01.jpg | 9 | 22 | 40.9% |
| 7 | AVS IS 758-781 1768 01 02.jpg | 7 | 22 | 31.8% |
| 8 | AVS IS 758-781 1768 01 09.jpg | 5 | 22 | 22.7% |
| 9 | AVS IS 758-781 1768 01 16 p1.jpg | 9 | 22 | 40.9% |
| 10 | AVS IS 758-781 1768 01 16 p2.jpg | 13 | 22 | 59.1% |
| 11 | AVS IS 758-781 1768 01 16 p3.jpg | 12 | 22 | 54.5% |
| 12 | AVS IS 758-781 1768 02 20.jpg | 10 | 22 | 45.5% |
| 13 | AVS IS 758-781 1768 03 26.jpg | 10 | 22 | 45.5% |
| 14 | AVS IS 758-781 1768 05 02.jpg | 14 | 22 | 63.6% |
| 15 | AVS IS 758-781 1768 05 08 p3.jpg | 12 | 22 | 54.5% |
| 16 | AVS IS 758-781 1768 05 08 p4.jpg | 10 | 22 | 45.5% |
| 17 | AVS IS 758-781 1768 05 08 p5.jpg | 14 | 22 | 63.6% |
| 18 | AVS IS 758-781 1768 05 08.jpg | 7 | 22 | 31.8% |
| 19 | AVS IS 758-781 1768 05 09 p1.jpg | 12 | 22 | 54.5% |
| 20 | AVS IS 758-781 1768 05 09 p2.jpg | 16 | 22 | 72.7% |
| 21 | AVS IS 758-781 1768 05 16.jpg | 8 | 22 | 36.4% |
| 22 | AVS IS 758-781 1768 05.jpg | 6 | 22 | 27.3% |
| 23 | AVS IS 758-781 1768 08 01.jpg | 9 | 20 | 45.0% |
| 24 | AVS IS 758-781 1768 09.jpg | 10 | 22 | 45.5% |
| 25 | AVS IS 758-781 1768 11 07.jpg | 7 | 22 | 31.8% |
| 26 | AVS IS 758-781 1768 11 28.jpg | 9 | 22 | 40.9% |
| 27 | AVS IS 758-781 1769 05 p2.jpg | 15 | 22 | 68.2% |
| 28 | AVS IS 758-781 1770 03.jpg | 14 | 22 | 63.6% |
| 29 | AVS IS 758-781 1770 05 13.jpg | 13 | 22 | 59.1% |
| 30 | AVS IS 758-781 1770 05 17 p1.jpg | 10 | 22 | 45.5% |
| 31 | AVS IS 758-781 1770 05 28 p1.jpg | 9 | 22 | 40.9% |
| 32 | AVS IS 758-781 1770 05 28 p2.jpg | 7 | 22 | 31.8% |
| 33 | AVS IS 758-781 1770 05 28 p3.jpg | 15 | 22 | 68.2% |
| 34 | AVS IS 758-781 1770 05.jpg | 12 | 22 | 54.5% |

---

## Claude Opus 4: Sample Inconsistencies

*Showing first 20 examples where the model gave different answers across runs.*

### Example 1

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many travelers are mentioned by name?

- **Run 1:** 20
- **Run 2:** 13

### Example 2

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** Is there a small circular mark in the top left corner of the page?

- **Run 1:** N
- **Run 2:** Y

### Example 3

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** Where there are curly brackets, is there an annotation describing the bracketed information?

- **Run 1:** Y
- **Run 2:** N/A

### Example 4

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many places of stay (count all) are mentioned per column?

- **Run 1:** 7, 0
- **Run 2:** N/A (single column)

### Example 5

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** What two words immediately follow each instance of "con"?

- **Run 1:** moglie e; Melano e; un domenico; moglie cane; marito cane
- **Run 2:** un domigª; Madona con; un domig; marche cane; moglie cane

### Example 6

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many curly brackets appear on the page?

- **Run 1:** 14
- **Run 2:** 0

### Example 7

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** What two words immediately follow "e" as a conjunction?

- **Run 1:** David Regina; Margareta
- **Run 2:** David Ragian

### Example 8

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** Write the words in the annotation.

- **Run 1:** tutti annottati infermi dal d[ott]o
- **Run 2:** N/A

### Example 9

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many indications of place of stay (i.e. 'in casa di [x]) include a person's name?

- **Run 1:** 6
- **Run 2:** 7

### Example 10

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many curly brackets appear per column?

- **Run 1:** 14, 0
- **Run 2:** N/A

### Example 11

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many additional small circular marks are on the page (not part of a word, but as an annotation mark)?

- **Run 1:** 0
- **Run 2:** 21

### Example 12

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many unique places of stay are mentioned on the page?

- **Run 1:** 7
- **Run 2:** 9

### Example 13

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many instances of place of origin and nationality describing the travelers appear in the document?

- **Run 1:** 13
- **Run 2:** 10

### Example 14

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many instances of "e" as a conjunction? (Count)

- **Run 1:** 5
- **Run 2:** 6

### Example 15

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** What two words immediately follow each instance of "con"? (Value)

- **Run 1:** sua moglie; un Sig.; un figli; tre figlioli; sua moglie; sue domytica; un domystico; sua moglie
- **Run 2:** sua moglie; un domestico; un figlio; un domestico; sua moglie; un domestico; sua moglie; sua moglie

### Example 16

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many curly brackets appear on the page? (Count)

- **Run 1:** 3
- **Run 2:** 2

### Example 17

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many additional small circular marks are on the page (not part of a word, but as an annotation mark)? (Count)

- **Run 1:** 4
- **Run 2:** 0

### Example 18

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many travelers are mentioned who are not named? (Count)

- **Run 1:** 3
- **Run 2:** 0

### Example 19

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many places of stay (count all) are mentioned per column? (Count for left column, count for right column)

- **Run 1:** 4, 4
- **Run 2:** 6, 6

### Example 20

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many travelers are mentioned by name? (Count)

- **Run 1:** 23
- **Run 2:** 18

---

## Gemini 3 Pro: Sample Inconsistencies

*Showing first 20 examples where the model gave different answers across runs.*

### Example 1

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** Is the page signed? (Y/N)

- **Run 1:** Y
- **Run 2:** N

### Example 2

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many instances of “con” as a preposition are on the page? (Count)

- **Run 1:** 5
- **Run 2:** 4

### Example 3

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** If it is signed, where does the signature appear on the page? (Location)

- **Run 1:** Bottom of both columns
- **Run 2:** N/A

### Example 4

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many instances of quondam? (Count)

- **Run 1:** 5
- **Run 2:** 8

### Example 5

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many instances of place of origin and nationality describing the travelers appear in the document? Count the same place (expressed either as an adjective or as “di” + placename) only once. (Count)

- **Run 1:** 13
- **Run 2:** 12

### Example 6

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many places of stay (count all) are mentioned per column? (Count for left column, count for right column)

- **Run 1:** 8 for left column, 7 for right column
- **Run 2:** Left: 8, Right: 7

### Example 7

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** What two words immediately follow “e” as a conjunction? (Value)

- **Run 1:** cinque fiuoli; David f.lli
- **Run 2:** cinque figliuoli, David frelli

### Example 8

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many travelers are mentioned by name? (Count)

- **Run 1:** 19
- **Run 2:** 20

### Example 9

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** What two words immediately follow each instance of “con”? (Value)

- **Run 1:** Moglie, e; un Domest.o; Moglie, una; Moglie li; Frassetti di
- **Run 2:** Moglie e, un domeg., Moglie una, Moglie di

### Example 10

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** If so, what is the year? (Value)

- **Run 1:** 1768
- **Run 2:** 1765

### Example 11

**Image:** AVS IS 758-781 1766 02.jpg

**Question:** How many curly brackets appear per column? (Count for left column, count for right column)

- **Run 1:** 0 for left column, 1 for right column
- **Run 2:** Left: 0, Right: 1

### Example 12

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many curly brackets appear on the page? (Count)

- **Run 1:** 4
- **Run 2:** 3

### Example 13

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** If it is signed, where does the signature appear on the page? (Location)

- **Run 1:** Bottom right
- **Run 2:** Bottom right corner

### Example 14

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many instances of “e” as a conjunction? (Count)

- **Run 1:** 5
- **Run 2:** 4

### Example 15

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many additional small circular marks are on the page (not part of a word, but as an annotation mark)? (Count)

- **Run 1:** 2
- **Run 2:** 0

### Example 16

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many instances of quondam? (Count)

- **Run 1:** 3
- **Run 2:** 1

### Example 17

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many instances of place of origin and nationality describing the travelers appear in the document? Count the same place (expressed either as an adjective or as “di” + placename) only once. (Count)

- **Run 1:** 21
- **Run 2:** 23

### Example 18

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** How many travelers are mentioned who are not named? (Count)

- **Run 1:** 13
- **Run 2:** 16

### Example 19

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** Is there a small circular mark in the top left corner of the page? (Y/N)

- **Run 1:** Y
- **Run 2:** N

### Example 20

**Image:** AVS IS 758-781 1767 02 01 p1.jpg

**Question:** What two words immediately follow “e” as a conjunction? (Value)

- **Run 1:** S. Cassan.; Zaccaria d'Inghilterra; compagni Francegi; Felice Miti; Bonifacio Casaggio
- **Run 2:** 1. tre di<br>2. Felice flli<br>3. n. Bomyici<br>4. tre di

