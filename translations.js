/* ============================================================================
   translations.js — Site multilingue FR / EN / AR
   Généré automatiquement pour index.html (Bouafia Rehabi)
   ----------------------------------------------------------------------------
   Fonctionnement :
   • Les dictionnaires ci-dessous mappent le texte français source (normalisé)
     vers l'anglais et l'arabe.
   • applyTranslations('fr' | 'en' | 'ar') traduit tous les nœuds texte et les
     attributs (placeholder, title, alt) de la page. 'fr' restaure l'original.
   • Un MutationObserver re-traduit automatiquement le contenu injecté après
     coup par Alpine.js (tableau des sessions filtrées, modal, badges...).
   • La langue est mémorisée par index.html via localStorage('siteLang').
   ========================================================================== */
(function () {
  'use strict';

  var I18N = {
  "en": {
    "Toutes les versions de mon CV": "All versions of my CV",
    "CV Français (PDF)": "French CV (PDF)",
    "CV Anglais (DOCX)": "English CV (DOCX)",
    "CV Arabe (DOCX)": "Arabic CV (DOCX)",
    "CV ATS Français (DOCX)": "ATS CV French (DOCX)",
    "CV ATS Anglais (DOCX)": "ATS CV English (DOCX)",
    "CV ATS Arabe (DOCX)": "ATS CV Arabic (DOCX)",
    "Version optimisée pour les logiciels de recrutement (ATS)": "Version optimized for recruitment software (ATS)",
    "visites": "visits",
    "Diagnostic Gratuit — 30 Problèmes / Service": "Free Diagnostic — 30 Problems / Service",
    "Diagnostic Gratuit": "Free Diagnostic",
    "Sécurité": "Security",
    "Développement": "Development",
    "Data & IA": "Data & AI",
    "Bureautique": "Office Tools",
    "Processus / DevOps": "Process / DevOps",
    "Public": "Public",
    "Master Management": "Management Master's students",
    "Ingénieur, Master, Technicien": "Engineers, Master's & Technicians",
    "Ingénieur, Technicien Supérieur": "Engineers & Senior Technicians",
    "Menu": "Menu",
    "Basculer le thème": "Toggle theme",
    "Changer de langue": "Change language",
    "Télécharger le CV": "Download my CV",
    "Nombre de visiteurs": "Number of visitors",
    "Profil": "Profile",
    "Approche ✦": "Approach ✦",
    "Compétences": "Skills",
    "Formations": "Training",
    "Parcours": "Career",
    "Clients": "Clients",
    "Contact": "Contact",
    "Télécharger CV (PDF)": "Download CV (PDF)",
    "Télécharger CV": "Download CV",
    "Langue:": "Language:",
    "Disponible — Formations & Consulting": "Available — Training & Consulting",
    "Enseignant à l'Université d'Alger 2 · Consultant Auto-Entrepreneur": "Lecturer at the University of Algiers 2 · Independent Consultant",
    "Spécialisé en": "Specialized in",
    "IA Générative": "Generative AI",
    "(RAG, LangChain, LLaMA, CrewAI), Cybersécurité et développement web.": "(RAG, LangChain, LLaMA, CrewAI), cybersecurity and web development.",
    "Boumerdes, Algérie": "Boumerdès, Algeria",
    "Planifier une Formation / Mission": "Book a Training / Mission",
    "Mon Approche Métier": "My Professional Approach",
    "Voir mes attestations": "View my certificates",
    "16+ Ans d'Impact Technologique": "16+ Years of Technological Impact",
    "Université :": "University:",
    "Alger 2 (Enseignant)": "Algiers 2 (Lecturer)",
    "Diplômes :": "Degrees:",
    "European Bachelor · Ingénieur PRO (Limoges, FR)": "European Bachelor · Professional Engineer (Limoges, FR)",
    "Disponible :": "Available:",
    "Langues :": "Languages:",
    "Écrire": "Email",
    "Appeler": "Call",
    "Années d'Expérience": "Years of Experience",
    "Cadres & Ingénieurs Formés": "Executives & Engineers Trained",
    "Grandes Entreprises Clientes": "Major Client Companies",
    "Problèmes Métiers Résolus": "Business Problems Solved",
    "Outils Maîtrisés (Excel·BI·SQL·Python·IA)": "Tools Mastered (Excel·BI·SQL·Python·AI)",
    "Ce qui me différencie": "What sets me apart",
    "Mon Approche : Résoudre, pas seulement Enseigner": "My Approach: Solve, not just Teach",
    "Je ne forme pas \"Excel Niveau 2\" ou \"Power BI Avancé\" dans le vide. Je pars du": "I don't teach \"Excel Level 2\" or \"Advanced Power BI\" in a vacuum. I start from",
    "problème réel de votre équipe": "your team's real problem",
    "— RH, Finance, Commercial, Logistique — et je livre une solution fonctionnelle qu'ils utilisent dès le lendemain matin.": "— HR, Finance, Sales, Logistics — and I deliver a working solution they use the very next morning.",
    "ÉTAPE 1": "STEP 1",
    "ÉTAPE 2": "STEP 2",
    "ÉTAPE 3": "STEP 3",
    "Diagnostic Métier": "Business Diagnosis",
    "Avant toute formation, j'identifie les vrais problèmes de l'équipe.": "Before any training, I identify the team's real problems.",
    "Test de niveau inclus.": "Level test included.",
    "Je comprends le quotidien de vos RH, financiers, commerciaux et opérationnels.": "I understand the daily reality of your HR, finance, sales and operations staff.",
    "Solution Sur-Mesure": "Tailor-Made Solution",
    "Je construis des exercices sur": "I build exercises on",
    "vos données réelles": "your real data",
    ", avec l'outil approprié : Excel, Power BI, Python, SQL ou IA. L'outil sert le problème — jamais l'inverse.": ", with the right tool: Excel, Power BI, Python, SQL or AI. The tool serves the problem — never the other way around.",
    "Résultat Immédiat": "Immediate Result",
    "Chaque participant repart avec un": "Every participant leaves with a",
    "outil fonctionnel prêt à l'emploi": "a ready-to-use working tool",
    "— pas un certificat de présence. Le lendemain, il produit. C'est ça l'impact réel.": "— not an attendance certificate. The next day, they produce. That's the real impact.",
    "RH / GRH": "HR / HRM",
    "Commercial": "Sales",
    "Logistique": "Logistics",
    "400+ Problèmes Métiers Résolus": "400+ Business Problems Solved",
    "RH · Finance · Commercial · Marketing · Logistique · Production · Direction · Achats · IT": "HR · Finance · Sales · Marketing · Logistics · Production · Management · Procurement · IT",
    "Résolu avec :": "Solved with:",
    "Planifier une session": "Book a session",
    "\"La transmission du savoir et la sécurisation des architectures applicatives sont les deux piliers de la transformation numérique d'une entreprise moderne. Mon engagement est d'amener les équipes vers l'excellence technologique.\"": "\"Knowledge transfer and the security of application architectures are the two pillars of a modern company's digital transformation. My commitment is to lead teams toward technological excellence.\"",
    "Consultant & Formateur Senior": "Senior Consultant & Trainer",
    "Mon Profil": "My Profile",
    "Consultant Informatique Senior & Formateur Académique": "Senior IT Consultant & Academic Trainer",
    "Fort d'une solide expérience pluridimensionnelle, j'accompagne les cadres dirigeants et les ingénieurs des plus grandes organisations d'Algérie (CACI, EPAL, Algérie Télécom, Halliburton) à travers des programmes de formation intensifs, de l'audit et de l'intégration technique.": "With solid multidimensional experience, I support senior executives and engineers from Algeria's largest organizations (CACI, EPAL, Algérie Télécom, Halliburton) through intensive training programs, audits and technical integration.",
    "Depuis 2025, je transmets mon savoir en tant qu'": "Since 2025, I have been passing on my knowledge as a ",
    "Enseignant à l'Université d'Alger 2": "Lecturer at the University of Algiers 2",
    ", tout en formant des cadres d'entreprises. Ma double casquette d'académicien et de consultant de terrain m'offre une vision réaliste et opérationnelle des besoins de l'industrie.": ", while training corporate executives. My dual role as academic and field consultant gives me a realistic, operational view of industry needs.",
    "Mes domaines d'excellence :": "My areas of excellence:",
    "cybersécurité": "cybersecurity",
    ", et": ", and",
    "décisionnel": "business intelligence",
    "Qualifier et Caler": "Qualify & Calibrate",
    "Pédagogie orientée problèmes métiers réels.": "Teaching focused on real business problems.",
    "Maîtrise complète du cycle de vie logiciel.": "Complete mastery of the software lifecycle.",
    "Diplômé 3IL Limoges, France": "3IL Limoges Graduate, France",
    "European Bachelor + Master Pro Informatique.": "European Bachelor + Professional Master's in IT.",
    "Mon Arsenal Technique": "My Technical Arsenal",
    "Expertise & Technologies Maîtrisées": "Expertise & Technologies Mastered",
    "Mes compétences couvrent l'intégralité du cycle informatique d'entreprise, de la donnée brute aux agents IA autonomes.": "My skills cover the entire corporate IT lifecycle, from raw data to autonomous AI agents.",
    "Sécurité & Gouvernance": "Security & Governance",
    "Protection & Réglementation": "Protection & Regulation",
    "Cybersécurité Applicative Web": "Web Application Security",
    "Avancé": "Advanced",
    "Intermédiaire": "Intermediate",
    "Protection des Données (Loi 18-07)": "Data Protection (Law 18-07)",
    "Sécurisation des Accès Réseaux": "Network Access Security",
    "Protection des SI d'Entreprise": "Enterprise Information Systems Protection",
    "Administration ESET Antivirus": "ESET Antivirus Administration",
    "Développement Web": "Web Development",
    "Langages de Programmation": "Programming Languages",
    "Frameworks Client & Mobile": "Client & Mobile Frameworks",
    "Expertise Principale": "Core Expertise",
    "Data & Intelligence Artificielle": "Data & Artificial Intelligence",
    "BI, SGBD, Data Analytics & GenAI": "BI, DBMS, Data Analytics & GenAI",
    "Data Mining & Analyse Python": "Data Mining & Python Analysis",
    "Automation IA avec N8n": "AI Automation with N8n",
    "CrewAI / Agents Multi-IA": "CrewAI / Multi-AI Agents",
    "CMS, LMS & Bureautique": "CMS, LMS & Office Suite",
    "Plateformes web & Office": "Web & Office Platforms",
    "Excel Avancé & VBA Professionnel": "Advanced Excel & Professional VBA",
    "MS Project (Gestion de projet)": "MS Project (Project Management)",
    "Méthodes & DevOps": "Methods & DevOps",
    "UML, Merise (Modélisation)": "UML, Merise (Modeling)",
    "BPMN 2.0 (Processus Métier)": "BPMN 2.0 (Business Processes)",
    "Langues de Travail & Communication": "Working Languages & Communication",
    "Arabe (Maternelle — Fusha & Dialecte)": "Arabic (Native — Fusha & Dialect)",
    "Français (Très bien — Lu, Parlé, Écrit)": "French (Very good — Read, Spoken, Written)",
    "Anglais (Bien — Lu, Parlé, Écrit)": "English (Good — Read, Spoken, Written)",
    "Roumain (Bien — Lu, Parlé, Écrit)": "Romanian (Good — Read, Spoken, Written)",
    "Catalogue d'Interventions": "Interventions Catalogue",
    "Formations Dispensées & Expériences": "Training Delivered & Experience",
    "J'interviens de manière récurrente auprès d'organismes de formation d'élite et de grands comptes. Filtrez par catégorie ou recherchez une thématique.": "I work on a recurring basis with elite training organizations and major accounts. Filter by category or search for a topic.",
    "Tout voir": "View all",
    "Sécurité & RGPD": "Security & GDPR",
    "Dév Web & Mobile": "Web & Mobile Dev",
    "Data & BI & IA": "Data & BI & AI",
    "Bureautique Pro": "Professional Office",
    "Affichage de": "Displaying",
    "sessions sur": "sessions out of",
    "enregistrées": "recorded",
    "Réinitialiser les filtres": "Reset filters",
    "Période": "Period",
    "Établissement": "Institution",
    "Module Dispensé": "Module Delivered",
    "Client Finaux": "End Clients",
    "Aucun résultat.": "No results.",
    "Établissement:": "Institution:",
    "Rechercher (ex: Excel, Cyber, Power BI, Halliburton...)": "Search (e.g. Excel, Cyber, Power BI, Halliburton...)",
    "Chronologie de Carrière": "Career Timeline",
    "Formations & Parcours Académique": "Education & Academic Background",
    "Janv. 2026": "Jan. 2026",
    "Nov. 2025": "Nov. 2025",
    "Janv. 2025": "Jan. 2025",
    "Janv. 2018": "Jan. 2018",
    "Janv. 2013": "Jan. 2013",
    "Sept. 2010": "Sep. 2010",
    "Janv. 2008": "Jan. 2008",
    "Consultant Informatique Senior": "Senior IT Consultant",
    "Animation de modules de haut niveau et de séminaires d'architecture logicielle.": "Delivering high-level modules and software architecture seminars.",
    "Enseignant Universitaire": "University Lecturer",
    "Université Alger 2 · Alger, Algérie": "University of Algiers 2 · Algiers, Algeria",
    "Enseignement académique théorique et pratique des langages informatiques et bases de données.": "Theoretical and practical academic teaching of programming languages and databases.",
    "Consultant Informatique CACI": "CACI IT Consultant",
    "CACI Formation (Chambre Algérienne de Commerce)": "CACI Training (Algerian Chamber of Commerce and Industry)",
    "Formateur de cadres d'entreprises sur la législation Loi 18-07 et l'IA appliquée.": "Corporate trainer on Law 18-07 legislation and applied AI.",
    "Directeur d'Établissement": "Institution Director",
    "École de Formation Professionnelle Informica · Boumerdes": "Informica Vocational Training School · Boumerdès",
    "Gestion globale, conception de syllabus pédagogiques agréés et encadrement des apprenants.": "Overall management, design of approved teaching syllabi and learner supervision.",
    "Master Professionnel Informatique & CSI": "Professional Master's in IT & Information Systems",
    "Université 3IL – Limoges, France": "3IL University – Limoges, France",
    "Spécialisation en Conception de Systèmes d'Information et architecture distribuée.": "Specialization in Information System Design and distributed architecture.",
    "Ingénieur Professionnel & European Bachelor": "Professional Engineer & European Bachelor",
    "Bases approfondies de génie logiciel, réseaux informatiques et administration système.": "Advanced foundations in software engineering, computer networks and system administration.",
    "Technicien Supérieur Informatique": "Senior IT Technician",
    "UNSFP El-Mohammadia · Algérie": "UNSFP El-Mohammadia · Algeria",
    "Option : Bases de Données (Conception, requêtes complexes et modélisation).": "Major: Databases (Design, complex queries and modeling).",
    "Références Clés": "Key References",
    "Ils m'ont fait confiance": "They trusted me",
    "Multinationales, ministères, aéroports, ports, universités — 50+ grandes entreprises clientes en Algérie.": "Multinationals, ministries, airports, ports, universities — 50+ major client companies in Algeria.",
    "Windev Perfectionnement Avancé": "Advanced Windev",
    "Systèmes Windows & Bureautique": "Windows Systems & Office Tools",
    "Cybersécurité & Audit SI": "Cybersecurity & IS Audit",
    "Hébergement · Serveurs Web": "Hosting · Web Servers",
    "Loi 18-07 · IA Appliquée": "Law 18-07 · Applied AI",
    "App Mobile Multiplateforme": "Cross-Platform Mobile App",
    "GED pour établissement 5 étoiles": "EDM for a 5-star establishment",
    "Développement Dot Net C#": ".NET C# Development",
    "Excel Avancé · Loi 18-07": "Advanced Excel · Law 18-07",
    "PowerPoint & Bureautique": "PowerPoint & Office Tools",
    "Attestations de bonne exécution disponibles": "Certificates of good execution available",
    "Des certificats officiels téléchargeables — Royal School, Kaizen, CNAT, AGA, EGIC IBN SINA...": "Official downloadable certificates — Royal School, Kaizen, CNAT, AGA, EGIC IBN SINA...",
    "Prendre Contact": "Get in Touch",
    "Lançons votre projet ou formation": "Let's launch your project or training",
    "Besoin d'un programme de formation sur-mesure pour vos équipes ? D'un audit IT ? D'une mission de conseil en Oman ou dans le Golfe ? Contactez-moi directement.": "Need a tailor-made training program for your teams? An IT audit? A consulting mission in Oman or the Gulf? Contact me directly.",
    "Téléphone mobile": "Mobile Phone",
    "Courrier Électronique": "Email",
    "Localisation": "Location",
    "Boudouaou, Boumerdes, Algérie": "Boudouaou, Boumerdès, Algeria",
    "Mobilité sur toute la wilaya d'Alger et de Boumerdes": "Mobility across the wilayas of Algiers and Boumerdès",
    "Disponibilité Internationale": "International Availability",
    "Formations en arabe (fusha) et en anglais · Présentiel ou distanciel": "Training in Arabic (fusha) and English · On-site or remote",
    "Besoin d'un entretien immédiat ?": "Need an immediate call?",
    "Joignable du samedi au jeudi de 8h00 à 18h00 (GMT+1). WhatsApp disponible.": "Reachable Saturday to Thursday, 8:00 AM – 6:00 PM (GMT+1). WhatsApp available.",
    "Appeler directement": "Call directly",
    "Nom Complet": "Full Name",
    "Entreprise / Organisme": "Company / Organization",
    "Adresse Électronique": "Email Address",
    "Objet de votre demande": "Subject of your request",
    "Demande de formation d'équipe": "Team training request",
    "🇴🇲 Formation / Mission en Oman ou dans le Golfe": "🇴🇲 Training / Mission in Oman or the Gulf",
    "Mise en conformité Loi 18-07 / RGPD": "Law 18-07 / GDPR compliance",
    "Mission de conseil ou d'Audit IT": "Consulting or IT Audit Mission",
    "Collaboration Universitaire / Académique": "University / Academic Collaboration",
    "Autre demande professionnelle": "Other professional request",
    "Détails de votre besoin": "Details of your needs",
    "Envoyer le message": "Send the message",
    "Décrivez les thématiques, le public cible (ingénieurs, cadres dirigeants), le nombre de personnes, la localisation (Algérie, Oman...) et la période souhaitée...": "Describe the topics, target audience (engineers, senior executives), number of people, location (Algeria, Oman...) and desired period...",
    "Data & AI Trainer · IT Consultant · Disponible Oman & Golfe": "Data & AI Trainer · IT Consultant · Available Oman & Gulf",
    "© 2026 Bouafia Rehabi. Tous droits réservés.": "© 2026 Bouafia Rehabi. All rights reserved.",
    "Propulsé par": "Powered by",
    "Attestations Officielles": "Official Certificates",
    "Documents & Certificats de bonne exécution": "Documents & Certificates of good execution",
    "Document officiel PDF": "Official PDF document",
    "Documents officiels — Cliquer pour télécharger": "Official documents — Click to download",
    "💬 Discuter sur WhatsApp": "💬 Chat on WhatsApp",
    "Novembre 2024": "November 2024",
    "Mai 2025": "May 2025",
    "Octobre 2012": "October 2012",
    "Janvier 2025": "January 2025",
    "Décembre 2024": "December 2024",
    "Juin 2024": "June 2024",
    "AVRIL 2026": "AVRIL 2026",
    "Septembre 2025": "September 2025",
    "Juin 2025": "June 2025",
    "Octobre 2025": "October 2025",
    "Novembre 2016": "November 2016",
    "Octobre 2024": "October 2024",
    "Mars 2013": "March 2013",
    "Novembre 2011": "November 2011",
    "Juin 2018": "June 2018",
    "Février 2024": "February 2024",
    "Septembre 2023": "September 2023",
    "Juin 2026": "June 2026",
    "Décembre 2025": "December 2025",
    "Février 2025": "February 2025",
    "Janvier 2024": "January 2024",
    "Sept 2014": "Sep 2014",
    "Avril 2015": "April 2015",
    "Décembre 2023": "December 2023",
    "Juin 2012-2016": "June 2012-2016",
    "MAI 2026": "MAI 2026",
    "Juillet 2024": "July 2024",
    "Mars 2015": "March 2015",
    "Septembre 2024": "September 2024",
    "Juillet 2025": "July 2025",
    "Novembre 2017": "November 2017",
    "Mars 2018": "March 2018",
    "Février 2026": "February 2026",
    "Octobre 2015": "October 2015",
    "Avril 2025": "April 2025",
    "Cadres Dirigeants Ingénieur": "Executives & Engineers",
    "Cadres Dirigeants": "Senior Executives",
    "Cadre Dirigeant": "Senior Executive",
    "Ingénieur": "Engineer",
    "Ingénieur IT": "IT Engineer",
    "Ingénieur, Master": "Engineers, Master's",
    "Ingénieur, Technicien": "Engineers, Technicians",
    "Master": "Master's",
    "Master Ingénieur": "Master's & Engineers",
    "BTS, Ingénieur": "BTS, Engineers",
    "N/M": "N/A",
    "Technicien": "Technician",
    "Technicien Supérieur": "Senior Technician",
    "Ministère de la Santé": "Ministry of Health",
    "Port Alger": "Port of Algiers",
    "Travaux Publics": "Public Works",
    "Hôpital ValDydra": "ValDydra Hospital",
    "Metro Alger": "Algiers Metro",
    "PROTECTION DES DONNEES PERSONNELS": "PERSONAL DATA PROTECTION",
    "PROTECTION DES DONNEES PERSONNELS Loi 18-07": "PERSONAL DATA PROTECTION Law 18-07",
    "Cyber Sécurité": "Cybersecurity",
    "Cybersécurité": "Cybersecurity",
    "Excel Avancé": "Advanced Excel",
    "Excel Avancée": "Advanced Excel",
    "Excel-Avancer": "Advanced Excel",
    "Excel Perfectionnement (Avancé)": "Excel Refresher (Advanced)",
    "Excel Initiation": "Excel Introduction",
    "Excel Niveau 2": "Excel Level 2",
    "Microsoft Word Niveau 2": "Microsoft Word Level 2",
    "Système Windows Niveau 2": "Windows System Level 2",
    "Windev Perfectionnement": "Advanced Windev",
    "Protection des SI": "Information Systems Protection",
    "CMS Joomla Niveau 1": "CMS Joomla Level 1",
    "App Mobile Multiplateforme Flex 4.6": "Cross-Platform Mobile App Flex 4.6",
    "HEBERGEMENT ET MESSAGERIE": "HOSTING AND MESSAGING",
    "JAVA Edition Entreprise": "JAVA Enterprise Edition",
    "security": "Security",
    "dev": "Dev",
    "data": "Data",
    "office": "Office",
    "management": "Management",
    "Attestation de Bonne Exécution — Bouafia Rehabi": "Certificate of Good Execution — Bouafia Rehabi",
    "Attestation de Bonne Exécution — Bouafia": "Certificate of Good Execution — Bouafia",
    "Attestation de Bonne Exécution — Doc 03": "Certificate of Good Execution — Doc 03",
    "Attestation de Bonne Exécution — Doc 04": "Certificate of Good Execution — Doc 04",
    "Attestation — SCN 01": "Certificate — SCN 01",
    "Attestation — SCN 02": "Certificate — SCN 02",
    "Attestation — SCN 03": "Certificate — SCN 03",
    "Attestation — SCN 04": "Certificate — SCN 04",
    "Attestation — SCN 05": "Certificate — SCN 05",
    "Attestation — SCN 06": "Certificate — SCN 06",
    "Attestation — SCN 07": "Certificate — SCN 07",
    "Attestation — SCN 08": "Certificate — SCN 08",
    "Attestation — SCN 09": "Certificate — SCN 09",
    "Attestation — SCN 10": "Certificate — SCN 10",
    "Fiches Techniques des Modules": "Module Technical Data Sheets",
    "Programmes de Formation Téléchargeables": "Downloadable Training Programs",
    "Chaque module dispose d'une fiche technique détaillée : objectifs, programme, durée, public cible et prérequis. Les programmes sont ajustés à votre contexte après diagnostic.": "Each module comes with a detailed technical sheet: objectives, syllabus, duration, target audience and prerequisites. Programs are tailored to your context after diagnosis.",
    "Besoin d'un programme sur-mesure ?": "Need a tailor-made program?",
    "— j'ajuste le contenu à vos données et à votre secteur.": "— I adjust the content to your data and your sector.",
    "Contactez-moi": "Contact me",
    "Expert Achats": "Procurement Expert",
    "Expert Commercial": "Sales Expert",
    "Expert Direction": "Executive Management Expert",
    "Expert Finance": "Finance Expert",
    "Expert Formations": "Training Expert",
    "Expert IT": "IT Expert",
    "Expert Logistique": "Logistics Expert",
    "Expert Marketing": "Marketing Expert",
    "Expert Production": "Production Expert",
    "30 problèmes résolus · 5 jours (35 h)": "30 problems solved · 5 days (35 h)",
    "Programmes d'expertise par la pratique : Excel, Power BI, Python, SQL et IA appliqués aux problèmes réels du métier.": "Hands-on expertise programs: Excel, Power BI, Python, SQL and AI applied to the real problems of the job.",
    "IA": "AI"
  },
  "ar": {
    "Toutes les versions de mon CV": "جميع نسخ سيرتي الذاتية",
    "CV Français (PDF)": "السيرة الذاتية بالفرنسية (PDF)",
    "CV Anglais (DOCX)": "السيرة الذاتية بالإنجليزية (DOCX)",
    "CV Arabe (DOCX)": "السيرة الذاتية بالعربية (DOCX)",
    "CV ATS Français (DOCX)": "سيرة ذاتية ATS بالفرنسية (DOCX)",
    "CV ATS Anglais (DOCX)": "سيرة ذاتية ATS بالإنجليزية (DOCX)",
    "CV ATS Arabe (DOCX)": "سيرة ذاتية ATS بالعربية (DOCX)",
    "Version optimisée pour les logiciels de recrutement (ATS)": "نسخة محسّنة لأنظمة فرز طلبات التوظيف (ATS)",
    "visites": "زيارة",
    "Sécurité": "الأمن السيبراني",
    "Développement": "التطوير",
    "Data & IA": "البيانات والذكاء الاصطناعي",
    "Bureautique": "البرامج المكتبية",
    "Processus / DevOps": "العمليات / DevOps",
    "Master Management": "حاملو ماستر في التسيير",
    "Ingénieur, Master, Technicien": "مهندسون، ماستر، تقنيون",
    "Ingénieur, Technicien Supérieur": "مهندسون، تقنيون ساميون",
    "Menu": "القائمة",
    "Basculer le thème": "تبديل المظهر",
    "Changer de langue": "تغيير اللغة",
    "Télécharger le CV": "تحميل السيرة الذاتية",
    "Nombre de visiteurs": "عدد الزوار",
    "Profil": "نبذة",
    "Approche ✦": "المنهجية ✦",
    "Compétences": "المهارات",
    "Formations": "التدريب",
    "Parcours": "المسار",
    "Clients": "العملاء",
    "Contact": "تواصل",
    "Télécharger CV (PDF)": "تحميل السيرة الذاتية (PDF)",
    "Télécharger CV": "تحميل السيرة الذاتية",
    "Diagnostic Gratuit — 30 Problèmes / Service": "تشخيص مجاني — 30 مشكلة لكل خدمة",
    "Diagnostic Gratuit": "تشخيص مجاني",
    "Langue:": "اللغة:",
    "Disponible — Formations & Consulting": "متاح — تدريب واستشارات",
    "Data & AI Trainer · IT Consultant": "مدرّب البيانات والذكاء الاصطناعي · مستشار تقنية معلومات",
    "Enseignant à l'Université d'Alger 2 · Consultant Auto-Entrepreneur": "أستاذ بجامعة الجزائر 2 · مستشار مستقل",
    "Spécialisé en": "متخصص في",
    "Data Analysis": "تحليل البيانات",
    "IA Générative": "الذكاء الاصطناعي التوليدي",
    "(RAG, LangChain, LLaMA, CrewAI), Cybersécurité et développement web.": "(RAG, LangChain, LLaMA, CrewAI)، الأمن السيبراني وتطوير الويب.",
    "🌍 Open to relocation — Available for corporate training missions in Oman & the Gulf region.": "🌍 متاح للتنقل — متاح لمهام تدريب الشركات في عُمان ومنطقة الخليج.",
    "Boumerdes, Algérie": "بومرداس، الجزائر",
    "Oman · UAE · KSA · Qatar": "عُمان · الإمارات · السعودية · قطر",
    "Planifier une Formation / Mission": "جدولة تدريب / مهمة",
    "Mon Approche Métier": "منهجيتي المهنية",
    "Voir mes attestations": "عرض شهاداتي",
    "16+ Ans d'Impact Technologique": "أكثر من 16 سنة من التأثير التكنولوجي",
    "Université :": "الجامعة :",
    "Alger 2 (Enseignant)": "الجزائر 2 (أستاذ)",
    "Diplômes :": "الشهادات :",
    "European Bachelor · Ingénieur PRO (Limoges, FR)": "بكالوريوس أوروبي · مهندس محترف (ليموج، فرنسا)",
    "Disponible :": "الجاهزية :",
    "🇴🇲 Oman · Gulf · MENA": "🇴🇲 عُمان · الخليج · الشرق الأوسط",
    "Langues :": "اللغات :",
    "Écrire": "مراسلة",
    "Appeler": "اتصال",
    "Années d'Expérience": "سنوات خبرة",
    "Cadres & Ingénieurs Formés": "إطارات ومهندسون متدرّبون",
    "Grandes Entreprises Clientes": "شركات كبرى عميلة",
    "Problèmes Métiers Résolus": "مشكلات مهنية محلولة",
    "Outils Maîtrisés (Excel·BI·SQL·Python·IA)": "أدوات متقنة (Excel·BI·SQL·Python·AI)",
    "Ce qui me différencie": "ما يميّزني",
    "Mon Approche : Résoudre, pas seulement Enseigner": "منهجيتي: الحل، لا التعليم فحسب",
    "Je ne forme pas \"Excel Niveau 2\" ou \"Power BI Avancé\" dans le vide. Je pars du": "لا أدرّس \"إكسل مستوى 2\" أو \"Power BI متقدم\" في الفراغ. أنطلق من",
    "problème réel de votre équipe": "المشكلة الحقيقية لفريقكم",
    "— RH, Finance, Commercial, Logistique — et je livre une solution fonctionnelle qu'ils utilisent dès le lendemain matin.": "— موارد بشرية، مالية، مبيعات، لوجستيك — وأسلّم حلاً عملياً يستخدمونه صباح اليوم التالي.",
    "ÉTAPE 1": "المرحلة 1",
    "ÉTAPE 2": "المرحلة 2",
    "ÉTAPE 3": "المرحلة 3",
    "Diagnostic Métier": "التشخيص المهني",
    "Avant toute formation, j'identifie les vrais problèmes de l'équipe.": "قبل أي تدريب، أحدّد المشكلات الحقيقية للفريق.",
    "Test de niveau inclus.": "يشمل اختبار تحديد المستوى.",
    "Je comprends le quotidien de vos RH, financiers, commerciaux et opérationnels.": "أفهم اليوم العملي لموظفي الموارد البشرية والمالية والمبيعات والعمليات لديكم.",
    "Solution Sur-Mesure": "حلّ حسب الطلب",
    "Je construis des exercices sur": "أبني تمارين على",
    "vos données réelles": "بياناتكم الحقيقية",
    ", avec l'outil approprié : Excel, Power BI, Python, SQL ou IA. L'outil sert le problème — jamais l'inverse.": "، بالأداة المناسبة: Excel أو Power BI أو Python أو SQL أو الذكاء الاصطناعي. الأداة تخدم المشكلة — وليس العكس.",
    "Résultat Immédiat": "نتيجة فورية",
    "Chaque participant repart avec un": "كل مشارك يغادر وهو يحمل",
    "outil fonctionnel prêt à l'emploi": "أداة عملية جاهزة للاستخدام",
    "— pas un certificat de présence. Le lendemain, il produit. C'est ça l'impact réel.": "— لا شهادة حضور. في الغد، يُنتج. هذا هو التأثير الحقيقي.",
    "RH / GRH": "الموارد البشرية",
    "Finance": "المالية",
    "Commercial": "المبيعات",
    "Logistique": "اللوجستيك",
    "Production": "الإنتاج",
    "400+ Problèmes Métiers Résolus": "أكثر من 400 مشكلة مهنية محلولة",
    "RH · Finance · Commercial · Marketing · Logistique · Production · Direction · Achats · IT": "موارد بشرية · مالية · مبيعات · تسويق · لوجستيك · إنتاج · تسيير · مشتريات · إعلام آلي",
    "Résolu avec :": "الحل باستخدام:",
    "Excel · Power BI · Python · SQL · IA (RAG, LangChain, CrewAI)": "Excel · Power BI · Python · SQL · الذكاء الاصطناعي (RAG, LangChain, CrewAI)",
    "Planifier une session": "جدولة جلسة",
    "\"La transmission du savoir et la sécurisation des architectures applicatives sont les deux piliers de la transformation numérique d'une entreprise moderne. Mon engagement est d'amener les équipes vers l'excellence technologique.\"": "\"نقل المعرفة وتأمين هندسة التطبيقات هما الركيزتان للتحوّل الرقمي في الشركة الحديثة. التزامي هو قيادة الفرق نحو التميّز التكنولوجي.\"",
    "Consultant & Formateur Senior": "مستشار ومدرّب أول",
    "Mon Profil": "نبذة عني",
    "Consultant Informatique Senior & Formateur Académique": "مستشار أول في المعلوماتية ومدرّب أكاديمي",
    "Fort d'une solide expérience pluridimensionnelle, j'accompagne les cadres dirigeants et les ingénieurs des plus grandes organisations d'Algérie (CACI, EPAL, Algérie Télécom, Halliburton) à travers des programmes de formation intensifs, de l'audit et de l'intégration technique.": "بخبرة متعددة الأبعاد، أرافق الإطارات المسيرة والمهندسين في أكبر المؤسسات الجزائرية (CACI، EPAL، اتصالات الجزائر، هاليبرتون) عبر برامج تدريب مكثفة وتدقيق تقني ودمج هندسي.",
    "Depuis 2025, je transmets mon savoir en tant qu'": "منذ 2025، أنقل معرفتي بصفتي ",
    "Enseignant à l'Université d'Alger 2": "أستاذ بجامعة الجزائر 2",
    ", tout en formant des cadres d'entreprises. Ma double casquette d'académicien et de consultant de terrain m'offre une vision réaliste et opérationnelle des besoins de l'industrie.": "، مع مواصلة تدريب إطارات الشركات. ازدواجية صفتي كأكاديمي ومستشار ميداني تمنحني رؤية واقعية وتشغيلية لاحتياجات الصناعة.",
    "Mes domaines d'excellence :": "مجالات تميّزي:",
    "DATA ANALYTICS": "تحليل البيانات",
    "cybersécurité": "الأمن السيبراني",
    ", et": "، و",
    "décisionnel": "نظم دعم القرار",
    "Qualifier et Caler": "التأهيل والمعايرة",
    "Pédagogie orientée problèmes métiers réels.": "بيداغوجية موجّهة نحو مشكلات مهنية حقيقية.",
    "Maîtrise complète du cycle de vie logiciel.": "إتقان كامل لدورة حياة البرمجيات.",
    "Diplômé 3IL Limoges, France": "خريج 3IL ليموج، فرنسا",
    "European Bachelor + Master Pro Informatique.": "بكالوريوس أوروبي + ماستر مهني في المعلوماتية.",
    "Mon Arsenal Technique": "ترسانتي التقنية",
    "Expertise & Technologies Maîtrisées": "الخبرة والتقنيات المتقنة",
    "Mes compétences couvrent l'intégralité du cycle informatique d'entreprise, de la donnée brute aux agents IA autonomes.": "تغطي مهاراتي كامل الدورة المعلوماتية للمؤسسة، من البيانات الخام إلى وكلاء الذكاء الاصطناعي المستقلين.",
    "Sécurité & Gouvernance": "الأمن والحكامة",
    "Protection & Réglementation": "الحماية والتشريع",
    "Cybersécurité Applicative Web": "أمن تطبيقات الويب",
    "Avancé": "متقدم",
    "Intermédiaire": "متوسط",
    "Protection des Données (Loi 18-07)": "حماية المعطيات الشخصية (القانون 18-07)",
    "Sécurisation des Accès Réseaux": "تأمين الوصول إلى الشبكات",
    "Protection des SI d'Entreprise": "حماية نظم معلومات المؤسسات",
    "Administration ESET Antivirus": "إدارة مضاد الفيروسات ESET",
    "Développement Web": "تطوير الويب",
    "Langages de Programmation": "لغات البرمجة",
    "Frameworks & Mobile": "أطر العمل والموبايل",
    "Frameworks Client & Mobile": "أطر العمل للواجهات والموبايل",
    "Expertise Principale": "الخبرة الرئيسية",
    "Data & Intelligence Artificielle": "البيانات والذكاء الاصطناعي",
    "BI, SGBD, Data Analytics & GenAI": "ذكاء الأعمال وقواعد البيانات وتحليل البيانات والذكاء التوليدي",
    "Data Mining & Analyse Python": "تنقيب البيانات والتحليل بـ Python",
    "Automation IA avec N8n": "الأتمتة بالذكاء الاصطناعي عبر N8n",
    "CrewAI / Agents Multi-IA": "CrewAI / وكلاء متعددو الذكاء الاصطناعي",
    "CMS, LMS & Bureautique": "أنظمة المحتوى والتعلم والأدوات المكتبية",
    "Plateformes web & Office": "منصات الويب والمكتب",
    "Excel Avancé & VBA Professionnel": "إكسل متقدم و VBA مهني",
    "MS Project (Gestion de projet)": "MS Project (إدارة المشاريع)",
    "Méthodes & DevOps": "المنهجيات و DevOps",
    "Architecture & DevOps": "المعمارية و DevOps",
    "UML, Merise (Modélisation)": "UML و Merise (النمذجة)",
    "BPMN 2.0 (Processus Métier)": "BPMN 2.0 (عمليات الأعمال)",
    "Langues de Travail & Communication": "لغات العمل والتواصل",
    "Arabe (Maternelle — Fusha & Dialecte)": "العربية (لغة أم — فصحى ولهجة)",
    "Français (Très bien — Lu, Parlé, Écrit)": "الفرنسية (جيد جداً — قراءة ومحادثة وكتابة)",
    "Anglais (Bien — Lu, Parlé, Écrit)": "الإنجليزية (جيد — قراءة ومحادثة وكتابة)",
    "Roumain (Bien — Lu, Parlé, Écrit)": "الرومانية (جيد — قراءة ومحادثة وكتابة)",
    "Catalogue d'Interventions": "سجل التدخلات",
    "Formations Dispensées & Expériences": "التدريب المقدَّم والخبرات",
    "J'interviens de manière récurrente auprès d'organismes de formation d'élite et de grands comptes. Filtrez par catégorie ou recherchez une thématique.": "أتدخل بشكل دوري لدى مؤسسات تكوين نخبوية وحسابات كبرى. صفّوا حسب الفئة أو ابحثوا عن موضوع.",
    "Tout voir": "عرض الكل",
    "Sécurité & RGPD": "الأمن وحماية المعطيات",
    "Dév Web & Mobile": "تطوير الويب والموبايل",
    "Data & BI & IA": "البيانات وBI والذكاء الاصطناعي",
    "Bureautique Pro": "المكتبية الاحترافية",
    "Processus / DevOps": "العمليات / DevOps",
    "Affichage de": "عرض",
    "sessions sur": "جلسات من أصل",
    "enregistrées": "مسجّلة",
    "Réinitialiser les filtres": "إعادة تعيين الفلاتر",
    "Période": "الفترة",
    "Établissement": "المؤسسة",
    "Module Dispensé": "الوحدة المقدَّمة",
    "Client Finaux": "العملاء النهائيون",
    "Aucun résultat.": "لا توجد نتائج.",
    "Établissement:": "المؤسسة:",
    "Rechercher (ex: Excel, Cyber, Power BI, Halliburton...)": "ابحث (مثال: Excel، الأمن السيبراني، Power BI، Halliburton...)",
    "Chronologie de Carrière": "الخط الزمني للمسار",
    "Formations & Parcours Académique": "الشهادات والمسار الأكاديمي",
    "Janv. 2026": "جانفي 2026",
    "Nov. 2025": "نوفمبر 2025",
    "Janv. 2025": "جانفي 2025",
    "Janv. 2018": "جانفي 2018",
    "Janv. 2013": "جانفي 2013",
    "Sept. 2010": "سبتمبر 2010",
    "Janv. 2008": "جانفي 2008",
    "Consultant Informatique Senior": "مستشار أول في المعلوماتية",
    "Animation de modules de haut niveau et de séminaires d'architecture logicielle.": "تنشيط وحدات رفيعة المستوى وندوات في هندسة البرمجيات.",
    "Enseignant Universitaire": "أستاذ جامعي",
    "Université Alger 2 · Alger, Algérie": "جامعة الجزائر 2 · الجزائر، الجزائر",
    "Enseignement académique théorique et pratique des langages informatiques et bases de données.": "تدريس أكاديمي نظري وتطبيقي للغات البرمجة وقواعد البيانات.",
    "Consultant Informatique CACI": "مستشار معلوماتي لدى CACI",
    "CACI Formation (Chambre Algérienne de Commerce)": "تكوين CACI (غرفة التجارة والصناعة الجزائرية)",
    "Formateur de cadres d'entreprises sur la législation Loi 18-07 et l'IA appliquée.": "مدرّب إطارات الشركات حول قانون 18-07 والذكاء الاصطناعي التطبيقي.",
    "Directeur d'Établissement": "مدير مؤسسة",
    "École de Formation Professionnelle Informica · Boumerdes": "مدرسة التكوين المهني إنفورميكا · بومرداس",
    "Gestion globale, conception de syllabus pédagogiques agréés et encadrement des apprenants.": "تسيير شامل، تصميم مناهج بيداغوجية معتمدة وتأطير المتكوّنين.",
    "Master Professionnel Informatique & CSI": "ماستر مهني في المعلوماتية ونظم المعلومات",
    "Université 3IL – Limoges, France": "جامعة 3IL – ليموج، فرنسا",
    "Spécialisation en Conception de Systèmes d'Information et architecture distribuée.": "تخصص في تصميم نظم المعلومات والمعمارية الموزعة.",
    "Ingénieur Professionnel & European Bachelor": "مهندس محترف وبكالوريوس أوروبي",
    "Bases approfondies de génie logiciel, réseaux informatiques et administration système.": "أسس معمّقة في هندسة البرمجيات والشبكات المعلوماتية وإدارة الأنظمة.",
    "Technicien Supérieur Informatique": "تقني سامٍ في المعلوماتية",
    "UNSFP El-Mohammadia · Algérie": "UNSFP المحمدية · الجزائر",
    "Option : Bases de Données (Conception, requêtes complexes et modélisation).": "تخصص: قواعد البيانات (التصميم، الاستعلامات المعقدة والنمذجة).",
    "Références Clés": "مراجع رئيسية",
    "Ils m'ont fait confiance": "وضعوا ثقتهم بي",
    "Multinationales, ministères, aéroports, ports, universités — 50+ grandes entreprises clientes en Algérie.": "شركات متعددة الجنسيات، وزارات، مطارات، موانئ، جامعات — أكثر من 50 شركة كبرى عميلة في الجزائر.",
    "Windev Perfectionnement Avancé": "Windev متقدم",
    "Systèmes Windows & Bureautique": "أنظمة ويندوز والأدوات المكتبية",
    "Cybersécurité & Audit SI": "الأمن السيبراني وتدقيق نظم المعلومات",
    "Hébergement · Serveurs Web": "الاستضافة · خوادم الويب",
    "Loi 18-07 · IA Appliquée": "القانون 18-07 · الذكاء الاصطناعي التطبيقي",
    "App Mobile Multiplateforme": "تطبيق موبايل متعدد المنصات",
    "GED pour établissement 5 étoiles": "إدارة إلكترونية للوثائق لمؤسسة 5 نجوم",
    "Développement Dot Net C#": "تطوير Dot Net C#",
    "Excel Avancé · Loi 18-07": "إكسل متقدم · القانون 18-07",
    "PowerPoint & Bureautique": "PowerPoint والأدوات المكتبية",
    "Attestations de bonne exécution disponibles": "شهادات حسن التنفيذ متوفرة",
    "Des certificats officiels téléchargeables — Royal School, Kaizen, CNAT, AGA, EGIC IBN SINA...": "شهادات رسمية قابلة للتحميل — Royal School، Kaizen، CNAT، AGA، EGIC IBN SINA...",
    "Prendre Contact": "تواصل معي",
    "Lançons votre projet ou formation": "لنطلق مشروعك أو تدريبك",
    "Besoin d'un programme de formation sur-mesure pour vos équipes ? D'un audit IT ? D'une mission de conseil en Oman ou dans le Golfe ? Contactez-moi directement.": "تحتاجون برنامج تدريب مخصصاً لفرقكم؟ تدقيقاً تقنياً؟ مهمة استشارات في عُمان أو الخليج؟ تواصلوا معي مباشرة.",
    "Téléphone mobile": "الهاتف المحمول",
    "Courrier Électronique": "البريد الإلكتروني",
    "Localisation": "الموقع",
    "Boudouaou, Boumerdes, Algérie": "بودواو، بومرداس، الجزائر",
    "Mobilité sur toute la wilaya d'Alger et de Boumerdes": "التنقل في كامل ولايتي الجزائر وبومرداس",
    "Disponibilité Internationale": "الجاهزية الدولية",
    "🇴🇲 Oman · 🇦🇪 UAE · 🇸🇦 KSA · 🇶🇦 Qatar — Golfe & MENA": "🇴🇲 عُمان · 🇦🇪 الإمارات · 🇸🇦 السعودية · 🇶🇦 قطر — الخليج والشرق الأوسط",
    "Formations en arabe (fusha) et en anglais · Présentiel ou distanciel": "تدريب بالعربية (الفصحى) والإنجليزية · حضوري أو عن بُعد",
    "Besoin d'un entretien immédiat ?": "تحتاجون مقابلة فورية؟",
    "Joignable du samedi au jeudi de 8h00 à 18h00 (GMT+1). WhatsApp disponible.": "يمكنكم الوصول إليّ من السبت إلى الخميس من 8:00 إلى 18:00 (GMT+1). واتساب متاح.",
    "Appeler directement": "اتصل مباشرة",
    "Nom Complet": "الاسم الكامل",
    "Entreprise / Organisme": "الشركة / المؤسسة",
    "Adresse Électronique": "البريد الإلكتروني",
    "Téléphone / WhatsApp": "الهاتف / واتساب",
    "Objet de votre demande": "موضوع طلبكم",
    "Demande de formation d'équipe": "طلب تدريب فريق",
    "🇴🇲 Formation / Mission en Oman ou dans le Golfe": "🇴🇲 تدريب / مهمة في عُمان أو الخليج",
    "Mise en conformité Loi 18-07 / RGPD": "الامتثال للقانون 18-07 / RGPD",
    "Mission de conseil ou d'Audit IT": "مهمة استشارات أو تدقيق تقني",
    "Collaboration Universitaire / Académique": "تعاون جامعي / أكاديمي",
    "Autre demande professionnelle": "طلب مهني آخر",
    "Détails de votre besoin": "تفاصيل حاجتكم",
    "Envoyer le message": "إرسال الرسالة",
    "Décrivez les thématiques, le public cible (ingénieurs, cadres dirigeants), le nombre de personnes, la localisation (Algérie, Oman...) et la période souhaitée...": "صفوا المواضيع، الجمهور المستهدف (مهندسون، إطارات مسيرة)، عدد الأشخاص، الموقع (الجزائر، عُمان...) والفترة المطلوبة...",
    "Data & AI Trainer · IT Consultant · Disponible Oman & Golfe": "مدرّب البيانات والذكاء الاصطناعي · مستشار تقنية معلومات · متاح في عُمان والخليج",
    "© 2026 Bouafia Rehabi. Tous droits réservés.": "© 2026 Bouafia Rehabi. جميع الحقوق محفوظة.",
    "Propulsé par": "مدعوم بـ",
    "Attestations Officielles": "الشهادات الرسمية",
    "Documents & Certificats de bonne exécution": "الوثائق وشهادات حسن التنفيذ",
    "Document officiel PDF": "وثيقة رسمية PDF",
    "Documents officiels — Cliquer pour télécharger": "وثائق رسمية — انقروا للتحميل",
    "💬 Discuter sur WhatsApp": "💬 الدردشة عبر واتساب",
    "Novembre 2024": "نوفمبر 2024",
    "Mai 2025": "ماي 2025",
    "Octobre 2012": "أكتوبر 2012",
    "Janvier 2025": "جانفي 2025",
    "Décembre 2024": "ديسمبر 2024",
    "Juin 2024": "جوان 2024",
    "AVRIL 2026": "AVRIL 2026",
    "Septembre 2025": "سبتمبر 2025",
    "Juin 2025": "جوان 2025",
    "Octobre 2025": "أكتوبر 2025",
    "Novembre 2016": "نوفمبر 2016",
    "Octobre 2024": "أكتوبر 2024",
    "Mars 2013": "مارس 2013",
    "Novembre 2011": "نوفمبر 2011",
    "Juin 2018": "جوان 2018",
    "Février 2024": "فيفري 2024",
    "Septembre 2023": "سبتمبر 2023",
    "Juin 2026": "جوان 2026",
    "Décembre 2025": "ديسمبر 2025",
    "Février 2025": "فيفري 2025",
    "Janvier 2024": "جانفي 2024",
    "Sept 2014": "سبتمبر 2014",
    "Avril 2015": "أفريل 2015",
    "Décembre 2023": "ديسمبر 2023",
    "Juin 2012-2016": "جوان 2012-2016",
    "MAI 2026": "MAI 2026",
    "Juillet 2024": "جويلية 2024",
    "Mars 2015": "مارس 2015",
    "Septembre 2024": "سبتمبر 2024",
    "Juillet 2025": "جويلية 2025",
    "Novembre 2017": "نوفمبر 2017",
    "Mars 2018": "مارس 2018",
    "Février 2026": "فيفري 2026",
    "Octobre 2015": "أكتوبر 2015",
    "Avril 2025": "أفريل 2025",
    "Cadres Dirigeants Ingénieur": "إطارات ومهندسون",
    "Cadres Dirigeants": "إطارات مسيّرة",
    "Cadre Dirigeant": "إطار مسيّر",
    "Ingénieur": "مهندس",
    "Ingénieur IT": "مهندس إعلام آلي",
    "Ingénieur, Master": "مهندسون، ماستر",
    "Ingénieur, Technicien": "مهندسون، تقنيون",
    "Master": "ماستر",
    "Master Ingénieur": "ماستر ومهندسون",
    "BTS, Ingénieur": "BTS، مهندسون",
    "N/M": "غير محدد",
    "Technicien": "تقني",
    "Technicien Supérieur": "تقني سامٍ",
    "Ministère de la Santé": "وزارة الصحة",
    "Port Alger": "ميناء الجزائر",
    "Travaux Publics": "الأشغال العمومية",
    "Hôpital ValDydra": "مستشفى فالديدرة",
    "Metro Alger": "مترو الجزائر",
    "Algérie Telecom": "اتصالات الجزائر",
    "Public": "العموم",
    "PROTECTION DES DONNEES PERSONNELS": "حماية المعطيات الشخصية",
    "PROTECTION DES DONNEES PERSONNELS Loi 18-07": "حماية المعطيات الشخصية القانون 18-07",
    "Cyber Sécurité": "الأمن السيبراني",
    "Cybersécurité": "الأمن السيبراني",
    "Data Mining / Python": "تنقيب البيانات / Python",
    "Excel Avancé": "إكسل متقدم",
    "Excel Avancée": "إكسل متقدم",
    "Excel-Avancer": "إكسل متقدم",
    "Excel Perfectionnement (Avancé)": "إكسل إتقان (متقدم)",
    "Excel Initiation": "إكسل تأسيسي",
    "Excel Niveau 2": "إكسل مستوى 2",
    "Microsoft Word Niveau 2": "مايكروسوفت وورد مستوى 2",
    "Système Windows Niveau 2": "نظام ويندوز مستوى 2",
    "Windev Perfectionnement": "Windev متقدم",
    "Protection des SI": "حماية نظم المعلومات",
    "CMS Joomla Niveau 1": "نظام جوملا مستوى 1",
    "App Mobile Multiplateforme Flex 4.6": "تطبيق موبايل متعدد المنصات Flex 4.6",
    "HEBERGEMENT ET MESSAGERIE": "الاستضافة والمراسلة",
    "JAVA Edition Entreprise": "جافا نسخة المؤسسات",
    "security": "أمن",
    "dev": "تطوير",
    "data": "بيانات",
    "office": "مكتبية",
    "management": "تسيير",
    "Attestation de Bonne Exécution — Bouafia Rehabi": "شهادة حسن التنفيذ — Bouafia Rehabi",
    "Attestation de Bonne Exécution — Bouafia": "شهادة حسن التنفيذ — Bouafia",
    "Attestation de Bonne Exécution — Doc 03": "شهادة حسن التنفيذ — وثيقة 03",
    "Attestation de Bonne Exécution — Doc 04": "شهادة حسن التنفيذ — وثيقة 04",
    "Attestation — SCN 01": "شهادة — SCN 01",
    "Attestation — SCN 02": "شهادة — SCN 02",
    "Attestation — SCN 03": "شهادة — SCN 03",
    "Attestation — SCN 04": "شهادة — SCN 04",
    "Attestation — SCN 05": "شهادة — SCN 05",
    "Attestation — SCN 06": "شهادة — SCN 06",
    "Attestation — SCN 07": "شهادة — SCN 07",
    "Attestation — SCN 08": "شهادة — SCN 08",
    "Attestation — SCN 09": "شهادة — SCN 09",
    "Attestation — SCN 10": "شهادة — SCN 10",
    "Fiches Techniques des Modules": "البطاقات التقنية للوحدات",
    "Programmes de Formation Téléchargeables": "برامج تدريب قابلة للتحميل",
    "Chaque module dispose d'une fiche technique détaillée : objectifs, programme, durée, public cible et prérequis. Les programmes sont ajustés à votre contexte après diagnostic.": "لكل وحدة بطاقة تقنية مفصّلة: الأهداف، البرنامج، المدة، الجمهور المستهدف والشروط القبلية. تُعدَّل البرامج وفق سياقكم بعد التشخيص.",
    "Besoin d'un programme sur-mesure ?": "تحتاجون برنامجاً مخصصاً؟",
    "— j'ajuste le contenu à vos données et à votre secteur.": "— أُكيّف المحتوى مع بياناتكم وقطاعكم.",
    "Contactez-moi": "تواصلوا معي",
    "Expert Achats": "خبير المشتريات",
    "Expert Commercial": "خبير المبيعات",
    "Expert Direction": "خبير الإدارة المسيرة",
    "Expert Finance": "خبير المالية",
    "Expert Formations": "خبير التدريب",
    "Expert IT": "خبير تقنية المعلومات",
    "Expert Logistique": "خبير اللوجستيك",
    "Expert Marketing": "خبير التسويق",
    "Expert Production": "خبير الإنتاج",
    "30 problèmes résolus · 5 jours (35 h)": "30 مشكلة محلولة · 5 أيام (35 ساعة)",
    "Programmes d'expertise par la pratique : Excel, Power BI, Python, SQL et IA appliqués aux problèmes réels du métier.": "برامج خبرة عملية: Excel و Power BI و Python و SQL والذكاء الاصطناعي التطبيقي على مشكلات المهنة الحقيقية.",
    "IA": "ذكاء اصطناعي"
  }
};

  var HEAD_META = {
  "en": {
    "title": "Bouafia Rehabi | Data & AI Trainer · IT Consultant",
    "ogDesc": "16+ years of technological impact. Data & AI trainer available for missions in Oman and the Gulf. Expert in Excel, Power BI, Python, SQL, RAG, LangChain, CrewAI."
  },
  "ar": {
    "title": "Bouafia Rehabi | مدرّب البيانات والذكاء الاصطناعي · مستشار تقنية معلومات",
    "ogDesc": "أكثر من 16 سنة من التأثير التكنولوجي. مدرّب بيانات وذكاء اصطناعي متاح لمهام في عُمان والخليج. خبير Excel وPower BI وPython وSQL وRAG وLangChain وCrewAI."
  }
};

  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, CODE: 1, PRE: 1, TEXTAREA: 1, TEMPLATE: 1 };
  var origText = new WeakMap();
  var origAttrs = new WeakMap();
  var headOrig = null;
  var currentLang = 'fr';
  var observer = null;
  var pending = false;

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

  function dictFor(lang) { return I18N[lang] || null; }

  function inSkip(el) {
    while (el && el.nodeType === 1) {
      if (SKIP_TAGS[el.tagName]) return true;
      el = el.parentElement;
    }
    return false;
  }

  function eachTextNode(root, cb) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return inSkip(n.parentElement) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    for (var i = 0; i < nodes.length; i++) cb(nodes[i]);
  }

  function eachElement(root, cb) {
    var els = root.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      if (!SKIP_TAGS[els[i].tagName]) cb(els[i]);
    }
  }

  function translateTextNode(node, dict) {
    var raw = node.nodeValue;
    var key = norm(raw);
    var tr = dict[key];
    if (tr === undefined || tr === key) return;
    if (!origText.has(node)) origText.set(node, raw);
    var lead = /^\s/.test(raw) ? ' ' : '';
    var trail = /\s$/.test(raw) ? ' ' : '';
    node.nodeValue = lead + tr + trail;
  }

  function restoreTextNode(node) {
    var o = origText.get(node);
    if (o !== undefined) node.nodeValue = o;
  }

  function translateAttrs(el, dict) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      var v = el.getAttribute(a);
      if (!v || !v.trim()) continue;
      var key = norm(v);
      var tr = dict[key];
      if (tr === undefined || tr === key) continue;
      var store = origAttrs.get(el);
      if (!store) { store = {}; origAttrs.set(el, store); }
      if (!(a in store)) store[a] = v;
      el.setAttribute(a, tr);
    }
  }

  function restoreAttrs(el) {
    var store = origAttrs.get(el);
    if (!store) return;
    for (var a in store) el.setAttribute(a, store[a]);
  }

  function applyHead(lang) {
    var titleEl = document.querySelector('title');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (!headOrig) {
      headOrig = {
        title: titleEl ? titleEl.textContent : '',
        ogDesc: ogDesc ? ogDesc.getAttribute('content') : ''
      };
    }
    var meta = (lang === 'fr') ? headOrig : HEAD_META[lang];
    if (!meta) return;
    if (titleEl && meta.title) titleEl.textContent = meta.title;
    if (ogDesc && meta.ogDesc) ogDesc.setAttribute('content', meta.ogDesc);
  }

  function applyTo(root, lang) {
    if (lang === 'fr') {
      eachTextNode(root, restoreTextNode);
      eachElement(root, restoreAttrs);
      return;
    }
    var dict = dictFor(lang);
    if (!dict) return;
    /* Restaure d'abord le français original (permet les changements directs AR <-> EN) */
    eachTextNode(root, restoreTextNode);
    eachElement(root, restoreAttrs);
    eachTextNode(root, function (n) { translateTextNode(n, dict); });
    eachElement(root, function (el) { translateAttrs(el, dict); });
  }

  /* Police arabe : améliore le rendu quand le site passe en RTL */
  function injectArabicFont() {
    if (document.getElementById('i18n-ar-style')) return;
    var st = document.createElement('style');
    st.id = 'i18n-ar-style';
    st.textContent = 'html[lang="ar"] body { font-family: "Noto Kufi Arabic", "Segoe UI", Tahoma, sans-serif; }';
    document.head.appendChild(st);
  }

  function ensureObserver() {
    if (observer || !document.body || typeof MutationObserver === 'undefined') return;
    observer = new MutationObserver(function () {
      if (currentLang === 'fr' || pending) return;
      pending = true;
      setTimeout(function () {
        pending = false;
        applyTo(document.body, currentLang);
      }, 80);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* API globale utilisée par index.html (switchLang) */
  window.applyTranslations = function (lang) {
    currentLang = (lang === 'en' || lang === 'ar') ? lang : 'fr';
    try { document.documentElement.lang = currentLang; } catch (e) {}
    if (document.body) applyTo(document.body, currentLang);
    applyHead(currentLang);
    if (currentLang === 'ar') injectArabicFont();
    ensureObserver();
  };

  /* Dictionnaires exposés pour maintenance */
  window.I18N = I18N;

  /* Initialisation : applique la langue mémorisée après le premier rendu */
  function init() {
    var saved = 'fr';
    try { saved = localStorage.getItem('siteLang') || 'fr'; } catch (e) {}
    if (saved !== 'fr') {
      try { document.documentElement.dir = (saved === 'ar') ? 'rtl' : 'ltr'; } catch (e) {}
      window.applyTranslations(saved);
    }
    ensureObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 250); });
  } else {
    setTimeout(init, 250);
  }
})();
