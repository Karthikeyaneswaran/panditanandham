// IMPCOPS Products Database (Bilingual)
const productsData = [
  {
    "en": "*BRUHADVATHA CHINTHAMANI (TAB) (100 mg)",
    "ta": "*ப்ருஹத்வத சிந்தாமணி (தாவல்) (100 மி.கி.)"
  },
  {
    "en": "*CHATURMUKHA RASA (100 mg)",
    "ta": "*சதுர்முக ராசா (100 மி.கி.)"
  },
  {
    "en": "*GOROCHANADI GUTIKA (TAB)",
    "ta": "*கோரோச்சனடி குடிகா (தாவல்)"
  },
  {
    "en": "*KRAMAVRIDDHALAKSHMIVILASA RASA",
    "ta": "*கிராமவிருத்தலக்ஷ்மிவிலாச ராசா"
  },
  {
    "en": "*KSHYAKULANTHAKAN(GOLD)",
    "ta": "*க்ஷ்யகுலந்தகன் (தங்கம்)"
  },
  {
    "en": "*KUMARA KALYANA RASA (TABLETS) (100 mg)",
    "ta": "*குமார கல்யாண ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "*MAHA SOORYAVARTHI RASA (TAB.) (100 mg)",
    "ta": "*மஹா சூரியவர்த்தி ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "*MAHA VASANTHAKUSUMAKARAM (TAB.) (100 mg)",
    "ta": "*மஹா வசந்தகுசுமகரம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "*MAHALAKSHMI VILASA RASA (POWDER)",
    "ta": "*மஹாலக்ஷ்மி விலாச ராசா (பொடி)"
  },
  {
    "en": "*MAKARADHWAJA SINDURA(GOLD)",
    "ta": "*மகரத்வாஜ சிந்துரா (தங்கம்)"
  },
  {
    "en": "*MAKARADWAJA PILLS (100 mg)",
    "ta": "*மகரத்வாஜா மாத்திரைகள் (100 மி.கி.)"
  },
  {
    "en": "*PANCHABANA RASA (TABLETS) (100 mg)",
    "ta": "*பஞ்சபன ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "*POORNACHANDRODAYAM(GOLD)",
    "ta": "*பூர்ணசந்திரோதயம் (தங்கம்)"
  },
  {
    "en": "*PURANACHANDRODAYAM",
    "ta": "*பூரணசந்திரோதயம்"
  },
  {
    "en": "*S.B.S.MAKARADHWAJA(GOLD)",
    "ta": "*எஸ்.பி.எஸ்.மகரத்வாஜா(தங்கம்)"
  },
  {
    "en": "*SOOTHIKABARANA RASA (TAB.) (50 mg)",
    "ta": "*SOOTHIKABARANA RASA (TAB.) (50 mg)"
  },
  {
    "en": "*SWARNA BHASMA",
    "ta": "* ஸ்வர்ண பாஸ்மா"
  },
  {
    "en": "*SWARNA KRAVYADI RASA",
    "ta": "*ஸ்வர்ண க்ரவ்யாதி ராசா"
  },
  {
    "en": "*SWARNA MUKTADI GUTIKA (TAB.) (50 mg)",
    "ta": "*ஸ்வர்ண முக்தாடி குட்டிகா (தாவல்.) (50 மி.கி.)"
  },
  {
    "en": "*SWARNAKANTHAVALLABHA RASA (POWD)",
    "ta": "*ஸ்வர்ணகாந்தவல்லப ராசா (பொடி)"
  },
  {
    "en": "*SWARNAMALINIVASANTA RASA (PILLS) (100 mg)",
    "ta": "*ஸ்வர்ணமாலினிவாசந்த ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "*SWARNAVATHARAKSHASA (TAB.) (100 mg)",
    "ta": "*SWARNAVATHARAKSHASA (TAB.) (100 mg)"
  },
  {
    "en": "*THANGA PARPAM",
    "ta": "*தங்க பார்ப்பம்"
  },
  {
    "en": "*VASANTHAKUSUMAKARA RASA (TAB.) (100 mg )",
    "ta": "*வசந்தகுசுமகரா ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "*ZSWARNA BHASMA",
    "ta": "*ஸ்வர்ண பாஸ்மா"
  },
  {
    "en": "*ZTHANGA PARPAM",
    "ta": "*ஜ்தங்க பர்பம்"
  },
  {
    "en": "AADIMADHURA CHOORANA CAPSULE (500 mg)",
    "ta": "ஆதிமதுர சூரண காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "ABHAYARISHTA",
    "ta": "அபயரிஷ்டா"
  },
  {
    "en": "ABHRAKA BHASMA (100 PUTAMS)",
    "ta": "அப்ரகா பாஸ்மா (100 பூதம்)"
  },
  {
    "en": "ABHRAKA BHASMA (30 PUTAMS)",
    "ta": "அப்ரகா பாஸ்மா (30 பூதம்)"
  },
  {
    "en": "ABHRAKA CHENDURAM (30 P.)",
    "ta": "அப்ரகா செந்தூரம் (30 பக்.)"
  },
  {
    "en": "ADATHODAI KUDINEER CHOORANAM",
    "ta": "ஆடாதோடை குடிநீர் சூரணம்"
  },
  {
    "en": "ADATHODAI MANAPAGU",
    "ta": "ஆடாதோடை மணப்பாகு"
  },
  {
    "en": "ADATHODAI NEI",
    "ta": "ஆடாதோடை நெய்"
  },
  {
    "en": "ADIMADHURA CHOORANA TABLET (500 mg)",
    "ta": "அடிமதுர சூரண மாத்திரை (500 மிகி)"
  },
  {
    "en": "ADITYA RASA (TABLETS) (100 mg)",
    "ta": "ஆதித்ய ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "AGASTHIYAR KUZHAMBU",
    "ta": "அகஸ்தியர் குழம்பு"
  },
  {
    "en": "AGASTHIYAR KUZHAMBU CAPSULES (250 MG)",
    "ta": "அகஸ்தியர் குழம்பு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "AGASTHYA RASAYANAM",
    "ta": "அகஸ்திய இரசாயனம்"
  },
  {
    "en": "AGNITUNDEEVATI (PILLS) (100 mg)",
    "ta": "அக்னிதுண்டீவதி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "AJAMODARKA",
    "ta": "அஜமோதர்கா"
  },
  {
    "en": "AMAI ODU PARPAM",
    "ta": "அமை ஓடு பார்ப்பம்"
  },
  {
    "en": "AMALAKI CAPSULE (500 mg)",
    "ta": "அமலாகி காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "AMALAKI CHURNAM",
    "ta": "அமலாகி சூர்ணம்"
  },
  {
    "en": "AMALAKI TABLET",
    "ta": "அமலாகி மாத்திரை"
  },
  {
    "en": "AMAVATHA THAILAM",
    "ta": "அமாவத தைலம்"
  },
  {
    "en": "AMIRTHA VENNAI",
    "ta": "அமிர்த வெண்ணை"
  },
  {
    "en": "AMIRTHABHALLATAKA LEHYAM",
    "ta": "அமிர்தபல்லாடக லேஹ்யம்"
  },
  {
    "en": "AMIRTHAPRASA GHIRTHAM",
    "ta": "அ���ிர்தப்ரச கீர்த்தம்"
  },
  {
    "en": "AMIRTHARISHTA",
    "ta": "அமிர்தரிஷ்டா"
  },
  {
    "en": "AMRTOTTARA KASAYAM",
    "ta": "அமர்தோத்தர கசாயம்"
  },
  {
    "en": "AMRTOTTARA KASAYAM CHURNAM",
    "ta": "அம்ர்தோத்தர கசாயம் சூர்ணம்"
  },
  {
    "en": "AMRUTHADI KULIGAI (TAB.) (100 mg)",
    "ta": "அம்ருதடி குளிகை (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "AMUKKARA CH.MATHIRAI (500 mg)",
    "ta": "அமுக்கரா சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "AMUKKARA CHURNAM",
    "ta": "அமுக்கர சூர்ணம்"
  },
  {
    "en": "AMUKKARA LEHYAM",
    "ta": "அமுக்கர லேஹ்யம்"
  },
  {
    "en": "AMUKKARAKIZHANGU CHOORANAM",
    "ta": "அமுக்கரகிழங்கு சூரணம்"
  },
  {
    "en": "ANANDA BHAIRAVA RASA (TAB.) (100 mg)",
    "ta": "ஆனந்த பைரவ ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "ANANDA BHAIRAVAM (TAB.) (100 mg)",
    "ta": "ஆனந்த பைரவம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "ANNABEDHI CHENDOORAM NO.1 MATHIRAI",
    "ta": "அன்னபேதி செந்தூரம் எண்.1 மாதிரை"
  },
  {
    "en": "ANNABHEDI CHENDOORAM NO.1",
    "ta": "அன்னபேடி செந்தூரம் எண்.1"
  },
  {
    "en": "ANNABHEDI CHENDOORAM NO.2",
    "ta": "அன்னபேடி செந்தூரம் எண்.2"
  },
  {
    "en": "ANTAT TAILAM",
    "ta": "ஆண்டட�� தைலம்"
  },
  {
    "en": "ANU THAILAM",
    "ta": "அனு தைலம்"
  },
  {
    "en": "ANU THAILAM (NASYAM) CAPSULES",
    "ta": "அனு தைலம் (நாஸ்யம்) காப்ஸ்யூல்கள்"
  },
  {
    "en": "APARAJITHA DHOOPA CHOORANAM",
    "ta": "அபராஜித தூப சூரணம்"
  },
  {
    "en": "ARAKKU THAILAM",
    "ta": "அரக்கு தைலம்"
  },
  {
    "en": "ARDRAKHANDAVA LEHYAM",
    "ta": "அர்த்ரகாண்டவ லேஹ்யம்"
  },
  {
    "en": "ARIMEDADI THAILAM",
    "ta": "அரிமேடடி தைலம்"
  },
  {
    "en": "ARJUNA CAPSULE (500 mg)",
    "ta": "அர்ஜுனா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "ARJUNA CHURNAM",
    "ta": "அர்ஜுன சூர்ணம்"
  },
  {
    "en": "ARJUNA TABLET",
    "ta": "அர்ஜுனா மாத்திரை"
  },
  {
    "en": "ARJUNARISHTA",
    "ta": "அர்ஜுனரிஷ்டா"
  },
  {
    "en": "AROGYAVARDHANIVATI (500 mg)",
    "ta": "ஆரோக்யவர்த்தனிவதி (500 மி.கி.)"
  },
  {
    "en": "ARUGAN THAILAM",
    "ta": "அருகன் தைலம்"
  },
  {
    "en": "ARUMUGHA CHENDURAM",
    "ta": "ஆறுமுகச் செந்தூரம்"
  },
  {
    "en": "ASANAVILWADI THAILAM",
    "ta": "ஆசனவில்வாடி தைலம்"
  },
  {
    "en": "ASHTA BHAIRAVAM (PILLS) ( 100 mg)",
    "ta": "அஷ்ட பைரவம் (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "ASHTA CHURNAM",
    "ta": "அஷ்ட சூர்ணம்"
  },
  {
    "en": "ASHTAKSHARI GUTIKA (TABLETS) (50 mg)",
    "ta": "அஷ்டக்ஷரி குட்டிகா (மாத்திரைகள்) (50 மி.கி.)"
  },
  {
    "en": "ASHTAVARGA KASAYAM CHURNAM",
    "ta": "அஷ்டவர்க கசாயம் சூர்ணம்"
  },
  {
    "en": "ASOKA GHIRTHAM",
    "ta": "ASOKA GHIRTHAM"
  },
  {
    "en": "ASOKADIVATI (500 mg)",
    "ta": "அசோகதிவடி (500 மி.கி.)"
  },
  {
    "en": "ASOKARISHTA",
    "ta": "ASOKARISHTA"
  },
  {
    "en": "ASWAGANDHA CAPSULE (500 mg)",
    "ta": "அஸ்வகந்தா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "ASWAGANDHA CHURNAM",
    "ta": "அஸ்வகந்தா சூர்ணம்"
  },
  {
    "en": "ASWAGANDHA TABLET (500 mg)",
    "ta": "அஸ்வகந்தா மாத்திரை (500 மிகி)"
  },
  {
    "en": "ASWAGANDHADI LEHYAM",
    "ta": "அஸ்வகந்தாதி லேஹ்யம்"
  },
  {
    "en": "ASWAGANDHARISHTA",
    "ta": "அஸ்வகந்தரிஷ்டா"
  },
  {
    "en": "ATATHOTAI ILAI CHOORANAM",
    "ta": "ஆத்தோடை இலை சூரணம்"
  },
  {
    "en": "ATHIKURUTHI AZHUTHA NOI TABLET (500 mg)",
    "ta": "அத்திகுருதி கழுத்த நொய் மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "ATHIMATHURA CHOORANAM",
    "ta": "அதிமதுர சூரணம்"
  },
  {
    "en": "ATMAGUPTA CAPSULE (500 mg)",
    "ta": "ஆத்மாகுப்தா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "ATMAGUPTA CHURNAM",
    "ta": "ATMAGUPTA CHURNAM"
  },
  {
    "en": "ATMAGUPTA TABLET",
    "ta": "ATMAGUPTA TABLET"
  },
  {
    "en": "ATUNTINTAPALAI ILAI CHOORANAM",
    "ta": "அடுந்தின்பலை இலை சூரணம்"
  },
  {
    "en": "ATUTINTAPALAI ILAI CHOORANAM",
    "ta": "அடுதிண்டபாளை இலை சூரணம்"
  },
  {
    "en": "AVALGUJADI LEPAM",
    "ta": "AVALGUJADI LEPAM"
  },
  {
    "en": "AVARAI KUDINEER CHOORNAM",
    "ta": "AVARAI KUDINEER CHOORNAM"
  },
  {
    "en": "AVIPATHIKARA CHURNAM",
    "ta": "அவிபதிகார சூர்ணம்"
  },
  {
    "en": "AVIPATHIKARA CHURNAM MATHIRAI (500 mg)",
    "ta": "ஆவிபதிகார சூர்ணம் மாதிரி (500 மி.கி.)"
  },
  {
    "en": "AVURI CHOORANAM",
    "ta": "அவ்வூரி சூரணம்"
  },
  {
    "en": "AYA BHRINGARAJA KARPAM",
    "ta": "AYA BHRINGARAJA KARPAM"
  },
  {
    "en": "AYA CHENDURAM",
    "ta": "AYA CHENDURAM"
  },
  {
    "en": "AYAC CENTURAM TABLET",
    "ta": "அயாக் செந்தூரம் மாத்திரை"
  },
  {
    "en": "AYAKANTHA CHENDURAM NO.1",
    "ta": "அயகாந்த செந்தூரம் எண்.1"
  },
  {
    "en": "AYAKANTHA CHENDURAM NO.2",
    "ta": "அயகாந்த செந்தூரம் எண்.2"
  },
  {
    "en": "AYAVEERA CHENDOORAM",
    "ta": "AYAVEERA CHENDOORAM"
  },
  {
    "en": "AYUSH KUDINEER CHOORANAM",
    "ta": "ஆயுஷ் குடிநீர் சூரணம்"
  },
  {
    "en": "AYUSH KUDINEER TABLET (500 mg)",
    "ta": "ஆயுஷ் குடிநீர் மாத்திரை (500 மிகி)"
  },
  {
    "en": "AYUSH KWATH CHOORANAM",
    "ta": "AYUSH KWATH CHOORANAM"
  },
  {
    "en": "AYUSH KWATH TABLET (500 mg)",
    "ta": "ஆயுஷ் குவாத் மாத்திரை (500 மிகி)"
  },
  {
    "en": "BABBULARISHTA",
    "ta": "பப்புலரிஷ்டா"
  },
  {
    "en": "BAHUSALA GUDAM",
    "ta": "BAHUSALA GUDAM"
  },
  {
    "en": "BALAGUDOOCHYADI THAILAM",
    "ta": "பாலகுடூச்சியாடி தைலம்"
  },
  {
    "en": "BALAJIRAKADI KASAYAM CHURNAM",
    "ta": "பாலாஜிரகடி கசாயம் சூர்ணம்"
  },
  {
    "en": "BALARISHTA",
    "ta": "பாலாரிஷ்டா"
  },
  {
    "en": "BALASANJEEVI MATHIRAI (100 mg)",
    "ta": "பாலசஞ்சீவி மாதிரி (100 மி.கி.)"
  },
  {
    "en": "BALASOORYODAYA RASA (TABLETS) (100 mg)",
    "ta": "பாலசூரியோதயா ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "BALASWAGANDHADI THAILAM",
    "ta": "BALASWAGANDHADI THAILAM"
  },
  {
    "en": "BHALLATAKAVATI (200 mg)",
    "ta": "பல்லடகாவதி (200 மி.கி.)"
  },
  {
    "en": "BHARANGYATHI KWATHA CHURNAM",
    "ta": "பரங்க்யதி க்வத சூர்ணம்"
  },
  {
    "en": "BHASKARALAVANA CHURNAM",
    "ta": "பாஸ்கரலாவண சூர்ணம்"
  },
  {
    "en": "BHASKARALAVANAM",
    "ta": "பாஸ்கரலாவனம்"
  },
  {
    "en": "BHAVANAKADUKKAI",
    "ta": "பவனகடுக்கை"
  },
  {
    "en": "BHEDIJWARANKUSA RASA (PILLS) (100 mg)",
    "ta": "பேதிஜ்வரங்குசா ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "BHOONAGA THAILAM",
    "ta": "பூனக தைலம்"
  },
  {
    "en": "BHRINGARAJASAVA",
    "ta": "பிரிங்கராஜாசவா"
  },
  {
    "en": "BILWADI GUTIKA (500 mg)",
    "ta": "பில்வாடி குட்டிகா (500 மிகி)"
  },
  {
    "en": "BILWADI LEHYAM",
    "ta": "பில்வாடி லேஹ்யம்"
  },
  {
    "en": "BRAHMANANDA BHAIRAVAM (TAB.) (100 MG)",
    "ta": "பிரம்மானந்த பைரவம் (தாவல்.) (100 மிகி)"
  },
  {
    "en": "BRAHMI CHURNAM",
    "ta": "பிராமி சூர்ணம்"
  },
  {
    "en": "BRAHMI GHIRTHAM",
    "ta": "பிராமி கீர்த்தம்"
  },
  {
    "en": "BRAHMI TABLET",
    "ta": "பிராமி மாத்திரை"
  },
  {
    "en": "BRAHMI THAILAM",
    "ta": "பிராமி தைலம்"
  },
  {
    "en": "BRIHACCHAGALADYAM GHIRTHAM",
    "ta": "বৃஹச்சகலদ்யம் গீர்தம்"
  },
  {
    "en": "BRINGAMALAKA THAILAM",
    "ta": "பிருங்கமலக தைலம்"
  },
  {
    "en": "CADIMADHURA CHOORANA CAPSULE (500 mg)",
    "ta": "காடிமதுர சூரணா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "CBRAHMI CAPSULE",
    "ta": "சிபிராமி காப்ஸ்யூல்"
  },
  {
    "en": "CHANDAMARUTHA CHENDURAM",
    "ta": "சண்டமாருத செந்தூரம்"
  },
  {
    "en": "CHANDANADI THAILAM",
    "ta": "சந்தாநதி தைலம்"
  },
  {
    "en": "CHANDANADIVATI-PILLS (200 mg)",
    "ta": "சந்தனாதிவடி மாத்திரைகள் (200 மி.கி.)"
  },
  {
    "en": "CHANDANASAVA",
    "ta": "சந்தனசவா"
  },
  {
    "en": "CHANDRAKALA LEPAM",
    "ta": "சந்திரகலா லெபம்"
  },
  {
    "en": "CHANDRAKANTHI CHOORANAM",
    "ta": "சந்திரகாந்தி சூரணம்"
  },
  {
    "en": "CHANDRAPRABHAVATI (500 mg)",
    "ta": "சந்திரபிரபாவதி (500 மி.கி.)"
  },
  {
    "en": "CHANDRODAYAVARTHI",
    "ta": "சந்திரோதயவர்த்தி"
  },
  {
    "en": "CHITHRAMOOLA THAILAM",
    "ta": "சித்திரமூல தைலம்"
  },
  {
    "en": "CHITHTHARA MOOLATHI KULIGAI",
    "ta": "சித்தர மூலத்தி குளிகை"
  },
  {
    "en": "CHITHTHARA MOOLATHI KULIGAI (100 mg)",
    "ta": "சித்தர மூலத்தி குளிகை (100 மி.கி.)"
  },
  {
    "en": "CHITRAKA GUTIKA (500 mg)",
    "ta": "சித்ரகா குட்டிகா (500 மி.கி.)"
  },
  {
    "en": "CHITRAMUTTI MADAKKU THAILAM",
    "ta": "சித்திரமுட்டி மடக்கு தைலம்"
  },
  {
    "en": "CHITRAMUTTI THAILAM",
    "ta": "சித்திரமுட்டி தைலம்"
  },
  {
    "en": "CHUKKU THAILAM",
    "ta": "சுக்கு தைலம்"
  },
  {
    "en": "CHUNDAIVATRAL CHURNAM",
    "ta": "சுண்டீவத்திரள் சூர்ணம்"
  },
  {
    "en": "CHYAVANAPRASA LEHYAM",
    "ta": "ச்யவனப்ரஸா லேஹ்யம்"
  },
  {
    "en": "CHYAVANAPRASA TABLET (500 mg)",
    "ta": "சியாவனப்ராசா மாத்திரை (500 மிகி)"
  },
  {
    "en": "CILACATTU PARPAM",
    "ta": "சிலக்காட்டு பார்ப்பம்"
  },
  {
    "en": "CILACATTU PARPAM TABLET (100 mg)",
    "ta": "சிலக்காட்டு பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "CIMBURAL CHOORANAM CAPSULE (500 mg)",
    "ta": "சிம்புரல் சூரணம் காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "CINTHIL CHOORANAM",
    "ta": "சிந்தில் சூரணம்"
  },
  {
    "en": "CIRATTAIT TAILAM",
    "ta": "சிரட்டைத் தைலம்"
  },
  {
    "en": "CIROPARA NIVARANI TAILAM",
    "ta": "சிரோபரா நிவாரணி தைலம்"
  },
  {
    "en": "CIRUKURINCANVER CHOORANAM",
    "ta": "சிறுகுறிஞ்சன்வேர் சூரணம்"
  },
  {
    "en": "CIRUTEKKU CHOORANAM",
    "ta": "சிறுதேக்கு சூரணம்"
  },
  {
    "en": "CKANDANKATHIRI CHOORANAM CAPSULE (500 mg)",
    "ta": "கண்டங்கத்திரி சூரணம் காப்ஸ்யூல் (500 மி.கி.)"
  },
  {
    "en": "CKEEZHKKAI NELLI CHOORANAM CAPSULE (500 mg)",
    "ta": "சீக்கை நெல்லி சூரணம் காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "CSIGRU CAPSULE",
    "ta": "CSIGRU காப்ஸ்யூல்"
  },
  {
    "en": "DADIMASHTAKA CH.MATHIRAI (500 mg)",
    "ta": "தாடிமாஷ்டகா சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "DADIMASHTAKA CHURNAM",
    "ta": "தாடிமாஷ்டக சூர்ணம்"
  },
  {
    "en": "DANTA DHAVANA CHURNAM",
    "ta": "தந்த தவண சூர்ணம்"
  },
  {
    "en": "DANTADAVANA CHURNAM",
    "ta": "தண்டாதவன சூர்ணம்"
  },
  {
    "en": "DASAMOOLARISHTA",
    "ta": "தசமூலரிஷ்டா"
  },
  {
    "en": "DASAMULA HAREETHAKI",
    "ta": "தாசமுலா ஹரீதகி"
  },
  {
    "en": "DASAMULA KATUTRAYADI KWA.CHURNAM",
    "ta": "தசமுல கடுத்ரயாடி குவா.சூர்ணம்"
  },
  {
    "en": "DASAMULA KWATHA CHURNAM",
    "ta": "தசமுல குவாதா சூர்ணம்"
  },
  {
    "en": "DASAMULAKATUTRAYA KASAYAM",
    "ta": "தாஸமுலகதுத்ராய கசாயம்"
  },
  {
    "en": "DASAMULAKATUTRAYA KASAYAM CHURNAM",
    "ta": "தாஸமுலகடுத்ராய கசாயம் சூர்ணம்"
  },
  {
    "en": "DHANVANTARA GUTIKA (PILLS) (50 mg)",
    "ta": "தன்வந்தர குடிகா (மாத்திரைகள்) (50 மிகி)"
  },
  {
    "en": "DHANVANTARA THAILAM",
    "ta": "தன்வந்தர தைலம்"
  },
  {
    "en": "DHANVANTARA THAILAM (101 TIMES)",
    "ta": "தன்வந்தர தைலம் (101 முறை)"
  },
  {
    "en": "DHANVANTHRA THAILAM (101) CAPSULES",
    "ta": "தன்வந்த்ர தைலம் (101) காப்ஸ்யூல்கள்"
  },
  {
    "en": "DHATREE LOHAM (500 MG)",
    "ta": "தாத்ரீ லோஹம் (500 மிகி)"
  },
  {
    "en": "DHATREE THAILAM",
    "ta": "தாத்ரீ தைலம்"
  },
  {
    "en": "DINESHVALYADI THAILAM",
    "ta": "தினேஷ்வல்யாடி தைலம்"
  },
  {
    "en": "DOORVADI THAILAM",
    "ta": "தூர்வாடி தைலம்"
  },
  {
    "en": "DRAKSHADI CH. MATHIRAI (500 mg)",
    "ta": "திராக்ஷாடி சிஎச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "DRAKSHADI CHURNAM",
    "ta": "திராக்ஷாதி சூர்ணம்"
  },
  {
    "en": "DRAKSHADI CHURNAM (AY)",
    "ta": "திராக்ஷாதி சூர்ணம் (ஏய்)"
  },
  {
    "en": "DRAKSHADI CHURNAM.TAB. (500 mg)",
    "ta": "திராக்ஷாதி சூர்ணம்.தாவல். (500 மிகி)"
  },
  {
    "en": "DRAKSHADI KASAYAM CHURNAM",
    "ta": "திராக்ஷாதி கசாயம் சூர்ணம்"
  },
  {
    "en": "DRAKSHADI LEHYAM",
    "ta": "திராக்ஷாதி லேஹ்யம்"
  },
  {
    "en": "DRAKSHARISHTA NO.I",
    "ta": "திராக்ஷரிஷ்டா எண்.I"
  },
  {
    "en": "DRAKSHARISHTA NO.II",
    "ta": "திராக்ஷரிஷ்டா எண்.II"
  },
  {
    "en": "DUGUDAVATI (TABLETS) (50 mg)",
    "ta": "துகுடாவதி (மாத்திரைகள்) (50 மிகி)"
  },
  {
    "en": "EADIMADHURA CHOORANA CAPSULE (500 mg)",
    "ta": "எடிமதுர சூரணா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "EKAGUNA SINDURA (RASA SINDURA)",
    "ta": "ஏககுண சிந்துரா (ராச சிந்துரா)"
  },
  {
    "en": "ELADHI CHURNAM",
    "ta": "ஏலாதி சூர்ணம்"
  },
  {
    "en": "ELADI CH. MATHIRAI (500 mg)",
    "ta": "எலடி சி.எச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "ELADI CHURNAM [AY]",
    "ta": "ஏலடி சூர்ணம் [ஏ]"
  },
  {
    "en": "ELATHI MATHIRAI (500 mg)",
    "ta": "ஏலத்தி மாதிரி (500 மி.கி.)"
  },
  {
    "en": "EMATHANDA KULIGAI",
    "ta": "ஏமதாண்டா குளிகை"
  },
  {
    "en": "EMATHANDA KULIGAI pills (100 mg)",
    "ta": "ஏமதாண்டா குளிகை மாத்திரைகள் (100 மி.கி.)"
  },
  {
    "en": "ERAIPU ERUMAL NOI TABLET (500 mg)",
    "ta": "எரிபு எருமல் நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "ERIGUNMA NOI TABLET (500 mg)",
    "ta": "எரிகுன்மா நோய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "ESIGRU CAPSULE",
    "ta": "ஈசிக்ரு காப்ஸ்யூல்"
  },
  {
    "en": "FADIMADHURA CHOORANA CAPSULE (500 mg)",
    "ta": "ஃபாடிமதுரா சூரணா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "GANDHAKA MATHIRAI (PILLS) (100 MG)",
    "ta": "கந்தக மாதிரி (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "GANDHAKA PARPAM",
    "ta": "கந்தகப் பார்வை"
  },
  {
    "en": "GANDHAKA RASAYANAM",
    "ta": "கந்தக இரசாயனம்"
  },
  {
    "en": "GANDHAKA RASAYANAM (AY)",
    "ta": "கந்தக இரசாயனம் (ஏய்)"
  },
  {
    "en": "GANDHAKA THAILAM",
    "ta": "கந்தக தைலம்"
  },
  {
    "en": "GANDHAKASUDAR THAILAM",
    "ta": "கந்தகாசுடர் தைலம்"
  },
  {
    "en": "GANDHARVAHASTADI KWATHA CHURNAM",
    "ta": "கந்தர்வஹஸ்தாதி க்வத சூர்ணம்"
  },
  {
    "en": "GANGADHARA CH.MATHIRAI (500 mg)",
    "ta": "கங்காதாரா சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "GANGADHARA CHURNAM",
    "ta": "கங்காதர சூர்ணம்"
  },
  {
    "en": "GARUDAN KIZHANGU ENNAI",
    "ta": "கருடன் கிழங்கு என்னை"
  },
  {
    "en": "GENDHI MEZHUGU",
    "ta": "கெந்தி மேழுகு"
  },
  {
    "en": "GENTHI MEZHUGU CAPSULES (250 MG)",
    "ta": "கெந்தி மெழுகு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "GOKSHURADI CHURNAM",
    "ta": "கோக்ஷுராதி சூர்ணம்"
  },
  {
    "en": "GOKSHURADI GUGGULU (500 mg)",
    "ta": "கோக்ஷுரடி குங்குலு (500 மி.கி.)"
  },
  {
    "en": "GOROJANAI MATHIRAI (TAB.) (100 mg)",
    "ta": "கோரோஜனை ம���திரி (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "GOWRI CHINTHAMANI",
    "ta": "கௌரி சிந்தாமணி"
  },
  {
    "en": "GUDOOCHEE SATWAM",
    "ta": "குடோச்சீ சத்வம்"
  },
  {
    "en": "GULUCHYADI KASAYAM CHURNAM",
    "ta": "குலுச்யாதி கசாயம் சூர்ணம்"
  },
  {
    "en": "GUNMAGUDORI",
    "ta": "குன்மகுடோரி"
  },
  {
    "en": "HARIDRA CAPSULE (500 mg)",
    "ta": "ஹரித்ரா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "HARIDRA CHURNAM",
    "ta": "ஹரித்ரா சூர்ணம்"
  },
  {
    "en": "HARIDRA TABLET",
    "ta": "ஹரித்ரா மாத்திரை"
  },
  {
    "en": "HINGUTHRIGUNA THAILAM",
    "ta": "ஹிங்குத்ரிகுண தைலம்"
  },
  {
    "en": "HONEY (AGMARK)",
    "ta": "தேன் (அக்மார்க்)"
  },
  {
    "en": "IBRAHMI CAPSULE",
    "ta": "இப்ராமி காப்ஸ்யூல்"
  },
  {
    "en": "IDIVALLATHI",
    "ta": "இடிவல்லதி"
  },
  {
    "en": "ILAVANGATHI CHOORANAM",
    "ta": "இளவங்காதி சூரணம்"
  },
  {
    "en": "IMBURAL CHOORANAM",
    "ta": "இம்புரல் சூரணம்"
  },
  {
    "en": "IMBURAL CHOORANAM TABLET (500 mg)",
    "ta": "இம்புரல் சூரணம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "IMBURAL LEHYAM",
    "ta": "இம்புரல் லேஹ்யம்"
  },
  {
    "en": "IMPCOPS ASWAGANDHA HERBAL TEA",
    "ta": "இம்ப்காப்ஸ் அஸ்வகந்தா ஹெர்பல் டீ"
  },
  {
    "en": "IMPCOPS BHRINGA HERBAL TEA",
    "ta": "இம்ப்காப்ஸ் பிரிங்கா ஹெர்பல் டீ"
  },
  {
    "en": "IMPCOPS CHAMOMILE HERBAL TEA",
    "ta": "IMPCOPS கெமோமில் ஹெர்பல் டீ"
  },
  {
    "en": "IMPCOPS GARCINIA HERBAL TEA",
    "ta": "இம்ப்காப்ஸ் கார்சீனியா ஹெர்பல் டீ"
  },
  {
    "en": "IMPCOPS KAIYAN KARPAM CHOORANAM",
    "ta": "IMPCOPS கையன் கற்பம் சூரணம்"
  },
  {
    "en": "IMPCOPS KARBAKANDHI ENNAI",
    "ta": "இம்ப்காப்ஸ் கற்பகந்தி என்னை"
  },
  {
    "en": "IMPCOPS KULIYAL CHOORANAM",
    "ta": "IMPCOPS குளியல் சூரணம்"
  },
  {
    "en": "IMPCOPS MADHUMEGA CHOORANAM",
    "ta": "இம்காப்ஸ் மதுமேகா சூரணம்"
  },
  {
    "en": "IMPCOPS MUPPALAI KARPAM CHOORANAM",
    "ta": "இம்காப்ஸ் முப்பாலை கற்பம் சூரணம்"
  },
  {
    "en": "IMPCOPS NILAVEMBU CARICA TABLET (500 mg)",
    "ta": "இம்ப்காப்ஸ் நிலவேம்பு கரிகா மாத்திரை (500 மிகி)"
  },
  {
    "en": "IMPCOPS PAIN BALM",
    "ta": "IMPCOPS வலி தைலம்"
  },
  {
    "en": "IMPCOPS PAIN BALM DOUBLE STRONG",
    "ta": "IMPCOPS வலி தைலம் இரட்டை வலுவான"
  },
  {
    "en": "IMPCOPS PAIN RELIEF ROLL ON",
    "ta": "IMPCOPS வலி நிவாரண ரோல் ஆன்"
  },
  {
    "en": "IMPCOPS THULSI HERBAL TEA",
    "ta": "இம்ப்காப்ஸ் துளசி மூலிகை தேநீர்"
  },
  {
    "en": "IMPCOPS THUTHUVALAI LEGIYAM",
    "ta": "இம்காப்ஸ் தூதுவளை லேகியம்"
  },
  {
    "en": "IMPCOPS URAI MAATHIRAI (100 mg)",
    "ta": "IMPCOPS URAI MAATHIRAI (100 mg)"
  },
  {
    "en": "IMPCOPS VETPALAI KARUNSEERAGA THAILAM",
    "ta": "இம்காப்ஸ் வேட்பாளை கருஞ்சீரக தைலம்"
  },
  {
    "en": "IMPOORAL VADAGAM TABLET (500 mg)",
    "ta": "இம்பூரல் வடகம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "INDUKAANTAM KASAYA CHURNAM",
    "ta": "இந்துகாந்தம் கசாய சூர்ணம்"
  },
  {
    "en": "INDUKANTHA GHIRTHAM",
    "ta": "இந்துகாந்த கீர்த்தம்"
  },
  {
    "en": "INJI CHURNAM",
    "ta": "இஞ்சி சூர்னம்"
  },
  {
    "en": "INJI LEHYAM",
    "ta": "இன்ஜி லேஹ்யம்"
  },
  {
    "en": "INJI RASAYANAM",
    "ta": "இஞ்சி ரசாயனம்"
  },
  {
    "en": "INJI VATAGAM",
    "ta": "இஞ்சி வட்டகம்"
  },
  {
    "en": "IRUNELLI KARPAM",
    "ta": "இருநெல்லி கற்பம்"
  },
  {
    "en": "ITCHABHEDI RASA (PILLS) (100 mg)",
    "ta": "இட்சபேதி ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "JALAMANJARI",
    "ta": "ஜலமஞ்சரி"
  },
  {
    "en": "JALOTHARIMANI (PILLS) (100 mg)",
    "ta": "ஜலோதரிமணி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "JAMBEERADI PANAKKAM",
    "ta": "ஜம்பீரடி பணக்கம்"
  },
  {
    "en": "JAPAPATHRIYADI THAILAM",
    "ta": "ஜபபத்ரியாதி தைலம்"
  },
  {
    "en": "JASADA BHASMA",
    "ta": "ஜசதா பாஸ்மா"
  },
  {
    "en": "JATHEEPHALADI CH.MATHIRAI (500 mg)",
    "ta": "ஜதீபாலடி சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "JATHEEPHALADI CHURNAM",
    "ta": "ஜதீபலடி சூர்ணம்"
  },
  {
    "en": "JATHI JAMBEERA KUZHAMBU",
    "ta": "ஜாதி ஜம்பீர குழம்பு"
  },
  {
    "en": "JATHYADI GHIRTHAM",
    "ta": "ஜாத்யாதி கீர்த்தம்"
  },
  {
    "en": "JEERAKA BILWADI LEHYAM",
    "ta": "ஜீரக பில்வாடி லேஹ்யம்"
  },
  {
    "en": "JEERAKA CHURNAM",
    "ta": "ஜீரக சூர்ணம்"
  },
  {
    "en": "JEERAKADI RASAYANAM",
    "ta": "ஜீரகடி இரசாயனம்"
  },
  {
    "en": "JEERAKADYARISHTA",
    "ta": "ஜீரகத்யரிஷ்டா"
  },
  {
    "en": "JWARAMURARI (TABLETS) (100 mg)",
    "ta": "ஜ்வ���முராரி (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "JWARANKUSA RASA (TABLETS) (100 mg)",
    "ta": "ஜ்வரங்குசா ராசா (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "KABANGUSA CHOORANAM",
    "ta": "கபாங்குச சூரணம்"
  },
  {
    "en": "KABHAJWARA KUDINEER",
    "ta": "கபஜ்வர குடிநீர்"
  },
  {
    "en": "KADIKARA CHENDURAM",
    "ta": "கடிகார செந்தூரம்"
  },
  {
    "en": "KADUKKAI CHOORANAM TABLET (500 mg)",
    "ta": "கடுக்காய் சூரணம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "KADUKKAY CHOORANAM",
    "ta": "கடுக்காய் சூரணம்"
  },
  {
    "en": "KAISORA GUGGULU (500 mg)",
    "ta": "கைசோரா குங்குலு (500 மிகி)"
  },
  {
    "en": "KAIYAN THAILAM",
    "ta": "கையன் தைலம்"
  },
  {
    "en": "KAKKANA MATHIRAI (PILLS) (100 mg)",
    "ta": "கக்கண மாதிரி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "KAKKUVAN MARUNDU",
    "ta": "காக்குவன் மருந்து"
  },
  {
    "en": "KALADAIPU NOI TABLET (500 mg)",
    "ta": "கலடைபு நொய் மாத��திரை (500 மிகி)"
  },
  {
    "en": "KALADAIPU NOIKUDINEER CHOORANAM",
    "ta": "காலடைப்பு நோய்க்குடிநீர் சூரணம்"
  },
  {
    "en": "KALANJAGA PADAI TABLET (500 mg)",
    "ta": "கலஞ்சக படை மாத்திரை (500 மிகி)"
  },
  {
    "en": "KALARCIC CHURNAM",
    "ta": "கலர்சிச் சூர்ணம்"
  },
  {
    "en": "KALNAR PARPAM",
    "ta": "கல்னார் பர்பம்"
  },
  {
    "en": "KALNAR PARPAM TABLET (100 mg)",
    "ta": "கல்னார் பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "KALYANAKA GHIRTHAM",
    "ta": "கல்யாணக கீர்த்தம்"
  },
  {
    "en": "KALYANAKA KSHARAM",
    "ta": "கல்யாணகா க்ஷரம்"
  },
  {
    "en": "KAMADUGHA RASA (TABLETS) (100 mg)",
    "ta": "கமதுகா ராசா (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "KAMALAI NOI TABLET (500 mg)",
    "ta": "கமலை நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "KANAKASAVA",
    "ta": "கனகசவா"
  },
  {
    "en": "KANCHANARA GUGGULU (500 mg)",
    "ta": "காஞ்சனாரா குங்குலு (500 மி.கி.)"
  },
  {
    "en": "KANDANKATHIRI CHOORANAM TABLET (500 mg)",
    "ta": "கண்டங்கத்திரி சூரணம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "KANDANKATHTHIRI CHOORANAM",
    "ta": "கந்தன்கத்திரி சூரணம்"
  },
  {
    "en": "KANTAKARI TABLETS (500 mg)",
    "ta": "கந்தகாரி மாத்தி���ைகள் (500 மிகி)"
  },
  {
    "en": "KANTHA BHASMA",
    "ta": "காந்த பாஸ்மா"
  },
  {
    "en": "KANTHA CHENDURAM",
    "ta": "காந்த செந்தூரம்"
  },
  {
    "en": "KANTHAVALLABHA RASA (POWDER)",
    "ta": "கந்தவல்லப ராசா (பொடி)"
  },
  {
    "en": "KAPADA MATHIRAI (TAB.) (100 mg)",
    "ta": "கபட மாதிரி (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "KARAPPAN THAILAM",
    "ta": "கரப்பன் தைலம்"
  },
  {
    "en": "KARBOGI PASAI",
    "ta": "கார்போகி பாசை"
  },
  {
    "en": "KARISALAI LEHYAM",
    "ta": "கரிசாலை லேஹ்யம்"
  },
  {
    "en": "KARISALAI NEI",
    "ta": "கரிசாலை நெய்"
  },
  {
    "en": "KARPASASTHYADI THAILAM",
    "ta": "கர்பசாஸ்தியாதி தைலம்"
  },
  {
    "en": "KARPOORADI RASA (TABLETS) (100 mg)",
    "ta": "கற்பூரடி ராசா (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "KARPOORADYARKA",
    "ta": "கற்பூரத்யார்கா"
  },
  {
    "en": "KARPURA SILASATHU BHASMA",
    "ta": "கற்பூர சைலசத்து பாஸ்மா"
  },
  {
    "en": "KARPURADI CH. MATHIRAI (500 mg)",
    "ta": "கற்பூரடி சி.எச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "KARPURADI CHURNAM",
    "ta": "கற்பூரடி சூரணம்"
  },
  {
    "en": "KARPURADI CHURNAM TABLET",
    "ta": "கற்பூரடி சூர்ணம் மாத்திரை"
  },
  {
    "en": "KARPURADI THAILAM",
    "ta": "கற்பூரடி தைலம்"
  },
  {
    "en": "KARUNAI ILAKAM",
    "ta": "கருணை உலகம்"
  },
  {
    "en": "KARUNCIRAKAM CHOORANAM",
    "ta": "கருஞ்சிரகம் சூரணம்"
  },
  {
    "en": "KARUPPU VISHNU CHAKKRAM tab (100 mg)",
    "ta": "கருப்பு விஷ்ணு சக்கரம் தாவல் (100 மி.கி.)"
  },
  {
    "en": "KARUVANGA PARPAM",
    "ta": "கருவாங்க பார்ப்பம்"
  },
  {
    "en": "KASSESA BHASMA",
    "ta": "கஸ்ஸேச பஸ்மா"
  },
  {
    "en": "KASTHURI KARUPPU",
    "ta": "கஸ்தூரி கருப்பு"
  },
  {
    "en": "KASTHURI MATHIRAI (PILLS)",
    "ta": "கஸ்தூரி மாதிரி (மாத்திரைகள்)"
  },
  {
    "en": "KASTHURI MATRALU (TABLETS) (50 mg)",
    "ta": "கஸ்தூரி மெட்ராலு (மாத்திரைகள்) (50 மிகி)"
  },
  {
    "en": "KASTOORYADI GUTIKA (PILLS) (100 mg)",
    "ta": "கஸ்தூரியாடி குடிகா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "KAZHARCHI THAILAM",
    "ta": "கஜார்ச்சி தைலம்"
  },
  {
    "en": "KEEZHKKAI NELLI CHOORANAM",
    "ta": "கீழக்கை நெல்லி சூரணம்"
  },
  {
    "en": "KEEZHKKAINELLI CHOORANAM TABLET (500 mg)",
    "ta": "கீழ்க்கைனெல்லி சூரணம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "KESARI LEHYAM",
    "ta": "கேசரி லேஹ்யம்"
  },
  {
    "en": "KHADIRARISHTA",
    "ta": "கதிரரிஷ்டா"
  },
  {
    "en": "KILINJAL MEZHUGU",
    "ta": "கிளிஞ்சல் மேழுகு"
  },
  {
    "en": "KIRATHARISHTA",
    "ta": "கிரதரிஷ்டா"
  },
  {
    "en": "KOOSHMANDA LEHYAM",
    "ta": "கூஷ்மாண்ட லேஹ்யம்"
  },
  {
    "en": "KOTTAMCHUKKADI CHURNAM",
    "ta": "கொட்டம்சுக்கடி சூர்ணம்"
  },
  {
    "en": "KOTTAMCHUKKADI THAILAM",
    "ta": "கொட்டம்சுக்கடி தைலம்"
  },
  {
    "en": "KOVAI ILAI CHOORANAM",
    "ta": "கோவை இலை சூரணம்"
  },
  {
    "en": "KOWSIGAR KUZHAMBU",
    "ta": "கவுசிகர் குழம்பு"
  },
  {
    "en": "KOWSIGAR KUZHAMBU CAPSULES (250 MG)",
    "ta": "கவுசிகர் குழம்பு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "KRAVYADI RASA",
    "ta": "க்ரவ்யாதி ராசா"
  },
  {
    "en": "KRIMIMUDGARA RASA",
    "ta": "கிரிமிமுத்கர ராசா"
  },
  {
    "en": "KSHARA THAILAM",
    "ta": "க்ஷர தைலம்"
  },
  {
    "en": "KSHEERABALA THAILAM (ORDINARY)",
    "ta": "க்ஷீரபால தைலம் (சாதாரண)"
  },
  {
    "en": "KSHEERABALA THAILAM(101 TIMES)",
    "ta": "க்ஷீரபால தைலம் (101 முறை)"
  },
  {
    "en": "KSHEERABALA THAILAM(28 TIMES)",
    "ta": "க்ஷீரபால தைலம் (28 முறை)"
  },
  {
    "en": "KSHEERABALA THAILAM(7 TIMES)",
    "ta": "க்ஷீரபால தைலம் (7 முறை)"
  },
  {
    "en": "KUMARI LEGIYAM",
    "ta": "குமரி லேகியம்"
  },
  {
    "en": "KUMARYASAVA",
    "ta": "குமார்யாசவா"
  },
  {
    "en": "KUMMATTI MEZHUGU",
    "ta": "கும்மட்டி மேழுகு"
  },
  {
    "en": "KUNGILIYA PARPAM",
    "ta": "குங்கிலிய பார்ப்பம்"
  },
  {
    "en": "KUNGILIYA VENNAI",
    "ta": "குங்கிலிய வெண்ணை"
  },
  {
    "en": "KUNGUMAPOO MATHIRAI (TAB.)",
    "ta": "குங்குமபூ மாதிரி (தாவல்.)"
  },
  {
    "en": "KUNGUMAPOO MATHIRAI (TAB.) (100 mg)",
    "ta": "குங்குமப்பூ மாதிரி (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "KUNKILIYA PARPAM TABLET (100 mg)",
    "ta": "குங்கிலியா பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "KUNKUMADI LEPAM",
    "ta": "குங்குமடி லெபம்"
  },
  {
    "en": "KUNTARIKA TAILAM",
    "ta": "குந்தரிகா தைலம்"
  },
  {
    "en": "KUNTHIRIKA THAILAM",
    "ta": "குந்திரிக தைலம்"
  },
  {
    "en": "KUSTAGAJA KESARI (TAB.) (100 mg)",
    "ta": "குஸ்டகஜா கேசரி (தாவல்.) (100 மிகி)"
  },
  {
    "en": "KUTAJARISHTA",
    "ta": "குடஜரிஷ்டா"
  },
  {
    "en": "LAGHU VISHAMUSHTI THAILAM",
    "ta": "லகு விஷமுஷ்டி தைலம்"
  },
  {
    "en": "LAKSA GUGGULU (500 mg)",
    "ta": "லக்சா குங்குலு (500 மிகி)"
  },
  {
    "en": "LAKSHA CHURNAM",
    "ta": "லக்ஷ சூர்ணம்"
  },
  {
    "en": "LAKSHMINARAYANA RASA (TAB.) (100 mg)",
    "ta": "லக்ஷ்மிநாராயண ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "LAKSHMIVILASA RASA (POWDER)",
    "ta": "லக்ஷ்மிவிலாச ராசா (பொடி)"
  },
  {
    "en": "LASUNADIVATI (200 mg)",
    "ta": "லசுனாதிவடி (200 மி.கி.)"
  },
  {
    "en": "LAVANGATHI MATHIRAI (PILLS) (100 mg)",
    "ta": "லவங்கத்தி மாதிரி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "LINGA BHUPATHY (TAB.) (100 mg)",
    "ta": "லிங்க பூபதி (தாவல்.) (100 மிகி)"
  },
  {
    "en": "LINGA CHENDURAM NO.1",
    "ta": "லிங்க செந்தூரம் எண்.1"
  },
  {
    "en": "LINGA CHENDURAM NO.2",
    "ta": "லிங்க செந்தூரம் எண்.2"
  },
  {
    "en": "LOGHA MANDURAM",
    "ta": "லோக மந்துரம்"
  },
  {
    "en": "LOHA BHASMA",
    "ta": "லோஹா பாஸ்மா"
  },
  {
    "en": "LOHA RASAYANAM (TAB.) (100 mg)",
    "ta": "லோஹா ரசாயனம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "LOHA SOWVEERAM",
    "ta": "லோஹா சௌவீரம்"
  },
  {
    "en": "LOHANATHA RASA (TABLETS) (100 mg)",
    "ta": "லோகநாத ராசா (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "LOHASAVA",
    "ta": "லோஹாசவா"
  },
  {
    "en": "MACCIKKAY CHOORANAM",
    "ta": "மக்கிக்கே சூரணம்"
  },
  {
    "en": "MADANAPHALA CHURNA",
    "ta": "மதனபால சூர்ணா"
  },
  {
    "en": "MADHULAI MANAPPAGU",
    "ta": "மதுலை மணப்பாகு"
  },
  {
    "en": "MADHUSNUHEE CHURNAM",
    "ta": "மதுஷ்ணுஹீ சூர்ணம்"
  },
  {
    "en": "MADHUSNUHEE RASAYANAM",
    "ta": "மதுஷ்ணுஹீ ரசாயனம்"
  },
  {
    "en": "MAGHA VEERA MEZHUGU CAPSULES (250 MG)",
    "ta": "மாக வீர மெழுகு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "MAHA GANDHAKA RASAPARPATI (POWD)",
    "ta": "மஹா கந்தக ரசபார்பதி (பொடி)"
  },
  {
    "en": "MAHA JWARANKUSA RASA (PILLS) (100 mg)",
    "ta": "மஹா ஜ்வரங்குசா ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "MAHA SEETHAMSU RASA (TABLETS) (100 mg)",
    "ta": "மஹா சீதாம்சு ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "MAHA SUDARSANA CH. MATHIRAI (500 mg)",
    "ta": "மஹா சுதர்சன சி.எச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "MAHA SUDARSANA CHURNAM",
    "ta": "மஹா சுதர்சன சூர்ணம்"
  },
  {
    "en": "MAHA VANGESWARA RASA (TABLETS) (100 mg)",
    "ta": "மஹா வங்கேஸ்வர ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "MAHA YELATHI KULIGAI (TAB.)",
    "ta": "மஹா ஏலத்தி குளிகை (தாவல்.)"
  },
  {
    "en": "MAHA YOGARAJA GUGGULU (500 mg)",
    "ta": "மஹா யோகராஜா குங்குலு (500 மி.கி.)"
  },
  {
    "en": "MAHAMASHA THAILAM",
    "ta": "மஹாமஷ தைலம்"
  },
  {
    "en": "MAHARASNADI KWATHA CHURNAM",
    "ta": "மகாராசநதி குவாதா சூர்ணம்"
  },
  {
    "en": "MAHATIKTAKA GHIRTHAM",
    "ta": "மகாதிக்தக கீர்த்தம்"
  },
  {
    "en": "MAHATRIPHALADYAM GHIRTHAM",
    "ta": "மஹாத்ரிபலாদ்யம் গீர்தம்"
  },
  {
    "en": "MAHAVALLATHI LEHYAM",
    "ta": "மகாவல்லதி லேஹ்யம்"
  },
  {
    "en": "MAHAVEERA MEZHUGU",
    "ta": "மகாவீர மேழுகு"
  },
  {
    "en": "MALAIVEMBADI THAILAM",
    "ta": "மலைவேம்பாடி தைலம்"
  },
  {
    "en": "MALAKKUTARAT TAILAM",
    "ta": "மலைக்கூடாரத் தைலம்"
  },
  {
    "en": "MALAKUDARA MEZHUGU",
    "ta": "மலைகூடார மேழுகு"
  },
  {
    "en": "MALASIKAL TABLET (500 mg)",
    "ta": "மலாசிகல் மாத்திரை (500 மிகி)"
  },
  {
    "en": "MALINEE VASANTHA RASA (TABLETS) (100 mg)",
    "ta": "மாலினி வசந்த ராசா (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "MANCAL CHOORANAM",
    "ta": "மஞ்சள் சூரணம்"
  },
  {
    "en": "MANDHA ENNAI NO.1",
    "ta": "மந்தா எண்ணை எண்.1"
  },
  {
    "en": "MANDUKAPARANI CH.MATHIRAI (500 mg)",
    "ta": "மாண்டுகாபரணி சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "MANDUKAPARNI CAPSULE (500 mg)",
    "ta": "மாண்டுகபர்ணி காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "MANDUKAPARNI CHURNAM",
    "ta": "மாண்டுகபர்ணி சூர்ணம்"
  },
  {
    "en": "MANDURA BHASMA",
    "ta": "மதுர பாஸ்மா"
  },
  {
    "en": "MANDURA CHENDURAM",
    "ta": "மதுர செந்தூரம்"
  },
  {
    "en": "MANDURATHI ADAI KUDINEER",
    "ta": "மண்டூரத்தி அடை குடிநீர்"
  },
  {
    "en": "MANIBHADRA LEHYAM",
    "ta": "மணிபத்ர லேஹ்யம்"
  },
  {
    "en": "MANJAL NOIKUDINEER CHOORANAM",
    "ta": "மஞ்சள் நோய்க்குடிநீர் சூரணம்"
  },
  {
    "en": "MANJISHTADI KWATHA CHURNAM",
    "ta": "மஞ்சிஷ்டதி குவாதா சூர்ணம்"
  },
  {
    "en": "MANJISHTADI THAILAM",
    "ta": "மஞ்சிஷ்டடி தைலம்"
  },
  {
    "en": "MANJITTI KUDINEER CHOORANAM",
    "ta": "மஞ்சிட்டி குடிநீர் சூரணம்"
  },
  {
    "en": "MANOMAHUDA DHOOPA PODI",
    "ta": "மனோமஹுதா தூப போடி"
  },
  {
    "en": "MANTA ENNEY NO.2",
    "ta": "மந்தா எண்ணி எண்.2"
  },
  {
    "en": "MARICHADI THAILAM",
    "ta": "மரிச்சடி தைலம்"
  },
  {
    "en": "MARMA GUTIKA (500 mg)",
    "ta": "மர்ம குட்டிகா (500 மிகி)"
  },
  {
    "en": "MARUTHAMPATTAI CHOORANAM",
    "ta": "மருதம்பேட்டை சூரணம்"
  },
  {
    "en": "MATTAN TAILAM",
    "ta": "மட்டன் தைலம்"
  },
  {
    "en": "MATULANGA RASAYANAM",
    "ta": "மாதுலங்கா ரசாயனம்"
  },
  {
    "en": "MAYANA THAILAM",
    "ta": "மயான தைலம்"
  },
  {
    "en": "MAYILIRAGATHI CHURNAM",
    "ta": "மயிலிரகத்தி சூர்ண��்"
  },
  {
    "en": "MEGANATHA KULIGAI (PILLS) (100 mg)",
    "ta": "மேகநாத குளிகை (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "MEGANATHA THAILAM",
    "ta": "மேகநாத தைலம்"
  },
  {
    "en": "MEGHARANAKALIMBU",
    "ta": "மேகரணக்கலிம்பு"
  },
  {
    "en": "MENIT TAILAM",
    "ta": "மெனிட் தைலம்"
  },
  {
    "en": "MERUGULLI THAILAM",
    "ta": "மெருகுள்ளி தைலம்"
  },
  {
    "en": "MESASHRINGI CHURNAM",
    "ta": "மேசஷ்ரிங்கி சூர்ணம்"
  },
  {
    "en": "MESASRINGI CAPSULE (500 mg)",
    "ta": "மெசஸ்ரிங்கி காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "MESASRINGI CHURNAM",
    "ta": "மேசஸ்ரிங்கி சூர்ணம்"
  },
  {
    "en": "MESASRINGI TABLET",
    "ta": "மெசஸ்ரிங்கி மாத்திரை"
  },
  {
    "en": "MILAGAI THAILAM",
    "ta": "மிளகை தைலம்"
  },
  {
    "en": "MOOLA NOI TABLET (500 mg)",
    "ta": "மூலா நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "MOOLAKUDARA THAILAM",
    "ta": "மூலக்கூடார தைலம்"
  },
  {
    "en": "MOWTIKA BHASMA(MUKTA PISHTI)",
    "ta": "மௌதிகா பாஸ்மா (முக்தா பிஷ்டி)"
  },
  {
    "en": "MRITUNJAYA RASA (TABLETS) (100 mg)",
    "ta": "மிருதுஞ்சய ராசா (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "MURIVENNA",
    "ta": "முறிவென்ன"
  },
  {
    "en": "MURUKKAN VIDHAI MATHIRAI (PILLS) (500 mg)",
    "ta": "முருக்கன் வித்தை மாதிரி (மாத்திரைகள்) (500 மி.கி.)"
  },
  {
    "en": "MURUNGAI PATTAI CHOORANAM",
    "ta": "முருங்கை பேட்டை சூரணம்"
  },
  {
    "en": "MURUNGAI POO LEGYAM",
    "ta": "முருங்கை பூ லேகியம்"
  },
  {
    "en": "MUSTHARISHTA",
    "ta": "முஸ்தரிஷ்டா"
  },
  {
    "en": "MUTHU CHIPPI PARPAM",
    "ta": "முத்து சிப்பி பார்ப்பம்"
  },
  {
    "en": "MUTHU PARPAM",
    "ta": "முத்து பார்ப்பம்"
  },
  {
    "en": "MUTTUC CIPPI PARPAM TABLET (100 mg)",
    "ta": "முட்டுச் சிப்பி பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "NAAKUPOOCHI (KOLLI)KUDINEER CHOORANAM",
    "ta": "நாகுபூச்சி (கொல்லி)குடிநீர் சூரணம்"
  },
  {
    "en": "NAGA BHASMA",
    "ta": "நாக பாஸ்மா"
  },
  {
    "en": "NAGA CHENDURAM",
    "ta": "நாக செந்தூரம்"
  },
  {
    "en": "NAGA PARPAM",
    "ta": "நாக பர்பம்"
  },
  {
    "en": "NAKA PARPAM TABLET (100 mg)",
    "ta": "நாகா பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "NALPAMARADI THAILAM",
    "ta": "நளபாமரடி தைலம்"
  },
  {
    "en": "NANDHI MEZHUGU",
    "ta": "நந்தி மேழுகு"
  },
  {
    "en": "NANDHI MEZHUGU CAPSULES (250 MG)",
    "ta": "நந்தி மெழுகு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "NANDUKKAL PARPAM",
    "ta": "நண்டுக்கல் பார்ப்பம்"
  },
  {
    "en": "NANNARI MANAPPAGU",
    "ta": "நன்னாரி மணப்பாகு"
  },
  {
    "en": "NANTUKKAL PARPAM TABLET (100 mg)",
    "ta": "நண்டுக்கல் பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "NARASIMHA GHIRTHAM",
    "ta": "நரசிம்ம கீர்த்தம்"
  },
  {
    "en": "NARATTAI ILAKAM",
    "ta": "நாரத்தை இலகம்"
  },
  {
    "en": "NARAYANA THAILAM",
    "ta": "நாராயண தைலம்"
  },
  {
    "en": "NARIKELA LAVANAM",
    "ta": "நரிகேல லவணம்"
  },
  {
    "en": "NARIKELANJANAM (ELANER KUZHAMBU)",
    "ta": "நரிகெளஞ்சனம் (எளனர் குழம்பு)"
  },
  {
    "en": "NASIROGANASA THAILAM",
    "ta": "நாசிரோகணச தைலம்"
  },
  {
    "en": "NATTAIP PARPAM",
    "ta": "நாட்டைப் பார்ப்பம்"
  },
  {
    "en": "NATTAIP PARPAM TABLET (100 mg)",
    "ta": "நாட்டுப் பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "NAVA UPPU MEZHUGU",
    "ta": "NAVA UPPU MEZHUGU"
  },
  {
    "en": "NAVAKA GUGGULU (500 mg)",
    "ta": "நவக குங்குலு (500 மி.கி.)"
  },
  {
    "en": "NAVAL PATTAI CHOORANAM",
    "ta": "நாவல் பேட்டை சூரணம்"
  },
  {
    "en": "NAVAUPPU MEZHUGU CAPSULES (250 MG)",
    "ta": "நவப்பு மெழுகு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "NAVAYASA CH.MATHIRAI (500 mg)",
    "ta": "நவயச சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "NAYOPAYAM KASAYAM",
    "ta": "நயோபாயம் கசாயம்"
  },
  {
    "en": "NAYOPAYAM KASAYAM CHURNAM",
    "ta": "நயோபாயம் கசாயம் சூர்ணம்"
  },
  {
    "en": "NAYURUVI CHOORANAM",
    "ta": "நாயுருவி சூரணம்"
  },
  {
    "en": "NEELANJANAIMAI",
    "ta": "நீலாஞ்சனைமை"
  },
  {
    "en": "NEELIBRINGADI(COCO.OIL) THAILAM",
    "ta": "நீலிபிரிங்காடி(கோகோ.ஆயில்) தைலம்"
  },
  {
    "en": "NEELIBRINGADI(GING.OIL) THAILAM",
    "ta": "நீலிபிரிங்காடி(ஜிங்.எண்ணெய்) தைலம்"
  },
  {
    "en": "NEERKOVAI MATHIRAI (500mg) - External",
    "ta": "நீர்கோவை மாத்திரை (500மிகி) - வெளி"
  },
  {
    "en": "NELLIKKAI ILAKAM",
    "ta": "நெல்லிக்காய் இலகம்"
  },
  {
    "en": "NELLIVATTRAL CHOORANAM",
    "ta": "நெல்லிவட்டரல் சூரணம்"
  },
  {
    "en": "NERUNCIMUL CHOORANAM",
    "ta": "நெருஞ்சிமுள் சூரணம்"
  },
  {
    "en": "NERUNJIL KUDINEER",
    "ta": "நெருஞ்சில் குடிநீர்"
  },
  {
    "en": "NERUNJIL KUDINEER D/H",
    "ta": "நெருஞ்சில் குடிநீர் த/எச்"
  },
  {
    "en": "NILAPPANAI KILANKU CHOORANAM",
    "ta": "நிலப்பனை கிழங்கு சூரணம்"
  },
  {
    "en": "NILAVARAI CHOORANAM MATHIRAI (500 mg)",
    "ta": "நிலவரை சூரணம் மாதிரி (500 மி.கி.)"
  },
  {
    "en": "NILAVARAI CHURNAM",
    "ta": "நிலவரை சூர்ணம்"
  },
  {
    "en": "NILAVEMBU CARICA TABLET (500 mg)",
    "ta": "நிலவேம்பு கரிகா மாத்திரை (500 மிகி)"
  },
  {
    "en": "NILAVEMBU KUDINEER",
    "ta": "நிலவேம்பு குடிநீர்"
  },
  {
    "en": "NILAVEMBU KUDINEER D/H",
    "ta": "நிலவேம்பு குடிநீர் D/H"
  },
  {
    "en": "NIMBA CAPSULE (500 mg)",
    "ta": "நிம்பா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "NIMBA CHURNAM",
    "ta": "நிம்ப சூர்ணம்"
  },
  {
    "en": "NIMBA TABLET",
    "ta": "நிம்பா மாத்திரை"
  },
  {
    "en": "NIMBADI KWATHA CHURNAM",
    "ta": "நிம்பாடி குவாதா சூர்ணம்"
  },
  {
    "en": "NIMBADI THAILAM",
    "ta": "நிம்பாடி தைலம்"
  },
  {
    "en": "NINAKAZHICAL NOI TABLET (500 mg)",
    "ta": "நினகாஜிகல் நோய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "NIRGUNDI THAILAM",
    "ta": "நிர்குண்டி தைலம்"
  },
  {
    "en": "NISAMALAKI CH.MATHIRAI (500 mg)",
    "ta": "நிசமலகி சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "NISHAKATHAKADI KASAYAM CHURNAM",
    "ta": "நிஷாகதகாதி கசாயம் சூர்ணம்"
  },
  {
    "en": "NOCCI ILAI CHOORANAM",
    "ta": "நொச்சி இலை சூரணம்"
  },
  {
    "en": "NOCHI KUDINEER CHOORANAM",
    "ta": "நொச்சி குடிநீர் சூரணம்"
  },
  {
    "en": "NOCHI THAILAM",
    "ta": "நொச்சி தைலம்"
  },
  {
    "en": "OMA KUDINEER CHOORANAM",
    "ta": "ஓம குடிநீர் சூரணம்"
  },
  {
    "en": "OMA THEENEER",
    "ta": "ஓமா தீனர்"
  },
  {
    "en": "ORITHAL THAMARAI CHOORANAM",
    "ta": "ஓரிதழ் தாமரை சூரணம்"
  },
  {
    "en": "PAAL KARUDAKAL PARPAM",
    "ta": "பால் கருடகல் பார்ப்பம்"
  },
  {
    "en": "PACHAI KARPURA MATHIRAI (PILLS) (100 mg)",
    "ta": "பச்சை கற்பூர மாதிரி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "PADAI SANKARAN",
    "ta": "படை சங்கரன்"
  },
  {
    "en": "PADIKALINGAM",
    "ta": "பதிகலிங்கம்"
  },
  {
    "en": "PADIKARA CHENDURAM",
    "ta": "படிகார செந்தூரம்"
  },
  {
    "en": "PADIKARA NEER",
    "ta": "படிகார நீர்"
  },
  {
    "en": "PADIKARA PARPAM",
    "ta": "படிகார பர்பம்"
  },
  {
    "en": "PALAKARAI PARPAM",
    "ta": "பாலகரை பர்பம்"
  },
  {
    "en": "PALAKARAI PARPAM TABLET (100 mg)",
    "ta": "பலகரை பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "PANAIVIRALADI KSHARAM",
    "ta": "பனிவிரலடி க்ஷரம்"
  },
  {
    "en": "PANCATIKAKA KASAYAM CHURNAM",
    "ta": "பஞ்சடிககா கசாயம் சூர்ணம்"
  },
  {
    "en": "PANCHA DEEPAGANI CHURNAM",
    "ta": "பஞ்ச தீபகானி சூர்ணம்"
  },
  {
    "en": "PANCHA SAKARA CHURNA",
    "ta": "பஞ்ச சகார சூர்ணா"
  },
  {
    "en": "PANCHA SOOTHA MEZHUGU",
    "ta": "பஞ்ச சூத மேழுகு"
  },
  {
    "en": "PANCHA SOOTHA MEZHUGU CAPSULES (250 MG)",
    "ta": "பஞ்ச சூத மெழுகு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "PANCHADEEPAGNI CH.MATHIRAI (500 mg)",
    "ta": "பஞ்சதீபாக்னி சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "PANCHAKAVYA GHIRUTHAM",
    "ta": "பஞ்சகவ்யா கிருதம்"
  },
  {
    "en": "PANCHALAVANA PARPAM",
    "ta": "பாஞ்சாலவனப் பார்வை"
  },
  {
    "en": "PANCHATHIKTARISHTA",
    "ta": "பஞ்சதிக்தரிஷ்டா"
  },
  {
    "en": "PANCHATIKTA GUGGULU GHIRTHAM",
    "ta": "பஞ்சதிக்த குங்குலு கீர்த்தம்"
  },
  {
    "en": "PANCHATIKTA KWATHA CHURNAM",
    "ta": "பஞ்சதிக்த குவாத சூர்ணம்"
  },
  {
    "en": "PANDU NOI TABLET (500 mg)",
    "ta": "பாண்டு நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "PARANGI RASAYANAM",
    "ta": "பரங்கி இரசாயனம்"
  },
  {
    "en": "PARANGIPATTAI CAPSULE (500 mg)",
    "ta": "பரங்கிப்பட்டை காப்ஸ்யூல் (500 மி.கி.)"
  },
  {
    "en": "PARANGIPATTAI CHURNAM",
    "ta": "பரங்கிப்பட்டை சூர்ணம்"
  },
  {
    "en": "PARANGIPATTAI PATHANGAM",
    "ta": "பரங்கிப்பட்டை பதங்கம்"
  },
  {
    "en": "PARANGIPATTAI TABLET (500 mg)",
    "ta": "பரங்கிப்பட்டை மாத்திரை (500 மிகி)"
  },
  {
    "en": "PATIKARAP PARPAM TABLET (100 mg)",
    "ta": "பதிகாரப் பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "PATTU KARUPPU",
    "ta": "பட்டு கருப்பு"
  },
  {
    "en": "PAVALA PARPAM",
    "ta": "பாவலா பார்ப்பம்"
  },
  {
    "en": "PAVALA PARPAM (SPL) NALPAVALAM",
    "ta": "பாவலா பார்வை (எஸ்பிஎல்) நல்பாவலம்"
  },
  {
    "en": "PAVALA PARPAM TABLET[ORD]",
    "ta": "பாவலா பர்பம் மாத்திரை[ORD]"
  },
  {
    "en": "PEENASA THAILAM",
    "ta": "பீனாச தைலம்"
  },
  {
    "en": "PERUMBADU LEHYAM",
    "ta": "பெரும்பாடு லேஹ்யம்"
  },
  {
    "en": "PERUMBADU NOI TABLET (500 mg)",
    "ta": "பெரும்பாடு நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "PHALASARPIS",
    "ta": "ஃபலாசர்பிஸ்"
  },
  {
    "en": "PIDANGANARI KUDINEER CHOORANAM",
    "ta": "பிடங்கனாரி குடிநீர் சூரணம்"
  },
  {
    "en": "PINDA THAILAM",
    "ta": "பிண்ட தைலம்"
  },
  {
    "en": "PIPPALYASAVA",
    "ta": "பிப்பல்யாசவா"
  },
  {
    "en": "PIRANTAI CHOORANAM",
    "ta": "பிறந்தாய் சூரணம்"
  },
  {
    "en": "PITHAJWARA KUDINEER",
    "ta": "பிதாஜ்வர குடிநீர்"
  },
  {
    "en": "PODUTHALAI CHOORANAM",
    "ta": "பொதுத்தலை சூரணம்"
  },
  {
    "en": "POORA MATHIRAI (TAB.) (100 mg)",
    "ta": "பூர மாதிரி (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "PRABANJANAVIMARDANA THAILAM",
    "ta": "பிரபஞ்சனவிமர்தன தைலம்"
  },
  {
    "en": "PRABHAKARAVATI (TABLETS) (100 MG)",
    "ta": "பிரபாகரவதி (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "PRADARANTAKA RASA (TABLETS) (100 mg)",
    "ta": "பிரதராந்தக ராசா (மாத்திரைகள்) (100 மிகி)"
  },
  {
    "en": "PRAMI NEI",
    "ta": "பிரமி நெய்"
  },
  {
    "en": "PRANADA GUTIKA(MANDOORA VATAKA) (500 mg)",
    "ta": "பிராணதா குட்டிகா(மண்டூரா வதக) (500 மி.கி.)"
  },
  {
    "en": "PRASARANYADI KASAYAM CHURNAM",
    "ta": "ப்ரசரண்யாதி கசாயம் சூர்ணம்"
  },
  {
    "en": "PRAVALA BHASMA",
    "ta": "பிரவல பாஸ்மா"
  },
  {
    "en": "PRAVALA BHASMA(CORAL SUPERIOR)",
    "ta": "பிரவல பாஸ்மா (பவள மேல்நிலை)"
  },
  {
    "en": "PRAVALA PANCHAMIRTHAM",
    "ta": "பிரவல பஞ்சாமிர்தம்"
  },
  {
    "en": "PUNAIKKALI VITAI CHOORANAM",
    "ta": "புனைக்கலி விடை சூரணம்"
  },
  {
    "en": "PUNARNAVADI KASAYAM CHURNAM",
    "ta": "புணர்ணவாடி கசாயம் சூர்ணம்"
  },
  {
    "en": "PUNARNAVADI MANDURA (500 mg)",
    "ta": "புணர்நவாடி மந்துரா (500 மி.கி.)"
  },
  {
    "en": "PUNARNAVASAVA",
    "ta": "புனர்ணவாசவா"
  },
  {
    "en": "PUNKAT TAILAM",
    "ta": "புங்கட் தைலம்"
  },
  {
    "en": "PUSHYANUGA CH.MATHIRAI (500 mg)",
    "ta": "புஷ்யனுக சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "PUSHYANUGA CHURNAM",
    "ta": "புஷ்யனுக சூர்ணம்"
  },
  {
    "en": "PYTYANTHAKA RASA (Paste)",
    "ta": "பைத்யந்தக ராசா (ஒட்டு)"
  },
  {
    "en": "RAJAPRAVARTHANIVATI (500 mg)",
    "ta": "ராஜபிரவர்த்தனிவதி (500 மி.கி.)"
  },
  {
    "en": "RAJARAJESWARAM (TAB.) (100 mg)",
    "ta": "ராஜராஜேஸ்வரம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "RAJATHA BHASMA",
    "ta": "ராஜதா பாஸ்மா"
  },
  {
    "en": "RAJATHA CHANDRODAYAM",
    "ta": "ராஜத சந்திரோதயம்"
  },
  {
    "en": "RAJATHALOHA RASAYANAM (TAB.) (100 mg)",
    "ta": "ராஜதலோஹ ரசாயனம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "RASA CHENDURAM",
    "ta": "ராசா செந்��ூரம்"
  },
  {
    "en": "RASA MANICKYAM",
    "ta": "ராச மாணிக்கம்"
  },
  {
    "en": "RASA MEZHUGU",
    "ta": "ராசா மேழுகு"
  },
  {
    "en": "RASA MEZHUGU CAPSULES (250 MG)",
    "ta": "ராசா மெழுகு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "RASAGANDHI MEZHUGU",
    "ta": "ரசகாந்தி மேழுகு"
  },
  {
    "en": "RASAGANDHI MEZHUGU CAPSULES (250 mg)",
    "ta": "ரசகாந்தி மெழுகு காப்ஸ்யூல்கள் (250 மி.கி.)"
  },
  {
    "en": "RASAKARPURA LEPAM",
    "ta": "ரசகர்புர லெபம்"
  },
  {
    "en": "RASATHOMADI LEPA CHURNAM",
    "ta": "இராசதோமடி லேப சூர்ணம்"
  },
  {
    "en": "RASNADI CHURNAM",
    "ta": "ராஸ்னடி சூர்ணம்"
  },
  {
    "en": "RASNADI KWATHA CHURNAM",
    "ta": "ரஸ்னாடி குவாதா சூர்ணம்"
  },
  {
    "en": "RASNASAPTAKAM KASAYAM CHURNAM",
    "ta": "ரஸ்நாசப்தகம் கசாயம் சூர்ணம்"
  },
  {
    "en": "SAGALA NOI CHOORANAM",
    "ta": "சகலா நொய் சூரணம்"
  },
  {
    "en": "SALMALI CHURNAM",
    "ta": "சல்மாலி சூர்னம்"
  },
  {
    "en": "SANDHUVATHA NOI TABLET (500 mg)",
    "ta": "சந்துவத நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "SANGU PARPAM",
    "ta": "சங்கு பார்ப்பம்"
  },
  {
    "en": "SANGU PARPAM TABLET (100 mg)",
    "ta": "சங்���ு பர்பம் மாத்திரை (100 மிகி)"
  },
  {
    "en": "SANJEEVI MATHIRAI (PILLS) (100 mg)",
    "ta": "சஞ்சீவி மாத்திரை (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "SANJEEVINIVATI (100 mg)",
    "ta": "சஞ்சீவினிவதி (100 மி.கி.)"
  },
  {
    "en": "SANKHA BHASMA",
    "ta": "சங்க பாஸ்மா"
  },
  {
    "en": "SANKHA DRAVAKAM",
    "ta": "சங்க திரவகம்"
  },
  {
    "en": "SANKHA VATI (500 MG)",
    "ta": "சங்க வதி (500 மிகி)"
  },
  {
    "en": "SANNIPATHA BHAIRAVA RASA-L.(TAB.) (100 mg)",
    "ta": "சன்னிபாத பைரவ ராசா-எல்.(TAB.) (100 mg)"
  },
  {
    "en": "SANNIPATHA BHAIRAVA RASA-M.(TAB.) (100 mg)",
    "ta": "சன்னிபாத பைரவ ராசா-எம்.(தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "SANTHA CHANDRODAYAM (TAB.) (100 mg)",
    "ta": "சாந்த சந்திரோதயம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "SAPTASAARAM KASAYAM CHURNAM",
    "ta": "சப்தசாரம் கசாயம் சூர்ணம்"
  },
  {
    "en": "SAPTAVIMSHATI GUGGULU",
    "ta": "சப்தவிம்ஷதி குங்குலு"
  },
  {
    "en": "SAPTHAMRITHA LOHA (500 mg)",
    "ta": "சப்தாமிருத லோஹா (500 மி.கி.)"
  },
  {
    "en": "SARAPUNGAVILVATHI LEHYAM",
    "ta": "சரபுங்கவில்வதி லேஹ்யம்"
  },
  {
    "en": "SARASWATHA CHURNAM",
    "ta": "சரஸ்வத சூர்ணம்"
  },
  {
    "en": "SARIBADYASAVA",
    "ta": "சரிபத்யசவா"
  },
  {
    "en": "SARPAGANDHA CAPSULE (500 mg)",
    "ta": "சர்பகந்தா காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "SARPAGANDHA TABLET (500 MG)",
    "ta": "சர்பகந்தா மாத்திரை (500 மிகி)"
  },
  {
    "en": "SATAVAREE GHIRTHAM",
    "ta": "சதவரீ கீர்த்தம்"
  },
  {
    "en": "SATAVAREE LEHYAM",
    "ta": "சதவரீ லேஹ்யம்"
  },
  {
    "en": "SEENTHIL CHURNAM",
    "ta": "சீந்தில் சூர்ணம்"
  },
  {
    "en": "SEENTHIL SARKARAI",
    "ta": "சீந்தில் சர்க்கரை"
  },
  {
    "en": "SEERAGA THAILAM",
    "ta": "சீரக தைலம்"
  },
  {
    "en": "SEETHAMSU RASA (TAB.) (100 mg)",
    "ta": "சீதாம்சு ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "SERANKOTTAI NEI",
    "ta": "சேரங்கோட்டை நெய்"
  },
  {
    "en": "SHADGUNA SINDURA",
    "ta": "ஷட்குண சிந்துரா"
  },
  {
    "en": "SHUNTHI CHURNA",
    "ta": "சுந்தி சூர்ணா"
  },
  {
    "en": "SIDDADHI ENNAI NO.1",
    "ta": "சித்தாதி என்னை எண்.1"
  },
  {
    "en": "SIDDANAGARJUNAVARTHI",
    "ta": "சித்தநாகார்ஜுனவர்த்தி"
  },
  {
    "en": "SIDDHADHI ENNAI NO.2",
    "ta": "சித்தாதி என்னை எண்.2"
  },
  {
    "en": "SIGRU CHURNAM",
    "ta": "சிக்ரு சூர்ணம்"
  },
  {
    "en": "SIGRU TABLET",
    "ta": "சிக்ரு மாத்திரை"
  },
  {
    "en": "SIMHANADA GUGGULU",
    "ta": "சிம்ஹநாத குங்குலு"
  },
  {
    "en": "SINAPAINEER KATTI NOI TABLET (500 mg)",
    "ta": "சினபைனீர் கட்டி நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "SINDOORA BHOOSANA RASA (TAB.) (100 mg)",
    "ta": "சிந்தூர பூசண ராசா (தாவல்.) (100 ம��.கி.)"
  },
  {
    "en": "SINDURADI LEPAM",
    "ta": "சிந்துரடி லெபம்"
  },
  {
    "en": "SINDURADI LEPAM TUBE",
    "ta": "சிந்துரடி லெபம் குழாய்"
  },
  {
    "en": "SIRUPEELAI CHOORANAM",
    "ta": "சிறுபீலை சூரணம்"
  },
  {
    "en": "SITHOPHALADI CH.MATHIRAI (500 mg)",
    "ta": "சித்தப்பாலடி சி.மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "SITHOPHALADI CHURNAM",
    "ta": "சிதோபாலடி சூர்ணம்"
  },
  {
    "en": "SIVANAR AMIRTHAM",
    "ta": "சிவனார் அமிர்தம்"
  },
  {
    "en": "SIVANARVEMBU CHOORANAM",
    "ta": "சிவனார்வேம்பு சூரணம்"
  },
  {
    "en": "SIVANARVEMBU KUZHI THAILAM",
    "ta": "சிவனார்வேம்பு குழி தைலம்"
  },
  {
    "en": "SIVANARVEMBUKUZHI THAILAM",
    "ta": "சிவனார்வேம்புகுழி தைலம்"
  },
  {
    "en": "SIVATHAI CHURNAM",
    "ta": "சிவதை சூர்ணம்"
  },
  {
    "en": "SMRUTISAGARA RASA (PILLS) (50 mg)",
    "ta": "ஸ்ம்ருதிசாகர ராசா (மாத்திரைகள்) (50 மி.கி.)"
  },
  {
    "en": "SOMBU THEENEER",
    "ta": "சோம்பு தீனர்"
  },
  {
    "en": "SOOLA KUTARA (TAB.) (100 mg)",
    "ta": "சூலா குடாரா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "SOOLAI BHUPATHY (PILLS) (100 mg)",
    "ta": "சூலை பூபதி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "SOOLAI KUDARAM (pills) (100 mg)",
    "ta": "சூலைக் கூடரம் (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "SOORYAVARTHI RASA-LAGHU (TAB.) (100 mg)",
    "ta": "சூரியவர்த்தி ராசா-லகு (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "SOOTHAGA SOOLAI NOI TABLET (500 mg)",
    "ta": "சூதக சூலை நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "SOOTHAGATHAI UDAIKA KUDINEER CHOORANAM",
    "ta": "சூதகதை உடைக குடிநீர் சூரணம்"
  },
  {
    "en": "SOTHARI MANDURA (500 mg)",
    "ta": "சோதாரி மந்துரா (500 மி.கி.)"
  },
  {
    "en": "SOWBAGYASUNTEE",
    "ta": "சௌபாக்யசுந்தீ"
  },
  {
    "en": "SRINGA BHASMA",
    "ta": "சிருங்க��� பாஸ்மா"
  },
  {
    "en": "SRINGI PARPAM",
    "ta": "சிருங்கி பர்பம்"
  },
  {
    "en": "SRINGI PARPAM TABLET",
    "ta": "சிருங்கி பர்பம் மாத்திரை"
  },
  {
    "en": "STANYASODHANA KASAYA CURNA",
    "ta": "ஸ்தாந்யசோதன கசாய குர்ணா"
  },
  {
    "en": "SUBHRAVATI MATHIRAI (500 mg)",
    "ta": "சுப்ரவதி மாதிரி (500 மி.கி.)"
  },
  {
    "en": "SUDARSANA CH. MATHIRAI (500 mg)",
    "ta": "சுதர்சன சி.எச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "SUDARSANA CHURNAM",
    "ta": "சுதர்சன சூர்ணம்"
  },
  {
    "en": "SUGANDHA THAILAM",
    "ta": "சுகந்த தைலம்"
  },
  {
    "en": "SUKTHI BHASMA",
    "ta": "சுக்தி பாஸ்மா"
  },
  {
    "en": "SUKUMARA GHIRTHAM",
    "ta": "சுகுமார கீர்த்தம்"
  },
  {
    "en": "SUKUMARA RASAYANAM",
    "ta": "சுகுமார இராசயனம்"
  },
  {
    "en": "SUNTHI CAPSULE ( 500 mg)",
    "ta": "சுந���தி காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "SUNTHI TABLET",
    "ta": "சுந்தி மாத்திரை"
  },
  {
    "en": "SURADARU LEPAM",
    "ta": "சுரதாரு லெபம்"
  },
  {
    "en": "SURAKSHARA KASEESA",
    "ta": "சுரக்ஷர காசீச"
  },
  {
    "en": "SUYAMAGNI",
    "ta": "சுயமாக்னி"
  },
  {
    "en": "SWACHANANDA BHAIRAVA RASA (PILLS) (100 mg)",
    "ta": "ஸ்வச்சனந்த பைரவ ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "SWARNA MAKSHIKA BHASMA",
    "ta": "ஸ்வர்ண மக்ஷிகா பாஸ்மா"
  },
  {
    "en": "SWARNA VANGA (Powder)",
    "ta": "ஸ்வர்ண வங்கா (தூள்)"
  },
  {
    "en": "SWASAKUDORI (TAB.) (100 mg)",
    "ta": "ஸ்வாசகுடோரி (தாவல்.) (100 மிகி)"
  },
  {
    "en": "SWASAKUTARA (TAB.) (100 mg)",
    "ta": "ஸ்வாசகுடரா (தாவல்.) (100 மிகி)"
  },
  {
    "en": "SWASANANDA GUTIKA (TAB.) (100 mg)",
    "ta": "ஸ்வாசனந்தா குடிகா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "TALAKAK KARUPPU",
    "ta": "தலைக்காக் கருப்பு"
  },
  {
    "en": "TALICAP PATTIRI CHOORANAM",
    "ta": "தாலிக்காப் பத்திரி சூரணம்"
  },
  {
    "en": "TANKA URAM",
    "ta": "தங்க ஊரம்"
  },
  {
    "en": "TANKANA CHURNAM",
    "ta": "தங்கனா சூர்ணம்"
  },
  {
    "en": "TANRIKKAY CHOORANAM",
    "ta": "தன்ரிக்காய் சூரணம்"
  },
  {
    "en": "TAPYADI LOHA (500 mg)",
    "ta": "தப்யாடி லோஹா (500 மி.கி.)"
  },
  {
    "en": "TARAKESWARA RASA (TAB.) (100 mg)",
    "ta": "தாரகேஸ்வர ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "TARUNARAKA RASA (PILLS) (100 mg)",
    "ta": "தருணரக ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "TARUNARKA RASA (PILLS) (100 mg)",
    "ta": "தருணர்கா ராசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "TERRANKOTTAI CHOORANAM",
    "ta": "தெரன்கோட்டை சூரணம்"
  },
  {
    "en": "THAIRCHUNTI CHURNAM",
    "ta": "தேர்ச்சுண்டி சூரணம்"
  },
  {
    "en": "THALAKA BHASMA",
    "ta": "தலகா பாஸ்மா"
  },
  {
    "en": "THALAKA CHENDURAM",
    "ta": "தலைகா செந்தூரம்"
  },
  {
    "en": "THALAKA PARPAM",
    "ta": "தலகா பார்ப்பம்"
  },
  {
    "en": "THALEESADHI CHURNAM",
    "ta": "தாலீசாதி சூர்ணம்"
  },
  {
    "en": "THALEESADHI VATAGAM (500 mg)",
    "ta": "தலீசாதி வட்டகம் (500 மி.கி.)"
  },
  {
    "en": "THALEESADI CH. MATHIRAI (500 mg)",
    "ta": "தலைசடி சி.எச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "THALEESADI CHURNAM (AY)",
    "ta": "தலைசடி சூர்ணம் (ஏய்)"
  },
  {
    "en": "THALEESADI CHURNAM TABLET (500 mg)",
    "ta": "தலைசாடி சூர்ணம் மாத்திரை (500 மி.கி.)"
  },
  {
    "en": "THAMBIRA PARPAM",
    "ta": "தம்பிரா பார்ப்பம்"
  },
  {
    "en": "THAMRA BHASMA",
    "ta": "தாம்ரா பாஸ்மா"
  },
  {
    "en": "THANNEERVITTAN NEI",
    "ta": "தண்ணீர்விட்டான் நெய்"
  },
  {
    "en": "THAZHAMBU MATHIRAI (PILLS) (100 mg)",
    "ta": "தாழம்பு மாதிரி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "THETHAN KOTTAI LEHYAM",
    "ta": "தேத்தன் கோட்டை லேஹயம்"
  },
  {
    "en": "THIKTAKA GHIRTHAM",
    "ta": "திக்தக கீர்த்தம்"
  },
  {
    "en": "THIPPILI RASAYANAM",
    "ta": "திப்பிலி இரசாயனம்"
  },
  {
    "en": "THIRIDOSHA MATHIRAI (PILLS) (100 mg)",
    "ta": "திரிதோஷ மாத்திரை (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "THIRIPALAIC CHURNAM",
    "ta": "திரிபாலைச் சூர்ணம்"
  },
  {
    "en": "THIRUMOORTHY PATHANGAM",
    "ta": "திருமூர்த்தி பதங்கம்"
  },
  {
    "en": "THRIKATU CHURNAM (AY)",
    "ta": "திரிகடு சூர்ணம் (ஏய்)"
  },
  {
    "en": "THRIPHALA CH. MATHIRAI (500 mg)",
    "ta": "திரிபாலா சி.எச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "THRIPHALA CHURNAM (AY)",
    "ta": "திரிபால சூர்ணம் (ஏய்)"
  },
  {
    "en": "THRIPHALA GUGGULU",
    "ta": "திரிபலா குங்குலு"
  },
  {
    "en": "THRIPHALADI THAILAM",
    "ta": "திரிபாலடி தைலம்"
  },
  {
    "en": "THUDUVALAI NEI",
    "ta": "துடுவளை நெய்"
  },
  {
    "en": "THURINJI MANAPPAGU",
    "ta": "துரிஞ்சி மணப்பாகு"
  },
  {
    "en": "TIRAKSATIK KUDINEER",
    "ta": "திரக்ஷடிக் குடிநீர்"
  },
  {
    "en": "TIRIKATUKUC CHOORANAM",
    "ta": "திரிகடுகுச் சூரணம்"
  },
  {
    "en": "TIRIPALAIC CHURNAM TABLET (500 mg)",
    "ta": "திரிபாலைச் சூர்ணம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "TRAYODASANGA GUGGULU (500 mg)",
    "ta": "திரயோதசங்க குங்குலு (500 மி.கி.)"
  },
  {
    "en": "TRIBHUVANAKIRTHI RASA (TAB.) (100 mg)",
    "ta": "திரிபுவனகீர்த்தி ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "TRIKATU CAPSULE (500 mg)",
    "ta": "திரிகடு காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "TRIPHALADI KWATHA CHURNAM",
    "ta": "திரிபாலடி குவாதா சூர்ணம்"
  },
  {
    "en": "TRIPHALADI KWATHA CHURNAM D/H",
    "ta": "திரிபாலடி குவாதா சூர்ணம் D/H"
  },
  {
    "en": "TRIVRUTH CHURNAM",
    "ta": "திரிவ்ருத் சூர்ணம்"
  },
  {
    "en": "TULACI CHOORANAM",
    "ta": "துளசிச் சூரணம்"
  },
  {
    "en": "TULASI CAPSULE (500 mg)",
    "ta": "துளசி காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "TULASI CHURNAM",
    "ta": "துளசி சூர்ணம்"
  },
  {
    "en": "TULASI TABLET",
    "ta": "துளசி மாத்திரை"
  },
  {
    "en": "ULUNDHU THAILAM",
    "ta": "உளுந்து தைலம்"
  },
  {
    "en": "UPPU CHENDURAM NO.1",
    "ta": "உப்பு செந்தூரம் எண்.1"
  },
  {
    "en": "UPPU CHENDURAM NO.2",
    "ta": "உப்பு செந்தூரம் எண்.2"
  },
  {
    "en": "VAAN MEZHUGU",
    "ta": "வான் மேழுகு"
  },
  {
    "en": "VACHA CHURNA",
    "ta": "வச்சா சூர்ணா"
  },
  {
    "en": "VAISWANARA CHURNAM",
    "ta": "வைஸ்வானர சூர்ணம்"
  },
  {
    "en": "VALLARAI CHOORANAM",
    "ta": "வல்லாரை சூரணம்"
  },
  {
    "en": "VALLARAI CHOORANAM CAPSULES (500 mg)",
    "ta": "வல்லாரை சூரணம் காப்ஸ்யூல்கள் (500 மிகி)"
  },
  {
    "en": "VALLARAI CHOORANAM TABLET (500 mg)",
    "ta": "வல்லாரை சூரணம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "VALLARAI NEI",
    "ta": "வல்லாரை நெய்"
  },
  {
    "en": "VAMANAMIRTHAM (TAB.) (50 mg)",
    "ta": "வாமனமிர்தம் (தாவல்.) (50 மிகி)"
  },
  {
    "en": "VANA MEZHUGU",
    "ta": "வான மேழுகு"
  },
  {
    "en": "VANGA BHASMA",
    "ta": "வாங்க பாஸ்மா"
  },
  {
    "en": "VANGA PARPAM",
    "ta": "வாங்க பார்ப்பம்"
  },
  {
    "en": "VANGA VENNAI",
    "ta": "வாங்க வெண்ணை"
  },
  {
    "en": "VANGARA PARPAM",
    "ta": "வாங்கர பார்ப்பம்"
  },
  {
    "en": "VARATIKA BHASMA",
    "ta": "வரதிகா பாஸ்மா"
  },
  {
    "en": "VASAKANTAKARI LEHYAM",
    "ta": "வஸகந்தகரி லேஹ்யம்"
  },
  {
    "en": "VASANTHAKUSUMAKARAM (TAB.) (100 mg)",
    "ta": "வசந்தகுசுமகரம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "VASARISHTA",
    "ta": "வசரிஷ்டா"
  },
  {
    "en": "VATA VIDVAMSINI RASA (TAB.) (100 mg)",
    "ta": "வாத வித்வாம்சினி ராசா (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "VATAGNIKUMARA RASA (POWDER)",
    "ta": "வதக்னிகுமார ராசா (பொடி)"
  },
  {
    "en": "VATARAKSHASA (TAB.) (100 mg)",
    "ta": "வதராக்ஷாசா (TAB.) (100 mg)"
  },
  {
    "en": "VATARAKSHASAN (TAB.) (100 mg)",
    "ta": "வதராக்ஷசன் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "VATARI GUGGULU",
    "ta": "வட்டாரி குங்குலு"
  },
  {
    "en": "VATHA NOI OIL",
    "ta": "வதா நொய் எண்ணெய்"
  },
  {
    "en": "VATHA SURAM TABLET (500 mg)",
    "ta": "வதா சுரம் மாத்திரை (500 மிகி)"
  },
  {
    "en": "VATHAGAJANKUSA (PILLS) (100 mg)",
    "ta": "வதகஜாங்குசா (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "VATHAJWARA KUDINEER",
    "ta": "வதஜ்வர குடிநீர்"
  },
  {
    "en": "VATHAKESARI THAILAM",
    "ta": "வதகேசரி தைலம்"
  },
  {
    "en": "VEDIUPPU CHUNNAM",
    "ta": "வெடிப்பு சுன்னம்"
  },
  {
    "en": "VEDIUPPU CHUNNAM (WITHOUT AMAI ODU)",
    "ta": "வெடிப்பு சுன்னம் (அமை ஓடு இல்லாமல்)"
  },
  {
    "en": "VELLAI ENNEY ( PURA ENNEY)",
    "ta": "வெள்ளை எண்ணே (புற எண்ணே)"
  },
  {
    "en": "VELLAI MEZHUGU",
    "ta": "VELLAI MEZHUGU"
  },
  {
    "en": "VELLARUGU CHOORANAM",
    "ta": "வெள்ளருகு சூரணம்"
  },
  {
    "en": "VELLI CHENDURAM",
    "ta": "வெள்ளி செந்தூரம்"
  },
  {
    "en": "VELLI PARPAM",
    "ta": "வெள்ளி பார்ப்பம்"
  },
  {
    "en": "VELVANGA PARPAM",
    "ta": "வெல்வாங்க பார்ப்பம்"
  },
  {
    "en": "VENGARA MATHIRAI (PILLS) (100 mg)",
    "ta": "வெங்கர மாதிரி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "VENGARAPODI",
    "ta": "வெங்கரப்பொடி"
  },
  {
    "en": "VENKUTTA NOI TABLET (500 mg)",
    "ta": "வெங்குட்டா நொய் மாத்திரை (500 மிகி)"
  },
  {
    "en": "VENPADAI NOI OIL",
    "ta": "வெண்படை நொய் எண்ணெய்"
  },
  {
    "en": "VENPOOSINI LEHYAM",
    "ta": "வெண்பூசினி லேஹ்யம்"
  },
  {
    "en": "VENPOOSINI NEI",
    "ta": "வெண்பூசினி நெய்"
  },
  {
    "en": "VENTHAMARAI CHOORANAM",
    "ta": "வெந்தாமரை சூரணம்"
  },
  {
    "en": "VEPPILAI CHOORANAM",
    "ta": "வேப்பிலை சூரணம்"
  },
  {
    "en": "VILVA VER CHOORANAM",
    "ta": "வில்வ வேர் சூரணம்"
  },
  {
    "en": "VILVATI ILAKAM",
    "ta": "வில்வதி இலகம்"
  },
  {
    "en": "VIPPURUTHI ENNAI",
    "ta": "விப்புருத்தி என்னை"
  },
  {
    "en": "VIRANASANJEEVI THAILAM",
    "ta": "விரனசஞ்சீவி தைலம்"
  },
  {
    "en": "VIRECHANA BHUPATHY (PILLS) (100 mg)",
    "ta": "வீரேசன பூபதி (மாத்திரைகள்) (100 மி.கி.)"
  },
  {
    "en": "VISHA KUZHAMBU",
    "ta": "விஷ குழம்பு"
  },
  {
    "en": "VISHA KUZHAMBU CAPSULES (250 MG)",
    "ta": "விஷ குழம்பு காப்ஸ்யூல்கள் (250 மிகி)"
  },
  {
    "en": "VISHAMUSTI THAILAM",
    "ta": "விஷமுஸ்தி தைலம்"
  },
  {
    "en": "VISHNU CHAKKRAM (TAB.) (100 mg)",
    "ta": "விஷ்ணு சக்கரம் (தாவல்.) (100 மி.கி.)"
  },
  {
    "en": "VYATHIHARANA RASA",
    "ta": "வியாதிஹரண ராசா"
  },
  {
    "en": "VYOSHADI GUTIKA (500 mg)",
    "ta": "வியோஷாதி குடிகா (500 மி.கி.)"
  },
  {
    "en": "VYOSHADI KASAYAM CHURNAM",
    "ta": "வியோஷாதி கசாயம் சூர்ணம்"
  },
  {
    "en": "YASHTI CH. MATHIRAI (500 mg)",
    "ta": "யாஷ்டி சி.எச். மாதரை (500 மி.கி.)"
  },
  {
    "en": "YASHTI CHURNAM",
    "ta": "யஷ்டி சூர்ணம்"
  },
  {
    "en": "YASHTIMADHU GHRITA",
    "ta": "யாஷ்டிமது கிரிதா"
  },
  {
    "en": "YASTI CAPSULE (500 mg)",
    "ta": "யஸ்டி காப்ஸ்யூல் (500 மிகி)"
  },
  {
    "en": "YOGARAJA GUGGULU (500 mg)",
    "ta": "யோகராஜா குங்குலு (500 மி.கி.)"
  }
];
window.productsData = productsData;
