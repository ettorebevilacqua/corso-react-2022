### Html e dom

L'html non essendo un linguaggio di programmazione, una volta scritto, rimane qualcosa di rigido, una struttura scelta a priori che non prevede che essa vari, inoltre per esempio ho una lista con gli elementi che si ripetono, non è possibile scriverla una volta sola e ciclarla.

In passato non era cosi importante, e non è nemmeno necessario oggi, che una volta che viene caricata la mia pagina, io vado a modificare il suo html.

Ma cosa significa modificare l'html di una pagina ?? in realtà con javascrit, possiamo modificare la struttura chiamata DOM del browser che sono gli oggetti con le informazioni dove viene ricostruita la pagina.

Quando il browser carica la pagina , legge l'html, che è un linguaggio fatto per gli umani per essere più facilmente gestito, quindi ad ogni tag letto, il browser deve ricostruire l'oggetto dom che lo rappresenta, questo poi viene visualizzato, da questo punto in poi il browser non legge più l'html ma queste informazionoi che sono oggetti javascript.

<div id="root">
  <h2>Titolo</h2>
  <p>esempio <br> a capo</p>
</div>

se scriviamo questo e andiamo a interrogare con document.getElementById('root)

esso ci restituisce l' oggetto dom dove per praticità cè lo visualizza con il suo HTML, ma una variabile oggetto con molte proprietà e metodi.

const a = document.getElementById('root)
se faccio a. dalla console, dove mi propone il completamento, vedo molte proprietà tra cui per esempio a.tagName, che sarà "div" o anche alcune che sempbrano quelle del html o dei css, per esempio clientWidth che ci dice quanto occupa in larghezza, ma non trovo width che solitamente scrivo in html, giusto per far vedere che non sono la stessa cosa.

Se proviamo a chiamare, a.children ci va vedere i suoi figli, per noi cosa contiene, infatti a.children è un array che contiene h2, e p in quali contengono non dei tag a sua volta html, ma del testo.

Da qui potrei per esempio modificare a.innerHTML per modificare il suo contenuto, anche se è una scorciatoia per non scrivere molti

```
const newElementDiv = document.createElement('div')
const parentElement = document.getElementById('root)
parentElement.appendChild(newElementDiv);
```

da qui possiamo vedere che creiamo un nodo dom (nel dom non ho i tag html, ma i nodi del suo albero, dove anche il testo è un nodo), e lo "appendiamo" a un altro nodo dom, in questo caso il div con id root, a cui ho dato proprio per identificarlo, il risutato sarà in questo caso un div con dentro un altro div, se prosegue con appendChld di atri elementi, popolo la proprietà chidren del elemento padre.

Da qui possiamo vedere che senza scrivere l'html posso comporre la mia pagina direttamente in javascript, ma uso l'html perchè più descrittivo e alla portata anche dei non programmatori.

E qui però subentra il problema del limite del html, non ci permette di trasformalo, aggiornare dei valori, visualizzare delle varibiali ecc, se non tramite la MANIPOLAZIONE DEL DOM.

Ricordiamo che il browser legge l' html e costruisce il dom, processo in più in più da eseguire, perchè deve tradurre, se agiamo direttamente sul dom, non deve fare traduzioni, e la pagina si modifica più velocemente.
