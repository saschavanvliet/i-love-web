import express from 'express' 
  
 // Hierna importeer ik de Liquid package uit de json packages. Liquid zal gebruikt worden om dynamisch te werken in html.  
 // Deze wordt dus ook als dependency via npm geïnstalleerd. 
 import { Liquid } from 'liquidjs'; 

 import { readdir, readFile } from 'node:fs/promises'

 const files = await readdir('content')

 console.log(files)
  
 // Nu maak ik een nieuwe Express applicatie aan, waarin ik de server kan configureren. De server.js is belangrijk om routes bijvoorbeeld aan te kunnen maken. 
 const app = express() 
  
 // Ik maak een 'public' aan waar statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts) ingezet kunnen worden. 
 // Bestanden in deze map kunnen dus door de browser gebruikt worden. 
 app.use(express.static('public')) 
  
 // Stel Liquid in als 'view engine' 
 const engine = new Liquid(); 
 app.engine('liquid', engine.express());  
  
 // Stel de map met Liquid templates in 
 // Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden) 
 app.set('views', './views') 
  
 // Zorg dat werken met request data makkelijker wordt 
 app.use(express.urlencoded({extended: true})) 
  
 app.get('/', async function (request, response) { 
     response.render('index.liquid', {files: files}) 
   }) 

 app.get('/404', async function (request, response) {
    response.render('404.liquid')
  })
  
 app.use((req, res, next) => {
    res.status(404).render('404.liquid')
  })
 
 // Ik heb het poortnummer ingesteld waar express op moet gaan luisteren. Ik heb de port het nummer 8080 gegeven zodat deze niet hetzelfde is als mijn visitekaartje. 
 app.set('port', process.env.PORT || 2002) 
  
 // Start express op, haal daarbij het zojuist ingestelde poortnummer op 
 app.listen(app.get('port'), function () { 
   // Toon een bericht in de console en geef het poortnummer door 
   console.log(`Application started on http://localhost:${app.get('port')}`) 
 }) 