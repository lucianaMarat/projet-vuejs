<script>
const sal = 'http://localhost:3000/accueil/salaried/creationsalaried'
const sal1 = 'http://localhost:3000/accueil/salaried/listesalaried'
const sal2 = 'http://localhost:3000/accueil/salaried/'
const sal3 = 'http://localhost:3000/accueil/salaried/deletesalaried/'
const sal4 = 'http://localhost:3000/accueil/salaried/updatesalaried/'
export default {
  getSalaries () {
    return fetch(sal1)
      .then((response) => {
        return response.json()
      })
  },
  createSalaries (nom, prenom, username, naissance,rue, ville, code, telephone, mail, poste) {
    return fetch(sal, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'nom': nom,
      'prenom': prenom,
      'username': username,
      'naissance': naissance,
      'adresse': {
        'rue': rue,
        'ville': ville,
        'code': code},
      'telephone':telephone,
      'mail':mail,
      'poste': poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteSalaries (nom) {
     return fetch(sal3 + nom)
      .then((response) => {
        return response.json()
      })
  },
  EditSalaries (nom, prenom, username, naissance,rue, ville, code, telephone, mail, poste) {
    return fetch(sal4 + nom, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
           'nom': nom,
      'prenom': prenom,
      'username': username,
      'naissance': naissance,
      'adresse': {
        'rue': rue,
        'ville': ville,
        'code': code},
      'telephone':telephone,
      'mail':mail,
      'poste': poste
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getSalarie (nom) {
    return fetch(sal2 + nom)
      .then((response) => {
        return response.json()
      })
  }
}
</script>