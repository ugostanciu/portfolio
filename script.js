// Variables globales
let currentSection = 'home';

// Données des projets détaillés
const projectsData = {
    sae11: {
        title: "SAE 1.1 - Sensibilisation à l'hygiène informatique et à la cybersécurité",
        context: "Travail collaboratif de recherche et d’expérimentation sur les fondamentaux de la cybersécurité dans le cadre d’un MOOC de l’ANSSI, en vue de préparer une mise en situation professionnelle simulée.",
        objectives: [
            "Travailler en groupe sur l’un des trois lots proposés (mots de passe, accès SSH, découverte de machines)",
            "Expérimenter des outils et pratiques de sécurité sur Debian",
            "Produire une notice technique collaborative",
            "Présenter un résumé oral à l’enseignant référent"
        ],
        contribution: "Mon groupe a choisi le lot B : Accès SSH. J’ai été chargé d’expliquer les mécanismes de sécurisation des connexions SSH, notamment :",
        points: [
            "Le principe du chiffrement asymétrique (clé publique / clé privée)",
            "Le fonctionnement du protocole SSH",
            "Les algorithmes recommandés par l’ANSSI (comme ED25519 ou RSA 4096 bits)",
            "Les bonnes pratiques pour la gestion des clés (droits d’accès, passphrases, etc.)"
        ],
        traces: [
            "Certif MOOC",
        ],
        image: "https://ugostanciu.github.io/portfolio/images/mooc.png",
        reflection: "J’ai acquis une bonne maîtrise des concepts liés à SSH, notamment les mécanismes d’authentification par clés publiques/privées. Bien que l’explication des principes de sécurité et des algorithmes choisis par l’ANSSI ait été claire, j’aurais pu détailler davantage certains aspects techniques (par exemple, le calcul des tailles de clés ou la mise en œuvre sur des systèmes réels). Le résultat était satisfaisant, mais une analyse plus poussée des attaques possibles aurait enrichi ma présentation. Le temps m’a parfois manqué pour approfondir certains détails.",
        competences: ["UE 1"]
    },
    sae12: {
        title: "SAE 1.2 - S'initier aux réseaux informatiques",
        context: "Dans le cadre de cette SAE, nous avons été sollicités pour concevoir un réseau informatique fiable, structuré et sécurisé. L’objectif était de remplacer une infrastructure existante rudimentaire par un réseau segmenté, interconnecté et virtualisé, intégrant des services essentiels (DHCP, DNS, SMB, site web, etc.). Les attendus principaux :",
        objectives: [
            "Implémentation de VLANs basés sur l’organigramme d'une entrprise fictive'",
            "Routage inter-VLAN avec un switch L3",
            "RSTP et agrégation de liens",
            "Plan IPv4 structuré avec sous-réseaux optimisés",
            "Mise en place de services sur un serveur Debian virtualisé sous Proxmox",
            "Configuration de services : DNS cache, SMB, site web (Nginx), TFTP"
        ],
        contribution: "J’ai principalement travaillé sur la configuration des VLANs, du routing inter-VLAN sur le 3750, et sur la création du plan d’adressage IPv4. J’ai également configuré :",
        points: [
            "Le DHCP par VLAN, avec exclusions d’adresses",
            "Le routage statique sur le routeur 2911 vers la box",
            "La création des interfaces VLAN, la documentation des ports, et la répartition logique des postes"
        ],
        traces: [
            "Schéma logique",
            "Extrait de configuration de switch"
        ],
        image: "https://ugostanciu.github.io/portfolio/images/schema_sae12.png",
        codeExample: `! Configuration interfaces VLAN sur switch Cisco 3750 !
interface Vlan1
no ip address
!
interface Vlan100
description serveur
no ip address
!
interface Vlan180
description supervision
ip address 10.0.255.1 255.255.255.192
!
interface Vlan190
description administration informatique
ip address 10.0.255.67 255.255.255.192
!
interface Vlan999
description vlan natif
no ip address`,
        reflection: "Ce projet a présenté plusieurs difficultés techniques, dont un problème avec le routage DHCP, où le serveur ne distribuait pas correctement les adresses IP entre les VLANs. Après avoir analysé la configuration, j’ai ajusté les paramètres de routage et vérifié la portée des VLANs sur les switches. Cela a permis de résoudre le problème et d’assurer une distribution d’adresses IP fluide entre les différents sous-réseaux. \n Nous avons également rencontré un problème majeur avec les machines virtuelles (VM) qui ne fonctionnaient pas. Bien que ce ne fût pas dans ma répartition initiale, cette défaillance a fortement impacté l’avancement du projet. Si j’avais été en charge de cette partie, j’aurais vérifié les logs, les configurations des disques virtuels et effectué une réinstallation propre des VMs pour éviter ces pannes. Une fois le problème identifié, j’aurais optimisé les configurations pour éviter des conflits futurs. Malgré ces imprévus, j’ai su prioriser les tâches essentielles, notamment la mise en place du réseau, le routage entre les VLANs, et l'intégration des différents services. Le projet a finalement abouti à une configuration fonctionnelle, mais cette expérience m’a appris à anticiper davantage les problèmes et à améliorer la gestion des VM dans des environnements virtuels complexes.",
        competences: ["UE 1"]
    },
    sae14: {
        title: "SAE 1.4 - Se présenter sur Internet",
        context: "Dans le cadre de la SAÉ14, j’ai réalisé seul un site web multipages en HTML/CSS sur un thème libre. Ce projet visait à valider les compétences de base en développement web.",
        objectives: [
            "Créer un site responsive (ordinateur, tablette, mobile)",
            "Utiliser Flexbox et/ou CSS Grid",
            "Respecter les normes W3C et WCAG 2.0 AA",
            "Héberger le site sur GitHub Pages avec un dépôt structuré",
            "Ajouter des animations CSS"
        ],
        contribution: "En tant que projet individuel, toute la charge m'a été attribuée. J'ai pris en charge l'intégralité du développement du site, en me concentrant sur les aspects suivants :",
        points: [
            "Création des pages : J'ai conçu trois pages principales : la page d’accueil, la page dédiée au sujet du site, et une page 'à propos' où je me suis présenté. J'ai également ajouté une page de contact pour enrichir le contenu.",
            "Le fonctionnement du protocole SSH",
            "Les algorithmes recommandés par l’ANSSI (comme ED25519 ou RSA 4096 bits)",
            "Les bonnes pratiques pour la gestion des clés (droits d’accès, passphrases, etc.)"
        ],
        traces: [
            "Lien vers le site : https://ugostanciu.github.io/SAE_14/",
            "Capture du site :"
        ],
        image : "https://ugostanciu.github.io/portfolio/images/website.png",
        reflection: "Lors de la réalisation du projet, j'ai rencontré quelques défis. Le premier a concerné la mise en page responsive, où certaines sections du site ne s'affichaient pas correctement sur mobile. Cela était dû à une mauvaise gestion des media queries et à une utilisation limitée de Flexbox. Pour résoudre cela, j'ai réajusté les media queries et mieux intégré Flexbox, assurant ainsi un affichage fluide sur tous les appareils. Ensuite, lors de la validation W3C, plusieurs erreurs ont été détectées dans mes balises HTML et dans des propriétés CSS non conformes. J'ai corrigé ces erreurs en veillant à bien respecter les bonnes pratiques, notamment en fermant correctement toutes les balises et en ajustant certaines propriétés CSS. Cela a permis de valider mon code avec succès. Enfin, certaines animations CSS n'étaient pas assez fluides. Après avoir revu mes durées d'animation et optimisé les propriétés concernées, j'ai réussi à rendre les animations beaucoup plus fluides et agréables à l'œil. Si c'était à refaire, je commencerais par tester plus fréquemment la responsivité et la validité du code, afin de corriger rapidement les erreurs de mise en page et de validation. J'éviterais également d'ajouter les animations trop tôt dans le processus pour me concentrer sur la structure principale du site en priorité.",
        competences: ["UE 3"]
    },
    sae15: {
        title: "SAE 1.5 - Traitement des données",
        context: "Dans un contexte où les entreprises doivent exploiter efficacement des volumes croissants de données, ce projet vise à automatiser la récupération, l’analyse et l’exploitation d’informations issues d’une API. L’objectif est de transformer ces données brutes en résultats compréhensibles et utilisables via des scripts adaptés, tout en appliquant les bonnes pratiques de développement.",
        objectives: [
            "Récupérer des données via une API REST (PokeAPI)",
            "Filtrer et structurer les informations pertinentes en Python",
            "Réaliser un traitement statistique sur ces données",
            "Exporter les résultats dans un document formaté en Markdown"
        ],
        contribution: "J’ai entièrement conçu, développé et documenté le script de traitement de données, en assurant la récupération via API, l’analyse, et la présentation des résultats.",
        points: [],
        traces: [
            "Extrait du code :"
        ],
        codeExample: `def get_pokemon_descriptions(pokemon_url):
    data = requests.get(pokemon_url).json()
    species_data = requests.get(data['species']['url']).json()
    entries = species_data['flavor_text_entries']
    return [entry['flavor_text'] for entry in entries if entry['language']['name'] == 'fr']`,
        reflection: "Ce projet, réalisé en binôme, avait pour but de collecter, analyser et cartographier des données de couverture mobile à partir d’une API. Un des principaux problèmes rencontrés fut l’exploitation correcte des données issues de l’API, parfois mal documentée ou incomplète. En communiquant efficacement et en testant différents cas ensemble, nous avons mis en place un script Python fonctionnel, capable d’extraire et traiter les données pertinentes. Nous avons réparti les tâches de manière équilibrée : pendant que mon binôme s’occupait de la cartographie sous MATLAB, je me suis concentré sur le développement du script Python. Ce projet m’a permis de consolider mes compétences en traitement de données, en gestion d’erreurs, en structuration de script, et en travail d’équipe. Pour la suite, nous pourrions aller plus loin sur la partie analyse statistique, intégrer des visualisations plus poussées, ou concevoir une interface plus interactive pour la consultation des résultats.",
        competences: ["UE 3"]
    },

    sae21: {
    title: "SAE 2.1 - Intégration d'une station à un domaine",
    context: "Dans le cadre de la SAE 21, nous avons appris à intégrer une station à un domaine Active Directory en utilisant Windows Server 2019 et Windows 10. Cette SAE visait à comprendre les enjeux de sécurité des environnements hybrides et à mettre en pratique les connaissances acquises.",
    objectives: [
        "Créer une machine virtuelle Windows Serveur 2019 et une machine virtuelle Windows 10 sur Proxmox VE",
        "Configurer le service Active Directory et promouvoir le serveur en contrôleur de domaine",
        "Gérer les comptes d'utilisateurs, les groupes et les comptes d'ordinateurs",
        "Créer une stratégie de groupe (GPO) et l'appliquer sur le domaine",
        "Créer un partage réseau et configurer les droits d'accès",
        "Mettre en œuvre les profils itinérants pour les utilisateurs"
    ],
    contribution: "J'ai réalisé cette SAE en suivant les instructions fournies et en travaillant individuellement. J'ai pris en charge l'intégralité de la configuration des machines virtuelles, de l'installation du service Active Directory, de la création des utilisateurs et des groupes, ainsi que de la mise en place des stratégies de groupe et des partages réseau.",
    points: [
        "Création des machines virtuelles Windows Serveur 2019 et Windows 10 sur Proxmox VE en suivant les consignes précises",
        "Installation et configuration du service Active Directory sur le serveur Windows 2019",
        "Création des utilisateurs, des groupes et des OU dans l'Active Directory",
        "Intégration de la station Windows 10 au domaine Active Directory",
        "Création et application d'une stratégie de groupe (GPO) pour restreindre l'accès à certaines fonctionnalités",
        "Création d'un partage réseau avec des droits d'accès spécifiques pour les enseignants et les étudiants"
    ],
    traces: [
        "Pas de traces possibles pour cette SAE : uniquement du cours, un QCM et un TP noté."
    ],
    image: "https://ugostanciu.github.io/portfolio/images/ad.png",
    reflection: "Lors de la réalisation de cette SAE, j'ai rencontré quelques difficultés, notamment lors de la configuration du service Active Directory et de la création des stratégies de groupe. Cependant, en suivant les instructions et en consultant la documentation en ligne, j'ai pu résoudre ces problèmes. J'ai également appris l'importance de la planification et de la documentation lors de la mise en place d'un environnement Active Directory. Si c'était à refaire, je commencerais par mieux comprendre les concepts théoriques avant de me lancer dans la pratique, et je serais plus rigoureux dans la documentation de mes étapes.",
    competences: ["UE 1"]
    },

    sae22: {
    title: "SAE 2.2 - Analyse de signaux d’un système de transmission",
    context: "Dans cette SAÉ, nous avons analysé des signaux d’un système de transmission en utilisant le matériel RTL-SDR et le logiciel Matlab. L'objectif était d'exploiter ces signaux et de présenter les résultats sous forme d’un bilan.",
    objectives: [
        "Utiliser le matériel RTL-SDR pour capter et traiter des signaux électromagnétiques",
        "Maîtriser le logiciel Matlab pour l'analyse de données",
        "Analyser les signaux et présenter les résultats de manière claire",
        "Travailler en groupe pour réaliser le projet",
        "Rédiger un rapport de mesure et de cartographie sur la téléphonie mobile"
    ],
    contribution: "J'ai contribué au projet en travaillant en groupe pour analyser les signaux et en réalisant individuellement certaines parties du rapport. Mes tâches spécifiques ont inclus :",
    points: [
        "Participation au TP noté et validation du certificat Matlab",
        "Analyse des signaux avec Matlab",
        "Rédaction d'une partie du rapport de mesure et de cartographie",
        "Contribution à la cartographie de la téléphonie mobile"
    ],
    traces: [
        "Certificat Matlab : https://matlabacademy.mathworks.com/progress/share/report.html?id=510062ea-4b6a-418b-9628-8ad59d6259c8",
        "Rapport de mesure et de cartographie :"
    ],
    image: "https://ugostanciu.github.io/portfolio/images/rapport.png",
    reflection: "Lors de cette SAÉ, j'ai rencontré des défis notamment dans la prise en main de Matlab et dans l'analyse des signaux. Pour résoudre ces problèmes, j'ai suivi l'initiation en ligne pour Matlab et j'ai travaillé en étroite collaboration avec mon groupe. J'ai également utilisé les ressources en ligne pour améliorer mes compétences en analyse de données. Si c'était à refaire, je commencerais plus tôt à travailler sur le projet pour avoir plus de temps pour l'analyse et la rédaction du rapport.",
    competences: ["UE 2"]
    },


    sae23: {
    title: "SAE 2.3 - Instant Weather",
    context: "Dans cette SAÉ, j'ai réalisé une page Web qui affiche des informations météorologiques pour une commune choisie par l'utilisateur. Le projet a été réalisé en utilisant JavaScript, HTML et CSS.",
    objectives: [
        "Utiliser l'API Météo conformément à sa documentation",
        "Manipuler le DOM pour intégrer dynamiquement du contenu dans une page HTML",
        "Interagir avec la mise en forme de la page Web via l'utilisation de JavaScript",
        "Réaliser une page Web responsive et conforme aux validateurs HTML et CSS du W3C",
        "Satisfaire aux exigences d'accessibilité de la norme WCAG AA 2.0"
    ],
    contribution: "J'ai pris en charge l'intégralité du développement de la page Web, y compris :",
    points: [
        "Conception et intégration du formulaire pour saisir le code postal et choisir la commune",
        "Récupération des informations météorologiques via l'API Météo",
        "Affichage des informations météorologiques dans la page Web",
        "Mise en forme de la page Web via CSS",
        "Tests et débogage de la page Web"
    ],
    traces: [
        "Lien vers le site : https://ugostanciu.github.io/sae23/",
        "Capture du site :"
    ],
    image: "https://ugostanciu.github.io/portfolio/images/instant-weather.png",
    reflection: "Lors de cette SAÉ, j'ai rencontré des défis notamment dans l'utilisation de l'API Météo et dans la manipulation du DOM. Pour résoudre ces problèmes, j'ai utilisé les ressources en ligne pour améliorer mes compétences en JavaScript et j'ai fait des tests réguliers pour déboguer mon code. Si c'était à refaire, je commencerais plus tôt à travailler sur les tests et le débogage pour avoir plus de temps pour les améliorer.",
    competences: ["UE 3"]
    },

    sae24: {
    title: "SAE 2.4 - Projet Intégratif",
    context: "Dans cette SAÉ, nous avons réalisé un projet de fin d'année qui mobilise toutes les connaissances acquises dans les différentes Ressources : réseaux, systèmes, télécommunications, anglais, maths, gestion de projet, ...",
    objectives: [
        "Concevoir et mettre en œuvre une infrastructure réseau et système",
        "Mettre en place des services réseau et un environnement Microsoft",
        "Gérer les aspects de sécurité et de routage",
        "Travailler en équipe pour réaliser le projet",
        "Rédiger une documentation technique et présenter le projet"
    ],
    contribution: "J'ai contribué au projet en travaillant en groupe de 3/4 personnes et j'ai pris en charge la partie réseau, notamment :",
    points: [
        "Conception et configuration de la partie LAN, VLAN, ACLs, etc.",
        "Mise en place du routage OSPF",
        "Configuration des services réseau",
        "Travail en collaboration avec les autres membres du groupe pour intégrer les différentes parties du projet"
    ],
    traces: [
        "Schéma Logique :",
        "Extrait de configuration de switch"
    ],
    image: "https://ugostanciu.github.io/portfolio/images/sae24.png",
    codeExample: `! Configuration DHCP !
ip dhcp pool VLAN20_POOL
   network 192.168.20.0 255.255.255.192
   default-router 192.168.20.1
   dns-server 1.1.1.1
!
ip dhcp pool VLAN30_POOL
   network 192.168.30.0 255.255.255.192
   default-router 192.168.30.1
   dns-server 1.1.1.1
!`,
    reflection: "Lors de cette SAÉ, j'ai rencontré des défis notamment dans la coordination avec les autres membres du groupe et dans la mise en place de la partie réseau. Pour résoudre ces problèmes, j'ai travaillé en étroite collaboration avec mon groupe et j'ai utilisé les ressources en ligne pour améliorer mes compétences en réseau. Si c'était à refaire, je commencerais plus tôt à travailler sur la documentation technique pour avoir plus de temps pour la rédiger correctement.",
    competences: ["UE 1", "UE 2", "UE 3"]
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeProgressBars();
    initializeRadarChart();
    showSection('home');
});

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const ctaButton = document.querySelector('.cta-button');
    const ctaButton2 = document.querySelector('.cta-button2');
    const ctaButton3 = document.querySelector('.cta-button3');
    const ctaButton4 = document.querySelector('.cta-button4');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            showSection(targetSection);
            updateActiveNav(link);
        });
    });
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const targetSection = ctaButton.getAttribute('data-section');
            showSection(targetSection);
        });
    }

    if (ctaButton2) {
        ctaButton2.addEventListener('click', () => {
            const targetSection = ctaButton2.getAttribute('data-section');
            showSection(targetSection);
        });
    }

    if (ctaButton3) {
        ctaButton3.addEventListener('click', () => {
            const targetSection = ctaButton3.getAttribute('data-section');
            showSection(targetSection);
        });
    }

    if (ctaButton4) {
        ctaButton4.addEventListener('click', () => {
            const targetSection = ctaButton4.getAttribute('data-section');
            showSection(targetSection);
        });
    }
}


