Visto a cosa serve react, possiamo subito iniziare con esempio con qualcosa che andremo a fare (si spera) molto spesso, mettere in ordine il codice html e prendiamo questo esempio :

````
 <div className="App">
      <!-- HEADER DELLA PAGINA -->

      <div class="box s100 firsBg">
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
      </div>
 <!-- CONTENUTO DELLA PAGINA -->

      <div class="box s66 ">
        <ul>
          <li>
            <a href="somepage.html" class="button">
              Camion
            </a>
          </li>
          <li>
            <a href="somepage.html" class="button">
              Vetture
            </a>
          </li>
          <li>
            <a href="somepage.html" class="button">
              Moto
            </a>
          </li>
        </ul>
      </div>

 <!-- FOOTER DELLA PAGINA -->
      <div class="box s100 secondBg">
        copyright 2022
      </div>

    </div>
    ```
````

questo non è molto html, eppure non è di immediata lettura, e devo leggere i dettagli per capire in sintesi cosa fa questo codice.

Se proviamo a modificarlo, spesso è antipatico , in quanto devo stare attento alle giuste aperture e chiusure dei tag, dove è difficile in quanto sono innestati tra loro, uno dentro l'altro, se non sto attento devo controllare un po tutto per trovare chi non è chiuso cose tag.

riscriviamo questo codice, separandolo per funzionalità.
Possiamo vedere che è fatto da un header, un contenuto e un footer :

```
function appHeader(param){

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

```
function appContent(param){

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

facciamo copia e incolla del contenuto come return della funzione

```
function appFooter(param){

  return   <div class="box s100 secondBg">
        copyright 2022
      </div>
}
```

Come vediamo abbiamo separato in 3 funzione diverse il primo grosso html, ora le devo mettere insieme cioè :

Riscrivo il tutto, qui per esempio metto solo la parte inziale delle funzioni quello che ci interezza è ciò che si trova sul return :

```
function renderPage(param){
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

Spezzando l 'html in funzioni adeguate, mi riduco a leggere la mia pagina inziale , su qualcosa ora fatto in poche righe, è ora chiarissimo cosa devo visualizzare, e se devo fare modifiche non devo più impazzire con le chiusure dei tag, o anche posso maneggiare il codice molto meglio.

e' finita qua ?? no posso continuare a ritroso, un po come si faceva a scuola con l' algebra, oppure come esempio è quello del trasloco, quando trasloco, separo i miei oggetti dentro delle scatole, divisi per pertinenza, cosi faccio prima a trovarli, se no devo aprire tutte le scatole se per esempio devo cercare il termometro, più ho suddivo le cose, anche dentro le scatole, più sarù facile, sempre che abbiamo chiamato le scatole CON IL GIUSTO NOME !!! un po come facciamo con i files e cartelle.

vediamo l'header : esso ci visualizza una scritta e dei pulsanti di link :

```
function appHeader(param){

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

Riscriviamola evitando le ripetizioni del codice :

```

  const links = [
    {titolo: 'Home', url: 'home'},
    {titolo: 'Prodotti', url: 'prodotti'},
    {titolo: 'Contatti', url: 'contatti'}
  ]

function appHeader(param){

  return (<div class="box s100 firsBg">
        <div class="box s30">First React</div>

        <div class="box s50 right">
        {links.map(link =>(
          <a href="{link.url} class="button">
            {link.titolo}
          </a>
          )}

        </div>
      </div>)
}
```

Come vediamo ora abbiamo definito :

```
  <a href="{link.url} class="button">
            {link.titolo}
          </a>
```

una sola volta dentro il map, ma con valori presi da varibili anzichè fissi, il map ciclando genere tutto l'html (il dom in realtà), della lista dei link.

Le informazioni dei link, ora si trovano in una lista, e non mescolate nel html !!

Da questo possiamo osservare come abbiamo diviso i dati dalla loro rappresentazione o visualizzazione, se modifico qualcosa dentro al tag a, tutti i link prendono la stessa modifica, con poche modifiche ... modifico molto.

Questo processo, dove spezziamo codice in funzioni più specifiche e specializzate a fare una determinata cosa è ancora più importante quando programmiamo, dopo un po che il codice cresce ci dovremo fermare e separarlo in funzioni, se abbiamo dato i nomi giusti la leggibilità è molto migliorata.

### un buon codice , si legge senza bisogno dei commenti, è fatto di non molte righe che chiamano a sua volta funzioni

Facciamo un esempio con il giocatore di calcio e noi siamo il suo allenatore.

Al giocatore, diciamo: tira, torna indietro, passa la palla ecc
Non gli diciamo, avvicinati la palla, alza la gamba indietro spingila con il piedo contro il pallone, per dirgli tira !!!

Quello che mi interessa, è prendi mettimi in zona, contrasta l'avversario, passa la palla al compagno, cioè i macro processi non i dettagli, se poi voglio migliorare le perfomance del giocatore, dentro la "funzione" la funzione tira, aggiusto i difetti mentre muove la gamba, definendo meglio il dettaglio, ma mentre gioca non ragiona a questo livello di dettagli !!!.

Vediamo che non facciamo questo solo per mettere ordine, cosa che però è alla base della programmazione e al di fuori di questo le cose diventano difficili, vediamo che separiamo l'html in componenti, per ora la facciamo facile con le funzioni, concetto familiare, anche se i componenti è un altro modo di chiamare le funzioni.

proseguiamo ora mettendo le funzioni precedenti in files diversi.
