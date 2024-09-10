function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

  if (typeof esVocal === "string") {
    if (letra.length === 1) {
      let vocales = ['a', 'e', 'i', 'o', 'u'];
      return vocales.includes(letra.toLowerCase())? "Es vocal" : "Dato incorrecto";
    } else {
      return "Dato incorrecto";
    }
  }
}

module.exports = esVocal;
