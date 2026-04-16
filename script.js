// Kursens moduler och innehåll med alla 8 moduler
const modules = [
    {
        id: 1,
        title: "Hårdvara & Mjukvara",
        subtitle: "Vad är det och hur hänger de ihop?",
        sections: [
            {
                title: "Vad är hårdvara?",
                analogy: "Tänk på hårdvaran som ett verktyg – något fysiskt du kan ta i händerna och använda.",
                content: "Hårdvara är de fysiska delarna av datorn som du kan se och röra på. Det är som 'byggstenarna' i datorn. Utan hårdvara finns det inget att arbeta med.",
                example: "Exempel på hårdvara: \n- Skärmen (displayen) – det du ser på\n- Tangentbordet – det du skriver på\n- Musen – det du navigerar med\n- Procesorn (CPU) – hjärnan som räknar\n- RAM (arbetsminne) – snabbt minne för just nu\n- Hårddisken – långsamt minne för sparning\n- Grafikkort – gör bilderna vackrare\n- Högtalare – för ljud\n- Webbkamera – för att ta bilder/video"
            },
            {
                title: "Vad är mjukvara?",
                analogy: "Om hårdvara är ett verktyg, så är mjukvara instruktionerna för hur man använder verktyget.",
                content: "Mjukvara är alla program och instruktioner som datorn använder. Det är helt immateriellt – du kan inte ta det i händerna, men du kan se resultatet när det körs. Mjukvara är information som talar om för hårdvaran vad den ska göra.",
                example: "Exempel på mjukvara: \n- Windows eller macOS (själva styrsystemet)\n- Google Chrome eller Firefox (webbläsare)\n- Microsoft Word eller Google Docs (skrivprogram)\n- Spotify (musikspelare)\n- Adobe Photoshop (bildbehandling)\n- Spel som Minecraft eller Fortnite\n- Kalkylark som Excel\n- E-postprogram"
            },
            {
                title: "Hur hänger de ihop?",
                analogy: "Hårdvaran och mjukvaran är som två delar av samma team – de behöver varandra för att lyckas.",
                content: "En dator är egentligen två saker som fungerar tillsammans:\n1. HÅRDVARA: Den fysiska maskinen som gör beräkningar\n2. MJUKVARA: Instruktioner som säger vad maskinen ska göra\n\nVarken hårdvara eller mjukvara fungerar utan den andra. Du behöver båda.",
                example: "Exempel 1: Att spela musik\n- Hårdvara: högtalare, ljudkort, processor\n- Mjukvara: musikspelarprogrammet (t.ex. Spotify)\n\nExempel 2: Att skriva ett brev\n- Hårdvara: tangentbord, skärm, processor\n- Mjukvara: Word-programmet\n\nExempel 3: Att titta på en film\n- Hårdvara: skärmen, procesorn, grafikkort\n- Mjukvara: filmspelarprogrammet (t.ex. Netflix)"
            },
            {
                title: "De viktigaste hårdvarukomponenterna",
                analogy: "Tänk på datorn som ett system av enheter – varje del har en viktig roll.",
                content: "Här är de viktigaste sakerna att veta om:",
                example: "PROCESSOR (CPU) – Hjärnan\n- Gör alla beräkningar\n- Snabbare processor = datorn går snabbare\n- Exempel: Intel i5, AMD Ryzen\n\nMINNE (RAM) – Kortidsminnet\n- Mycket snabbt minne för saker som körs just nu\n- Mer RAM = du kan ha fler program öppna\n- Försvinner när du stänger av datorn\n- Exempel: 8GB, 16GB, 32GB\n\nHÅRDDISK eller SSD – Långtidsminnet\n- Sparar allt permanent\n- Försvinner INTE när du stänger av datorn\n- SSD är snabbare än gamla hårddiskar\n- Exempel: 256GB, 512GB, 1TB\n\nSKÄRM (Monitor) – Utmatningen\n- Det du ser\n- Olika storlekar och kvaliteter\n- Exempel: 24 tum, 27 tum\n\nTANGENTBORD och MUS – Inmatningen\n- Hur du för in information\n- Du använder dessa för att kontrollera datorn"
            }
        ],
        quiz: {
            question: "Vilken av dessa är hårdvara?",
            options: [
                { text: "Google Chrome", correct: false },
                { text: "Tangentbordet", correct: true },
                { text: "Windows 11", correct: false }
            ],
            feedback: { correct: "Rätt! Tangentbordet är något fysiskt du kan ta på, så det är hårdvara. 🎉", incorrect: "Nästan! Hårdvara är något du kan ta och röra på. Tangentbordet är ett exempel – både Chrome och Windows är mjukvara (program)." }
        }
    },
    {
        id: 2,
        title: "Operativsystem",
        subtitle: "Vad är ett OS?  Windows 11 och macOS",
        sections: [
            {
                title: "Vad är ett operativsystem?",
                analogy: "Tänk på operativsystemet som en styrman på ett skepp. Det navigerar och styr allt – vilka program som får köra, när de får köra, hur de delar på resurserna, och vart allt ska gå.",
                content: "Operativsystemet (OS:et) är den viktigaste mjukvaran på din dator. Det är systemet som styr ALLT – det säger åt programmen vad de får göra, det förhindrar att saker kör på varandra, och det hanterar filer och resurser.",
                example: "De två vanligaste operativsystemen är:\n- Windows (på många bärbara och stationära datorer)\n- macOS (på Apple-datorer)"
            },
            {
                title: "Windows 11",
                content: "Windows 11 är Microsofts senaste operativsystem och det vanligaste OS på världen. Det körs på miljoner datorer överallt.",
                example: "Du hittar Windows på:\n- Bärbara datorer (laptops)\n- Stationära datorer (skrivbordsdatorer)\n- Även vissa mindre enheter som tablets\n\nWINDOWS SKÄRMEN FÖRKLARAD:\n- Start-knapp (nederst) – klicka här för att söka program\n- Taskbar – visar programmen som körs\n- Desktop – här placerar du mappar och genvägar\n- System Tray – visar klocka, volym, wifi-status"
            },
            {
                title: "macOS",
                content: "macOS är Apples operativsystem som körs på Mac-datorer. Det är känt för att vara väldigt användarvänligt, säkert och ha en snygg design.",
                example: "Du hittar macOS på:\n- MacBook-laptops\n- iMacs\n- Mac Studio och Mac Mini\n\nmacOS SKÄRMEN FÖRKLARAD:\n- Dock (nederst på skärmen) – visar dina favoritprogram\n- Menu Bar (överst) – visar tid, volym, wifi, och mera\n- Finder – filhanteraren (som Windows Explorer)\n- Launchpad – alla installerade program"
            },
            {
                title: "Andra operativsystem",
                content: "Det finns fler operativsystem än Windows och macOS:",
                example: "LINUX\n- Gratis och öppen källkod\n- Använd av många proffs och mycket vanligt på servrar\n- Exempel: Ubuntu, Fedora\n\nchromeOS\n- Operativsystem för Chromebooks\n- Fokuserar på webben och Google-appar\n\niOS och Android\n- För smartphones och tablets\n- Vi kommer inte att tala om dessa OS här, men kan vara bra att veta om"
            },
            {
                title: "Vad gör operativsystemet för dig?",
                content: "Operativsystemet är din datorassistent – det gör många viktiga saker:",
                example: "1. FILHANTERING: Håller ordning på dina dokument, bilder och program\n2. PROGRAM: Låter dig öppna och använda dina program\n3. RESURSER: Delar upp processor-kraft, RAM och lagring mellan program\n4. UTSKRIFTER: Hanterar utskrifter till skrivare\n5. SÄKERHET: Skyddar datorn från farlig kod och otillförlitlig åtkomst\n6. UPPDATERINGAR: Hämtar nya säkerhetsfixar och förbättringar\n7. ANVÄNDARGRÄNSSNITT: Ger dig en snygg och lätt att använda miljö"
            }
        ],
        quiz: {
            question: "Vilket av dessa är ett operativsystem?",
            options: [
                { text: "Microsoft Word", correct: false },
                { text: "Windows 11", correct: true },
                { text: "Google Chrome", correct: false }
            ],
            feedback: { correct: "Perfekt! Windows 11 är ett operativsystem som styr datorn. Du är med! 🚀", incorrect: "Nästan! Ett operativsystem är systemet som styr HELA datorn. Windows 11 är ett exempel – det är det som startar när du startar datorn." }
        }
    },
    {
        id: 3,
        title: "Filhantering",
        subtitle: "Spara, öppna, kopiera, flytta och byta namn på filer",
        sections: [
            {
                title: "Vad är en fil och en mapp?",
                analogy: "En fil är som ett dokument – något konkret. En mapp är som ett arkivskåp där du lagrar dokument. Du kan ha mappar inuti mappar för att hålla bättre ordning.",
                content: "Allt du sparar på datorn är filer. En fil kan vara ett dokument, ett foto, en video, musik, ett program, eller nästan vad som helst. Mappar (även kallade kataloger eller folders) är behållare som innehåller filer eller andra mappar.",
                example: "Exempel på filstruktur:\n- Mapp: 'Mina dokument'\n  - Fil: 'Mitt CV.docx'\n  - Fil: 'Brev till banken.docx'\n  - Mapp: 'Foto'\n    - Fil: 'Semester2024.jpg'\n    - Fil: 'Familjekväll.jpg'"
            },
            {
                title: "Öppna en fil",
                content: "Du kan öppna en fil på flera sätt:",
                example: "SÄTT 1 – Dubbelklick:\n- Hitta filen på datorn\n- Dubbelklicka på den\n- Datorn öppnar programmet och filen\n\nSÄTT 2 – Från ett program:\n- Öppna ett program (t.ex. Word)\n- Klicka Arkiv → Öppna\n- Välj filen\n\nSÄTT 3 – Högerklick:\n- Högerklicka på filen\n- Välj 'Öppna med' och välj ett program"
            },
            {
                title: "Spara en fil",
                content: "Att spara en fil är viktigt – utan att spara försvinner allt du gjort!",
                example: "FÖRSTA GÅNGEN DU SPARAR:\n1. Du arbetar i ett program (t.ex. Word)\n2. Du klickar på 'Arkiv' (File)\n3. Du väljer 'Spara som' eller 'Save As'\n4. Du väljer VAR du vill spara (vilken mapp)\n5. Du ger filen ett NAMN\n6. Du klickar 'Spara' eller 'Save'\n\nNÄSTA GÅNG:\n- Du kan bara trycka Ctrl+S (eller Cmd+S på Mac)\n- Det uppdaterar filen utan att fråga\n\nTIPS: Spara ofta – trycka Ctrl+S var 5-10:e minut!"
            },
            {
                title: "Kopiera en fil",
                content: "Kopiera skapar en identisk kopia av en fil på samma plats eller en annan plats.",
                example: "STEG-FÖR-STEG KOPIERA:\n1. Högerklicka på filen\n2. Välj 'Kopiera' (eller Ctrl+C)\n3. Gå till mappen där du vill kopian\n4. Högerklicka i tomma utrymmet\n5. Välj 'Klistra in' (eller Ctrl+V)\n\nRESULTAT: Du har nu två identiska filer!"
            },
            {
                title: "Flytta en fil",
                content: "Flytta tar bort filen från en plats och placerar den på en annan plats.",
                example: "STEG-FÖR-STEG FLYTTA:\n1. Högerklicka på filen\n2. Välj 'Klipp ut' (eller Ctrl+X)\n3. Gå till den nya mappen\n4. Högerklicka i tomma utrymmet\n5. Välj 'Klistra in' (eller Ctrl+V)\n\nRESULTAT: Filen är nu bara på en plats (den nya)\n\nSKILLNAD FRÅN KOPIERA:\nKOPIERA = Du får två filer (original och kopia)\nFLYTTA = Du får bara en fil på den nya platsen"
            },
            {
                title: "Byta namn på en fil",
                content: "Du kan enkelt byta namn på en fil när som helst.",
                example: "STEG-FÖR-STEG BYTA NAMN:\n1. Högerklicka på filen\n2. Välj 'Byta namn' eller 'Rename'\n3. Skriv in det nya namnet\n4. Tryck Enter\n\nVIKTIGT: Ändra INTE filändelsen!\nExempel: 'Foto.jpg' → 'Semester.jpg' ✓ OK\nExempel: 'Foto.jpg' → 'Semester.txt' ✗ DÅLIGT!\n\n(Vi lär oss om filändelser senare)"
            },
            {
                title: "Ta bort en fil",
                content: "Du kan ta bort filer du inte behöver längre.",
                example: "STEG-FÖR-STEG TA BORT:\n1. Högerklicka på filen\n2. Välj 'Ta bort' eller 'Delete'\n3. En dialog frågar om du är säker\n4. Klicka 'Ja' eller 'OK'\n\nVAD HÄNDER:\n- Filen går till 'Skräpkorg' eller 'Trash'\n- Du kan fortfarande återställa den från Skräpkorgen\n- Senare när du tömmer Skräpkorgen är den borta för alltid\n\nVARNING: Tänk två gånger innan du tar bort något viktigt!"
            }
        ],
        quiz: {
            question: "Vad är skillnaden mellan att kopiera och flytta en fil?",
            options: [
                { text: "Det finns ingen skillnad", correct: false },
                { text: "Kopiera skapar två filer; flytta lämnar bara en fil kvar", correct: true },
                { text: "Flytta är farligare", correct: false }
            ],
            feedback: { correct: "Exakt rätt! Kopiera = två filer, flytta = en fil på ny plats. Du är en proffs! 🌟", incorrect: "Nästan! Kopiera gör en kopia så du har två. Flytta är som att ta filen från en plats till en annan - bara en fil." }
        }
    },
    {
        id: 4,
        title: "Installera programvara",
        subtitle: "Hur man hittar, laddar ned och installerar program",
        sections: [
            {
                title: "Vad innebär det att \"installera\"?",
                analogy: "Att installera ett program är som att montera möbler – du följer instruktioner och placerar bitarna rätt så allt fungerar.",
                content: "När du installerar ett program, placerar datorn programfilerna på rätt plats så att programmet kan köra korrekt. Du kan inte bara \"kopiera\" en fil och förvänta dig att den fungerar – den behöver oftast installeras först.",
                example: "Exempel: Du kan inte bara \"ladda ner\" Spotify till din dator – du måste installera det så att det vet var allt ska vara."
            },
            {
                title: "Var hittar man program?",
                content: "Det finns många ställen att hämta program från:",
                example: "OFFICIELL BUTIK (SÄKRAST):\n- Windows: Microsoft Store\n- macOS: App Store\n- Båda är säkra eftersom de kontrollerar programmen\n\nDIREKT FÅ HEMSIDOR:\n- Google Chrome från google.com\n- Firefox från mozilla.org\n- LibreOffice från libreoffice.org\n\nFRI PROGRAMVARA:\n- github.com – många gratis program\n- sourceforge.net (äldre men pålitlig)\n\nVIDEO OCH MUSIK:\n- Adobe Creative Cloud\n- Spotify\n- Netflix"
            },
            {
                title: "Steg-för-steg: installera ett program",
                content: "Här är den vanligaste processen:",
                example: "FRÅN MICROSOFT STORE (Windows):\n1. Öppna Microsoft Store\n2. Sök efter programmet\n3. Klicka 'Hämta' eller 'Installera'\n4. Det installeras automatiskt!\n5. Programmet visas i Start-menyn\n\nFÖR MAC (App Store):\n1. Öppna App Store\n2. Sök efter programmet\n3. Klicka knappen nästa 'Hämta' eller 'Installera'\n4. Du kan behöva logga in med Apple ID\n5. Det installeras automatiskt\n\nFÖR-DIRECT INSTALLATION:\n1. Gå till programmets hemsida\n2. Klicka 'Hämta' eller 'Download'\n3. En installer-fil laddar ned\n4. Dubbelklicka på filen\n5. Följ anvisningarna (klicka 'Nästa')\n6. Det är klart!"
            },
            {
                title: "Avinstallera ett program",
                content: "Du kan ta bort program du inte vill ha längre:",
                example: "WINDOWS:\n1. Gå till Inställningar\n2. Klicka 'Program'\n3. Välj 'Program och funktioner'\n4. Hitta programmet du vill ta bort\n5. Klicka på det och välj 'Avinstallera'\n\nmacOS:\n1. Öppna mappen 'Program'\n2. Hitta programmet\n3. Dra det till Papperskorgen\n4. (Eller högerklicka → Flytta till Papperskorgen)"
            },
            {
                title: "Viktiga säkerhetstips",
                content: "Var försiktig när du installerar program:",
                example: "✓ PÅLITLIGT:\n- Använd Microsoft Store eller App Store\n- Installera från officiell hemsida\n- Använd välkända program\n\n✗ RISKABELT:\n- Okända hemsidor\n- 'Gratis' versioner av betalprogram\n- Pop-ups som säger 'Din dator är smittad!'\n- Installer som erbjuder extra program\n\nOBSERVERA:\nNär du klickar 'Nästa' genom en installer, läs vad som står! Avvisa extra program som du inte vill ha!"
            }
        ],
        quiz: {
            question: "Var bör du INTE hämta program från?",
            options: [
                { text: "Microsoft Store", correct: false },
                { text: "Officiella hemsidor", correct: false },
                { text: "Okända hemsidor från en random länk", correct: true }
            ],
            feedback: { correct: "Rätt! Okända hemsidor kan innehålla skadligt program. Du är väl påläst! 🔒", incorrect: "Nästan! Du bör vara försiktig och bara hämta från pålitliga källor som Microsoft Store, App Store eller officiella hemsidor." }
        }
    },
    {
        id: 5,
        title: "Uppdateringar",
        subtitle: "Varför uppdateringar är viktiga och hur man hanterar dem",
        sections: [
            {
                title: "Vad är en uppdatering?",
                analogy: "En uppdatering är som ett underhålls-besök hos mekaniken – man fixar småsaker, stänger säkerhetshål, och gör allt lite snabbare.",
                content: "En uppdatering är när utvecklarna av ett program eller operativsystem ger dig en ny version med förbättringar, buggfixar och säkerhetstillägg.",
               example: "EXEMPEL PÅ VAD EN UPPDATERING INNEHÅLLER:\n- Nya funktioner (nya knappar, nya verktyg)\n- Säkerhetsfixar (för att förhindra hacking)\n- Buggfixar (för att program inte kraschar)\n- Snabbare prestanda (programmet går snabbare)"
            },
            {
                title: "Varför är uppdateringar viktiga?",
                content: "Uppdateringar är MYCKET viktiga – faktiskt nästan viktigare än att spara dina filer!",
                example: "SÄKERHET (MEST VIKTIGT!):\n- Hackers och virus-skapare hittar säkerhetshål\n- Utvecklarna fixar dessa hål med uppdateringar\n- Utan uppdateringar kan datorn bli hackad och dina data stjälas\n\nPRESTANDA:\n- Uppdateringar gör ofta att datorn går snabbare\n- Gamla program blir mindre effektiva\n\nNYA FUNKTIONER:\n- Du får nya features att använda\n- Programmen blir bättre med tiden\n\nSTABILITET:\n- Buggar repareras så programmen inte kraschar\n- Allt fungerar smidigare tillsammans"
            },
            {
                title: "Så installerar du uppdateringar",
                content: "Uppdateringar är ofta automatiska, men här är hur du manuellt installerar dem:",
                example: "WINDOWS:\n1. Gå till Inställningar (Windows-nyckel + I)\n2. Välj 'System'\n3. Klicka 'Windows Update' \n4. Om det finns uppdateringar, klicka 'Ladda ned och installera nu'\n5. Datorn kan behöva starta om\n6. Det är klart!\n\nmacOS:\n1. Klicka på  Apple-menyn (överst vänster)\n2. Välj 'Systeminställningar'\n3. Klicka 'Allmänt'\n4. Klicka 'Mjukvaruuppdateringar'\n5. Om det finns uppdateringar, klicka 'Uppdatera nu'\n6. Datorn kan behöva starta om"
            },
            {
                title: "Program-uppdateringar",
                content: "Dina installerade program behöver också uppdateras:",
                example: "AUTOMATISKA UPPDATERINGAR:\n- Många program uppdateras automatiskt\n- Du märker bara att en ny version installeras\n\nMANUELLA UPPDATERINGAR:\n- Öppna programmet\n- Gå till Hjälp eller Inställningar\n- Titta efter 'Om' eller 'Uppdatera'\n- Klicka om det finns en uppdatering\n\nFÖR MAC:\n- App Store håller ofta uppdateringar automatiskt\n- Du kan också gå till App Store och klicka 'Uppdateringar'"
            },
            {
                title: "Tips och best practice",
                content: "Bästa sätt att hantera uppdateringar:",
                example: "✓ GODA TIPS:\n- Installera uppdateringar direkt när datorn erbjuder dem\n- Planera uppdateringar under en tid du inte arbetar (t.ex. kväll)\n- Spara dina filer före viktiga uppdateringar\n- Ha en stabil internetanslutning\n\n✗ DÅLIGA IDÉ:\n- Ignorera uppdateringar – de är viktiga!\n- Stäng av datorn under uppdatering\n- Dra ur strömkabeln under uppdatering\n- Installera många program samtidigt\n\nOBSERVERA:\n- Uppdateringar är ALLTID gratis\n- Om någon säger det kostar pengar, det är fejk!\n- Datorn kan starta om automatiskt – det är normalt"
            }
        ],
        quiz: {
            question: "Varför är säkerhetsuppdateringar viktiga?",
            options: [
                { text: "För att göra datorn snygg", correct: false },
                { text: "För att stoppa hackers från att skada datorn och stjäla data", correct: true },
                { text: "För att spara strålning", correct: false }
            ],
            feedback: { correct: "Perfekt svar! Säkerhetsupdateringar skyddar datorn från farlig kod och attacker. Du är säkerhetskonsult! 🛡️", incorrect: "Nästan! Säkerhetsupdateringar fixar hål så att hackers inte kan komma in och skada datorn eller stjäla dina uppgifter." }
        }
    },
    {
        id: 6,
        title: "Systemunderhåll",
        subtitle: "Hålla datorn snabb, säker och i trim",
        sections: [
            {
                title: "Varför behöver datorn underhåll?",
                analogy: "Precis som en bil behöver service för att köra bra, behöver datorn regelbundna kontroller för att fungera bra.",
                content: "Över tid samlar datorn på sig onödiga saker, temporära filer, och skräp som gör den långsammare. Underhål hjälper att hålla allt snyggt och snabbt.",
                example: "UTAN UNDERHÅL:\n- Datorn blir långsammare\n- Du kan få virus eller skadlig kod\n- Program kan krascha\n- Datorn blir varm och fan blir högljudd\n\nMED UNDERHÅL:\n- Datorn förblir snabb\n- Du är skyddad från virus\n- Allt fungerar smidigt\n- Datorn varar många år utan problem"
            },
            {
                title: "Rensa temporära filer",
                content: "Program lämnar ofta kvar temporära filer när de stängs. Det tar upp lagringsutrymme och gör datorn långsammare.",
                example: "WINDOWS:\n1. Högerklicka på C:-enheten (eller din stor hårddisk)\n2. Välj 'Egenskaper'\n3. Klicka 'Diskregistrering' eller 'Rensa upp'\n4. Eller: Inställningar → System → Lagring → Temporär fil\n5. Klicka 'Ta bort temporära filer'\n6. Bekräfta\n\nmacOS:\n1. Öppna 'Finder'\n2. Gå till biblioteket/Library (doldt, use Cmd+Shift+.)\n3. Du kan rensa cache-mappar\n4. ELLER använd CleanMyMac eller liknande app"
            },
            {
                title: "Skanna för virus",
                content: "Din dator bör regelbundet skannas för virus och skadlig kod.",
                example: "WINDOWS (WINDOWS DEFENDER – INBYGGT):\n1. Sök efter 'Windows Säkerhet' i Start-menyn\n2. Klicka på 'Virusskydd & hotskydd'\n3. Klicka 'Snabbskanning' eller 'Fullständig skanning'\n4. Vänta (kan ta 5-30 minuter)\n5. Om något hittas, låt Windows fixa det\n\nFREKVENS:\n- Kör snabb skanning 1 gång per vecka\n- Kör fullständig scanning 1 gång per månad\n\nmacOS:\n- macOS har inbyggt skydd (Gatekeeper)\n- XProtect kör automatisk skanning\n- Du kan också använda Malwarebytes eller Avast"
            },
            {
                title: "Sök lagringsutrymme",
                content: "Du bör ha minst 10-20% ledigt utrymme på din hårddisk för att datorn ska fungera bra.",
                example: "SÅ SER DU LAGRINGSUTRYMMET:\n\nWINDOWS:\n1. Inställningar → System → Lagring\n2. Du ser hur mycket utrymme som används\n\nmacOS:\n1. Äppelmeny → Om denna Mac\n2. Klicka på 'Lagring'\n3. Du ser en färgad ram som visar användning\n\nOM DET ÄR FULLT:\n- Ta bort gamla programfiler\n- Ta bort gamla foton och videos\n- Töm Skräpkorg eller Trash\n- Installera en större hårddisk (om nödvändigt)"
            },
            {
                title: "Uppdatera din dator",
                content: "Du måste hålla Windows/macOS och alla program uppdaterade:",
                example: "WINDOWS UPDATES:\n- Inställningar → System → Windows Update\n- Installera när datorn erbjuder det\n\nAPP-UPPDATERINGAR:\n- Microsoft Store automatiskt visar uppdateringar\n- Eller manuellt: Microsoft Store → Se dina appar\n\nmacOS UPDATES:\n- Äppelmeny → Systeminställningar → Allmänt\n- Klicka 'Mjukvaruuppdateringar'\n- App Store hanterar app-uppdateringar automatiskt"
            },
            {
                title: "Checklist för systemunderhål",
                content: "Gör detta regelbundet för att hålla datorn i topp!",
                example: "VARJE VECKA:\n✓ Uppdatera Windows/macOS\n✓ Kör virusskanning (snabb version)\n\nVARJE MÅNAD:\n✓ Rensa temporära filer\n✓ Kontrollera lagringsutrymme\n✓ Uppdatera alla program\n✓ Kör fullständig virusskanning\n\nVAR 3:E MÅNAD:\n✓ Kontrollera att datorn presterar bra\n✓ Avinstallera program du inte använder\n✓ Organisera dina filer och mappar\n\nVAR ÅRET:\n✓ Rensa inuti datorn från damm (om stationär)\n✓ Kontrollera hårdvaruhälsa"
            }
        ],
        quiz: {
            question: "Vad är den VIKTIGASTE delen av systemunderhål?",
            options: [
                { text: "Rensa temporära filer", correct: false },
                { text: "Hålla uppdateringar aktuella och skanna för virus", correct: true },
                { text: "Byta namn på mappar", correct: false }
            ],
            feedback: { correct: "Helt rätt! Uppdateringar och virusskanning är det viktigaste – det skyddar och snabbar upp din dator. Du är en datorexpert nu! 🌟", incorrect: "Nästan! Även om rengöring är bra, är uppdateringar och virusskanning det VIKTIGASTE för säkerhet och prestanda." }
        }
    },
    {
        id: 7,
        title: "Mappstruktur",
        subtitle: "Mappar inom mappar och så organiserar du dina filer",
        sections: [
            {
                title: "Vad är mappstruktur?",
                content: "Mappstruktur är hur du organiserar dina mappar – det är som ett arkivsystem. Du kan ha mappar inom mappar inom mappar för att hålla bra ordning.",
                example: "EXEMPEL PÅ ENKEL MAPPSTRUKTUR:\nMina dokument/\n├── Arbete/\n├── Privat/\n├── Foto/\n└── Video/"
            },
            {
                title: "Mappar inom mappar (undermappar)",
                content: "Du kan skapa mappar inuti andra mappar för att få ännu bättre organisering. Det kallas 'undermappar' eller 'submappar'.",
                example: "EXEMPEL MED UNDERMAPPAR:\nMina dokument/\n├── Arbete/\n│   ├── 2024/\n│   │   ├── Januari/\n│   │   └── Februari/\n│   └── 2023/\n├── Privat/\n│   ├── Avtal/\n│   └── Noteringar/\n├── Foto/\n│   ├── Familj/\n│   ├── Semester/\n│   └── Husdjur/\n└── Video/"
            },
            {
                title: "Hur man skapar en mappstruktur",
                content: "Det är lätt att skapa nya mappar:",
                example: "SKAPA EN NY MAPP:\n\nWINDOWS:\n1. Öppna 'Utforskaren' eller din filhanterare\n2. Navigera till den plats där du vill skapa mappen\n3. Högerklicka i tomma utrymmet\n4. Välj 'Ny' → 'Mapp'\n5. Skriv ett namn på mappen\n6. Tryck Enter\n\nmacOS:\n1. Öppna 'Finder'\n2. Gå till den plats där du vill skapa mappen\n3. Klicka på 'Arkiv' → 'Ny mapp'\n4. Skriv namn på mappen\n5. Tryck Enter"
            },
            {
                title: "Organiserings-tips",
                content: "Här är bra sätt att organisera dina mappar:",
                example: "GENOM KATEGORI:\nMina dokument/\n├── Arbete/\n├── Privat/\n├── Hobby/\n└── Arkiv/\n\nGENOM TID:\nFoto/\n├── 2024/\n├── 2023/\n├── 2022/\n└── Arkiv/\n\nGENOM PROJEKT:\nProjekt/\n├── Byggprojekt/\n├── Resor/\n├── Försäljning/\n└── Studier/\n\nBÄSTA TIPS:\n- Använd enkla, tydliga namn\n- Undvik för många nivåer (max 4-5)\n- Håll samma struktur året runt\n- Arkivera gamla saker i 'Arkiv' mapp"
            },
            {
                title: "Hitta filer i din struktur",
                content: "Med en bra mappstruktur är det enkelt att hitta dina filer senare:",
                example: "SÖK I WINDOWS:\n1. Öppna Utforskaren\n2. Klicka på sökrutan (överst)\n3. Skriv filnamn eller del av det\n4. Välja i resultaten\n\nSÖK I macOS:\n1. Öppna Finder\n2. Klicka på sökikonen (överst rätt)\n3. Skriv filnamn\n4. Välja i resultaten\n\nALTERNATIV:\n- Använd Ctrl+F (eller Cmd+F på Mac)\n- Bläddra manuellt genom mapparna\n- De flesta program har också en 'Öppna' dialog där du kan söka"
            },
            {
                title: "Säkerhetskopiera din struktur",
                content: "Är din mappstruktur viktig? Gör säkerhetskopior!",
                example: "VARFÖR SÄKERHETSKOPIOR:\n- Din hårddisk kan gå sönder\n- Viruser kan infektera dina filer\n- Du kan råka ta bort något\n- Datorn kan bli stulen\n\nSÄKER SÄKERHETSKOPIA:\n1. Skaffa en extern hårddisk eller USB-stick\n2. Kopiera dina viktigaste mappar dit\n3. Gör detta en gång i månaden\n\nALTERNATIV:\n- Molntjänster: OneDrive, Google Drive, iCloud\n- Dessa sparar automatiskt\n- Då kan du komma åt filerna från överallt"
            }
        ],
        quiz: {
            question: "Vad är en bra princip för mappstruktur?",
            options: [
                { text: "Allt i en stor mapp", correct: false },
                { text: "Organiserat med kategorierna och undermappar", correct: true },
                { text: "Det spelar ingen roll", correct: false }
            ],
            feedback: { correct: "Precis rätt! En bra struktur gör det enkelt att hitta dina filer senare. Bra gjort! 📁", incorrect: "Nästan! En bra organisering med kategorier och undermappar gör det mycket enklare att hitta dina filer när du behöver dem." }
        }
    },
    {
        id: 8,
        title: "Filtyper & Filändelser",
        subtitle: "Vad är .doc, .jpg, .pdf? Så visar du filändelser",
        sections: [
            {
                title: "Vad är en filändelse?",
                content: "En filändelse är de sista bokstäverna i ett filnamn. Det är som ett 'märke' som säger vilken typ av fil det är – och vilket program som ska öppna den.",
                example: "EXEMPEL:\nFoto.jpg – 'jpg' är filändelsen (en bildfil)\nDokument.docx – 'docx' är filändelsen (en Word-fil)\nMusik.mp3 – 'mp3' är filändelsen (en ljudfil)\nVideo.mp4 – 'mp4' är filändelsen (en videofil)\n\nSTRUKTUR:\nFilnamn.filändelse\nMittCV.docx\n│      │\n│      └─ filändelse (typ av fil)\n└──────── filnamn (ditt namn på filen)"
            },
            {
                title: "De viktigaste filtyperna",
                content: "Här är de vanligaste filtyperna du kommer stöta på:",
                example: "TEXT & DOKUMENT:\n.docx – Word-dokument\n.pdf – PDF (kan inte ändra lätt)\n.txt – Enkel textfil\n.xlsx – Excel-kalkylark\n\nBILDER:\n.jpg – Fotografi (små filer, lite sämre kvalitet)\n.png – Bilder med genomskinlighet (höga kvalitet)\n.gif – Animerad bild\n.bmp – Bitmap (stort filformat)\n\nLJUD:\n.mp3 – Vanligt audioformat\n.wav – Högkvalitets ljud\n.m4a – Apple-ljud\n\nVIDEO:\n.mp4 – Vanligt videoformat\n.avi – Äldre videoformat\n.mkv – Högkvalitets video \n.mov – Apple-video\n\nPROGRAM:\n.exe – Windows-program\n.msi – Windows installer\n.dmg – Mac-program\n.app – Mac-program\n\nKOMPRIMERARDE:\n.zip – Zip-fil (tryckt fil)\n.rar – RAR-fil (ännu en typ av komprimering)"
            },
            {
                title: "Vilken filändelse för vad?",
                content: "Du bör välja rätt filändelse beroende på vad du ska göra:",
                example: "OM DU VILL SKRIVA EN RAPPORT:\n✓ .docx (Word) – lätt att redigera senare\n✓ .pdf – när du är helt klar (ingen kan ändra lätt)\n✗ .txt – för enkelt\n\nOM DU VILL SKICKA EN BILD:\n✓ .jpg – små filer, går snabbt att skicka\n✓ .png – bättre kvalitet\n✗ .bmp – alltför stor fil!\n\nOM DU VILL SPARA MUSIK:\n✓ .mp3 – vanligt och alla kan spela det\n✓ .m4a – om du använder Apple\n✓ .wav – högt kvalitet men stora filer\n\nOM DU VILL SPARA MÅNGA FILER I EN:\n✓ .zip – komprimera för att spara utrymme\n✓ .rar – komprimering med flera delar\n\nOM DU VILL SÄKERSTÄLLA ATT INGEN ÄNDRAR:\n✓ .pdf – låst format, nästan omöjligt att ändra"
            },
            {
                title: "Hur man visar filändelser",
                content: "Du kan inte alltid se filändelser i datorn – men du kan slå på det!",
                example: "WINDOWS:\n1. Öppna Utforskaren\n2. Gå till 'Visa' (överst i menyn)\n3. Klicka i rutan 'Filtillägg' eller 'Filändelse'\n4. Nu ser du alla filändelser!\n\nmacOS:\n1. Öppna Finder\n2. Gå till 'Visa' (i menyn)\n3. Klicka 'Visa filändelser'\n4. Nu ser du alla filändelser!"
            },
            {
                title: "Ändra filändelse (VARNING!)",
                content: "Du KAN ändra en filändelse, men VAR FÖRSIKTIG! Om du ändrar fel kan filen sluta fungera.",
                example: "EXEMPEL PÅ VAD SOM KAN GÅ FEL:\nFoto.jpg → Foto.txt = Bildfilen fungerar inte som bild längre!\nDokument.docx → Dokument.pdf = Word kan inte öppna det!\n\nNÄR DU IBLAND BEHÖVER ÄNDRA:\n- Från .jpg till .png (samma typ av fil)\n- Från .docx till .pdf (när du är helt klar)\n\nHUR DU ÄNDRAR EN FILÄNDELSE:\n1. Högerklicka på filen\n2. Välj 'Byta namn'\n3. Ändra BARA filändelsen längst bak\n4. Tryck Enter\n5. Datorn frågar 'Är du säker?' - Säg 'Ja'\n\nRISK:\n- Om systemet inte känner till filändelsen, går filen sönder\n- Be någon erfaren innan du ändrar viktiga filer!"
            },
            {
                title: "Hur program öppnas baserat på filändelse",
                content: "När du dubbelklickar en fil, öppnas den med rätt program automatiskt:",
                example: "EXEMPEL:\n- .jpg-filer öppnas med Bildvisare eller Photoshop\n- .docx-filer öppnas med Microsoft Word\n- .mp3-filer öppnas med ett musikspelprogram\n- .pdf-filer öppnas med en PDF-läsare\n\nNÄR DATORN INTE VET:\n- Om du har en filändelse som datorn inte känner\n- Frågar den dig vilket program du vill använda\n- Du kan också högerklicka och välja 'Öppna med' för att välja program\n\nDU KAN ÄNDRA STANDARD-PROGRAM:\nWINDOWS:\n1. Högerklicka på en fil\n2. Välj 'Öppna med' → 'Välj ett annat program'\n3. Klicka i rutan 'Använd alltid denna app för att öppna...'\n4. Välj program och klicka OK\n\nmacOS:\n1. Högerklicka på filen\n2. Välj 'Öppna med'\n3. Välj ditt program\n4. För alla filer av denna typ: 'Öppna med' → Programnamn → 'Ändra alla'"
            }
        ],
        quiz: {
            question: "Vilken filändelse passar ett fotografi bäst?",
            options: [
                { text: ".docx", correct: false },
                { text: ".jpg eller .png", correct: true },
                { text: ".mp3", correct: false }
            ],
            feedback: { correct: "Rätt svar! .jpg och .png är perfekt för bilder. Du har lärt dig bra! 🖼️", incorrect: "Nästan! .jpg och .png är bildformat. .docx är för text, och .mp3 är för ljud." }
        }
    }
];

