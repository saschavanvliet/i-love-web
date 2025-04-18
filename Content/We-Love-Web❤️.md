Hier zie je alle We Love Webs die ik heb gevolgd gedurende de hele opleiding. Onder het tabblad 'pages' kun je de samenvattingen van de presentaties vinden.

'We Love Web' is eigenlijk een term die gegeven is vanuit de opleiding om presentaties aan te geven die worden gemaakt door externen. De presentaties worden dus niet gegeven door leraren van de opleiding, maar door mensen die daadwerkelijk werkzaam zijn in de wereld van frontend & design.

# 2024-2025 presentaties
## Kilian Valkhof - 14-02-2025
- Net een huis gekocht in Zoetermeer
- Maker van Polypane vanuit zijn zolderkamer

Met iedere klik kreeg je vroeger 15 cent. Vanaf zijn twaalfde verdiende hij al geld met het maken van website. Op zijn middelbare school werd de website van de school beheerd door leerlingen. Dat vond hij erg interessant en vanaf zijn zestiende begon hij zijn eigen bedrijf. Hij wilde namelijk officieel geld verdienen met het maken van websites.

Wat heeft hij onder andere gemaakt?
- Hij maakte een css framework zodat er een vaste styling zou bestaan voor verschillende websites.
- Plugin gridbuilder.
- Grafico Javascript charting library voor zijn stage.
- Trimage image compressor (gemaakt in python).
- f.lux (gemaakt in python), scherm wordt geler gemaakt naarmate het later wordt op de dag. 
- FromScratch. --> texteditor. Alles wordt automatisch opgeslagen in deze app. alles wordt ook automatisch ingedend. 
- Polypane!!

Designen in sketch in 2025 want frames werken handiger en logischer dan in photoshop.

Board in browser --> Polypane --> Button

In 2019 was hij even werkloos, maar hij wilde graag weer aan het werk. Hij was namelijk weggegaan bij zijn vorige bedrijf. 

Devtools, toegankelijkheid werd veel belangrijker voor Kilian. Het toevoegen van toegankelijkheidstesten is heel nieuw en het werd helemaal niet echt gebruikt. Dit is nu bij Polypane heel populair, want er wordt een grote nadruk gelegd op deze testen. 

De basis van Polypane is Electron. 
- React
- NodeJS
- Javascript

Communicatie
- React state
- Inter Process Communication (IPC)
- Message bus
- Message Ports
- Chrome Devtools protocol

Tijd gestoken in het ondersteunen van extenties. Error messages geimplementeerd.

6 jaar lang iedere maand een nieuwe versie van Polypane.

Hij had ook tijd voor side projects. 
- Zoals een site waar hij verschillende kleuren ergens neerzette waardoor hij gemakkelijker een design system kon bouwen. 
- Polypane Go voor Ipad. 

Tip: BLIJF SITE PROJECTS DOEN om bijvoorbeeld jezelf nieuwe dingen uit te leren en te kijken wat jij echt leuk vindt.

Komende zomer is Polypane tien jaar oud. Er is echter nog genoeg te doen en er zijn nog genoeg ideeën voor de volgende jaren. Een website is nooit helemaal af.


## Vasilis van Gemert - 13-09-2024
- Was kunstenaar
- Code kost niks dus makkelijk te gebruiken

Flexbox, animaties. 'Is er een nieuwe css techniek? Dan kijk ik of ik dat bijvoorbeeld in mijn homepage kan gebruiken'. Vasilis is altijd bezig met kijken naar vernieuwing. Zo heeft hij van jongs af aan al een passie voor dingen maken en daarom voelt hij zich nauw verbonden met css. Hij grapte zelf dat hij niet zo goed is in Javascript, maar juist graag websites visueel aantrekkelijker wilde maken. 

Zijn favoriete website: https://lovenonsense.com
--> Zelf gemaakt; liefde voor onzinnige dingen.
Hij heeft meerdere poppetjes gemaakt met bepaalde functies. Met de letter L kan je bijvoorbeeld een laser tevoorschijn laten komen in het ontwerp.

Ook liet hij een voorbeeld zien met schilderijen. Hij had namelijk een toffe animatie gemaakt waarbij er een flip tevoorschijn kwam met aan de andere kant van het plaatje de achterkant van het schilderij. Dit is grappig, omdat het lijkt alsof je het kunstwerk omdraait als het ware.

