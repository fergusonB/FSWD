<script lang="ts">
  
    import { enhance } from "$lib/actions/form";
    export let todo: Todo;

    export let processDeletedTodoResult: (res: Response) => void;
    export let processUpdatedTodoResult:(res: Response) => void;
   
</script>

<div class="todoBox">
    <form action="/todos/{todo.uid}.json?_method=patch" method="post"
    use:enhance={{ result: processUpdatedTodoResult }}
    >
        <input type="hidden" value={todo.done ? "" : "true"} name="done" />
        <button
            class="toggle"
            aria-label="Mark todo as {todo.done ? 'not done' : 'done'}"
            >{todo.done ? "Not Done" : "Done"}</button
        >
    </form>

    <form action="/todos/{todo.uid}.json?_method=patch" method="post"
    use:enhance={{ result: processUpdatedTodoResult }}>
        <input
            class:done={todo.done}
            class="text"
            name="text"
            type="text"
            value={todo.text}
        />
        <!--  save -->
        <button class="save" aria-label="Save">Save</button>
    </form>
    <!-- delete -->
    <form
        action="/todos/{todo.uid}.json?_method=delete"
        method="post"
        use:enhance={{ result: processDeletedTodoResult }}
    >
        <button class="delete" aria-label="Delete">Delete</button>
    </form>
</div>

<style>
    .todoBox {
        display: flex;
    }
    .todoBox button {
        margin: 1em;
    }
    /* input text rounded 50% transparent white background */
    .todoBox input {
        border: none;

        padding: 0.5em;
        width: 10em;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
    }
    .done {
        text-decoration: line-through;
    }
</style>
