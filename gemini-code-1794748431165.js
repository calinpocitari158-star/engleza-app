const lessonsData = {
  free: {
    title: "Lecție de probă gratuită",
    items: [
      { ro: "Eu sunt student", en: "I am a student", meaning: "Eu sunt student", ipa: "/aɪ æm ə ˈstjuːdənt/", analysis: ["<strong>I</strong> – Eu", "<strong>am</strong> – sunt", "<strong>a student</strong> – un student"], exp: "Cu „I” folosim „am”. Înaintea substantivelor numărabile la singular punem „a”." },
      { ro: "Iubește cafeaua", en: "He likes coffee", meaning: "Îi place cafeaua", ipa: "/hiː laɪks ˈkɒfi/", analysis: ["<strong>He</strong> – El", "<strong>likes</strong> – îi place", "<strong>coffee</strong> – cafeaua"], exp: "Cu „he”, verbul „like” primește terminația -s: he likes." },
      { ro: "Noi locuim în Chișinău", en: "We live in Chisinau", meaning: "Noi locuim în Chișinău", ipa: "/wiː lɪv ɪn ˌkɪʃɪˈnaʊ/", analysis: ["<strong>We</strong> – Noi", "<strong>live</strong> – locuim", "<strong>in Chisinau</strong> – în Chișinău"], exp: "Pentru orașe și țări folosim prepoziția „in”." },
      { ro: "Ea citește o carte", en: "She reads a book", meaning: "Ea citește o carte", ipa: "/ʃiː riːdz ə bʊk/", analysis: ["<strong>She</strong> – Ea", "<strong>reads</strong> – citește", "<strong>a book</strong> – o carte"], exp: "La persoana a III-a singular adăugăm -s la verb." },
      { ro: "Ei beau apă rece", en: "They drink cold water", meaning: "Ei beau apă rece", ipa: "/ðeɪ drɪŋk kəʊld ˈwɔːtər/", analysis: ["<strong>They</strong> – Ei", "<strong>drink</strong> – beau", "<strong>cold water</strong> – apă rece"], exp: "Adjectivul („cold”) stă întotdeauna înaintea substantivului („water”)." },
      { ro: "Tu vorbești engleză bine", en: "You speak English well", meaning: "Tu vorbești engleză bine", ipa: "/juː spiːk ˈɪŋɡlɪʃ wel/", analysis: ["<strong>You</strong> – Tu", "<strong>speak</strong> – vorbești", "<strong>English well</strong> – engleză bine"], exp: "Numele limbilor se scriu cu majusculă." }
    ]
  },

  // --- SECȚIUNEA A0 ---
  a0_primii_pasi: {
    title: "A0 — Primii pași",
    items: [
      { ro: "Bună dimineața", en: "Good morning", meaning: "Bună dimineața", ipa: "/ɡʊd ˈmɔːnɪŋ/", analysis: ["<strong>Good</strong> – Bună", "<strong>morning</strong> – dimineața"], exp: "Salut formal sau politicos folosit până la ora 12:00." },
      { ro: "Mulțumesc foarte mult", en: "Thank you very much", meaning: "Mulțumesc foarte mult", ipa: "/θæŋk juː ˈveri mʌtʃ/", analysis: ["<strong>Thank you</strong> – Mulțumesc", "<strong>very much</strong> – foarte mult"], exp: "Expresie standard de recunoștință." },
      { ro: "Cu plăcere", en: "You are welcome", meaning: "Cu plăcere", ipa: "/juː ɑːr ˈwelkəm/", analysis: ["<strong>You are</strong> – Tu ești", "<strong>welcome</strong> – binevenit / cu plăcere"], exp: "Răspunsul politicos la „Thank you”." },
      { ro: "Îmi pare rău", en: "I am sorry", meaning: "Îmi pare rău / Scuze", ipa: "/aɪ æm ˈsɒri/", analysis: ["<strong>I am</strong> – Eu sunt", "<strong>sorry</strong> – îndurerat / regret"], exp: "Se folosește pentru a-ți cere scuze." },
      { ro: "Da, te rog", en: "Yes please", meaning: "Da, te rog", ipa: "/jes pliːz/", analysis: ["<strong>Yes</strong> – Da", "<strong>please</strong> – te rog"], exp: "Adăugarea lui „please” face orice răspuns politicos." },
      { ro: "Nu, mulțumesc", en: "No thank you", meaning: "Nu, mulțumesc", ipa: "/nəʊ θæŋk juː/", analysis: ["<strong>No</strong> – Nu", "<strong>thank you</strong> – mulțumesc"], exp: "Refuz politicos în limba engleză." }
    ]
  },

  a0_despre_mine: {
    title: "A0 — Despre mine",
    items: [
      { ro: "Numele meu este Călin", en: "My name is Calin", meaning: "Numele meu este Călin", ipa: "/maɪ neɪm ɪz ˈkælɪn/", analysis: ["<strong>My name</strong> – Numele meu", "<strong>is</strong> – este"], exp: "Posesivul „my” arată apartenența." },
      { ro: "Eu am șaptesprezece ani", en: "I am seventeen years old", meaning: "Eu am 17 ani", ipa: "/aɪ æm ˌsevnˈtiːn jɪəz əʊld/", analysis: ["<strong>I am</strong> – Eu am (vârsta)", "<strong>seventeen years old</strong> – 17 ani"], exp: "În engleză vârsta se exprimă cu verbul „to be” (I am), nu cu „to have”." },
      { ro: "Eu sunt din Moldova", en: "I am from Moldova", meaning: "Eu sunt din Moldova", ipa: "/aɪ æm frɒm mɒlˈdəʊvə/", analysis: ["<strong>I am</strong> – Eu sunt", "<strong>from</strong> – din"], exp: "Prepoziția „from” indică originea sau proveniența." },
      { ro: "Eu cânt la acordeon", en: "I play the accordion", meaning: "Eu cânt la acordeon", ipa: "/aɪ pleɪ ði əˈkɔːdiən/", analysis: ["<strong>I play</strong> – Eu cânt", "<strong>the accordion</strong> – la acordeon"], exp: "Înaintea instrumentelor muzicale folosim articolul „the” după verbul „play”." },
      { ro: "Îmi place muzica", en: "I like music", meaning: "Îmi place muzica", ipa: "/aɪ laɪk ˈmjuːzɪk/", analysis: ["<strong>I like</strong> – Îmi place", "<strong>music</strong> – muzica"], exp: "Substantivele abstracte la general nu primesc articol." }
    ]
  },

  a0_in_jurul_nostru: {
    title: "A0 — În jurul nostru",
    items: [
      { ro: "Aceasta este o casă mare", en: "This is a big house", meaning: "Aceasta este o casă mare", ipa: "/ðɪs ɪz ə bɪɡ haʊs/", analysis: ["<strong>This is</strong> – Aceasta este", "<strong>a big house</strong> – o casă mare"], exp: "„This” se folosește pentru obiecte aflate aproape la singular." },
      { ro: "Telefonul este pe masă", en: "The phone is on the table", meaning: "Telefonul este pe masă", ipa: "/ðə fəʊn ɪz ɒn ðə ˈteɪbl/", analysis: ["<strong>The phone</strong> – Telefonul", "<strong>is on</strong> – este pe", "<strong>the table</strong> – masă"], exp: "Prepoziția „on” înseamnă pe o suprafață." },
      { ro: "Cheile sunt în geantă", en: "The keys are in the bag", meaning: "Cheile sunt în geantă", ipa: "/ðə kiːz ɑːr ɪn ðə bæɡ/", analysis: ["<strong>The keys are</strong> – Cheile sunt", "<strong>in the bag</strong> – în geantă"], exp: "La plural folosim „are”, iar în interiorul unui spațiu folosim „in”." },
      { ro: "Mașina este neagră", en: "The car is black", meaning: "Mașina este neagră", ipa: "/ðə kɑːr ɪz blæk/", analysis: ["<strong>The car</strong> – Mașina", "<strong>is black</strong> – este neagră"], exp: "Adjectivele în engleză nu își schimbă forma după gen sau număr." },
      { ro: "Cerul este albastru", en: "The sky is blue", meaning: "Cerul este albastru", ipa: "/ðə skaɪ ɪz bluː/", analysis: ["<strong>The sky</strong> – Cerul", "<strong>is blue</strong> – este albastru"], exp: "Obiectele unice (the sky, the sun) primesc articolul hotărât „the”." }
    ]
  },

  a0_in_fiecare_zi: {
    title: "A0 — În fiecare zi",
    items: [
      { ro: "Eu mă trezesc devreme", en: "I wake up early", meaning: "Eu mă trezesc devreme", ipa: "/aɪ weɪk ʌp ˈɜːli/", analysis: ["<strong>I wake up</strong> – Eu mă trezesc", "<strong>early</strong> – devreme"], exp: "„Wake up” este un verb frazal (phrasal verb) de bază." },
      { ro: "Eu beau cafea dimineața", en: "I drink coffee in the morning", meaning: "Beau cafea dimineața", ipa: "/aɪ drɪŋk ˈkɒfi ɪn ðə ˈmɔːnɪŋ/", analysis: ["<strong>I drink coffee</strong> – Eu beau cafea", "<strong>in the morning</strong> – dimineața"], exp: "Cu părțile zilei folosim „in the” (in the morning, in the evening)." },
      { ro: "Noi mergem la școală", en: "We go to school", meaning: "Noi mergem la școală", ipa: "/wiː ɡəʊ tə skuːl/", analysis: ["<strong>We go</strong> – Noi mergem", "<strong>to school</strong> – la școală"], exp: "„Go to school” se folosește fără articol când vorbim despre activitatea de studiu." },
      { ro: "El doarme opt ore", en: "He sleeps eight hours", meaning: "El doarme 8 ore", ipa: "/hiː sliːps eɪt ˈaʊəz/", analysis: ["<strong>He sleeps</strong> – El doarme", "<strong>eight hours</strong> – opt ore"], exp: "Litera „h” din „hours” este mută." },
      { ro: "Ei se uită la televizor", en: "They watch TV", meaning: "Ei se uită la TV", ipa: "/ðeɪ wɒtʃ ˌtiːˈviː/", analysis: ["<strong>They watch</strong> – Ei urmăresc", "<strong>TV</strong> – televizor"], exp: "Pentru ecrane și filme folosim verbul „watch”, nu „look”." }
    ]
  },

  a0_primii_pasi_2: {
    title: "A0 — Primii pași II",
    items: [
      { ro: "Cât costă aceasta?", en: "How much is this", meaning: "Cât costă aceasta?", ipa: "/haʊ mʌtʃ ɪz ðɪs/", analysis: ["<strong>How much</strong> – Cât", "<strong>is this</strong> – este aceasta"], exp: "Formula standard pentru a întreba prețul." },
      { ro: "Unde este stația?", en: "Where is the station", meaning: "Unde este stația?", ipa: "/weər ɪz ðə ˈsteɪʃn/", analysis: ["<strong>Where is</strong> – Unde este", "<strong>the station</strong> – stația"], exp: "Cuvântul interogativ „where” se pune la începutul întrebării." },
      { ro: "Eu nu înțeleg", en: "I do not understand", meaning: "Eu nu înțeleg", ipa: "/aɪ duː nɒt ˌʌndərˈstænd/", analysis: ["<strong>I do not</strong> – Eu nu", "<strong>understand</strong> – înțeleg"], exp: "Negația la prezent se formează cu auxiliarul „do not” (don't)." },
      { ro: "Vorbește mai încet te rog", en: "Speak slower please", meaning: "Vorbește mai încet, te rog", ipa: "/spiːk ˈsləʊər pliːz/", analysis: ["<strong>Speak</strong> – Vorbește", "<strong>slower</strong> – mai încet"], exp: "Comparativul scurt se formează cu terminația „-er”." },
      { ro: "Mă poți ajuta?", en: "Can you help me", meaning: "Mă poți ajuta?", ipa: "/kæn juː help miː/", analysis: ["<strong>Can you</strong> – Poți tu", "<strong>help me</strong> – să mă ajuți"], exp: "Verbul modal „can” trece înaintea subiectului în întrebări." }
    ]
  },

  a0_primele_fraze: {
    title: "A0 — Primele fraze",
    items: [
      { ro: "Ce mai faci?", en: "How are you", meaning: "Ce mai faci? / Cum ești?", ipa: "/haʊ ɑːr juː/", analysis: ["<strong>How</strong> – Cum", "<strong>are you</strong> – ești tu"], exp: "Cea mai frecventă formulă de conversație." },
      { ro: "Sunt foarte bine", en: "I am very good", meaning: "Sunt foarte bine", ipa: "/aɪ æm ˈveri ɡʊd/", analysis: ["<strong>I am</strong> – Eu sunt", "<strong>very good</strong> – foarte bine"], exp: "Răspuns pozitiv la întrebarea „How are you?”." },
      { ro: "Încântat de cunoștință", en: "Nice to meet you", meaning: "Încântat de cunoștință", ipa: "/naɪs tə miːt juː/", analysis: ["<strong>Nice</strong> – Plăcut", "<strong>to meet you</strong> – să te cunosc"], exp: "Se spune atunci când cunoști pe cineva pentru prima dată." },
      { ro: "Ne vedem mâine", en: "See you tomorrow", meaning: "Ne vedem mâine", ipa: "/siː juː təˈmɒrəʊ/", analysis: ["<strong>See you</strong> – Ne vedem", "<strong>tomorrow</strong> – mâine"], exp: "Formulă informală de rămas-bun." },
      { ro: "O zi bună", en: "Have a nice day", meaning: "O zi frumoasă / bună", ipa: "/hæv ə naɪs deɪ/", analysis: ["<strong>Have</strong> – Să ai", "<strong>a nice day</strong> – o zi frumoasă"], exp: "Urare folosită la despărțire." }
    ]
  },

  // --- SECȚIUNEA TIMP (TOATE CELE 11 TIMPURI) ---
  t_prezent_simplu: {
    title: "Prezentul simplu (Present Simple)",
    items: [
      { ro: "El lucrează în fiecare zi", en: "He works every day", meaning: "El lucrează zilnic", ipa: "/hiː wɜːks ˈevri deɪ/", analysis: ["<strong>He</strong> – El", "<strong>works</strong> – lucrează", "<strong>every day</strong> – zilnic"], exp: "Prezentul simplu exprimă obiceiuri. La persoana a III-a singular adăugăm -s." },
      { ro: "Ea nu bea cafea", en: "She does not drink coffee", meaning: "Ea nu bea cafea", ipa: "/ʃiː dʌz nɒt drɪŋk ˈkɒfi/", analysis: ["<strong>She does not</strong> – Ea nu", "<strong>drink</strong> – bea (infinitiv)"], exp: "La negativ pentru he/she/it folosim „does not” și verbul pierde -s." },
      { ro: "Soarele răsare la est", en: "The sun rises in the east", meaning: "Soarele răsare la est", ipa: "/ðə sʌn ˈraɪzɪz ɪn ði iːst/", analysis: ["<strong>The sun</strong> – Soarele", "<strong>rises</strong> – răsare"], exp: "Adevărurile general valabile folosesc întotdeauna Present Simple." },
      { ro: "Tu mergi la sală?", en: "Do you go to the gym", meaning: "Tu mergi la sală?", ipa: "/duː juː ɡəʊ tə ðə dʒɪm/", analysis: ["<strong>Do you</strong> – Auxiliar întrebare", "<strong>go to the gym</strong> – mergi la sală"], exp: "Întrebările la Present Simple încep cu „Do” sau „Does”." },
      { ro: "Noi vorbim trei limbi", en: "We speak three languages", meaning: "Noi vorbim trei limbi", ipa: "/wiː spiːk θriː ˈlæŋɡwɪdʒɪz/", analysis: ["<strong>We speak</strong> – Noi vorbim", "<strong>three languages</strong> – trei limbi"], exp: "Pluralul lui „language” se pronunță cu o silabă în plus: /ˈlæŋɡwɪdʒɪz/." }
    ]
  },

  t_prezent_continuu: {
    title: "Prezent continuu (Present Continuous)",
    items: [
      { ro: "Eu învăț engleză acum", en: "I am learning English now", meaning: "Eu învăț engleză acum", ipa: "/aɪ æm ˈlɜːnɪŋ ˈɪŋɡlɪʃ naʊ/", analysis: ["<strong>I am</strong> – Eu sunt", "<strong>learning</strong> – învățând"], exp: "Acțiune în desfășurare chiar acum: am/is/are + verb-ing." },
      { ro: "El scrie cod acum", en: "He is writing code now", meaning: "El scrie cod acum", ipa: "/hiː ɪz ˈraɪtɪŋ kəʊd naʊ/", analysis: ["<strong>He is</strong> – El este", "<strong>writing</strong> – scriind"], exp: "Verbele terminate în -e mut (write) pierd litera -e înainte de -ing." },
      { ro: "Ei joacă fotbal în parc", en: "They are playing football in the park", meaning: "Ei joacă fotbal în parc", ipa: "/ðeɪ ɑːr ˈpleɪɪŋ ˈfʊtbɔːl ɪn ðə pɑːk/", analysis: ["<strong>They are playing</strong> – Ei joacă acum", "<strong>in the park</strong> – în parc"], exp: "Pentru „they” folosim auxiliarul „are” + verbul cu -ing." },
      { ro: "Plouă afară", en: "It is raining outside", meaning: "Plouă afară", ipa: "/ɪt ɪz ˈreɪnɪŋ ˌaʊtˈsaɪd/", analysis: ["<strong>It is raining</strong> – Plouă", "<strong>outside</strong> – afară"], exp: "Fenomenele meteo folosesc subiectul formal „it”." },
      { ro: "Ea nu doarme acum", en: "She is not sleeping now", meaning: "Ea nu doarme acum", ipa: "/ʃiː ɪz nɒt ˈsliːpɪŋ naʊ/", analysis: ["<strong>She is not</strong> – Ea nu este", "<strong>sleeping</strong> – dormind"], exp: "Negația se formează punând „not” după verbul to be." }
    ]
  },

  t_trecut_simplu: {
    title: "Trecut simplu (Past Simple)",
    items: [
      { ro: "Eu am lucrat ieri", en: "I worked yesterday", meaning: "Eu am lucrat ieri", ipa: "/aɪ wɜːkt ˈjestədeɪ/", analysis: ["<strong>I worked</strong> – Eu am lucrat", "<strong>yesterday</strong> – ieri"], exp: "Verbele regulate primesc terminația „-ed” la Past Simple." },
      { ro: "Ea a cumpărat o mașină", en: "She bought a car", meaning: "Ea a cumpărat o mașină", ipa: "/ʃiː bɔːt ə kɑːr/", analysis: ["<strong>She bought</strong> – Ea a cumpărat (forma a II-a de la buy)", "<strong>a car</strong> – o mașină"], exp: "„Buy” este verb neregulat: buy → bought." },
      { ro: "Noi am mers acasă", en: "We went home", meaning: "Noi am mers acasă", ipa: "/wiː went həʊm/", analysis: ["<strong>We went</strong> – Noi am mers (forma a II-a de la go)", "<strong>home</strong> – acasă"], exp: "Înainte de „home” nu punem prepoziția „to”." },
      { ro: "El nu a venit la timp", en: "He did not come on time", meaning: "El nu a venit la timp", ipa: "/hiː dɪd nɒt kʌm ɒn taɪm/", analysis: ["<strong>He did not</strong> – El nu a", "<strong>come</strong> – venit (forma de bază)"], exp: "După „did not” verbul revine la prima formă (infinitiv)." },
      { ro: "Ai văzut filmul?", en: "Did you see the movie", meaning: "Ai văzut filmul?", ipa: "/dɪd juː siː ðə ˈmuːvi/", analysis: ["<strong>Did you</strong> – Auxiliar trecut", "<strong>see</strong> – a vedea"], exp: "Întrebările la trecut încep cu „Did”." }
    ]
  },

  t_trecut_continuu: {
    title: "Trecut continuu (Past Continuous)",
    items: [
      { ro: "Eu citeam când ai sunat", en: "I was reading when you called", meaning: "Eu citeam când ai sunat", ipa: "/aɪ wɒz ˈriːdɪŋ wen juː kɔːld/", analysis: ["<strong>I was reading</strong> – Eu citeam", "<strong>when you called</strong> – când ai sunat"], exp: "Acțiune în desfășurare în trecut (was/were + verb-ing) întreruptă de o acțiune scurtă." },
      { ro: "Ei dormeau la miezul nopții", en: "They were sleeping at midnight", meaning: "Ei dormeau la miezul nopții", ipa: "/ðeɪ wɜːr ˈsliːpɪŋ ət ˈmɪdnaɪt/", analysis: ["<strong>They were sleeping</strong> – Ei dormeau", "<strong>at midnight</strong> – la miezul nopții"], exp: "Pentru „they/we/you” folosim „were” + verb-ing." },
      { ro: "Ea gătea cina", en: "She was cooking dinner", meaning: "Ea gătea cina", ipa: "/ʃiː wɒz ˈkʊkɪŋ ˈdɪnər/", analysis: ["<strong>She was cooking</strong> – Ea gătea", "<strong>dinner</strong> – cina"], exp: "Descrie o acțiune continuă dintr-un moment trecut." },
      { ro: "Noi ne plimbam în parc", en: "We were walking in the park", meaning: "Noi ne plimbam în parc", ipa: "/wiː wɜːr ˈwɔːkɪŋ ɪn ðə pɑːk/", analysis: ["<strong>We were walking</strong> – Noi ne plimbam"], exp: "Litera „l” din „walking” este mută." },
      { ro: "El nu se uita la TV", en: "He was not watching TV", meaning: "El nu se uita la TV", ipa: "/hiː wɒz nɒt ˈwɒtʃɪŋ ˌtiːˈviː/", analysis: ["<strong>He was not watching</strong> – El nu urmărea"], exp: "Negația se face cu „was not” (wasn't)." }
    ]
  },

  t_prezent_perfect: {
    title: "Prezent perfect (Present Perfect)",
    items: [
      { ro: "Eu am terminat proiectul", en: "I have finished the project", meaning: "Eu am terminat proiectul", ipa: "/aɪ hæv ˈfɪnɪʃt ðə ˈprɒdʒekt/", analysis: ["<strong>I have finished</strong> – Eu am terminat", "<strong>the project</strong> – proiectul"], exp: "Acțiune încheiată cu rezultat vizibil în prezent: have/has + forma a III-a." },
      { ro: "Ea a vizitat Londra", en: "She has visited London", meaning: "Ea a vizitat Londra", ipa: "/ʃiː hæz ˈvɪzɪtɪd ˈlʌndən/", analysis: ["<strong>She has visited</strong> – Ea a vizitat"], exp: "Experiență de viață fără un moment exact menționat." },
      { ro: "Noi am ajuns deja", en: "We have already arrived", meaning: "Noi am ajuns deja", ipa: "/wiː hæv ɔːlˈredi əˈraɪvd/", analysis: ["<strong>We have</strong> – Noi am", "<strong>already arrived</strong> – ajuns deja"], exp: "Cuvântul „already” se așază între „have” și participiu." },
      { ro: "El nu a mâncat încă", en: "He has not eaten yet", meaning: "El nu a mâncat încă", ipa: "/hiː hæz nɒt ˈiːtn jet/", analysis: ["<strong>He has not eaten</strong> – El nu a mâncat", "<strong>yet</strong> – încă"], exp: "„Yet” se pune la sfârșitul propozițiilor negative și interogative." },
      { ro: "Ai fost vreodată în Italia?", en: "Have you ever been to Italy", meaning: "Ai fost vreodată în Italia?", ipa: "/hæv juː ˈevər biːn tu ˈɪtəli/", analysis: ["<strong>Have you ever been</strong> – Ai fost vreodată"], exp: "Pentru vizite folosim „been to”, nu „gone to”." }
    ]
  },

  t_prezent_perfect_continuu: {
    title: "Prezent perfect continuu",
    items: [
      { ro: "Eu învăț engleză de doi ani", en: "I have been learning English for two years", meaning: "Învăț engleză de doi ani", ipa: "/aɪ hæv biːn ˈlɜːnɪŋ ˈɪŋɡlɪʃ fɔːr tuː jɪəz/", analysis: ["<strong>I have been learning</strong> – Învăț (continuu)", "<strong>for two years</strong> – de doi ani"], exp: "Acțiune începută în trecut care continuă și în prezent: have/has been + verb-ing." },
      { ro: "Plouă de dimineață", en: "It has been raining since morning", meaning: "Plouă de dimineață", ipa: "/ɪt hæz biːn ˈreɪnɪŋ sɪns ˈmɔːnɪŋ/", analysis: ["<strong>It has been raining</strong> – Plouă", "<strong>since morning</strong> – de dimineață"], exp: "„Since” arată punctul de început al acțiunii." },
      { ro: "El lucrează aici din 2024", en: "He has been working here since 2024", meaning: "Lucrează aici din 2024", ipa: "/hiː hæz biːn ˈwɜːkɪŋ hɪər sɪns ˌtwenti ˈtwenti fɔːr/", analysis: ["<strong>He has been working</strong> – El lucrează"], exp: "Subliniază durata neîntreruptă a activității." },
      { ro: "Noi așteptăm de o oră", en: "We have been waiting for an hour", meaning: "Noi așteptăm de o oră", ipa: "/wiː hæv biːn ˈweɪtɪŋ fɔːr ən ˈaʊər/", analysis: ["<strong>We have been waiting</strong> – Noi așteptăm", "<strong>for an hour</strong> – de o oră"], exp: "„For” indică perioada de timp (o oră, două zile)." },
      { ro: "Ea citește toată ziua", en: "She has been reading all day", meaning: "Ea citește toată ziua", ipa: "/ʃiː hæz biːn ˈriːdɪŋ ɔːl deɪ/", analysis: ["<strong>She has been reading</strong> – Ea citește", "<strong>all day</strong> – toată ziua"], exp: "Expresia „all day” cere adesea un timp continuu." }
    ]
  },

  t_trecut_perfect: {
    title: "Trecut perfect (Past Perfect)",
    items: [
      { ro: "Trenul plecase când am ajuns", en: "The train had left when I arrived", meaning: "Trenul plecase când am ajuns", ipa: "/ðə treɪn hæd left wen aɪ əˈraɪvd/", analysis: ["<strong>The train had left</strong> – Trenul plecase", "<strong>when I arrived</strong> – când am ajuns"], exp: "O acțiune trecută petrecută înaintea altei acțiuni trecute: had + forma a III-a." },
      { ro: "Eu terminasem tema înainte de cină", en: "I had finished homework before dinner", meaning: "Terminasem tema înainte de cină", ipa: "/aɪ hæd ˈfɪnɪʃt ˈhəʊmwɜːk bɪˈfɔːr ˈdɪnər/", analysis: ["<strong>I had finished</strong> – Eu terminasem"], exp: "„Had” are aceeași formă pentru toate persoanele." },
      { ro: "Ea nu mai văzuse zăpadă", en: "She had never seen snow", meaning: "Ea nu mai văzuse niciodată zăpadă", ipa: "/ʃiː hæd ˈnevər siːn snəʊ/", analysis: ["<strong>She had never seen</strong> – Ea nu văzuse niciodată"], exp: "„Never” înlocuiește negația „not”." },
      { ro: "Noi mâncaserăm deja", en: "We had already eaten", meaning: "Noi mâncaserăm deja", ipa: "/wiː hæd ɔːlˈredi ˈiːtn/", analysis: ["<strong>We had already eaten</strong> – Noi mâncaserăm deja"], exp: "„Eaten” este participiul trecut al verbului „eat”." },
      { ro: "El uitase cheia acasă", en: "He had forgotten the key at home", meaning: "El uitase cheia acasă", ipa: "/hiː hæd fərˈɡɒtn ðə kiː ət həʊm/", analysis: ["<strong>He had forgotten</strong> – El uitase"], exp: "Forget → forgot → forgotten." }
    ]
  },

  t_trecut_perfect_continuu: {
    title: "Trecut perfect continuu",
    items: [
      { ro: "Eu lucram de trei ore când ai venit", en: "I had been working for three hours when you came", meaning: "Lucram de 3 ore când ai venit", ipa: "/aɪ hæd biːn ˈwɜːkɪŋ fɔːr θriː ˈaʊəz wen juː keɪm/", analysis: ["<strong>I had been working</strong> – Eu lucram (de ceva timp)"], exp: "Arată durata unei acțiuni până la un anumit moment din trecut: had been + verb-ing." },
      { ro: "El alergase și era obosit", en: "He had been running and was tired", meaning: "Alergase și era obosit", ipa: "/hiː hæd biːn ˈrʌnɪŋ ənd wɒz ˈtaɪəd/", analysis: ["<strong>He had been running</strong> – El alergase"], exp: "Explică cauza unei stări din trecut." },
      { ro: "Ninsese toată noaptea", en: "It had been snowing all night", meaning: "Ninsese toată noaptea", ipa: "/ɪt hæd biːn ˈsnəʊɪŋ ɔːl naɪt/", analysis: ["<strong>It had been snowing</strong> – Ninsese"], exp: "Acțiune continuă desfășurată pe parcursul nopții trecute." },
      { ro: "Noi așteptam de mult timp", en: "We had been waiting for a long time", meaning: "Noi așteptam de mult timp", ipa: "/wiː hæd biːn ˈweɪtɪŋ fɔːr ə lɒŋ taɪm/", analysis: ["<strong>We had been waiting</strong> – Noi așteptam"], exp: "Subliniază durata așteptării în trecut." },
      { ro: "Ea studia de dimineață", en: "She had been studying since morning", meaning: "Ea studia de dimineață", ipa: "/ʃiː hæd biːn ˈstʌdiɪŋ sɪns ˈmɔːnɪŋ/", analysis: ["<strong>She had been studying</strong> – Ea studia"], exp: "Verbul „study” păstrează litera „y” înainte de -ing." }
    ]
  },

  t_viitor_simplu: {
    title: "Viitorul simplu (Future Simple)",
    items: [
      { ro: "Eu te voi suna mâine", en: "I will call you tomorrow", meaning: "Te voi suna mâine", ipa: "/aɪ wɪl kɔːl juː təˈmɒrəʊ/", analysis: ["<strong>I will call</strong> – Eu voi suna", "<strong>you tomorrow</strong> – pe tine mâine"], exp: "Promisiunile și deciziile de moment folosesc „will + verb”." },
      { ro: "Mâine va fi însorit", en: "Tomorrow will be sunny", meaning: "Mâine va fi însorit", ipa: "/təˈmɒrəʊ wɪl bi ˈsʌni/", analysis: ["<strong>Tomorrow will be</strong> – Mâine va fi", "<strong>sunny</strong> – însorit"], exp: "Predicțiile despre vreme folosesc Future Simple." },
      { ro: "El nu va întârzia", en: "He will not be late", meaning: "El nu va întârzia", ipa: "/hiː wɪl nɒt bi leɪt/", analysis: ["<strong>He will not be</strong> – El nu va fi", "<strong>late</strong> – întârziat"], exp: "Forma scurtă pentru „will not” este „won't”." },
      { ro: "Ne vei ajuta?", en: "Will you help us", meaning: "Ne vei ajuta?", ipa: "/wɪl juː help ʌs/", analysis: ["<strong>Will you</strong> – Vei tu", "<strong>help us</strong> – să ne ajuți"], exp: "Întrebările la viitor încep cu „Will”." },
      { ro: "Noi vom câștiga meciul", en: "We will win the match", meaning: "Noi vom câștiga meciul", ipa: "/wiː wɪl wɪn ðə mætʃ/", analysis: ["<strong>We will win</strong> – Noi vom câștiga"], exp: "După „will” verbul rămâne mereu la forma de dicționar." }
    ]
  },

  t_planuri_viitor: {
    title: "Planuri și intenții de viitor (Going to)",
    items: [
      { ro: "Eu am de gând să învăț engleză", en: "I am going to learn English", meaning: "Intenționez să învăț engleză", ipa: "/aɪ æm ˈɡəʊɪŋ tə lɜːn ˈɪŋɡlɪʃ/", analysis: ["<strong>I am going to</strong> – Intenționez să", "<strong>learn English</strong> – învăț engleză"], exp: "Planurile stabilite dinainte se exprimă cu „am/is/are going to + verb”." },
      { ro: "Noi vom cumpăra o mașină nouă", en: "We are going to buy a new car", meaning: "Vom cumpăra o mașină nouă", ipa: "/wiː ɑːr ˈɡəʊɪŋ tə baɪ ə njuː kɑːr/", analysis: ["<strong>We are going to buy</strong> – Vom cumpăra"], exp: "Arată o intenție clară pentru viitor." },
      { ro: "El va călători în Italia", en: "He is going to travel to Italy", meaning: "El va călători în Italia", ipa: "/hiː ɪz ˈɡəʊɪŋ tə ˈtrævl tu ˈɪtəli/", analysis: ["<strong>He is going to travel</strong> – El va călători"], exp: "Pentru „he” folosim „is going to”." },
      { ro: "Uite norii, va ploua", en: "Look at the clouds it is going to rain", meaning: "Uite norii, o să plouă", ipa: "/lʊk ət ðə klaʊdz ɪt ɪz ˈɡəʊɪŋ tə reɪn/", analysis: ["<strong>it is going to rain</strong> – va ploua (dovadă vizibilă)"], exp: "Folosim „going to” când vedem semne clare că ceva urmează să se întâmple." },
      { ro: "Ce vei face diseară?", en: "What are you going to do tonight", meaning: "Ce ai de gând să faci diseară?", ipa: "/wɒt ɑːr juː ˈɡəʊɪŋ tə duː təˈnaɪt/", analysis: ["<strong>What are you going to do</strong> – Ce vei face", "<strong>tonight</strong> – diseară"], exp: "Întrebare standard despre planurile cuiva." }
    ]
  },

  t_viitor_continuu: {
    title: "Viitor continuu (Future Continuous)",
    items: [
      { ro: "Mâine la ora 10 voi lucra", en: "Tomorrow at ten I will be working", meaning: "Mâine la 10 voi lucra", ipa: "/təˈmɒrəʊ ət ten aɪ wɪl bi ˈwɜːkɪŋ/", analysis: ["<strong>I will be working</strong> – Eu voi lucra (în desfășurare)"], exp: "Acțiune în desfășurare la o oră precisă din viitor: will be + verb-ing." },
      { ro: "La această oră vom zbura spre Londra", en: "At this time we will be flying to London", meaning: "La ora asta vom zbura spre Londra", ipa: "/ət ðɪs taɪm wiː wɪl bi ˈflaɪɪŋ tə ˈlʌndən/", analysis: ["<strong>we will be flying</strong> – noi vom zbura"], exp: "Subliniază că vom fi în mijlocul acțiunii la acel moment." },
      { ro: "El va dormi când ajungi", en: "He will be sleeping when you arrive", meaning: "El va dormi când vei ajunge", ipa: "/hiː wɪl bi ˈsliːpɪŋ wen juː əˈraɪv/", analysis: ["<strong>He will be sleeping</strong> – El va dormi"], exp: "Acțiune lungă în viitor (will be sleeping) + acțiune scurtă la prezent (arrive)." },
      { ro: "Ei vor studia toată seara", en: "They will be studying all evening", meaning: "Ei vor studia toată seara", ipa: "/ðeɪ wɪl bi ˈstʌdiɪŋ ɔːl ˈiːvnɪŋ/", analysis: ["<strong>They will be studying</strong> – Ei vor studia"], exp: "Descrie o activitate continuă pe o perioadă din viitor." },
      { ro: "Vei folosi laptopul diseară?", en: "Will you be using the laptop tonight", meaning: "Vei folosi laptopul diseară?", ipa: "/wɪl juː bi ˈjuːzɪŋ ðə ˈlæptɒp təˈnaɪt/", analysis: ["<strong>Will you be using</strong> – Vei folosi"], exp: "Mod politicos de a întreba despre planurile cuiva." }
    ]
  }
};