// Spåra användarens framsteg
let completedModules = [];
try {
    completedModules = JSON.parse(localStorage.getItem('completedModules')) || [];
} catch (e) {
    completedModules = [];
}
let currentModuleId = 1;
let currentSectionIndex = 0;

// Initiera kursen
document.addEventListener('DOMContentLoaded', function() {
    try {
        renderLandingPage();
        setupEventListeners();
        updateProgress();
    } catch (e) {
        document.getElementById('moduleContent').innerHTML =
            '<p style="color:red;padding:2rem;">Fel vid start: ' + e.message + '</p>';
    }
});

// Setup event listeners
function setupEventListeners() {
    document.querySelectorAll('.module-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const moduleId = parseInt(this.dataset.module);
            loadModule(moduleId);
        });
    });

    document.getElementById('nextBtn').addEventListener('click', nextSection);
    document.getElementById('prevBtn').addEventListener('click', prevSection);
}

// Ladda modul
function loadModule(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;

    currentModuleId = moduleId;
    currentSectionIndex = 0;

    // Uppdatera aktiv knapp
    document.querySelectorAll('.module-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-module="${moduleId}"]`).classList.add('active');

    renderSection();
}

// Render sektionen
function renderSection() {
    const module = modules.find(m => m.id === currentModuleId);
    const section = module.sections[currentSectionIndex];
    const isLastSection = currentSectionIndex === module.sections.length - 1;

    let html = `
        <div class="module-header">
            <h2>${module.title}</h2>
            <p class="subtitle">${module.subtitle}</p>
        </div>

        <div class="section">
            <h3>${section.title}</h3>
            ${section.analogy ? `<div class="analogy">💡 ${section.analogy}</div>` : ''}
            <p>${section.content}</p>
            ${section.example ? `
                <div class="example">
                    <h4>📌 Exempel:</h4>
                    <p>${section.example.replace(/\n/g, '<br>')}</p>
                </div>
            ` : ''}
        </div>
    `;

    // Lägg till quiz om det är sista sektionen
    if (isLastSection && module.quiz) {
        html += renderQuiz(module.quiz);
    }

    document.getElementById('moduleContent').innerHTML = html;

    // Visa navigeringsknappar när vi är i en modul
    document.querySelector('.navigation-buttons').style.display = 'flex';

    // Uppdatera knappar
    updateNavigationButtons(isLastSection);

    // Setup quiz-listener
    if (isLastSection && module.quiz) {
        setupQuizListeners(module.quiz);
    }

    // Scrolla upp
    window.scrollTo(0, 0);
}

// Render quiz
function renderQuiz(quiz) {
    const optionsHtml = quiz.options.map((opt, idx) => `
        <button class="quiz-option" data-index="${idx}">${opt.text}</button>
    `).join('');

    return `
        <div class="quiz-section">
            <h4>🎯 Kunskapskontroll</h4>
            <div class="quiz-question">
                <p>${quiz.question}</p>
                <div class="quiz-options">
                    ${optionsHtml}
                </div>
                <div id="quizFeedback"></div>
            </div>
        </div>
    `;
}

// Setup quiz listeners
function setupQuizListeners(quiz) {
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const isCorrect = quiz.options[index].correct;
            const feedbackDiv = document.getElementById('quizFeedback');

            // Ta bort tidigare feedback
            const existingFeedback = feedbackDiv.querySelector('.quiz-feedback');
            if (existingFeedback) return;

            // Visa resultat
            options.forEach((opt, idx) => {
                if (idx === index) {
                    opt.classList.add(isCorrect ? 'correct' : 'incorrect');
                }
            });

            const feedbackClass = isCorrect ? 'correct' : 'incorrect';
            const feedbackText = isCorrect ? quiz.feedback.correct : quiz.feedback.incorrect;
            
            feedbackDiv.innerHTML = `<div class="quiz-feedback ${feedbackClass}">${feedbackText}</div>`;

            // Markera modul som färdig om korrekt svar
            if (isCorrect && !completedModules.includes(currentModuleId)) {
                completedModules.push(currentModuleId);
                localStorage.setItem('completedModules', JSON.stringify(completedModules));
                updateProgress();
            }
        });
    });
}

