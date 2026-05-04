<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    n,
    children
  }: {
    n: number | string;
    children: Snippet;
  } = $props();
</script>

<span class="footnote">
  <sup tabindex="0" role="note" aria-label="Footnote {n}">{n}</sup>
  <span class="tooltip" role="tooltip">{@render children()}</span>
</span>

<style>
  .footnote {
    position: relative;
    display: inline;
  }

  .footnote sup {
    cursor: help;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.7em;
    font-weight: 700;
    margin-left: 0.1em;
    padding: 0 0.2em;
    border-bottom: 1px dotted currentColor;
    outline: none;
  }

  .footnote sup:focus-visible {
    background: currentColor;
    color: var(--tw-prose-body, #fff);
  }

  .tooltip {
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: min(22rem, calc(100vw - 2rem));
    padding: 0.75rem 1rem;
    background: rgb(23 23 23);
    color: rgb(245 245 245);
    border: 1px solid rgb(64 64 64);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.8125rem;
    line-height: 1.55;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    z-index: 50;
    visibility: hidden;
    opacity: 0;
    transition: opacity 120ms ease, visibility 120ms ease;
    pointer-events: none;
    box-shadow: 0 10px 30px -10px rgb(0 0 0 / 0.4);
  }

  :global(.dark) .tooltip {
    background: rgb(245 245 245);
    color: rgb(23 23 23);
    border-color: rgb(212 212 212);
  }

  .tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: rgb(23 23 23);
  }

  :global(.dark) .tooltip::after {
    border-top-color: rgb(245 245 245);
  }

  .footnote:hover .tooltip,
  .footnote:focus-within .tooltip {
    visibility: visible;
    opacity: 1;
  }
</style>
