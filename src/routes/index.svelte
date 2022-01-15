<script>
import TodoItem from "$lib/todo-item.svelte";


const title = "Todos"

</script>

<style>
    .todos {
        width:100%;
        max-width: 42rem;
        margin:4rem auto 0 auto;
    }
    .new{
        margin-bottom:1rem;

    }
    .new input{
        width:100%;
        padding:0.5rem;
        border:1px solid #ccc;
        border-radius:0.25rem;
        background-color:transparent;
        text-align: center;
    }
 /* target todos class and globally all inputs, svelte specific */
    .todos :global(input){
        border: 1px solid transparent;

    }
    .todos :global(input:focus-visible){
        border: 1px solid #ccc;
        box-shadow: 0 0 0.25rem 0.25rem #ccc;
    }
</style>



<svelte:head>
<title>{title}</title>
</svelte:head>

<div class="todos">
<h1>{title}</h1>


<form action="" method="" class="new">
    <input type="text" name="text" aria-label="add a todo" placeholder="+ and type  to add a todo">
</form>

<TodoItem />
</div>