Een ander voorbeeld dat hij liet zien was een voorbeeld met klokken. Vasilis vertelde een grappig verhaal over dat er in Griekenland minder strict wordt gedaan over de tijd. Hij raakte geinspireerd en ontworp andere klokken met een ander soort tijd-grootheid.

Hij gaf nog een tip: maak je websites minder saai! Gebruik de leuke animaties en poppetjes etcetera, want dan wordt je site leuker om op te navigeren.

Een ander voorbeeld: hij ontwikkelde een eigen lettertype met een variabel font. Als je typt lijkt het alsof het op een typemachine is gemaakt. Dit heeft hij gedaan door alle knoppen die aan de buitenkant zitten minder dik te maken.

### Toegankelijkheid
Vasilis vertelde nog iets over toegankelijkheid. Dit is een onderwerp waar we volgende sprint mee te maken krijgen. Als voorbeeld gaf hij het kleine liftje bij de ingang van het HvA. Dit liftje is gemaakt voor mensen die in een rolstoel zitten alleen het probleem is dat hij super langzaam omhoog en omlaag gaat. Zo'n 5 minuten om precies te zijn. Dit is natuurlijk echt veel te lang. Als er meerdere mensen tegelijkertijd ergens moeten zijn om een bepaalde tijd is dit helemaal niet mogelijk.

Hij gaf nog een ander voorbeeld met een ontoegankelijke website: Het kan 2 minuten duren voordat je als blinde iets kan vinden. Dit terwijl iemand die geen beperking heeft diezelfde link binnen 2 seconden zou kunnen vinden. Conclusie; maak je site niet te ingewikkeld en zorg ervoor dat elk persoon zich kan navigeren op jouw website. 
-->  
Geluidinzicht.nl

### Wat heb ik meegekregen uit deze presentatie?
Ik heb geleerd dat je echt super veel kan maken met css. Je hoeft niet alles op Google op te zoeken als je bijvoorbeeld een bepaald poppetje wil implementeren in je website. Daarnaast besef ik mij dat je website niet altijd saai en statisch hoeft te zijn, maar dat je ook animaties over je tekst heen mag gooien. Ten slotte blijf ik me erover verbazen hoe ontoegankelijk bepaalde facetten van de samenleving nog zijn. Zowel online als in het echt. Tegenwoordig komt is er wel steeds meer aandacht voor toegankelijkheid, dus dat is een hele positieve internationale ontwikkeling. Hopelijk zal er in de toekomst nog meer aandacht aan besteed worden.

# 2023-2024 presentaties
<details> <summary> Zie hier alle we-love-webs van mijn vorige schooljaar </summary>

## Lezing pre css day events

### Begin lezing
Sanne liet een paar projecten zien van studenten en van zichzelf die gemaakt waren aan de hand  van css. Deze projecten zagen er erg ingewikkeld uit. Tevens legde hij iets uit over de indeling van de minor die je zou kunnen volgen aan de opleiding.

### Bramus van Damme
Allereerst liet hij een paar werken zien die gemaakt waren aan de hand van view transitions. Je kan dit in verschillende browsers gebruiken, maar er moeten nog wel dingen getweeked worden. “The View Transition API gives you the power to create seamless transitions between 2 different views of your website”. 
```
Document.addEvenntListener(‘click’, e  {
```
There will be a cross overlap between old en new content. 
```
Document.startViewTransition( ()  {                                   
     nextSentence ()
});
```
``` css
: root : : view-transition
      : : view-transition-group (root)
                   : : view-transition-image-pair (root)
                          : : view-transition-old (root)
                          : : view-transition-new (root)
```
2 Snapshots over elkaar.
We kunnen de animatie naam veranderen en we kunnen de keyframes veranderen. 
Live transitions. Fade in, fade out.
The group is the one responsible for changing everything. For example size.

1.	Identify a name  bijv card, cover, control
2.	Trigger view transition
3.	Customize animations using css
Nieuwe dingen ; het is nu beschikbaar in chrome. 
Een ding wat niet fijn is is dat je nu nog zelf voor alles namen moet geven per view-transition. 
Events on old page:
-	Navigate
-	Pagehide
-	Visibilitychange
-	Unload
-	Pageswap 