// Starea aplicației salvată în localStorage
let state = JSON.parse(localStorage.getItem("englishAppState")) || {
  currentLessonKey: "free",
  currentIndex: 1, // pornește pe „Iubește cafeaua”
  correctCount: 0,
  wrongCount: 0,
  hintsLeft: 3,
  completedLessons: []
};

// Referințe DOM
const lessonTitle = document.getElementById("lessonTitle");
const promptText = document.getElementById("promptText");
const answerInput = document.getElementById("answerInput");
const feedbackBox = document.getElementById("feedbackBox");
const statusDot = document.getElementById("statusDot");
const statusLabel = document.getElementById("statusLabel");
const roMeaning = document.getElementById("roMeaning");
const roRowValue = document.getElementById("roRowValue");
const ipaRowValue = document.getElementById("ipaRowValue");
const analysisList = document.getElementById("analysisList");
const explanationText = document.getElementById("explanationText");
const progressPill = document.getElementById("progressPill");
const correctCountPill = document.getElementById("correctCountPill");
const wrongCountPill = document.getElementById("wrongCountPill");
const hintBtn = document.getElementById("hintBtn");

function saveState() {
  localStorage.setItem("englishAppState", JSON.stringify(state));
}

function normalize(str) {
  return str.trim().toLowerCase().replace(/[.!?]+$/g, "").replace(/\s+/g, " ");
}

