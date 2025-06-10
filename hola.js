const nombre = process.env.USERNAME || 'Usuario';
const lenguaje = process.env.LANGUAGE || 'lenguaje secreto';

console.log(`¡Hola, ${nombre}! Tu lenguaje favorito es ${lenguaje}.`);
