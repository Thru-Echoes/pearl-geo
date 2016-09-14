var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var routes = require('./routes/index');

/* JS routes for middleware species pages (step 1) */
var ABBREVIATA_BANCROFTI = require('./routes/ABBREVIATA_BANCROFTI');
var ABBREVIATA_HASTASPICULA = require('./routes/ABBREVIATA_HASTASPICULA');
var AGLENCHUS_AGRICOLA = require('./routes/AGLENCHUS_AGRICOLA');
var ALAIMUS_PRIMITIVUS = require('./routes/ALAIMUS_PRIMITIVUS');
var ALLOCORRIGIA_FILIFORMIS = require('./routes/ALLOCORRIGIA_FILIFORMIS');
var ALLOGLOSSIDIUM_CORTI = require('./routes/ALLOGLOSSIDIUM_CORTI');
var AMALARAEUS_PENICILLIGER = require('./routes/AMALARAEUS_PENICILLIGER');
var AMBLYOMMA_AMERICANUM = require('./routes/AMBLYOMMA_AMERICANUM');
var AMBLYOMMA_ASTRION = require('./routes/AMBLYOMMA_ASTRION');
var AMBLYOMMA_CAJENNENSE = require('./routes/AMBLYOMMA_CAJENNENSE');
var AMBLYOMMA_COHAERENS = require('./routes/AMBLYOMMA_COHAERENS');
var AMBLYOMMA_COMPRESSUM = require('./routes/AMBLYOMMA_COMPRESSUM');
var AMBLYOMMA_CUNEATUM = require('./routes/AMBLYOMMA_CUNEATUM');
var AMBLYOMMA_EBERNEUM = require('./routes/AMBLYOMMA_EBERNEUM');
var AMBLYOMMA_EXORNATUM = require('./routes/AMBLYOMMA_EXORNATUM');
var AMBLYOMMA_FALSOMARMOREUM = require('./routes/AMBLYOMMA_FALSOMARMOREUM');
var AMBLYOMMA_FIMBRIATUM = require('./routes/AMBLYOMMA_FIMBRIATUM');
var AMBLYOMMA_FLAVOMACULATUM = require('./routes/AMBLYOMMA_FLAVOMACULATUM');
var AMBLYOMMA_GEMMA = require('./routes/AMBLYOMMA_GEMMA');
var AMBLYOMMA_GEOEMYDAE = require('./routes/AMBLYOMMA_GEOEMYDAE');
var AMBLYOMMA_HEBRAEUM = require('./routes/AMBLYOMMA_HEBRAEUM');
var AMBLYOMMA_HELVOLUM = require('./routes/AMBLYOMMA_HELVOLUM');
var AMBLYOMMA_JAVANENSE = require('./routes/AMBLYOMMA_JAVANENSE');
var AMBLYOMMA_LATUM = require('./routes/AMBLYOMMA_LATUM');
var AMBLYOMMA_LEPIDUM = require('./routes/AMBLYOMMA_LEPIDUM');
var AMBLYOMMA_LIMBATUM = require('./routes/AMBLYOMMA_LIMBATUM');
var AMBLYOMMA_MACULATUM = require('./routes/AMBLYOMMA_MACULATUM');
var AMBLYOMMA_MARMOREUM = require('./routes/AMBLYOMMA_MARMOREUM');
var AMBLYOMMA_NUTTALLI = require('./routes/AMBLYOMMA_NUTTALLI');
var AMBLYOMMA_PAULOPUNCTATUM = require('./routes/AMBLYOMMA_PAULOPUNCTATUM');
var AMBLYOMMA_POMPOSUM = require('./routes/AMBLYOMMA_POMPOSUM');
var AMBLYOMMA_RHINOCEROTIS = require('./routes/AMBLYOMMA_RHINOCEROTIS');
var AMBLYOMMA_SPARSUM = require('./routes/AMBLYOMMA_SPARSUM');
var AMBLYOMMA_SPLENDIDUM = require('./routes/AMBLYOMMA_SPLENDIDUM');
var AMBLYOMMA_TESTUDINARIUM = require('./routes/AMBLYOMMA_TESTUDINARIUM');
var AMBLYOMMA_THOLLONI = require('./routes/AMBLYOMMA_THOLLONI');
var AMBLYOMMA_TRIGUTTATUM = require('./routes/AMBLYOMMA_TRIGUTTATUM');
var AMBLYOMMA_VARIEGATUM = require('./routes/AMBLYOMMA_VARIEGATUM');
var ANAPLECTUS_GRANULOSUS = require('./routes/ANAPLECTUS_GRANULOSUS');
var ANCYLOSTOMA_CANINUM = require('./routes/ANCYLOSTOMA_CANINUM');
var ANGIOSTRONGYLUS_CANTONENSIS = require('./routes/ANGIOSTRONGYLUS_CANTONENSIS');
var ANOMIOPSYLLUS_NUDATUS = require('./routes/ANOMIOPSYLLUS_NUDATUS');
var ANOPLOCEPHALA_PERFOLIATA = require('./routes/ANOPLOCEPHALA_PERFOLIATA');
var APHELENCHUS_AVENAE = require('./routes/APHELENCHUS_AVENAE');
var APHELENCHUS_PARIETINUS = require('./routes/APHELENCHUS_PARIETINUS');
var APLECTANA_ITZOCANENSIS = require('./routes/APLECTANA_ITZOCANENSIS');
var APORCELAIMELLUS_OBTUSICAUDATUS = require('./routes/APORCELAIMELLUS_OBTUSICAUDATUS');
var ARALICHUS_NOBILIS = require('./routes/ARALICHUS_NOBILIS');
var ARCHAEOPSYLLA_ERINACEI = require('./routes/ARCHAEOPSYLLA_ERINACEI');
var ARGAS_BRUMPTI = require('./routes/ARGAS_BRUMPTI');
var ARGAS_CONFUSUS = require('./routes/ARGAS_CONFUSUS');
var ARGAS_PERSICUS = require('./routes/ARGAS_PERSICUS');
var ARGAS_VESPERTILIONIS = require('./routes/ARGAS_VESPERTILIONIS');
var ARGAS_WALKERAE = require('./routes/ARGAS_WALKERAE');
var ARHYTHMORHYNCHUS_BREVIS = require('./routes/ARHYTHMORHYNCHUS_BREVIS');
var ASCARIDIA_BONASAE = require('./routes/ASCARIDIA_BONASAE');
var ASCARIDIA_COLUMBAE = require('./routes/ASCARIDIA_COLUMBAE');
var ASCARIDIA_GALLI = require('./routes/ASCARIDIA_GALLI');
var ASCARIDIA_LINEATA = require('./routes/ASCARIDIA_LINEATA');
var ASCARIS_LUMBRICOIDES = require('./routes/ASCARIS_LUMBRICOIDES');
var ASCARIS_SUUM = require('./routes/ASCARIS_SUUM');
var ASCOCOTYLE_LONGA = require('./routes/ASCOCOTYLE_LONGA');
var ASCOCOTYLE_TENUICOLLIS = require('./routes/ASCOCOTYLE_TENUICOLLIS');
var BAYLISASCARIS_PROCYONIS = require('./routes/BAYLISASCARIS_PROCYONIS');
var BOTHRIOCEPHALUS_CUSPIDATUS = require('./routes/BOTHRIOCEPHALUS_CUSPIDATUS');
var BOTHRIOCROTON_HYDROSAURI = require('./routes/BOTHRIOCROTON_HYDROSAURI');
var BRACHYCOELIUM_SALAMANDRAE = require('./routes/BRACHYCOELIUM_SALAMANDRAE');
var BUNOSTOMUM_PHLEBOTOMUM = require('./routes/BUNOSTOMUM_PHLEBOTOMUM');
var BUNOSTOMUM_TRIGONOCEPHALUM = require('./routes/BUNOSTOMUM_TRIGONOCEPHALUM');
var CAMALLANUS_OXYCEPHALUS = require('./routes/CAMALLANUS_OXYCEPHALUS');
var CAPILLARIA_CONTORTA = require('./routes/CAPILLARIA_CONTORTA');
var CAPILLARIA_TENUISSIMA = require('./routes/CAPILLARIA_TENUISSIMA');
var CARIOS_VESPERTILIONIS = require('./routes/CARIOS_VESPERTILIONIS');
var CENTROCESTUS_FORMOSANUS = require('./routes/CENTROCESTUS_FORMOSANUS');
var CEPHALURIS_COLORADENSIS = require('./routes/CEPHALURIS_COLORADENSIS');
var CERATOPHYLLUS_FARRENI = require('./routes/CERATOPHYLLUS_FARRENI');
var CERATOPHYLLUS_GALLINAE = require('./routes/CERATOPHYLLUS_GALLINAE');
var CERATOPHYLLUS_GAREI = require('./routes/CERATOPHYLLUS_GAREI');
var CERATOPHYLLUS_HIRUNDINIS = require('./routes/CERATOPHYLLUS_HIRUNDINIS');
var CERATOPHYLLUS_STYX = require('./routes/CERATOPHYLLUS_STYX');
var CHABERTIA_OVINA = require('./routes/CHABERTIA_OVINA');
var CHAETODACTYLUS_KROMBEINI = require('./routes/CHAETODACTYLUS_KROMBEINI');
var CHAETODACTYLUS_MICHENERI = require('./routes/CHAETODACTYLUS_MICHENERI');
var CHAETODACTYLUS_SP = require('./routes/CHAETODACTYLUS_SP');
var CHEILOSPIRURA_HAMULOSA = require('./routes/CHEILOSPIRURA_HAMULOSA');
var CICHLASOTREMA_UJATI = require('./routes/CICHLASOTREMA_UJATI');
var CITELLINEMA_BIFURCATUM = require('./routes/CITELLINEMA_BIFURCATUM');
var CITTOTAENIA_VARIABILIS = require('./routes/CITTOTAENIA_VARIABILIS');
var CLARKUS_PAPILLATUS = require('./routes/CLARKUS_PAPILLATUS');
var CLINOSTOMUM_COMPLANATUM = require('./routes/CLINOSTOMUM_COMPLANATUM');
var CLONORCHIS_SINENSIS = require('./routes/CLONORCHIS_SINENSIS');
var CONTRACAECUM_MULTIPAPILLATUM = require('./routes/CONTRACAECUM_MULTIPAPILLATUM');
var CONTRACAECUM_SPICULIGERUM = require('./routes/CONTRACAECUM_SPICULIGERUM');
var COOPERIA_CURTICEI = require('./routes/COOPERIA_CURTICEI');
var COOPERIA_ONCOPHORA = require('./routes/COOPERIA_ONCOPHORA');
var COOPERIA_PUNCTATA = require('./routes/COOPERIA_PUNCTATA');
var COOPERIA_SURNABADA = require('./routes/COOPERIA_SURNABADA');
var CORACIACARUS_CUCULI = require('./routes/CORACIACARUS_CUCULI');
var CORALLOBOTHRIUM_FIMBRIATUM = require('./routes/CORALLOBOTHRIUM_FIMBRIATUM');
var CORYNOSOMA_CONSTRICTUM = require('./routes/CORYNOSOMA_CONSTRICTUM');
var COSMOCERCOIDES_DUKAE = require('./routes/COSMOCERCOIDES_DUKAE');
var COSMOCERCOIDES_VARIABILIS = require('./routes/COSMOCERCOIDES_VARIABILIS');
var CRASSICUTIS_CICHLASOMAE = require('./routes/CRASSICUTIS_CICHLASOMAE');
var CREPIDOSTOMUM_COOPERI = require('./routes/CREPIDOSTOMUM_COOPERI');
var CREPIDOSTOMUM_CORNUTUM = require('./routes/CREPIDOSTOMUM_CORNUTUM');
var CREPIDOSTOMUM_FARIONIS = require('./routes/CREPIDOSTOMUM_FARIONIS');
var CRUZIA_TENTACULATA = require('./routes/CRUZIA_TENTACULATA');
var CTENOCEPHALIDES_CANIS = require('./routes/CTENOCEPHALIDES_CANIS');
var CTENOCEPHALIDES_FELIS = require('./routes/CTENOCEPHALIDES_FELIS');
var CTENOPHTHALMUS_AGYRTES = require('./routes/CTENOPHTHALMUS_AGYRTES');
var CTENOPHTHALMUS_ASSIMILIS = require('./routes/CTENOPHTHALMUS_ASSIMILIS');
var CTENOPHTHALMUS_BISOCTODENTATUS = require('./routes/CTENOPHTHALMUS_BISOCTODENTATUS');
var CTENOPHTHALMUS_CONGENER = require('./routes/CTENOPHTHALMUS_CONGENER');
var CTENOPHTHALMUS_HAAGI = require('./routes/CTENOPHTHALMUS_HAAGI');
var CTENOPHTHALMUS_NIFETODES = require('./routes/CTENOPHTHALMUS_NIFETODES');
var CTENOPHTHALMUS_NOBILIS = require('./routes/CTENOPHTHALMUS_NOBILIS');
var CTENOPHTHALMUS_ORIENTALIS = require('./routes/CTENOPHTHALMUS_ORIENTALIS');
var CTENOPHTHALMUS_PSEUDAGYRTES = require('./routes/CTENOPHTHALMUS_PSEUDAGYRTES');
var CYATHOSTOMUM_CATINATUM = require('./routes/CYATHOSTOMUM_CATINATUM');
var CYLICOCYCLUS_INSIGNE = require('./routes/CYLICOCYCLUS_INSIGNE');
var CYLICOCYCLUS_NASSATUS = require('./routes/CYLICOCYCLUS_NASSATUS');
var CYLINDROTAENIA_AMERICANA = require('./routes/CYLINDROTAENIA_AMERICANA');
var DASYPSYLLUS_GALLINULAE = require('./routes/DASYPSYLLUS_GALLINULAE');
var DAVAINEA_CESTICILLUS = require('./routes/DAVAINEA_CESTICILLUS');
var DAVAINEA_TETRAGONA = require('./routes/DAVAINEA_TETRAGONA');
var DERMACENTOR_ALBIPICTUS = require('./routes/DERMACENTOR_ALBIPICTUS');
var DERMACENTOR_ANDERSONI = require('./routes/DERMACENTOR_ANDERSONI');
var DERMACENTOR_CIRCUMGUTTATUS = require('./routes/DERMACENTOR_CIRCUMGUTTATUS');
var DERMACENTOR_NITENS = require('./routes/DERMACENTOR_NITENS');
var DERMACENTOR_OCCIDENTALIS = require('./routes/DERMACENTOR_OCCIDENTALIS');
var DERMACENTOR_RETICULATUS = require('./routes/DERMACENTOR_RETICULATUS');
var DERMACENTOR_RHINOCERINUS = require('./routes/DERMACENTOR_RHINOCERINUS');
var DERMACENTOR_VARIABILIS = require('./routes/DERMACENTOR_VARIABILIS');
var DERMATOXYS_VELIGERA = require('./routes/DERMATOXYS_VELIGERA');
var DICTYOCAULUS_FILARIA = require('./routes/DICTYOCAULUS_FILARIA');
var DICTYOCAULUS_VIVIPARUS = require('./routes/DICTYOCAULUS_VIVIPARUS');
var DIPETALONEMA_GRACILE = require('./routes/DIPETALONEMA_GRACILE');
var DIPHYLLOBOTHRIUM_LATUM = require('./routes/DIPHYLLOBOTHRIUM_LATUM');
var DIPLOLAIMELLOIDES_OSCHEI = require('./routes/DIPLOLAIMELLOIDES_OSCHEI');
var DIPYLIDIUM_CANINUM = require('./routes/DIPYLIDIUM_CANINUM');
var DIROFILARIA_IMMITIS = require('./routes/DIROFILARIA_IMMITIS');
var DISPHARYNX_SPIRALIS = require('./routes/DISPHARYNX_SPIRALIS');
var DORATOPSYLLA_DASYCNEMA = require('./routes/DORATOPSYLLA_DASYCNEMA');
var DORYLAIMUS_CARTERI = require('./routes/DORYLAIMUS_CARTERI');
var DORYLAIMUS_FILIFORMIS = require('./routes/DORYLAIMUS_FILIFORMIS');
var DORYLAIMUS_STAGNALIS = require('./routes/DORYLAIMUS_STAGNALIS');
var DRACUNCULUS_INSIGNIS = require('./routes/DRACUNCULUS_INSIGNIS');
var ECHIDNOPHAGA_GALLINACEA = require('./routes/ECHIDNOPHAGA_GALLINACEA');
var ECHINOCOCCUS_GRANULOSUS = require('./routes/ECHINOCOCCUS_GRANULOSUS');
var ECHINORHYNCHUS_GADI = require('./routes/ECHINORHYNCHUS_GADI');
var ECHINORHYNCHUS_SALMONIS = require('./routes/ECHINORHYNCHUS_SALMONIS');
var ECHINOSTOMA_COALITUM = require('./routes/ECHINOSTOMA_COALITUM');
var ECHINOSTOMA_REVOLUTUM = require('./routes/ECHINOSTOMA_REVOLUTUM');
var ELAEOPHORA_SCHNEIDERI = require('./routes/ELAEOPHORA_SCHNEIDERI');
var ENCYCLOMETRA_COLUBRIMURORUM = require('./routes/ENCYCLOMETRA_COLUBRIMURORUM');
var ETHMOLAIMUS_PRATENSIS = require('./routes/ETHMOLAIMUS_PRATENSIS');
var EUGENURIS_SP = require('./routes/EUGENURIS_SP');
var EUPARYPHIUM_INERME = require('./routes/EUPARYPHIUM_INERME');
var FALCULIFER_ROSTRATUS = require('./routes/FALCULIFER_ROSTRATUS');
var FASCIOLA_HEPATICA = require('./routes/FASCIOLA_HEPATICA');
var FASCIOLOIDES_MAGNA = require('./routes/FASCIOLOIDES_MAGNA');
var GABUCINIA_DELIBATA = require('./routes/GABUCINIA_DELIBATA');
var GENARCHELLA_ISABELLAE = require('./routes/GENARCHELLA_ISABELLAE');
var GLYPTHELMIS_QUIETA = require('./routes/GLYPTHELMIS_QUIETA');
var GONGYLONEMA_NEOPLASTICUM = require('./routes/GONGYLONEMA_NEOPLASTICUM');
var GONGYLONEMA_PULCHRUM = require('./routes/GONGYLONEMA_PULCHRUM');
var GONGYLONEMA_SCUTATUM = require('./routes/GONGYLONEMA_SCUTATUM');
var GONGYLONEMA_VERRUCOSUM = require('./routes/GONGYLONEMA_VERRUCOSUM');
var GRAPHIDIELLA_OCHOTONAE = require('./routes/GRAPHIDIELLA_OCHOTONAE');
var HABRONEMA_MUSCAE = require('./routes/HABRONEMA_MUSCAE');
var HAEMAPHYSALIS_ACICULIFER = require('./routes/HAEMAPHYSALIS_ACICULIFER');
var HAEMAPHYSALIS_CORNIGERA = require('./routes/HAEMAPHYSALIS_CORNIGERA');
var HAEMAPHYSALIS_HOODI = require('./routes/HAEMAPHYSALIS_HOODI');
var HAEMAPHYSALIS_HOUYI = require('./routes/HAEMAPHYSALIS_HOUYI');
var HAEMAPHYSALIS_LEACHI = require('./routes/HAEMAPHYSALIS_LEACHI');
var HAEMAPHYSALIS_LEPORISPALUSTRIS = require('./routes/HAEMAPHYSALIS_LEPORISPALUSTRIS');
var HAEMAPHYSALIS_MORELI = require('./routes/HAEMAPHYSALIS_MORELI');
var HAEMAPHYSALIS_PARALEACHI = require('./routes/HAEMAPHYSALIS_PARALEACHI');
var HAEMAPHYSALIS_PARMATA = require('./routes/HAEMAPHYSALIS_PARMATA');
var HAEMAPHYSALIS_PUNCTATA = require('./routes/HAEMAPHYSALIS_PUNCTATA');
var HAEMAPHYSALIS_SILACEA = require('./routes/HAEMAPHYSALIS_SILACEA');
var HAEMAPHYSALIS_SPINULOSA = require('./routes/HAEMAPHYSALIS_SPINULOSA');
var HAEMATOPINUS_EURYSTERNUS = require('./routes/HAEMATOPINUS_EURYSTERNUS');
var HAEMONCHUS_CONTORTUS = require('./routes/HAEMONCHUS_CONTORTUS');
var HAEMONCHUS_PLACEI = require('./routes/HAEMONCHUS_PLACEI');
var HELICOTYLENCHUS_DIHYSTERA = require('./routes/HELICOTYLENCHUS_DIHYSTERA');
var HETERAKIS_GALLINAE = require('./routes/HETERAKIS_GALLINAE');
var HETERAKIS_PAPILLOSA = require('./routes/HETERAKIS_PAPILLOSA');
var HETERAKIS_PERSPICILLUM = require('./routes/HETERAKIS_PERSPICILLUM');
var HETERAKIS_SPUMOSA = require('./routes/HETERAKIS_SPUMOSA');
var HETEROXYNEMA_CUCULLATUM = require('./routes/HETEROXYNEMA_CUCULLATUM');
var HEXAGLANDULA_MUTABILIS = require('./routes/HEXAGLANDULA_MUTABILIS');
var HOPLOPLEURA_ARBORICOLA = require('./routes/HOPLOPLEURA_ARBORICOLA');
var HORSTIA_SP = require('./routes/HORSTIA_SP');
var HYALOMMA_AEGYPTIUM = require('./routes/HYALOMMA_AEGYPTIUM');
var HYALOMMA_ALBIPARMATUM = require('./routes/HYALOMMA_ALBIPARMATUM');
var HYALOMMA_ANATOLICUM = require('./routes/HYALOMMA_ANATOLICUM');
var HYALOMMA_DROMEDARII = require('./routes/HYALOMMA_DROMEDARII');
var HYALOMMA_IMPELTATUM = require('./routes/HYALOMMA_IMPELTATUM');
var HYALOMMA_IMPRESSUM = require('./routes/HYALOMMA_IMPRESSUM');
var HYALOMMA_RUFIPES = require('./routes/HYALOMMA_RUFIPES');
var HYALOMMA_TRUNCATUM = require('./routes/HYALOMMA_TRUNCATUM');
var HYALOMMA_TURANICUM = require('./routes/HYALOMMA_TURANICUM');
var HYMENOLEPIS_DIMINUTA = require('./routes/HYMENOLEPIS_DIMINUTA');
var HYPOPI_SP = require('./routes/HYPOPI_SP');


