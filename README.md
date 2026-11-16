# sets-architecture.github.io
A Set-Based Architecture for Scalable, Extensible, and Transformable Knowledge Structures

## Adding an "Introduction" article

Articles live in `_introduction/`. Each Markdown file there becomes a page at
`/introduction/<file-name>/` and is listed automatically, newest first, on
`/introduction/`.

1. Create `_introduction/<short-name>.md` with this front matter:

   ```yaml
   ---
   title: Title of the article
   description: One or two sentences shown on the Introduction page.
   date: 2026-11-16
   authors: [First Author, Second Author]   # optional
   image: /assets/images/introduction/<short-name>/fig-01.webp   # optional thumbnail
   ---
   ```

2. Put the images in `assets/images/introduction/<short-name>/` and add
   them as figures:

   ```markdown
   <figure markdown="1">
   ![Alt text describing the image]({{ '/assets/images/introduction/<short-name>/fig-01.webp' | relative_url }}){: .img-full .can-fullscreen }
   <figcaption markdown="1">
   Figure 1\. Caption.
   </figcaption>
   </figure>
   ```

3. Start headings at `##` — the page title is already the `#` heading.

See `_introduction/demos-for-interface-design.md` for a complete example.
