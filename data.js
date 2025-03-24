let routesArray = ["1", "1/25S", "1/25S/229", "1B", "1C", "1D", "1D/229", "1D/299", "1H", "1HD", "1J", "1JL", "1JK", "1K", "1L", "1MD", "1P", "1P/25S", "1V", "1VM", "1VS", "1W", "1X", "1Z", "1Z/229", "1Z/251", "1Z/539", "2", "2/25S", "2C", "2J", "2K", "2U", "2Z", "2Z/251", "3", "3C", "3D", "3DN", "3H", "3HN", "3K", "3K/6M", "3K/90L", "3K/95", "3K/102", "3K/102B", "3K/203N", "3K/242", "3K/252", "3K/281", "3KJ", "3KN", "3KN/6M", "3KN/95", "3L", "3M", "3N", "3N/203N", "3T", "3Y", "5/5R", "5G", "5K", "5KM", "5K/16A", "5K/16AD", "5K/16C", "5K/16CD", "5K/16D", "5K/25S", "5K/92A", "5K/92R", "5K/120K", "5K/125", "5K/188", "5K/229", "5K/251", "5M", "5R", "5R/5", "5W", "6IW/252", "6L/281", "6M/3K", "6M/3KN", "6R", "6RK", "6X", "7Z", "7Z/251", "8/37", "8A", "8A/85", "8A/178G", "8A/251", "8A/252S", "8A/253", "8A/532", "8A/539", "8AK", "8C", "8C/85P", "8C/229", "8N", "8R", "8UA", "9A", "9F", "9K", "9K/102", "9K/230P", "9K/272G", "9X", "9X/41C", "9X/230P", "9X/272G", "9X/283D", "9XM", "9XM/230P", "9YF", "10", "10F", "10FV", "10H", "10H/16A", "10H/16C", "10H/18C", "10HA", "10HL", "10HP", "10HW", "10J", "10J/171", "10JP", "10K", "10K/250", "10KJ", "10KJ/18", "10KL", "10KM", "10KM/224G", "10W", "10Y", "10YF", "10YF/16S", "11W", "14P", "14PX", "15D", "15H", "15H/20", "15H/242RG", "15D/20", "16/20", "16A", "16A/5K", "16A/10H", "16A/20", "16A/47L", "16A/47W", "16A/49M", "16A/219", "16A/281R", "16AD/5K", "16AK", "16C", "16C/5K", "16C/10H", "16C/38T", "16C/47L", "16C/49M", "16C/281", "16CR", "16CR/38T", "16CD", "16CD/5K", "16CD/49M", "16D", "16D/5K", "16D/24B", "16D/49M", "16ES", "16H", "16H/49M", "16NY", "16P", "16PX", "16R/20", "16S/10YF", "17/219", "17CS", "17D", "17DH", "17DS", "17DV", "17H", "17H/29B", "17H/47W", "17H/219", "17H/242", "17HN", "17S", "17V", "18", "18/10KJ", "18/47U", "18/272G", "18/283S", "18B", "18C", "18C/10H", "18C/30", "18C/219", "18C/229", "18J", "18R", "18V", "18VJ", "18VS", "19F", "19K", "19K/288D", "19KJ", "19KM", "19M", "19MP", "19S", "19S/505", "19YF", "20/15H", "20/15D", "20/16", "20/16A", "20/16R", "20/280", "20P", "21W", "22", "22/49E", "22/90L", "22D", "22K", "23B", "23BK", "23BS", "23GF", "23GS", "23K", "23T", "24", "24B", "24B/16D", "24B/281", "24BA", "24BJ", "24E", "24J", "24L/281", "24S", "24S/273", "24SS", "25A", "25AJ", "25AJ/M", "25M", "25MS", "25P", "25S", "25S/1", "25S/1P", "25S/2", "25S/5K", "25S/227", "25S/229", "26M", "26M/49M", "26N", "29B", "29B/17H", "29B/272G", "29B/272I", "29Q", "29S", "30", "30S", "30/18C", "30/280", "31", "37", "37/8", "38EX", "38M", "38X", "38T", "38T/16C", "38T/16CR", "40", "41C/9X", "44X", "45F", "46", "47D/224", "47L", "47L/16A", "47L/16C", "47U/18", "47Y", "47YM", "47W/16A", "47W/17H", "49", "49/250", "49A", "49E/22", "49M", "49M/16A", "49M/16C", "49M/16CD", "49M/16D", "49M/16H", "49M/26M", "49M/92A", "49M/188B", "49M/229", "49M/250", "49M/250C", "49M/250D", "49MT", "49MT/250", "50B", "65/116GA", "65M/116G", "65M/123", "65MG", "66G", "71A", "71AB", "71K", "72", "72/277D", "72H", "72HK", "72J", "72V", "83J", "83J/272G", "83JA", "85/8A", "85P/8C", "85/253L", "85V", "86A", "86C", "86J", "86K", "90/253T", "90/300", "90B", "90BE", "90DL", "90NU", "90U/203U", "90L", "90L/3K", "90L/22", "90L/229", "90L/229S", "90L/251", "90LK", "90LV", "92A", "92A/5K", "92A/49M", "92K", "92R", "92R/5K", "94R", "94RM", "95", "95/3K", "95/3KN", "95K", "95M", "100/299", "100M", "100V", "100X", "102", "102/3K", "102/9K", "102/185", "102/218", "102/253L", "102B", "102B/3K", "102B/203N", "102B/218", "102M", "103", "104A", "104R", "105", "107JD", "107JL", "107JS", "107VL", "107VR", "107VS", "113B", "113F", "113IM", "113K", "113KL", "113KM", "113M", "113M/120", "113M/281", "113M/288", "113MP", "113S", "113W", "113YH", "113YIW", "113FT", "113KLT", "113ILT", "113KT", "113FZ", "113MZ", "113IMZ", "115", "116/220K", "116G/65M", "116GA/65", "116N", "116N/220K", "116NL", "117", "118W/300", "119M", "120", "120/113M", "120K/5K", "123", "123/65M", "125/5K", "126/300", "126M", "127AL", "127DA", "127K", "127KL", "147", "156/205F", "156/299", "156/505", "156H", "156L", "156S", "156V", "156V/505", "158", "158FL", "158HF", "158VF", "171", "171/10J", "171K", "171K/198W", "171K/219", "171R", "171M/189M", "178G/8A", "183B", "183SS", "183S/219", "185/102", "185G", "187KL", "187KH", "188", "188/5K", "188/251", "188B/49M", "189M", "189M/171M", "189M/272G", "195", "195/272", "195G", "195GJ", "195GK", "195H", "195J", "195P", "195W", "195WJ", "195WP", "198W/171K", "201", "201G", "201K", "201M", "201Q", "201/290U", "201T/290U", "202B", "202K/290U", "203A", "203A/218", "203AK", "203AR", "203N", "203N/3K", "203N/3N", "203N/102B", "203N/218", "203U", "203U/90U", "204/290U", "204DA", "204U", "204UA", "205", "205A", "205A/290U", "205B/290U", "205F/156", "205M/290U", "211", "211/242", "211B", "211CD", "211D", "211DY", "211K", "211M", "212", "212/702", "212T", "215", "216", "216KL", "216M", "217", "217/254", "217C", "217D", "218", "218/102", "218/102B", "218/203A", "218/203N", "218/224MN", "218/277K", "218A", "218C", "218CA", "218D", "218H", "218L", "219", "219/16A", "219/17", "219/17H", "219/18C", "219/171K", "219/183S", "219/224G", "219/229", "219/250", "219/272G", "219/280", "219I/224G", "219I/272G", "219MP", "220G", "220K/116", "220K/116N", "221", "221G", "222A", "222L", "224/47D", "224B", "224G", "224G/10KM", "224G/219", "224G/219I", "224MN", "224MN/218", "224X", "226", "227", "227/25S", "229", "229/1D", "229/1Z", "229/5K", "229/8C", "229/18C", "229/25S", "229/49M", "229/90L", "229/219", "229/279", "229/290", "229/290U", "229B", "229S/90L", "230A", "230AN", "230P", "230P/9K", "230P/9X", "230P/9XM", "231", "231KN", "233", "241T", "242", "242/3K", "242/17H", "242/211", "242/272G", "242A", "242B", "242BJ", "242G", "242GA", "242RG", "242RG/15H", "245A", "250", "250/10K", "250/49", "250/49M", "250/49MT", "250/219", "250/281", "250C", "250C/49M", "250D", "250D/49M", "250E", "250S", "250SS", "251/1Z", "251/2Z", "251/5K", "251/7Z", "251/8A", "251/90L", "251/188", "251/300", "251M", "252/3K", "252/6IW", "252S", "252S/8A", "253", "253/8A", "253L/85", "253L/102", "253T/90", "253W", "254/217", "272", "272/195", "272B", "272G/9K", "272G/9X", "272G/18", "272G/29B", "272G/83J", "272G/189M", "272G/219", "272G/219I", "272G/242", "272I/29B", "273/24S", "277", "277D", "277D/72", "277K/218", "277L", "277N", "277S", "279", "279/229", "279U", "280", "280/20", "280/30", "280/219", "280/492", "280/488", "280B", "280I", "280J", "280N", "280X", "281", "281/3K", "281/6L", "281/16C", "281/24B", "281/24L", "281/113M", "281/250", "281R/16A", "282K", "283C", "283D/9X", "283K", "283T", "283VS", "283S/18", "284P", "288", "288/113M", "288A", "288C", "288D", "288E", "288K", "288NB", "288R", "288Y", "288D/19K", "290", "290/229", "290KJ", "290KP", "290U", "290U/201", "290U/201T", "290U/202K", "290U/204", "290U/205A", "290U/205B", "290U/205M", "290U/229", "290U/463", "290U/555", "290UA", "290UF", "299", "299/1D", "299/100", "299/156", "299D", "300", "300/90", "300/118W", "300/126", "300/251", "300/539", "300A", "300L", "412", "444", "445", "447R", "458", "463", "463/290U", "464", "488/280", "490S", "492/280", "495", "497", "498", "498K", "498U", "498VJ", "505", "505/19S", "505/156", "505/156V", "523K", "524", "530", "532", "532/8A", "537", "539", "539/1Z", "539/8A", "539/300", "546", "555", "555/290U", "567", "568", "571T", "578", "580", "589", "592", "593", "702/212"]

