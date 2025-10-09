# Ad Connect - Platform Ad
In sprint 2 hebben we de opdracht gekregen om een website te ontwikkelen voor een opdrachtgever, samen met 2 teams van 1e jaars FDND-studenten en 1 team 2e jaars FDND-studenten. We kunnen gebruik maken van HTML, CSS en JavaScript. Mijn focus voor deze tweede sprint ligt op het ontwerpen en ontwikkelen van een Home-pagina voor de studentendoelgroep van de opdrachtgever.

#### Wie is Ad Connect?
Het landelijk Overlegplatform Associate degrees (hierna: Platform Ad) is opgericht in 2018. 
De website van het Platform Ad (onder de url: www.deassociatedegree.nl) is een 
toegangspoort voor informatie over Ad-onderwijs. De website is opgericht om de 
leerwaarde en documentatie van Ad-opleidingen te versterken. Het Platform Ad doet dit in 
samenwerking met de ‘Vereniging Hogescholen’. De website is het online platform van het 
‘Overlegplatform Associate Degrees’ en ondersteunt o.a. de hogescholen die Ad-opleidingen 
aanbieden en de Landelijke Ad-overleggen (LadO’s).  

#### Vraag van de opdrachtgever
In de loop der jaren nam de hoeveelheid tekst en documenten toe, waardoor de 
overzichtelijkheid en vindbaarheid van de informatie afnamen.


<ins>Opdracht:</ins> Helpen bij het realiseren van een overzichtelijke en gebruiksvriendelijke website die inspeelt 
op de behoefte van verschillende doelgroepen waar het Platform Ad zich op richt. Ook moet de website eenvoudig te onderhouden zijn door de editor(s) en webmaster.


## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Licentie](#licentie)

## Beschrijving
### Het ontwerp
De opdrachtgever heeft aangegeven de website, naast naar werkgevers, docenten en professionals, ook naar (toekomstige) Associate Degree studenten te richten. In samenspraak met 2e jaars FDND-studenten hebben we besloten dat 1e jaars studenten een website maken die eerst op de studentendoelgroep gericht is.

De kleuren van de website heb ik veranderd naar donkerblauw met gele accenten, voor een moderne uitstraling.

De website is responsive en is Mobile first ontworpen en gemaakt.

<img width="1800" height="760" alt="all-devices-black" src="https://github.com/user-attachments/assets/449dc752-a7dd-42f6-a25b-b5c4f1deb29f" />

*Mockup van home-pagina*

Link naar de website: https://sieuwkesheta.github.io/the-client-website/

#### Schetsen
Tijdens het ontwerpen heb ik gebruik gemaakt van Sitemapping, Wireframes, Wireflows en Prototypes op figma.

*Ontwerp schets sitemap*
![Sitemap Ad Connect 25-09-2025](https://github.com/user-attachments/assets/0f78a283-9af3-44ae-b7ee-d4d03fefc166)

*1e ontwerp schets op papier*
![1e schets Ad Connect 23-09-2025](https://github.com/user-attachments/assets/4e94e6ec-fa28-4da3-945a-c6c72be9745d)

*1e wireflow op papier*
![Wireframe en Wireflow - Telefoon - AD Connect 25-09-2025](https://github.com/user-attachments/assets/83410398-7a69-4bcd-beef-ad19bfbd9f70)

#### Figma
Ik heb nog geen kleuren toegevoegd in mijn figma ontwerpen.

*Telefoon wireframe*
![Telefoon _ Wireframe Home-Pagina _ Studenten](https://github.com/user-attachments/assets/ffa22bcf-76cc-4513-bc76-d8d8528319b8)

*Tablet Wireframe*
![Tablet _ Wireframe Home-Pagina _ Studenten](https://github.com/user-attachments/assets/a687fc3c-22ca-47af-a8b8-b5172843f5b0)

*Desktop Wireframe*
![Desktop _ Wireframe Home-Pagina _ Studenten](https://github.com/user-attachments/assets/4bd2fc65-9df6-4678-aef7-5c17a765b5b6)

#### Belangrijke features:
- Het hamburgermenu 
<img width="400" alt="image" src="https://github.com/user-attachments/assets/b3d3e41f-721a-4944-a2bc-df781ebfc0ba" />

- De Carousel met knoppen
<img width="400" alt="image" src="https://github.com/user-attachments/assets/43a60d12-579d-424e-88a4-2dc8ce4a6a4b" />

- De website is responsive op meerdere apparaten


## Kenmerken
Ik heb gebruikt gemaakt van HTML, CSS en JS.

### HTML Structuur
De HTML structuur van de pagina is semantisch opgebouwd, in het engels. De pagina bevat een header met 2 navigaties `<nav>`, een main voor de inhoud met meerdere secties `<section>` en articles `<article>`, en een footer.

Ik heb gebruik gemaakt van een `<details>` element om een drop-down menu te maken.
```HTML
<li>
   <details>
       <summary><a href="#">Wat is een Ad</a></summary>
       <a class="drop-down" href="#">Doorstroom</a>
   </details>
</li>
```
### Belangrijke aspecten CSS
De website is *mobile first* gemaakt. De media queries zijn genest in de elementen, waardoor de code overzichtelijker is en de responsiviteit per element makkelijk aan te passen is. 
```CSS
footer {
    margin-top: 1em;
    padding: 1em;
    background-color:#333A73;

    @media (min-width: 680px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

### Belangrijke aspecten JS
JS is gebruikt om het hamburgermenu interactief te maken en om de knoppen onder de carousel te laten werken.
```JS
const hamMenu = document.querySelector(".ham-menu")
const hamMenuButton = document.querySelector(".ham-menu-button")
const greyScale = document.querySelector(".grey-scale")

hamMenuButton.addEventListener("click", toggleHamMenu)
greyScale.addEventListener("click", toggleHamMenu)

function toggleHamMenu() {
    hamMenu.classList.toggle("is-open")
    greyScale.classList.toggle("is-open")
}
```

## Licentie


This project is licensed under the terms of the [MIT license](./LICENSE).
