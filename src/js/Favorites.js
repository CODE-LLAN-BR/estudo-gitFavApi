// classe que vai conter a lógica dos dados
// como os dados serão estruturados 

export class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [{
            login:'maykbrito',
            name: 'Mayk Brito',
            public_repos:'76',
            followers:'120000'
        },
        {
            login:'diego3g',
            name: 'Diego Fernandes',
            public_repos:'76',
            followers:'120000'
        },
        {
            login:'CODE-LLAN-BR',
            name: 'Leonardo Nunes',
            public_repos:'45',
            followers:'120000'
        }]
    }
    
    delete(user) {

        // Higher-order functions ( map, filter, find, reduce)
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login ) 
        console.log(filteredEntries)
    }
}


// classe html que vai criar a vizualização e eventos do HTML

export class FavoritesView extends Favorites { 
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

       
        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`


            row.querySelector('.user img').alt = `imagem de ${user.name}`

            row.querySelector('.user a').href = `https://github.com/${user.login}`

            row.querySelector('.user p').textContent = user.name

            row.querySelector('.user span').textContent = user.login

            row.querySelector('.repositories').textContent = user.public_repos

            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick =() => {
                const isOk = confirm('Tem certeza que deseja eliminar essa linha')

                if(isOk){
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })

        
        
    }    

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `<tr>
                <td class="user">
                    <img src="https://github.com/maykbrito.png" alt="imagem de Mayk Brito">
                    <a href="https://github.com/maykbrito" target="_blank">
                        <p>Mayk Brito</p>
                        <span>maykbrito</span>
                    </a>    
                </td>
                <td class="repositories">42</td>
                <td class="followers">2</td>
                <td><button class="remove">&times;</button></td>
            </tr>`

        return tr
    }

    removeAllTr() {
        

        this.tbody.querySelectorAll('tr').forEach((tr)=>{
            tr.remove()
        })
    }
}