function updateStatsUI() {
  correctCountPill.textContent = `${state.correctCount} ori corect`;
  wrongCountPill.textContent = `${state.wrongCount} greșit`;
  hintBtn.textContent = `Cheie (${state.hintsLeft})`;
}

function updateSidebarActive() {
  const freeBtn = document.getElementById("btnFreeLesson");
  freeBtn.classList.toggle("active-top", state.currentLessonKey === "free");

  document.querySelectorAll(".nav-item").forEach(el => {
    const key = el.dataset.lesson;
    el.classList.toggle("active", key === state.currentLessonKey);
    el.classList.toggle("completed", state.completedLessons.includes(key));
  });
}

function renderCurrentExercise() {
  const lesson = lessonsData[state.currentLessonKey] || lessonsData.free;
  if (state.currentIndex >= lesson.items.length) state.currentIndex = 0;

  const item = lesson.items[state.currentIndex];
  lessonTitle.textContent = lesson.title;
  promptText.textContent = item.ro;
  progressPill.textContent = `${state.currentIndex + 1}/${lesson.items.length}`;

  analysisList.innerHTML = item.analysis.map(line => `<li>${line}</li>`).join("");
  explanationText.textContent = item.exp;

  answerInput.value = "";
  answerInput.classList.remove("correct", "wrong");
  feedbackBox.classList.remove("visible");

  updateStatsUI();
  updateSidebarActive();
  answerInput.focus();
}

