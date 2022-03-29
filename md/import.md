### Import ed export

partiamo dal esempio precendente del pulire il codice e ci troviamo con questo :

```
  const links = [
    {titolo: 'Home', url: 'home'},
    {titolo: 'Prodotti', url: 'prodotti'},
    {titolo: 'Contatti', url: 'contatti'}
  ]


function renderPage(){

  const appHeader = () =>(
    <div class="box s100 firsBg">
        <div class="box s30">First React</div>
          <div class="box s50 right">
          {links.map(link =>(
            <a href="{link.url} class="button">
              {link.titolo}
            </a>
            )}
        </div>
      </div>
      )}

  const appContent = () =>(
    <div class="box s100 firsBg">titolo contenuto</div>
      <div class="box s100">
        <p>
          Sono un contenuto di esempio con un testo
        </p>
        <p>
          Sono un Altro testo del contenuto in un altro paragrafo
        </p>
      </div>
  )

  const appFooter = () s=>
    return (
      <div class="box s100 secondBg">
        copyright 2022
      </div>
    )

  return <div>
    {appHeader()}
    {appContent()}
    {appFooter()}
  </div>
}

```

abbiamo diviso il codice in funzioni, ora è molto più facile maneggiarlo, ma se il codice dentro a header o content dovesse crescere molto ??

mi troverei un file molto lungo, dove pur come abbiamo visto separandolo in funzioni , più cresce più è faticoso a utilizzarlo e leggerlo.

Cosa sarebbe meglio ?? sarebbe meglio se i vari elementi header, content e footer, li metto su un file a parte, facendo cosi per esempio l'header può venire riutilizzato oltre che permettermi la giusta pulizia.

```
app.js
  -componets
        -headers.js
        -content.js
        -fotter.js

```

struttura di app.js,

File header.js

```
export default function appHeader(param){

  return (<div class="box s100 firsBg">
        <div class="box s30">First React</div>
        <div class="box s50 right">
          <a href="home" class="button">
            home
          </a>
          <a href="prodotti class="button">
            prodotti
          </a>
          <a href="contatti" class="button">
            contatti
          </a>
        </div>
      </div>)
}
```

file content.js

```
export default function content(param){

  return (
       <div class="box s100 firsBg">titolo contenuto</div>
      <div class="box s100">
        <p>
          Sono un contenuto di esempio con un testo
        </p>
        <p>
          Sono un Altro testo del contenuto in un altro paragrafo
        </p>
      </div>
      )
}
```

file footer.js

````
export default function appFooter(param){

  return   <div class="box s100 secondBg">
        copyright 2022
      </div>
}

```

fileapp.js

````

import appHeader from './header'
import appContent from './content'
import appFooter from './footer'

function App(param){
// scrivo solo una parte delle funzioni
function appHeader(param){.....
function appContent(param){....
function appFooter(param){....

return

  <div>
    {appHeader()}
    {appContent()}
    {appFooter()}
  </div>
}
```

cosa è cambiato divindendoli in files seperati ??

che abbiamo ora app che importa i vari files :

`import appHeader from './header'`

su from gli diciamo quale nome file, ma senza l'estension .js
e su import vedo appHeader , che significa ??

che del file header.js prendo quello che viene esportato, in questo caso appHeader esportato come export default.

In poche parole posso mettere il codice in un file, posso dichiarare tutte le varibiali o funzioni che voglio, ma decido quali devono essere esportate anteponendo davanti alla dichirazione export.

ATTENZIONE !! quindi se vedete una dichirazione con export o export default davanti signica che potete fare import di quel file da un altra parte, appunto con import **_<nome di cosa viene esportato> from <nome file>_**

### Import default o solo import ??

Cosa cambia con import e import default ??

Un tipico esempio dove viene messo il codice in un file a parte, è quando inizio a scrivere codice con funzioni di utilità o che devo essere riutilizzate in più punti

Facciamo un esempio con la media e il totale, massimo e minimo :

vediamo alcune :
const sum = (a, b) => a, b
const totale = list => list.reduce(sum, 0)
const media = list => totale(list) / list.lenght