// Nästa sektion
function nextSection() {
    const module = modules.find(m => m.id === currentModuleId);
    
    if (currentSectionIndex < module.sections.length - 1) {
        currentSectionIndex++;
        renderSection();
    } else {
        // Gå till nästa modul
        if (currentModuleId < modules.length) {
            loadModule(currentModuleId + 1);
        }
    }
}

// Föregående sektion
function prevSection() {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        renderSection();
    } else {
        // Gå till föregående modul
        if (currentModuleId > 1) {
            const prevModuleId = currentModuleId - 1;
            const prevModule = modules.find(m => m.id === prevModuleId);
            currentModuleId = prevModuleId;
            currentSectionIndex = prevModule.sections.length - 1;
            document.querySelectorAll('.module-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[data-module="${prevModuleId}"]`).classList.add('active');
            renderSection();
        }
    }
}

// Uppdatera navigeringsknappar
function updateNavigationButtons(isLastSection) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Visa/göm föregående knapp
    if (currentSectionIndex === 0 && currentModuleId === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    // Uppdatera nästa knapp
    if (isLastSection && currentModuleId === modules.length) {
        nextBtn.textContent = '🎉 Grattis, du är klar!';
        nextBtn.disabled = true;
    } else if (isLastSection) {
        nextBtn.textContent = 'Nästa modul →';
    } else {
        nextBtn.textContent = 'Nästa →';
    }
}