function showSection(sectionId) {
    // Cacher toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section cible
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
        currentSection = sectionId;
    }
}

function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Animations
function initializeAnimations() {
    // Animation des barres de progression au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                });
            }
        });
    });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

// Graphique radar pour les compétences
function initializeRadarChart() {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    
    const data = {
    labels: ['Administration', 'Interconnexion', 'Sécurité', 'Codage'],
        values: [75, 60, 40, 80]
    };
    
    drawRadarChart(ctx, centerX, centerY, radius, data);
}

function drawRadarChart(ctx, centerX, centerY, radius, data) {
    const numSides = data.labels.length;
    const angles = [];
    
    // Calculer les angles pour chaque axe
    for (let i = 0; i < numSides; i++) {
        angles.push((i * 2 * Math.PI) / numSides - Math.PI / 2);
    }
    
    // Dessiner les axes
    ctx.strokeStyle = '#3C4A7E';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < numSides; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + radius * Math.cos(angles[i]),
            centerY + radius * Math.sin(angles[i])
        );
        ctx.stroke();
    }
    
    // Dessiner les cercles concentriques
    ctx.strokeStyle = '#E5E5E5';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    // Dessiner les données
    ctx.fillStyle = 'rgba(60, 74, 126, 0.3)';
    ctx.strokeStyle = '#3C4A7E';
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    for (let i = 0; i < numSides; i++) {
        const value = data.values[i] / 100;
        const x = centerX + radius * value * Math.cos(angles[i]);
        const y = centerY + radius * value * Math.sin(angles[i]);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Dessiner les points de données
    ctx.fillStyle = '#00D4FF';
    for (let i = 0; i < numSides; i++) {
        const value = data.values[i] / 100;
        const x = centerX + radius * value * Math.cos(angles[i]);
        const y = centerY + radius * value * Math.sin(angles[i]);
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Ajouter les labels
    ctx.fillStyle = '#1A1A1A';
    ctx.font = '14px Inter';
    ctx.textAlign = 'center';
    
    for (let i = 0; i < numSides; i++) {
        const labelRadius = radius + 30;
        const x = centerX + labelRadius * Math.cos(angles[i]);
        const y = centerY + labelRadius * Math.sin(angles[i]);
        
        ctx.fillText(data.labels[i], x, y + 5);
    }
}

// Gestion des projets et modales
document.addEventListener('click', function(e) {
    if (e.target.closest('.project-card')) {
        const projectId = e.target.closest('.project-card').getAttribute('data-project');
        openProjectModal(projectId);
    }
});

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = generateProjectModalContent(project);
    
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function generateProjectModalContent(project) {
    const competencesTags = project.competences.map(comp => 
        `<a href="#" class="competence-tag" onclick="showCompetenceFromProject('${comp}')">${comp}</a>`
    ).join('');
    
    const tracesHtml = project.traces.map(trace => {
        // Si c'est "Certif MOOC" et qu'il y a une image, ajouter l'image après
        if ((trace === "Certif MOOC" || trace === "Schéma logique" || trace === "Capture du site :" || trace === "Rapport de mesure et de cartographie :") && project.image) {
            return `<li>${trace}
                <div class="trace-image">
                    <img src="${project.image}" alt="${trace}" onerror="this.style.display='none'">
                </div>
            </li>`;
        }
        return `<li>${trace}</li>`;
    }).join('');
    
    const objectivesHtml = project.objectives.map(obj => 
        `<li>${obj}</li>`
    ).join('');

    const pointsHtml = project.points.map(obj => 
        `<li>${obj}</li>`
    ).join('');
    
    const codeHtml = project.codeExample ? 
        `<div class="code-snippet">${project.codeExample}</div>` : '';
    
    return `
        <div class="modal-body">
            <h2>${project.title}</h2>
            
            <h3>Contexte et objectifs</h3>
            <p>${project.context}</p>
            <ul>
                ${objectivesHtml}
            </ul>
            
            <h3>Ma contribution personnelle</h3>
            <p>${project.contribution}</p>
            <ul>
                ${pointsHtml}
            </ul>
            
            <h3>Traces du projet</h3>
            <div class="traces-projet">
                <ul>
                    ${tracesHtml}
                </ul>
                ${codeHtml}
            </div>
            
            <h3>Auto-évaluation</h3>
            <p>${project.reflection}</p>
            
            <h3>Compétences associées (cliquer pour plus de détails)</h3>
            <div class="competences-associees">
                ${competencesTags}
            </div>
        </div>
    `;
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    window.location.reload();
}


function showCompetenceFromProject(competenceId) {
    closeModal();
    showSection('skills');
    // Scroll vers la compétence spécifique
    setTimeout(() => {
        const skillCard = document.querySelector(`[data-skill="${competenceId.toLowerCase().replace(' ', '')}"]`);
        if (skillCard) {
            skillCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            skillCard.style.transform = 'scale(1.05)';
            setTimeout(() => {
                skillCard.style.transform = '';
            }, 500);
        }
    }, 300);
}

// Fermer la modale en cliquant à l'extérieur
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Export PDF
function exportToPDF() {
    // Afficher toutes les sections pour l'impression
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'block';
        section.classList.add('active');
    });
    
    // Déclencher l'impression
    window.print();
    
    // Restaurer l'affichage normal après impression
    setTimeout(() => {
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = '';
            section.classList.remove('active');
        });
        showSection(currentSection);
    }, 1000);
}