var RHIPICEPHALUS_LONGUS = require('./routes/RHIPICEPHALUS_LONGUS');
var RHIPICEPHALUS_LUNULATUS = require('./routes/RHIPICEPHALUS_LUNULATUS');
var RHIPICEPHALUS_MACULATUS = require('./routes/RHIPICEPHALUS_MACULATUS');
var RHIPICEPHALUS_MASSEYI = require('./routes/RHIPICEPHALUS_MASSEYI');
var RHIPICEPHALUS_MICROPLUS = require('./routes/RHIPICEPHALUS_MICROPLUS');
var RHIPICEPHALUS_MUEHLENSI = require('./routes/RHIPICEPHALUS_MUEHLENSI');
var RHIPICEPHALUS_MUHSAMAE = require('./routes/RHIPICEPHALUS_MUHSAMAE');
var RHIPICEPHALUS_NITENS = require('./routes/RHIPICEPHALUS_NITENS');
var RHIPICEPHALUS_OCULATUS = require('./routes/RHIPICEPHALUS_OCULATUS');
var RHIPICEPHALUS_PILANS = require('./routes/RHIPICEPHALUS_PILANS');
var RHIPICEPHALUS_PLANUS = require('./routes/RHIPICEPHALUS_PLANUS');
var RHIPICEPHALUS_PRAETEXTATUS = require('./routes/RHIPICEPHALUS_PRAETEXTATUS');
var RHIPICEPHALUS_PRAVUS = require('./routes/RHIPICEPHALUS_PRAVUS');
var RHIPICEPHALUS_PULCHELLUS = require('./routes/RHIPICEPHALUS_PULCHELLUS');
var RHIPICEPHALUS_PUNCTATUS = require('./routes/RHIPICEPHALUS_PUNCTATUS');
var RHIPICEPHALUS_SANGUINEUS = require('./routes/RHIPICEPHALUS_SANGUINEUS');
var RHIPICEPHALUS_SENEGALENSIS = require('./routes/RHIPICEPHALUS_SENEGALENSIS');
var RHIPICEPHALUS_SIMPSONI = require('./routes/RHIPICEPHALUS_SIMPSONI');
var RHIPICEPHALUS_SIMUS = require('./routes/RHIPICEPHALUS_SIMUS');
var RHIPICEPHALUS_SULCATUS = require('./routes/RHIPICEPHALUS_SULCATUS');
var RHIPICEPHALUS_SUPERTRITUS = require('./routes/RHIPICEPHALUS_SUPERTRITUS');
var RHIPICEPHALUS_TRICUSPIS = require('./routes/RHIPICEPHALUS_TRICUSPIS');
var RHIPICEPHALUS_TURANICUS = require('./routes/RHIPICEPHALUS_TURANICUS');
var RHIPICEPHALUS_ZAMBEZIENSIS = require('./routes/RHIPICEPHALUS_ZAMBEZIENSIS');
var RHIPICEPHALUS_ZIEMANNI = require('./routes/RHIPICEPHALUS_ZIEMANNI');
var RHOPALIAS_MACRACANTHUS = require('./routes/RHOPALIAS_MACRACANTHUS');
var SARCOPTES_SCABIEI = require('./routes/SARCOPTES_SCABIEI');
var SCHISTOSOMA_HAEMATOBIUM = require('./routes/SCHISTOSOMA_HAEMATOBIUM');
var SCHISTOSOMA_MANSONI = require('./routes/SCHISTOSOMA_MANSONI');
var SENNERTIA_SP = require('./routes/SENNERTIA_SP');
var SENNERTIONYX_SP = require('./routes/SENNERTIONYX_SP');
var SETARIA_EQUINA = require('./routes/SETARIA_EQUINA');
var SETARIA_LABIATOPAPILLOSA = require('./routes/SETARIA_LABIATOPAPILLOSA');
var SETARIA_YEHI = require('./routes/SETARIA_YEHI');
var SOBOLIPHYME_BATURINI = require('./routes/SOBOLIPHYME_BATURINI');
var SPAULIGODON_GIGANTICUS = require('./routes/SPAULIGODON_GIGANTICUS');
var SPILOPSYLLUS_CUNICULI = require('./routes/SPILOPSYLLUS_CUNICULI');
var SPIROCAMALLANUS_REBECAE = require('./routes/SPIROCAMALLANUS_REBECAE');
var STICHORCHIS_SUBTRIQUETRUS = require('./routes/STICHORCHIS_SUBTRIQUETRUS');
var STRIGEA_FALCONIS = require('./routes/STRIGEA_FALCONIS');
var STRONGYLURIS_BREVICAUDATA = require('./routes/STRONGYLURIS_BREVICAUDATA');
var STRONGYLUS_EDENTATUS = require('./routes/STRONGYLUS_EDENTATUS');
var STRONGYLUS_EQUINUS = require('./routes/STRONGYLUS_EQUINUS');
var STRONGYLUS_VULGARIS = require('./routes/STRONGYLUS_VULGARIS');
var SYNGAMUS_TRACHEA = require('./routes/SYNGAMUS_TRACHEA');
var SYPHACIA_EUTAMII = require('./routes/SYPHACIA_EUTAMII');
var SYPHACIA_OBVELATA = require('./routes/SYPHACIA_OBVELATA');
var TABASCOTREMA_VERAI = require('./routes/TABASCOTREMA_VERAI');
var TAENIA_HYDATIGENA = require('./routes/TAENIA_HYDATIGENA');
var TAENIA_PISIFORMIS = require('./routes/TAENIA_PISIFORMIS');
var TAENIA_SAGINATA = require('./routes/TAENIA_SAGINATA');
var TAENIA_SERIALIS = require('./routes/TAENIA_SERIALIS');
var TAENIA_SOLIUM = require('./routes/TAENIA_SOLIUM');
var TAENIA_TAENIAEFORMIS = require('./routes/TAENIA_TAENIAEFORMIS');
var TELADORSAGIA_CIRCUMCINCTA = require('./routes/TELADORSAGIA_CIRCUMCINCTA');
var THRASSIS_BACCHI = require('./routes/THRASSIS_BACCHI');
var THRASSIS_BACCHI_BACCHI = require('./routes/THRASSIS_BACCHI_BACCHI');
var THRASSIS_BACCHI_GLADIOLIS = require('./routes/THRASSIS_BACCHI_GLADIOLIS');
var THYSANOSOMA_ACTINIOIDES = require('./routes/THYSANOSOMA_ACTINIOIDES');
var TOBRILUS_GRACILIS = require('./routes/TOBRILUS_GRACILIS');
var TORTONIA_SP = require('./routes/TORTONIA_SP');
var TOXASCARIS_LEONINA = require('./routes/TOXASCARIS_LEONINA');
var TOXOCARA_CANIS = require('./routes/TOXOCARA_CANIS');
var TOXOCARA_CATI = require('./routes/TOXOCARA_CATI');
var TOXOCARA_MYSTAX = require('./routes/TOXOCARA_MYSTAX');
var TOXOCARA_MYSTAX = require('./routes/TOXOCARA_MYSTAX');
var TRAVASSOSIUS_AMERICANUS = require('./routes/TRAVASSOSIUS_AMERICANUS');
var TRICHINELLA_SPIRALIS = require('./routes/TRICHINELLA_SPIRALIS');
var TRICHODECTES_ERMINEAE = require('./routes/TRICHODECTES_ERMINEAE');
var TRICHOSTRONGYLUS_AXEI = require('./routes/TRICHOSTRONGYLUS_AXEI');
var TRICHOSTRONGYLUS_CALCARATUS = require('./routes/TRICHOSTRONGYLUS_CALCARATUS');
var TRICHOSTRONGYLUS_COLUBRIFORMIS = require('./routes/TRICHOSTRONGYLUS_COLUBRIFORMIS');
var TRICHURIS_OVIS = require('./routes/TRICHURIS_OVIS');
var TURGIDA_TURGIDA = require('./routes/TURGIDA_TURGIDA');
var TYROPHAGUS_PUTRESCENTIAE = require('./routes/TYROPHAGUS_PUTRESCENTIAE');
var TYROPHAGUS_SIMILIS = require('./routes/TYROPHAGUS_SIMILIS');
var VIDIA_SP = require('./routes/VIDIA_SP');
var XENOPSYLLA_CHEOPIS = require('./routes/XENOPSYLLA_CHEOPIS');
var XIPHINEMA_ELONGATUM = require('./routes/XIPHINEMA_ELONGATUM');
var XIPHINEMA_RADICICOLA = require('./routes/XIPHINEMA_RADICICOLA');
var ZYGOCOTYLE_LUNATA = require('./routes/ZYGOCOTYLE_LUNATA');










