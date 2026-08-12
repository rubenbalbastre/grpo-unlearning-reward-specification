# GRPO-based LLM Unlearning Project Page

Tiny static project page for:

> An Empirical Study of Reward Specification and Benchmark Reliability in GRPO-based LLM Unlearning

The page is adapted from the Academic Project Page Template, but the placeholder videos and carousels have been removed because the paper is best represented by its reward taxonomy, behavioral audit snapshot, and training diagnostics.

## Files

- `index.html`: page content and paper metadata.
- `static/css/index.css`: project-specific styling.
- `static/js/index.js`: BibTeX copy and scroll-to-top behavior.
- `static/pdfs/paper.pdf`: compiled paper copied from `../machine-unlearning-paper/main.pdf`.
- `static/images/favicon.svg`: project-specific favicon.
- `static/images/reward-specification-overview.svg`: custom overview diagram.
- `static/images/training_diagnostics_qwen2_5_*.png`: rendered diagnostics from the paper figures.

## Preview

Open `index.html` in a browser. No build step is required.

## Refresh Assets

If the paper changes, refresh the local PDF and diagnostic figures from the paper repository:

```bash
cp ../machine-unlearning-paper/main.pdf static/pdfs/paper.pdf
pdftoppm -png -singlefile -r 160 ../machine-unlearning-paper/results/figures/training_diagnostics_qwen2_5_0_5b.pdf static/images/training_diagnostics_qwen2_5_0_5b
pdftoppm -png -singlefile -r 160 ../machine-unlearning-paper/results/figures/training_diagnostics_qwen2_5_1_5b.pdf static/images/training_diagnostics_qwen2_5_1_5b
pdftoppm -png -singlefile -r 160 ../machine-unlearning-paper/results/figures/training_diagnostics_qwen2_5_3b.pdf static/images/training_diagnostics_qwen2_5_3b
pdftoppm -png -singlefile -r 160 ../machine-unlearning-paper/results/figures/training_diagnostics_qwen2_5_7b.pdf static/images/training_diagnostics_qwen2_5_7b
```
