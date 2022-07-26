<script lang="ts">
  import InputTodo from "./InputTodo.svelte";
  import type { todo } from "../interface/todo.interface";
  import Stats from "./Stats.svelte";
  import Todo from "./Todo.svelte";

  let Todos: Array<todo> = [];

  $: totalTodosCount = Todos.length;
  $: completedTodosCount = Todos.filter((todo) => todo.done).length;
  $: uncompletedTodosCount = totalTodosCount - completedTodosCount;

  // called when the InputTodo dispatches an event
  function handleTodo(data) {
    Todos = [...Todos, data.detail];
  }

  function handleComplete(data) {
    console.log("complete handler", data.detail);
    Todos[data.detail].done = true;
  }
</script>

<div class="flex justify-center mt-60">
  <div>
    <h1 class="font-bold text-xl p-2">Svelte Todo</h1>
    <InputTodo on:newTodo={handleTodo} />
  </div>
</div>

<div class="flex mt-10">
  <div class="grid  flex-grow place-items-center">
    <Stats title="In Progress Todos" count={uncompletedTodosCount} />
    <div class="flex flex-col justify-evenly">
      {#each Todos as todo, idx}
        <Todo
          title={todo.title}
          status={todo.done}
          id={idx}
          on:checked={handleComplete}
        />
      {/each}
    </div>
  </div>
  <div class="divider divider-horizontal" />
  <div class="grid  flex-grow place-items-center">
    <Stats title="Completed Todos" count={completedTodosCount} />
  </div>
</div>
