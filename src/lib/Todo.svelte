<script lang="ts">
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let title: string;
  export let status: boolean;
  export let id: number;

  const dispatch = createEventDispatcher();
</script>

{#if !status}
  <div class="mt-5" transition:fade>
    <label for="done">
      <input
        type="checkbox"
        name="done"
        id="todo-{id}"
        bind:checked={status}
        class="checkbox"
        on:change={() => dispatch("checked", id)}
      />
    </label>
    <span class="font-poppins">{title}</span>
  </div>
{/if}
