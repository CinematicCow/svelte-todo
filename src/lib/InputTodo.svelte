<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { todo } from "../interface/todo.interface";

  const dispatch = createEventDispatcher();
  const addTodo = (e) => {
    const formData = new FormData(e.target);

    const todo: todo = {
      title: "",
      done: false,
    };

    for (let field of formData) {
      const [key, value] = field;
      todo[key] = value;
    }
    dispatch("newTodo", todo);
  };
</script>

<form class="flex" on:submit|preventDefault={(e) => addTodo(e)}>
  <label for="title">
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Add Todo"
      class="input input-bordered input-info w-full max-w-xs"
      required
      autocomplete="no"
    />
  </label>
  <button class="btn btn-accent ml-5" type="submit">+Add</button>
</form>
