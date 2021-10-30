import { Todo } from ".";

export class TodoList {
    constructor(){
         this.todos = [];
         this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        console.log(' marcar completado');
        for(const todo of this.todos){
            console.log('entro en bucle for');
            console.log(id, todo.id);
            if (todo.id == id){
                console.log(' entro dentro ');
               todo.completado = !todo.completado;
               this.guardarLocalStorage();
               break;     
            }
        }

    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        console.log(' guardo ');
        localStorage.setItem('todo', JSON.stringify(this.todos));
        //localStorage.setItem('todo', ( this.todos ));
    }
    cargarLocalStorage(){

        console.log("cargar local storage");    
        // Operandor ternario.
        this.todos = ( localStorage.getItem('todo') )
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        //this.todos = this.todos.map( obj => Todo.fromJason( obj ));
        this.todos = this.todos.map(Todo.fromJason);
            /*
        if( localStorage.getItem('todo')){
            this.todos = JSON.parse(localStorage.getItem('todo')); 
            
        } else {
            this.todos = [];
        }*/

    }

}