<script>
const client = 'http://localhost:3000/accueil/client/creationclient'
const client1 = 'http://localhost:3000/accueil/client/listeclient'
const client2 = 'http://localhost:3000/accueil/client/'
const client3 = 'http://localhost:3000/accueil/client/deleteclient/'
const client4 = 'http://localhost:3000/accueil/client/updateclient/'
export default {
  getClients () {
    return fetch(client1)
      .then((response) => {
        return response.json()
      })
  },
  createClient (nom, rue, ville, code, contact, Secteur) {
    return fetch(client, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
      'adresse': {
        'rue': rue,
        'ville': ville,
        'code': code},
      'contact': contact,
      'Secteur': Secteur
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteClient(nom) {
     return fetch(client3 + nom)
      .then((response) => {
        return response.json();
      })
  },
  EditClient (nom, rue, ville, code, contact, Secteur) {
    return fetch(client4 + nom, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
         'nom': nom,
      'adresse': {
        'rue': rue,
        'ville': ville,
        'code': code},
      'contact': contact,
      'Secteur': Secteur
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getClient (nom) {
    return fetch(client2 + nom)
      .then((response) => {
        return response.json();
      })
  }
}
</script>