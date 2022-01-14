<div class="todoBox">
    <form action="" method="">
        <input type="hidden" name="done"/>
        <button class="toggle" aria-label="Mark done/not done">Done/NotDone</button>
    </form>

    <form action="" method="">
        <input class="text" type="text">
        <!--  save -->
        <button class="save" aria-label="Save">Save</button>
    </form>
    <!-- delete -->
    <form action="" method="">
        <button class="delete" aria-label="Delete">Delete</button>
    </form>
</div>

<style>
.todoBox{
    display:flex;
}
.todoBox button{
    margin:1em;
}
</style>