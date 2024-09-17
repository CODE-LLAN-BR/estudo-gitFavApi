export class GithubUser {
    //promisse static
     static search(username){
         const endPoint = `https://api.github.com/users/${username}`
             return fetch(endPoint)
             .then(data => data.json())
             .then(data => ({
                 
                 login: data.login,
                 name : data.name,
                 public_repos: data.public_repos,
                 followers: data.followers
             }))
 
     }
 }