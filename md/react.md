### Perchè usare react

React è una libreria, che ci permette di manipolare il dom e controllare di aggiornare la pagina se qualcosa che sto visualizzando deve cambiare valore, per esempio dicevamo un totale.

In poche parole, quello che mi permette di fare, è tramite il suo template , definire come ho sempre fatto l'html, ma con la differenza che posso inserire dei valori di varibiali da visualizzare, cosa che non posso con l'html tradizionale, in quanto non è un linguaggio di programmazione ma di descrizione.

vediamo un esempio :

```
function TotaleClienti(param){
   return <div>

   <p>Totale clienti <strong>{param.totale}</strong></p>
   </div>
}
```

vediamo subito che il totale lo passiamo nei suoi parametri, alla funzione vengono passati i parametri con un oggetto js, i quali contengono il nome del parametro come chiave e il suo valore.

Possiamo rendere l'idea con le string template, per esempio devo compilare la mail da spedire per il compleanno :

```
function compilaMail(param){
  const anni = calcalaPeriodo(param.dataNascita);

  return ` Auguri ${param.nome} per i tuoi ${param.anni}, presto saremo nella sua città {param.city} per presentarle il nostro nuovo catalogo.`
}
```

questa funzione potrei passarla per esempio a una funzione di map

const mailsDaSpedire = clienti.map(compilaMail);

oppure volerla visualizzare come html per esempio come anteprima :

in questo caso mi serve qualcosa che faccia :

```
function compilaMail(param){
  const anni = calcalaPeriodo(param.dataNascita);

  return <div>
    Auguri {param.nome} per i tuoi ${param.anni},
    <br /> presto saremo nella sua città {param.city} per presentarle il nostro nuovo catalogo.
  </div>
}
```

Questo è possibile con react o librerie del suo genere, che chiamiamo di manipolazione del dom, con l'html non è possibile quanto meno definire una funzione, cosi vado oltre al "rigido" html.
