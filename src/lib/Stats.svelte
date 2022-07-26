<script lang="ts">
  export let title: string;
  export let count: number;
</script>

<div class="stats shadow">
  <div class="stat px-10">
    <div class="stat-title">{title}</div>
    <div class="stat-value">{count}</div>
  </div>
</div>