Events on the new page
-	Load 
-	Pageshow 
-	Pagereveal

### Miriam Suzanne
Normal flow is de default layout van het web. 
Intrinsic sizing
Extrinsic sizing

Content pushing out and pushing in. You cant change the container your quering. For size related queries you have to turn off intrinsic sizing, which won’t always go well. 
Contain : style ; 
Height : inline size ;
Containment is invasive. There are too many side effects. 
You can measure actual styles with container queries.

## Ischa Gast - Een We Love Web over toegankelijkheid.

In deze 'We Love Web' heeft gastspreker Ischa Gast verteld over hoe je toegankelijkheid toepast en herkent in het dagelijks leven.

### Samenvatting presentatie Ischa Gast
Ischa vertelde zijn verhaal zeer duidelijk. Hij is werkzaam bij Schiphol en hij richt zich vooral op toegankelijkheid. Hij toonde ons bijvoorbeeld meerdere voorbeelden uit het dagelijks leven waar rekening is gehouden met dit onderwerp. Zo liet hij zien dat er een liedje van Rihanna op tv volledig was vertaald in gebarentaal, zodat doven of slechthorenden ook het liedje konden 'beluisteren'. Ook had hij een voorbeeld bij het zicht van een metrostation. Hij vertelde echter ook dat er vaak exclusie plaatsvindt voor mensen die beperkt zijn (en volgens hem is iedereen wel op een bepaalde manier beperkt in iets, want je kan bijvoorbeeld wel een tv show horen in een ideale omgeving maar niet met veel achtergrondgeluid, dus dan ben je afhankelijk van ondertiteling). Zelfs de meest gebruikte site (Google) is niet volledig toegankelijk, wat best wel dramatisch is. Zo zie je dat er op internationaal gebied niet voldoende wordt gelet op toegankelijkheid in websites (maar dus ook in het echte leven). Ischa liet dit weer zien aan de hand van een voorbeeld. Op de site van Hema was er bijvoorbeeld een link niet goed gedefineerd, waardoor mensen die blind zijn niet kunnen begrijpen waar de link naar leidt. Hij gaf ook een voorbeeld uit het dagelijks leven van een vorm van exclusie op zijn werk. Op Schiphol zijn er namelijk uitlegpalen met geluid, maar dit is natuurlijk niet toegankelijk voor mensen die doof zijn. Als laatste punt zei hij nog dat bepaalde kleuren ook voor ontoegankelijkheid kan zorgen (wat ook besproken is in een workshop op de opleiding over kleurtheorie). Bepaalde kleuren kunnen er bijvoorbeeld voor zorgen dat iets minder of juist meer zichtbaar is.

### Wat heb ik uit deze presentatie gehaald?
Ik denk dat ik nu door deze We Love Web samen met de presentatie die ik eerder heb gehad op de HvA van de opleiding CMD een heel goed idee heb van wat toegankelijkheid is en hoe je dit kan herkennen en toepassen in het dagelijks leven. Zelf heb ik hier eigenlijk nooit eerder over nagedacht, omdat ik niet veel mensen ken die een sterke beperking hebben. Het is ook bizar om erachter te komen en je te realiseren hoeveel mensen er wel niet beperkt zijn en hoe weinig hier op internationaal vlak eigenlijk mee wordt gedaan.

## Yolijn vd Kolk

We hebben op een vrijdag voor de kerstvakantie een we-love-web gevolgd van Yolijn van der Kolk. Yolijn is een product manager bij NL Design System. Yolijn heeft tijdens de we-love-web gesproken over haar werk en allereerst is zij ingegaan op het Design System. Dit systeem omvat componenten die specifiek zijn ontworpen voor ontwikkelaars en ze worden in Figma gemaakt om ze gemakkelijk samen te voegen bij het bouwen van een applicatie.

Samenvatting presentatie Yolijn
Het Design System omvat richtlijnen, teksten, en gedeelde inzichten uit gebruikersonderzoek. Er wordt benadrukt om te controleren of aannames correct zijn, mogelijke omissies te identificeren en peer-reviewed te werk te gaan. Het gebruikersonderzoek wordt uitgevoerd via Gebruikersonderzoeken.nl.