// Uppdatera progress-baren
function updateProgress() {
    const completed = completedModules.length;
    const total = modules.length;
    const percentage = (completed / total) * 100;

    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${completed}/${total} moduler`;
}

// Render landningssida
function renderLandingPage() {
    const html = `
        <div class="landing-page">
            <div class="welcome-header">
                <h1>🎓 Välkommen till KYH:s IT-grundkurs!</h1>
                <p class="welcome-subtitle">Lär dig datorn från grunden – steg för steg</p>
            </div>

            <div class="course-intro">
                <h2>Vad innehåller kursen?</h2>
                <p>Denna interaktiva kurs tar dig genom allt du behöver veta för att använda datorn säkert och effektivt. Vi börjar från början och bygger upp dina kunskaper steg för steg.</p>
                
                <div class="modules-overview">
                    <h3>Kursinnehåll:</h3>
                    <ul class="module-list">
                        <li><strong>1. Hårdvara & Mjukvara</strong> – Vad är de och hur fungerar de tillsammans?</li>
                        <li><strong>2. Operativsystem</strong> – Windows 11 och macOS förklarat</li>
                        <li><strong>3. Filhantering</strong> – Hur du sparar, öppnar, kopierar och organiserar dina filer</li>
                        <li><strong>4. Installera programvara</strong> – Säker installation av program</li>
                        <li><strong>5. Uppdateringar</strong> – Varför de är viktiga och hur man hanterar dem</li>
                        <li><strong>6. Systemunderhåll</strong> – Håll din dator frisk och snabb</li>
                        <li><strong>7. Mappstruktur</strong> – Organisera dina filer i mappar</li>
                        <li><strong>8. Filtyper & Filändelser</strong> – Vad är en .xlsx-fil eller en .pptx-fil?
                        </li>
                    </ul>
                </div>

                <div class="course-features">
                    <h3>Vad får du?</h3>
                    <ul>
                        <li>📚 Steg-för-steg guider med exempel</li>
                        <li>🎯 Interaktiva kunskapskontroller efter varje modul</li>
                        <li>💡 Praktiska tips och analogier</li>
                        <li>📈 Spåra din framsteg genom kursen</li>
                        <li>🔒 Säkerhetsråd för att skydda din dator</li>
                    </ul>
                </div>

                <div class="start-section">
                    <p><strong>Redo att börja lära dig?</strong></p>
                    <button id="startCourseBtn" class="btn btn-primary start-btn">🚀 Börja kursen nu!</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('moduleContent').innerHTML = html;

    // Dölj navigeringsknappar på landningssidan
    document.querySelector('.navigation-buttons').style.display = 'none';

    // Setup start-knapp
    document.getElementById('startCourseBtn').addEventListener('click', function() {
        loadModule(1);
    });
}
