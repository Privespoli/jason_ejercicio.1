
const inventarioTienda = [
  {
    titulo: "FIFA 24",
    precio: 59.99,
    esDigital: true,
    generos: ["Deportes", "Multijugador"]
  },
  {
    titulo: "Minecraft",
    precio: 29.99,
    esDigital: true,
    generos: ["Sandbox", "Aventura"]
  },
  {
    titulo: "Mario Kart 8",
    precio: 49.99,
    esDigital: false,
    generos: ["Carreras", "Multijugador"]
  }
];

const usuariosVIP = [
  {
    username: "melina23",
    puntosAcumulados: 1500,
    suscripcionActiva: true,
    juegosFavoritos: ["FIFA 24", "Minecraft", "Mario Kart 8"]
  },
  {
    username: "pixelMaster",
    puntosAcumulados: 890,
    suscripcionActiva: false,
    juegosFavoritos: ["Zelda: Breath of the Wild", "Fortnite", "EA Sports FC 24"]
  },
  {
    username: "gamerZone",
    puntosAcumulados: 2100,
    suscripcionActiva: true,
    juegosFavoritos: ["Call of Duty", "The Sims 4", "Animal Crossing"]
  }
];

console.log("--- INVENTARIO CARGADO ---", inventarioTienda);
console.log("--- USUARIOS CARGADOS ---", usuariosVIP);
