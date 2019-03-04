<script>
const myApiUrl = 'http://localhost:3000/accueil/project/creationproject'
const liste = 'http://localhost:3000/accueil/project/listeproject'
const liste1 = 'http://localhost:3000/accueil/project/updateproject/'
const liste2 = 'http://localhost:3000/accueil/project/'
const liste3 = 'http://localhost:3000/accueil/project/deleteproject/'
export default {
  getProjet () {
    return fetch(liste)
      .then((response) => {
        return response.json()
      })
  },
  createProject (name, description, debut, fin, montant, statut) {
    return fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'name': name,
          'descripton': description,
          'debut': debut,
          'fin': fin,
          'montant': montant,
          'statut': statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteProject (name) {
    return fetch(liste3 + name)
      .then((response) => {
        return response.json()
      })
  },

  EditProject (name, description, debut, fin, montant, statut) {
    return fetch(liste1 + name,{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'name': name,
          'descripton': description,
          'debut': debut,
          'fin': fin,
          'montant': montant,
          'statut': statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response
      })
  },
  getProject (name) {
    return fetch(liste2 + name)
      .then((response) => {
        return response
      })

  },
 

  
}
</script>