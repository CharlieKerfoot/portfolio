<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    cite,
    source,
    children
  }: {
    cite?: string;
    source?: string;
    children: Snippet;
  } = $props();
</script>

<figure
  class="my-12 border-l-4 border-neutral-900 pl-6 not-prose dark:border-white"
>
  <blockquote
    class="font-display text-xl leading-relaxed tracking-tight text-neutral-900 italic sm:text-2xl dark:text-white"
  >
    {@render children()}
  </blockquote>
  {#if cite || source}
    <figcaption class="mt-4 font-mono text-sm tracking-widest uppercase opacity-70">
      {#if cite}&mdash; {cite}{/if}{#if source}{cite ? ', ' : '— '}<cite class="not-italic">{source}</cite>{/if}
    </figcaption>
  {/if}
</figure>
