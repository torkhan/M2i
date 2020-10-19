class ToDo {
    constructor() {
        this.todos = []
        this.completedTodos = []
        this.compteurTodo = 0
        this.editTodoId = undefined
    }

    /**
     * Méthode de logique metier
     */
    addTodo(task) {
        const todo = {
            id : ++this.compteurTodo,
            task : task
        }
        //console.log(todo)
        this.todos = [todo,...this.todos]
    }

    changeTodo(id) {
        const todo = this.todos.find(t => t.id == id)
        this.completedTodos = [todo, ...this.completedTodos]
        this.todos = this.todos.filter(t => t.id != id)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t=>t.id != id)
        this.completedTodos = this.completedTodos.filter(t=>t.id != id)
    }

    clearTodo() {
        this.todos = []
        this.completedTodos = []
    }

    editTodo(task) {
        let todo = this.todos.find(t=>t.id == this.editTodoId)
        if(todo != undefined) {
            todo.task = task
        }else {
            todo = this.completedTodos.find(t=>t.id == this.editTodoId)
            todo.task = task
        }
    }

    /**
     * Fin de méthode logique 
     */
    
    /**
    * Méthode d'affichage html
    */
    displayTodos() {
        const div = document.querySelector(".liste-todos")
        div.innerHTML = ""
        for(let todo of this.todos) {
            div.innerHTML += `<div class='row'>
                <input class='col-1 form-control' type='checkbox' data-id='${todo.id}' />
                <div class='col-7'>${todo.task}</div>
                <button data-id='${todo.id}' class='btn btn-delete btn-danger col-2'>delete</button>
                <button data-id='${todo.id}' class='btn btn-edit btn-success col-2'>edit</button>
            </div>`
        }
    }

    displayCompletedTodos() {
        const div = document.querySelector(".completed-todos")
        div.innerHTML = ""
        for(let todo of this.completedTodos) {
            div.innerHTML += `<div class='row'>
                <div class='col-7'>${todo.task}</div>
                <button data-id='${todo.id}' class='btn btn-delete btn-danger col-2'>delete</button>
                <button data-id='${todo.id}' class='btn btn-edit btn-success col-2'>edit</button>
            </div>`
        }
    }

    addEventToForm() {
        const form = document.querySelector("#formTask")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const valueTask = document.querySelector('input[name="task"]').value
            if(this.editTodoId == undefined) {
                this.addTodo(valueTask)
                this.displayTodos()
            }else {
                //console.log(valueTask)
                this.editTodo(valueTask)
                this.displayTodos()
                this.displayCompletedTodos()
                this.editTodoId = undefined
            }
            document.querySelector('input[name="task"]').value = ""
        })
    }


    clickEvent() {
        const div = document.querySelector(".content-todos")
        div.addEventListener('click', (e) => {
            if(e.target.classList.contains("btn-edit")) {
                this.editTodoId = e.target.getAttribute("data-id")
                let todo = this.todos.find(t=>t.id == this.editTodoId)
                if(todo != undefined) {
                    document.querySelector('input[name="task"]').value = todo.task
                }
                else {
                    todo = this.completedTodos.find(t=>t.id == this.editTodoId)
                    document.querySelector('input[name="task"]').value = todo.task
                }
            }
            else if(e.target.classList.contains("btn-delete")) {
                const id = e.target.getAttribute("data-id")
                //console.log(e.target.getAttribute("data-id"))
                this.deleteTodo(id)
                this.displayTodos()
                this.displayCompletedTodos()
            }
        })
    }
    changeEvent() {
        const div = document.querySelector(".liste-todos")
        div.addEventListener('change', (e) => {
            const id = e.target.getAttribute("data-id")
            this.changeTodo(id)
            this.displayCompletedTodos()
            this.displayTodos()
        })
    }
    start() {
        this.addEventToForm()
        this.clickEvent()
        this.changeEvent()
    }
}

const gestionTodo = new ToDo()
gestionTodo.start()