I programmatori, come abbiamo visto nella manipolazione del dom, con il tempo sono partiti da timide manipolazioni per esempio per cambiare al volo un totale visualizzato perchè sono cambiati i suoi addendi, in html una volta scritto il totale , devo ricaricare tutta la pagina, dove il server mi deve dare l'html aggiornato, quindi devo ricaricare tutta la pagina, anzichè "modificare solo quel pezzetino".

Successivamente, si è arrivati al esigenza che l ' intera pagina la costruisco direttamente in javascript, in questo modo liberandomi dal rigido html, il programmatore ricostruendo tutto da codice, può al volo per come siamo noi abituati a dire cambiare la pagina, senza dover caricare dal server un altro file, o l'html in questo caso aggiornato dal server.

L' esigenza tipica è la navigazione del mio sito, quando cambio pagina, in realtà non cambio pagina, ma riscrivo il dom del browser con questa tecnica.

In questo modo arriviamo alla ONE PAGE application, che significa che tutta la mia pagina sta in un unico file HTML, non devo più chiamare un altro file html che visualizza un altra pagina.

Nel mio progetto vedrò in file HTML vuoto nel body, ma con un elemento div (o il body stesso) con un id , dove è l'elemento per noi root, radice dove dentro esso rappresentiamo la pagina corrento.

In poche parole react e librerie simile, mi permettono in modo agevole di fare questo tipi di pagine, che hanno il vantaggio di non appensantire il server in continue chiamate solo perchè è cambiato qualcosa di minimo tipo un totale.

E a questo ci serve react.