console.log('media', media([2,4,6])

ma queste funzioni mi possono tornare spesso utili, quindi diciamo le mettiamo in una libreria , cioè appunto un contenitore di funzioni , ma potrebbe essere anche di valori.

quindi creo il file statistica.js, e lo metto in una cartella chiamata util

statistiche.js

```
export const sum = (a, b) => a, b
export const totale = list => list.reduce(sum, 0)
export const media = list => totale(list) / list.lenght
```

export si ripete, significa che sto esportando, sum , totale, list
posso esportare più cose, ma cambia qualcosa su import per prenderne una o tutte

import { sum, totale, media } from './util/statistiche'

vediamo subito che il file './util/statistiche' lo prendo a partire dalla cartella corrente e lo dico con './' punto slash, dentro la cartella util , il file statistiche

ma dentro alle graffe, con il distruttore degli oggetti che mi permette di prendere le singole chiavi, mi richiamo le funzioni esportate.

se dentro a statistiche troviamo altro non esportato , non è possibile importarlo :

statistiche.js

```
const nonVengoEsportato = 'valore esempio'
export const sum = (a, b) => a, b
export const totale = list => list.reduce(sum, 0)
export const media = list => totale(list) / list.lenght
```

la variabile nonVengoEsportato, non ha export davanti, quindi è visibile solo al interno di questo file, in genere perchè è un uso interno, magari perchè appoggia valori temporanei , ma se provassimo a esportarlo, e qualcuno lo usa potrebbe incasinare la logica dentro al file.

Questo meccanismo lo abbiamo visto con le classi, esporto solo quello che serve, e assolutamente non esporto le varibiali che contengono i valori, e se proprio devono essere utilizzati i valori che al intenrno usa la classe, è buona norma dargli accesso con una funzione get , e restituisce banalmente il valore, e una funzione set

class punto {
const punto = {x:0, y:0} // inizializzo a x=0 e y=0 le coordinate del punto

constructor(x, y) {
punto.x = x;
punto.y = y;
}

distanza(fromX, fromY) {
var dx = punto.x - fromX;
var dy = punto.y - fromY;
return Math.sqrt((dx _ dx) + (dy _ dy));
}
getPoint(){
return { x:this.x, y:this.y}
}
setPoint(x, y){
punto.x = x;
punto.y = y;
}
}

la variabile punto non è accessibile, ma la si può leggere con get, e modificare con set,

quello che ci interessa è che da fuori non è possibile modificare punto se non con la sua funzione apposita. Qualcuno potrebbe notare non cambia molto visto che posso modificare i valori, quello che cambia, che ogni modifica passa per una funzione, dove per esempio potrei controllare che i valori di input siano corretti, invece che un diretto assegnamento, o anche in gioco prima di venir modificato controlla se è contro un ostacolo, quindi non poermetto la nuova posizione che sovrasta quello del ostacolo, ma chi utilizza punto è libero di dargli qualsiasi posizione, punto stesso controlla la validità.

Le classi nascono proprio per contenere qualcosa, inizialmente proprio per dare diciamo un prenome comune alle variaibli o funzioni :

punto.x, punto.distanza ecc con la dicitura punto, raggruppo una serie di variabili, poi la classe si è evoluta permettendoci di fare altre cose.

### I MODULI e lo stato

quando mettiamo qulcosa dentro un file e esportiamo qualcosa lo chiamamo il modulo, e come la classe decidiamo cosa deve essere esportato/visto o no.

Questo non è un caso, perchè in generale, spesso è utile proteggere i valori di variabili che loro modifica anche accidentale, potrebbe portare casini. il set ci serve anche come punto centrale dove vedere quando viene modificato, anzichè trovarmi in giro su molti di parti di codice qualcosa che modifica LO STATO della classe, memorizzando dei valori che devono durare nel tempo.

STATO : lo chiamiamo STATO, la differenza con la variabile, ha una durata molto lunga, rispetto a quelle che usiamo per appoggiare temporaneamente dei valori, questo concetto è importante specie su react.

### La grammatica di import e export

posso esportare le funzioni con la dicitura export, ma potrei trovare export default, vediamo cosa cambia

file di libreria :

```
export const default pippo = 5;
export const pluto= 2;
export const paperino = () => 'paperino');
const qui = 2;
```

Possiamo vedere che esporto senza default pluto e paperino, e non esport qui he non potrà essere accessibile al di fuori del file.

quando viene importato

import {pluto, paperino} from './myLib'
import pippo from './myLib'

pluto e paperino li importo mettendoli dentro alle graffe, pippo no !!
pippo lo importo singolarmente, e infatti posso avere un solo export default, come default come nome suggerisce, i questo caso non devo specificare cosa voglio di preciso importare.

Ma posso anche importare pippo con un altro nome :

import nomeAPiacere from './myLib'

avendo un solo export default, non ho problemi di collisioni gli altri nomi di valori esportati, ma dove faccio l'import, potrei avere altri import con nome uguale, ma su altre librerie, in genere scritte da altri programmatori,quindi mi torna utile importarlo con un nome diverso.

Vediamo un altro modo per esportare che ci ha capire meglio anche cosa sia export senza default :

```
const pippo = 5;
const pluto= 2;
const paperino = 3;
export {pippo, pluto, paperino}
```

in questo modo è chiaro che lo esporto come oggetto, che è la stessa cosa se mettevo export davanti a const come inizialmente visto, però potrei fare questo :

```
export {pippo as pippone, pluto as plutone, paperino as paperinone}
```

cioè esportarli con un altro nome, se metto export davanti alla definizione, non posso cambiare nome, successivamente posso importare cosi

```
import * as topolino from './say.js';
console.log(topolino.pluto);
```

in queto caso può essermi utile quindi non prendere i valori come {pippo, pluto, paperino}, ma dentro a una variabile oggetto, questo sempre per evitare collissioni con altri nomi di varibiali al interno del codice dove faccio l'import o perchè mi torna utile per non fare troppe varibili e quindi racchiuderle in quello che geralmente viene chiamato naming,

vediamo come esportiamo i diversi tipi di dati quando esportiano con default :

file userLib.js

```
export default class { // senza il nome della classe
  constructor() { ... }
}

export default function(user) { // senza il nome di funzione
  alert(`Hello, ${user}!`);
}

// esport senza nome variabile.
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

attenzione sto indicando i diversi tipi, in un file ci può essere 1 e un solo export default, come è ovvio che sia.

nel caso di export default, non indico il nome della funzione, o classe o varibiale, in quando lo assegna chi importa quel file :

import persona from 'useLibClass'
import sayHello from 'useLibFunz'
import mesi from 'useLibList'

In questo esempio, ho usato nomi di file diversi, ripetiamo in quanto ogni file può avere un solo export, e qui assegnamo noi liberamente il nome