// Add species above here and then scroll down
// to add page reference (step 1 of 2)
/*******************************************/

var about = require('./routes/about');
var team = require('./routes/team');
var atlas = require('./routes/atlas');

var app = express();
//var routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing Nova favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enhanced error checking (GLOBAL)
var isType = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
module.exports = isType;

app.use('/', routes);

/* Tell middleware to send out species pages...*/
app.use('/ABBREVIATA_BANCROFTI', ABBREVIATA_BANCROFTI);
app.use('/ABBREVIATA_HASTASPICULA', ABBREVIATA_HASTASPICULA);
app.use('/AGLENCHUS_AGRICOLA', AGLENCHUS_AGRICOLA);
app.use('/ALAIMUS_PRIMITIVUS', ALAIMUS_PRIMITIVUS);
app.use('/ALLOCORRIGIA_FILIFORMIS', ALLOCORRIGIA_FILIFORMIS);
app.use('/ALLOGLOSSIDIUM_CORTI', ALLOGLOSSIDIUM_CORTI);
app.use('/AMALARAEUS_PENICILLIGER', AMALARAEUS_PENICILLIGER);
app.use('/AMBLYOMMA_AMERICANUM', AMBLYOMMA_AMERICANUM);
app.use('/AMBLYOMMA_ASTRION', AMBLYOMMA_ASTRION);
app.use('/AMBLYOMMA_CAJENNENSE', AMBLYOMMA_CAJENNENSE);
app.use('/AMBLYOMMA_COHAERENS', AMBLYOMMA_COHAERENS);
app.use('/AMBLYOMMA_COMPRESSUM', AMBLYOMMA_COMPRESSUM);
app.use('/AMBLYOMMA_CUNEATUM', AMBLYOMMA_CUNEATUM);
app.use('/AMBLYOMMA_EBERNEUM', AMBLYOMMA_EBERNEUM);
app.use('/AMBLYOMMA_EXORNATUM', AMBLYOMMA_EXORNATUM);
app.use('/AMBLYOMMA_FALSOMARMOREUM', AMBLYOMMA_FALSOMARMOREUM);
app.use('/AMBLYOMMA_FIMBRIATUM', AMBLYOMMA_FIMBRIATUM);
app.use('/AMBLYOMMA_FLAVOMACULATUM', AMBLYOMMA_FLAVOMACULATUM);
app.use('/AMBLYOMMA_GEMMA', AMBLYOMMA_GEMMA);
app.use('/AMBLYOMMA_GEOEMYDAE', AMBLYOMMA_GEOEMYDAE);
app.use('/AMBLYOMMA_HEBRAEUM', AMBLYOMMA_HEBRAEUM);
app.use('/AMBLYOMMA_HELVOLUM', AMBLYOMMA_HELVOLUM);
app.use('/AMBLYOMMA_JAVANENSE', AMBLYOMMA_JAVANENSE);
app.use('/AMBLYOMMA_LATUM', AMBLYOMMA_LATUM);
app.use('/AMBLYOMMA_LEPIDUM', AMBLYOMMA_LEPIDUM);
app.use('/AMBLYOMMA_LIMBATUM', AMBLYOMMA_LIMBATUM);
app.use('/AMBLYOMMA_MACULATUM', AMBLYOMMA_MACULATUM);
app.use('/AMBLYOMMA_MARMOREUM', AMBLYOMMA_MARMOREUM);
app.use('/AMBLYOMMA_NUTTALLI', AMBLYOMMA_NUTTALLI);
app.use('/AMBLYOMMA_PAULOPUNCTATUM', AMBLYOMMA_PAULOPUNCTATUM);
app.use('/AMBLYOMMA_POMPOSUM', AMBLYOMMA_POMPOSUM);
app.use('/AMBLYOMMA_RHINOCEROTIS', AMBLYOMMA_RHINOCEROTIS);
app.use('/AMBLYOMMA_SPARSUM', AMBLYOMMA_SPARSUM);
app.use('/AMBLYOMMA_SPLENDIDUM', AMBLYOMMA_SPLENDIDUM);
app.use('/AMBLYOMMA_TESTUDINARIUM', AMBLYOMMA_TESTUDINARIUM);
app.use('/AMBLYOMMA_THOLLONI', AMBLYOMMA_THOLLONI);
app.use('/AMBLYOMMA_TRIGUTTATUM', AMBLYOMMA_TRIGUTTATUM);
app.use('/AMBLYOMMA_VARIEGATUM', AMBLYOMMA_VARIEGATUM);
app.use('/ANAPLECTUS_GRANULOSUS', ANAPLECTUS_GRANULOSUS);
app.use('/ANCYLOSTOMA_CANINUM', ANCYLOSTOMA_CANINUM);
app.use('/ANGIOSTRONGYLUS_CANTONENSIS', ANGIOSTRONGYLUS_CANTONENSIS);
app.use('/ANOMIOPSYLLUS_NUDATUS', ANOMIOPSYLLUS_NUDATUS);
app.use('/ANOPLOCEPHALA_PERFOLIATA', ANOPLOCEPHALA_PERFOLIATA);
app.use('/APHELENCHUS_AVENAE', APHELENCHUS_AVENAE);
app.use('/APHELENCHUS_PARIETINUS', APHELENCHUS_PARIETINUS);
app.use('/APLECTANA_ITZOCANENSIS', APLECTANA_ITZOCANENSIS);
app.use('/APORCELAIMELLUS_OBTUSICAUDATUS', APORCELAIMELLUS_OBTUSICAUDATUS);
app.use('/ARALICHUS_NOBILIS', ARALICHUS_NOBILIS);
app.use('/ARCHAEOPSYLLA_ERINACEI', ARCHAEOPSYLLA_ERINACEI);
app.use('/ARGAS_BRUMPTI', ARGAS_BRUMPTI);
app.use('/ARGAS_CONFUSUS', ARGAS_CONFUSUS);
app.use('/ARGAS_PERSICUS', ARGAS_PERSICUS);
app.use('/ARGAS_VESPERTILIONIS', ARGAS_VESPERTILIONIS);
app.use('/ARGAS_WALKERAE', ARGAS_WALKERAE);
app.use('/ARHYTHMORHYNCHUS_BREVIS', ARHYTHMORHYNCHUS_BREVIS);
app.use('/ASCARIDIA_BONASAE', ASCARIDIA_BONASAE);
app.use('/ASCARIDIA_COLUMBAE', ASCARIDIA_COLUMBAE);
app.use('/ASCARIDIA_GALLI', ASCARIDIA_GALLI);
app.use('/ASCARIDIA_LINEATA', ASCARIDIA_LINEATA);
app.use('/ASCARIS_LUMBRICOIDES', ASCARIS_LUMBRICOIDES);
app.use('/ASCARIS_SUUM', ASCARIS_SUUM);
app.use('/ASCOCOTYLE_LONGA', ASCOCOTYLE_LONGA);
app.use('/ASCOCOTYLE_TENUICOLLIS', ASCOCOTYLE_TENUICOLLIS);
app.use('/BAYLISASCARIS_PROCYONIS', BAYLISASCARIS_PROCYONIS);
app.use('/BOTHRIOCEPHALUS_CUSPIDATUS', BOTHRIOCEPHALUS_CUSPIDATUS);
app.use('/BOTHRIOCROTON_HYDROSAURI', BOTHRIOCROTON_HYDROSAURI);
app.use('/BRACHYCOELIUM_SALAMANDRAE', BRACHYCOELIUM_SALAMANDRAE);
app.use('/BUNOSTOMUM_PHLEBOTOMUM', BUNOSTOMUM_PHLEBOTOMUM);
app.use('/BUNOSTOMUM_TRIGONOCEPHALUM', BUNOSTOMUM_TRIGONOCEPHALUM);
app.use('/CAMALLANUS_OXYCEPHALUS', CAMALLANUS_OXYCEPHALUS);
app.use('/CAPILLARIA_CONTORTA', CAPILLARIA_CONTORTA);
app.use('/CAPILLARIA_TENUISSIMA', CAPILLARIA_TENUISSIMA);
app.use('/CARIOS_VESPERTILIONIS', CARIOS_VESPERTILIONIS);
app.use('/CENTROCESTUS_FORMOSANUS', CENTROCESTUS_FORMOSANUS);
app.use('/CEPHALURIS_COLORADENSIS', CEPHALURIS_COLORADENSIS);
app.use('/CERATOPHYLLUS_FARRENI', CERATOPHYLLUS_FARRENI);
app.use('/CERATOPHYLLUS_GALLINAE', CERATOPHYLLUS_GALLINAE);
app.use('/CERATOPHYLLUS_GAREI', CERATOPHYLLUS_GAREI);
app.use('/CERATOPHYLLUS_HIRUNDINIS', CERATOPHYLLUS_HIRUNDINIS);
app.use('/CERATOPHYLLUS_STYX', CERATOPHYLLUS_STYX);
app.use('/CHABERTIA_OVINA', CHABERTIA_OVINA);
app.use('/CHAETODACTYLUS_KROMBEINI', CHAETODACTYLUS_KROMBEINI);
app.use('/CHAETODACTYLUS_MICHENERI', CHAETODACTYLUS_MICHENERI);
app.use('/CHAETODACTYLUS_SP', CHAETODACTYLUS_SP);
app.use('/CHEILOSPIRURA_HAMULOSA', CHEILOSPIRURA_HAMULOSA);
app.use('/CICHLASOTREMA_UJATI', CICHLASOTREMA_UJATI);
app.use('/CITELLINEMA_BIFURCATUM', CITELLINEMA_BIFURCATUM);
app.use('/CITTOTAENIA_VARIABILIS', CITTOTAENIA_VARIABILIS);
app.use('/CLARKUS_PAPILLATUS', CLARKUS_PAPILLATUS);
app.use('/CLINOSTOMUM_COMPLANATUM', CLINOSTOMUM_COMPLANATUM);
app.use('/CLONORCHIS_SINENSIS', CLONORCHIS_SINENSIS);
app.use('/CONTRACAECUM_MULTIPAPILLATUM', CONTRACAECUM_MULTIPAPILLATUM);
app.use('/CONTRACAECUM_SPICULIGERUM', CONTRACAECUM_SPICULIGERUM);
app.use('/COOPERIA_CURTICEI', COOPERIA_CURTICEI);
app.use('/COOPERIA_ONCOPHORA', COOPERIA_ONCOPHORA);
app.use('/COOPERIA_PUNCTATA', COOPERIA_PUNCTATA);
app.use('/COOPERIA_SURNABADA', COOPERIA_SURNABADA);
app.use('/CORACIACARUS_CUCULI', CORACIACARUS_CUCULI);
app.use('/CORALLOBOTHRIUM_FIMBRIATUM', CORALLOBOTHRIUM_FIMBRIATUM);
app.use('/CORYNOSOMA_CONSTRICTUM', CORYNOSOMA_CONSTRICTUM);
app.use('/COSMOCERCOIDES_DUKAE', COSMOCERCOIDES_DUKAE);
app.use('/COSMOCERCOIDES_VARIABILIS', COSMOCERCOIDES_VARIABILIS);
app.use('/CRASSICUTIS_CICHLASOMAE', CRASSICUTIS_CICHLASOMAE);
app.use('/CREPIDOSTOMUM_COOPERI', CREPIDOSTOMUM_COOPERI);
app.use('/CREPIDOSTOMUM_CORNUTUM', CREPIDOSTOMUM_CORNUTUM);
app.use('/CREPIDOSTOMUM_FARIONIS', CREPIDOSTOMUM_FARIONIS);
app.use('/CRUZIA_TENTACULATA', CRUZIA_TENTACULATA);
app.use('/CTENOCEPHALIDES_CANIS', CTENOCEPHALIDES_CANIS);
app.use('/CTENOCEPHALIDES_FELIS', CTENOCEPHALIDES_FELIS);
app.use('/CTENOPHTHALMUS_AGYRTES', CTENOPHTHALMUS_AGYRTES);
app.use('/CTENOPHTHALMUS_ASSIMILIS', CTENOPHTHALMUS_ASSIMILIS);
app.use('/CTENOPHTHALMUS_BISOCTODENTATUS', CTENOPHTHALMUS_BISOCTODENTATUS);
app.use('/CTENOPHTHALMUS_CONGENER', CTENOPHTHALMUS_CONGENER);
app.use('/CTENOPHTHALMUS_HAAGI', CTENOPHTHALMUS_HAAGI);
app.use('/CTENOPHTHALMUS_NIFETODES', CTENOPHTHALMUS_NIFETODES);
app.use('/CTENOPHTHALMUS_NOBILIS', CTENOPHTHALMUS_NOBILIS);
app.use('/CTENOPHTHALMUS_ORIENTALIS', CTENOPHTHALMUS_ORIENTALIS);
app.use('/CTENOPHTHALMUS_PSEUDAGYRTES', CTENOPHTHALMUS_PSEUDAGYRTES);
app.use('/CYATHOSTOMUM_CATINATUM', CYATHOSTOMUM_CATINATUM);
app.use('/CYLICOCYCLUS_INSIGNE', CYLICOCYCLUS_INSIGNE);
app.use('/CYLICOCYCLUS_NASSATUS', CYLICOCYCLUS_NASSATUS);
app.use('/CYLINDROTAENIA_AMERICANA', CYLINDROTAENIA_AMERICANA);
app.use('/DASYPSYLLUS_GALLINULAE', DASYPSYLLUS_GALLINULAE);
app.use('/DAVAINEA_CESTICILLUS', DAVAINEA_CESTICILLUS);
app.use('/DAVAINEA_TETRAGONA', DAVAINEA_TETRAGONA);
app.use('/DERMACENTOR_ALBIPICTUS', DERMACENTOR_ALBIPICTUS);
app.use('/DERMACENTOR_ANDERSONI', DERMACENTOR_ANDERSONI);
app.use('/DERMACENTOR_CIRCUMGUTTATUS', DERMACENTOR_CIRCUMGUTTATUS);
app.use('/DERMACENTOR_NITENS', DERMACENTOR_NITENS);
app.use('/DERMACENTOR_OCCIDENTALIS', DERMACENTOR_OCCIDENTALIS);
app.use('/DERMACENTOR_RETICULATUS', DERMACENTOR_RETICULATUS);
app.use('/DERMACENTOR_RHINOCERINUS', DERMACENTOR_RHINOCERINUS);
app.use('/DERMACENTOR_VARIABILIS', DERMACENTOR_VARIABILIS);
app.use('/DERMATOXYS_VELIGERA', DERMATOXYS_VELIGERA);
app.use('/DICTYOCAULUS_FILARIA', DICTYOCAULUS_FILARIA);
app.use('/DICTYOCAULUS_VIVIPARUS', DICTYOCAULUS_VIVIPARUS);
app.use('/DIPETALONEMA_GRACILE', DIPETALONEMA_GRACILE);
app.use('/DIPHYLLOBOTHRIUM_LATUM', DIPHYLLOBOTHRIUM_LATUM);
app.use('/DIPLOLAIMELLOIDES_OSCHEI', DIPLOLAIMELLOIDES_OSCHEI);
app.use('/DIPYLIDIUM_CANINUM', DIPYLIDIUM_CANINUM);
app.use('/DIROFILARIA_IMMITIS', DIROFILARIA_IMMITIS);
app.use('/DISPHARYNX_SPIRALIS', DISPHARYNX_SPIRALIS);
app.use('/DORATOPSYLLA_DASYCNEMA', DORATOPSYLLA_DASYCNEMA);
app.use('/DORYLAIMUS_CARTERI', DORYLAIMUS_CARTERI);
app.use('/DORYLAIMUS_FILIFORMIS', DORYLAIMUS_FILIFORMIS);
app.use('/DORYLAIMUS_STAGNALIS', DORYLAIMUS_STAGNALIS);
app.use('/DRACUNCULUS_INSIGNIS', DRACUNCULUS_INSIGNIS);
app.use('/ECHIDNOPHAGA_GALLINACEA', ECHIDNOPHAGA_GALLINACEA);
app.use('/ECHINOCOCCUS_GRANULOSUS', ECHINOCOCCUS_GRANULOSUS);
app.use('/ECHINORHYNCHUS_GADI', ECHINORHYNCHUS_GADI);
app.use('/ECHINORHYNCHUS_SALMONIS', ECHINORHYNCHUS_SALMONIS);
app.use('/ECHINOSTOMA_COALITUM', ECHINOSTOMA_COALITUM);
app.use('/ECHINOSTOMA_REVOLUTUM', ECHINOSTOMA_REVOLUTUM);
app.use('/ELAEOPHORA_SCHNEIDERI', ELAEOPHORA_SCHNEIDERI);
app.use('/ENCYCLOMETRA_COLUBRIMURORUM', ENCYCLOMETRA_COLUBRIMURORUM);
app.use('/ETHMOLAIMUS_PRATENSIS', ETHMOLAIMUS_PRATENSIS);
app.use('/EUGENURIS_SP', EUGENURIS_SP);
app.use('/EUPARYPHIUM_INERME', EUPARYPHIUM_INERME);
app.use('/FALCULIFER_ROSTRATUS', FALCULIFER_ROSTRATUS);
app.use('/FASCIOLA_HEPATICA', FASCIOLA_HEPATICA);
app.use('/FASCIOLOIDES_MAGNA', FASCIOLOIDES_MAGNA);
app.use('/GABUCINIA_DELIBATA', GABUCINIA_DELIBATA);
app.use('/GENARCHELLA_ISABELLAE', GENARCHELLA_ISABELLAE);
app.use('/GLYPTHELMIS_QUIETA', GLYPTHELMIS_QUIETA);
app.use('/GONGYLONEMA_NEOPLASTICUM', GONGYLONEMA_NEOPLASTICUM);
app.use('/GONGYLONEMA_PULCHRUM', GONGYLONEMA_PULCHRUM);
app.use('/GONGYLONEMA_SCUTATUM', GONGYLONEMA_SCUTATUM);
app.use('/GONGYLONEMA_VERRUCOSUM', GONGYLONEMA_VERRUCOSUM);
app.use('/GRAPHIDIELLA_OCHOTONAE', GRAPHIDIELLA_OCHOTONAE);
app.use('/HABRONEMA_MUSCAE', HABRONEMA_MUSCAE);
app.use('/HAEMAPHYSALIS_ACICULIFER', HAEMAPHYSALIS_ACICULIFER);
app.use('/HAEMAPHYSALIS_CORNIGERA', HAEMAPHYSALIS_CORNIGERA);
app.use('/HAEMAPHYSALIS_HOODI', HAEMAPHYSALIS_HOODI);
app.use('/HAEMAPHYSALIS_HOUYI', HAEMAPHYSALIS_HOUYI);
app.use('/HAEMAPHYSALIS_LEACHI', HAEMAPHYSALIS_LEACHI);
app.use('/HAEMAPHYSALIS_LEPORISPALUSTRIS', HAEMAPHYSALIS_LEPORISPALUSTRIS);
app.use('/HAEMAPHYSALIS_MORELI', HAEMAPHYSALIS_MORELI);
app.use('/HAEMAPHYSALIS_PARALEACHI', HAEMAPHYSALIS_PARALEACHI);
app.use('/HAEMAPHYSALIS_PARMATA', HAEMAPHYSALIS_PARMATA);
app.use('/HAEMAPHYSALIS_PUNCTATA', HAEMAPHYSALIS_PUNCTATA);
app.use('/HAEMAPHYSALIS_SILACEA', HAEMAPHYSALIS_SILACEA);
app.use('/HAEMAPHYSALIS_SPINULOSA', HAEMAPHYSALIS_SPINULOSA);
app.use('/HAEMATOPINUS_EURYSTERNUS', HAEMATOPINUS_EURYSTERNUS);
app.use('/HAEMONCHUS_CONTORTUS', HAEMONCHUS_CONTORTUS);
app.use('/HAEMONCHUS_PLACEI', HAEMONCHUS_PLACEI);
app.use('/HELICOTYLENCHUS_DIHYSTERA', HELICOTYLENCHUS_DIHYSTERA);
app.use('/HETERAKIS_GALLINAE', HETERAKIS_GALLINAE);
app.use('/HETERAKIS_PAPILLOSA', HETERAKIS_PAPILLOSA);
app.use('/HETERAKIS_PERSPICILLUM', HETERAKIS_PERSPICILLUM);
app.use('/HETERAKIS_SPUMOSA', HETERAKIS_SPUMOSA);
app.use('/HETEROXYNEMA_CUCULLATUM', HETEROXYNEMA_CUCULLATUM);
app.use('/HEXAGLANDULA_MUTABILIS', HEXAGLANDULA_MUTABILIS);
app.use('/HOPLOPLEURA_ARBORICOLA', HOPLOPLEURA_ARBORICOLA);
app.use('/HORSTIA_SP', HORSTIA_SP);
app.use('/HYALOMMA_AEGYPTIUM', HYALOMMA_AEGYPTIUM);
app.use('/HYALOMMA_ALBIPARMATUM', HYALOMMA_ALBIPARMATUM);
app.use('/HYALOMMA_ANATOLICUM', HYALOMMA_ANATOLICUM);
app.use('/HYALOMMA_DROMEDARII', HYALOMMA_DROMEDARII);
app.use('/HYALOMMA_IMPELTATUM', HYALOMMA_IMPELTATUM);
app.use('/HYALOMMA_IMPRESSUM', HYALOMMA_IMPRESSUM);
app.use('/HYALOMMA_RUFIPES', HYALOMMA_RUFIPES);
app.use('/HYALOMMA_TRUNCATUM', HYALOMMA_TRUNCATUM);
app.use('/HYALOMMA_TURANICUM', HYALOMMA_TURANICUM);
app.use('/HYMENOLEPIS_DIMINUTA', HYMENOLEPIS_DIMINUTA);
app.use('/HYPOPI_SP', HYPOPI_SP);