function showFeedback(isCorrect, item) {
  feedbackBox.classList.add("visible");
  roMeaning.textContent = item.meaning;
  roRowValue.textContent = item.meaning;
  ipaRowValue.textContent = item.ipa;

  if (isCorrect) {
    answerInput.classList.remove("wrong");
    answerInput.classList.add("correct");
    statusDot.className = "status-dot is-correct";
    statusDot.textContent = "✓";
    statusLabel.textContent = "Răspuns corect";
  } else {
    answerInput.classList.remove("correct");
    answerInput.classList.add("wrong");
    statusDot.className = "status-dot is-wrong";
    statusDot.textContent = "✕";
    statusLabel.textContent = `Răspuns corect: ${item.en}`;
  }
}

function checkAnswer() {
  const lesson = lessonsData[state.currentLessonKey];
  const item = lesson.items[state.currentIndex];
  const userAns = normalize(answerInput.value);

  if (!userAns) {
    answerInput.focus();
    return;
  }

  const isCorrect = userAns === normalize(item.en);
  if (isCorrect) {
    state.correctCount++;
  } else {
    state.wrongCount++;
  }

  saveState();
  updateStatsUI();
  showFeedback(isCorrect, item);
}

function nextExercise() {
  const lesson = lessonsData[state.currentLessonKey];
  if (state.currentIndex < lesson.items.length - 1) {
    state.currentIndex++;
    saveState();
    renderCurrentExercise();
  } else {
    if (!state.completedLessons.includes(state.currentLessonKey)) {
      state.completedLessons.push(state.currentLessonKey);
      saveState();
      updateSidebarActive();
    }
    openFinishModal();
  }
}

