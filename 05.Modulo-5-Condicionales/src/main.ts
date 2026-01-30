import "./style.css";
import { startGame } from "./utilities/startGame";

startGame();


/*

INICIO JUEGO:
  mazo = crearMazo(40 cartas españolas)
  score = 0
  roundTotal = 0
  barajar(mazo)

CICLO PRINCIPAL DEL JUEGO:
  MIENTRAS !checkGameOver(roundTotal, mazo).gameOver:
    
    MOSTRAR UI:
      - roundTotal actual
      - score total
      - cartas restantes: mazo.length
      - Botones: "PEDIR CARTA" | "PLANTARSE"
    
    SI jugador hace clic "PEDIR CARTA":
      carta = tomarCarta(mazo)
      roundTotal += valorCarta
      ACTUALIZAR UI
      
    SI jugador hace clic "PLANTARSE":
      EVALUAR RONDA:
        SI roundTotal < 4:
          MOSTRAR "Has sido muy conservador. No sumas puntos."
        SINO SI roundTotal === 5:
          MOSTRAR "Te ha entrado el canguelo, ¿eh? No sumas puntos."
        SINO SI roundTotal === 6 O roundTotal === 7:
          score += roundTotal
          MOSTRAR "Casi casi... Sumaste ${roundTotal} puntos."
        SINO SI roundTotal === 7.5:
          score += roundTotal
          MOSTRAR "¡Lo has clavado! ¡Enhorabuena!"
        SINO:  // 4.1-4.9, 5.1-5.9, 6.1-6.9, 7.1-7.4, etc.
          MOSTRAR "Buen intento, pero no sumas puntos esta vez."
      
      Reiniciar ronda:
        roundTotal = 0
      
  FIN CICLO

GAME OVER (al salir del ciclo):
  SI roundTotal > 7.5:
    MOSTRAR "Te pasaste. El juego se ha terminado."
  SINO:
    MOSTRAR "No quedan cartas. Score final: ${score}"


1. JUGANDO ronda 
   ├─ roundTotal < 7.5 
   ├─ mazo.length > 0
   └─ Botones activos: "PEDIR" | "PLANTARSE"

2. EVALUANDO planta  
   ├─ isPlayerStanding = true
   ├─ Evaluar roundTotal según reglas
   ├─ score += roundTotal (solo 6,7,7.5)
   └─ roundTotal = 0 → nueva ronda

3. GAME OVER
   ├─ roundTotal > 7.5 → "Te pasaste"
   └─ mazo.length === 0 → "No quedan cartas"





*/