function downloadCV() {
    // Créer un lien temporaire
    const link = document.createElement('a');
    link.href = '/documents/CV_Ugo_Stanciu.pdf';
    link.download = 'CV_Ugo_Stanciu.pdf'; // Nom du fichier téléchargé
    
    // Déclencher le téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optionnel : tracking analytics
    console.log('CV téléchargé');
}

// Navigation mobile (hamburger menu)
document.addEventListener('click', function(e) {
    if (e.target.closest('.nav-toggle')) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
});

// Gestion des raccourcis clavier
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Navigation avec les touches numériques
    if (e.key >= '1' && e.key <= '5') {
        const sections = ['home', 'about', 'projects', 'skills', 'projection'];
        const sectionIndex = parseInt(e.key) - 1;
        if (sections[sectionIndex]) {
            showSection(sections[sectionIndex]);
        }
    }
});

// Animation de typing pour le titre principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Effet parallaxe léger sur l'animation réseau
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const networkAnimation = document.querySelector('.network-animation');
    
    if (networkAnimation && currentSection === 'home') {
        networkAnimation.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
});

// Animation des statistiques
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const startTime = Date.now();
        
        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * target);
            
            stat.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        update();
    });
}

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Données des apprentissages critiques
const apprentissagesCritiques = {
    ue1: {
        title: "UE 1 - Administrer les réseaux et l'Internet",
        description: "Cette UE couvre l'administration des réseaux locaux et de l'Internet, incluant les systèmes d'exploitation et la configuration réseau.",
        apprentissages: [
            {
                code: "AC11.01",
                description: "Maîtriser les lois fondamentales de l'électricité afin d'intervenir sur des équipements de réseaux et télécommunications"
            },
            {
                code: "AC11.02",
                description: "Comprendre l'architecture et les fondements des systèmes numériques, les principes de codage de l'information, des communications et de l'Internet"
            },
            {
                code: "AC11.03",
                description: "Configurer les fonctions de base du réseau local"
            },
            {
                code: "AC11.04",
                description: "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation afin d'intégrer avec ceux-ci pour la configuration et l'administration des réseaux et services fournis"
            },
            {
                code: "AC11.05",
                description: "Identifier les dysfonctionnements du réseau local et savoir les signaler"
            },
            {
                code: "AC11.06",
                description: "Installer un poste client, expliquer la procédure mise en place"
            }
        ]
    },
    ue2: {
        title: "UE 2 - Connecter les entreprises et les usagers",
        description: "Cette UE se concentre sur les transmissions, les télécommunications et la connexion entre systèmes.",
        apprentissages: [
            {
                code: "AC12.01",
                description: "Mesurer et analyser les signaux"
            },
            {
                code: "AC12.02",
                description: "Caractériser des systèmes de transmissions élémentaires et découvrir la modélisation mathématique de leur fonctionnement"
            },
            {
                code: "AC12.03",
                description: "Déployer des supports de transmission"
            },
            {
                code: "AC12.04",
                description: "Connecter les systèmes de ToIP"
            },
            {
                code: "AC12.05",
                description: "Communiquer avec un tiers (client, collaborateur…) et adapter son discours et son langage à son interlocuteur"
            }
        ]
    },
    ue3: {
        title: "UE 3 - Créer des outils et des applications informatiques pour les R&T",
        description: "Cette UE couvre le développement d'applications, la programmation et les outils informatiques spécialisés pour les R&T.",
        apprentissages: [
            {
                code: "AC13.01",
                description: "Utiliser un système informatique et ses outils"
            },
            {
                code: "AC13.02",
                description: "Lire, exécuter, corriger et modifier un programme"
            },
            {
                code: "AC13.03",
                description: "Traduire un algorithme dans un langage et pour un environnement donné"
            },
            {
                code: "AC13.04",
                description: "Connaître l'architecture et les technologies d'un site Web"
            },
            {
                code: "AC13.05",
                description: "Choisir les mécanismes de gestion de données adaptés au développement de l'outil et argumenter ses choix"
            },
            {
                code: "AC13.06",
                description: "S'intégrer dans un environnement propice au développement et au travail collaboratif"
            }
        ]
    }
};

// Fonction pour afficher les détails d'une UE
function showUEDetails(ueId) {
    const ueData = apprentissagesCritiques[ueId];
    
    if (!ueData) {
        console.error('UE non trouvée:', ueId);
        return;
    }
    
    const modalBody = document.getElementById('modalBody');
    
    let apprentissagesHTML = '';
    ueData.apprentissages.forEach(ac => {
        apprentissagesHTML += `
            <li class="ac-item">
                <div class="ac-code">${ac.code}</div>
                <div class="ac-description">${ac.description}</div>
            </li>
        `;
    });
    
    modalBody.innerHTML = `
        <div class="ue-details">
            <h3>${ueData.title}</h3>
            <p style="margin-bottom: 25px; color: #666; font-size: 16px; line-height: 1.6;">${ueData.description}</p>
            <h4>Apprentissages Critiques :</h4>
            <ul class="ac-list">
                ${apprentissagesHTML}
            </ul>
        </div>
    `;
    
    // Afficher la modal
    document.getElementById('modalOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}


// Fermer la modal en cliquant sur l'overlay
document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
