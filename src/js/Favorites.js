// classe que vai conter a lógica dos dados
// como os dados serão estruturados 

export class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
    }
}

// classe html que vai criar a vizualização e eventos do HTML

export class FavoritesView extends Favorites { 
    constructor(root){
        super(root)

        console.log(this.root)
    }
    
}