De patronen zijn goed getest. Deze gebruikerstesten zijn namelijk ook goed onderzocht op toegankelijkheid. Denk aan contrast en kleurenblindheid of mensen die niet goed zijn in scrollen. Er wordt onderzoek gedaan naar wat werkt voor de gebruikers.

Het ideale designsystem omvat ook goede foutmeldingen. Er werd in de presentatie verwezen naar Sanoma learning.design.nl en het ING Design System als voorbeelden van goed ontworpen systemen.

Het NL Design System is een overheidsbreed initiatief met meer dan 600 leden. Het benadrukt de samenwerking tussen overheidsorganisaties, gemeenten zoals Amsterdam en Den Haag, en leveranciers. Het doel is om gezamenlijk aan een designsystem te bouwen. Ze werken met een estafettemodel, waarbij een component of richtlijn een bepaalde status kan hebben totdat deze wordt opgepakt door iemand uit de community.

Er wordt ook aandacht besteed aan open source en het delen van kennis binnen de community. Het estafettemodel wordt ook toegepast op het gebied van help wanted, community, en het identificeren van kandidaten voor bijvoorbeeld het aanpassen van knoppen op gemeentelijk niveau. Een ander belangrijk aspect bij design systems is het gebruik van Storybook, waarin een component binnen een logo kan worden aangepast. De technologiestack omvat CSS-componenten met voorspelbare namen, design tokens in JSON, webcomponents waar mogelijk, framework-componenten waar handig, en documentatie in markdown.

Er wordt gebruik gemaakt van design tokens om consistentie te behouden in huisstijl, algemene aspecten en componenten. Er wordt benadrukt dat design tokens een bron van waarheid zijn voor zowel code als design, en dit wordt ondersteund door Style Dictionary.

Bepaalde aspecten, zoals proprietary (eigendomsrechtelijk) materiaal, zijn uitgesloten van de EUPL-licentie. Er wordt ook aandacht besteed aan het ondersteunen van Right-to-Left-separators en het uitvoeren van visuele regressietests met behulp van Storybook voor ontwikkelaars.

### Wat heb ik uit deze presentatie gehaald?
Ik moet heel eerlijk bekennen dat ik het een erg moeilijk verhaal vond. Yolijn is een erg intelligente vrouw die goed weet waar ze het over heeft. Wellicht als ik mij meer zou verdiepen in haar werk dat ik het interessanter zou vinden. Op dit moment is het voor mij namelijk nog een beetje abracadabra.

## Fenna de Wilde

Fenna de Wilde is een creative content developer en ze is nu al twee jaar werkzaam bij Bakken & Baeck. Hiervoor had je bij Build and Amsterdam gewerkt en dat was meer e-commerce. In totaal is ze al 4.5 jaar werkzaam in de wereld van frontend & design.

Tijdens de we-love-web liet ze meerdere sites zien waar zij aan had gewerkt. Er was zelfs een site bij die genomineerd was als website van het jaar.

Ze had recentelijk ook aan een crypto website gewerkt waarbij ze de branding van crypto zelf wilde veranderen. De website heet Phantom en zij wilden de site vriendelijker eruit laten zien. Zwart kan namelijk mensen afschrikken die niks begrijpen van cryptocurrency.

In het bedrijfsleven weten vrij weinig mensen af van toegankelijkheid. Dit moet eigenlijk wel zo zijn. Als een website niet voor iedereen toegankelijk is, dan heb je er niks aan. Een website gaat vooral over bruikbaarheid en gaat om de gebruiker.

Toegankelijkheidsrichtlijnen. Focus state voor keyboard gebruikers: Niet alle gebruikers bedienen een interface met een muis. Je kunt dan een focus state toevoegen door een :focus-visible te gebruiken.

Aria attributes: Ze geven aanvullende informatie aan hulptechnologieen over het gedrag en de structuur van je code.

Aria controls: Als een element het andere element controleert. Het element dat wordt gecontroleerd krijgt een id en het andere krijgt een aria-controls.

Zorg ervoor dat je carrousels ook toegankelijk zijn. Dit is vrij lastig als je bijvoorbeeld erdoorheen wil tabben. De carrousels moeten een role=“group” hebben.