app.use('/RHIPICEPHALUS_LONGUS', RHIPICEPHALUS_LONGUS);
app.use('/RHIPICEPHALUS_LUNULATUS', RHIPICEPHALUS_LUNULATUS);
app.use('/RHIPICEPHALUS_MACULATUS', RHIPICEPHALUS_MACULATUS);
app.use('/RHIPICEPHALUS_MASSEYI', RHIPICEPHALUS_MASSEYI);
app.use('/RHIPICEPHALUS_MICROPLUS', RHIPICEPHALUS_MICROPLUS);
app.use('/RHIPICEPHALUS_MUEHLENSI', RHIPICEPHALUS_MUEHLENSI);
app.use('/RHIPICEPHALUS_MUHSAMAE', RHIPICEPHALUS_MUHSAMAE);
app.use('/RHIPICEPHALUS_NITENS', RHIPICEPHALUS_NITENS);
app.use('/RHIPICEPHALUS_OCULATUS', RHIPICEPHALUS_OCULATUS);
app.use('/RHIPICEPHALUS_PILANS', RHIPICEPHALUS_PILANS);
app.use('/RHIPICEPHALUS_PLANUS', RHIPICEPHALUS_PLANUS);
app.use('/RHIPICEPHALUS_PRAETEXTATUS', RHIPICEPHALUS_PRAETEXTATUS);
app.use('/RHIPICEPHALUS_PRAVUS', RHIPICEPHALUS_PRAVUS);
app.use('/RHIPICEPHALUS_PULCHELLUS', RHIPICEPHALUS_PULCHELLUS);
app.use('/RHIPICEPHALUS_PUNCTATUS', RHIPICEPHALUS_PUNCTATUS);
app.use('/RHIPICEPHALUS_SANGUINEUS', RHIPICEPHALUS_SANGUINEUS);
app.use('/RHIPICEPHALUS_SENEGALENSIS', RHIPICEPHALUS_SENEGALENSIS);
app.use('/RHIPICEPHALUS_SIMPSONI', RHIPICEPHALUS_SIMPSONI);
app.use('/RHIPICEPHALUS_SIMUS', RHIPICEPHALUS_SIMUS);
app.use('/RHIPICEPHALUS_SULCATUS', RHIPICEPHALUS_SULCATUS);
app.use('/RHIPICEPHALUS_SUPERTRITUS', RHIPICEPHALUS_SUPERTRITUS);
app.use('/RHIPICEPHALUS_TRICUSPIS', RHIPICEPHALUS_TRICUSPIS);
app.use('/RHIPICEPHALUS_TURANICUS', RHIPICEPHALUS_TURANICUS);
app.use('/RHIPICEPHALUS_ZAMBEZIENSIS', RHIPICEPHALUS_ZAMBEZIENSIS);
app.use('/RHIPICEPHALUS_ZIEMANNI', RHIPICEPHALUS_ZIEMANNI);
app.use('/RHOPALIAS_MACRACANTHUS', RHOPALIAS_MACRACANTHUS);
app.use('/SARCOPTES_SCABIEI', SARCOPTES_SCABIEI);
app.use('/SCHISTOSOMA_HAEMATOBIUM', SCHISTOSOMA_HAEMATOBIUM);
app.use('/SCHISTOSOMA_MANSONI', SCHISTOSOMA_MANSONI);
app.use('/SENNERTIA_SP', SENNERTIA_SP);
app.use('/SENNERTIONYX_SP', SENNERTIONYX_SP);
app.use('/SETARIA_EQUINA', SETARIA_EQUINA);
app.use('/SETARIA_LABIATOPAPILLOSA', SETARIA_LABIATOPAPILLOSA);
app.use('/SETARIA_YEHI', SETARIA_YEHI);
app.use('/SOBOLIPHYME_BATURINI', SOBOLIPHYME_BATURINI);
app.use('/SPAULIGODON_GIGANTICUS', SPAULIGODON_GIGANTICUS);
app.use('/SPILOPSYLLUS_CUNICULI', SPILOPSYLLUS_CUNICULI);
app.use('/SPIROCAMALLANUS_REBECAE', SPIROCAMALLANUS_REBECAE);
app.use('/STICHORCHIS_SUBTRIQUETRUS', STICHORCHIS_SUBTRIQUETRUS);
app.use('/STRIGEA_FALCONIS', STRIGEA_FALCONIS);
app.use('/STRONGYLURIS_BREVICAUDATA', STRONGYLURIS_BREVICAUDATA);
app.use('/STRONGYLUS_EDENTATUS', STRONGYLUS_EDENTATUS);
app.use('/STRONGYLUS_EQUINUS', STRONGYLUS_EQUINUS);
app.use('/STRONGYLUS_VULGARIS', STRONGYLUS_VULGARIS);
app.use('/SYNGAMUS_TRACHEA', SYNGAMUS_TRACHEA);
app.use('/SYPHACIA_EUTAMII', SYPHACIA_EUTAMII);
app.use('/SYPHACIA_OBVELATA', SYPHACIA_OBVELATA);
app.use('/TABASCOTREMA_VERAI', TABASCOTREMA_VERAI);
app.use('/TAENIA_HYDATIGENA', TAENIA_HYDATIGENA);
app.use('/TAENIA_PISIFORMIS', TAENIA_PISIFORMIS);
app.use('/TAENIA_SAGINATA', TAENIA_SAGINATA);
app.use('/TAENIA_SERIALIS', TAENIA_SERIALIS);
app.use('/TAENIA_SOLIUM', TAENIA_SOLIUM);
app.use('/TAENIA_TAENIAEFORMIS', TAENIA_TAENIAEFORMIS);
app.use('/TELADORSAGIA_CIRCUMCINCTA', TELADORSAGIA_CIRCUMCINCTA);
app.use('/THRASSIS_BACCHI', THRASSIS_BACCHI);
app.use('/THRASSIS_BACCHI_BACCHI', THRASSIS_BACCHI_BACCHI);
app.use('/THRASSIS_BACCHI_GLADIOLIS', THRASSIS_BACCHI_GLADIOLIS);
app.use('/THYSANOSOMA_ACTINIOIDES', THYSANOSOMA_ACTINIOIDES);
app.use('/TOBRILUS_GRACILIS', TOBRILUS_GRACILIS);
app.use('/TORTONIA_SP', TORTONIA_SP);
app.use('/TOXASCARIS_LEONINA', TOXASCARIS_LEONINA);
app.use('/TOXOCARA_CANIS', TOXOCARA_CANIS);
app.use('/TOXOCARA_CATI', TOXOCARA_CATI);
app.use('/TOXOCARA_MYSTAX', TOXOCARA_MYSTAX);
app.use('/TRAVASSOSIUS_AMERICANUS', TRAVASSOSIUS_AMERICANUS);
app.use('/TRICHINELLA_SPIRALIS', TRICHINELLA_SPIRALIS);
app.use('/TRICHODECTES_ERMINEAE', TRICHODECTES_ERMINEAE);
app.use('/TRICHOSTRONGYLUS_AXEI', TRICHOSTRONGYLUS_AXEI);
app.use('/TRICHOSTRONGYLUS_CALCARATUS', TRICHOSTRONGYLUS_CALCARATUS);
app.use('/TRICHOSTRONGYLUS_COLUBRIFORMIS', TRICHOSTRONGYLUS_COLUBRIFORMIS);
app.use('/TRICHURIS_OVIS', TRICHURIS_OVIS);
app.use('/TURGIDA_TURGIDA', TURGIDA_TURGIDA);
app.use('/TYROPHAGUS_PUTRESCENTIAE', TYROPHAGUS_PUTRESCENTIAE);
app.use('/TYROPHAGUS_SIMILIS', TYROPHAGUS_SIMILIS);
app.use('/VIDIA_SP', VIDIA_SP);
app.use('/XENOPSYLLA_CHEOPIS', XENOPSYLLA_CHEOPIS);
app.use('/XIPHINEMA_ELONGATUM', XIPHINEMA_ELONGATUM);
app.use('/XIPHINEMA_RADICICOLA', XIPHINEMA_RADICICOLA);
app.use('/ZYGOCOTYLE_LUNATA', ZYGOCOTYLE_LUNATA);







// Add page reference here (step 2)
/*******************************************/

app.use('/about', about);
app.use('/team', team);
app.use('/atlas', atlas);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