let fullNames = ["7 Temples", "Pulicut Rajkumar Road", "Puranapool Circle", "Abids", "Abids GPO", "Adarsh Nagar", "Durga Nagar (Musi)", "Adibatla", "Adikmet", "Kowkoor", "Janapriya (KWKR)", "Afzalgunj", "Dr. Narayana College", "Kismatpur Village", "MB Dargah X Roads", "Airport Boulevard", "Alind/Doyens Colony", "Aliyabad", "Alkapuri", "Allwyn X Roads", "Allwyn Colony", "Almasguda", "Almasguda PG College", "Alugadda Bhavi", "Alwal", "Alwal Police Station", "Alwal Temple", "Langer House X Roads", "Ambedkar Degree College", "Ambedkar Nagar", "Ambedkar Nagar (ALWL)", "Amberpet", "Amberpet Ali Cafe", "Amberpet Gandhi Statue", "KPHB Temple", "Telephone Exchange", "Ameerpet", "Toli Masjid", "Ammuguda Bazar", "Anandh Bagh X Roads", "Jiyaguda KHT", "Anandh Nagar (NGL)", "Andhra Jyothi", "Andhra Mahila Sabha", "Angadipeta", "Anjaneya Tower", "Ankireddy Pally", "NLB Nagar", "Sai Nagar (KP)", "Annapurna Nagar", "Annojiguda", "Anthaipally", "Medchal PS", "Anutex", "Military Hospital", "Prajay Nivas", "Sri Niwas Nagar", "Rodamestri Nagar", "KPHB 5th Phase", "Apuroopa Colony", "Aramghar", "Arts College", "Arts College Stn.", "HAL Colony", "Arunodaya Nagar", "UMCC Hospital", "AS Rao Nagar", "Ashok Nagar (RTCX)", "Ashok Nagar (BHEL)", "Ashok Nagar (NFC)", "Ashok Nagar X Roads", "Dayananda Nagar", "Asif Nagar", "Ashish Gardens", "Assembly", "Keesara ORR", "Attapur", "Sikh Basti", "Aushapur", "Auto Nagar", "Mahadevpur Colony", "NTR Statue (BDUPL)", "Ayyappa Colony", "Aziz Nagar X Road", "Nandana Nagar", "Babul Reddy Nagar", "Budvel Green City", "Bachupally X Roads", "Bagh Lingampally", "Bahudurpally X Roads", "Bahudurpura", "Addagutta", "Balaji Nagar", "Balaji Nagar (NRPLY)", "Balaji Rice Mill", "Lakdikapul (BJR CLG)", "Balanagar", "Yapral Zphs", "Balapur", "Balapur X Roads", "Father Balaya Nagar", "Mallikarjuna Nagar", "Budvel Village", "Bandlaguda (CDRYGT)", "Bandlaguda (LGRHS)", "Bandlaguda (NGRM)", "Bandlaguda (NGL)", "Bandlaguda Depot", "Banjara Hills", "Bank Colony", "Bank Street (Koti)", "Bapu Ghat", "Lodha Apartment", "Barkas", "Barkatpura", "Godavari Homes", "Bata", "Safilguda Station", "AOC Center", "Devaryamjal Village", "Beerappa Gadda", "Begum Bazar", "Begumpet", "Suchitra Chermas", "NTR Nagar (KPHB)", "Bhagya Latha", "Bhagya Nagar Colony", "Bharath Nagar", "Bhavani Nagar", "Beeramguda", "Gangaram (Hanuman Temple)", "Bholakpur", "Bhudevi Nagar", "Bhupesh Guptha Nagar", "Bharath Nagar (KWKR)", "Bibi Bazar", "NPPTI", "Bible House", "Bio Diversity", "Birla Mandir", "Bits Pilani", "Sikh Village", "BN Reddy Nagar", "Boats Club", "Boduppal", "Sunny Bakery", "Boduppal X Roads", "Bogaram", "Boiguda", "Bollarum", "Bollarum IDA", "Bongloor X Roads", "Borabanda", "Cyberabad PS", "HCL Phase 1", "Bowenpally Check Post", "Bowenpally X Roads", "Bowrampet", "Bowrampet X Roads", "Brahmanpally", "Murali Shyam", "Galaxy Talkies", "VV Nagar Colony", "Vasanth Vihar Colony", "Budvel Station", "Budvel", "Bulkapur", "Bus Bhavan", "BVRIT", "Rajiv Gruhakalpa (KWKR)", "Canara Nagar", "Cavalry Barracks", "Carbon", "Care Hospital", "Yellamma Banda", "CBIT", "CBIT Hostel", "Vaishnodevi Temple", "Bhatia Bakery", "Hanumanpet Chowk", "Chaderghat", "Chaderghat X Roads", "Paradise Center", "Chaitanyapuri", "Chakripuram", "Champapet", "Satya Alwal", "Chanchalguda", "Chanda Nagar", "Bhagya Nagar (KPHB)", "Chandrayangutta", "Raidurgam PS", "Chandrayangutta X Roads", "Charminar", "Chatrinaka", "Chengicherla", "Chengicherla Depot", "Chengicherla X Roads", "ISI Street 8", "Gandhi Hospital Backside", "Sai Ram Nagar (Kapra)", "Cheriyal X Roads", "Cherlapally", "Chey Number", "Chikkadpally", "Chilka Nagar", "Chilkalguda", "Chilkalguda X Roads", "Ambedkar Statue (BDUPL)", "Chilkoor Balaji Temple", "West Marredpally", "Old Hafeezpet", "Chintal", "Ayodhya Colony", "Chintal X Roads", "Chintalakunta", "Chintalakunta Checkpost", "Gandhi Nagar (AOC)", "Mallampet X Roads", "Sai Nagar Colony (CGCL)", "City Bus Station", "City College", "Clock Tower", "CMR College", "Kousalya Colony Road", "Contonment Hospital", "CRPF", "CRPF Gate (BRKS)", "RG Nagar (BCHPLY)", "Cyber Towers", "Kabir Nagar", "Dairy Farm", "Dairy Farm (CNTLMT)", "Dammaiguda", "Dammaiguda X Roads", "Danama Jhopdi", "GRIET College", "Jaipuri Colony DRF", "Darul Shifa", "Gautham Nagar", "Nizampet Water Tank", "Defence Colony", "Delhi Tubes", "Devaryamjal", "Vinayak Nagar (RMPLY)", "DGQA Quarters", "Dhatu Nagar", "Fathe Nagar X Roads", "Dhulapally X Roads", "Dilshuknagar", "Sai Nagar", "Dongala Mysamma", "Dontanpally", "DRDL", "Mallikarjuna Nagar (RMPLY)", "Madannapet", "Panduranga Nagar", "Sardar Patel Nagar", "DRK College", "Dundigal", "Durga Nagar", "Dwaraka Nagar", "Shivaji Chowk", "Hafeezpet", "East Anandh Bagh", "East Marredpally", "EC Nagar", "ECIL", "ECIL Company", "Amberpet Police Lines", "ECIL X Roads", "Somaiah Nagar", "Edulabad X Roads", "Saidabad Function Hall", "Ekalavya Nagar", "Champapet Gandhi Statue", "EME Center", "Almasguda Kaman", "Engine Bowli", "CYR Colony", "Gokul Theater", "Erragadda", "ESI Hospital", "Balapur Village", "Falaknuma", "Army College", "Malkaram Village", "CRPF X Roads", "Malkaram", "Fathe Nagar", "Ferozguda", "Fiver Hospital", "Film Nagar", "Laxmikala Mandir", "Gachibowli Stadium", "Gachibowli X Roads", "Gagan Pahad", "Gajula Ramaram", "Gajula Ramaram X Roads", "Gandhi Bhavan", "Gandhi Hospital", "Gandhi Nagar", "Kapra Circle", "Gandi Cheruvu X Road", "Madhura Nagar (ALMSGD)", "Gandimaisamma", "Gandipet", "Gandipet X Road", "Gandipet X Road - VIF College", "Ganesh Nagar", "Ganesh Temple (Sec-Bad)", "Gangaputra Colony", "Gangaram", "Gouthami Nagar", "Gayathri Nagar", "CGCL Grampanchayath", "Ghatkesar", "GK Colony", "Godhuma Kunta", "Golconda", "Golconda X Roads", "Vijaydurga Nagar", "Golnaka", "Gopal Nagar", "Farah Nagar", "Govt Hospital (BN Reddy)", "Kondapur RTO", "Madura Nagar", "Govt. College (Bahudrpally)", "Gowli Dhoddi", "Mallegudem", "Gowrelly", "GR Reddy Nagar", "Green Fields", "Green Fields Colony", "Green Lands", "Greenland Colony", "Green Park Colony", "Mallapur (RCI)", "Guddi Malkapur", "RCI X Roads", "Gulmohar Colony", "Kishan Bagh", "Gundla Pochampally", "KPHB Colony MIG", "Gurramguda X Roads", "Guruvayurappan Temple", "Jairam Nagar", "Habsiguda", "Hafiz Baba Nagar", "Hakimpet", "Hanuman Temple", "Hardware Park", "Hasan Nagar", "RTC Colony(Champapet)", "Hasthinapuram", "Hasthinapuram North", "Hasthinapuram South", "Hayathnagar", "Hayathnagar Depot", "HB Colony", "HCL Colony", "HCL X Roads", "HCU Bus Depot", "Maktha", "HCU Main Gate", "Hema Nagar", "9 Number", "MM Pahadi", "High Court Colony", "Hill Country", "Himayath Nagar", "Himayath Nagar Junction", "Boduppal Circle", "Mallikarjuna Temple", "Defence College", "Vayupuri North", "Himmatpura", "Hitech City", "Hitech Theater", "Hitex Kaman", "HMT Nagar", "HQ Tasa", "Huda Colony (SRRNGR)", "Hyderguda", "Hyderguda Dmart", "Hyder Nagar", "Begumpet HPS", "Hyderguda X Roads", "Ibrahim Bagh", "Ibrahimpatnam", "Ibrahimpatnam Center", "IBS", "ICICI Junction", "Icom Tele Limited", "ICRISAT", "IDPL", "Chintalmet", "IG Statue", "Gachibowli DLF", "Image Hospital", "Imam Guda", "Indira Nagar (MLY)", "Indira Nagar X Roads", "Indira Nagar (GCBWLY)", "Indra Nagar (JBLHLS)", "Indira Nagar Colony", "Indiramma Colony", "Indu Aranya Pallavi", "KPHB Circle", "Infosys", "Infotech", "Injapur", "Injapur Cheruvu", "MES Colony", "Irrum Manzil", "IS Sadan", "Bangaru Maisamma", "Badangpet", "Shenoy", "Jagathgirigutta", "Badangpet Village", "Hanuman Temple - Ammuguda", "Jai Jawan Colony", "Jaipuri Colony", "Select Talkies", "Jamai Osmania Stn.", "James Street", "Janapriya", "Jangam Colony", "Gopal Nagar X Roads", "Jayabheri", "JBIT", "National Darbar", "Jeedimetla", "Jeedimetla Substation", "Jeedimetla Village", "JGR Garden", "Jillelguda", "JIMS Hospital", "Jiyaguda", "Aurora College", "JNTU College", "Jodimetla", "Quthbullapur X Roads", "Journlist Colony", "Gandhi Nagar (BDGPT)", "Surya Nagar X Roads", "Jublie Bus Station", "ICICI Turkapally", "Jublie Hills Check Post", "Jumerath Bazar", "Jyothi Nagar (MP)", "Kacheguda Kamela", "Kacheguda Depot", "Kacheguda Station", "Kacheguda Tourist", "Kacheguda X Roads", "Green Homes Colony", "Moggula Ramakrishna", "Kali Mandir", "Kalyan Nagar", "Kamineni Hospitals", "Kamla Nagar", "Chanakyapuri", "Srinivasapuram", "Kandlakoya", "Jonnabanda", "Sai Nagar Cly (ALWL)", "Karkhana", "Sanjeeva Gardens", "Karmanghat", "Katedan", "Kavadiguda", "Surya Nagar", "Keesara", "Keesara Dayara", "Keesaragutta", "Adibatla X Roads", "Usha Kiran Movies", "Keshavagiri Post Office", "Khairathabad", "Khairathabad RTA Office", "Khajaguda", "Khajaguda X Roads", "Khanapur", "Khilwat", "Kismatpur", "Zyka Dhaba", "Cyber Gateway", "Kokapet", "Kokapet X Roads", "New Bollaram X Roads", "Lothkunta X Roads", "Kollur X Roads", "Kompally", "Kondapur", "Korremula", "Korremula Zphs", "Kothaguda X Roads", "Gandhi Nagar X Roads", "Kothapet", "Kothapet X Roads", "Necklace Road", "Cherlapally Jail", "Cherlapally Water Tank", "Koti Bus Station", "Koti Medical College", "Koti Womens College", "Cherlapally IDA", "KPHB Main Road", "KPHB 4th Phase", "Magdum Nagar", "Krishna Kanth Park", "Krishna Nagar", "Friends Colony", "Kistamma Enclave", "Krupa Complex", "Kukatpally", "Kukatpally Govt College", "Kundanpally", "Kundanpally X Roads", "Mind Space", "Kuntloor X Road", "MLA Colony", "Kushaiguda", "Moula Ali Kaman", "Vengal Rao Building", "Ladies Hostel", "Lakadawala", "Lakdi Ka Pul", "Magdum Nagar Colony", "Ayodhya Nagar", "Lal Bazar", "Keesara X Roads", "Keesara PS", "Lal Bunglow", "Ganesh Temple", "Lal Darwaja", "Lal Darwaja X Roads", "Lal Dhaba", "NTR Nagar (JGT)", "Lalaguda", "Lalapet", "Lalitha Nagar", "Lalitha Nagar X Roads", "Langer House", "Anjayya Nagar", "Laxmi Nagar (MP)", "Laxmi Nagar (MLY)", "Botanical Garden", "LB Nagar", "LB Nagar X Roads", "Arundhathi Nagar", "Satya Nagar", "Lemoor Road", "Lenin Nagar", "Liberty", "Lingampally", "Lingampally Station", "Lothkunta", "Loyala Academy", "Bharath Nagar (MLY)", "LV Prasad", "Macha Bollarum", "IG Mint", "Madhapur", "Madhapur Petrol Bunk", "Madhapur PS", "Madhuban", "Madina", "Madinaguda", "Siti Nagar", "Shafi Nagar", "Cherlapally Circle", "Maheshwaram", "Maheshwaram Bus Depot", "Maheshwaram Gate", "Maheshwaram X Roads", "Mailardevpally", "Tatti Annaram X Roads", "Quthbullapur X Roads (GWRLY)", "Makki Darwaja", "Malakpet", "Mud Fort", "Diamond Point", "Nimh Hospital", "Malakpet New Market", "Malkajgiri", "Mallapur", "Mallareddy College", "Domara Pochampally", "Mallepally", "Anandh Bagh (NMDC)", "Mamidipally", "Manchirevula", "Manda Mallamma", "New Maruthi Nagar", "Aleap Circle", "Mangalpally", "Manikeshwar Nagar", "Manikonda", "Manikonda Gardens", "Manikonda Quarters", "Manneguda", "Mansanpalle", "Marripally", "Maruthi Nagar", "Mahavir Hospital", "Masab Tank X Roads", "Masjid Banda", "Raj Bhavan Road", "MB Dargah", "Medchal", "Medchal Checkpost", "Medchal IDA", "Raj Bhavan", "Medipally", "Meerpet", "Meerpet Swimming Pool", "Mehdipatnam", "Ashok Gardens", "Mettuguda", "Mettuguda - Bandlaguda", "MG Bus Station", "MG Nagar", "Maruthi Nagar (DSNR)", "Paisal Banda", "Midhani Depot", "Midhani Township", "Dubai Gate", "Keesaragutta Kaman", "Mirzalguda", "Tirumala Nagar", "Miyakhan Gadda", "Miyapur", "Miyapur Depot", "Miyapur Metro Station", "Miyapur X Roads", "Savitribhai Phule School", "MMR Gardens", "Model School", "BNR Colony", "Dream Vally", "Mohan Nagar", "Moinabad", "Moinabad PS", "Mokhila", "Moosa Bowli", "Moosapet", "Moosarambagh", "Mukchinthal", "Mother Teresa Statue", "Moula Ali", "Ghoshamahal", "Aghapura", "Muppas Panchavathi", "Musheerabad", "MVSR Engineering College", "Mythrivanam", "Vally View Lane", "Nacharam ESI", "Nacharam IDA", "Nacharam", "Nacharam X Roads", "Nadergul", "Nag Mandhir", "Nagaram", "SV Nagar", "Nagaram X Roads", "Nagarjuna Colony", "Old Nagole", "Nagole Metro Station", "Nagole X Roads", "Sitaram Bagh", "Nalgonda X Roads", "Nallakunta", "Milan Talkies", "Namalagundu", "Nampally", "Nanakram Guda", "Nanakram Guda Junction", "Nanal Nagar", "Nandanavanam", "Narapally", "TV9 Office", "Manikonda Pipeline", "Narayanaguda", "Narayanamma Engineering College", "Narsingi", "National Police Academy", "BRC", "Nayapul", "NCL Balaji", "Hasmathpet", "Neknapur", "Mallikarjuna Colony", "Neredmet Old PS", "Neredmet X Roads", "Venkatadri Township", "Bowenpally Market", "New Bridge", "New Ganga Nagar", "New Nagole", "NFC Gate", "NFC X Roads", "NGOs Colony", "NGRI", "Nimboliadda", "NIMS Hospital", "NIMS New Gate", "Osman Sagar", "Nirmal Nagar", "Nizam College", "Nizampet Arch", "Nizampet Village", "Nizampet X Roads", "NMDC", "Noma", "Noorie Pan Shop", "North Kamala Nagar", "Kundanpally ORR", "NTR Nagar", "NTR Stadium", "Temple Road", "Nagaram Water Tank", "Old Alwal ZPHS", "Old Bowenpally", "Old MLA Quarters", "Old Safilguda", "Omkar Nagar", "Prathap Singaram X Roads", "Maktha (KRML)", "ORR Junction", "Osmangunj", "Osmania Hospital", "RTC Colony (MLY)", "OU Colony", "Alkapoor Township", "Owaisi Hospital", "P & T Colony", "Sainathpuram Officers Colony", "Padma Shali Colony", "Padmarao Nagar", "Indira Gruhakalpa", "Padmavathi Nagar", "Pahadi Sharif", "Midhani Company", "Saket", "Pallecheruvu", "Panama", "Panchavati Colony", "Panjagutta", "Gabbilalpet Road", "YMCA (Sec'bad)", "Paradise", "Sampanbole", "Coca Cola X Roads", "Patancheruvu", "Patigadda", "Patny", "Patny Center", "Kongara Kalan ORR", "Pedha Bhavi - Badangpet", "Pedhammagudi", "Peerancheru", "Peerjadiguda Kaman", "Balaji Nagar ZPHS", "Br Ambedkar Circle", "Pension Office", "King Koti", "Manchirevula X Roads", "Police Academy", "Police Lines", "Pool Bagh", "Pothayapalli", "Poultry Center", "Kalpana", "Pragathi Nagar", "Prakash Nagar", "Prashanth Nagar", "Prashanthi Hills", "Volvo Bus Stop", "PS Rao Nagar", "Public Gardens", "Puppalaguda Village", "Puranapool", "Puranapool Outpost", "Purani Havelli", "Jyothi Nagar (LGMPLY)", "Kongara Kalan", "Q City", "Quthbullapur", "Quthbullapur - Gowrelly", "Prasashan Nagar", "Mayuri Nagar", "Radha Soami Satsang", "Radhika Theater", "Ragannaguda", "Banjara Hills Kaman", "Road No. 45", "Appareal Park X Roads", "Pedhammagudi Backside", "Railway Degree College", "Aou University", "Raja Deluxe", "Deccan College", "Rajendra Nagar", "High Court", "Rajendra Nagar Village", "Rajiv Gandhi Nagar", "Rajiv Gruha Kalpa", "Sai Nagar (BLPR)", "Ram Koti", "Ram Koti X Roads", "Ram Nagar", "Jyothi Nagar (MLKJ)", "Ram Nagar (E Seva)", "Ram Nagar Gundu", "Lalapet (Ram Th.)", "Ramachandrapuram", "Ramakrishna Mutt", "Ramanthapur", "Ramanthapur Church", "Ramanthapur HPS", "Ramanthapur Colony", "Ramdev Guda", "Janapriya Sainest", "Rampally", "Rampally Dhayara", "Rampally X Roads", "Rane Company", "SR Naik Nagar Colony", "Ranigunj", "GKS Pride", "Raviryal", "Bairamalguda", "Kakathiya Hills", "RCI", "Janawada X Roads", "Rethibowli", "Vanasthalipuram Complex", "RG Colony", "RGI Airport", "Vinayak Nagar (SHKPT)", "Ring Road", "Risala Bazar", "Proddutur X Roads", "RK Nagar", "RK Nagar - Bandlaguda", "RK Puram", "RL Nagar", "RN Reddy", "Industrial Estate", "RTC Colony (CGCL)", "RTC Colony (HYT)", "RTC X Roads", "SR Nayak Nagar", "Jaipuri Sainagar", "Rythu Bazar", "Bhanur X Roads", "Sadath Nagar", "Sadhana Mandhir", "Safilguda", "Sagar Complex", "Sagar Ring Road", "IDA X Roads", "Sai Nagar Colony", "Saibad X Roads", "Saidabad", "Sainathpuram", "Sainikpuri X Roads", "Telephone Colony", "Venkatasai Nagar", "Puppalaguda", "Salarjung Museum", "Ismail Nagar", "Sanath Nagar", "Sangeeth", "Vittalwadi", "Kedia Biscuit Factory", "Gouse Nagar", "Santhosh Nagar", "Santhoshima Colony", "Fab City", "Wonderla X Roads", "Lanco Hills", "Sarojini Devi Eye Hospital", "Saroor Nagar", "Elephant Circle", "Elephant Chowrastha", "Satamrai", "Satyam X Roads", "Satyanarayana Garden", "MAMS Hospital", "SBI Colony", "Red Tank", "Secretariate", "Secunderabad", "Sai Baba Temple", "Kokapet ORR", "Sree Nagar", "Shadan College", "Shah Ali Banda", "Shaheen Nagar", "Shahpur Nagar", "Shahpur Nagar Rythu Bazar", "Shaikpet", "Shaikpet Dargah", "Shaikpet Nala", "Sama Nagar X Roads", "Shamirpet", "Shamshabad", "Shamshabad Village", "Shankarmutt", "Shankarpally", "Sohini Techpark", "Shanthi Nagar", "Narsimharao Nagar", "Shanthi Nagar (Sun City)", "Shanthi Nagar - Vanasthalipuram", "Sharada", "Sharada Nagar", "ECHS Polytechnic", "Sharan Nagar", "Sheriguda", "Shesh Mahal", "Bismillah Colony", "Venkatapur", "Gar (Kokapet)", "Shivam Road", "Weakers Section Colony", "Shanthi Nagar (VNSTLPRM)", "Thokatta", "Shivarampally X Roads", "Shivareddy Guda", "Kothapet (Salala)", "Shobana", "AOC Records", "Shyam Lal", "Sidhartha Nagar", "Singapur Township", "Nandimuslay Guda", "Siri Giri Puram Gate", "Gowli Dhoddi Village", "Sitafalmandi", "Sitafalmandi X Roads", "SKD Nagar", "Kaisar Nagar", "3 Monkey Junction", "Somajiguda", "Somajiguda Circle", "Shah Meer Dargah", "SP Nagar", "SR Nagar", "Dongalamysamma X Roads", "Sri Indraprastha Colony", "Sri Indu Engineering College", "Sri Nilaya Township", "Sri Ram Colony", "Sri Ram Nagar", "Sri Ram Nagar Colony", "Dhulapally", "Dhulapally NTR Statue", "Sri Sai Ram Theater", "Sri Sharadadhamam", "Jayabheri Meadows", "Indira Nagar (TRMLGR)", "Panchasheela Enclave", "Srinivas Nagar", "Sripuram Colony", "Ramalayam Temple", "State Home", "Subhadra Nagar", "Subhash Nagar", "AOC Gate", "Suchitra", "Sulthan Bazar", "Saidabad Colony", "Sun City", "Kanjiguda", "Survey Of India", "Surya Nagar Colony", "Sushma Theater", "Laxmi Nagar (PKT)", "Swapnalok Complex", "Bathukamma Ghat", "Syndicate Bank", "Allwyn Phase 1", "Subhash Nagar X Roads", "Tank Bund", "Citizen Colony", "Tarbund", "Tarnaka", "Tatti Annaram", "Teachers Colony", "Shopping Complex (SNKPR)", "Telangana Chowrastha", "Telecom Colony", "Telecom Nagar", "Telephone Bhavan", "Telugu Academy", "Temple Kaman", "Thadbun", "Durga Nagar (TRMLGR)", "Dhulapally Gangasthan", "Rtc Colony (TRMLGR)", "Barkas X Roads", "Three Temples", "Thukkuguda", "Thumkunta", "Boosareddy Guda", "Tilak Nagar", "Timmaiguda", "Thumkunta Auto Stand", "Tirumalagiri", "Tirumalagiri X Roads", "TK Bridge", "Jalpally X Roads", "TKR Kaman", "Toli Chowki", "RCI Gate", "Apuroopa Colony Kaman", "Uppal Gandhi Statue", "Papireddy Nagar", "Sanjaypuri Colony", "TSWRC/JC Chilkoor", "Tukaram Gate", "Raviryal X Roads", "Turka Yamjal", "HMT Hills", "HMT Hills Colony", "Udyog Nagar", "Suraram Village", "Sai Ram Nagar (Suncity)", "Uppal", "Uppal Depot", "Uppal Modern Bakery", "Uppal Ring Road", "Uppal X Roads", "Pragathi Nagar Lake", "Ranga Reddy Kaman", "Upperpally", "Ranga Reddy Nagar", "Uppuguda", "Uttam Nagar", "Bahudurpally", "BEL", "Vajpayee Nagar", "Vanasthalipuram", "Vani Nagar", "DRS INT. School", "Vasundara College", "Vayupuri", "Vengal Rao Nagar", "Venkatagiri", "BEL Circle", "Venkatapuram X Roads", "Venkateshwara Colony", "Vidya Bhavan", "Vidya Nagar", "VNR VJIET", "Vivek Nagar (Jillelguda)", "Vijay Nagar Colony", "Gandicheruvu", "Vikas Nagar", "Vikrampuri", "Hydershakote X Roads", "Vinayak Nagar (Neredmet)", "Vinayak Nagar Gate", "Vinoba Nagar", "Bits Pilani X Roads", "Torrur X Roads", "Kolthur", "Ganesh Temple (WMRDPLY)", "VST", "Hydershakote", "Warisguda", "Wesley College", "Appareal Park", "Marredpally Setwin", "West Venkatapuram", "White House", "Wipro Circle", "Bandlaguda Jagir", "Gandhi Nagar (IDPL)", "Kismatpur Water Tank", "Prashanth Nagar (KP)", "Zinda Telismath", "Prashanth Nagar (Shivam)", "Irani Hotel", "Giri Nagar", "Erragadda X Roads", "Yapral", "Yapral Circle", "ARK Homes", "VBR Gardens", "Maisammaguda X Roads", "Yerrakunta X Roads", "YMCA", "Yousufguda", "Yousufguda Check Post", "W.Marredpally Temple", "Zoo Park", "ZTS X Roads", "Kowkoor X Roads", "Suraram", "Water Tank", "Cherlapally Station", "Rehmat Nagar", "Karmika Nagar", "Shriram Nagar", "Kalyan Nagar (Borabanda)", "Mothi Nagar", "Sri Nagar Colony", "GHMC Park", "Bright School", "Vijaya Hospitals", "East Gandhi Nagar", "RTC Colony (RMPLY)", "Yamnampet", "Rockwoods College", "New Nagole Colony", "Pragathi Nagar (Balaji Nagar)", "Chennapur", "Chennapur X Roads", "Officers Colony", "East Kakathiya Nagar", "Kakathiya Nagar", "Land Mark Tower", "Dr.Reddys (Bachupally)", "Sanath Nagar PS", "Erragodalu", "Railway Colony Road", "Annojiguda Village", "Ganesh Nagar (Uppal)", "AP Foods", "Alwal Rythu Bazar", "Deepthi Sri Nagar", "MRO Office (Saroor Nagar)", "Venkatreddy Nagar", "Viveka Nanda Nagar", "Maisammaguda", "Anjaiah Nagar", "Beerappa Nagar", "Mallampet", "Waverock"]

