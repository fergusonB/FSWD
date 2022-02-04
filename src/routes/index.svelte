<script context="module" lang="ts">
    import type {Load} from '@sveltejs/kit'
    import {enhance} from '$lib/actions/form'

    export const load:Load = async ({fetch})=>{
        const res = await fetch('/todos.json');
        if (res.ok) {
            const todos = await res.json();
            return {
                props: {todos}
            }
        }
        const {message} = await res.json();
        return {
            error: new Error(message)
        }

    }



</script>


<script lang="ts">
    import TodoItem from "$lib/todo-item.svelte";

    export let todos:Todo[]

    const title = "Todos";

    
    const processNewTodoResult = async(res:Response)=>{
        const newTodo = await res.json();
        todos = [...todos, newTodo];
    }



</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>


    <a href="/about-us">About us</a>

    <form action="/todos.json" method="post" use:enhance={{result:processNewTodoResult}} class="new">
        <input
            type="text"
            name="text"
            aria-label="add a todo"
            placeholder="+ and type  to add a todo"
        />
    </form>

    {#each todos as todo}
    <TodoItem {todo} />
    {/each}


</div>

<style>
    .todos {
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }
    .new {
        margin-bottom: 1rem;
    }
    .new input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        background-color: transparent;
        text-align: center;
    }
    /* target todos class and globally all inputs, svelte specific */
    .todos :global(input) {
        border: 1px solid transparent;
    }
    .todos :global(input:focus-visible) {
        border: 1px solid #ccc;
        box-shadow: 0 0 0.25rem 0.25rem #ccc;
    }
</style>