Vermijd het gebruik van li elementen voor je slides. Als je slides verbergt, zal het aangekondigde aantal li-items niet overeenkomen met het werkelijke aantal slides.

Er zijn dus veel verschillende toegankelijkheidsprincipes in code waar rekening mee gehouden moet worden. Dit kan uiteindelijk, wanneer dit goed uitgevoerd is, gecontroleerd worden aan de hand van toegankelijkheidstesten en als er nog iets mist kan dit in een iteratie nog aangepast worden.

### Wat heb ik uit deze presentatie gehaald?
Ik ben zelf nog niet echt op het advanced niveau van Fenna, dus de dingen die ze uitlegden kwamen me wel bekend voor, maar ik zou er zelf nog niet mee kunnen werken. Wel vond ik het interessant om te zien hoe leerlingen die op CMD of een frontend opleiding hebben gezeten veel aandacht besteden aan toegankelijkheid, waarbij veel mensen in het daadwerkelijke werkveld niet eens echt weten wat toegankelijkheid inhoudt. Ik ben wel voor inclusie, dus ik vind het goed dat er nu steeds meer aandacht aan wordt besteed.

## Julia Miocene
Julia Miocene vertelde in haar we-love-web over css en zij liet een paar animaties zien die zij gemaakt had.

Zij vertelde dat in 1996 werd CSS geïntroduceerd en tijdens haar presentatie deelde ze inzichten over de evolutie van animaties, van de eerste animatie in 1900 tot de eerste CSS-geanimeerde creatie in 1996. Deze historische ontwikkeling inspireerde haar om zich te verdiepen in CSS-animaties.

Julia staat bekend om het creëren van boeiende CSS-animaties met alleen HTML en CSS. Haar uitdaging is om steeds meer karakter en levendigheid toe te voegen aan animaties en cartoons.

De animaties die ze deelde waren van zowel van andere makers als van haarzelf, die ze op CodePen had gemaakt. Haar motivatie? Het leren van nieuwe dingen, het proberen van nieuwe technieken, plezier hebben, burn-out voorkomen, vaardigheden ontwikkelen in verwante gebieden, deel uitmaken van een creatieve gemeenschap en bijdragen aan de vooruitgang van technologie.

Voor degenen die geïnteresseerd waren in het starten met CSS-animaties, raadde ze bronnen aan zoals Codepen.io/challenges, Cssbattle.dev, en 100daysCSS.com.

## Tim Borst - Een We Love Web over het toepassen van frontend & design in de praktijk

Tim Borst vertelde op een vrijdag over zijn carriere binnen het vakgebied van frontend & design. Hij vertelt bijvoorbeeld over hoe hij zijn carriere begon en hij gaf tips over wat het betekent om een goede ondernemer te zijn binnen het werkveld. Hij deelde tevens zijn ervaringen met verschillende bedrijven en mensen. Dit is relevant voor ons als frontenders in spe, doordat wij een beeld krijgen van hoe onze toekomst er uit zou kunnen zien.

### Samenvatting presentatie Tim Borst
Tim is een fanatieke frontender met een enorm doorzettingsvermogen. Nadat hij met enige vertraging eindelijk de studie CMD had afgerond op de HvA begon hij zijn eigen bedrijf. Hij huurde een studio in Amsterdam af voor een prikkie en zodoende ging hij met een vriend aan de slag. Ze begonnen dus klein en ze namen elke klus aan, maar uiteindelijk groeide hun bedrijf uit naar verschillende plekken en het aantal werknemers breidde uit. Uiteindelijk gingen ze zelfs werken een bedrijf als Audi. Tim benadrukte dat het altijd belangrijk is om je financien bij te houden en om op tijd de offertes te sturen. Op deze manier liep je niet achter op je eigen werk. In 2019 verliet hij het bedrijf dat hij mede had opgericht om weer zelfstandig aan de slag te gaan. Later bleek dat hij misschien wel een beetje spijt had van deze keuze.

### Wat heb ik uit deze presentatie gehaald?
Tim vertelde op een overtuigende manier hoe hij is gekomen naar het punt in zijn carriere waar hij nu staat. Ik vind het erg inspirerend om te zien hoe je als eenvoudige net afgestudeerde frontender zonder praktijkervaring, kan uitgroeien tot iemand die een middelgroot bedrijf heeft opgericht met meerdere werknemers en waardevolle klanten. Daarnaast vond ik het prettig dat hij uitlegde dat je dit werk niet altijd alleen hoeft te doen en dat het makkelijk is om samen met anderen aan de slag te gaan om een eindproduct te bewerkstelligen. Door zijn presentatie heb ik een beter beeld van welke opties er zijn voor mij in de toekomst.

