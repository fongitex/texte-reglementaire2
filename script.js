const data = {
    bouteilleGaz: [
        { title: "Homologation Limiteur de Débit", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/37/10%20Homologation%20limiteur%20de%20débit.pdf" }
    ],
    gpl: [
        { title: "Règlement général relatif aux normes de sécurité CE-Dépôts GPL", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/79/Arrêté%201993%20approuvant%20le%20règlement%20général%20relatif%20aux%20normes%20de%20sécurité%20CE-Dépôts%20GPL.pdf" }
    ],
    vapeur: [
        { title: "Emploi de la Soudure (Art 5)", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/70/Arrêté%2017-12-1953_emploi%20de%20la%20soudure_art%205.pdf" },
        { title: "Emploi de la Soudure (Art 5)", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/66/Arrêté%2017-12-1953_emploi%20de%20la%20soudure_art%205.pdf" },
        { title: "Modalités d'application du Dahir du 22-07-1953 (APV)", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/65/Arrêté%2019-08-1953%20modalités%20d'application%20du%20dahir%20du%2022-07-1953_%20APV.pdf" },
        { title: "Construction, entretien et établissement APV", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/64/Arrêté%201953_Construction-entretien%20et%20établissement_APV.pdf" },
        { title: "Règlement sur l'emploi des APV", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/44/DAHIR%2022%20juillet%201953_Règlement%20sur%20l'emploi%20des%20APV.pdf" },
        { title: "Rémunérations des services épreuves d’appareils à vapeur", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/63/Décret%20n°%202-97-341%20du%2030%20juin%201997%20rémunérations%20des%20services%20épreuves%20d’appareils%20à%20vapeur.pdf" }
    ],
    gaz: [
        { title: "Dahir 12 janvier 1955", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/69/Dahir%2012%20janvier%201955.pdf" },
        { title: "Arrêté Viziriel du 12 janvier 1955", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/71/ARRETE%20VIZIRIEL%20DU%2012%20JANVIER%201955%20FIXANT%20LES%20TAXES%20PERÇUES%20A%20.pdf" },
        { title: "Arrêté 13 Jan 1955 - Construction et emploi des APG", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/72/Arrêté%2013Jan1955_Construction%20et%20emploi%20des%20APG.pdf" },
        { title: "Arrêté 14 Jan 1955 - Modalités d'application du Dahir 12 jan 1955", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/73/Arrêté%2014Jan1955_Modalités%20d'application%20du%20Dahir%2012jan1955.pdf" },
        { title: "Arrêté 15 Jan 1955 - Générateurs d'acétylène", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/74/Arrêté%2015Jan1955_Générateurs%20d'acétylène.pdf" },
        { title: "Arrêté 29 Dec 1953 - Récipients d'emmagasinage d'hydrocarbures liquéfiés", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/80/Arrêté%2029Dec1953_récipients%20d'emmagasinage%20d'hydrocarbures%20liquéfiés.pdf" }
    ],
    extincteurs: [
        { title: "Arrêté 11 Avr 1957 - Extincteurs d'incendie", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/75/Arrêté%2011Avr1957_Extincteurs%20d'incendie.pdf" }
    ],
    circulaire: [
        { title: "Circulaire du 02 Dec 2005", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/76/circulaire02dec2005.pdf" },
        { title: "Circulaire n° 6359 du 10 Oct 2018", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/77/CIRCULAIRE%20n°%206359%20du%2010%2010%202018%20OCA.pdf" }
    ],
    grandsProduitsPetroliers: [
        { title: "BO 7022", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/207/BO_7022_Fr.pdf" },
        { title: "AEO-Recueil Juridique 2011", url: "https://www.mem.gov.ma/Lists/Lst_Textes_Reglementaires/Attachments/201/AEO-RecueilJuridique20112" }
    ],
    levage: [
        { title: "Arrêté 09 Septembre 1953", url: "http://www.sgg.gov.ma/BO/bo_fr/1953/bo_2142_fr.pdf" },
        { title: "Arrêté Viziriel du 9 septembre 1953", url: "https://www.integritasmaroc.com/downloads/Reglementations/03.Appa.Levage/AL01-%20Arrete%20viziriel%20du%209%20septembre%201953.pdf" },
        { title: "Arrêté du 3 novembre 1953", url: "https://www.integritasmaroc.com/downloads/Reglementations/03.Appa.Levage/AL02-%20Arrete%20du%203%20novembre%201953.pdf" },
        { title: "Arrêté n1287-18 du 15 mars 2018", url: "https://www.integritasmaroc.com/downloads/Reglementations/03.Appa.Levage/AL03-Arrête%20n1287-18%20du%2015%20mars%202018.pdf" }
    ],
    securiteIncendie: [
        { title: "Normes sécurité incendie", url: "https://www.integritasmaroc.com/downloads/Reglementations/04.%20securite%20incendie/SE01-Normes%20securite%20incendie.pdf" }
    ],
    installationsElectriques: [
        { title: "Conformité des installations électriques", url: "https://www.integritasmaroc.com/downloads/Reglementations/05.%20installations%20electriques/IE01-Conformité%20installations%20électriques.pdf" },
        { title: "Contrôle des installations électriques", url: "https://www.integritasmaroc.com/downloads/Reglementations/05.%20installations%20electriques/IE02-Controle%20installations%20électriques.pdf" },
        { title: "Normes de sécurité pour installations électriques", url: "https://www.integritasmaroc.com/downloads/Reglementations/05.%20installations%20electriques/IE03-Normes%20de%20sécurité%20installations%20électriques.pdf" }
    ],
    ascenseurs: [
        { title: "Article n° 80-81 Ascenseurs", url: "https://www.integritasmaroc.com/downloads/Reglementations/05.%20ascenseurs/ASC01-Article80-81%20Ascenseurs.pdf" },
        { title: "Contrôle d'ascenseurs", url: "https://www.integritasmaroc.com/downloads/Reglementations/05.%20ascenseurs/ASC02-Controle%20ascenseur.pdf" },
        { title: "Normes de sécurité des ascenseurs", url: "https://www.integritasmaroc.com/downloads/Reglementations/05.%20ascenseurs/ASC03-Normes%20de%20sécurité%20ascenseurs.pdf" }
    ],
    appareilsMachines: [
        { title: "Appareils", url: "https://www.integritasmaroc.com/downloads/Reglementations/06.%20Appareils%20machines/APM01-Appareils%20Machines%20normes.pdf" },
        { title: "Machines industrielles", url: "https://www.integritasmaroc.com/downloads/Reglementations/06.%20Appareils%20machines/APM02-Machines%20industrielles%20normes.pdf" }
    ]
};

function showLinks() {
    const category = document.getElementById("category").value;
    const linksContainer = document.getElementById("links");
    linksContainer.innerHTML = "";

    if (category && data[category]) {
        data[category].forEach(item => {
            const linkElement = document.createElement("a");
            linkElement.href = item.url;
            linkElement.textContent = item.title;
            linkElement.target = "_blank";
            linksContainer.appendChild(linkElement);
            linksContainer.appendChild(document.createElement("br"));
        });
    }
}
