const countryNames = {
    AD: { name: 'Andorra' },
    AE: { name: 'United Arab Emirates' },
    AF: { name: 'Afghanistan' },
    AG: { name: 'Antigua and Barbuda' },
    AI: { name: 'Anguilla' },
    AL: { name: 'Albania' },
    AM: { name: 'Armenia' },
    AO: { name: 'Angola' },
    AR: { name: 'Argentina' },
    AT: { name: 'Austria' },
    AU: { name: 'Australia' },
    AW: { name: 'Aruba' },
    AZ: { name: 'Azerbaijan' },
    BA: { name: 'Bosnia and Herzegovina' },
    BB: { name: 'Barbados' },
    BD: { name: 'Bangladesh' },
    BE: { name: 'Belgium' },
    BF: { name: 'Burkina Faso' },
    BG: { name: 'Bulgaria' },
    BH: { name: 'Bahrain' },
    BI: { name: 'Burundi' },
    BJ: { name: 'Benin' },
    BN: { name: 'Brunei' },
    BO: { name: 'Bolivia' },
    BR: { name: 'Brazil' },
    BS: { name: 'Bahamas' },
    BT: { name: 'Bhutan' },
    BW: { name: 'Botswana' },
    BY: { name: 'Belarus' },
    BZ: { name: 'Belize' },
    CA: { name: 'Canada' },
    CD: { name: 'Democratic Republic of the Congo' },
    CF: { name: 'Central African Republic' },
    CG: { name: 'Republic of the Congo' },
    CH: { name: 'Switzerland' },
    CI: { name: 'Ivory Coast' },
    CL: { name: 'Chile' },
    CM: { name: 'Cameroon' },
    CN: { name: 'China' },
    CO: { name: 'Colombia' },
    CR: { name: 'Costa Rica' },
    CU: { name: 'Cuba' },
    CV: { name: 'Cape Verde' },
    CY: { name: 'Cyprus' },
    CZ: { name: 'Czechia' },
    DE: { name: 'Germany' },
    DJ: { name: 'Djibouti' },
    DK: { name: 'Denmark' },
    DM: { name: 'Dominica' },
    DO: { name: 'Dominican Republic' },
    DZ: { name: 'Algeria' },
    EC: { name: 'Ecuador' },
    EE: { name: 'Estonia' },
    EG: { name: 'Egypt' },
    ER: { name: 'Eritrea' },
    ES: { name: 'Spain' },
    ET: { name: 'Ethiopia' },
    FI: { name: 'Finland' },
    FJ: { name: 'Fiji' },
    FM: { name: 'Micronesia' },
    FO: { name: 'Faroe Islands' },
    FR: { name: 'France' },
    GA: { name: 'Gabon' },
    GB: { name: 'United Kingdom' },
    GD: { name: 'Grenada' },
    GE: { name: 'Georgia' },
    GF: { name: 'French Guiana' },
    GG: { name: 'Guernsey' },
    GH: { name: 'Ghana' },
    GI: { name: 'Gibraltar' },
    GL: { name: 'Greenland' },
    GM: { name: 'Gambia' },
    GN: { name: 'Guinea' },
    GQ: { name: 'Equatorial Guinea' },
    GR: { name: 'Greece' },
    GT: { name: 'Guatemala' },
    GU: { name: 'Guam' },
    GW: { name: 'Guinea-Bissau' },
    GY: { name: 'Guyana' },
    HK: { name: 'Hong Kong' },
    HM: { name: 'Heard Island and McDonald Islands' },
    HN: { name: 'Honduras' },
    HR: { name: 'Croatia' },
    HT: { name: 'Haiti' },
    HU: { name: 'Hungary' },
    ID: { name: 'Indonesia' },
    IE: { name: 'Ireland' },
    IL: { name: 'Israel' },
    IM: { name: 'Isle of Man' },
    IN: { name: 'India' },
    IO: { name: 'British Indian Ocean Territory' },
    IQ: { name: 'Iraq' },
    IR: { name: 'Iran' },
    IS: { name: 'Iceland' },
    IT: { name: 'Italy' },
    JE: { name: 'Jersey' },
    JM: { name: 'Jamaica' },
    JO: { name: 'Jordan' },
    JP: { name: 'Japan' },
    KE: { name: 'Kenya' },
    KG: { name: 'Kyrgyzstan' },
    KH: { name: 'Cambodia' },
    KI: { name: 'Kiribati' },
    KM: { name: 'Comoros' },
    KN: { name: 'Saint Kitts and Nevis' },
    KP: { name: 'North Korea' },
    KR: { name: 'South Korea' },
    KW: { name: 'Kuwait' },
    KY: { name: 'Cayman Islands' },
    KZ: { name: 'Kazakhstan' },
    LA: { name: 'Laos' },
    LB: { name: 'Lebanon' },
    LC: { name: 'Saint Lucia' },
    LI: { name: 'Liechtenstein' },
    LK: { name: 'Sri Lanka' },
    LR: { name: 'Liberia' },
    LS: { name: 'Lesotho' },
    LT: { name: 'Lithuania' },
    LU: { name: 'Luxembourg' },
    LV: { name: 'Latvia' },
    LY: { name: 'Libya' },
    MA: { name: 'Morocco' },
    MC: { name: 'Monaco' },
    MD: { name: 'Moldova' },
    ME: { name: 'Montenegro' },
    MF: { name: 'Saint Martin' },
    MG: { name: 'Madagascar' },
    MH: { name: 'Marshall Islands' },
    MK: { name: 'North Macedonia' },
    ML: { name: 'Mali' },
    MM: { name: 'Myanmar' },
    MN: { name: 'Mongolia' },
    MO: { name: 'Macau' },
    MP: { name: 'Northern Mariana Islands' },
    MQ: { name: 'Martinique' },
    MR: { name: 'Mauritania' },
    MS: { name: 'Montserrat' },
    MT: { name: 'Malta' },
    MU: { name: 'Mauritius' },
    MV: { name: 'Maldives' },
    MW: { name: 'Malawi' },
    MX: { name: 'Mexico' },
    MY: { name: 'Malaysia' },
    MZ: { name: 'Mozambique' },
    NA: { name: 'Namibia' },
    NC: { name: 'New Caledonia' },
    NE: { name: 'Niger' },
    NF: { name: 'Norfolk Island' },
    NG: { name: 'Nigeria' },
    NI: { name: 'Nicaragua' },
    NL: { name: 'Netherlands' },
    NO: { name: 'Norway' },
    NP: { name: 'Nepal' },
    NR: { name: 'Nauru' },
    NU: { name: 'Niue' },
    NZ: { name: 'New Zealand' },
    OM: { name: 'Oman' },
    PA: { name: 'Panama' },
    PE: { name: 'Peru' },
    PF: { name: 'French Polynesia' },
    PG: { name: 'Papua New Guinea' },
    PH: { name: 'Philippines' },
    PK: { name: 'Pakistan' },
    PL: { name: 'Poland' },
    PM: { name: 'Saint Pierre and Miquelon' },
    PN: { name: 'Pitcairn Islands' },
    PR: { name: 'Puerto Rico' },
    PS: { name: 'Palestine' },
    PT: { name: 'Portugal' },
    PW: { name: 'Palau' },
    PY: { name: 'Paraguay' },
    QA: { name: 'Qatar' },
    RE: { name: 'Réunion' },
    RO: { name: 'Romania' },
    RS: { name: 'Serbia' },
    RU: { name: 'Russia' },
    RW: { name: 'Rwanda' },
    SA: { name: 'Saudi Arabia' },
    SB: { name: 'Solomon Islands' },
    SC: { name: 'Seychelles' },
    SD: { name: 'Sudan' },
    SE: { name: 'Sweden' },
    SG: { name: 'Singapore' },
    SH: { name: 'Saint Helena' },
    SI: { name: 'Slovenia' },
    SJ: { name: 'Svalbard and Jan Mayen' },
    SK: { name: 'Slovakia' },
    SL: { name: 'Sierra Leone' },
    SM: { name: 'San Marino' },
    SN: { name: 'Senegal' },
    SO: { name: 'Somalia' },
    SR: { name: 'Suriname' },
    SS: { name: 'South Sudan' },
    ST: { name: 'São Tomé and Príncipe' },
    SV: { name: 'El Salvador' },
    SX: { name: 'Sint Maarten' },
    SY: { name: 'Syria' },
    SZ: { name: 'Eswatini' },
    TC: { name: 'Turks and Caicos Islands' },
    TD: { name: 'Chad' },
    TF: { name: 'French Southern Territories' },
    TG: { name: 'Togo' },
    TH: { name: 'Thailand' },
    TJ: { name: 'Tajikistan' },
    TK: { name: 'Tokelau' },
    TL: { name: 'Timor-Leste' },
    TM: { name: 'Turkmenistan' },
    TN: { name: 'Tunisia' },
    TO: { name: 'Tonga' },
    TR: { name: 'Turkey' },
    TT: { name: 'Trinidad and Tobago' },
    TV: { name: 'Tuvalu' },
    TW: { name: 'Taiwan' },
    TZ: { name: 'Tanzania' },
    UA: { name: 'Ukraine' },
    UG: { name: 'Uganda' },
    UM: { name: 'United States Minor Outlying Islands' },
    US: { name: 'United States' },
    UY: { name: 'Uruguay' },
    UZ: { name: 'Uzbekistan' },
    VA: { name: 'Vatican City' },
    VC: { name: 'Saint Vincent and the Grenadines' },
    VE: { name: 'Venezuela' },
    VG: { name: 'British Virgin Islands' },
    VI: { name: 'U.S. Virgin Islands' },
    VN: { name: 'Vietnam' },
    VU: { name: 'Vanuatu' },
    WF: { name: 'Wallis and Futuna' },
    WS: { name: 'Samoa' },
    YE: { name: 'Yemen' },
    YT: { name: 'Mayotte' },
    ZA: { name: 'South Africa' },
    ZM: { name: 'Zambia' },
    ZW: { name: 'Zimbabwe' },
    EH: { name: 'Western Sahara' },
    XK: { name: 'Kosovo' }
};