## Justus 
### Digital Gardening
In deze 'we-love-web' heeft Justus (een van onze leraren) iets verteld over digital gardening en het indieweb. Oorspronkelijk zou er een spreker van buitenaf komen, maar deze persoon kon uiteindelijk toch niet komen. Justus was gelukkig erg enthousiast over het onderwerp dat hij gekozen had en hij kon er dus goed over praten.

### Wat is digital gardening?
Het concept digital gardening is gebaseerd op een metafoor, namelijk een tuin. Een tuin is namelijk dynamisch en er valt altijd wel aan te werken. Er groeien planten die weer geknipt moeten worden of er is viezigheid op de grond, ga zo maar door. Justus gebruikt dit als metafoor om uit te leggen dat dit in de digitale wereld ook zo werkt. Je bent namelijk constant bezig met nieuwe inzichten opwekken, je krijgt nieuwe ideeen en je verwerkt steeds nieuwe informatie dat zich ook voortborduurt op elkaar. De 'tuin' is dus als het ware de plek waar je alle informatie bewaart en opslaat. Tevens werkt je deze info steeds bij doordat je nieuwe kennis vergaart. Jouw fysieke tuin maak je ook steeds beter en mooier en het blijft een voortdurend proces.

### JavaScript
JavaScript speelt een belangrijke rol in het digital gardening proces. Omdat Javascript heel dynamisch is kunnen digital gardeners interactieve dingen creëren voor hun gebruikers. Veel frameworks zoals React maken het gemakkelijk om ingewikkelde 'tuinen' te bouwen waarin je gestructureerd je kennis en ideeen kan presenteren. Mensen kunnen zich dus gemakkelijk navigeren tussen de verschillende inzichten.

### The Stream
Justus vertelde ook over een concept genaamd: "The Stream". Dit houdt in dat er op dagelijkse basis een constante stroom van informatie op ons afkomt als sociale media gebruikers. Het is als een eindeloze stroom van updates, nieuwsberichten en meningen die voortdurend voorbijkomen en waar je snel doorheen moet navigeren om bij te blijven. Dit heeft effect op de daadwerkelijke vrijheid die je hebt in het gebruiken van het web.

Zeker na de opkomst van algoritmen kan men geïsoleerd worden van wat voor hen niet belangrijk of irrelevant is. Eigenlijk wordt er dus per persoon bepaalde informatie verwijderd of niet getoond op basis van een inschatting van wat iemand leuk vindt. Algoritmen zijn echter wel handige tools om je te helpen met het navigeren door grote hoeveelheden data.

Effecten van The Stream
The Stream heeft een aantal effecten:

Allereerst hebben mensen een kortere aandachtsspanne. Door de constante stroom van informatie worden mensen steeds sneller afgeleid en hebben ze een kortere aandachtsspanne. Dit kan het moeilijker maken om inhoud te absorberen.
Mensen kunnen in een ‘filter bubble’ terecht kunnen komen. In deze situatie zou iemand alleen maar informatie ontvangen die aansluit bij hun bestaande overtuigingen en interesses. Mensen hebben de neiging om informatie te zoeken en te geloven die overeenkomt met hun eigen overtuigingen en vermijden informatie die daarmee in tegenspraak is. Dit wordt selective exposure genoemd.
Dit kan vervolgens weer leiden tot een toename van politieke of sociale polarisatie omdat mensen minder worden blootgesteld aan verschillende standpunten. Daarnaast kan het er ook voor zorgen dat mensen minder goed voor zichzelf kunnen bepalen waar het overgrote deel van de mensen zich mee bezig houdt. Er kunnen dus misconcepties ontstaan over wat nou een groot probleem of een klein probleem is.
Uiteindelijk kunnen deze factoren ervoor zorgen dat iemand eigenlijk zonder ervoor te kiezen in een bepaalde richting wordt geduwd en dit past niet bij de grondbeginselen van een democratie. Het is voor het individu gevaarlijk, maar ook voor de algehele samenleving.
Wij zouden hierom meer verantwoordelijkheid en zeggenschap moeten nemen in de controle die je hebt over de dingen die je consumeert en waar je je tijd aan besteed. Zo behoudt je enigszins toch de controle en word je niet meegertokken met de zogenaamd stroom van de digitale wereld.