let busDataLocal = [
    ["AP29Z2898", "AP29Z1234", "AP29Z2823"],
    ["KG", "KCG", "RNG"],
    ["MD", "ME", "CO"],
]

function setRoute(routeNoI) {
    let starting, destination;

    switch (routeNoI) {
        // HD1 SERIES
        case "1":
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "1/25S":
            starting = "AFZALGUNJ";
            destination = "SUCHITRA";
            break;

        case "1/25S/229":
            starting = "AFZALGUNJ";
            destination = "MEDCHAL";
            break;

        case "1B":
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "1C":
            starting = "SECUNDERABAD";
            destination = "CBS";
            break;

        case "1D":
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "1D/229":
            starting = "DILSHUKNAGAR";
            destination = "MEDCHAL";
            break;

        case "1D/299":
            starting = "SECUNDERABAD";
            destination = "HAYATHNAGAR";
            break;

        case "1H":
            starting = "SECUNDERABAD";
            destination = "HAYATHNAGAR";
            break;

        case "1HD":
            starting = "SECUNDERABAD";
            destination = "SAROORNAGAR";
            break;

        case "1J":
            starting = "SECUNDERABAD";
            destination = "JIYAGUDA";
            break;

        case "1JL":
            starting = "SECUNDERABAD";
            destination = "LANGER HOUSE";
            break;

        case "1JK":
            starting = "SECUNDERABAD";
            destination = "KALI MANDIR";
            break;

        case "1K":
            starting = "SECUNDERABAD";
            destination = "KACHEGUDA DEPOT";
            break;

        case "1L":
            starting = "SECUNDERABAD";
            destination = "LB NAGAR";
            break;

        case "1MD":
            starting = "SECUNDERABAD";
            destination = "NEW MARUTHI NAGAR";
            break;

        case "1P":
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "1P/25S":
            starting = "AFZALGUNJ";
            destination = "SUCHITRA";
            break;

        case "1V":
            starting = "SECUNDERABAD";
            destination = "NGO's COLONY";
            break;

        case "1VM":
            starting = "SECUNDERABAD";
            destination = "SAI NAGAR";
            break;

        case "1VS":
            starting = "SECUNDERABAD";
            destination = "SAHAB NAGAR";
            break;

        case "1W":
            starting = "SECUNDERABAD";
            destination = "KOTI W.COLLEGE";
            break;

        case "1X":
            starting = "SECUNDERABAD";
            destination = "KACHEGUDA STATION";
            break;

        case "1Z":
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "1Z/229":
            starting = "ARAMGHAR";
            destination = "MEDCHAL";
            break;

        case "1Z/251":
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "1Z/539":
            starting = "SECUNDERABAD";
            destination = "KANHA";
            break;

        // HD2 SERIES
        case "2":
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "2/25S":
            starting = "AFZALGUNJ";
            destination = "SUCHITRA";
            break;

        case "2C":
            starting = "SECUNDERABAD";
            destination = "BARKAS";
            break;

        case "2J":
            starting = "SECUNDERABAD";
            destination = "JIYAGUDA";
            break;

        case "2K":
            starting = "SECUNDERABAD";
            destination = "KACHEGUDA DEPOT";
            break;

        case "2U":
            starting = "SECUNDERABAD";
            destination = "UPPUGUDA";
            break;

        case "2Z":
            starting = "SECUNDERABAD";
            destination = "SRI RAM COLONY";
            break;

        case "2Z/251":
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        // HD3 SERIES
        case "3":
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";
            break;

        case "3C":
            starting = "AFZALGUNJ";
            destination = "ECIL X ROADS";
            break;

        case "3D":
            starting = "AFZALGUNJ";
            destination = "AMBEDKAR NAGAR";
            break;

        case "3DN":
            starting = "AFZALGUNJ";
            destination = "AMBEDKAR NAGAR";
            break;

        case "3H":
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";
            break;

        case "3HN":
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";
            break;

        case "3K":
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";
            break;

        case "3K/6M":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "3K/90L":
            starting = "ECIL X ROADS";
            destination = "BDL";
            break;

        case "3K/95":
            starting = "ECIL X ROADS";
            destination = "ARAMGHAR";
            break;

        case "3K/102":
            starting = "ECIL X ROADS";
            destination = "BDL";
            break;

        case "3K/102B":
            starting = "ECIL X ROADS";
            destination = "BADANGPET";
            break;

        case "3K/203N":
            starting = "ECIL X ROADS";
            destination = "NADERGUL";
            break;

        case "3K/242":
            starting = "AFZALGUNJ";
            destination = "KEESARAGUTTA";
            break;

        case "3K/252":
            starting = "ECIL X ROADS";
            destination = "RGI AIRPORT";
            break;

        case "3K/281":
            starting = "AFZALGUNJ";
            destination = "GHATKESAR";
            break;

        case "3KJ":
            starting = "ECIL X ROADS";
            destination = "JIYAGUDA";
            break;

        case "3KN":
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";
            break;

        case "3KN/6M":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "3KN/95":
            starting = "ECIL X ROADS";
            destination = "ARAMGHAR";
            break;

        case "3L":
            starting = "AFZALGUNJ";
            destination = "PRASHANTH NAGAR";
            break;

        case "3M":
            starting = "AFZALGUNJ";
            destination = "AS RAO NAGAR";
            break;

        case "3N":
            starting = "AFZALGUNJ";
            destination = "HEMA NAGAR";
            break;

        case "3N/203N":
            starting = "BEL";
            destination = "NADERGUL";
            break;

        case "3T":
            starting = "AFZALGUNJ";
            destination = "TARNAKA";
            break;

        case "3Y":
            starting = "AFZALGUNJ";
            destination = "BJR NAGAR";
            break;

        // HD5 SERIES
        case "5/5R":
            starting = "MEHDIPATNAM";
            destination = "RISALA BAZAR";
            break;

        case "5G":
            starting = "SECUNDERABAD";
            destination = "GOLCONDA";
            break;

        case "5K":
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "5KM":
            starting = "SECUNDERABAD";
            destination = "MANIKONDA";
            break;

        case "5K/16A":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "5K/16AD":
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "5K/16C":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "5K/16CD":
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "5K/16D":
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "5K/25S":
            starting = "MEHDIPATNAM";
            destination = "SUCHITRA";
            break;

        case "5K/92A":
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "5K/92R":
            starting = "SECUNDERABAD";
            destination = "RAJENDRA NAGAR";
            break;

        case "5K/120K":
            starting = "SECUNDERABAD";
            destination = "KOKAPET";
            break;

        case "5K/125":
            starting = "SECUNDERABAD";
            destination = "KONDAPUR";
            break;

        case "5K/188":
            starting = "SECUNDERABAD";
            destination = "KALI MANDIR";
            break;

        case "5K/229":
            starting = "MEHDIPATNAM";
            destination = "MEDCHAL";
            break;

        case "5K/251":
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "5M":
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "5R":
            starting = "MEHDIPATNAM";
            destination = "RISALA BAZAR";
            break;

        case "5R/5":
            starting = "RISALA BAZAR";
            destination = "MEHDIPATNAM";
            break;

        case "5W":
            starting = "SECUNDERABAD";
            destination = "WAVEROCK";
            break;

        // HD6 SERIES
        case "6IW/252":
            starting = "CHERLAPALLY";
            destination = "WAVEROCK";
            break;

        case "6L/281":
            starting = "KONDAPUR";
            destination = "GHATKESAR";
            break;

        case "6M/3K":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "6M/3KN":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "6R":
            starting = "RAM NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "6RK":
            starting = "RAM NAGAR";
            destination = "KALI MANDIR";
            break;

        case "6X":
            starting = "CHENGICHERLA";
            destination = "IRRUM MANZIL";
            break;

        // HD7 SERIES
        case "7Z":
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "7Z/251":
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        // HD8 SERIES
        case "8/37":
            starting = "GANDHI BHAVAN";
            destination = "KUSHAIGUDA";
            break;

        case "8A":
            starting = "SECUNDERABAD";
            destination = "CHANDRAYANGUTTA";
            break;

        case "8A/85":
            starting = "SECUNDERABAD";
            destination = "PAHADI SHARIF";
            break;

        case "8A/178G":
            starting = "SECUNDERABAD";
            destination = "GOUSE NAGAR";
            break;

        case "8A/251":
            starting = "SECUNDERABAD";
            destination = "KOTHUR";
            break;

        case "8A/252S":
            starting = "SECUNDERABAD";
            destination = "SHANKARAPURAM";
            break;

        case "8A/253":
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "8A/532":
            starting = "SECUNDERABAD";
            destination = "KOTHUR";
            break;

        case "8A/539":
            starting = "SECUNDERABAD";
            destination = "KANHA";
            break;

        case "8AK":
            starting = "SECUNDERABAD";
            destination = "CHANDRAYANGUTTA";
            break;

        case "8C":
            starting = "SECUNDERABAD";
            destination = "CHANDRAYANGUTTA";
            break;

        case "8C/85P":
            starting = "SECUNDERABAD";
            destination = "PAHADI SHARIF";
            break;

        case "8C/229":
            starting = "AFZALGUNJ";
            destination = "MEDCHAL";
            break;

        case "8N":
            starting = "SECUNDERABAD";
            destination = "NAMPALLY";
            break;

        case "8R":
            starting = "RISALA BAZAR";
            destination = "CBS";

            break;

        case "8UA":
            starting = "SECUNDERABAD";
            destination = "UPPUGUDA";
            break;

        // HD9 SERIES
        case "9A":
            starting = "CBS";
            destination = "AG COLONY";
            break;

        case "9F":
            starting = "CBS";
            destination = "BORABANDA";
            break;

        case "9K":
            starting = "AFZALGUNJ";
            destination = "JEEDIMETLA";
            break;

        case "9K/102":
            starting = "GANDIMAISAMMA";
            destination = "BDL";
            break;

        case "9K/230P":
            starting = "AFZALGUNJ";
            destination = "DUNDIGAL";
            break;

        case "9K/272G":
            starting = "AFZALGUNJ";
            destination = "GANDIMAISAMMA";
            break;

        case "9X":
            starting = "CBS";
            destination = "JEEDIMETLA";
            break;

        case "9X/41C":
            starting = "CBS";
            destination = "ASBESTOS COLONY";
            break;

        case "9X/230P":
            starting = "CBS";
            destination = "DUNDIGAL";
            break;

        case "9X/272G":
            starting = "CBS";
            destination = "GANDIMAISAMMA";
            break;

        case "9X/283D":
            starting = "CBS";
            destination = "SURARAM COLONY";
            break;

        case "9XM":
            starting = "CHARMINAR";
            destination = "JEEDIMETLA";
            break;

        case "9XM/230P":
            starting = "CHARMINAR";
            destination = "DUNDIGAL";
            break;

        case "9YF":
            starting = "CHARMINAR";
            destination = "BORABANDA";
            break;

        // HD10 SERIES
        case "10":
            starting = "SECUNDERABAD";
            destination = "SANATH NAGAR";
            break;

        case "10F":
            starting = "SECUNDERABAD";
            destination = "BORABANDA";
            break;

        case "10FV":
            starting = "SECUNDERABAD";
            destination = "VBIT PARK";
            break;

        case "10H":
            starting = "SECUNDERABAD";
            destination = "KONDAPUR";
            break;

        case "10H/16A":
            starting = "KONDAPUR";
            destination = "ECIL X ROADS";
            break;

        case "10H/16C":
            starting = "KONDAPUR";
            destination = "ECIL X ROADS";
            break;

        case "10H/18C":
            starting = "KONDAPUR";
            destination = "CHENGICHERLA";
            break;

        case "10HA":
            starting = "SECUNDERABAD";
            destination = "PATANCHERUVU";
            break;

        case "10HL":
            starting = "SECUNDERABAD";
            destination = "LINGAMPALLY";
            break;

        case "10HP":
            starting = "SECUNDERABAD";
            destination = "PREM NAGAR";
            break;

        case "10HW":
            starting = "SECUNDERABAD";
            destination = "WAVEROCK";
            break;

        case "10J":
            starting = "SECUNDERABAD";
            destination = "JNTU COLLEGE";
            break;

        case "10J/171":
            starting = "KPHB 4TH PHASE";
            destination = "SHAHPUR NAGAR";
            break;

        case "10JP":
            starting = "JNTU COLLEGE";
            destination = "PRAGATHI NAGAR";
            break;

        case "10K":
            starting = "SECUNDERABAD";
            destination = "KPHB 4TH PHASE";
            break;

        case "10K/250":
            starting = "KPHB 4TH PHASE";
            destination = "ECIL X ROADS";
            break;

        case "10KJ":
            starting = "SECUNDERABAD";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "10KJ/18":
            starting = "JAGATHGIRIGUTTA";
            destination = "UPPAL DEPOT";
            break;

        case "10KL":
            starting = "SECUNDERABAD";
            destination = "LINGAMPALLY";
            break;

        case "10KM":
            starting = "SECUNDERABAD";
            destination = "MIYAPUR";
            break;

        case "10KM/224G":
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "10W":
            starting = "SECUNDERABAD";
            destination = "WAVEROCK";
            break;

        case "10Y":
            starting = "SECUNDERABAD";
            destination = "YOUSUFGUDA";
            break;

        case "10YF":
            starting = "SECUNDERABAD";
            destination = "BORABANDA";
            break;

        case "10YF/16S":
            starting = "BORABANDA";
            destination = "SAFILGUDA";
            break;

        // HD11 SERIES
        case "11W":
            starting = "MYTHRIVANAM";
            destination = "WAVEROCK";
            break;

        // HD14 SERIES
        case "14P":
            starting = "SECUNDERABAD";
            destination = "PRASHANTH NAGAR";
            break;

        case "14PX":
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        // HD15 SERIES
        case "15D":
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "15H":
            starting = "SECUNDERABAD";
            destination = "KUSHAIGUDA";
            break;

        case "15H/20":
            starting = "KUSHAIGUDA";
            destination = "SECRETARIATE";
            break;

        case "15H/242RG":
            starting = "SECUNDERABAD";
            destination = "RG COLONY";
            break;

        case "15D/20":
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        // HD16 SERIES
        case "16/20":
            starting = "SAFILGUDA";
            destination = "IRRUM MANZIL";
            break;

        case "16A":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16A/5K":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16A/10H":
            starting = "ECIL X ROADS";
            destination = "KONDAPUR";
            break;

        case "16A/20":
            starting = "ECIL X ROADS";
            destination = "AFZALGUNJ";
            break;

        case "16A/47L":
            starting = "ECIL X ROADS";
            destination = "MANIKONDA";
            break;

        case "16A/47W":
            starting = "ECIL X ROADS";
            destination = "WAVEROCK";
            break;

        case "16A/49M":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16A/219":
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "16A/281R":
            starting = "SECUNDERABAD";
            destination = "RTC COLONY";
            break;

        case "16AD/5K":
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16AK":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16C":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16C/5K":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16C/10H":
            starting = "ECIL X ROADS";
            destination = "KONDAPUR";
            break;

        case "16C/38T":
            starting = "ECIL X ROADS";
            destination = "SECUNDERABAD";
            break;

        case "16C/47L":
            starting = "ECIL X ROADS";
            destination = "MANIKONDA";
            break;

        case "16C/49M":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16C/281":
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "16CR":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16CR/38T":
            starting = "ECIL X ROADS";
            destination = "SECUNDERABAD";
            break;

        case "16CD":
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "16CD/5K":
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16CD/49M":
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16D":
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "16D/5K":
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16D/24B":
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            // SUBSTOPS DONE AT fillNewUIrouteListNEW Function
            break;

        case "16D/49M":
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16ES":
            starting = "ECIL X ROADS";
            destination = "IRRUM MANZIL";
            break;

        case "16H":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16H/49M":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16NY":
            starting = "SECUNDERABAD";
            destination = "YAPRAL";
            break;

        case "16P":
            starting = "SECUNDERABAD";
            destination = "PRASHANTH NAGAR";
            break;

        case "16PX":
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "16R/20":
            starting = "ECIL X ROADS";
            destination = "SECRETARIATE";
            break;

        case "16S/10YF":
            starting = "SAFILGUDA";
            destination = "BORABANDA";
            break;

        // HD17 SERIES
        case "17/219":
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "17CS":
            starting = "SECUNDERABAD";
            destination = "CHERLAPALLY";
            break;

        case "17D":
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "17DH":
            starting = "SECUNDERABAD";
            destination = "BALAJI NAGAR";
            break;

        case "17DS":
            starting = "SECUNDERABAD";
            destination = "BALAJI NAGAR";
            break;

        case "17DV":
            starting = "SECUNDERABAD";
            destination = "VIKAS NAGAR";
            break;

        case "17H":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "17H/29B":
            starting = "ECIL X ROADS";
            destination = "JEEDIMETLA";
            break;

        case "17H/47W":
            starting = "ECIL X ROADS";
            destination = "WAVEROCK";
            break;

        case "17H/219":
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "17H/242":
            starting = "SECUNDERABAD";
            destination = "KEESARAGUTTA";
            break;

        case "17HN":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "17S":
            starting = "SECUNDERABAD";
            destination = "KUSHAIGUDA";
            break;

        case "17V":
            starting = "SECUNDERABAD";
            destination = "VIKAS NAGAR";
            break;

        // HD18 SERIES
        case "18":
            starting = "SECUNDERABAD";
            destination = "UPPAL";
            break;

        case "18/10KJ":
            starting = "UPPAL DEPOT";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "18/47U":
            starting = "BODUPPAL";
            destination = "AOU UNIVERSITY";
            break;

        case "18/272G":
            starting = "UPPAL";
            destination = "GANDIMAISAMMA";
            break;

        case "18/283S":
            starting = "SECUNDERABAD";
            destination = "KORREMULA";
            break;

        case "18B":
            starting = "SECUNDERABAD";
            destination = "CCMB COLONY";
            break;

        case "18C":
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA";
            break;

        case "18C/10H":
            starting = "CHENGICHERLA";
            destination = "KONDAPUR";
            break;

        case "18C/30":
            starting = "CHENGICHERLA";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "18C/219":
            starting = "CHENGICHERLA";
            destination = "PATANCHERUVU";
            break;

        case "18C/229":
            starting = "CHENGICHERLA";
            destination = "MEDCHAL";
            break;

        case "18J":
            starting = "UPPAL";
            destination = "JBS";
            break;

        case "18R":
            starting = "RAMANTHAPUR CHURCH CLY";
            destination = "JBS";
            break;

        case "18V":
            starting = "SECUNDERABAD";
            destination = "VENKATREDDY NAGAR";
            break;

        case "18VJ":
            starting = "VENKATREDDY NAGAR";
            destination = "JBS";
            break;

        case "18VS":
            starting = "SECUNDERABAD";
            destination = "RAMANTHAPUR";
            break;

        // HD19 SERIES
        case "19F":
            starting = "MEHDIPATNAM";
            destination = "BORABANDA";
            break;

        case "19K":
            starting = "MEHDIPATNAM";
            destination = "KPHB 4TH PHASE";
            break;

        case "19K/288D":
            starting = "KUKATPALLY";
            destination = "BALAJI TEMPLE";
            break;

        case "19KJ":
            starting = "MEHDIPATNAM";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "19KM":
            starting = "MEHDIPATNAM";
            destination = "MIYAPUR";
            break;

        case "19M":
            starting = "MEHDIPATNAM";
            destination = "KPHB 4TH PHASE";
            break;

        case "19MP":
            starting = "MEHDIPATNAM";
            destination = "PRAGATHI NAGAR";
            break;

        case "19S":
            starting = "MEHDIPATNAM";
            destination = "SANATH NAGAR";
            break;

        case "19S/505":
            starting = "SANATH NAGAR";
            destination = "SHANKARPALLY";
            break;

        case "19YF":
            starting = "MEHDIPATNAM";
            destination = "BORABANDA";
            break;

        // HD20 SERIES
        case "20/15H":
            starting = "SECRETARIATE";
            destination = "KUSHAIGUDA";
            break;

        case "20/15D":
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "20/16":
            starting = "IRRUM MANZIL";
            destination = "SAFILGUDA";
            break;

        case "20/16A":
            starting = "AFZALGUNJ";
            destination = "ECIL X ROADS";
            break;

        case "20/16R":
            starting = "SECRETARIATE";
            destination = "ECIL X ROADS";
            break;

        case "20/280":
            starting = "SECRETARIATE";
            destination = "GHATKESAR";
            break;

        case "20P":
            starting = "SECUNDERABAD";
            destination = "NAMPALLY";
            break;

        // HD21 SERIES
        case "21W":
            starting = "SECUNDERABAD";
            destination = "WEST VENKATAPURAM";
            break;

        // HD22 SERIES
        case "22":
            starting = "SECUNDERABAD";
            destination = "HAKIMPET";
            break;

        case "22/49E":
            starting = "RISALA BAZAR";
            destination = "IRRUM MANZIL";
            break;

        case "22/90L":
            starting = "HAKIMPET";
            destination = "BDL";
            break;

        case "22D":
            starting = "SECUNDERABAD";
            destination = "MB DARGAH";
            break;

        case "22K":
            starting = "SECUNDERABAD";
            destination = "RAJIV GRUHAKALPA";
            break;

        // HD23 SERIES
        case "23B":
            starting = "SECUNDERABAD";
            destination = "BHUDEVI NAGAR";
            break;

        case "23BK":
            starting = "SECUNDERABAD";
            destination = "KISTAMMA ENCLAVE";
            break;

        case "23BS":
            starting = "SECUNDERABAD";
            destination = "SUCHITRA";
            break;

        case "23GF":
            starting = "SECUNDERABAD";
            destination = "GREEN FIELDS";
            break;

        case "23GS":
            starting = "SECUNDERABAD";
            destination = "SUCHITRA";
            break;

        case "23K":
            starting = "SECUNDERABAD";
            destination = "KISTAMMA ENCLAVE";
            break;

        case "23T":
            starting = "SECUNDERABAD";
            destination = "TELECOM NAGAR";
            break;

        // HD24 SERIES
        case "24":
            starting = "SECUNDERABAD";
            destination = "YAPRAL";
            break;

        case "24B":
            starting = "SECUNDERABAD";
            destination = "BALAJI NAGAR";
            break;

        case "24B/16D":
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            // Substops Defined in function
            break;

        case "24B/281":
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "24BA":
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "24BJ":
            starting = "SECUNDERABAD";
            destination = "BJR NAGAR";
            break;

        case "24E":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "24J":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "24L/281":
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "24S":
            starting = "ECIL X ROADS";
            destination = "SUCHITRA";
            break;

        case "24S/273":
            starting = "ECIL X ROADS";
            destination = "GANDIMAISAMMA";
            break;

        case "24SS":
            starting = "ECIL X ROADS";
            destination = "SHAHPUR NAGAR";
            break;

        // HD25 SERIES
        case "25A":
            starting = "SECUNDERABAD";
            destination = "SURYA NAGAR";
            break;

        case "25AJ":
            starting = "SECUNDERABAD";
            destination = "JONNABANDA";
            break;

        case "25AJ/M":
            starting = "SECUNDERABAD";
            destination = "GOPAL NAGAR";
            break;

        case "25M":
            starting = "SECUNDERABAD";
            destination = "GOPAL NAGAR";
            break;

        case "25MS":
            starting = "SECUNDERABAD";
            destination = "SHARAN NAGAR";
            break;

        case "25P":
            starting = "SECUNDERABAD";
            destination = "PANCHASHEELA";
            break;

        case "25S":
            starting = "SECUNDERABAD";
            destination = "SUCHITRA";
            break;

        case "25S/1":
            starting = "SUCHITRA";
            destination = "AFZALGUNJ";
            break;

        case "25S/1P":
            starting = "SUCHITRA";
            destination = "AFZALGUNJ";
            break;

        case "25S/2":
            starting = "SUCHITRA";
            destination = "AFZALGUNJ";
            break;

        case "25S/5K":
            starting = "SUCHITRA";
            destination = "MEHDIPATNAM";
            break;

        case "25S/227":
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "25S/229":
            starting = "SECUNDERABAD";
            destination = "MEDCHAL";
            break;

        // HD26 SERIES
        case "26M":
            starting = "SECUNDERABAD";
            destination = "OLD BOWENPALLY";
            break;

        case "26M/49M":
            starting = "OLD BOWENPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "26N":
            starting = "SECUNDERABAD";
            destination = "OLD BOWENPALLY";
            break;

        // HD29 SERIES
        case "29B":
            starting = "SECUNDERABAD";
            destination = "JEEDIMETLA";
            break;

        case "29B/17H":
            starting = "JEEDIMETLA";
            destination = "ECIL X ROADS";
            break;

        case "29B/272G":
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "29B/272I":
            starting = "SECUNDERABAD";
            destination = "INDIRAMMA COLONY";
            break;

        case "29Q":
            starting = "BALA NAGAR";
            destination = "QUTHBULLAPUR";
            break;

        case "29S":
            starting = "SECUNDERABAD";
            destination = "SUBHASH NAGAR";
            break;

        // HD30 SERIES
        case "30":
            starting = "SECUNDERABAD";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "30S":
            starting = "SECUNDERABAD";
            destination = "SRINIVAS COLONY";
            break;

        case "30/18C":
            starting = "JAGATHGIRIGUTTA";
            destination = "CHENGICHERLA";
            break;

        case "30/280":
            starting = "JAGATHGIRIGUTTA";
            destination = "GHATKESAR";
            break;

        // HD31 SERIES
        case "31":
            starting = "SECUNDERABAD";
            destination = "PRAGATHI NAGAR";
            break;

        // HD37 SERIES
        case "37":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "37/8":
            starting = "KUSHAIGUDA";
            destination = "GANDHI BHAVAN";
            break;

        // HD38 SERIES
        case "38EX":
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "38M":
            starting = "SECUNDERABAD";
            destination = "MAHENDRA HILLS";
            break;

        case "38X":
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "38T":
            starting = "SECUNDERABAD";
            destination = "TUKARAMGATE";
            break;

        case "38T/16C":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "38T/16CR":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        // HD40 SERIES
        case "40":
            starting = "SECUNDERABAD";
            destination = "KOTI";
            break;

        // HD41 SERIES
        case "41C/9X":
            starting = "ASBESTOS COLONY";
            destination = "CBS";
            break;

        // HD44 SERIES
        case "44X":
            starting = "SECUNDERABAD";
            destination = "GANGAPUTRA COLONY";
            break;

        // HD45 SERIES
        case "45F":
            starting = "KOTI";
            destination = "BORABANDA";
            break;

        // HD46 SERIES
        case "46":
            starting = "SECUNDERABAD";
            destination = "PATIGADDA";
            break;

        // HD47 SERIES
        case "47D/224":
            starting = "DARGAH";
            destination = "MAYURI NAGAR";
            break;

        case "47L":
            starting = "SECUNDERABAD";
            destination = "MANIKONDA";
            break;

        case "47L/16A":
            starting = "MANIKONDA";
            destination = "ECIL X ROADS";
            break;

        case "47L/16C":
            starting = "MANIKONDA";
            destination = "ECIL X ROADS";
            break;

        case "47U/18":
            starting = "AOU UNIVERSITY";
            destination = "BODUPPAL";
            break;

        case "47Y":
            starting = "SECUNDERABAD";
            destination = "MANIKONDA";
            break;

        case "47YM":
            starting = "SECUNDERABAD";
            destination = "MANCHIREVULA";
            break;

        case "47W/16A":
            starting = "WAVEROCK";
            destination = "ECIL X ROADS";
            break;

        case "47W/17H":
            starting = "WAVEROCK";
            destination = "ECIL X ROADS";
            break;

        // HD49 SERIES
        case "49":
            starting = "SECUNDERABAD";
            destination = "NAMPALLY";
            break;

        case "49/250":
            starting = "NAMPALLY";
            destination = "ECIL X ROADS";
            break;

        case "49A":
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "49E/22":
            starting = "IRRUM MANZIL";
            destination = "RISALA BAZAR";
            break;

        case "49M":
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "49M/16A":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/16C":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/16CD":
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "49M/16D":
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "49M/16H":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/26M":
            starting = "MEHDIPATNAM";
            destination = "OLD BOWENPALLY";
            break;

        case "49M/92A":
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "49M/188B":
            starting = "SECUNDERABAD";
            destination = "BAIRAGIGUDA";
            break;

        case "49M/229":
            starting = "MEHDIPATNAM";
            destination = "MEDCHAL";
            break;

        case "49M/250":
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/250C":
            starting = "MEHDIPATNAM";
            destination = "CHERLAPALLY";
            break;

        case "49M/250D":
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "49MT":
            starting = "SECUNDERABAD";
            destination = "TALLAGADDA";
            break;

        case "49MT/250":
            starting = "TALLAGADDA";
            destination = "ECIL X ROADS";
            break;

        // HD50 SERIES
        case "50B":
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA";
            break;

        // HD65 SERIES
        case "65/116GA":
            starting = "AFZALGUNJ";
            destination = "GOWLI DHODDI";
            break;

        case "65M/116G":
            starting = "CBS";
            destination = "GOWLI DHODDI";
            break;

        case "65M/123":
            starting = "AFZALGUNJ";
            destination = "MANCHIREVULA";
            break;

        case "65MG":
            starting = "CHARMINAR";
            destination = "GOLCONDA";
            break;

        // HD66 SERIES
        case "66G":
            starting = "CHARMINAR";
            destination = "GOLCONDA";
            break;

        // HD71 SERIES
        case "71A":
            starting = "AFZALGUNJ";
            destination = "CHENGICHERLA";
            break;

        case "71AB":
            starting = "AFZALGUNJ";
            destination = "CHENGICHERLA";
            break;

        case "71K":
            starting = "AFZALGUNJ";
            destination = "KACHEGUDA DEPOT";
            break;

        // HD72 SERIES
        case "72":
            starting = "HIGH COURT";
            destination = "SATYA NAGAR";
            break;

        case "72/277D":
            starting = "AFZALGUNJ";
            destination = "IBRAHIMPATNAM";
            break;

        case "72H":
            starting = "AFZALGUNJ";
            destination = "HAYATHNAGAR";
            break;

        case "72HK":
            starting = "AFZALGUNJ";
            destination = "KUNTLOOR";
            break;

        case "72J":
            starting = "AFZALGUNJ";
            destination = "JAIPURI COLONY";
            break;

        case "72V":
            starting = "AFZALGUNJ";
            destination = "NGO's COLONY";
            break;

        // HD83 SERIES
        case "83J":
            starting = "KACHEGUDA STN.";
            destination = "JEEDIMETLA";
            break;

        case "83J/272G":
            starting = "KACHEGUDA STN.";
            destination = "GANDIMAISAMMA";
            break;

        case "83JA":
            starting = "KACHEGUDA STN.";
            destination = "APUROOPA COLONY";
            break;

        // HD85 SERIES
        case "85/8A":
            starting = "PAHADI SHARIF";
            destination = "SECUNDERABAD";
            break;

        case "85P/8C":
            starting = "PAHADI SHARIF";
            destination = "SECUNDERABAD";
            break;

        case "85/253L":
            starting = "CHARMINAR";
            destination = "ANNOJIGUDA";
            break;

        case "85V":
            starting = "CHARMINAR";
            destination = "VENKATAPUR";
            break;

        // HD86 SERIES
        case "86A":
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "86C":
            starting = "SECUNDERABAD";
            destination = "CBS";
            break;

        case "86J":
            starting = "SECUNDERABAD";
            destination = "JIYAGUDA";
            break;

        case "86K":
            starting = "SECUNDERABAD";
            destination = "KOTI";
            break;

        // HD90 SERIES
        case "90/253T":
            starting = "JBS";
            destination = "FAB CITY";
            break;

        case "90/300":
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "90B":
            starting = "SECUNDERABAD";
            destination = "BANDLAGUDA DEPOT";
            break;

        case "90BE":
            starting = "ECIL X ROADS";
            destination = "BADANGPET";
            break;

        case "90DL":
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "90NU":
            starting = "DILSHUKNAGAR";
            destination = "UPPAL X ROADS";
            break;

        case "90U/203U":
            starting = "UPPAL X ROADS";
            destination = "ADIBATLA";
            break;

        case "90L":
            starting = "LB NAGAR";
            destination = "JBS";
            break;

        case "90L/3K":
            starting = "BDL";
            destination = "ECIL X ROADS";
            break;

        case "90L/22":
            starting = "BDL";
            destination = "HAKIMPET";
            break;

        case "90L/229":
            starting = "LB NAGAR";
            destination = "MEDCHAL";
            break;

        case "90L/229S":
            starting = "LB NAGAR";
            destination = "MEDCHAL";
            break;

        case "90L/251":
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "90LK":
            starting = "LB NAGAR";
            destination = "KACHEGUDA STN.";
            break;

        case "90LV":
            starting = "NGO's COLONY";
            destination = "JBS";
            break;

        // HD92 SERIES
        case "92A":
            starting = "ARAMGHAR";
            destination = "MEHDIPATNAM";
            break;

        case "92A/5K":
            starting = "ARAMGHAR";
            destination = "SECUNDERABAD";
            break;

        case "92A/49M":
            starting = "ARAMGHAR";
            destination = "SECUNDERABAD";
            break;

        case "92K":
            starting = "MEHDIPATNAM";
            destination = "SRI RAM COLONY";
            break;

        case "92R":
            starting = "RAJENDRA NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "92R/5K":
            starting = "RAJENDRA NAGAR";
            destination = "SECUNDERABAD";
            break;

        // HD94 SERIES
        case "94R":
            starting = "KOTI";
            destination = "RAJENDRA NAGAR";
            break;

        case "94RM":
            starting = "KOTI";
            destination = "RAJENDRA NAGAR";
            break;

        // HD95 SERIES
        case "95":
            starting = "KOTI";
            destination = "ARAMGHAR";
            break;

        case "95/3K":
            starting = "ARAMGHAR";
            destination = "ECIL X ROADS";
            break;

        case "95/3KN":
            starting = "ARAMGHAR";
            destination = "ECIL X ROADS";
            break;

        case "95K":
            starting = "KOTI";
            destination = "SRI RAM COLONY";
            break;

        case "95M":
            starting = "KOTI";
            destination = "JELPALLY";
            break;

        // HD100 SERIES
        case "100/299":
            starting = "SECRETARIATE";
            destination = "HAYATHNAGAR";
            break;

        case "100M":
            starting = "SECRETARIATE";
            destination = "SATYA NAGAR";
            break;

        case "100V":
            starting = "SECRETARIATE";
            destination = "NGO's COLONY";
            break;

        case "100X":
            starting = "DILSHUKNAGAR";
            destination = "BADANGPET";
            break;

        // HD102 SERIES
        case "102":
            starting = "KOTI W.COLLEGE";
            destination = "MIDHANI DEPOT";
            break;

        case "102/3K":
            starting = "BDL";
            destination = "ECIL X ROADS";
            break;

        case "102/9K":
            starting = "BDL";
            destination = "GANDIMAISAMMA";
            break;

        case "102/185":
            starting = "BDL";
            destination = "KUKATPALLY";
            break;

        case "102/218":
            starting = "MIDHANI";
            destination = "PATANCHERUVU";
            break;

        case "102/253L":
            starting = "KOTI W.COLLEGE";
            destination = "LEMOOR";
            break;

        case "102B":
            starting = "KOTI W.COLLEGE";
            destination = "BADANGPET";
            break;

        case "102B/3K":
            starting = "BADANGPET";
            destination = "ECIL X ROADS";
            break;

        case "102B/203N":
            starting = "SECUNDERABAD";
            destination = "NADERGUL";
            break;

        case "102B/218":
            starting = "BADANGPET";
            destination = "PATANCHERUVU";
            break;

        case "102M":
            starting = "KOTI W.COLLEGE";
            destination = "BALAPUR";
            break;

        // HD103 SERIES
        case "103":
            starting = "KOTI W.COLLEGE";
            destination = "RCI";
            break;

        // HD104 SERIES
        case "104A":
            starting = "KOTI W.COLLEGE";
            destination = "RAJIV GRUHAKALPA";
            break;

        case "104R":
            starting = "KOTI W.COLLEGE";
            destination = "RN REDDY NAGAR";
            break;

        // HD105 SERIES
        case "105":
            starting = "SAIDABAD CLY";
            destination = "SECRETARIATE";
            break;

        // HD107 SERIES
        case "107JD":
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "107JL":
            starting = "SECUNDERABAD";
            destination = "LB NAGAR";
            break;

        case "107JS":
            starting = "SECUNDERABAD";
            destination = "SAROOR NAGAR";
            break;

        case "107VL":
            starting = "SECUNDERABAD";
            destination = "LB NAGAR";
            break;

        case "107VR":
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "107VS":
            starting = "SECUNDERABAD";
            destination = "SAROOR NAGAR";
            break;

        // HD113 SERIES
        case "113B":
            starting = "UPPAL";
            destination = "BARKATPURA";
            break;

        case "113F":
            starting = "CHENGICHERLA";
            destination = "BORABANDA";
            break;

        case "113IM":
            starting = "UPPAL";
            destination = "MEHDIPATNAM";
            break;

        case "113K":
            starting = "UPPAL";
            destination = "KPHB 4TH PHASE";
            break;

        case "113KL":
            starting = "UPPAL";
            destination = "LINGAMPALLY";
            break;

        case "113KM":
            starting = "UPPAL";
            destination = "MIYAPUR";
            break;

        case "113M":
            starting = "MEDIPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "113M/120":
            starting = "BODUPPAL";
            destination = "MANCHIREVULA";
            break;

        case "113M/281":
            starting = "KONDAPUR";
            destination = "GHATKESAR";
            break;

        case "113M/288":
            starting = "UPPAL";
            destination = "MOINABAD";
            break;

        case "113MP":
            starting = "UPPAL";
            destination = "PATEL NAGAR";
            break;

        case "113S":
            starting = "SECRETARIATE";
            destination = "KPHB 4TH PHASE";
            break;

        case "113W":
            starting = "UPPAL";
            destination = "WAVEROCK";
            break;

        case "113YH":
            starting = "UPPAL";
            destination = "HITECH CITY";
            break;

        case "113YIW":
            starting = "UPPAL";
            destination = "WAVEROCK";
            break;

        // AMBERPET FLYOVER DIVERTED HD113 SERIES
        case "113FT":
            starting = "CHENGICHERLA";
            destination = "BORABANDA";
            break;

        case "113KLT":
            starting = "UPPAL";
            destination = "LINGAMPALLY";
            break;

        case "113ILT":
            starting = "UPPAL";
            destination = "LINGAMPALLY";
            break;

        case "113KT":
            starting = "UPPAL";
            destination = "KPHB 4TH PHASE";
            break;

        case "113FZ":
            starting = "CHENGICHERLA";
            destination = "BORABANDA";
            break;

        case "113MZ":
            starting = "MEDIPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "113IMZ":
            starting = "UPPAL";
            destination = "MEHDIPATNAM";
            break;

        // HD115 SERIES
        case "115":
            starting = "KOTI";
            destination = "BODUPPAL";
            break;

        // HD116 SERIES
        case "116/220K":
            starting = "CBS";
            destination = "KOLLUR";
            break;

        case "116G/65M":
            starting = "GOWLI DHODDI";
            destination = "CBS";
            break;

        case "116GA/65":
            starting = "GOWLI DHODDI";
            destination = "AFZALGUNJ";
            break;

        case "116N":
            starting = "KOTI";
            destination = "GOWLI DHODDI";
            break;

        case "116NL":
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        case "116N/220K":
            starting = "KOTI";
            destination = "KOLLUR";
            break;

        // HD117 SERIES
        case "117":
            starting = "UPPAL";
            destination = "KUSHAIGUDA";
            break;

        // HD118 SERIES
        case "118W/300":
            starting = "WAVEROCK";
            destination = "JBS";
            break;

        // HD119 SERIES
        case "119M":
            starting = "MEHDIPATNAM";
            destination = "GOLCONDA";
            break;

        // HD120 SERIES
        case "120":
            starting = "MEHDIPATNAM";
            destination = "OSMAN SAGAR";
            break;

        case "120/113M":
            starting = "MANCHIREVULA";
            destination = "BODUPPAL";
            break;

        case "120K/5K":
            starting = "KOKAPET";
            destination = "SECUNDERABAD";
            break;

        // HD123 SERIES
        case "123":
            starting = "MEHDIPATNAM";
            destination = "NARSINGI";
            break;

        case "123/65M":
            starting = "MANCHIREVULA";
            destination = "AFZALGUNJ";
            break;

        // HD125 SERIES
        case "125/5K":
            starting = "KONDAPUR";
            destination = "SECUNDERABAD";
            break;

        // HD126 SERIES
        case "126/300":
            starting = "JNTU COLLEGE";
            destination = "LB NAGAR";
            break;

        case "126M":
            starting = "MEHDIPATNAM";
            destination = "JNTU COLLEGE";
            break;

        // HD127 SERIES
        case "127AL":
            starting = "AOU UNIVERSITY";
            destination = "LB NAGAR";
            break;

        case "127DA":
            starting = "AOU UNIVERSITY";
            destination = "DILSHUKNAGAR";
            break;

        case "127K":
            starting = "KONDAPUR";
            destination = "KOTI";
            break;

        case "127KL":
            starting = "KONDAPUR";
            destination = "LB NAGAR";
            break;

        // HD147 SERIES
        case "147":
            starting = "ECIL X ROADS";
            destination = "KONDAPUR";
            break;

        // HD156 SERIES
        case "156/205F":
            starting = "MEHDIPATNAM";
            destination = "METTU (RFC)";
            break;

        case "156/299":
            starting = "MEHDIPATNAM";
            destination = "HAYATHNAGAR";
            break;

        case "156/505":
            starting = "HAYATHNAGAR";
            destination = "SHANKARPALLY";
            break;

        case "156H":
            starting = "MEHDIPATNAM";
            destination = "HAYATHNAGAR";
            break;

        case "156L":
            starting = "LB NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "156S":
            starting = "MEHDIPATNAM";
            destination = "SAI NAGAR";
            break;

        case "156V":
            starting = "NGO's COLONY";
            destination = "MEHDIPATNAM";
            break;

        case "156V/505":
            starting = "NGO's COLONY";
            destination = "SHANKARPALLY";
            break;

        // HD158 SERIES
        case "158":
            starting = "DILSHUKNAGAR";
            destination = "ESI HOSPITAL";
            break;

        case "158FL":
            starting = "DILSHUKNAGAR";
            destination = "BORABANDA";
            break;

        case "158HF":
            starting = "HAYATHNAGAR";
            destination = "BORABANDA";
            break;

        case "158VF":
            starting = "NGO's COLONY";
            destination = "BORABANDA";
            break;

        // HD171 SERIES
        case "171":
            starting = "SECUNDERABAD";
            destination = "GAJULARAMARAM";
            break;

        case "171/10J":
            starting = "SHAHPUR NAGAR";
            destination = "KPHB 4TH PHASE";
            break;

        case "171K":
            starting = "SHAHPUR NAGAR";
            destination = "KPHB MAIN ROAD";
            break;

        case "171K/198W":
            starting = "GAJULARAMARAM";
            destination = "WAVEROCK";
            break;

        case "171K/219":
            starting = "SHAHPUR NAGAR";
            destination = "PATANCHERUVU";
            break;

        case "171R":
            starting = "SECUNDERABAD";
            destination = "SRI RAM NAGAR";
            break;

        case "171M/189M":
            starting = "GAJULARAMARAM";
            destination = "MEHDIPATNAM";
            break;

        // HD178 SERIES
        case "178G/8A":
            starting = "GOUSE NAGAR";
            destination = "SECUNDERABAD";
            break;

        // HD183 SERIES
        case "183B":
            starting = "JEEDIMETLA";
            destination = "BALANAGAR";
            break;

        case "183SS":
            starting = "SUCHITRA";
            destination = "SHAHPUR NAGAR";
            break;

        case "183S/219":
            starting = "SHAHPUR NAGAR";
            destination = "PATANCHERUVU";
            break;

        // HD185 SERIES
        case "185/102":
            starting = "KUKATPALLY";
            destination = "BDL";
            break;

        case "185G":
            starting = "CBS";
            destination = "JAGATHGIRIGUTTA";
            break;

        // HD187 SERIES
        case "187KL":
            starting = "KPHB MAIN ROAD";
            destination = "LB NAGAR";
            break;

        case "187KH":
            starting = "KPHB MAIN ROAD";
            destination = "HAYATHNAGAR";
            break;

        // HD188 SERIES
        case "188":
            starting = "MEHDIPATNAM";
            destination = "KALI MANDIR";
            break;

        case "188/5K":
            starting = "KALI MANDIR";
            destination = "SECUNDERABAD";
            break;

        case "188/251":
            starting = "MEHDIPATNAM";
            destination = "SHAMSHABAD";
            break;

        case "188B/49M":
            starting = "BAIRAGIGUDA";
            destination = "SECUNDERABAD";
            break;

        // HD189 SERIES
        case "189M":
            starting = "MEHDIPATNAM";
            destination = "APUROOPA CLY";
            break;

        case "189M/171M":
            starting = "MEHDIPATNAM";
            destination = "GAJULARAMARAM";
            break;

        case "189M/272G":
            starting = "MEHDIPATNAM";
            destination = "GANDIMAISAMMA";
            break;

        // HD195 SERIES
        case "195":
            starting = "BACHUPALLY";
            destination = "NARSINGI";
            break;

        case "195/272":
            starting = "WAVEROCK";
            destination = "GANDIMAISAMMA";
            break;

        case "195G":
            starting = "GAR";
            destination = "JNTU COLLEGE";
            break;

        case "195GJ":
            starting = "GAR";
            destination = "JNTU COLLEGE";
            break;

        case "195GK":
            starting = "GAR";
            destination = "JNTU COLLEGE";
            break;

        case "195H":
            starting = "HCU DEPOT";
            destination = "BACHUPALLY";
            break;

        case "195J":
            starting = "WAVEROCK";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "195P":
            starting = "GAR";
            destination = "PRAGATHI NAGAR";
            break;

        case "195W":
            starting = "WAVEROCK";
            destination = "BACHUPALLY";
            break;

        case "195WJ":
            starting = "WAVEROCK";
            destination = "JNTU COLLEGE";
            break;

        case "195WP":
            starting = "WAVEROCK";
            destination = "GANDIMAISAMMA";
            break;

        // HD198 SERIES
        case "198W/171K":
            starting = "WAVEROCK";
            destination = "GAJULARAMARAM";
            break;

        // HD201 SERIES
        case "201":
            starting = "KOTI W.COLLEGE";
            destination = "BACHARAM";
            break;

        case "201G":
            starting = "KOTI W.COLLEGE";
            destination = "GOWRELLY";
            break;

        case "201K":
            starting = "KOTI W.COLLEGE";
            destination = "KUNTLOOR RG CLY";
            break;

        case "201M":
            starting = "KOTI W.COLLEGE";
            destination = "MARRIPALLY";
            break;

        case "201Q":
            starting = "KOTI W.COLLEGE";
            destination = "QUTHBULLAPUR";
            break;

        case "201/290U":
            starting = "BACHARAM";
            destination = "JBS";
            break;

        case "201T/290U":
            starting = "TARAMATIPET";
            destination = "JBS";
            break;

        // HD202 SERIES
        case "202B":
            starting = "KOTI W.COLLEGE";
            destination = "BRAHMANAPALLY";
            break;

        case "202K/290U":
            starting = "KOHEDA";
            destination = "JBS";
            break;

        // HD203 SERIES
        case "203A":
            starting = "KOTI W.COLLEGE";
            destination = "ADIBATLA";
            break;

        case "203A/218":
            starting = "ADIBATLA";
            destination = "PATANCHERUVU";
            break;

        case "203AK":
            starting = "KOTI W.COLLEGE";
            destination = "KONGARAKALAN";
            break;

        case "203AR":
            starting = "SECUNDERABAD";
            destination = "RAVIRYALA";
            break;

        case "203N":
            starting = "KOTI W.COLLEGE";
            destination = "NADERGUL";
            break;

        case "203N/3K":
            starting = "NADERGUL";
            destination = "ECIL X ROADS";
            break;

        case "203N/3N":
            starting = "NADERGUL";
            destination = "BEL";
            break;

        case "203N/102B":
            starting = "NADERGUL";
            destination = "SECUNDERABAD";
            break;

        case "203N/218":
            starting = "NADERGUL";
            destination = "PATANCHERUVU";
            break;

        case "203U":
            starting = "UPPAL X ROADS";
            destination = "ADIBATLA";
            break;

        case "203U/90U":
            starting = "ADIBATLA";
            destination = "UPPAL X ROADS";
            break;

        // HD204 SERIES
        case "204/290U":
            starting = "GANDICHERUVU";
            destination = "JBS";
            break;

        case "204DA":
            starting = "DILSHUKNAGAR";
            destination = "ANAJPUR";
            break;

        case "204U":
            starting = "KOTI W.COLLEGE";
            destination = "SANGHI NAGAR";
            break;

        case "204UA":
            starting = "KOTI W.COLLEGE";
            destination = "ANAJPUR";
            break;

        // HD205 SERIES
        case "205":
            starting = "KOTI W.COLLEGE";
            destination = "PILLAIPALLY";
            break;

        case "205A":
            starting = "KOTI W.COLLEGE";
            destination = "ANAJPUR";
            break;

        case "205A/290U":
            starting = "ANAJPUR";
            destination = "JBS";
            break;

        case "205B/290U":
            starting = "BALIJAGUDA";
            destination = "SECUNDERABAD";
            break;

        case "205F/156":
            starting = "METTU (RFC)";
            destination = "MEHDIPATNAM";
            break;

        case "205M/290U":
            starting = "MAJEEDPUR";
            destination = "JBS";
            break;

        // HD211 SERIES
        case "211":
            starting = "SECUNDERABAD";
            destination = "POTHAIPALLY";
            break;

        case "211/242":
            starting = "SECUNDERABAD";
            destination = "DONGALAMYSAMMA";
            break;

        case "211B":
            starting = "SECUNDERABAD";
            destination = "UDDHAMARRI";
            break;

        case "211CD":
            starting = "SECUNDERABAD";
            destination = "DRDO (YADGARPALLY)";
            break;

        case "211D":
            starting = "SECUNDERABAD";
            destination = "KOLTHUR";
            break;

        case "211DY":
            starting = "SECUNDERABAD";
            destination = "DEVARAYAMJAL";
            break;

        case "211K":
            starting = "SECUNDERABAD";
            destination = "KESHAVARAM";
            break;

        case "211M":
            starting = "SECUNDERABAD";
            destination = "CRPF";
            break;

        // HD212 SERIES
        case "212":
            starting = "SECUNDERABAD";
            destination = "BITS PILANI";
            break;

        case "212/702":
            starting = "SECUNDERABAD";
            destination = "VARGAL TEMPLE";
            break;

        case "212T":
            starting = "SECUNDERABAD";
            destination = "TURKAPALLY";
            break;

        // HD215 SERIES
        case "215":
            starting = "ARAMGHAR";
            destination = "KONDAPUR";
            break;

        // HD216 SERIES
        case "216":
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        case "216KL":
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        case "216M":
            starting = "MEHDIPATNAM";
            destination = "LINGAMPALLY";
            break;

        // HD217 SERIES
        case "217":
            starting = "KOTI";
            destination = "PATANCHERUVU";
            break;

        case "217/254":
            starting = "LINGAMPALLY";
            destination = "KONGARAKALAN";
            break;

        case "217C":
            starting = "CBS";
            destination = "PATANCHERUVU";
            break;

        case "217D":
            starting = "DILSHUKNAGAR";
            destination = "PATANCHERUVU";
            break;

        // HD218 SERIES
        case "218":
            starting = "KOTI";
            destination = "PATANCHERUVU";
            break;

        case "218/102":
            starting = "PATANCHERUVU";
            destination = "MIDHANI";
            break;

        case "218/102B":
            starting = "PATANCHERUVU";
            destination = "BADANGPET";
            break;

        case "218/203A":
            starting = "PATANCHERUVU";
            destination = "ADIBATLA";
            break;

        case "218/203N":
            starting = "PATANCHERUVU";
            destination = "NADERGUL";
            break;

        case "218/224MN":
            starting = "KOTI";
            destination = "MALLAMPET";
            break;

        case "218/277K":
            starting = "MIYAPUR";
            destination = "KONGARAKALAN";
            break;

        case "218A":
            starting = "AFZALGUNJ";
            destination = "PATANCHERUVU";
            break;

        case "218C":
            starting = "CBS";
            destination = "PATANCHERUVU";
            break;

        case "218CA":
            starting = "CHANDRAYANGUTTA";
            destination = "PATANCHERUVU";
            break;

        case "218D":
            starting = "DILSHUKNAGAR";
            destination = "PATANCHERUVU";
            break;

        case "218H":
            starting = "HAYATHNAGAR";
            destination = "PATANCHERUVU";
            break;

        case "218L":
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        // HD219 SERIES
        case "219":
            starting = "SECUNDERABAD";
            destination = "PATANCHERUVU";
            break;

        case "219/16A":
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/17":
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/17H":
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/18C":
            starting = "PATANCHERUVU";
            destination = "CHENGICHERLA";
            break;

        case "219/171K":
            starting = "PATANCHERUVU";
            destination = "SHAHPUR NAGAR";
            break;

        case "219/183S":
            starting = "PATANCHERUVU";
            destination = "SHAHPUR NAGAR";
            break;

        case "219/224G":
            starting = "PATANCHERUVU";
            destination = "GANDIMAISAMMA";
            break;

        case "219/229":
            starting = "PATANCHERUVU";
            destination = "MEDCHAL";
            break;

        case "219/250":
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/272G":
            starting = "PATANCHERUVU";
            destination = "GANDIMAISAMMA";
            break;

        case "219/280":
            starting = "PATANCHERUVU";
            destination = "GHATKESAR";
            break;

        case "219I/224G":
            starting = "ISNAPUR";
            destination = "GANDIMAISAMMA";
            break;

        case "219I/272G":
            starting = "ISNAPUR";
            destination = "GANDIMAISAMMA";
            break;

        case "219MP":
            starting = "SECUNDERABAD";
            destination = "PATEL GUDA";
            break;

        // HD220 SERIES
        case "220K/116":
            starting = "KOLLUR";
            destination = "CBS";
            break;

        case "220K/116N":
            starting = "KOLLUR";
            destination = "KOTI";
            break;

        case "220G":
            starting = "MEHDIPATNAM";
            destination = "GOPULAARAM";
            break;

        // HD221 SERIES
        case "221":
            starting = "MIYAPUR METRO STN.";
            destination = "MANCHIREVULA";
            break;

        case "221G":
            starting = "GANDIMAISAMMA";
            destination = "GACHIBOWLI";
            break;

        // HD222 SERIES
        case "222A":
            starting = "KOTI";
            destination = "PATANCHERUVU";
            break;

        case "222L":
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        // HD224 SERIES
        case "224/47D":
            starting = "MAYURI NAGAR";
            destination = "DARGAH";
            break;

        case "224B":
            starting = "MIYAPUR";
            destination = "BOLLARUM";
            break;

        case "224G":
            starting = "MIYAPUR";
            destination = "GANDIMAISAMMA";
            break;

        case "224G/10KM":
            starting = "GANDIMAISAMMA";
            destination = "SECUNDERABAD";
            break;

        case "224G/219":
            starting = "GANDIMAISAMMA";
            destination = "PATANCHERUVU";
            break;

        case "224G/219I":
            starting = "GANDIMAISAMMA";
            destination = "ISNAPUR";
            break;

        case "224MN":
            starting = "NIZAMPET X ROADS";
            destination = "MALLAPET";
            break;

        case "224MN/218":
            starting = "MALLAPET";
            destination = "KOTI";
            break;

        case "224X":
            starting = "MIYAPUR";
            destination = "IDA BOLLARUM";
            break;

        // HD226 SERIES
        case "226":
            starting = "SECUNDERABAD";
            destination = "PATANCHERUVU";
            break;

        // HD227 SERIES
        case "227":
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "227/25S":
            starting = "GANDIMAISAMMA";
            destination = "SECUNDERABAD";
            break;

        // HD229 SERIES
        case "229":
            starting = "SECUNDERABAD";
            destination = "MEDCHAL";
            break;

        case "229/1D":
            starting = "MEDCHAL";
            destination = "DILSHUKNAGAR";
            break;

        case "229/1Z":
            starting = "MEDCHAL";
            destination = "ARAMGHAR";
            break;

        case "229/5K":
            starting = "MEDCHAL";
            destination = "MEHDIPATNAM";
            break;

        case "229/8C":
            starting = "MEDCHAL";
            destination = "AFZALGUNJ";
            break;

        case "229/18C":
            starting = "MEDCHAL";
            destination = "CHENGICHERLA";
            break;

        case "229/25S":
            starting = "MEDCHAL";
            destination = "SECUNDERABAD";
            break;

        case "229/49M":
            starting = "MEDCHAL";
            destination = "MEHDIPATNAM";
            break;

        case "229/90L":
            starting = "MEDCHAL";
            destination = "LB NAGAR";
            break;

        case "229S/90L":
            starting = "MEDCHAL";
            destination = "LB NAGAR";
            break;

        case "229/219":
            starting = "MEDCHAL";
            destination = "PATANCHERUVU";
            break;

        case "229/279":
            starting = "MEDCHAL";
            destination = "IBRAHIMPATNAM";
            break;

        case "229/290":
            starting = "MEDCHAL";
            destination = "HAYATHNAGAR";
            break;

        case "229/290U":
            starting = "MEDCHAL";
            destination = "HAYATHNAGAR";
            break;

        case "229B":
            starting = "MEDCHAL";
            destination = "BOWENPALLY";
            break;

        case "229P":
            starting = "SECUNDERABAD";
            destination = "PUDUR";
            break;

        // HD230 SERIES
        case "230A":
            starting = "SECUNDERABAD";
            destination = "ANNARAM";
            break;

        case "230AN":
            starting = "SECUNDERABAD";
            destination = "ANNARAM";
            break;

        case "230P":
            starting = "SECUNDERABAD";
            destination = "DUNDIGAL";
            break;

        case "230P/9K":
            starting = "DUNDIGAL";
            destination = "AFZALGUNJ";
            break;

        case "230P/9X":
            starting = "DUNDIGAL";
            destination = "CBS";
            break;

        case "230P/9XM":
            starting = "DUNDIGAL";
            destination = "CHARMINAR";
            break;

        // HD231 SERIES
        case "231":
            starting = "MEDCHAL";
            destination = "MEDICITY";
            break;

        case "231KN":
            starting = "SECUNDERABAD";
            destination = "KAZIPALLY";
            break;

        // HD233 SERIES
        case "233":
            starting = "SECUNDERABAD";
            destination = "NUTHANAKAL";
            break;

        // HD241 SERIES
        case "241T":
            starting = "SECUNDERABAD";
            destination = "DHARMAVARAM";
            break;

        // HD242 SERIES
        case "242":
            starting = "SECUNDERABAD";
            destination = "KEESARAGUTTA";
            break;

        case "242/3K":
            starting = "KEESARAGUTTA";
            destination = "AFZALGUNJ";
            break;

        case "242/17H":
            starting = "KEESARAGUTTA";
            destination = "SECUNDERABAD";
            break;

        case "242/211":
            starting = "SECUNDERABAD";
            destination = "DONGALAMYSAMMA";
            break;

        case "242/272G":
            starting = "KEESARAGUTTA";
            destination = "GANDIMAISAMMA";
            break;

        case "242A":
            starting = "SECUNDERABAD";
            destination = "ANKIREDDYPALLY";
            break;

        case "242B":
            starting = "SECUNDERABAD";
            destination = "BOGARAM";
            break;

        case "242BJ":
            starting = "SECUNDERABAD";
            destination = "JINNARAM COLONY";
            break;

        case "242G":
            starting = "SECUNDERABAD";
            destination = "KEESARA";
            break;

        case "242GA":
            starting = "SECUNDERABAD";
            destination = "ANKIREDDYPALLY";
            break;

        case "242RG":
            starting = "SECUNDERABAD";
            destination = "RG COLONY";
            break;

        case "242RG/15H":
            starting = "RG COLONY";
            destination = "SECUNDERABAD";
            break;

        // HD245 SERIES
        case "245A":
            starting = "SECUNDERABAD";
            destination = "AUSHAPUR";
            break;

        // HD250 SERIES
        case "250":
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "250/10K":
            starting = "ECIL X ROADS";
            destination = "KPHB 4TH PHASE";
            break;

        case "250/49":
            starting = "ECIL X ROADS";
            destination = "NAMPALLY";
            break;

        case "250/49M":
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "250/49MT":
            starting = "ECIL X ROADS";
            destination = "TALLAGADDA";
            break;

        case "250/219":
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "250/281":
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "250C":
            starting = "SECUNDERABAD";
            destination = "CHERLAPALLY";
            break;

        case "250C/49M":
            starting = "CHERLAPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "250D":
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "250D/49M":
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "250E":
            starting = "ECIL X ROADS";
            destination = "CHENGICHERLA DEPOT";
            break;

        case "250S":
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA DEPOT";
            break;

        case "250SS":
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA DEPOT";
            break;

        // HD251 SERIES
        case "251/1Z":
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/2Z":
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/5K":
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/7Z":
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/8A":
            starting = "KOTHUR";
            destination = "SECUNDERABAD";
            break;

        case "251/90L":
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/188":
            starting = "SHAMSHABAD";
            destination = "MEHDIPATNAM";
            break;

        case "251/300":
            starting = "SHAMSHABAD";
            destination = "UPPAL X ROADS";
            break;

        case "251M":
            starting = "AFZALGUNJ";
            destination = "MUCHINTHAL";
            break;

        // HD252 SERIES
        case "252/3K":
            starting = "RGI AIRPORT";
            destination = "ECIL X ROADS";
            break;

        case "252/6IW":
            starting = "WAVEROCK";
            destination = "CHERLAPALLY";
            break;

        case "252S":
            starting = "AFZALGUNJ";
            destination = "SHANKARAPURAM";
            break;

        case "252S/8A":
            starting = "SHANKARAPURAM";
            destination = "SECUNDERABAD";
            break;

        // HD253 SERIES
        case "253":
            starting = "CHARMINAR";
            destination = "MAHESHWARAM";
            break;

        case "253/8A":
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "253L/85":
            starting = "ANNOJIGUDA";
            destination = "CHARMINAR";
            break;

        case "253L/102":
            starting = "LEMOOR";
            destination = "KOTI W.COLLEGE";
            break;

        case "253T/90":
            starting = "FAB CITY";
            destination = "JBS";
            break;

        case "253W":
            starting = "KOTI W.COLLEGE";
            destination = "MAHESHWARAM";
            break;

        // HD254 SERIES
        case "254/217":
            starting = "KONGARAKALAN";
            destination = "LINGAMPALLY";
            break;

        // HD272 SERIES
        case "272":
            starting = "SECUNDERABAD";
            destination = "BOWRAMPET";
            break;

        case "272/195":
            starting = "GANDIMAISAMMA";
            destination = "WAVEROCK";
            break;

        case "272B":
            starting = "SECUNDERABAD";
            destination = "BOWRAMPET";
            break;

        case "272G/9K":
            starting = "GANDIMAISAMMA";
            destination = "AFZALGUNJ";
            break;

        case "272G/9X":
            starting = "GANDIMAISAMMA";
            destination = "CBS";
            break;

        case "272G/18":
            starting = "GANDIMAISAMMA";
            destination = "UPPAL";
            break;

        case "272G/29B":
            starting = "GANDIMAISAMMA";
            destination = "SECUNDERABAD";
            break;

        case "272G/83J":
            starting = "GANDIMAISAMMA";
            destination = "KACHEGUDA STN.";
            break;

        case "272G/189M":
            starting = "GANDIMAISAMMA";
            destination = "MEHDIPATNAM";
            break;

        case "272G/219":
            starting = "GANDIMAISAMMA";
            destination = "PATANCHERUVU";
            break;

        case "272G/219I":
            starting = "GANDIMAISAMMA";
            destination = "ISNAPUR";
            break;

        case "272G/242":
            starting = "GANDIMAISAMMA";
            destination = "KEESARAGUTTA";
            break;

        case "272I/29B":
            starting = "INDIRAMMA COLONY";
            destination = "SECUNDERABAD";
            break;

        // HD273 SERIES
        case "273/24S":
            starting = "GANDIMAISAMMA";
            destination = "ECIL X ROADS";
            break;

        // HD277 SERIES
        case "277":
            starting = "MGBS";
            destination = "IBRAHIMPATNAM";
            break;

        case "277D":
            starting = "KOTI W.COLLEGE";
            destination = "IBRAHIMPATNAM";
            break;

        case "277D/72":
            starting = "IBRAHIMPATNAM";
            destination = "AFZALGUNJ";
            break;

        case "277K/218":
            starting = "KONGARAKALAN";
            destination = "MIYAPUR";
            break;

        case "277L":
            starting = "LB NAGAR";
            destination = "IBRAHIMPATNAM";
            break;

        case "277N":
            starting = "KOTI W.COLLEGE";
            destination = "NADERGUL";
            break;

        case "277S":
            starting = "SECRETARIATE";
            destination = "IBRAHIMPATNAM";
            break;

        // HD279 SERIES
        case "279":
            starting = "JBS";
            destination = "IBRAHIMPATNAM";
            break;

        case "279/229":
            starting = "IBRAHIMPATNAM";
            destination = "MEDCHAL";
            break;

        case "279U":
            starting = "IBRAHIMPATNAM";
            destination = "UPPAL X ROADS";
            break;

        // HD280 SERIES
        case "280":
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "280/20":
            starting = "GHATKESAR";
            destination = "SECRETARIATE";
            break;

        case "280/30":
            starting = "GHATKESAR";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "280/219":
            starting = "GHATKESAR";
            destination = "PATANCHERUVU";
            break;

        case "280/492":
            starting = "SECUNDERABAD";
            destination = "PILLAIPALLY";
            break;

        case "280/488":
            starting = "SECUNDERABAD";
            destination = "BIBI NAGAR";
            break;

        case "280B":
            starting = "SECUNDERABAD";
            destination = "BOGARAM";
            break;

        case "280I":
            starting = "UPPAL X ROADS";
            destination = "INFOSYS";
            break;

        case "280J":
            starting = "JBS";
            destination = "GHATKESAR";
            break;

        case "280N":
            starting = "SECUNDERABAD";
            destination = "NFC NAGAR";
            break;

        case "280X":
            starting = "UPPAL X ROADS";
            destination = "GHATKESAR";
            break;

        // HD281 SERIES
        case "281":
            starting = "ECIL X ROADS";
            destination = "GHATKESAR";
            break;

        case "281/3K":
            starting = "GHATKESAR";
            destination = "AFZALGUNJ";
            break;

        case "281/6L":
            starting = "GHATKESAR";
            destination = "KONDAPUR";
            break;

        case "281/16C":
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281/24B":
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281/24L":
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281/113M":
            starting = "GHATKESAR";
            destination = "KONDAPUR";
            break;

        case "281/250":
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281R/16A":
            starting = "RTC COLONY";
            destination = "SECUNDERABAD";
            break;

        // HD282 SERIES
        case "282K":
            starting = "GHATKESAR";
            destination = "KONDAPUR";
            break;

        // HD283 SERIES
        case "283C":
            starting = "SECUNDERABAD";
            destination = "SURARAM COLONY";
            break;

        case "283D/9X":
            starting = "SURARAM COLONY";
            destination = "CBS";
            break;

        case "283K":
            starting = "SECUNDERABAD";
            destination = "KORREMULA";
            break;

        case "283T":
            starting = "SECUNDERABAD";
            destination = "TENUGUDEM";
            break;

        case "283VS":
            starting = "SECUNDERABAD";
            destination = "SURARAM VILLAGE";
            break;

        case "283S/18":
            starting = "KORREMULA";
            destination = "SECUNDERABAD";
            break;

        // HD284 SERIES
        case "284P":
            starting = "UPPAL X ROADS";
            destination = "PRATHAP SINGARAM";
            break;

        // HD288 SERIES
        case "288":
            starting = "MEHDIPATNAM";
            destination = "MOINABAD";
            break;

        case "288/113M":
            starting = "MOINABAD";
            destination = "UPPAL";
            break;

        case "288A":
            starting = "MEHDIPATNAM";
            destination = "AMDAPUR";
            break;

        case "288C":
            starting = "MEHDIPATNAM";
            destination = "APPOJIGUDA";
            break;

        case "288D":
            starting = "MEHDIPATNAM";
            destination = "BALAJI TEMPLE";
            break;

        case "288E":
            starting = "MEHDIPATNAM";
            destination = "BAKARAM";
            break;

        case "288K":
            starting = "KOTI";
            destination = "MOINABAD";
            break;

        case "288NB":
            starting = "MEHDIPATNAM";
            destination = "BAKARAM";
            break;

        case "288R":
            starting = "MEHDIPATNAM";
            destination = "CHINNA MANAGALARAM";
            break;

        case "288Y":
            starting = "MEHDIPATNAM";
            destination = "ELKAGUDA";
            break;

        case "288D/19K":
            starting = "BALAJI TEMPLE";
            destination = "KUKATPALLY";
            break;

        // HD290 SERIES
        case "290":
            starting = "JBS";
            destination = "HAYATHNAGAR";
            break;

        case "290/229":
            starting = "HAYATHNAGAR";
            destination = "MEDCHAL";
            break;

        case "290KJ":
            starting = "JBS";
            destination = "KUNTLOOR";
            break;

        case "290KP":
            starting = "SECUNDERABAD";
            destination = "KAWADIPALLY";
            break;

        case "290U":
            starting = "JBS";
            destination = "HAYATHNAGAR";
            break;

        case "290U/201":
            starting = "JBS";
            destination = "BACHARAM";
            break;

        case "290U/201T":
            starting = "JBS";
            destination = "TARAMATIPET";
            break;

        case "290U/202K":
            starting = "JBS";
            destination = "KOHEDA";
            break;

        case "290U/204":
            starting = "JBS";
            destination = "GANDICHERUVU";
            break;

        case "290U/205A":
            starting = "JBS";
            destination = "ANAJPUR";
            break;

        case "290U/205B":
            starting = "SECUNDERABAD";
            destination = "BALIJAGUDA";
            break;

        case "290U/205M":
            starting = "JBS";
            destination = "MAJEEDPUR";
            break;

        case "290U/229":
            starting = "HAYATHNAGAR";
            destination = "MEDCHAL";
            break;

        case "290U/463":
            starting = "JBS";
            destination = "DESHMUKHI";
            break;

        case "290U/555":
            starting = "SECUNDERABAD";
            destination = "CHOTUPPAL";
            break;

        case "290UA":
            starting = "JBS";
            destination = "ANAJPUR";
            break;

        case "290UF":
            starting = "JBS";
            destination = "METTU (RFC)";
            break;

        // HD299 SERIES
        case "299":
            starting = "HAYATHNAGAR";
            destination = "KOTI W.COLLEGE";
            break;

        case "299/1D":
            starting = "HAYATHNAGAR";
            destination = "SECUNDERABAD";
            break;

        case "299/100":
            starting = "HAYATHNAGAR";
            destination = "SECRETARIATE";
            break;

        case "299/156":
            starting = "HAYATHNAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "299D":
            starting = "HAYATHNAGAR";
            destination = "DILSHUKNAGAR";
            break;

        // HD300 SERIES
        case "300":
            starting = "MEHDIPATNAM";
            destination = "UPPAL X ROADS";
            break;

        case "300/90":
            starting = "MEHDIPATNAM";
            destination = "SECUNDERABAD";
            break;

        case "300/118W":
            starting = "JBS";
            destination = "WAVEROCK";
            break;

        case "300/126":
            starting = "LB NAGAR";
            destination = "JNTU COLLEGE";
            break;

        case "300/251":
            starting = "UPPAL X ROADS";
            destination = "SHAMSHABAD";
            break;

        case "300/539":
            starting = "SECUNDERABAD";
            destination = "KANHA";
            break;

        case "300L":
            starting = "MEHDIPATNAM";
            destination = "LB NAGAR";
            break;

        case "300A":
            starting = "LB NAGAR";
            destination = "ARAMGHAR";
            break;

        // HD400 SERIES
        case "412":
            starting = "KOTI W.COLLEGE";
            destination = "MALL";
            break;

        case "444":
            starting = "MEHDIPATNAM";
            destination = "MEDIPALLY";
            break;

        case "445":
            starting = "MEHDIPATNAM";
            destination = "KETIREDDYPALLY";
            break;

        case "447R":
            starting = "MEHDIPATNAM";
            destination = "RAVULAPALLY";
            break;

        case "458":
            starting = "AFZALGUNJ";
            destination = "MAHESHWARAM";
            break;

        case "463":
            starting = "DILSHUKNAGAR";
            destination = "DESHMUKHI";
            break;

        case "463/290U":
            starting = "DESHMUKHI";
            destination = "JBS";
            break;

        case "464":
            starting = "DILSHUKNAGAR";
            destination = "DANDUMAILARAM";
            break;

        case "488/280":
            starting = "BIBI NAGAR";
            destination = "SECUNDERABAD";
            break;

        case "490S":
            starting = "SECUNDERABAD";
            destination = "BIBI NAGAR";
            break;

        case "492/280":
            starting = "PILLAIPALLY";
            destination = "SECUNDERABAD";
            break;

        case "495":
            starting = "SECUNDERABAD";
            destination = "KANUKUNTA";
            break;

        case "497":
            starting = "ECIL X ROADS";
            destination = "HAJIPUR";
            break;

        case "498":
            starting = "SECUNDERABAD";
            destination = "KESHAVAPUR";
            break;

        case "498K":
            starting = "SECUNDERABAD";
            destination = "KOTHAPALLY";
            break;

        case "498U":
            starting = "SECUNDERABAD";
            destination = "UDDHAMARRI";
            break;

        case "498VJ":
            starting = "SECUNDERABAD";
            destination = "JINNARAM";
            break;

        // HD500 SERIES
        case "505":
            starting = "MEHDIPATNAM";
            destination = "SHANKARPALLY";
            break;

        case "505/19S":
            starting = "SHANKARPALLY";
            destination = "SANATH NAGAR";
            break;

        case "505/156":
            starting = "SHANKARPALLY";
            destination = "HAYATHNAGAR";
            break;

        case "505/156V":
            starting = "SHANKARPALLY";
            destination = "NGO's COLONY";
            break;

        case "523K":
            starting = "KOTI W.COLLEGE";
            destination = "KAVADIPALLY";
            break;

        case "524":
            starting = "DILSHUKNAGAR";
            destination = "POCHAMPALLY";
            break;

        case "530":
            starting = "AFZALGUNJ";
            destination = "KANDUKUR";
            break;

        case "532":
            starting = "AFZALGUNJ";
            destination = "JP DARGAH";
            break;

        case "532/8A":
            starting = "KOTHUR";
            destination = "SECUNDERABAD";
            break;

        case "537":
            starting = "AFZALGUNJ";
            destination = "KODICHERLA";
            break;

        case "539":
            starting = "AFZALGUNJ";
            destination = "KANHA";
            break;

        case "539/1Z":
            starting = "KANHA";
            destination = "SECUNDERABAD";
            break;

        case "539/8A":
            starting = "KANHA";
            destination = "SECUNDERABAD";
            break;

        case "539/300":
            starting = "KANHA";
            destination = "SECUNDERABAD";
            break;

        case "546":
            starting = "ECIL X ROADS";
            destination = "BHUVANAGIRI";
            break;

        case "555":
            starting = "DILSHUKNAGAR";
            destination = "CHOTUPPAL";
            break;

        case "555/290U":
            starting = "CHOTUPPAL";
            destination = "SECUNDERABAD";
            break;

        case "567":
            starting = "SECUNDERABAD";
            destination = "MARKOOK";
            break;

        case "568":
            starting = "SECUNDERABAD";
            destination = "DAMARAKUNTA";
            break;

        case "571T":
            starting = "SECUNDERABAD";
            destination = "THIMMAPUR";
            break;

        case "578":
            starting = "ECIL X ROADS";
            destination = "M TURKAPALLY";
            break;

        case "580":
            starting = "SECUNDERABAD";
            destination = "YADAGIRIGUTTA";
            break;

        case "589":
            starting = "SECUNDERABAD";
            destination = "RAMAYAMPET";
            break;

        case "592":
            starting = "MEHDIPATNAM";
            destination = "KANDWADA";
            break;

        case "593":
            starting = "MEHDIPATNAM";
            destination = "CHEVELLA";
            break;

        // HD700 SERIES
        case "702/212":
            starting = "VARGAL TEMPLE";
            destination = "SECUNDERABAD";
            break;

        default:

            break;
    }

    return [starting, destination];
}

function fillSuggestionsList(array) {
    document.getElementById('suggestionsList').innerHTML = "";
    array.forEach(Element => {
        let option = document.createElement('option');
        option.value = Element;
        document.getElementById('suggestionsList').appendChild(option);
    });
}