function prevExercise() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    saveState();
    renderCurrentExercise();
  }
}

function speakEnglish() {
  const lesson = lessonsData[state.currentLessonKey];
  const text = lesson.items[state.currentIndex].en;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-US";
    msg.rate = 0.92;
    window.speechSynthesis.speak(msg);
  }
}

// Evenimente butoane
document.getElementById("checkBtn").addEventListener("click", checkAnswer);
document.getElementById("nextBtn").addEventListener("click", nextExercise);
document.getElementById("nextPageBtn").addEventListener("click", nextExercise);
document.getElementById("prevPageBtn").addEventListener("click", prevExercise);
document.getElementById("speakBtn").addEventListener("click", speakEnglish);

hintBtn.addEventListener("click", () => {
  if (state.hintsLeft <= 0) return;
  state.hintsLeft--;
  const item = lessonsData[state.currentLessonKey].items[state.currentIndex];
  answerInput.value = item.en;
  saveState();
  updateStatsUI();
  showFeedback(true, item);
});

document.getElementById("giveUpBtn").addEventListener("click", () => {
  const item = lessonsData[state.currentLessonKey].items[state.currentIndex];
  answerInput.value = item.en;
  state.wrongCount++;
  saveState();
  updateStatsUI();
  showFeedback(false, item);
});

answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (feedbackBox.classList.contains("visible") && answerInput.classList.contains("correct")) {
      nextExercise();
    } else {
      checkAnswer();
    }
  }
});

// Navigare lecții
document.querySelectorAll(".nav-item, #btnFreeLesson").forEach(btn => {
  btn.addEventListener("click", () => {
    state.currentLessonKey = btn.dataset.lesson;
    state.currentIndex = 0;
    saveState();
    renderCurrentExercise();
  });
});

function openFinishModal() {
  document.getElementById("modalSummary").textContent =
    `Ai finalizat lecția „${lessonsData[state.currentLessonKey].title}”! Total sesiune: ${state.correctCount} corecte, ${state.wrongCount} greșite.`;
  document.getElementById("resultModal").classList.add("open");
}

document.getElementById("finishBtn").addEventListener("click", openFinishModal);
document.getElementById("restartBtn").addEventListener("click", () => {
  document.getElementById("resultModal").classList.remove("open");
  state.currentIndex = 0;
  saveState();
  renderCurrentExercise();
});

// Pornire inițială
renderCurrentExercise();