### Het indieweb 
Het Indieweb is een beweging die zich inzet voor het terugwinnen van controle en vrijheid over onze online identiteit en inhoud. Het draait om het idee dat mensen hun eigen websites bezitten en beheren, in plaats van afhankelijk te zijn van grote sociale mediaplatforms. Het Indieweb moedigt mensen aan om zelfstandig te publiceren, te communiceren en te delen op het web, met behoud van controle over hun gegevens en inhoud.

Ik vind het Indieweb een interessant onderwerp omdat ik opgegroeid ben in een tijd waarin sociale media een grote rol spelen en ik persoonlijk de effecten en invloeden daarvan ervaar. Het idee om meer controle te hebben over mijn online identiteit en inhoud spreekt me aan, omdat het me de mogelijkheid biedt om zelf te bepalen wat ik deel en hoe ik mijn online omgeving vormgeef.

## Simon Riisnæs Dagfinrud
Simon Riisnæs Dagfinrud is een Noorse ontwerper die werkt aan computationeel ontwerp, generatieve kunst en identiteiten. Hij is gevestigd in Amsterdam en hij freelancet en hij werkt nu full-time voor Noko. Op Linked-In staat Noko beschreven als een bedrijf dat zich inzet voor deisgndiensten waarbij de nadruk ligt op taal en cultuur.

### Samenvatting presentatie
Tijdens zijn presentatie liet hij zijn werken op een interessante manier zien. Hij begon met het laten zien van het Logo van Noko en dit logo ging telkens tegen de zijkant van het scherm aan wat een cool effect gaf. Hij legde hierna uit wat 'computational design' inhield en hij vertelde dat het te maken heeft met het creatieve denken dat ondersteund wordt door het gebruik van een computer. Computeralgoritmen worden aldus gebruikt om ontwerp- en creatieve processen te ondersteunen, te verbeteren of zelfs te vervangen. Je gaat werkt hierbij met een wijdere set aan oplossingen op een probleem. Verder gaf hij nog wat tips over hoe je goede posters kan maken. Hoe kan je ze bijvoorbeeld aantrekkelijk maken aan de hand van aanlokkende teksten. Je hoefde volgens hem tevens niet te specialiseren in het maken van posters. Iedereen zou het kunnen leren. Maak ook gebruik van je eigen referenties en wees een beetje gek en creatief. Zo maak je de posters aantrekkelijker voor je medemens.

### Wat heb ik meegekregen uit deze presentatie?
Wat mij opviel tijdens de presentatie was dat sommige werken qua kleurtheoretisch aspect niet helemaal toegankelijk waren. Zo zag ik soms rood met groen voorbij komen en sommige effecten waren wel erg 'trippy'. Dit kan wellicht moeilijkheden teweegbrengen voor mensen die hierdoor minder in staat zijn de website te bezoeken. Ik vind het wel gek dat ik dit vond, want je zou denken dat een bedrijf dat zich richt om ontwerpen en websites wel zou letten op het juiste gebruik van de kleuren. Ergens snap ik het ook wel, want je wil ook graag een esthetisch leuke website maken en soms gaat dit dan niet samen met toegankelijkheid van kleuren. Het gebruik van tegengestelde kleuren kan een grappig effect bewerkstelligen, doordat het dus veel contrast geeft. Het valt dan meer op.

## Sanne Swagerman
Ze heeft gewerkt bij Q42 en dat gaat over Rijksmuseum en Naturalis. Hierna is ze bij Spotify gaan werken.

Overgang van studeren naar werken.

Wat vind je leuk?

Ui bouwen Design systems - bouwstenen die helpen om delen van het product gestructureerd te houden Prototypes Internal tooling

Wat vind je belangrijk?

Grootte Wil je remote werken Soort bedrijf? (Agency, big tech)

Baan zoeken.

