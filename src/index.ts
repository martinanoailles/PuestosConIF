/*   Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a
entregar.   */
/*   Tenga en cuenta que para el primer puesto se
entrega medalla de oro, segundo puesto medalla
de plata y tercer puesto medalla de bronce. En
caso que quede en otra posición se entrega
certificado de participación     */

let puesto: number = Number(
  prompt("Ingrese en numero el puesto del competidor en la carrera:")
);

if (puesto === 1) {
  console.log("Entregar MEDALLA DE ORO");
} else {
  if (puesto === 2) {
    console.log("Entregar MEDALLA DE PLATA");
  } else {
    if (puesto === 3) {
      console.log("Entregar MEDALLA DE BRONCE");
    } else {
      console.log("Entregar CERTIFICADO DE PARTICIPACION");
    }
  }
}

// SE PUEDE MEJORAR CON SWITCH!