class FlagDrag {
    static setUpFlags() {
        const dropZones = document.getElementById('dropZones');
        const draggableList = document.getElementById('draggableCountries');
        const result = document.getElementById('result');

        dropZones.innerHTML = '';
        draggableList.innerHTML = '';
        result.innerHTML = '';

        const countries = Object.keys(countryNames).sort(() => Math.random() - 0.5);
        countries.length = 5;

        // Create drop zones
        countries.forEach(countryCode => {
            const zone = document.createElement('div');
            zone.className = 'drop-zone';
            zone.dataset.country = countryCode;
            zone.innerHTML = `<span>Drop here: ${countryNames[countryCode].name}</span>`;
            zone.ondragover = e => e.preventDefault();
            zone.ondrop = function (e) {
                e.preventDefault();
                const draggedCode = e.dataTransfer.getData('text/plain');
                if (draggedCode === countryCode) {
                    this.style.background = '#cfc';
                    this.innerHTML = `<strong>Correct! ${countryNames[countryCode].name}</strong>`;
                    this.ondrop = e => e.preventDefault();

                    storage.addCoins(1);

                    document.getElementById(`flag-${countryCode}`).remove();
                    if (draggableList.children.length === 0) {
                        result.innerHTML = '<strong>All flags placed! Well done!</strong><br /><a href="javascript:FlagDrag.setUpFlags()">Play Again</a>';
                    }
                } else {
                    this.style.background = '#fcc';
                    this.innerHTML = `<strong>Wrong! Try again for ${countryNames[countryCode].name}</strong>`;
                }
            };
            dropZones.appendChild(zone);
        });

        countries.sort(() => Math.random() - 0.5);

        // Create draggable flags
        countries.forEach(countryCode => {
            const flag = document.createElement('img');
            flag.id = `flag-${countryCode}`;
            flag.src = `assets/flags/${countryCode}.webp`;
            flag.className = 'draggable-flag';
            flag.draggable = true;
            flag.dataset.country = countryCode;
            flag.ondragstart = function (e) {
                e.dataTransfer.setData('text/plain', countryCode);
            };
            draggableList.appendChild(flag);
        });
    }
};
