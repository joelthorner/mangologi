export const posts = [
  {
    id: 9,
    name: 'TLmanaGer ara es Mangologi!',
    shortContent: 'I\'m back!! Ha passat un temps desde l\'ultima versió que per unes coses o unes altres es va...',
    content: `
## I'm back!!

Ha passat un temps desde l'ultima versió que per unes coses o unes altres es va quedar congelada. Des de llavors han passat algunes coses, deprecació de les extensions de chrome amb manifest v2, el desenvolupament de Logicommerce Beyond, que algunes features deixessin de funcionar... 😢

Per això aprofitant tots els problemes s'ha fet de nou la extensió amb **React** amb un rebranding per abandonar les sigles "TLG" dins de "TLmanaGer" per la integració del nom "Trilogi", que ha acabat resultant amb "Mangologi" a suggerencia del Chat GPT i disseny del logo del nostre [Jairo](https://github.com/Unoriginal02).

## Que hi ha de nou?
Així molt resumit s'ha reduit tot una mica per a la versió **4.0.0** de moment:

- Fora achievements
- Fora features per a zendesk _(alguns potser s'hacaben recuperant)_
- Integració amb totes les features de Logicommerce amb beyond _(les que es puguin)_
- Accions del popup renovades
- Nou sistema de detecció de informacio del ecommerce al popup

Si hi ha algun bug, es una feature segurament. 😅

Salut!
    `,
    date: '2023-05-01',
    image: 'post_new4x.png',
    tags: ['RELEASES', 'V4'],
  },
  {
    id: 8,
    name: 'TLmanaGer 3.0.0 is out!',
    shortContent: 'Nova versió del TLmanaGer tal, feta en Vue i Bootstrap 5 i refactoritzada per complet...',
    content: `
## Hola!

Nova versió del TLmanaGer tal, feta en **Vue** i **Bootstrap 5** i refactoritzada per complet. S'ha fet tot nou treient dependencies de jQuery i altres merdes ja caduques.

## Noves features
- New extension made with Vue.js
- New configuration page and popup
- Achievements
- Blog
- Hidden features page information
- New undo action after change (LC background option)
- Download svg file from "Get font wesome"
- New options "Decorated page group headers", "Page groups in grid mode" & "Better tree pages indentation" (Pages window better)
- Added ticket links into commits and publications (opensaas)
- Background LC supports in Bion
- Popup Ecommerce info (shopId, environment, caché, ...).
- LC new customtag descriptions
- Ace editor and Monospoace font in LC trackers

Tambè a partir d'ara totes les noves features s'anunciaràn adicionalment aquí al blog.

Salut 💋!
    `,
    date: '2021-01-30',
    image: 'post_new3x.png',
    tags: ['RELEASES', 'V3'],
  },
  {
    id: 7,
    name: 'Enllaços a tickets dins de LC',
    shortContent: 'Durant el sistema de publicació normalment es poden trobar referències a tickets de Zendesk o...',
    content: `
Durant el sistema de publicació normalment es poden trobar referències a tickets de Zendesk o a issues del Jira.
Per millorar la tasca d'haver d'anar a mirar el ticket o la issue al lloc corresponent, s'ha desenvolupat un sistema per detectar aquestes referències 
i convertir-les en enllaços a pestanyes noves.

Això permet anar més ràpid a consultar a què fa referència el commit, el merge o la publicació.
El sistema busca en tots els llocs on podem veure commits, les branques o les publicacións i els seus històrics.`,
    date: '2020-12-22',
    image: 'post_ticketRefLinks.png',
    tags: ['FEATURES', 'V3'],
  },
  // {
  //   id: 6,
  //   name: 'New LC themes!',
  //   content: `El primer dels temes per al nou Logicommerce ja està disponible. Es pot canviar a la página d\'opcions/Logicommerce`,
  //   date: '2020-08-12',
  //   image: 'post_theme.png',
  //   tags: ['FEATURES', 'V3'],
  // },
  {
    id: 5,
    name: 'Achievements!!',
    shortContent: 'Una de les grans noves features de la versió 3.0.0 son els "logros". No serveixen realm...',
    content: `
Una de les grans noves features de la versió 3.0.0 son els "logros".
No serveixen realment per res a part d'obligar-te a perdre una mica el temps.
La versió 3.0.0 sortirá amb alguns achievements peró no es descarta en un futur afegir-ne més.

Per no perdre'ls mai al eliminar/reinstalar la extensió, pots sincronitzar el Chrome amb un compte gmail i activar la sincronització per a
que es guardin per sempre no sols els "logros" sino tambè totes les opcions que haguis modificat.
    `,
    date: '2020-08-12',
    image: 'post_arch.png',
    tags: ['FEATURES', 'V3'],
  },
  {
    id: 4,
    name: 'Auto increment de versió (publicació opensaas) 2.3.6',
    shortContent: 'Estàs cansat de fer publicacions a producció? Cada vegada has de mirar quina es l\'últim...',
    content: `
Estàs cansat de fer publicacions a producció?
Cada vegada has de mirar quina es l'última versió per escriure la que toca?
T'has equivocat i t'has saltat 3 números i despres no cuadra i tens TOC?

Ja tenim solució! Nova feature que, automàticament, al fer una nova publicació buscarà l'ùltima versió i et predirà la que toca!
Preocupat nomes de donar-li un nom que sigui comprensible pels altres humans!

## Altres features
Altres funcions agregades recentment:

- Highlight de tickets per prioritat al Zendesk
- Nova página de welcome al instalar l'extensió amb un mini wizard
- Auto scroll al primer dump de fluid

        `,
    date: '2019-04-15',
    image: 'post_ver.png',
    tags: ['FEATURES', 'RELEASES', 'V2'],
  },
  {
    id: 3,
    name: 'Rediseny de la página de configuració 2.3.0',
    shortContent: 'Hi han novetats, (això es com un diari de desarrollament). S\'ha redissenyat tota la pàg...',
    content: `
Hi han novetats, (això es com un diari de desarrollament).
S'ha redissenyat tota la pàgina "backend" de l'extensió amb un nou look com el de la foto. Una mica mes ordenat, i per grups.

## Noves features
Tambe s'han implementat ultimament algunes funcions noves, algunes a destacar:

- Registre automàtic en fluid (acció del popup)
- Mostrar icones svg de tota la web (acció del popup)
- Popup de confirmació al enviar un missatge desde Zendesk

    `,
    date: '2019-02-17',
    image: 'post_optsred.png',
    tags: ['FEATURES', 'RELEASES', 'V2'],
  },
  {
    id: 2,
    name: 'Sistema de selecció de branques (Opensaas)',
    shortContent: 'Amb l\'arribada de l\'opensaas per millorar la usabilitat i la rapidesa alhora d\'escollir la br...',
    content: `
Amb l'arribada de l'opensaas per millorar la usabilitat i la rapidesa alhora d'escollir la branca o entorn al que volem anar, s'ha afegit una millora.
Aquesta millora es pot activar o desactivar desde la pàgina de configuració d'opcions.

Per cada branca del selector html, es crea un botó, que per defecte té seleccionat el primer entorn, el de PRE. Si es fa doble click a algun dels botóns automàticament
es farà login al botó clicat.

Això es tot, fin del comunicado.
      `,
    date: '2019-02-08',
    image: 'post_opsas.png',
    tags: ['FEATURES', 'V2'],
  },
  {
    id: 1,
    name: 'Nou TLmanaGer 2.0.0!',
    shortContent: 'Desde que es va implementar la versió 1 de la extensió, aquesta ha anat creixent en funcions...',
    content: `
Desde que es va implementar la versió 1 de la extensió, aquesta ha anat creixent en funcions a base de peticions i ha arribat al moment que no era mantenible.
S'ha fet una versió totalment desde zero amb el framework Bootstrap 4.1 i jQuery 3 i amb una logica mes estructurada i un codi mes net i eficient.
La primera versió no estava pensada per arribar a creixer tant, la nova versió permetrà que escali molt mes al llarg del temps.

## Pàgina d'opcions
S'ha desenvolupat tambè una pàgina amb opcions de tot el que fa l'extensió per poder activar/desactivar i configurar algunes opcions. Una pagina sencera dedicada
a poder ajustar totes les funcions.
Al menù de la pàgina d'opcions tambè es pot trobar accès al changelog, una pàgina per editar el perfil i una pàgina d'ajuda on s'expliquen les diferents features de 
l'extensió.

## Features
Hi han algunes funcions noves a destacar, com una acció per mostrar els moduls de una plantilla (new template 2018), l'acció de guies per maquetar ara es guarden en sessió, 
es pot triar el background de LC i desactivar-lo si es vol, etc.
    `,
    date: '2018-08-26',
    image: 'post_new2x.png',
    tags: ['RELEASES', 'V2'],
  },
];