let busDataLocal = [
    ["AP11Z6125", "AP11Z6171", "AP11Z6628", "AP11Z6657", "AP11Z6671", "AP11Z6727", "AP11Z6799", "AP11Z6888", "AP11Z6927", "AP11Z6935", "AP11Z6986", "AP11Z6993", "AP11Z7000", "AP11Z7089", "AP11Z7312", "AP11Z7322", "AP11Z7325", "AP11Z7346", "AP11Z7351", "AP11Z7418", "AP11Z7470", "AP11Z7554", "AP15Z0098", "AP21Z0017", "AP29Z0167", "AP29Z0413", "AP29Z1079", "AP29Z1298", "AP29Z2728", "AP29Z3273", "AP29Z3476", "AP29Z3497", "AP29Z3517", "AP29Z3533", "AP29Z3620", "AP29Z3668", "AP29Z3694", "TG09Z0147", "TG09Z0224", "TG09Z0228", "TG09Z0352", "TG09Z0384", "TG10T2114", "TS02Z0260", "TS05Z0151", "TS08Z0020", "TS08Z0118", "TS08Z0118", "TS08Z0122", "TS08Z0134", "TS08Z0142", "TS08Z0162"],

    ["JDM", "MP", "MSRD", "MYP2", "MYP2", "HYT1", "KG", "MYP2", "MYP2", "MYP2", "MYP2", "MYP2", "MYP2", "RJNR", "MSRD", "BKP", "KP", "MSRD", "HYT1", "RNG", "CGCL", "MYP2", "KP", "JDM", "KP", "RNG", "KG", "FQNR", "DSNR", "CGCL", "KP", "RNG", "KP", "KP", "UPL", "KCG", "UPL", "KCG", "FQNR", "KCG", "DSNR", "CGCL", "MYP2", "KG", "KG", "JDM", "FQNR", "FQNR", "JDM", "JDM", "UPL", "RNG"],

    ["ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "ME", "ME", "ME", "CO", "CO", "MD", "ME", "ME", "EME", "ME", "CO", "ME", "CO", "CO", "CO", "CO", "CO", "CO"],
]

let occupancyAutoFill = ["More than 4 seats are available", "Bus is full", "Standing space is available", "Only 1 seat left", "Less than 4 seats available", "Few seats left", "Bus is almost empty", "Bus is moderately crowded", "The bus is overcrowded", "No standing space available", "No seats, standing only."]

let starting, destination;

let DetailedRoutesUP = [
    // 1 SERIES
    ["1"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1/25S/229"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["1B"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "RTC X ROADS"),
        SHD[167],
        getStops(RMNG_DRFM, 'VST', 'YMCA'),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["1C"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "CITY BUS STATION")
    ),
    ["1D"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "DILSHUKNAGAR")
    ),
    ["1D/229"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        getStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1D/299"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1H"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1HD"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET X ROADS"),
        getStops(TailsUP, 'HUDA COLONY (SRRNGR)', 'SAROOR NAGAR')
    ),
    ["1J"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["1JL"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'LANGER HOUSE')
    ),
    ["1JK"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'LANGER HOUSE'),
        getStops(SRPT_MNBD, 'BAPU GHAT', 'KALI MANDIR')
    ),
    ["1K"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        SHD[181], SHD[453], SHD[454]
    ),
    ["1L"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "LB NAGAR X ROADS")
    ),
    ["1MD"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET"),
        SHD[626], SHD[597],
    ),
    ["1P"].concat(
        SHD[898], SHD[207], SHD[743], SHD[199],
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1P/25S"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        SHD[199], SHD[743], SHD[207], SHD[898],
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1V"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["1VM"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[922], SHD[920], SHD[918], SHD[910], SHD[899], SHD[250],
    ),
    ["1VS"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'RYTHU BAZAR'),
        SHD[313], SHD[1201]
    ),
    ["1W"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE")
    ),
    ["1X"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KACHEGUDA X ROADS"),
        getStops(SHMB_KSR, "KACHEGUDA TOURIST", "KACHEGUDA STATION")
    ),
    ["1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/229"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1Z/251"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
    ),
    ["1Z/539"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),

    // 2 SERIES
    ["2"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2C"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "CRPF GATE (BRKS)"),
        SHD[113]
    ),
    ["2J"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["2K"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708], SHD[181], SHD[453], SHD[454],

    ),
    ["2U"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "LAL DARWAJA X ROADS"),
        getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["2Z"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["2/25S"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["2Z/251"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'SHAMSHABAD')
    ),

    // 3 SERIES
    ["3"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "ZTS X ROADS"),
        SHD[526],
        getStops(SHMB_KSR, "SP NAGAR", "KUSHAIGUDA")
    ),
    ["3C"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getStops(SHMB_KSR, "KACHEGUDA STATION", "ECIL X ROADS")
    ),
    ["3D"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["3DN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["3H"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["3HN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        SHD[993],
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3K"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "KUSHAIGUDA")
    ),
    ["3K/6M"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["3K/90L"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["3K/95"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")
    ),
    ["3K/102"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["3K/102B"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["3K/203N"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["3K/242"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["3K/251"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD')
    ),
    ["3K/252"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD'),
        SHD[843]
    ),
    ["3K/281"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["3KN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3KN/6M"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'HB COLONY'),
        getStops(CRPL_LGPL, 'NOMA', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["3KN/95"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["3KJ"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["3L"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "LALAPET (RAM TH.)"),
        SHD[780]
    ),
    ["3M"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getStops(SHMB_KSR, "KACHEGUDA STATION", "ZTS X ROADS"),
        SHD[633], SHD[736], SHD[572], SHD[573], SHD[562], SHD[66]
    ),
    ["3N"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "RAM KOTI X ROADS"),
        SHD[1099],
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        getStops(TailsUP, "NACHARAM IDA", "HEMA NAGAR")
    ),
    ["3N/203N"].concat(
        SHD[1047], SHD[1056], SHD[662],
        getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["3T"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
    ),
    ["3Y"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS"),
        getStops(HCLX_GWRL, 'NORTH KAMALA NAGAR', 'RADHIKA THEATER'),
        SHD[961], SHD[302], SHD[1217], SHD[1153], SHD[1212], SHD[1161]
    ),

    // 5 SERIES
    ["5/5R"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "CLOCK TOWER"),
        getStops(MNBD_SRPT, "SECUNDERABAD", "RISALA BAZAR")
    ),
    ["5G"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),
    ["5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5KM"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET DARGAH'),
        getStops(TailsUP, 'OU COLONY', 'MANIKONDA')
    ),
    ["5K/16A"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["5K/16AD"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["5K/16C"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["5K/16CD"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
    ),
    ["5K/16D"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
    ),
    ["5K/25S"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getStops(MNBD_SRPT, "PATNY", "LOTHKUNTA"),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["5K/92A"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["5K/92R"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "DAIRY FARM (CNTLMT)"),
        getStops(DRFM_RMNG, 'NPPTI', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),
    ["5K/120K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'KOKAPET X ROADS'),
        SHD[490]
    ),
    ["5K/125"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["5K/188"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "KALI MANDIR"),
    ),
    ["5K/229"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["5K/251"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR"),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["5M"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MAHAVIR HOSPITAL"),
        SHD[1063],
        getStops(KOTI_MCRL, 'MALLEPALLY', 'MEHDIPATNAM')
    ),
    ["5R"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getStops(MNBD_SRPT, "PATNY", "RISALA BAZAR")
    ),
    ["5R/5"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'MEHDIPATNAM'),
    ),
    ["5W"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),

    // 6 SERIES
    ["6IW/252"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'ADIKMET'),
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167], SHD[856], SHD[70],
        getStops(TailsUP, 'NTR STADIUM', 'BIRLA MANDIR'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["6L/281"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["6M/3K"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'ECIL X ROADS')
    ),
    ["6M/3KN"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'NOMA'),
        getStops(SHMB_KSR, 'HB COLONY', 'ECIL X ROADS')
    ),
    ["6N/47W"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'HB COLONY'),
        getStops(CRPL_LGPL, 'NOMA', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["6R"].concat(
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["6RK"].concat(
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'KALI MANDIR')
    ),
    ["6X"].concat(
        X6_UP,
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        SHD[1075], SHD[167], SHD[856], SHD[70],
        getStops(TailsUP, 'NTR STADIUM', 'BIRLA MANDIR'),
        getStops(GTKS_PTCR, 'LAKDI KA PUL', 'IRRUM MANZIL')
    ),

    // 7 SERIES
    ["7Z"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'ARAMGHAR')
    ),
    ["7Z/251"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD')
    ),

    // 8 SERIES
    ["8/37"].concat(
        getStops(GTKS_PTCR, 'GANDHI BHAVAN', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'BATA'),
        SHD[761], SHD[760],
        SHD[754], SHD[1011], SHD[1102], SHD[210], SHD[975], SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], SHD[996], SHD[376],
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS'),
        SHD[525], // recheck, route incorrect
    ),
    ["8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8AK"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8UA"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "LAL DARWAJA X ROADS"),
        getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["8A/85"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "PAHADI SHARIF")
    ),
    ["8A/178G"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS"),
        SHD[103], "ISMAIL NAGAR", "GHOUSE NAGAR"
    ),
    ["8A/252S"].concat(
        getStops(MDCL_MHRM, 'SECUNDERABAD', 'OSMANGUNJ'),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        'KISHANGUDA',
        getStops(OSK_Stops, 'RASHEEDGUDA', 'SHANKARAPURAM')
    ),
    ["8A/532"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR')
    ),
    ["8A/539"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["8C"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getStops(MDCL_MHRM, 'AFZALGUNJ', 'CHANDRAYANGUTTA X ROADS')
    ),
    ["8C/85P"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getStops(MDCL_MHRM, 'AFZALGUNJ', 'PAHADI SHARIF')
    ),
    ["8C/229"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'PARADISE CENTER'),
        getStops(IBP_DNGL, 'PARADISE', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["8R"].concat(
        getStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getStops(SRPT_MNBD, 'BATA', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        SHD[220]
    ),

    // 9 SERIES
    ["9A"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ESI HOSPITAL'),
        SHD[1214], SHD[1147]
    ),
    ["9F"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9K/102"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["9K/230P"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9K/272G"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9X/41C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'IDPL'),
        getStops(MLPT_BLNR, 'ERRAGODALU', 'RANGA REDDY KAMAN'),
        SHD[1150]
    ),
    ["9X/230P"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9X/272G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X/283D"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'SURARAM'),
        SHD[1208], SHD[1209]
    ),
    ["9XM"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9XM/230P"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9YF"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 10 SERIES
    ["10"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["10F"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10FV"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152],
        SHD[1148], SHD[1192], SHD[229], SHD[489], SHD[522], SHD[1213]
    ),
    ["10H"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10HA"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'PATANCHERUVU')
    ),
    ["10HL"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'LINGAMPALLY')
    ),
    ["10HP"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'HAFEEZPET'),
        SHD[1196]
    ),
    ["10HW"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),
    ["10J"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "JNTU COLLEGE")
    ),
    ["10JP"].concat(
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["10K"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KPHB MAIN ROAD"),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["10KG"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "JNTU COLLEGE"),
        SHD[344], SHD[409], "GOKUL PLOTS"
    ),
    ["10KJ"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10KL"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "LINGAMPALLY")
    ),
    ["10KM"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS")
    ),
    ["10Y"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
    ),
    ["10YF"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10YF/16S"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["10W"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),
    ["10H/16A"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["10H/16C"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["10H/18C"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["10KJ/18"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["10K/250"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["10KM/224G"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS"),
        getStops(ADBT_MDCL, 'LAND MARK TOWER', 'GANDIMAISAMMA')
    ),

    // 11 SERIES
    ["11W"].concat(
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780]
    ),
    ["14PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780], SHD[257],
        getStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 15 SERIES
    ["15H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["15D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["15D/20"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'MEHDIPATNAM')
    ),
    ["15H/20"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["15H/242RG"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NGRM)'),
        SHD[128], SHD[744], SHD[842]
    ),
    // 16 SERIES
    ["16/20"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(GTKS_PTCR, 'LAKDI KA PUL', 'IRRUM MANZIL')
    ),
    ["16A"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16AK"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "NEREDMET OLD PS"),
        getStops(TailsDOWN, 'KAKATHIYA NAGAR', 'VINOBA NAGAR'),
        getStops(GWRL_HCLX, 'VAYUPURI', 'ECIL X ROADS')
    ),
    ["16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16CD"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["16CR"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["16ES"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getStops(HCLX_GWRL, 'UTTAM NAGAR', 'AOC CENTER'),
        SHD[984], SHD[448], SHD[760],
        getStops(SRPT_MNBD, 'BATA', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'IRRUM MANZIL')
    ),
    ["16H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], SHD[593], SHD[633],
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["16NY"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'NEREDMET X ROADS'),
        SHD[241], SHD[712], SHD[375],
        getStops(KPHB_GTKS, 'AMMUGUDA BAZAR', 'YAPRAL')
    ),
    ["16P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        SHD[257], SHD[780]
    ),
    ["16PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        SHD[257],
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16A/5K"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/10H"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16A/20"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["16A/47L"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA"),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["16A/47W"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "ALUGADDA BHAVI"),
        w47_UP
    ),
    ["16A/49M"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/219"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["16A/281R"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'RTC COLONY (RMPLY)')
    ),
    ["16AD/5K"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/5K"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/10H"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16C/38T"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        SHD[84], "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["16C/47L"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA"),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["16C/49M"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/281"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["16CD/5K"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16CD/49M"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16CR/38T"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["16D/5K"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16D/24B"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["16D/49M"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16H/49M"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16R/20"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "AS RAO NAGAR"),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getStops(HCLX_GWRL, "RK NAGAR", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["16S/10YF"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 17 SERIES
    ["17D"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["17DH"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17DS"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17DV"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "ICOM TELE LIMITED"),
        SHD[1065]
    ),
    ["17H"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17HN"].concat(
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'NOMA'),
        getStops(SHMB_KSR, 'HB COLONY', 'ECIL X ROADS')
    ),
    ["17H/29B"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["17H/47W"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        w47_UP
    ),
    ["17/219"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17H/219"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17H/242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["17CS"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "CHAKRIPURAM"),
        getStops(TailsUP, 'CHERLAPALLY JAIL', 'CHERLAPALLY')
    ),
    ["17S"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["17V"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ICOM TELE LIMITED"),
        SHD[1065]

    ),

    // 18 SERIES
    ["18"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18B"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'MALLIKARJUNA TEMPLE'),
        SHD[1164]
    ),
    ["18C"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18C/10H"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["18J"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    // ["18R"].concat(
    //     // getStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD'),
    //     // SHD[754], SHD[448]
    // ),
    ["18V"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'NGRI'),
        SHD[163], SHD[162], SHD[198],
        getStops(GTKS_PTCR, 'RAMANTHAPUR CHURCH', 'RAMANTHAPUR'),
        SHD[441], SHD[465], SHD[1140]
    ),
    ["18VJ"].concat(
        SHD[1140], SHD[465], SHD[441],
        getStops(PTCR_GTKS, 'RAMANTHAPUR', 'RAMANTHAPUR CHURCH'),
        SHD[198], SHD[162], SHD[163],
        getStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18VS"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'SURVEY OF INDIA'),
        getStops(GTKS_PTCR, 'UPPAL RING ROAD', 'RAMANTHAPUR')
    ),
    ["18/10KJ"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["18/47U"].concat(
        SHD[144],
        getStops(TailsDOWN, 'INDIRA NAGAR X ROADS', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "PANJAGUTTA"),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY')
    ),
    ["18/272G"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'GANDIMAISAMMA')
    ),
    ["18/283S"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["18C/30"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["18C/219"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["18C/229"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),

    // 19 SERIES
    ["19F"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152],
    ),
    ["19K"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["19K/288D"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["19KG"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'JNTU COLLEGE'),
        SHD[344], SHD[409], "GOKUL PLOTS"
    ),
    ["19KJ"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["19KM"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR X ROADS')
    ),
    ["19M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB MAIN ROAD'),
        getStops(TailsUP, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["19MP"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["19S"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["19YF"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["19S/505"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),

    // 20 SERIES
    ["20P"].concat(
        SHD[898], SHD[207],
        getStops(TailsUP, 'PADMARAO NAGAR', 'BHOLAKPUR'),
        getStops(DRFM_RMNG, 'KALPANA', 'ASHOK NAGAR X ROADS'),
        getStops(TailsUP, 'NTR STADIUM', 'NAMPALLY')
    ),
    ["20/15D"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),

    ),
    ["20/15H"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["20/16"].concat(
        getStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["20/16A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["20/16R"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RK NAGAR"),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(GWRL_HCLX, "AS RAO NAGAR", "ECIL X ROADS")
    ),
    ["20/250C"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'CHILKALGUDA X ROADS'),
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'CHERLAPALLY')
    ),
    ["20/280"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),

    // 21 SERIES
    ["21W"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[293], SHD[1057], SHD[414], SHD[1081]
    ),

    // 22 SERIES
    ["22"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HAKIMPET')
    ),
    ["22/49E"].concat(
        getStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getStops(CRPL_LGPL, 'PARADISE', 'PANJAGUTTA'),
        getStops(PTCR_GTKS, 'NIMS HOSPITAL', 'IRRUM MANZIL')
    ),
    ["22/90L"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["22D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[10], SHD[14], SHD[612]
    ),
    ["22K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[134], SHD[169]
    ),

    // 23 SERIES
    ["23B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132]
    ),
    ["23BK"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132], SHD[516]
    ),
    ["23BS"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132], SHD[516], SHD[561], SHD[976]
    ),
    ["23GF"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getStops(MHRM_MDCL, 'TEACHERS COLONY', 'GREEN FIELDS COLONY')
    ),
    ["23GS"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getStops(MHRM_MDCL, 'TEACHERS COLONY', 'KISTAMMA ENCLAVE'),
        SHD[561], SHD[976]
    ),
    ["23K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'KISTAMMA ENCLAVE')
    ),
    ["23T"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getStops(MHRM_MDCL, 'TEACHERS COLONY', 'KANJIGUDA'),
        SHD[429], SHD[745], SHD[998]
    ),

    // 24 SERIES
    ["24"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'YAPRAL')
    ),
    ["24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'BALAJI NAGAR')
    ),
    ["24BA"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'AMBEDKAR NAGAR')
    ),
    ["24BJ"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'CHENNAPUR X ROADS'),
        SHD[1161]
    ),
    ["24E"].concat(
        SHD[898],
        getStops(MNBD_SRPT, 'PATNY', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'AMMUGUDA BAZAR'),
        SHD[375], SHD[712], SHD[996], SHD[376],
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS')
    ),
    ["24S"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA')
    ),
    ["24SS"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SHAHPUR NAGAR'),
    ),
    ["24B/16D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["24B/281"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["24J"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        SHD[1016], SHD[923], SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24L/281"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["24N/219"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC",
        SHD[1016], SHD[245], SHD[700], SHD[586], SHD[621], "THOKATTA VILLAGE", SHD[640],
        getStops(IBP_DNGL, "BOWENPALLY X ROADS", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["24S/273"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),


    // 25 SERIES
    ["25A"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        SHD[1096],
        SHD[30],
        getStops(TailsUP, 'SURYA NAGAR X ROADS', 'SURYA NAGAR')
    ),
    ["25AJ"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        SHD[1096],
        SHD[30],
        getStops(TailsDOWN, 'SURYA NAGAR X ROADS', 'JONNABANDA'),
    ),
    ["25AJ/M"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        SHD[1096],
        SHD[30],
        getStops(TailsDOWN, 'SURYA NAGAR X ROADS', 'GOPAL NAGAR'),
    ),
    ["25M"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        getStops(TailsUP, 'SELECT TALKIES', 'GOPAL NAGAR')
    ),
    ["25MS"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        getStops(TailsUP, 'SELECT TALKIES', 'GOPAL NAGAR X ROADS'),
        getStops(TailsUP, 'SANJEEVA GARDENS', 'SHARAN NAGAR')
    ),
    ["25P"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        SHD[1096], SHD[991], SHD[968]
    ),
    ["25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/1"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["25S/1P"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        SHD[898], SHD[207], SHD[743], SHD[199],
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["25S/2"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["25S/5K"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),
    ["25S/227"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),
    ["25S/229"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),

    // 26 SERIES
    ["26M"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'PATNY'),
        getStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    // ["26M/49M"].concat(
    //     getStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
    //     getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM')
    // ),
    ["26N"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'PATNY'),
        getStops(TailsUP, 'MUD FORT', 'DIAMOND POINT'),
        SHD[1165], SHD[1154],
        getStops(TailsUP, 'ASHOK GARDENS', 'OLD BOWENPALLY')
    ),

    // 29 SERIES
    ["29B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "JEEDIMETLA")
    ),
    ["29B/17H"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["29B/272G"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["29B/272I"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
        SHD[1046],
        SHD[407]
    ),
    ["29B/272J"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        getStops(MDCL_ADBT, 'BOWRAMPET X ROADS', 'VNR VJIET'),
        SHD[1178]
    ),
    ["29S"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SHAHPUR NAGAR"),
        SHD[1207]
    ),
    ["29Q"].concat(
        getStops(IBP_DNGL, "BALANAGAR", "CHINTAL"),
        SHD[214], SHD[792]
    ),

    // 30 SERIES
    ["30"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30S"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'BEERAPPA NAGAR'),
        SHD[271], SHD[512], SHD[531], SHD[541], SHD[969]
    ),
    ["30/18C"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PLAZA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["30/280"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PLAZA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),

    // 31 SERIES
    ["31P"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),

    // 37 SERIES
    ["37"].concat(
        SHD[898], SHD[754], SHD[1011], SHD[1102], SHD[210], SHD[975], SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], SHD[996], SHD[376],
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS')
    ),
    ["37/8"].concat(
        SHD[525],
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], "AOC RECORDS", SHD[118], SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754],
        getStops(SRPT_MNBD, 'CLOCK TOWER', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'GANDHI BHAVAN')
    ),

    // 38 SERIES
    ["38EX"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", SHD[84],
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),
    ["38X"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        SHD[84], "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        SHD[1027]
    ),
    ["38T/16C"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        getStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["38T/16CR"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),

    // 40 SERIES
    ["40"].concat(
        getStops(MDCL_MHRM, 'SECUNDERABAD', 'BATA'),
        getStops(DRFM_RMNG, 'BIBLE HOUSE', 'NATIONAL DARBAR'),
        SHD[770], SHD[3], SHD[110], SHD[506]
    ),

    // 41 SERIES
    ["41C/9X"].concat(
        SHD[1150],
        getStops(BLNR_MLPT, 'RANGA REDDY KAMAN', 'ERRAGODALU'),
        getStops(DNGL_IBP, 'IDPL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),

    // 44 SERIES
    ["44X"].concat(
        SHD[898], SHD[207], SHD[743], SHD[1204], SHD[1206], SHD[1155], SHD[311]
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[506],
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        SHD[131],
        getStops(RMNG_DRFM, 'KALPANA', 'PARADISE CENTER'),
        getStops(CRPL_LGPL, "PARADISE", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 46 SERIES
    ["46"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "POLICE LINES"),
        SHD[759]
    ),

    // 47 SERIES
    ["47D/224"].concat(
        SHD[908], SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        SHD[752],
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR METRO STATION'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'MIYAPUR DEPOT'),
        SHD[795]
    ),
    ["47L"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47L/16A"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["47L/16C"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["47U/18"].concat(
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MCRL_KOTI, 'JUBLIE HILLS CHECK POST', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, "PANJAGUTTA", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'INDIRA NAGAR X ROADS'),
        SHD[144]
    ),
    ["47W"].concat(
        "SECUNDERABAD",
        getStops(w47_UP, 'PATNY', 'WAVEROCK')
    ),
    ["47W/6N"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'NOMA'),
        getStops(SHMB_KSR, 'HB COLONY', 'ECIL X ROADS')
    ),
    ["47W/16A"].concat(
        w47_DN,
        getStops(LGPL_CRPL, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["47W/17H"].concat(
        w47_DN,
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["47Y"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'JUBLIE HILLS CHECK POST'),
        getStops(KOTI_MCRL, 'JOURNLIST COLONY', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47YM"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'JUBLIE HILLS CHECK POST'),
        getStops(KOTI_MCRL, 'JOURNLIST COLONY', 'MANCHIREVULA'),
    ),

    // 49 SERIES
    ["49"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49A"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'AFZALGUNJ')
    ),
    ["49M"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM')
    ),
    ["49MT"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        "MEHDIPATNAM DEPOT", "GUDIMALKAPUR", "SHIV BAGH", "SHARADA NAGAR (MP)", "TALLAGADDA"
    ),
    ["49/250"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49E/22"].concat(
        getStops(GTKS_PTCR, 'IRRUM MANZIL', 'NIMS HOSPITAL'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'PARADISE'),
        getStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),
    ["49M/16A"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["49M/16C"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["49M/16CD"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),

    ),
    ["49M/16D"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),

    ),
    ["49M/16H"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], "NMDC (ANANDH BAGH)", "TIRUMALA NAGAR",
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    // ["49M/26M"].concat(
    //     getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
    //     SHD[755],
    //     getStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    // ),
    ["49M/92A"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),
    ["49M/188B"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, "RETHIBOWLI", "TK BRIDGE"),
        getStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'HYDERSHAKOTE X ROADS'),
        "GANDHAMGUDA", "BAIRAGIGUDA"
    ),
    ["49M/229"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        getStops(IBP_DNGL, 'TARBUND', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["49M/250"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49M/250C"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["49M/250D"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),

    ),
    ["49MT/250"].concat(
        "TALLAGADDA", "SHARADA NAGAR (MP)", "SHIV BAGH", "GUDIMALKAPUR", "MEHDIPATNAM DEPOT", SHD[620],
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),

    // 50 SERIES
    ["50B"].concat(
        SHD[898], SHD[207],
        getStops(LGPL_CRPL, "ALUGADDA BHAVI", "NACHARAM X ROADS"),
        getStops(TailsUP, 'NACHARAM IDA', 'CHILKA NAGAR'),
        getStops(TailsUP, 'BODUPPAL CIRCLE', 'CGCL GRAMPANCHAYATH'),
        SHD[195]
    ),

    // 65 SERIES
    ["65/116GA"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["65MG"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),
    ["65M/116G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["65M/123"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),

    // 66 SERIES
    ["66G"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),

    // 71 SERIES
    ["71A"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["71AB"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'CGCL GRAMPANCHAYATH'),
        SHD[195]
    ),
    ["71AC"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA'),
        "IOC X ROADS", "CHERLAPALLY STATION"
    ),
    ["71K"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'KACHEGUDA KAMELA'),
        SHD[454]
    ),

    // 72 SERIES
    ["72"].concat(
        "HIGH COURT",
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'KOTHAPET'),
        SHD[626], SHD[597], SHD[554]
    ),
    ["72/277D"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
        getStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
    ),
    ["72H"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR')
    ),
    ["72HK"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR'),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'KUNTLOOR')
    ),
    ["72J"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR'),
        getStops(HCLX_GWRL, 'CHAITANYAPURI', 'BANDLAGUDA (NGL)'),
        SHD[424], SHD[858], SHD[237]
    ),
    ["72V"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 83 SERIES
    ["83J"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["83JA"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["83J/272G"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 85 SERIES
    ["85/8A"].concat(
        getStops(MHRM_MDCL, "PAHADI SHARIF", "SECUNDERABAD")
    ),
    ["85P/8C"].concat(
        getStops(MHRM_MDCL, 'PAHADI SHARIF', 'AFZALGUNJ'),
        getStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["85/253L"].concat(
        getStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM GATE'),
        getStops(OSK_Stops, 'THUMMALOOR ROAD', 'ANOJIGUDA (KNDKR)')
    ),
    ["85V"].concat(
        getStops(MDCL_MHRM, "CHARMINAR", "BARKAS X ROADS"),
        SHD[936], SHD[927], SHD[928]
    ),

    // 86 SERIES
    ["86A"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ')
    ),
    ["86C"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'CITY BUS STATION')
    ),
    ["86J"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ'),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["86K"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'KOTI WOMENS COLLEGE'),
        SHD[506]
    ),


    // 90 SERIES
    ["90/253T"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA'),
        SHD[901], SHD[884],
    ),
    ["90/300"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["90B"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "NAGOLE X ROADS"),
        getStops(HCLX_GWRL, 'OLD NAGOLE', 'BANDLAGUDA DEPOT')
    ),
    ["90BE"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'BADANGPET')
    ),
    ["90BK"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "NAGOLE X ROADS"),
        getStops(HCLX_GWRL, 'OLD NAGOLE', 'KUNTLOOR X ROAD'),
        SHD[1474]
    ),
    ["90L"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90LK"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA STATION")
    ),
    ["90DL"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(KTGD_LGRH, "LB NAGAR", "DILSHUKNAGAR")
    ),
    ["90LV"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90L/3K"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90L/22"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["90L/229"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["90L/229S"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["90L/251"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["90UN"].concat(
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'NAGOLE X ROADS'),
        SHD[672], SHD[1038]
    ),
    ["90U/203U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 92 SERIES
    ["92A"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"), SHD[620]
    ),
    ["92A/5K"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["92A/49M"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["92K"].concat(
        SHD[620],
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["92R"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'NPPTI'),
        getStops(SECB_SKPL, 'DAIRY FARM (CNTLMT)', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["92R/5K"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'NPPTI'),
        getStops(SECB_SKPL, "DAIRY FARM (CNTLMT)", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 94 SERIES
    ["94R"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'BAHUDURPURA'),
        getStops(TailsUP, 'KISHAN BAGH', 'CHINTALMET'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),
    ["94RM"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'BAHUDURPURA'),
        SHD[342], SHD[942],
        getStops(TailsUP, '9 NUMBER', 'CHINTALMET'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),

    // 95 SERIES
    ["95"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR')
    ),
    ["95/3K"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")
    ),
    ["95/3KN"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["95K"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["95M"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        "LAXMIGUDA", "WAMBAY COLONY", "JALPALLY",
    ),

    // 100 SERIES
    ["100/299"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["100V"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["100M"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "KOTHAPET"),
        SHD[626], SHD[597], SHD[554]
    ),

    // 102 SERIES
    ["102"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        SHD[628]
    ),
    ["102/3K"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["102/9K"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["102/185"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'KUKATPALLY'),
    ),
    ["102/218"].concat(
        SHD[628],
        getStops(ADBT_MDCL, 'OWAISI HOSPITAL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["102/253L"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'LEMOOR ROAD'),
        getStops(OSK_Stops, 'SARASWATHIGUDA', 'LEMOOR')
    ),
    ["102B"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/3K"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["102B/203N"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["102B/218"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["102M"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS'),
        getStops(TailsUP, 'SAI NAGAR (BLPR)', 'BALAPUR VILLAGE')
    ),

    // 103 SERIES
    ["103"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS'),
        getStops(TailsUP, 'SAI NAGAR (BLPR)', 'SHIVAJI CHOWK'),
        getStops(TailsUP, 'VIJAY DURGA NAGAR', 'RCI')
    ),

    // 104 SERIES
    ["104A"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'RAJIV GRUHA KALPA')
    ),
    ["104R"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'CHAMPAPET'),
        getStops(ADBT_MDCL, 'RTC COLONY(CHAMPAPET)', 'RN REDDY')
    ),

    // 105 SERIES
    ["105"].concat(
        SHD[978], SHD[336],
        getStops(ADBT_MDCL, 'SAIDABAD', 'KOTI WOMENS COLLEGE'),
        SHD[507],
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),

    // 107 SERIES
    ["107JD"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR')
    ),
    ["107JL"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107JS"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getStops(TailsUP, 'HUDA COLONY (SRRNGR)', 'SAROOR NAGAR')
    ),
    ["107VL"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107VR"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
    ),
    ["107VS"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getStops(TailsUP, 'HUDA COLONY (SRRNGR)', 'SAROOR NAGAR')
    ),

    // 113 SERIES
    ["113B"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'BARKATPURA')
    ),
    ["113F"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113IM"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(GWRL_HCLX, 'CHEY NUMBER', 'VIDYA NAGAR'),
        SHD[1075], SHD[167], SHD[856], SHD[67], SHD[723], SHD[821],
        getStops(SRPT_MNBD, 'BIRLA MANDIR', 'MEHDIPATNAM')

    ),
    ["113IMZ"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(GWRL_HCLX, 'CHEY NUMBER', 'VIDYA NAGAR'),
        SHD[1075], SHD[167], SHD[856], SHD[67], SHD[723], SHD[821],
        getStops(SRPT_MNBD, 'BIRLA MANDIR', 'MEHDIPATNAM')

    ),
    ["113K"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113KL"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KM"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MIYAPUR X ROADS'),
    ),
    ["113M"].concat(
        getStops(GTKS_PTCR, 'MEDIPALLY', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["113S"].concat(
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113W"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["113M/120"].concat(
        SHD[144],
        getStops(TailsDOWN, 'INDIRA NAGAR X ROADS', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'MANCHIREVULA X ROADS'),
        SHD[595]
    ),
    ["113M/281"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["113M/288"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'MOINABAD')
    ),
    ["113FT"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113KLT"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KT"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getStops(TailsUP, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113FZ"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113MZ"].concat(
        getStops(GTKS_PTCR, 'MEDIPALLY', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),

    // 115 SERIES
    ["115"].concat(
        "KOTI MEDICAL COLLEGE",
        getStops(PTCR_GTKS, 'CHADERGHAT X ROADS', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'INDIRA NAGAR X ROADS'),
        SHD[144]
    ),


    // 116 SERIES
    ["116/220K"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI'),
        "GOPALPALLY X ROADS", "TELLAPUR", "OSMAN NAGAR", "KOLLUR"
    ),
    ["116G/65M"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),
    ["116GA/65"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["116N"].concat(
        getStops(KOTI_MCRL, 'KOTI MEDICAL COLLEGE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["116NL"].concat(
        getStops(KOTI_MCRL, 'KOTI MEDICAL COLLEGE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI'),
        "GOPANPALLY X ROADS", "GOPANPALLY", "APARNA APPARTMENTS", "CITIZENS HOSPITAL", "NALLAGANDLA", SHD[558]
    ),
    ["116N/220K"].concat(
        getStops(KOTI_MCRL, 'KOTI MEDICAL COLLEGE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI'),
        "GOPALPALLY X ROADS", "TELLAPUR", "OSMAN NAGAR", "KOLLUR"
    ),

    // 117 SERIES
    ["117"].concat(
        getStops(TailsDOWN, 'UPPAL', 'NACHARAM IDA'),
        getStops(LGPL_CRPL, 'NACHARAM X ROADS', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        SHD[525]
    ),

    // 118 SERIES
    ["118W/300"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 119 SERIES
    ["119M"].concat(
        SHD[620],
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),

    // 120 SERIES
    ["120"].concat(
        SHD[620],
        getStops(SECB_SKPL, 'RETHIBOWLI', 'GANDIPET X ROAD'),
        SHD[306], SHD[711]
    ),
    ["120/113M"].concat(
        SHD[595],
        getStops(SKPL_SECB, 'MANCHIREVULA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'INDIRA NAGAR X ROADS'),
        SHD[144]
    ),
    ["120K/5K"].concat(
        "KOKAPET",
        getStops(SKPL_SECB, "KOKAPET X ROADS", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 123 SERIES
    ["123"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),
    ["123/65M"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getStops(LGPL_CRPL, 'SHAIKPET NALA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),


    // 125 SERIES
    ["125/5K"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 126 SERIES
    ["126/300"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        SHD[552]
    ),
    ["126M"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),

    // 127 SERIES
    ["127AL"].concat(
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR X ROADS')
    ),
    ["127DA"].concat(
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["127K"].concat(
        getStops(MDCL_ADBT, 'KONDAPUR', 'MADHAPUR PS'),
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION')
    ),
    ["127KL"].concat(
        getStops(MDCL_ADBT, 'KONDAPUR', 'MADHAPUR PS'),
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR')
    ),

    // 147 SERIES
    ["147"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC", SHD[1016],
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'PATNY'),
        getStops(CRPL_LGPL, 'PARADISE', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'LV PRASAD'),
        getStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'KONDAPUR')
    ),
    ["147W"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC", SHD[1016],
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'PATNY'),
        getStops(w47_UP, 'PARADISE', 'WAVEROCK')
    ),

    // 156 SERIES
    ["156/205F"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET')
    ),
    ["156/299"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156/505"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["156H"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156L"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156S"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[922], SHD[920], "NARSIMHARAO NAGAR", "SAMA NAGAR X ROADS", SHD[899], SHD[250],
    ),
    ["156V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156V/505"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),

    // 158 SERIES
    ["158"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ESI HOSPITAL')
    ),
    ["158FL"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158HF"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158VF"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 171 SERIES
    ["171"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GAJULA RAMARAM X ROADS"),
        getStops(GTKS_KPHB, 'NLB NAGAR', "GAJULA RAMARAM")
    ),
    ["171K"].concat(
        getStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
        SHD[510]
    ),
    ["171K/198W"].concat(
        getStops(GTKS_KPHB, 'GAJULA RAMARAM', 'KPHB MAIN ROAD'),
        SHD[510],
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),

    // ["171K/219"].concat(
    //     getStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
    //     getStops(GTKS_PTCR, 'KPHB MAIN ROAD', 'PATANCHERUVU')
    // ),
    ["171M/189M"].concat(
        getStops(KPHB_GTKS, 'GAJULA RAMARAM', 'NLB NAGAR'),
        getStops(DNGL_IBP, SHD[298], 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["171R"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", SHD[298]),
        getStops(GTKS_KPHB, 'NLB NAGAR', 'SRI NIWAS NAGAR'),
        SHD[960]
    ),

    // 178 SERIES
    ["178G/8A"].concat(
        SHD[881], SHD[876], SHD[103],
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),

    // 183 SERIES
    ["183B"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR')
    ),
    ["183SS"].concat(
        getStops(GTKS_KPHB, 'SUCHITRA', 'SHAHPUR NAGAR')
    ),
    ["183S/219"].concat(
        SHD[905],
        getStops(DNGL_IBP, 'CHINTAL', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),

    // 185 SERIES
    ["185G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'KUKATPALLY'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["185/102"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),

    // 188 SERIES
    ["188"].concat(
        getStops(SRPT_MNBD, "MEHDIPATNAM", "KALI MANDIR")
    ),
    ["188/5K"].concat(
        getStops(MNBD_SRPT, "KALI MANDIR", "SECUNDERABAD")
    ),
    ["188/251"].concat(
        getStops(SRPT_MNBD, "MEHDIPATNAM", "TK BRIDGE"),
        getStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'DAIRY FARM (CNTLMT)'),
        getStops(SKPL_SECB, 'LAL DHABA', 'SHIVARAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'ARAMGHAR', 'SHAMSHABAD')
    ),
    ["188B/49M"].concat(
        "BAIRAGIGUDA", "GANDHAMGUDA",
        getStops(DRFM_RMNG, 'HYDERSHAKOTE X ROADS', 'SAI RAM NAGAR (SUNCITY)'),
        getStops(MNBD_SRPT, 'TK BRIDGE', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),

    // 189 SERIES
    ["189M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["189M/171M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', SHD[298]),
        getStops(GTKS_KPHB, 'NLB NAGAR', 'GAJULA RAMARAM')
    ),
    ["189M/272G"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 195 SERIES
    ["195/272"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        SHD[442], SHD[510],
        getStops(MLPT_BLNR, 'KUKATPALLY', 'BALANAGAR'),
        getStops(IBP_DNGL, 'IDPL', 'GANDIMAISAMMA')
    ),
    ["195G"].concat(
        SHD[929], SHD[900],
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195GJ"].concat(
        SHD[929], SHD[900],
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195GK"].concat(
        SHD[929], SHD[900],
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195H"].concat(
        getStops(LGPL_CRPL, 'HCU BUS DEPOT', 'GACHIBOWLI STADIUM'),
        getStops(BLNR_MLPT, 'GACHIBOWLI DLF', 'BACHUPALLY X ROADS')
    ),
    ["195J"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        SHD[442], SHD[510],
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["195P"].concat(
        SHD[929], SHD[900],
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["195W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'BACHUPALLY X ROADS')
    ),
    ["195WJ"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE')
    ),
    ["195WP"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR'),
        getStops(ADBT_MDCL, 'KAISAR NAGAR', 'GANDIMAISAMMA')
    ),

    // 198 SERIES
    ["198W/171K"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        SHD[442],
        getStops(KPHB_GTKS, 'KPHB MAIN ROAD', 'GAJULA RAMARAM')
    ),

    // 201 SERIES
    ["201"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'BACHARAM')
    ),
    ["201G"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'GOWRELLY')
    ),
    ["201GD"].concat(
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'GOWRELLY')
    ),
    ["201M"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'TATTI ANNARAM X ROADS'),
        SHD[994], SHD[849], SHD[606]
    ),
    ["201K"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'KUNTLOOR'),
        getStops(OSK_Stops, 'HARIZANAWADA', 'RAJIV GRUHAKALPA (KNTLR)')
    ),
    ["201Q"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'QUTHBULLAPUR - GOWRELLY')
    ),
    ["201/290U"].concat(
        getStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["201T/290U"].concat(
        getStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 202 SERIES
    ["202B"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR DEPOT'),
        SHD[1072],
        getStops(OSK_Stops, 'HAYATHNAGAR VILLAGE', 'BRAHMANAPALLY')
    ),
    ["202K/290U"].concat(
        SHD[1383],
        getStops(OSK_Stops_DOWN, 'TORRUR VILLAGE', 'HAYATHNAGAR VILLAGE'),
        getStops(KTGD_LGRH, 'TORRUR X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 203 SERIES
    ["203A"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203AK"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        SHD[762], SHD[768], SHD[790]
    ),
    ["203AR"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        SHD[762], SHD[768], SHD[790], SHD[885], SHD[835]
    ),
    ["203N"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203A/218"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/102B"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["203N/218"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/3K"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["203N/3N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, 'TARNAKA', 'NACHARAM X ROADS'),
        SHD[662], SHD[1056], SHD[1047]
    ),
    ["203U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),
    ["203U/90U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 204 SERIES
    ["204/290U"].concat(
        SHD[1064], SHD[303],
        getStops(KTGD_LGRH, 'PEDHA AMBERPET X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["204DA"].concat(
        getStops(LGRH_KTGD, 'DILSHUKNAGAR', 'PEDHA AMBERPET X ROADS'),
        getStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'ANAJPUR')
    ),
    ["204U"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PEDHA AMBERPET X ROADS'),
        getStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'SANGHI NAGAR')
    ),
    ["204UA"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PEDHA AMBERPET X ROADS'),
        getStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'ANAJPUR')
    ),

    // 205 SERIES
    ["205"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'PILLAIPALLY')
    ),
    ["205A"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["205A/290U"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["205B/290U"].concat(
        "BALIJAGUDA",
        getStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["205F/156"].concat(
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["205M/290U"].concat(
        getStops(OSK_Stops_DOWN, 'MAJEEDPUR VILLAGE', 'GUNTAPALLY'),
        getStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 211 SERIES
    ["211"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775]
    ),
    ["211/242"].concat(
        SHD[251], SHD[1071], SHD[51],
        getStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["211A"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'ALIABAD')
    ),
    ["211B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET VILLAGE', 'UDDAMARRI')
    ),
    ["211CD"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'DONGALAMYSAMMA X ROADS'),
        SHD[1071], SHD[51],
        getStops(OSK_Stops, 'THIMMAIPALLY', 'DRDO (YADGARPALLY)')
    ),
    ["211D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        SHD[756], SHD[1073]
    ),
    ["211DY"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775], SHD[243], "DEVARAYAMJAL VILLAGE"
    ),
    ["211K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KESAVARAM'),
    ),
    ["211M"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'CHENNAPUR X ROADS'),
        getStops(TailsUP, 'BHAGYA NAGAR COLONY', 'CRPF')
    ),

    // 212 SERIES
    ["212"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'DONGALAMYSAMMA X ROADS'),
        SHD[1071], SHD[140]
    ),
    ["212/702"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'WARGAL TEMPLE')
    ),
    ["212T"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        SHD[756], SHD[1073], SHD[449]
    ),

    // 215 SERIES
    ["215"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 216 SERIES
    ["216"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["216KL"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'LINGAMPALLY')
    ),
    ["216M"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'LINGAMPALLY')
    ),
    ["216MP"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'BEERAMGUDA'),
        getStops(TailsUP, 'BEERAMGUDA VILLAGE', 'PATEL GUDA')
    ),

    // 217 SERIES
    ["217"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["217/254"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'THUKKUGUDA'),
        SHD[835], SHD[885], SHD[790]
    ),
    ["217/300"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(SKPL_SECB, 'LAXMI NAGAR (MP)', 'SAGAR RING ROAD'),
        SHD[552]
    ),
    ["217C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["217D"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),

    // 218 SERIES
    ["218"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
    ),
    ["218C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'PATANCHERUVU')
    ),
    ["218CA"].concat(
        getStops(MHRM_MDCL, 'CHANDRAYANGUTTA X ROADS', 'NAYAPUL'),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
    ),
    ["218D"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218H"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218L"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LINGAMPALLY')
    ),
    ["218/102"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'OWAISI HOSPITAL'),
        SHD[628]
    ),
    ["218/102B"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["218/203A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["218/203N"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["218/224MN"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'NIZAMPET X ROADS'),
        getStops(BLNR_MLPT, 'NIZAMPET ARCH', 'MALLAMPET')
    ),
    ["218/277K"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'MANNEGUDA'),
        SHD[478], SHD[885], SHD[790]
    ),

    // 219 SERIES
    ["219"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/16A"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["219/17"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/17H"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/18C"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["219/24N"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "BOWENPALLY X ROADS"),
        SHD[640], "THOKATTA VILLAGE", SHD[621], SHD[586], SHD[700], SHD[245], SHD[1016], SHD[923], SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    // ["219/171K"].concat(
    //     getStops(PTCR_GTKS, 'PATANCHERUVU', 'KPHB MAIN ROAD'),
    //     getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
    //     SHD[905]
    // ),
    ["219/183S"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'CHINTAL'),
        SHD[905],
    ),
    ["219/224G"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219I/224G"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219/229"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["219/250"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["219/272G"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219I/272G"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219/280"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["219MP"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "BEERAMGUDA"),
        getStops(TailsUP, 'BEERAMGUDA VILLAGE', 'PATEL GUDA')
    ),

    // 220 SERIES
    ["220G"].concat(
        SHD[620],
        getStops(SECB_SKPL, 'RETHIBOWLI', 'DONTANPALLY'),
        "MAHARAJPET", "GOPULAARAM"
    ),
    ["220K/116"].concat(
        "KOLLUR", "OSMAN NAGAR", "TELLAPUR", "GOPALPALLY X ROADS",
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),
    ["220K/116N"].concat(
        "KOLLUR", "OSMAN NAGAR", "TELLAPUR", "GOPALPALLY X ROADS",
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'MEHDIPATNAM'),
        getStops(MCRL_KOTI, 'MEHDIPATNAM', 'KOTI MEDICAL COLLEGE'),
    ),

    // 221 SERIES
    ["221"].concat(
        getStops(GTKS_PTCR, 'MIYAPUR METRO STATION', 'ALLWYN X ROADS'),
        UP_221
    ),
    ["221G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'ALLWYN X ROADS'),
        getStops(UP_221, 'OLD HAFEEZPET', 'GACHIBOWLI X ROADS')
    ),

    // 222 SERIES
    ["222A"].concat(
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'PENSION OFFICE'),
        getStops(KOTI_MCRL, 'CARE HOSPITAL', 'LV PRASAD'),
        getStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'PATANCHERUVU')
    ),
    ["222L"].concat(
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'PENSION OFFICE'),
        getStops(KOTI_MCRL, 'CARE HOSPITAL', 'LV PRASAD'),
        getStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'LINGAMPALLY')
    ),

    // 224 SERIES
    ["224/47D"].concat(
        "MAYURI NAGAR",
        getStops(MDCL_ADBT, 'MIYAPUR DEPOT', 'MIYAPUR X ROADS'),
        getStops(PTCR_GTKS, 'MIYAPUR METRO STATION', 'PANJAGUTTA'),
        SHD[752],
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794], SHD[908]
    ),
    ["224B"].concat(
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'IDA X ROADS'),
        "BOLLARAM VILLAGE ROAD", "BOLLARAM GANDHI STATUE", SHD[150]
    ),
    ["224G"].concat(
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224G/10KM"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'LAND MARK TOWER'),
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["224G/219"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU')
    ),
    ["224G/219I"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU'),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["224MN"].concat(
        getStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET')
    ),
    ["224MN/218"].concat(
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS'),
        getStops(PTCR_GTKS, 'JNTU COLLEGE', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["224X"].concat(
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'IDA X ROADS'),
        "BOLLARAM VILLAGE ROAD", "BOLLARAM GANDHI STATUE", SHD[150]
    ),

    // 226 SERIES
    ["226"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "LINGAMPALLY"),
        "BHEL MIG", "BHEL", "LIG COLONY", "RC PURAM (ZPHS)",
        getStops(GTKS_PTCR, 'RAMACHANDRAPURAM', 'PATANCHERUVU')
    ),


    // 227 SERIES
    ["227"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS')
    ),
    ["227/25S"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 229 SERIES
    ["229"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/1D"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755], SHD[760],
        getStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
    ),
    ["229/1Z"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755], SHD[760],
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["229/5K"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755], SHD[760],
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["229/8C"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DRFM_RMNG, 'PARADISE CENTER', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ')
    ),
    ["229/18C"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "TARBUND"),
        SHD[755],
        getStops(DNGL_IBP, "PATNY", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["229/25S"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["229/49M"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(CRPL_LGPL, 'WESLEY COLLEGE', 'MEHDIPATNAM')
    ),
    ["229/90L"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DNGL_IBP, 'PATNY', 'LB NAGAR X ROADS')
    ),
    ["229/219"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["229/279"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DNGL_IBP, 'PATNY', 'IBRAHIMPATNAM')
    ),
    ["229/290"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DNGL_IBP, 'PATNY', 'KAMINENI HOSPITALS'),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["229/290U"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DNGL_IBP, 'PATNY', 'KAMINENI HOSPITALS'),
        getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["229B"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        SHD[156]
    ),
    ["229P"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getStops(OSK_Stops_DOWN, 'KISTAPUR', 'PUDUR')
    ),
    ["229S/90L"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DNGL_IBP, 'PATNY', 'LB NAGAR X ROADS')
    ),

    // 230 SERIES
    ["230A"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM')
    ),
    ["230AB"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[591],
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM'),
        getStops(OSK_Stops_DOWN, 'PULLAREDDY COLLEGE', 'BONTHAPALLY')
    ),
    ["230AN"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM')
    ),
    ["230P"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
    ),
    ["230P/9K"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220],
        SHD[11],
    ),
    ["230P/9X"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["230P/9XM"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 231 SERIES
    ["231"].concat(
        SHD[613],
        getStops(OSK_Stops_DOWN, 'KISTAPUR', 'MEDICITY')
    ),
    ["231KN"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "JNTU COLLEGE"),
        getStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET'),
        getStops(OSK_Stops, 'NARAYANA IIT', 'KAZIPALLY')
    ),

    // 233 SERIES
    ["233"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'KOMPALLY'),
        getStops(OSK_Stops_DOWN, 'APARNA KOMPALLY', 'NUTHANKAL')
    ),

    // 241 SERIES
    ["241T"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'CHERIYAL X ROADS'),
        getStops(OSK_Stops_DOWN, 'CHIRYALA VILLAGE', 'DHARMAVARAM')
    ),
    ["241C"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'CHERIYAL X ROADS'),
        getStops(OSK_Stops_DOWN, 'CHIRYALA VILLAGE', 'CHIRYALA'),
        "LAKSHMI NARASIMHA SWAMY TEMPLE"
    ),

    // 242 SERIES
    ["242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/3K"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["242/17H"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/211"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["242/272G"].concat(
        getStops(KSR_SHMB, 'KEESARAGUTTA', 'TARNAKA'),
        getStops(CRPL_LGPL, 'RAILWAY DEGREE COLLEGE', 'CHILKALGUDA X ROADS'),
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["242A"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242B"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        SHD[147]
    ),
    ["242BJ"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        SHD[147], "JNNURM COLONY"
    ),
    ["242G"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS"
    ),
    ["242GA"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS", "KEESARAGUTTA KAMAN", "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242RG"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'BANDLAGUDA (NGRM)'),
        SHD[128], SHD[744], SHD[842]
    ),
    ["242RG/15H"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA (NGRM)", "LALAPET"),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 245 SERIES
    ["245A"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'NFC NAGAR X ROADS'),
        getStops(OSK_Stops, 'PRICETON COLLEGE', 'ANKUSHAPUR GATE'),
        "AUSHAPUR"
    ),

    // 250 SERIES
    ["250"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/10K"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        SHD[536],
        SHD[36], SHD[892],
        getStops(GTKS_PTCR, 'MYTHRIVANAM', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE'),
    ),
    ["250C"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'CHERLAPALLY'),
    ),
    ["250D"].concat(SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),

    ),
    ["250/49"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["250/49M"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["250/49MT"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM'),
        "MEHDIPATNAM DEPOT", "GUDIMALKAPUR", "SHIV BAGH", "SHARADA NAGAR (MP)", "TALLAGADDA"
    ),
    ["250C/20"].concat(
        getStops(CRPL_LGPL, "CHERLAPALLY", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["250C/49M"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["250D/49M"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["250E"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(LGPL_CRPL, 'HCL PHASE 1', 'CHERLAPALLY'),
        "IOC X ROADS",
        getStops(TailsDOWN, 'CHENGICHERLA', 'CHENGICHERLA DEPOT')
    ),
    // ["250S"].concat(
    //     getStops(LGPL_CRPL, 'SECUNDERABAD', 'NOMA')
    // ),
    ["250/219"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["250/281"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // `251 SE`RIES
    ["251M"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'MADANAPALLY'),
        SHD[439], SHD[651]
    ),
    ["251/1Z"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["251/2Z"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["251/3K"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["251/5K"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["251/7Z"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["251/90L"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["251/188"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'ARAMGHAR'),
        getStops(SECB_SKPL, 'SHIVARAMPALLY X ROADS', 'LAL DHABA'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'SAI RAM NAGAR (SUNCITY)'),
        getStops(MNBD_SRPT, 'TK BRIDGE', 'MEHDIPATNAM')
    ),
    ["251/300"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),

    // 252 SERIES
    ["252/3K"].concat(
        SHD[843], getStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["252/6IW"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        getStops(TailsDOWN, 'RAMAKRISHNA MUTT', 'NTR STADIUM'),
        SHD[70], SHD[856], SHD[167], SHD[1075],
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'CHERLAPALLY')
    ),
    ["252S"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        'KISHANGUDA',
        getStops(OSK_Stops, 'RASHEEDGUDA', 'SHANKARAPURAM')
    ),
    ["252S/8A"].concat(
        getStops(OSK_Stops_DOWN, 'SHANKARAPURAM', 'RASHEEDGUDA'),
        'KISHANGUDA',
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, 'OSMANGUNJ', 'SECUNDERABAD')
    ),

    // 253 SERIES
    ["253"].concat(
        getStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM')
    ),
    ["253L/85"].concat(
        getStops(OSK_Stops_DOWN, 'ANOJIGUDA (KNDKR)', 'THUMMALOOR ROAD'),
        getStops(MHRM_MDCL, 'MAHESHWARAM GATE', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["253L/102"].concat(
        getStops(OSK_Stops_DOWN, 'LEMOOR', 'SARASWATHIGUDA'),
        getStops(MHRM_MDCL, 'LEMOOR ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["253T/90"].concat(
        SHD[884], SHD[901],
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["253W"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'MAHESHWARAM')
    ),

    // 254 SERIES
    ["254/217"].concat(
        SHD[790], SHD[885], SHD[835],
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'NAYAPUL'),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),

    // 272 SERIES
    ["272"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[158], SHD[157]
    ),
    ["272/195"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'BALANAGAR', 'KUKATPALLY'),
        SHD[510],
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["272G/9K"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["272G/9X"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["272G/18"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["272G/29B"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["272G/83J"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["272G/189M"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["272G/219"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["272G/219I"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU"),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["272G/242"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD"),
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'METTUGUDA'),
        SHD[993],
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["272I/29B"].concat(
        SHD[407],
        "BAHUDURPALLY",
        getStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
    ),
    ["272J/29B"].concat(
        "JNNURM COLONY (BACHUPALLY)",
        getStops(ADBT_MDCL, 'VNR VJIET', 'BOWRAMPET X ROADS'),
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD"),
    ),
    ["272B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[158], SHD[157]
    ),

    // 273 SERIES
    ["273/24S"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 277 SERIES
    ["277"].concat(
        SHD[624],
        getStops(SECB_SKPL, 'CHADERGHAT', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM')
    ),
    ["277D"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "LB NAGAR X ROADS"),
        getStops(DNGL_IBP, "SAGAR RING ROAD", "IBRAHIMPATNAM")
    ),
    ["277D/72"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
        getStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["277K/218"].concat(
        SHD[790], SHD[885], SHD[478],
        getStops(IBP_DNGL, 'MANNEGUDA', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MIYAPUR X ROADS')
    ),
    ["277L"].concat(
        getStops(DNGL_IBP, "LB NAGAR X ROADS", "IBRAHIMPATNAM")
    ),
    ["277N"].concat(
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'GURRAMGUDA X ROADS'),
        "GURRAMGUDA VILLAGE", "KAMMAGUDA", SHD[665]
    ),
    ["277S"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM')
    ),

    // 279 SERIES
    ["279"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "IBRAHIMPATNAM")
    ),
    ["279/229"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["279U"].concat(getStops(IBP_DNGL, "IBRAHIMPATNAM", "UPPAL RING ROAD")),

    // 280 SERIES
    ["280"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280B"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        getStops(OSK_Stops, 'ANNAPURNA COLONY', 'HOLY MERRY COLLEGE'),
        SHD[147]
    ),
    ["280I"].concat(
        SHD[1038],
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'SINGAPUR TOWNSHIP'),
        "INFOSYS (PCHRM)"
    ),
    ["280J"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280N"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'NFC NAGAR X ROADS'),
        "NFC NAGAR"
    ),
    ["280X"].concat(
        SHD[1038],
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'GHATKESAR')
    ),
    ["280/20"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["280/30"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["280/219"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["280/488"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        getStops(OSK_Stops, 'NFC NAGAR ROAD', 'KONDAMADUGU'),
        "BIBI NAGAR"
    ),
    ["280/492"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'EDULABAD'),
        getStops(OSK_Stops, 'POTHARAJU DUDAM', 'MAKTHA ANANTHARAM'),
        getStops(OSK_Stops_DOWN, 'GUVVALETI X ROADS', 'PILLAIPALLY')
    ),

    // 281 SERIES
    ["281"].concat(
        getStops(SHMB_KSR, 'ECIL X ROADS', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/3K"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["281/6L"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["281/16C"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["281/24B"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["281/24L"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["281/113M"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["281/250"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["281R/16A"].concat(
        getStops(GTKS_KPHB, 'RTC COLONY (RMPLY)', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 282 SERIES
    ["282K"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 283 SERIES
    ["283C"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM CIRCLE",
        "SURARAM COLONY"
    ),
    ["283D/9X"].concat(
        "SURARAM COLONY", "SURARAM CIRCLE",
        getStops(DNGL_IBP, 'SURARAM', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["283K"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["283S/18"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["283VS"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM VILLAGE"
    ),
    ["283RG"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM CIRCLE",
        "SURARAM COLONY",
        "RAJIV GRUHAKALPA (SURARAM)"
    ),
    ["283T"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'JODIMETLA'),
        "ANURAG UNIVERSITY", "VENKATAPUR(TNGM)", "TENUGUDEM"
    ),

    // 284P SERIES
    ["284P"].concat(
        SHD[1038],
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'PEERJADIGUDA KAMAN'),
        "INDIAN INTERNATIONAL SCHOOL", "PEERJADIGUDA", "RTC COLONY (PARVATHAPUR)", "PARVATHPURAM", "GANDHI NAGAR (PARVATHPUR)", "LAXMI NAGAR (PARVATHPUR)", "KACHAVANI SINGARAM", "MUTHYALAGUDA", "PRATHAP SINGARAM"
    ),

    // 288 SERIES
    ["288"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD')
    ),
    ["288/113M"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["288A"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'JBIT'),
        getStops(OSK_Stops, 'MURTHUZAGUDA', 'AMDAPUR')
    ),
    ["288C"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'APPOJIGUDA')
    ),
    ["288D"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["288E"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops_DOWN, 'YENKEPALLY', 'BAKARAM')
    ),
    ["288D/19K"].concat(
        SHD[209], SHD[1026],
        getStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY')
    ),
    ["288K"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MOINABAD'),
    ),
    ["288NB"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'POLICE ACADEMY'),
        getStops(OSK_Stops, 'AZIZ NAGAR', 'BAKARAM')
    ),
    ["288R"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'APPOJIGUDA X ROADS'),
        "CHANDANAGAR X ROADS", "CHANDA NAGAR VILLAGE", "CHANDANAGAR X ROADS", "REDDYPALLY", "CHINNA MANGALAARAM"
    ),
    ["288Y"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        "PEDHA MANGALARAM", "CHANDANAGAR X ROADS", "REDDYPALLY", "QUTHBUDDINGUDA", "YELKAGUDA"
    ),

    // 290 SERIES
    ["290"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290/229"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290KJ"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'KUNTLOOR')
    ),
    ["290KP"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY')
    ),
    ["290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR")
    ),
    ["290UA"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["290UF"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'RAMOJI FILM CITY')
    ),
    ["290UJ"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ORR GANDICHERUVU'),
        "JNNURM COLONY (RFC)"
    ),
    ["290U/201"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'BACHARAM')
    ),
    ["290U/201T"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'TARAMATIPET')
    ),
    ["290U/202K"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR DEPOT"),
        SHD[1072],
        getStops(OSK_Stops, 'HAYATHNAGAR VILLAGE', 'TORRUR VILLAGE'),
        SHD[1383]
    ),
    ["290U/204"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PEDHA AMBERPET X ROADS"),
        SHD[303], "GANDI CHERUVU"
    ),
    ["290U/205A"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["290U/205B"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY'),
        "BALIJAGUDA"
    ),
    ["290U/205M"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getStops(OSK_Stops, 'GUNTAPALLY', 'MAJEEDPUR VILLAGE')

    ),
    ["290U/229"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290U/463"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["290U/555"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),

    // 299 SERIES
    ["299"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE")
    ),
    ["299/1D"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["299/100"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["299/156"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["299D"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")),

    // 300 SERIES
    ["300"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300/90"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["300/118W"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["300/126"].concat(
        SHD[552],
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),
    ["300/217"].concat(
        SHD[552],
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'LAXMI NAGAR (MP)'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["300/251"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["300/539"].concat(
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "ARAMGHAR"),
        getStops(KSR_SHMB, "BUDVEL STATION", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["300A"].concat(
        SHD[552],
        getStops(SECB_SKPL, "SAGAR RING ROAD", "ARAMGHAR")
    ),
    ["300L"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        SHD[552],
    ),

    // 400 SERIES
    ["412"].concat(
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM'),
        getStops(OSK_Stops, 'KHANAPUR X ROADS', 'MALL')
    ),
    ["444"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'APPOJIGUDA X ROADS'),
        "CHANDANAGAR X ROADS", "REDDYPALLY", "VEERANNAPET", "MEDIPALLI VILLAGE"
    ),
    ["445"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'KETHIREDDYPALLY ROAD'),
        getStops(OSK_Stops, 'SAJJANPALLY X ROADS', 'KETHIREDDYPALLY')
    ),
    ["447R"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'MUDIMYAL X ROADS'),
        getStops(OSK_Stops, 'MUDIMYAL', 'RAVULAPALLY')
    ),
    ["458"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        "KISHANGUDA",
        getStops(OSK_Stops, 'GOLLAPALLY', 'MANSANPALLY X ROADS'),
        SHD[605], SHD[576], SHD[575]
    ),
    ["463"].concat(
        getStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["463/290U"].concat(
        "DESHMUKHI",
        getStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["464"].concat(
        getStops(LGRH_KTGD, "DILSHUKNAGAR", "ABDULLAHPURMET"),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getStops(OSK_Stops, 'GUNTAPALLY', 'DANDUMAILARAM')
    ),
    ["488/280"].concat(
        "BIBI NAGAR",
        getStops(OSK_Stops_DOWN, 'KONDAMADUGU', 'NFC NAGAR ROAD'),
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["490S"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'BIBI NAGAR')
    ),
    ["492/280"].concat(
        getStops(OSK_Stops, 'PILLAIPALLY', 'GUVVALETI X ROADS'),
        getStops(OSK_Stops_DOWN, 'MAKTHA ANANTHARAM', 'POTHARAJU DUDAM'),
        getStops(OSK_Stops_DOWN, 'EDULABAD', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["493"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        getStops(OSK_Stops, 'NFC NAGAR ROAD', 'KONDAMADUGU'),
        "BIBI NAGAR",
        getStops(OSK_Stops, 'BIBI NAGAR CHERUVU', 'JAINAPALLY')
    ),
    ["495"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[591],
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM'),
        getStops(OSK_Stops_DOWN, 'PULLAREDDY COLLEGE', 'GUMMADIDALA'),
        getStops(OSK_Stops, 'ANANTHARAM X ROADS', 'KANUKUNTA'),
    ),
    ["497"].concat(
        getStops(SHMB_KSR, 'ECIL X ROADS', 'KEESARAGUTTA KAMAN'),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'RANGAPURAM X ROADS'),
        getStops(OSK_Stops, 'RANGAPURAM', 'HAZIPUR')

    ),
    ["498"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        "KESAVAPUR"
    ),
    ["498K"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[591],
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM'),
        getStops(OSK_Stops_DOWN, 'PULLAREDDY COLLEGE', 'KOTHAPALLY')
    ),
    ["498U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops_DOWN, 'KESAVAPUR', 'USHARPALLY'),
        "UDDAMARRI"
    ),
    ["498VJ"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[591],
        "DUNDIGAL X ROADS",
        "GAGILLAPUR",
        getStops(OSK_Stops_DOWN, 'PATHARAM', 'JINNARAM')
    ),

    // 500 SERIES
    ["505"].concat(
        SHD[620],
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/19S"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["505/156"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["505/156V"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["523K"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY')
    ),
    ["524"].concat(
        getStops(LGRH_KTGD, 'DILSHUKNAGAR', 'KOTHAGUDEM'),
        getStops(OSK_Stops, 'NETAJI INSTITUTE', 'POCHAMPALLY')
    ),
    ["530"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        "KISHANGUDA",
        getStops(OSK_Stops, 'GOLLAPALLY', 'KOTTAGUDA HIGHWAY'),
        "KANDUKUR"
    ),
    ["532"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'JP DARGHA')
    ),
    ["532/8A"].concat(
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["537"].concat(
        getStops(KSR_SHMB, "AFZALGUNJ", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'PENJERLA', 'KODICHERLA')
    ),
    ["539"].concat(
        getStops(KSR_SHMB, "AFZALGUNJ", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["539/1Z"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["539/8A"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["539/300"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "BUDVEL STATION"),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["546"].concat(
        getStops(SHMB_KSR, "ECIL X ROADS", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'M TURKAPALLY'),
        getStops(OSK_Stops, 'MULKALAPALLY', 'BHUVANAGIRI'),
    ),
    ["555"].concat(
        getStops(LGRH_KTGD, 'DILSHUKNAGAR', 'HAYATHNAGAR'),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["555/290U"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["567"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        SHD[756], SHD[1073],
        getStops(OSK_Stops, 'POTHARAM', 'MARKOOK')
    ),
    ["568"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'DAMARAKUNTA')
    ),
    ["571T"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "KEESARAGUTTA KAMAN"),
        "ANKIREDDYPALLY X ROADS", "PEDHA PARVATHAPURAM", "BOMMALARAMARAM", "KAZIPET X ROADS", "CHIKATIMAMIDI", "SOLIPET", "PYARARAM", "BOINPALLY X ROADS", "THIMMAPUR THANDA",
    ),
    ["578"].concat(
        getStops(SHMB_KSR, "ECIL X ROADS", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'M TURKAPALLY'),
    ),
    ["580"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'YADAGIRIGUTTA'),
    ),
    ["589"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getStops(OSK_Stops_DOWN, 'ATHVELLY', 'RAMAYAMPET')
    ),
    ["592"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'KANDAWADA X ROADS'),
        "PALGUTTA", "KANDAWADA"
    ),
    ["593"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'CHEVELLA')
    ),

    // 700 SERIES
    ["702/212"].concat(
        getStops(OSK_Stops, 'WARGAL TEMPLE', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    )
]

let DetailedRoutesDOWN = [
    ["1"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1B"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, "RTC X ROADS", "SECUNDERABAD")
    ),
    ["1C"].concat(
        "CITY BUS STATION",
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D"].concat(
        getStops(KTGD_LGRH, "DILSHUKNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755], SHD[760],
        getStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
    ),
    ["1D/299"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1H"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1HD"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SRRNGR)'),
        getStops(KTGD_LGRH, "KOTHAPET X ROADS", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1J"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1JL"].concat(
        getStops(LGRH_KTGD, 'LANGER HOUSE', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1JK"].concat(
        getStops(MNBD_SRPT, 'KALI MANDIR', 'TK BRIDGE'),
        getStops(LGRH_KTGD, 'LANGER HOUSE', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1K"].concat(
        SHD[454], SHD[453], SHD[181],
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1L"].concat(
        getStops(KTGD_LGRH, "LB NAGAR X ROADS", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1MD"].concat(
        SHD[597], SHD[626],
        getStops(KTGD_LGRH, "KOTHAPET", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1P"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        SHD[199], SHD[743], SHD[207], SHD[898]
    ),
    ["1P/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        SHD[898], SHD[207], SHD[743], SHD[199],
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VM"].concat(
        SHD[250], SHD[899], SHD[910], SHD[918],
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VS"].concat(
        SHD[1201], SHD[313],
        getStops(TailsDOWN, 'RYTHU BAZAR', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1W"].concat(
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1X"].concat(
        SHD[455], SHD[457],
        getStops(SKPL_SECB, "NARAYANAGUDA", "SECUNDERABAD")
    ),
    ["1Z"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755], SHD[760],
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/251"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),

    // 2 SERIES
    ["2"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2C"].concat(
        SHD[113],
        getStops(MHRM_MDCL, "CRPF GATE (BRKS)", "NAYAPUL"),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2J"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2K"].concat(
        SHD[454], SHD[453], SHD[181], SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2U"].concat(
        getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "NAYAPUL"),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2Z"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SHMB_KSR, 'ARAMGHAR', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2Z/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 3 SERIES

    ["3"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "SP NAGAR"),
        SHD[526],
        getStops(KSR_SHMB, "ZTS X ROADS", "AFZALGUNJ")
    ),
    ["3C"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3D"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "AFZALGUNJ")
    ),
    ["3DN"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3H"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3HN"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3K"].concat(getStops(KSR_SHMB, "KUSHAIGUDA", "AFZALGUNJ")),
    ["3K/6M"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'ECIL X ROADS')
    ),
    ["3K/90L"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'HABSIGUDA'),
        getStops(SHMB_KSR, "TARNAKA", "ECIL X ROADS")
    ),
    ["3K/95"].concat(getStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")),
    ["3K/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["3K/251"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["3K/252"].concat(
        SHD[843],
        getStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["3K/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["3KN"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3KN/6M"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'NOMA'),
        getStops(SHMB_KSR, 'HB COLONY', 'ECIL X ROADS')
    ),
    ["3KN/95"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["3KJ"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS")
    ),
    ["3L"].concat(
        SHD[780],
        getStops(KSR_SHMB, "LALAPET (RAM TH.)", "AFZALGUNJ")
    ),
    ["3M"].concat(
        SHD[66], SHD[562], SHD[573], SHD[572], SHD[736], SHD[633],
        getStops(KSR_SHMB, "ZTS X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3N"].concat(
        getStops(TailsDOWN, "HEMA NAGAR", "NACHARAM IDA"),
        getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "FIVER HOSPITAL"),
        SHD[1099],
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["3N/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        SHD[662], SHD[1056], SHD[1047]
    ),
    ["3T"].concat(
        SHD[993],
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'AFZALGUNJ'),
    ),
    ["3Y"].concat(
        SHD[1161], SHD[1212], SHD[1153], SHD[1217], SHD[302], SHD[961],
        getStops(GWRL_HCLX, 'RADHIKA THEATER', 'NORTH KAMALA NAGAR'),
        getStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ")
    ),

    // 5 SERIES
    ["5/5R"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'MEHDIPATNAM'),
    ),
    ["5G"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5KM"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        getStops(LGPL_CRPL, 'SHAIKPET DARGAH', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16AD"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16CD"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16D"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),
    ["5K/92A"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/92R"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'NPPTI'),
        getStops(SECB_SKPL, "DAIRY FARM (CNTLMT)", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/120K"].concat(
        SHD[490],
        getStops(SKPL_SECB, "KOKAPET X ROADS", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/125"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/188"].concat(
        getStops(MNBD_SRPT, "KALI MANDIR", "SECUNDERABAD")
    ),
    ["5K/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755], SHD[760],
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["5K/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5M"].concat(
        getStops(MCRL_KOTI, 'MEHDIPATNAM', 'MALLEPALLY'),
        SHD[1063],
        getStops(MNBD_SRPT, "MAHAVIR HOSPITAL", "SECUNDERABAD")
    ),
    ["5R"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),
    ["5R/5"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "CLOCK TOWER"),
        getStops(MNBD_SRPT, "SECUNDERABAD", "RISALA BAZAR")
    ),
    ["5W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 6 SERIES
    ["6IW/252"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        getStops(TailsDOWN, 'RAMAKRISHNA MUTT', 'NTR STADIUM'),
        SHD[70], SHD[856], SHD[167], SHD[1075],
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'CHERLAPALLY')
    ),
    ["6L/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["6M/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["6M/3KN"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'HB COLONY'),
        getStops(CRPL_LGPL, 'NOMA', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["6N/47W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'NOMA'),
        getStops(SHMB_KSR, 'HB COLONY', 'ECIL X ROADS')
    ),
    ["6R"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),
    ["6RK"].concat(
        getStops(MNBD_SRPT, 'KALI MANDIR', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),
    ["6X"].concat(
        getStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        SHD[1000],
        getStops(TailsDOWN, 'RAMAKRISHNA MUTT', 'NTR STADIUM'),
        SHD[70], SHD[856], SHD[167], SHD[1075],
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        X6_DN
    ),

    // 7 SERIES
    ["7Z"].concat(
        getStops(SHMB_KSR, 'ARAMGHAR', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["7Z/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),

    // 8 SERIES
    ["8/37"].concat(
        SHD[525],
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[938], SHD[118], SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754],
        getStops(SRPT_MNBD, 'CLOCK TOWER', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'GANDHI BHAVAN')
    ),
    ["8A"].concat(
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8AK"].concat(
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8UA"].concat(
        getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "SECUNDERABAD")
    ),
    ["8A/85"].concat(
        getStops(MHRM_MDCL, "PAHADI SHARIF", "SECUNDERABAD")
    ),
    ["8A/178G"].concat(
        "GHOUSE NAGAR", "ISMAIL NAGAR", SHD[103],
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8A/252S"].concat(
        getStops(OSK_Stops_DOWN, 'SHANKARAPURAM', 'RASHEEDGUDA'),
        'KISHANGUDA',
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, 'OSMANGUNJ', 'SECUNDERABAD')
    ),
    ["8A/532"].concat(
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["8A/539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["8C"].concat(
        getStops(MHRM_MDCL, 'CHANDRAYANGUTTA X ROADS', 'AFZALGUNJ'),
        getStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["8C/85P"].concat(
        getStops(MHRM_MDCL, 'PAHADI SHARIF', 'AFZALGUNJ'),
        getStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["8C/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DRFM_RMNG, 'PARADISE CENTER', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ')
    ),
    ["8R"].concat(
        SHD[220],
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'PATNY CENTER'),
        getStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),

    // 9 SERIES
    ["9A"].concat(
        SHD[1147], SHD[1214], SHD[1054],
        getStops(PTCR_GTKS, 'SR NAGAR', 'CITY BUS STATION'),
    ),
    ["9F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'CITY BUS STATION'),
    ),
    ["9K"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9K/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9K/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220],
        SHD[11],
    ),
    ["9K/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9X"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/41C"].concat(
        SHD[1150],
        getStops(BLNR_MLPT, 'RANGA REDDY KAMAN', 'ERRAGODALU'),
        getStops(DNGL_IBP, 'IDPL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/283D"].concat(
        SHD[1209], SHD[1208],
        getStops(DNGL_IBP, 'SURARAM', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9XM"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["9XM/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["9YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getStops(PTCR_GTKS, 'AMEERPET', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 10 SERIES
    ["10"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10FV"].concat(
        SHD[1213], SHD[522], SHD[489], SHD[229], SHD[1192], SHD[1148],
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HA"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HL"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HP"].concat(
        SHD[1196],
        getStops(MDCL_ADBT, 'HAFEEZPET', 'KONDAPUR'),
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HW"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10J"].concat(
        getStops(PTCR_GTKS, "JNTU COLLEGE", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10JP"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE')
    ),
    ["10K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KG"].concat(
        "GOKUL PLOTS", SHD[409], SHD[344], SHD[442],
        getStops(PTCR_GTKS, "JNTU COLLEGE", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KL"].concat(
        getStops(PTCR_GTKS, "LINGAMPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KM"].concat(
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10Y"].concat(
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10YF/16S"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10H/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10KJ/18"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10K/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        SHD[536],
        SHD[36], SHD[892],
        getStops(GTKS_PTCR, 'MYTHRIVANAM', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE'),
    ),
    ["10KM/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'LAND MARK TOWER'),
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    // 11 SERIES
    ["11W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "MYTHRIVANAM")
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["14PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR",
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 15 SERIES
    ["15H"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15D"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15D/20"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["15H/20"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["15H/242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA (NGRM)", "LALAPET"),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 16 SERIES
    ["16/20"].concat(
        getStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16AK"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "VAYUPURI"),
        getStops(TailsUP, 'VINOBA NAGAR', 'KAKATHIYA NAGAR'),
        getStops(HCLX_GWRL, 'NEREDMET OLD PS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CR"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16ES"].concat(
        getStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'PATNY CENTER'),
        SHD[760], SHD[448], SHD[984],
        getStops(GWRL_HCLX, 'AOC CENTER', 'UTTAM NAGAR'),
        getStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16H"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16NY"].concat(
        getStops(GTKS_KPHB, 'YAPRAL', 'AMMUGUDA BAZAR'),
        SHD[375], SHD[712], SHD[241],
        getStops(HCLX_GWRL, 'NEREDMET X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16P"].concat(
        SHD[780], SHD[257],
        getStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780], SHD[257],
        getStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16A/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/20"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/47L"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/47W"].concat(
        w47_DN,
        getStops(LGPL_CRPL, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/281R"].concat(
        getStops(GTKS_KPHB, 'RTC COLONY (RMPLY)', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16AD/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["16C/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/38T"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", SHD[84],
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        getStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/47L"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["16CD/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["16CR/38T"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16D/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["16D/24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["16H/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], SHD[593], SHD[633],
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["16R/20"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RK NAGAR"),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(GWRL_HCLX, "AS RAO NAGAR", "ECIL X ROADS")
    ),
    ["16S/10YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),

    // 17 SERIES
    ["17D"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17DH"].concat(
        getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17DS"].concat(
        getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17DV"].concat(
        SHD[1065],
        getStops(KSR_SHMB, "ICOM TELE LIMITED", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17HN"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'HB COLONY'),
        getStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
        SHD[878],
        SHD[898]
    ),
    ["17H/29B"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/47W"].concat(
        w47_DN,
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17CS"].concat(
        getStops(TailsDOWN, 'CHERLAPALLY', 'CHERLAPALLY JAIL'),
        getStops(KSR_SHMB, "CHAKRIPURAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD"),
    ),
    ["17S"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17V"].concat(
        SHD[1065],
        getStops(KSR_SHMB, "ICOM TELE LIMITED", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 18 SERIES
    ["18"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18B"].concat(
        SHD[1164],
        getStops(TailsDOWN, 'MALLIKARJUNA TEMPLE', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18J"].concat(
        SHD[448], SHD[754], SHD[898],
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    // ["18R"].concat(
    //     // SHD[448], SHD[754], SHD[898],
    //     // getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'NGRI'),
    // ),
    ["18V"].concat(
        SHD[1140], SHD[465], SHD[441],
        getStops(PTCR_GTKS, 'RAMANTHAPUR', 'RAMANTHAPUR CHURCH'),
        SHD[198], SHD[162], SHD[163],
        getStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD')
    ),
    ["18VJ"].concat(
        SHD[448], SHD[754], SHD[898],
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'NGRI'),
        SHD[163], SHD[162], SHD[198],
        getStops(GTKS_PTCR, 'RAMANTHAPUR CHURCH', 'RAMANTHAPUR'),
        SHD[441], SHD[465], SHD[1140]
    ),
    ["18VS"].concat(
        getStops(PTCR_GTKS, 'RAMANTHAPUR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'SURVEY OF INDIA', 'SECUNDERABAD'),
    ),
    ["18/10KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18/47U"].concat(
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MCRL_KOTI, 'JUBLIE HILLS CHECK POST', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, "PANJAGUTTA", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'INDIRA NAGAR X ROADS'),
        SHD[144]
    ),
    ["18/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["18/283S"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PLAZA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18C/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18C/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),

    // 19 SERIES
    ["19F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19K/288D"].concat(
        SHD[209], SHD[1026],
        getStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY')
    ),
    ["19KG"].concat(
        "GOKUL PLOTS", SHD[409], SHD[344], SHD[442],
        getStops(PTCR_GTKS, 'JNTU COLLEGE', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19KM"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19M"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19MP"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getStops(PTCR_GTKS, 'AMEERPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S/505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),

    // 20 SERIES
    ["20P"].concat(
        getStops(TailsDOWN, 'NAMPALLY', 'NTR STADIUM'),
        getStops(RMNG_DRFM, 'ASHOK NAGAR X ROADS', 'KALPANA'),
        getStops(TailsDOWN, 'BHOLAKPUR', 'PADMARAO NAGAR'),
        SHD[207], SHD[898]
    ),
    ["20/15D"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'MEHDIPATNAM')
    ),
    ["20/15H"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["20/16"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(GTKS_PTCR, 'LAKDI KA PUL', 'IRRUM MANZIL')
    ),
    ["20/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ')
    ),
    ["20/16R"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "AS RAO NAGAR"),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getStops(HCLX_GWRL, "RK NAGAR", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["20/250C"].concat(
        getStops(CRPL_LGPL, "CHERLAPALLY", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["20/280"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),

    // 21 SERIES
    ["21W"].concat(
        SHD[1081], SHD[414], SHD[1057], SHD[177], SHD[178], SHD[186],
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 22 SERIES
    ["22"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'SECUNDERABAD')
    ),
    ["22/49E"].concat(
        getStops(GTKS_PTCR, 'IRRUM MANZIL', 'NIMS HOSPITAL'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'PARADISE'),
        getStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),
    ["22/90L"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["22D"].concat(
        SHD[612], SHD[14], SHD[10], SHD[9],
        getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),
    ["22K"].concat(
        SHD[169], SHD[134], SHD[9],
        getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),

    // 23 SERIES
    ["23B"].concat(
        SHD[132], SHD[974],
        getStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23BK"].concat(
        SHD[516], SHD[132], SHD[974],
        getStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23BS"].concat(
        SHD[976], SHD[561], SHD[516], SHD[132], SHD[974],
        getStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23GF"].concat(
        getStops(MDCL_MHRM, 'GREEN FIELDS COLONY', 'TEACHERS COLONY'),
        getStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),
    ["23GS"].concat(
        SHD[976], SHD[561],
        getStops(MDCL_MHRM, 'KISTAMMA ENCLAVE', 'TEACHERS COLONY'),
        getStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),
    ["23K"].concat(
        getStops(MDCL_MHRM, 'KISTAMMA ENCLAVE', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23T"].concat(
        SHD[998], SHD[745], SHD[429],
        getStops(MDCL_MHRM, 'KANJIGUDA', 'TEACHERS COLONY'),
        getStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),

    // 24 SERIES
    ["24"].concat(
        getStops(GTKS_KPHB, 'YAPRAL', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B"].concat(
        getStops(GTKS_KPHB, 'BALAJI NAGAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BA"].concat(
        getStops(GTKS_KPHB, 'AMBEDKAR NAGAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BJ"].concat(
        SHD[1161],
        getStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24E"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SAINIKPURI X ROADS'),
        SHD[376], SHD[996], SHD[712], "DEFENCE COLLEGE",
        getStops(GTKS_KPHB, 'AMMUGUDA BAZAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'PATNY'),
        SHD[878], SHD[898]
    ),
    ["24S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24SS"].concat(
        getStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24B/16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24J"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], SHD[923], SHD[1016],
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["24L/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], SHD[493],
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["24N/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "BOWENPALLY X ROADS"),
        SHD[640], "THOKATTA VILLAGE", SHD[621], SHD[586], SHD[700], SHD[245], SHD[1016], SHD[923], SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24S/273"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 25 SERIES
    ["25A"].concat(
        getStops(TailsDOWN, 'SURYA NAGAR', 'SURYA NAGAR X ROADS'),
        SHD[30],
        SHD[1096],
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25AJ"].concat(
        getStops(TailsUP, 'JONNABANDA', 'SURYA NAGAR X ROADS'),
        SHD[30],
        SHD[1096],
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25AJ/M"].concat(
        getStops(TailsUP, 'GOPAL NAGAR', 'SURYA NAGAR X ROADS'),
        SHD[30],
        SHD[1096],
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25M"].concat(
        getStops(TailsDOWN, 'GOPAL NAGAR', 'SELECT TALKIES'),
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25MS"].concat(
        getStops(TailsDOWN, 'SHARAN NAGAR', 'SANJEEVA GARDENS'),
        getStops(TailsDOWN, 'GOPAL NAGAR X ROADS', 'SELECT TALKIES'),
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25P"].concat(
        SHD[968], SHD[991], SHD[1096],
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/1"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/1P"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        SHD[199], SHD[743], SHD[207], SHD[898],
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/2"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getStops(MNBD_SRPT, "PATNY", "LOTHKUNTA"),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/227"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 26 SERIES
    ["26M"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        SHD[1222], SHD[760],
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    // ["26M/49M"].concat(
    //     getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
    //     SHD[755],
    //     getStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    // ),
    ["26N"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'ASHOK GARDENS'),
        SHD[1154], SHD[1165], SHD[585], SHD[584],
        SHD[1222], SHD[760],
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),

    // 29 SERIES
    ["29B"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD")
    ),
    ["29B/17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["29B/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["29B/272I"].concat(
        SHD[407],
        SHD[1046],
        getStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
    ),
    ["29B/272J"].concat(
        SHD[1178],
        getStops(ADBT_MDCL, 'VNR VJIET', 'BOWRAMPET X ROADS'),
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD"),
    ),
    ["29S"].concat(
        SHD[1207],
        getStops(DNGL_IBP, "SHAHPUR NAGAR", "SECUNDERABAD")
    ),
    ["29Q"].concat(
        SHD[792], SHD[214],
        getStops(DNGL_IBP, "CHINTAL", "BALANAGAR")
    ),

    // 30 SERIES
    ["30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PLAZA', 'SECUNDERABAD')
    ),
    ["30S"].concat(
        SHD[969], SHD[541], SHD[531], SHD[512], SHD[271],
        getStops(BLNR_MLPT, 'BEERAPPA NAGAR', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PLAZA', 'SECUNDERABAD')
    ),
    ["30/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30/280"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),

    // 31 SERIES
    ["31P"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'SECUNDERABAD')
    ),

    // 37 SERIES
    ["37"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SAINIKPURI X ROADS'),
        SHD[376], SHD[996], SHD[712], SHD[241], SHD[698], SHD[317], SHD[850], SHD[118], SHD[975], SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754], SHD[878], SHD[898]
    ),
    ["37/8"].concat(
        getStops(GTKS_PTCR, 'GANDHI BHAVAN', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'BATA'),
        SHD[761], SHD[760],
        SHD[754], SHD[1011], SHD[1102], SHD[210], "AOC GATE", SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], "SHOPPING COMPLEX", "VAYUPURI NORTH",
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS'),
        SHD[525], //  recheck, route mistake
    ),

    // 38 SERIES
    ["38EX"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),
    ["38X"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        SHD[1027],
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T/16CR"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264], SHD[39],
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),

    // 40 SERIES
    ["40"].concat(
        SHD[506], SHD[508], SHD[813],
        getStops(RMNG_DRFM, 'NATIONAL DARBAR', 'BIBLE HOUSE'),
        getStops(MHRM_MDCL, 'BATA', 'CLOCK TOWER'),
        SHD[898]
    ),

    // 41 SERIES
    ["41C/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'IDPL'),
        getStops(MLPT_BLNR, 'ERRAGODALU', 'RANGA REDDY KAMAN'),
        SHD[1150]
    ),

    // 44 SERIES
    ["44X"].concat(
        SHD[311], SHD[1191], SHD[1155], SHD[1206], SHD[1204], SHD[743], SHD[207], SHD[898]
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PARADISE"),
        getStops(DRFM_RMNG, 'PARADISE CENTER', 'KALPANA'),
        SHD[131],
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        SHD[506]
    ),

    // 46 SERIES
    ["46"].concat(
        SHD[759],
        getStops(LGPL_CRPL, "POLICE LINES", "SECUNDERABAD"),
    ),

    // 47 SERIES
    ["47D/224"].concat(
        SHD[795],
        getStops(MDCL_ADBT, 'MIYAPUR DEPOT', 'MIYAPUR X ROADS'),
        getStops(PTCR_GTKS, 'MIYAPUR METRO STATION', 'PANJAGUTTA'),
        SHD[752],
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794], SHD[908]
    ),
    ["47L"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'SECUNDERABAD'),
    ),
    ["47L/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47L/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47U/18"].concat(
        SHD[144],
        getStops(TailsDOWN, 'INDIRA NAGAR X ROADS', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "PANJAGUTTA"),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY')
    ),
    ["47W"].concat(
        getStops(w47_DN, 'WAVEROCK', 'PATNY'),
        "SECUNDERABAD"
    ),
    ["47W/6N"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'HB COLONY'),
        getStops(CRPL_LGPL, 'NOMA', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["47W/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "ALUGADDA BHAVI"),
        w47_UP
    ),
    ["47W/17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        w47_UP
    ),
    ["47Y"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'JOURNLIST COLONY'),
        getStops(MLPT_BLNR, 'JUBLIE HILLS CHECK POST', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["47YM"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA', 'JOURNLIST COLONY'),
        getStops(MLPT_BLNR, 'JUBLIE HILLS CHECK POST', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    // 49 SERIES
    ["49"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49MT"].concat(
        "TALLAGADDA", "SHARADA NAGAR (MP)", "SHIV BAGH", "GUDIMALKAPUR", "MEHDIPATNAM DEPOT", SHD[620],
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49E/22"].concat(
        getStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getStops(CRPL_LGPL, 'PARADISE', 'PANJAGUTTA'),
        getStops(PTCR_GTKS, 'NIMS HOSPITAL', 'IRRUM MANZIL')
    ),
    ["49M/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16CD"].concat(

        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16D"].concat(

        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16H"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    // ["49M/26M"].concat(
    //     getStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
    //     getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM')
    // ),
    ["49M/92A"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M/188B"].concat(
        "BAIRAGIGUDA", "GANDHAMGUDA",
        getStops(DRFM_RMNG, 'HYDERSHAKOTE X ROADS', 'SAI RAM NAGAR (SUNCITY)'),
        getStops(MNBD_SRPT, 'TK BRIDGE', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM'),
    ),
    ["49M/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["49M/250C"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["49M/250D"].concat(

        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["49MT/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM'),
        "MEHDIPATNAM DEPOT", "GUDIMALKAPUR", "SHIV BAGH", "SHARADA NAGAR (MP)", "TALLAGADDA"
    ),

    // 50 SERIES
    ["50B"].concat(
        SHD[195],
        getStops(TailsDOWN, 'CGCL GRAMPANCHAYATH', 'BODUPPAL CIRCLE'),
        getStops(TailsDOWN, 'CHILKA NAGAR', 'NACHARAM IDA'),
        getStops(CRPL_LGPL, 'NACHARAM X ROADS', 'SECUNDERABAD')
    ),

    // 65 SERIES
    ["65/116GA"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["65MG"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["65M/116G"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),
    ["65M/123"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getStops(LGPL_CRPL, 'SHAIKPET NALA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),

    // 66 SERIES
    ["66G"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 71 SERIES
    ["71A"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'AFZALGUNJ')
    ),
    ["71AB"].concat(
        SHD[195],
        getStops(TailsDOWN, 'CGCL GRAMPANCHAYATH', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'AFZALGUNJ')
    ),
    ["71AC"].concat(
        "CHERLAPALLY STATION", "IOC X ROADS",
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'AFZALGUNJ')
    ),
    ["71K"].concat(
        SHD[454],
        getStops(GTKS_PTCR, 'KACHEGUDA KAMELA', 'AFZALGUNJ')
    ),

    // 72 SERIES
    ["72"].concat(
        "SATYA NAGAR", "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getStops(KTGD_LGRH, 'KOTHAPET', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11], "HIGH COURT"
    ),
    ["72/277D"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
        getStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72H"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72HK"].concat(
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72J"].concat(
        SHD[237], SHD[858], SHD[424],
        getStops(GWRL_HCLX, 'BANDLAGUDA (NGL)', 'CHAITANYAPURI'),
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11]
    ),

    // 83 SERIES
    ["83J"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83JA"].concat(
        getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83J/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),

    // 85 SERIES
    ["85/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "PAHADI SHARIF")
    ),
    ["85P/8C"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getStops(MDCL_MHRM, 'AFZALGUNJ', 'PAHADI SHARIF')
    ),
    ["85/253L"].concat(
        getStops(OSK_Stops_DOWN, 'ANOJIGUDA (KNDKR)', 'THUMMALOOR ROAD'),
        getStops(MHRM_MDCL, 'MAHESHWARAM GATE', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["85V"].concat(
        "VENKATAPUR", "BISMILLAH COLONY", "KOTHAPET(SALALA)",
        getStops(MHRM_MDCL, "BARKAS X ROADS", "SHAH ALI BANDA"),
        SHD[193]
    ),

    // 86 SERIES
    ["86A"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86C"].concat(
        getStops(SHMB_KSR, 'CITY BUS STATION', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86J"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86K"].concat(
        SHD[506],
        getStops(SHMB_KSR, 'KOTI WOMENS COLLEGE', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),


    // 90 SERIES
    ["90/253T"].concat(
        "FAB CITY", "SREE NAGAR",
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90/300"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90B"].concat(
        getStops(GWRL_HCLX, 'BANDLAGUDA DEPOT', 'OLD NAGOLE'),
        getStops(IBP_DNGL, "NAGOLE X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90BE"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90BK"].concat(
        SHD[1474],
        getStops(GWRL_HCLX, 'KUNTLOOR X ROAD', 'OLD NAGOLE'),
        getStops(IBP_DNGL, "NAGOLE X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90L"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "LB NAGAR X ROADS")
    ),
    ["90LK"].concat(
        getStops(SHMB_KSR, "KACHEGUDA STATION", "MANIKESHWAR NAGAR"),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS")
    ),
    ["90DL"].concat(
        getStops(LGRH_KTGD, "DILSHUKNAGAR", "LB NAGAR"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90LV"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["90L/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/22"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["90L/229S"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["90L/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["90UN"].concat(
        SHD[1038], SHD[672],
        getStops(GWRL_HCLX, 'NAGOLE X ROADS', 'DILSHUKNAGAR')
    ),
    ["90U/203U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 92 SERIES
    ["92A"].concat(
        SHD[620], getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["92A/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["92A/49M"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),
    ["92K"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["92R"].concat(
        SHD[620],
        getStops(SKPL_SECB, 'RETHIBOWLI', 'DAIRY FARM (CNTLMT)'),
        getStops(DRFM_RMNG, 'NPPTI', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),
    ["92R/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "DAIRY FARM (CNTLMT)"),
        getStops(DRFM_RMNG, 'NPPTI', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),

    // 94 SERIES
    ["94R"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'DAIRY FARM (CNTLMT)'),
        getStops(TailsDOWN, 'CHINTALMET', 'KISHAN BAGH'),
        getStops(SHMB_KSR, 'BAHUDURPURA', 'CITY BUS STATION'),
        SHD[507]
    ),
    ["94RM"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'DAIRY FARM (CNTLMT)'),
        getStops(TailsDOWN, 'CHINTALMET', '9 NUMBER'),
        SHD[942], SHD[342],
        getStops(SHMB_KSR, 'BAHUDURPURA', 'CITY BUS STATION'),
        SHD[507]
    ),

    // 95 SERIES
    ["95"].concat(
        getStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),
    ["95/3K"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")
    ),
    ["95/3KN"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["95K"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),
    ["95M"].concat(
        "JALPALLY", "WAMBAY COLONY", "LAXMIGUDA",
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),

    // 100 SERIES
    ["100/299"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["100V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["100M"].concat(
        "SATYA NAGAR", "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getStops(KTGD_LGRH, "KOTHAPET", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),


    // 102 SERIES
    ["102"].concat(
        SHD[628],
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/9K"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/185"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'OWAISI HOSPITAL'),
        SHD[628]
    ),
    ["102/253L"].concat(
        getStops(OSK_Stops_DOWN, 'LEMOOR', 'SARASWATHIGUDA'),
        getStops(MHRM_MDCL, 'LEMOOR ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["102B/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102M"].concat(
        getStops(TailsDOWN, 'BALAPUR VILLAGE', 'SAI NAGAR'),
        getStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 103 SERIES
    ["103"].concat(
        getStops(TailsDOWN, 'RCI', 'VIJAY DURGA NAGAR'),
        getStops(TailsDOWN, 'SHIVAJI CHOWK', 'SAI NAGAR'),
        getStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 104 SERIES
    ["104A"].concat(
        getStops(ADBT_MDCL, 'RAJIV GRUHA KALPA', 'KOTI WOMENS COLLEGE')
    ),
    ["104R"].concat(
        getStops(MDCL_ADBT, 'RN REDDY', 'RTC COLONY(CHAMPAPET)'),
        getStops(ADBT_MDCL, 'CHAMPAPET', 'KOTI WOMENS COLLEGE')
    ),

    // 105 SERIES
    ["105"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'SAIDABAD'),
        SHD[336], SHD[978]
    ),

    // 107 SERIES
    ["107JD"].concat(
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JS"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SRRNGR)'),
        getStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107VL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VR"].concat(
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VS"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SRRNGR)'),
        getStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 113 SERIES
    ["113B"].concat(
        getStops(TailsDOWN, 'BARKATPURA', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["113IM"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        SHD[821], SHD[723], SHD[67], SHD[856], SHD[167], SHD[1075],
        getStops(HCLX_GWRL, 'VIDYA NAGAR', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113IMZ"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        SHD[821], SHD[723], SHD[67], SHD[856], SHD[167], SHD[1075],
        getStops(HCLX_GWRL, 'VIDYA NAGAR', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KL"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KM"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'MEDIPALLY')
    ),
    ["113S"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE')
    ),
    ["113W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M/120"].concat(
        SHD[595],
        getStops(SKPL_SECB, 'MANCHIREVULA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'INDIRA NAGAR X ROADS'),
        SHD[144]
    ),
    ["113M/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["113M/288"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113FT"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["113KLT"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113KT"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113FZ"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'GOLNAKA', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["113MZ"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'GOLNAKA', 'MEDIPALLY')
    ),

    // 115 SERIES
    ["115"].concat(
        SHD[144],
        getStops(TailsDOWN, 'INDIRA NAGAR X ROADS', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'CHADERGHAT X ROADS'),
        "KOTI MEDICAL COLLEGE",
    ),

    // 116 SERIES
    ["116/220K"].concat(
        "KOLLUR", "OSMAN NAGAR", "TELLAPUR", "GOPALPALLY X ROADS",
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),
    ["116G/65M"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["116GA/65"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["116N"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'MEHDIPATNAM'),
        getStops(MCRL_KOTI, 'MEHDIPATNAM', 'KOTI MEDICAL COLLEGE'),
    ),
    ["116NL"].concat(
        SHD[558], "NALLAGANDLA", "CITIZENS HOSPITAL", "APARNA APPARTMENTS", "GOPANPALLY", "GOPANPALLY X ROADS",
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'MEHDIPATNAM'),
        getStops(MCRL_KOTI, 'MEHDIPATNAM', 'KOTI MEDICAL COLLEGE'),
    ),
    ["116N/220K"].concat(
        "KOLLUR", "OSMAN NAGAR", "TELLAPUR", "GOPALPALLY X ROADS",
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'MEHDIPATNAM'),
        getStops(MCRL_KOTI, 'MEHDIPATNAM', 'KOTI MEDICAL COLLEGE'),
    ),

    // 117 SERIES
    ["117"].concat(
        SHD[525],
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'NACHARAM X ROADS'),
        getStops(TailsUP, 'NACHARAM IDA', 'UPPAL')
    ),

    // 118 SERIES
    ["118W/300"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),

    // 119 SERIES
    ["119M"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        SHD[620]
    ),

    // 120 SERIES
    ["120"].concat(
        SHD[711], SHD[306],
        getStops(SKPL_SECB, 'GANDIPET X ROAD', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["120/113M"].concat(
        SHD[144],
        getStops(TailsDOWN, 'INDIRA NAGAR X ROADS', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'MANCHIREVULA X ROADS'),
        SHD[595]
    ),
    ["120K/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'KOKAPET X ROADS'),
        "KOKAPET"
    ),

    // 123 SERIES
    ["123"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getStops(LGPL_CRPL, 'SHAIKPET NALA', 'MEHDIPATNAM')
    ),
    ["123/65M"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),

    // 125 SERIES
    ["125/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'HITECH CITY', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 126 SERIES
    ["126/300"].concat(
        SHD[552],
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),
    ["126M"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'MEHDIPATNAM'),
    ),

    // 127 SERIES
    ["127AL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'KOTI WOMENS COLLEGE'),
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
    ),
    ["127DA"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI WOMENS COLLEGE'),
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
    ),
    ["127K"].concat(
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
        getStops(ADBT_MDCL, 'MADHAPUR PS', 'KONDAPUR')
    ),
    ["127KL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR', 'KOTI WOMENS COLLEGE'),
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
        getStops(ADBT_MDCL, 'MADHAPUR PS', 'KONDAPUR')
    ),

    // 147 SERIES
    ["147"].concat(
        getStops(MDCL_ADBT, 'KONDAPUR', 'JUBLIE HILLS CHECK POST'),
        getStops(MCRL_KOTI, 'LV PRASAD', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'PARADISE'),
        getStops(MNBD_SRPT, 'PATNY', 'HANUMAN TEMPLE'),
        SHD[1016], SHD[923], SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["147W"].concat(
        getStops(w47_DN, 'WAVEROCK', 'PARADISE'),
        getStops(MNBD_SRPT, 'PATNY', 'HANUMAN TEMPLE'),
        SHD[1016], SHD[923], SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 156 SERIES
    ["156/205F"].concat(
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156/299"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156/505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156H"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156L"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR X ROADS')
    ),
    ["156S"].concat(
        "SAI NAGAR", "SAI BABA TEMPLE", "SAMA NAGAR X ROADS", "NARSIMHARAO NAGAR",
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156V"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["156V/505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 158 SERIES
    ["158"].concat(
        getStops(PTCR_GTKS, 'ESI HOSPITAL', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158FL"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158HF"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["158VF"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 171 SERIES
    ["171"].concat(
        getStops(KPHB_GTKS, "GAJULA RAMARAM", 'NLB NAGAR'),
        getStops(DNGL_IBP, "GAJULA RAMARAM X ROADS", "SECUNDERABAD")
    ),
    ["171K"].concat(
        SHD[510],
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
        SHD[905]
    ),
    ["171K/198W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        "JNTU COLLEGE",
        getStops(KPHB_GTKS, 'KPHB MAIN ROAD', 'GAJULA RAMARAM')
    ),
    // ["171K/219"].concat(
    //     getStops(PTCR_GTKS, 'PATANCHERUVU', 'KPHB MAIN ROAD'),
    //     getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
    //     SHD[905]
    // ),
    ["171M/189M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', SHD[298]),
        getStops(GTKS_KPHB, 'NLB NAGAR', 'GAJULA RAMARAM')
    ),
    ["171R"].concat(
        SHD[960],
        getStops(KPHB_GTKS, 'SRI NIWAS NAGAR', 'NLB NAGAR'),
        getStops(DNGL_IBP, SHD[298], "SECUNDERABAD")
    ),

    // 178 SERIES
    ["178G/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS"),
        SHD[103], "ISMAIL NAGAR", "GHOUSE NAGAR"
    ),

    // 183 SERIES
    ["183B"].concat(
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["183SS"].concat(
        getStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'SUCHITRA')
    ),
    ["183S/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'CHINTAL'),
        SHD[905],
    ),

    // 185 SERIES
    ["185G"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, 'KUKATPALLY', 'CITY BUS STATION')
    ),
    ["185/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'KUKATPALLY'),
    ),

    // 188 SERIES
    ["188"].concat(
        getStops(MNBD_SRPT, "KALI MANDIR", "MEHDIPATNAM")
    ),
    ["188/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "KALI MANDIR")
    ),
    ["188/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'ARAMGHAR'),
        getStops(SECB_SKPL, 'SHIVARAMPALLY X ROADS', 'LAL DHABA'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'SAI RAM NAGAR (SUNCITY)'),
        getStops(MNBD_SRPT, 'TK BRIDGE', 'MEHDIPATNAM')
    ),
    ["188B/49M"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, "RETHIBOWLI", "TK BRIDGE"),
        getStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'HYDERSHAKOTE X ROADS'),
        "GANDHAMGUDA", "BAIRAGIGUDA"
    ),


    // 189 SERIES
    ["189M"].concat(
        getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["189M/171M"].concat(
        getStops(KPHB_GTKS, 'GAJULA RAMARAM', 'NLB NAGAR'),
        getStops(DNGL_IBP, SHD[298], 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["189M/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),

    // 195 SERIES
    ["195/272"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'BALANAGAR', 'KUKATPALLY'),
        SHD[510],
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["195G"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195GJ"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195GK"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195H"].concat(
        getStops(MLPT_BLNR, 'BACHUPALLY X ROADS', 'GACHIBOWLI DLF'),
        getStops(CRPL_LGPL, 'GACHIBOWLI STADIUM', 'HCU BUS DEPOT')
    ),
    ["195J"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        SHD[510],
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["195P"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195W"].concat(
        getStops(MLPT_BLNR, 'BACHUPALLY X ROADS', 'WAVEROCK')
    ),
    ["195WJ"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["195WP"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'KAISAR NAGAR'),
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),

    // 198 SERIES
    ["198W/171K"].concat(
        getStops(GTKS_KPHB, 'GAJULA RAMARAM', 'KPHB MAIN ROAD'),
        SHD[510],
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),

    // 201 SERIES
    ["201"].concat(
        getStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE"),
    ),
    ["201G"].concat(
        getStops(GWRL_HCLX, 'GOWRELLY', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201GD"].concat(
        getStops(GWRL_HCLX, 'GOWRELLY', 'DILSHUKNAGAR')
    ),
    ["201M"].concat(
        SHD[606], SHD[849], SHD[994],
        getStops(GWRL_HCLX, 'TATTI ANNARAM X ROADS', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201K"].concat(
        getStops(OSK_Stops_DOWN, 'RAJIV GRUHAKALPA (KNTLR)', 'HARIZANAWADA'),
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE"),
    ),
    ["201Q"].concat(
        getStops(GWRL_HCLX, 'QUTHBULLAPUR - GOWRELLY', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'BACHARAM')
    ),
    ["201T/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'TARAMATIPET')
    ),

    // 202 SERIES
    ["202B"].concat(
        getStops(OSK_Stops_DOWN, 'BRAHMANAPALLY', 'HAYATHNAGAR VILLAGE'),
        getStops(KTGD_LGRH, 'TORRUR X ROADS', 'KOTI WOMENS COLLEGE')
    ),
    ["202K/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR DEPOT"),
        SHD[1072],
        getStops(OSK_Stops, 'HAYATHNAGAR VILLAGE', 'TORRUR VILLAGE'),
        SHD[1383]
    ),

    // 203 SERIES
    ["203A"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AK"].concat(
        SHD[790], SHD[768], SHD[762],
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AR"].concat(
        SHD[835], SHD[885], SHD[790], SHD[768], SHD[762],
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, 'RAM KOTI X ROADS', 'SECUNDERABAD')
    ),
    ["203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203A/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203N/102B"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3N"].concat(
        "BEL", "BEL CIRCLE", SHD[662],
        getStops(CRPL_LGPL, 'NACHARAM X ROADS', 'TARNAKA'),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),
    ["203U/90U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 204 SERIES
    ["204/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PEDHA AMBERPET X ROADS"),
        SHD[303], "GANDI CHERUVU"
    ),
    ["204DA"].concat(
        getStops(OSK_Stops_DOWN, 'ANAJPUR', 'GANDICHERUVU X ROADS'),
        getStops(KTGD_LGRH, 'PEDHA AMBERPET X ROADS', 'DILSHUKNAGAR')
    ),
    ["204U"].concat(
        getStops(OSK_Stops_DOWN, 'SANGHI NAGAR', 'GANDICHERUVU X ROADS'),
        getStops(KTGD_LGRH, 'PEDHA AMBERPET X ROADS', 'KOTI WOMENS COLLEGE')
    ),
    ["204UA"].concat(
        getStops(OSK_Stops_DOWN, 'ANAJPUR', 'GANDICHERUVU X ROADS'),
        getStops(KTGD_LGRH, 'PEDHA AMBERPET X ROADS', 'KOTI WOMENS COLLEGE')
    ),

    // 205 SERIES
    ["205"].concat(
        getStops(OSK_Stops, 'PILLAIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["205A"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["205A/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["205B/290U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY'),
        "BALIJAGUDA"
    ),
    ["205F/156"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET')
    ),
    ["205M/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getStops(OSK_Stops, 'GUNTAPALLY', 'MAJEEDPUR VILLAGE')

    ),

    // 211 SERIES
    ["211"].concat(
        SHD[775],
        getStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211/242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["211A"].concat(
        getStops(OSK_Stops, 'ALIABAD', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211B"].concat(
        getStops(OSK_Stops, 'UDDAMARRI', 'SHAMIRPET VILLAGE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211CD"].concat(
        getStops(OSK_Stops_DOWN, 'DRDO (YADGARPALLY)', 'THIMMAIPALLY'),
        SHD[51], "BITS PILANI X ROADS",
        getStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'SECUNDERABAD')
    ),
    ["211D"].concat(
        "KOLTHUR",
        "SAMPANBOLE",
        getStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211DY"].concat(
        SHD[119], SHD[243], SHD[775],
        getStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211K"].concat(
        getStops(OSK_Stops, 'KESAVARAM', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211M"].concat(
        getStops(TailsDOWN, 'CRPF', 'BHAGYA NAGAR COLONY'),
        getStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 212 SERIES
    ["212"].concat(
        SHD[140], "BITS PILANI X ROADS",
        getStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212/702"].concat(
        getStops(OSK_Stops, 'WARGAL TEMPLE', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212T"].concat(
        "ICICI TURKAPALLY",
        "KOLTHUR",
        "SAMPANBOLE",
        getStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),

    // 215 SERIES
    ["215"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),

    // 216 SERIES
    ["216"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["216KL"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getStops(BLNR_MLPT, 'KOTHAGUDA X ROADS', 'ANJAYYA NAGAR'),
        getStops(LGPL_CRPL, 'GACHIBOWLI X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["216M"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'MEHDIPATNAM')
    ),
    ["216MP"].concat(
        getStops(TailsDOWN, 'PATEL GUDA', 'BEERAMGUDA VILLAGE'),
        getStops(PTCR_GTKS, 'BEERAMGUDA', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'MEHDIPATNAM')
    ),

    // 217 SERIES
    ["217"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["217/254"].concat(
        SHD[790], SHD[885], SHD[835],
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'NAYAPUL'),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["217/300"].concat(
        SHD[552],
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'LAXMI NAGAR (MP)'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["217C"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),
    ["217D"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),

    // 218 SERIES
    ["218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ')
    ),
    ["218C"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'CITY BUS STATION'),
    ),
    ["218CA"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHANDRAYANGUTTA X ROADS')
    ),
    ["218D"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["218H"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["218L"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218/102"].concat(
        SHD[628],
        getStops(ADBT_MDCL, 'OWAISI HOSPITAL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203A"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/224MN"].concat(
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET ARCH'),
        getStops(PTCR_GTKS, 'NIZAMPET X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218/277K"].concat(
        SHD[790], SHD[885], SHD[478],
        getStops(IBP_DNGL, 'MANNEGUDA', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MIYAPUR X ROADS')

    ),


    // 219 SERIES
    ["219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),
    ["219/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/24N"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC",
        SHD[1016], SHD[245], SHD[700], SHD[586], SHD[621], "THOKATTA VILLAGE", SHD[640],
        getStops(IBP_DNGL, "BOWENPALLY X ROADS", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    // ["219/171K"].concat(
    //     getStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
    //     getStops(GTKS_PTCR, 'KPHB MAIN ROAD', 'PATANCHERUVU')
    // ),
    ["219/183S"].concat(
        SHD[905],
        getStops(DNGL_IBP, 'CHINTAL', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU')
    ),
    ["219I/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU'),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219I/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU"),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/280"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219MP"].concat(
        getStops(TailsDOWN, 'PATEL GUDA', 'BEERAMGUDA VILLAGE'),
        getStops(PTCR_GTKS, "BEERAMGUDA", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),

    // 220 SERIES
    ["220G"].concat(
        "GOPULAARAM", "MAHARAJPET",
        getStops(SKPL_SECB, 'DONTANPALLY', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["220K/116"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI'),
        "GOPALPALLY X ROADS", "TELLAPUR", "OSMAN NAGAR", "KOLLUR"
    ),
    ["220K/116N"].concat(
        getStops(KOTI_MCRL, 'KOTI MEDICAL COLLEGE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI'),
        "GOPALPALLY X ROADS", "TELLAPUR", "OSMAN NAGAR", "KOLLUR",
    ),


    // 221 SERIES
    ["221"].concat(
        DN_221,
        getStops(PTCR_GTKS, 'ALLWYN X ROADS', 'MIYAPUR METRO STATION')
    ),
    ["221G"].concat(
        getStops(DN_221, 'GACHIBOWLI X ROADS', 'OLD HAFEEZPET'),
        getStops(PTCR_GTKS, 'ALLWYN X ROADS', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),


    // 222 SERIES
    ["222A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'JUBLIE HILLS CHECK POST'),
        getStops(MCRL_KOTI, 'LV PRASAD', 'CARE HOSPITAL'),
        getStops(MDCL_ADBT, 'PENSION OFFICE', 'KOTI BUS STATION')
    ),
    ["222L"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'JUBLIE HILLS CHECK POST'),
        getStops(MCRL_KOTI, 'LV PRASAD', 'CARE HOSPITAL'),
        getStops(MDCL_ADBT, 'PENSION OFFICE', 'KOTI BUS STATION')
    ),

    // 224 SERIES
    ["224/47D"].concat(
        SHD[908], SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        SHD[752],
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR METRO STATION'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'MIYAPUR DEPOT'),
        SHD[795]
    ),
    ["224B"].concat(
        SHD[150], "BOLLARAM GANDHI STATUE", "BOLLARAM VILLAGE ROAD",
        getStops(MDCL_ADBT, 'IDA X ROADS', 'MIYAPUR X ROADS')
    ),
    ["224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS')
    ),
    ["224G/10KM"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS"),
        getStops(ADBT_MDCL, 'LAND MARK TOWER', 'GANDIMAISAMMA')
    ),
    ["224G/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224G/219I"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224MN"].concat(
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS')
    ),
    ["224MN/218"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'JNTU COLLEGE'),
        getStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET')
    ),
    ["224X"].concat(
        SHD[150], "BOLLARAM GANDHI STATUE", "BOLLARAM VILLAGE ROAD",
        getStops(MDCL_ADBT, 'IDA X ROADS', 'MIYAPUR X ROADS')
    ),

    // 226 SERIES
    ["226"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "RAMACHANDRAPURAM"),
        "RC PURAM (ZPHS)", "LIG COLONY", "BHEL", "BHEL MIG",
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),

    // 227 SERIES
    ["227"].concat(
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["227/25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),

    // 229 SERIES
    ["229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DNGL_IBP, 'PATNY', 'SECUNDERABAD')
    ),
    ["229/1D"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        getStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/1Z"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/5K"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/8C"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'PARADISE CENTER'),
        getStops(IBP_DNGL, 'PARADISE', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["229/49M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'WESLEY COLLEGE'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/90L"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/279"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290U"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229B"].concat(
        SHD[156],
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229P"].concat(
        getStops(OSK_Stops, 'PUDUR', 'KISTAPUR'),
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        SHD[755],
        getStops(DNGL_IBP, 'PATNY', 'SECUNDERABAD')
    ),
    ["229S/90L"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),

    // 230 SERIES
    ["230A"].concat(
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230AB"].concat(
        getStops(OSK_Stops, 'BONTHAPALLY', 'PULLAREDDY COLLEGE'),
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        SHD[591],
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),
    ["230AN"].concat(
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230P/9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["230P/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["230P/9XM"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    // 231 SERIES
    ["231"].concat(
        getStops(OSK_Stops, 'MEDICITY', 'KISTAPUR'),
        SHD[613]
    ),
    ["231KN"].concat(
        getStops(OSK_Stops_DOWN, 'KAZIPALLY', 'NARAYANA IIT'),
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS'),
        getStops(PTCR_GTKS, "JNTU COLLEGE", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),

    // 233 SERIES
    ["233"].concat(
        getStops(OSK_Stops, 'NUTHANKAL', 'APARNA KOMPALLY'),
        getStops(MDCL_MHRM, 'KOMPALLY', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),

    // 241 SERIES
    ["241T"].concat(
        getStops(OSK_Stops, 'DHARMAVARAM', 'CHIRYALA VILLAGE'),
        getStops(KSR_SHMB, "CHERIYAL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["241C"].concat(
        "LAKSHMI NARASIMHA SWAMY TEMPLE",
        getStops(OSK_Stops, 'CHIRYALA', 'CHIRYALA VILLAGE'),
        getStops(KSR_SHMB, "CHERIYAL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 242 SERIES
    ["242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/3K"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["242/17H"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/211"].concat(
        SHD[251], "BITS PILANI X ROADS", SHD[51],
        getStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD"),
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'METTUGUDA'),
        SHD[993],
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242A"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS",
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242B"].concat(
        SHD[147],
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242BJ"].concat(
        "JNNURM COLONY",
        SHD[147],
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242G"].concat(
        SHD[534], SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242GA"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS", SHD[631], SHD[534], SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA (NGRM)", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242RG/15H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NGRM)'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),

    // 245 SERIES
    ["245A"].concat(
        "AUSHAPUR",
        getStops(OSK_Stops_DOWN, 'ANKUSHAPUR GATE', 'PRICETON COLLEGE'),
        getStops(OSK_Stops_DOWN, 'NFC NAGAR X ROADS', 'AMBEDKAR NAGAR (GTKS)'),
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 250 SERIES
    ["250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250/10K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250D"].concat(

        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898],
    ),
    ["250/49"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/49MT"].concat(
        "TALLAGADDA", "SHARADA NAGAR (MP)", "SHIV BAGH", "GUDIMALKAPUR", "MEHDIPATNAM DEPOT", SHD[620],
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C/20"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'CHILKALGUDA X ROADS'),
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'CHERLAPALLY')
    ),
    ["250C/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["250D/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),

    ),
    ["250E"].concat(
        getStops(TailsUP, 'CHENGICHERLA DEPOT', 'CHENGICHERLA'),
        "IOC X ROADS",
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'HCL PHASE 1'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    // ["250S"].concat(
    //     getStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
    //     SHD[878], SHD[898]
    // ),
    ["250/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),

    // 251 SERIES
    ["251M"].concat(
        SHD[651], SHD[439],
        getStops(OSK_Stops, 'MADANAPALLY', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["251/1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD")
    ),
    ["251/2Z"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'SHAMSHABAD')
    ),
    ["251/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD')
    ),
    ["251/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR"),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["251/7Z"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD')
    ),
    ["251/90L"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["251/188"].concat(
        getStops(SRPT_MNBD, "MEHDIPATNAM", "TK BRIDGE"),
        getStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'DAIRY FARM (CNTLMT)'),
        getStops(SKPL_SECB, 'LAL DHABA', 'SHIVARAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'ARAMGHAR', 'SHAMSHABAD')
    ),
    ["251/300"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),

    // 252 SERIES
    ["252/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD'),
        SHD[843]
    ),
    ["252/6IW"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'ADIKMET'),
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167], SHD[856], SHD[70],
        getStops(TailsUP, 'NTR STADIUM', 'BIRLA MANDIR'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["252S"].concat(
        getStops(OSK_Stops_DOWN, 'SHANKARAPURAM', 'RASHEEDGUDA'),
        'KISHANGUDA',
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["252S/8A"].concat(
        getStops(MDCL_MHRM, 'SECUNDERABAD', 'OSMANGUNJ'),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        'KISHANGUDA',
        getStops(OSK_Stops, 'RASHEEDGUDA', 'SHANKARAPURAM')
    ),

    // 253 SERIES
    ["253"].concat(
        getStops(MHRM_MDCL, 'MAHESHWARAM', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["253L/85"].concat(
        getStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM GATE'),
        getStops(OSK_Stops, 'THUMMALOOR ROAD', 'ANOJIGUDA (KNDKR)')
    ),
    ["253L/102"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'LEMOOR ROAD'),
        getStops(OSK_Stops, 'SARASWATHIGUDA', 'LEMOOR')
    ),
    ["253T/90"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA'),
        "SREE NAGAR", "FAB CITY"
    ),
    ["253W"].concat(
        getStops(MHRM_MDCL, 'MAHESHWARAM', 'CHANDRAYANGUTTA X ROADS'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 254 SERIES
    ["254/217"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'THUKKUGUDA'),
        SHD[835], "WONDER LA X ROADS", "KONGARA KALAN"
    ),

    // 272 SERIES
    ["272"].concat(
        SHD[157], SHD[158],
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["272/195"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        SHD[442], SHD[510],
        getStops(MLPT_BLNR, 'KUKATPALLY', 'BALANAGAR'),
        getStops(IBP_DNGL, 'IDPL', 'GANDIMAISAMMA')
    ),
    ["272G/9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/18"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'GANDIMAISAMMA')
    ),
    ["272G/29B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["272G/83J"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/189M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["272G/219I"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["272G/242"].concat(
        getStops(KSR_SHMB, 'KEESARAGUTTA', 'TARNAKA'),
        getStops(CRPL_LGPL, 'RAILWAY DEGREE COLLEGE', 'CHILKALGUDA X ROADS'),
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["272I/29B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
        SHD[1046],
        SHD[407]
    ),
    ["272J/29B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        getStops(MDCL_ADBT, 'BOWRAMPET X ROADS', 'VNR VJIET'),
        "JNNURM COLONY (BACHUPALLY)"
    ),
    ["272B"].concat(
        SHD[157], SHD[158],
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),

    // 273 SERIES
    ["273/24S"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),

    // 277 SERIES
    ["277"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'CHADERGHAT'),
        SHD[624]
    ),
    ["277D"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "SAGAR RING ROAD"),
        getStops(KTGD_LGRH, "LB NAGAR X ROADS", "KOTI WOMENS COLLEGE")
    ),
    ["277D/72"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
        getStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
    ),
    ["277K/218"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'MANNEGUDA'),
        SHD[478], SHD[885], SHD[790]
    ),
    ["277L"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "LB NAGAR X ROADS"),
    ),
    ["277N"].concat(
        SHD[665], "KAMMAGUDA", "GURRAMGUDA VILLAGE",
        getStops(IBP_DNGL, 'GURRAMGUDA X ROADS', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE')
    ),
    ["277S"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE'),
        SHD[507],
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),

    // 279 SERIES
    ["279"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["279/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
    ),
    ["279U"].concat(
        getStops(DNGL_IBP, "UPPAL RING ROAD", "IBRAHIMPATNAM")
    ),

    // 280 SERIES
    ["280"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280B"].concat(
        SHD[147], "HOLY MERRY COLLEGE", "VIGNAN SCHOOL", "KONDAPUR VLG", "ANNAPURNA COLONY(GTKS)",
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280I"].concat(
        "INFOSYS (PCHRM)",
        getStops(GTKS_PTCR, 'SINGAPUR TOWNSHIP', 'UPPAL RING ROAD')
    ),
    ["280J"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754],
        SHD[448]
    ),
    ["280N"].concat(
        "NFC NAGAR",
        getStops(OSK_Stops_DOWN, 'NFC NAGAR X ROADS', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280X"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD')
    ),
    ["280/20"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),
    ["280/30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PLAZA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),
    ["280/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280/488"].concat(
        "BIBI NAGAR",
        getStops(OSK_Stops_DOWN, 'KONDAMADUGU', 'NFC NAGAR ROAD'),
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280/492"].concat(
        getStops(OSK_Stops, 'PILLAIPALLY', 'GUVVALETI X ROADS'),
        getStops(OSK_Stops_DOWN, 'MAKTHA ANANTHARAM', 'POTHARAJU DUDAM'),
        getStops(OSK_Stops_DOWN, 'EDULABAD', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 281 SERIES
    ["281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'ECIL X ROADS')
    ),
    ["281/3K"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/6L"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["281/24L"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["281/113M"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/250"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281R/16A"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'RTC COLONY (RMPLY)')
    ),

    // 282 SERIES
    ["282K"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'HITECH CITY', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // 283 SERIES
    ["283C"].concat(
        "SURARAM COLONY",
        "SURARAM CIRCLE",
        getStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283D/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'SURARAM'),
        "SURARAM CIRCLE", "SURARAM COLONY"
    ),
    ["283K"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["283S/18"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["283VS"].concat(
        "SURARAM VILLAGE",
        getStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283RG"].concat(
        "RAJIV GRUHAKALPA (SURARAM)",
        "SURARAM COLONY",
        "SURARAM CIRCLE",
        getStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283T"].concat(
        "TENUGUDEM", "VENKATAPUR(TNGM)", "ANURAG UNIVERSITY",
        getStops(GTKS_PTCR, 'JODIMETLA', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 284 SERIES
    ["284P"].concat(
        "PRATHAP SINGARAM", "MUTHYALAGUDA", "KACHAVANI SINGARAM", "LAXMI NAGAR (PARVATHPUR)", "GANDHI NAGAR (PARVATHPUR)", "PARVATHPURAM", "RTC COLONY (PARVATHAPUR)", "PEERJADIGUDA", "INDIAN INTERNATIONAL SCHOOL",
        getStops(GTKS_PTCR, 'PEERJADIGUDA KAMAN', 'UPPAL RING ROAD')
    ),

    // 288 SERIES
    ["288"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["288/113M"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'MOINABAD')
    ),
    ["288A"].concat(
        getStops(OSK_Stops_DOWN, 'AMDAPUR', 'MURTHUZAGUDA'),
        getStops(MNBD_SRPT, 'JBIT', 'MEHDIPATNAM')
    ),
    ["288C"].concat(
        getStops(OSK_Stops_DOWN, 'APPOJIGUDA', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288D"].concat(
        SHD[209], SHD[1026],
        getStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288E"].concat(
        getStops(OSK_Stops, 'BAKARAM', 'YENKEPALLY'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288D/19K"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["288K"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'LAKDI KA PUL'),
        getStops(MDCL_ADBT, 'ASSEMBLY', 'BANK STREET (KOTI)'),
        SHD[507]
    ),
    ["288NB"].concat(
        getStops(OSK_Stops_DOWN, 'BAKARAM', 'AZIZ NAGAR'),
        getStops(MNBD_SRPT, 'POLICE ACADEMY', 'MEHDIPATNAM')
    ),
    ["288R"].concat(
        "CHINNA MANGALAARAM", "REDDYPALLY", "CHANDANAGAR X ROADS", "CHANDA NAGAR VILLAGE", "CHANDANAGAR X ROADS",
        getStops(OSK_Stops_DOWN, 'APPOJIGUDA X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288Y"].concat(
        "YELKAGUDA", "QUTHBUDDINGUDA", "REDDYPALLY", "CHANDANAGAR X ROADS", "PEDHA MANGALARAM",
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),

    // 290 SERIES
    ["290"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290KJ"].concat(
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898],
        SHD[754],
        SHD[448]
    ),
    ["290KP"].concat(
        getStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290UA"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290UF"].concat(
        getStops(OSK_Stops, 'RAMOJI FILM CITY', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290UJ"].concat(
        "JNNURM COLONY (RFC)",
        getStops(OSK_Stops, 'RAMOJI FILM CITY', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/201"].concat(
        getStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/201T"].concat(
        getStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/202K"].concat(
        SHD[1383],
        getStops(OSK_Stops_DOWN, 'TORRUR VILLAGE', 'HAYATHNAGAR VILLAGE'),
        getStops(KTGD_LGRH, 'TORRUR X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/204"].concat(
        "GANDI CHERUVU", SHD[303],
        getStops(KTGD_LGRH, 'PEDHA AMBERPET X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/205A"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/205B"].concat(
        "BALIJAGUDA",
        getStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U/205M"].concat(
        getStops(OSK_Stops_DOWN, 'MAJEEDPUR VILLAGE', 'GUNTAPALLY'),
        getStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["290U/463"].concat(
        "DESHMUKHI",
        getStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/555"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),

    // 299 SERIES
    ["299"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["299/1D"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["299/100"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["299/156"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["299D"].concat(getStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR")),

    // 300 SERIES
    ["300"].concat(
        getStops(DNGL_IBP, "UPPAL RING ROAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["300/90"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["300/118W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["300/126"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        SHD[552]
    ),
    ["300/217"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(SKPL_SECB, 'LAXMI NAGAR (MP)', 'SAGAR RING ROAD'),
        SHD[552]
    ),
    ["300/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300/539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "BUDVEL STATION"),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["300A"].concat(
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        SHD[552]
    ),
    ["300L"].concat(
        SHD[552],
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),

    // 400 SERIES
    ["412"].concat(
        getStops(OSK_Stops_DOWN, 'MALL', 'KHANAPUR X ROADS'),
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE')
    ),
    ["444"].concat(
        "MEDIPALLI VILLAGE", "VEERANNAPET", "REDDYPALLY", "CHANDANAGAR X ROADS",
        getStops(OSK_Stops_DOWN, 'APPOJIGUDA X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["445"].concat(
        getStops(OSK_Stops_DOWN, 'KETHIREDDYPALLY', 'SAJJANPALLY X ROADS'),
        getStops(OSK_Stops, 'KETHIREDDYPALLY ROAD', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["447R"].concat(
        getStops(OSK_Stops_DOWN, 'RAVULAPALLY', 'MUDIMYAL'),
        getStops(OSK_Stops, 'MUDIMYAL X ROADS', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["458"].concat(
        SHD[575], SHD[576], SHD[605],
        getStops(OSK_Stops_DOWN, 'MANSANPALLY X ROADS', 'GOLLAPALLY'),
        "KISHANGUDA",
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["463"].concat(
        "DESHMUKHI",
        getStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")
    ),
    ["463/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["464"].concat(
        getStops(OSK_Stops_DOWN, 'DANDUMAILARAM', 'GUNTAPALLY'),
        getStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getStops(KTGD_LGRH, "ABDULLAHPURMET", "DILSHUKNAGAR"),
    ),
    ["488/280"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        getStops(OSK_Stops, 'NFC NAGAR ROAD', 'KONDAMADUGU'),
        "BIBI NAGAR"
    ),
    ["490S"].concat(
        getStops(OSK_Stops_DOWN, 'BIBI NAGAR', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["492/280"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'EDULABAD'),
        getStops(OSK_Stops, 'POTHARAJU DUDAM', 'MAKTHA ANANTHARAM'),
        getStops(OSK_Stops_DOWN, 'GUVVALETI X ROADS', 'PILLAIPALLY')
    ),
    ["493"].concat(
        getStops(OSK_Stops_DOWN, 'JAINAPALLY', 'BIBI NAGAR CHERUVU'),
        "BIBI NAGAR",
        getStops(OSK_Stops_DOWN, 'KONDAMADUGU', 'NFC NAGAR ROAD'),
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["495"].concat(
        getStops(OSK_Stops_DOWN, 'KANUKUNTA', 'ANANTHARAM X ROADS'),
        getStops(OSK_Stops, 'GUMMADIDALA', 'PULLAREDDY COLLEGE'),
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        SHD[591],
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),
    ["497"].concat(
        getStops(OSK_Stops_DOWN, 'HAZIPUR', 'RANGAPURAM'),
        getStops(OSK_Stops, 'RANGAPURAM X ROADS', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "ECIL X ROADS")
    ),
    ["498"].concat(
        "KESAVAPUR",
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498K"].concat(
        getStops(OSK_Stops, 'KOTHAPALLY', 'PULLAREDDY COLLEGE'),
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        SHD[591],
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),
    ["498U"].concat(
        "UDDAMARRI",
        getStops(OSK_Stops, 'USHARPALLY', 'KESAVAPUR'),
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498VJ"].concat(
        getStops(OSK_Stops, 'JINNARAM', 'PATHARAM'),
        "GAGILLAPUR",
        "DUNDIGAL X ROADS",
        SHD[591],
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),

    // 500 SERIES
    ["505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["505/19S"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/156"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/156V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["523K"].concat(
        getStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["524"].concat(
        getStops(OSK_Stops_DOWN, 'POCHAMPALLY', 'NETAJI INSTITUTE'),
        getStops(KTGD_LGRH, 'KOTHAGUDEM', 'DILSHUKNAGAR')
    ),
    ["530"].concat(
        "KANDUKUR",
        getStops(OSK_Stops_DOWN, 'KOTTAGUDA HIGHWAY', 'GOLLAPALLY'),
        "KISHANGUDA",
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["532"].concat(
        getStops(OSK_Stops, 'JP DARGHA', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["532/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR')
    ),
    ["537"].concat(
        getStops(OSK_Stops_DOWN, 'KODICHERLA', 'PENJERLA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "AFZALGUNJ")
    ),
    ["539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "AFZALGUNJ")
    ),
    ["539/1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["539/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["539/300"].concat(
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "ARAMGHAR"),
        getStops(KSR_SHMB, "BUDVEL STATION", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["546"].concat(
        getStops(OSK_Stops_DOWN, 'BHUVANAGIRI', 'MULKALAPALLY'),
        getStops(OSK_Stops, 'M TURKAPALLY', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'ECIL X ROADS')
    ),
    ["555"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'DILSHUKNAGAR')
    ),
    ["555/290U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["567"].concat(
        getStops(OSK_Stops_DOWN, 'MARKOOK', 'POTHARAM'),
        SHD[1073], SHD[756],
        getStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["568"].concat(
        getStops(OSK_Stops, 'DAMARAKUNTA', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["571T"].concat(
        "THIMMAPUR THANDA", "BOINPALLY X ROADS", "PYARARAM", "SOLIPET", "CHIKATIMAMIDI", "KAZIPET X ROADS", "BOMMALARAMARAM", "PEDHA PARVATHAPURAM", "ANKIREDDYPALLY X ROADS",
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'TARNAKA'),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["578"].concat(
        getStops(OSK_Stops, 'M TURKAPALLY', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'ECIL X ROADS'),
    ),
    ["580"].concat(
        getStops(OSK_Stops, 'YADAGIRIGUTTA', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'TARNAKA'),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["589"].concat(
        getStops(OSK_Stops, 'RAMAYAMPET', 'ATHVELLY'),
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["592"].concat(
        "KANDAWADA", "PALGUTTA",
        getStops(OSK_Stops, 'KANDAWADA X ROADS', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["593"].concat(
        getStops(OSK_Stops, 'CHEVELLA', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),

    // 700 SERIES
    ["702/212"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'WARGAL TEMPLE')
    )
]

function setRoute(routeNoI) {
    starting = "";
    destination = "";
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

        case "3K/251":
            starting = "ECIL X ROADS";
            destination = "SHAMSHABAD";
            break;

        case "3K/252":
            starting = "ECIL X ROADS";
            destination = "RGI AIRPORT";
            break;

        case "3K/281":
            starting = "AFZALGUNJ";
            destination = "GHATKESAR";
            break;

        case "3KC":
            starting = "AFZALGUNJ";
            destination = "CHERLAPALLY";
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

        case "6N/47W":
            starting = "ECIL X ROADS";
            destination = "WAVEROCK";
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

        case "8A/70":
            starting = "SECUNDERABAD";
            destination = "TEEGALA KUNTA";
            break;

        case "8A/67L":
            starting = "SECUNDERABAD";
            destination = "LALITHA BAGH";
            break;

        case "8A/75R":
            starting = "SECUNDERABAD";
            destination = "RAJANNA BHAVI";
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

        case "10KG":
            starting = "SECUNDERABAD";
            destination = "GOKUL PLOTS";
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

        case "17HC":
            starting = "SECUNDERABAD";
            destination = "CHERLAPALLY";
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
            destination = "JBS";;
            break;

        case "18R":
            starting = "RAMANTHAPUR CHURCH CLY";
            destination = "JBS";;
            break;

        case "18V":
            starting = "SECUNDERABAD";
            destination = "VENKATREDDY NAGAR";
            break;

        case "18VJ":
            starting = "VENKATREDDY NAGAR";
            destination = "JBS";;
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

        case "19KG":
            starting = "MEHDIPATNAM";
            destination = "GOKUL PLOTS";
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

        case "20/250C":
            starting = "SECRETARIATE";
            destination = "CHERLAPALLY";
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

        case "24N/219":
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
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
            destination = "AFZALGUNJ"; + "/" + GRD_SS;
            break;

        case "25S/1P":
            starting = "SUCHITRA";
            destination = "AFZALGUNJ"; + "/" + GRD_SS;
            break;

        case "25S/2":
            starting = "SUCHITRA";
            destination = "AFZALGUNJ"; + "/" + GRD_SS;
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

        case "29B/272J":
            starting = "SECUNDERABAD";
            destination = "JNNURM COLONY";
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
            destination = "SRINIVAS NAGAR";
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

        case "47W":
            starting = "SECUNDERABAD";
            destination = "WAVEROCK";
            break;

        case "47W/6N":
            starting = "WAVEROCK";
            destination = "ECIL X ROADS";
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

        // HD67 SERIES
        case "67L/8A":
            starting = "LALITHA BAGH";
            destination = "SECUNDERABAD";
            break;

        // HD70 SERIES
        case "70/8A":
            starting = "TEEGALA KUNTA";
            destination = "SECUNDERABAD";
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

        case "71AC":
            starting = "AFZALGUNJ";
            destination = "CHERLAPALLY STN.";
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

        // HD75 SERIES
        case "75R/8A":
            starting = "RAJANNA BHAVI";
            destination = "SECUNDERABAD";
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

        case "90BK":
            starting = "JBS";
            destination = "KUNTLOOR";
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
            DistanceDown = "16.3";
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
            destination = "JBS";;
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
            destination = "JBS";;
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

        case "147W":
            starting = "ECIL X ROADS";
            destination = "WAVEROCK";
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

        case "201GD":
            starting = "DILSHUKNAGAR";
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
            destination = "JBS";;
            break;

        case "201T/290U":
            starting = "TARAMATIPET";
            destination = "JBS";;
            break;

        // HD202 SERIES
        case "202B":
            starting = "KOTI W.COLLEGE";
            destination = "BRAHMANAPALLY";
            break;

        case "202K/290U":
            starting = "KOHEDA";
            destination = "JBS";;
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
            destination = "JBS";;
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
            destination = "JBS";;
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
            destination = "JBS";;
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

        case "211A":
            starting = "SECUNDERABAD";
            destination = "ALIABAD";
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

        case "216MP":
            starting = "MEHDIPATNAM";
            destination = "PATEL GUDA";
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

        case "217/300":
            starting = "PATANCHEURVU";
            destination = "LB NAGAR";
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

        case "219/24N":
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
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

        case "219P":
            starting = "SECUNDERABAD";
            destination = "PATEL GUDA";
            break;

        // HD220 SERIES
        case "220G":
            starting = "MEHDIPATNAM";
            destination = "GOPULAARAM";
            break;

        case "220K/116":
            starting = "KOLLUR";
            destination = "CBS";
            break;

        case "220K/116N":
            starting = "KOLLUR";
            destination = "KOTI";
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

        case "222P":
            starting = "CBS";
            destination = "LINGAMPALLY MUNICIPAL";
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
            destination = "DILSHUKNAGAR"; + "/" + GRD_SS;
            break;

        case "229/1Z":
            starting = "MEDCHAL";
            destination = "ARAMGHAR"; + "/" + GRD_SS;
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
            // NOT IN USE
            break;

        // HD230 SERIES
        case "230A":
            starting = "SECUNDERABAD";
            destination = "ANNARAM";
            break;

        case "230AB":
            starting = "SECUNDERABAD";
            destination = "BONTHAPALLY";
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

        case "241C":
            starting = "SECUNDERABAD";
            destination = "NARASIMHA SWAMY TEMPLE";
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

        case "250C/20":
            starting = "CHERLAPALLY";
            destination = "SECRETARIATE";
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

        case "251/3K":
            starting = "SHAMSHABAD";
            destination = "ECIL X ROADS";
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
            destination = "JBS";;
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

        case "272J/29B":
            starting = "JNNURM COLONY";
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

        case "277K":
            starting = "KOTI W.COLLEGE";
            destination = "KONGARAKALAN";
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

        case "283RG":
            starting = "SECUNDERABAD";
            destination = "RAJIV GRUHAKALPA";
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

        case "290UJ":
            starting = "JBS";
            destination = "JNNURM COLONY";
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

        case "300/217":
            starting = "LB NAGAR";
            destination = "PATANCHERUVU";
            break;

        case "300/251":
            starting = "UPPAL X ROADS";
            destination = "SHAMSHABAD";
            break;

        case "300/539":
            starting = "SECUNDERABAD";
            destination = "KANHA";
            break;

        case "300A":
            starting = "LB NAGAR";
            destination = "ARAMGHAR";
            break;

        case "300L":
            starting = "MEHDIPATNAM";
            destination = "LB NAGAR";
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

        case "452":
            starting = "AFZALGUNJ";
            destination = "MAHESHWARAM";
            break;

        case "453":
            starting = "AFZALGUNJ";
            destination = "GUDUR";
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
            destination = "JBS";;
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

        case "493":
            starting = "SECUNDERABAD";
            destination = "JAINAPALLY";
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

        case "511":
            starting = "SECUNDERABAD";
            destination = "NARSAPUR";
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

        case "532S":
            starting = "AFZALGUNJ";
            destination = "SIDHDHAPUR";
            break;

        case "532V":
            starting = "AFZALGUNJ";
            destination = "KONDAREDDIPALLY";
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

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDL50nVv09WdGDqPygFgcaV_66j4q159ZI",
    authDomain: "cbwh-ab6d5.firebaseapp.com",
    databaseURL: "https://cbwh-ab6d5-default-rtdb.firebaseio.com",
    projectId: "cbwh-ab6d5",
    storageBucket: "cbwh-ab6d5.appspot.com",
    messagingSenderId: "586373767716",
    appId: "1:586373767716:web:542a4b4754ea628f0ceeb1",
    measurementId: "G-V3TBG9NQ7R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Class to store full bus data
class Bus {
    constructor(routeNo, busNo, depot, route, serviceType, currentStop, nextStop, occupancy, status) {
        this.routeNo = routeNo;
        this.busNo = busNo;
        this.depot = depot;
        this.route = route;
        this.serviceType = serviceType;
        this.currentStop = currentStop;
        this.nextStop = nextStop;
        this.occupancy = occupancy;
        this.status = status;
    }
}

// Store all buses
const buses = {};

// Listen to Realtime Database
db.ref('/').on('value', snapshot => {
    const data = snapshot.val();
    getId('busList').innerHTML = ""; // Clear list before updating

    for (let key in data) {
        const b = data[key];

        // Create Bus instance
        let bus = new Bus(
            b.routeNo || "",
            b.busNo || key,
            b.depot || "",
            b.route || "",
            b.serviceType || "",
            b.currentStop || "",
            b.nextStop || "",
            b.occupancy || "",
            b.status || ""
        );

        // Store for later use
        buses[key] = bus;

        // Create <li> element
        let li = document.createElement('li');
        li.setAttribute("onclick", "openFormUP(this)");
        li.setAttribute("id", key);
        li.innerHTML = `
            <div class="left">
                <p>${bus.routeNo}</p>
            </div>
            <div class="right">
                <p>${bus.serviceType}</p>
                <p>${bus.busNo} - ${bus.depot}</p>
            </div>
        `;

        // Append to list
        getId('busList').appendChild(li);
    }
});

function openFormUP(ref) {
    let key = ref.id;

    let routeNo = getId('routeNo');
    let busNo = getId('busNo');
    let depot = getId('depot');
    let route = getId('route');
    let serviceType = getId('serviceType');
    let currentStop = getId('currentStop');
    let nextStop = getId('nextStop');
    let occupancy = getId('occupancy');
    let status = getId('status');

    getId('form').classList.remove('hide');

    routeNo.value = buses[key].routeNo;
    busNo.value = buses[key].busNo;
    depot.value = buses[key].depot;
    route.value = buses[key].route;
    serviceType.value = buses[key].serviceType;
    currentStop.value = buses[key].currentStop;
    nextStop.value = buses[key].nextStop;
    occupancy.value = buses[key].occupancy;
    status.value = buses[key].status;

    getId('add_UPD_Btn').innerHTML = "UPDATE";

}

function addBusData() {
    let routeNo = getId('routeNo').value;
    let busNo = getId('busNo').value;
    let depot = getId('depot').value;
    let route = getId('route').value;
    let serviceType = getId('serviceType').value;
    let currentStop = getId('currentStop').value;
    let nextStop = getId('nextStop').value;
    let occupancy = getId('occupancy').value;
    let status = getId('status').value;

    let busData = {
        routeNo,
        depot,
        route,
        serviceType,
        currentStop,
        nextStop,
        occupancy,
        status
    };

    const db = firebase.database();
    const key = `${busNo}`; // Use bus number as key
    db.ref(key).set(busData)
        .then(() => {
            getId('form').classList.add('hide');
            if (getId('add_UPD_Btn').innerHTML == "UPDATE") {
                alert("Bus data Updated successfully!");
            } else {
                alert("Bus data added successfully!");
            }
        })
        .catch((error) => {
            console.error("Error adding bus data:", error);
        });

}

function deleteBus() {
    const db = firebase.database();
    let key = getId('busNo').value;

    if (key != "") {
        db.ref(key).remove()
            .then(() => {
                if (buses.hasOwnProperty(key)) {
                    delete buses[key];
                }
                alert(`Bus ${key} deleted successfully from database.`);
                getId('form').classList.add('hide');
            })
            .catch((error) => {
                console.error("Error deleting bus:", error);
                alert("Failed to delete bus. Check console for details.");
            });
    }
}

function openForm() {
    getId('form').classList.remove('hide');
    getId('add_UPD_Btn').innerHTML = "ADD";

    // Reset all Input Fields
    document.querySelectorAll('.info input').forEach(input => input.value = '');

    getId('routeNo').focus();

}

let direction = 0;
let stopNumber = 0;
let fullRouteG;
let routeNumber;
function autoFillOnRoute(ref) {
    routeNumber = ref.value;
    starting = setRoute(routeNumber)[0];
    destination = setRoute(routeNumber)[1];
    if (starting != undefined && destination != undefined) {
        getId('route').value = starting + " - " + destination;
    }
    direction = 0;
    fullRouteG = returnFullRoute(routeNumber);
    stopNumber = 1;
    getId('currentStop').value = fullRouteG[stopNumber];
    getId('nextStop').value = fullRouteG[stopNumber + 1];
}

function swapRoute() {
    let route = getId('route').value;
    if (route == destination + " - " + starting) {
        getId('route').value = starting + " - " + destination;
    } else {
        getId('route').value = destination + " - " + starting;
    }

    if (direction == 0) {
        direction = 1;
    } else {
        direction = 0;
    }

    stopNumber = 1;
    fullRouteG = returnFullRoute(routeNumber);
    getId('currentStop').value = fullRouteG[stopNumber];
    getId('nextStop').value = fullRouteG[stopNumber + 1];
}

function nextStopUpdate() {
    stopNumber++;
    getId('currentStop').value = fullRouteG[stopNumber];
    getId('nextStop').value = fullRouteG[stopNumber + 1];
    let time = getTimeNow();
    if (getId('status').value != "" && getId('status').value.includes("Left")) {
        getId('status').value = "Left " + shdLower[SHD.indexOf(getId("currentStop").value)] + " @ " + time;
    }
}

function returnFullRoute(route) {
    let fullRoute;
    if (direction == 0) {
        fullRoute = DetailedRoutesUP[ReturnIndex(DetailedRoutesUP, route)];
    } else if (direction == 1) {
        fullRoute = DetailedRoutesDOWN[ReturnIndex(DetailedRoutesDOWN, route)];
    }
    return fullRoute;
}

function modifyStatus(ref) {
    let time = getTimeNow();
    if (ref.value == "Left" || ref.value == "left") {
        ref.value = "Left " + shdLower[SHD.indexOf(getId("currentStop").value)] + " @ " + time;
    }
}

function getTimeNow() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const timeWithAmPm = `${hours}:${formattedMinutes} ${ampm}`;

    return timeWithAmPm;
}

function changeStopNumber() {
    stopNumber = fullRouteG.indexOf(getId('currentStop').value);
    getId('currentStop').value = fullRouteG[stopNumber];
    getId('nextStop').value = fullRouteG[stopNumber + 1];
}

function fillDepot(ref) {
    let depotLocal = busDataLocal[1][busDataLocal[0].indexOf(ref.value)]
    let serviceTypeLocal = busDataLocal[2][busDataLocal[0].indexOf(ref.value)]

    if (serviceTypeLocal != undefined) {
        switch (serviceTypeLocal) {
            case "CO":
                serviceTypeLocal = "City Ordinary";
                break;
            case "ME":
                serviceTypeLocal = "Metro Express";
                break;
            case "MD":
                serviceTypeLocal = "Metro Deluxe";
                break;
            case "ECO":
                serviceTypeLocal = "E-City Ordinary";
                break;
            case "EME":
                serviceTypeLocal = "E-Metro Express";
                break;
            case "EML":
                serviceTypeLocal = "E-Metro Luxury (AC)";
                break;

            default:
                break;
        }
    }

    if (depotLocal != undefined && serviceTypeLocal != undefined) {
        getId('depot').value = depotLocal;
        getId('serviceType').value = serviceTypeLocal;
    }
}

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function ReturnIndex(routeArray, route) {
    let i;
    for (i = 0; i < routeArray.length; i++) {
        if (routeArray[i][0] == route) {
            return i;
        }
    }
    return -1;
}