Het voelde soms onmogelijk om binnen te komen en hoe kom je tussen al die slimme mensen? Het is echter wel haalbaar en het scheelt als je weet wat je belangrijk vindt in een baan. Welk product gebruik ik graag? Job page van bedrijven zelf Goede cv!! Dit is de eerste indruk die je geeft. Je kan ook de cv aanpassen per sollicitatie die je doet. Solliciteren; solliciteer bij meerdere bedrijven, want soms zijn er veel mensen die solliciteren voor dezelfde baan.

Het is handig om een gericht lijstje te hebben zodat jouw wensen overeenkomen met wat het bedrijf kan bieden.

Interviews —> agencies

Cv screening Gesprek om ervaring en baan te bespreken Thuis programmeeropdracht Stel zelf vragen en wees nieuwsgierig. Remember je moet ook vragen wat zij JOU kunnen bieden. Soms laatste ronde, bijvoorbeeld meeloopdag. Klikt het een beetje met de mensen? Vind je de werkplek leuk?

Interviews —> big tech

Cv screening Gesprek om ervaring en baan te bespreken Live coding interview. Dit is erg spannend, maar deze vorm van interviews komen vaak voor dus je kan er als het ware zelfs voor studeren. Laatste ronde: 3/4 live coding interviews, system design, behaverial interviews Veel animo, dus het ligt niet aan jou.

Voorbereiding: neem de code die je meeneemt nog even heel goed door. Voor de programmeer live opdracht weet je niet wat ze gaan vragen dus daar kan je je niet zo goed voor voorbereiden.

Je eerste baan.

Aanbod Impostor syndrome Wat is productief zijn? Vooral heel veel code typen? Uitzoeken wat er gebouwd moet worden? NEEM DE TIJD, want als je steeds doorgaat en je weet niet of het eigenlijk wel goed is, dan ben je misschien juist minder productief. Tegenslagen. Zorg dat je tegenslagen niet afgestraft worden, maar dat je in een chille omgeving bent. Zo word je niet gedemotiveerd. Misschien vind je een project niet altijd even leuk maar is het echt een dealbreaker??

Gebruikers.

Accessibility Your library toegankelijk maken Gebruikers jouw product zien gebruiken

Meningen.

Omgaan met meningen. Je moet hiermee kunnen omgaan, want het is heel erger vergeleken met je medestudenten of docenten. Ze zullen wellicht online je werk afkraken. Negativiteit

Pragmatiek.

Realistische, logische keuzes voor project.

Expert.

Je blijft altijd leren Vragen worden aan jou gesteld Jij bent de expert. Blijf echter vragen stellen.

Software engeneering.

Geen van bovenstaande punten ging over programmeren Je moet bijvoorbeeld: Goed communiceren Jargon vertalen Hulp vragen aan collega’s Je bent nooit uitgeleerd Iedereen is begonnen zoals jij!

Werk kan vooral ook heel leuk zijn. Zeker wanneer je aan een product bouwt die je gewoon jarenlang al zelf gebruikt. Soms zal je spijt hebben (je bent bijvoorbeeld ergens weggegaan bij een baan of je bent naar een ander team geswitcht), maar het komt altijd goed.

In spotify gebruiken we react en we gebruiken dezelfde codebases. We gebruiken een aantal abstracties om onze data op te bouwen.

Gedaan alsof ik het allemaal wist tijdens de interviews aan het begin. Het allerergste wat er gebeurt is dat je het niet haalt maar dan leer je er wel wat van.

Resources:

Baan vinden: land the tech job you love - Andy Lester

Cvs:

The tech resume inside out - Gergely Orosz

Interview prep:

Leetcode

Grokking algorithms - Aditya Bhargava

De-coding the technical interview - Emma Bostian

Linked-in: sanneswagerman

Spotify is alleen vooral online want het is natuurlijk een internationaal bedrijf. Dus er zaten eerst vooral mensen in Stockholm en New York, maar nu ook meer verspreid na corona.

Heeft het idee dat ze meer kansen heeft met haar werkervaring bij spotify als groot tech bedrijf.

Wat zet je op je cv als je geen relevante werkervaring hebt? Gewoon eigen projecten erin zetten. Of zet je skills erin, zoals frameworks en javascript etc. Zet links erin etc.

Ben je frontender of ben je software engineer? Officieel ben ik web engineer.
</details>