const countryNames = {
    ad: { name: 'Andorra' },
    ae: { name: 'United Arab Emirates' },
    af: { name: 'Afghanistan' },
    ag: { name: 'Antigua and Barbuda' },
    ai: { name: 'Anguilla' },
    al: { name: 'Albania' },
    am: { name: 'Armenia' },
    ao: { name: 'Angola' },
    ar: { name: 'Argentina' },
    at: { name: 'Austria' },
    au: { name: 'Australia' },
    aw: { name: 'Aruba' },
    az: { name: 'Azerbaijan' },
    ba: { name: 'Bosnia and Herzegovina' },
    bb: { name: 'Barbados' },
    bd: { name: 'Bangladesh' },
    be: { name: 'Belgium' },
    bf: { name: 'Burkina Faso' },
    bg: { name: 'Bulgaria' },
    bh: { name: 'Bahrain' },
    bi: { name: 'Burundi' },
    bj: { name: 'Benin' },
    bn: { name: 'Brunei' },
    bo: { name: 'Bolivia' },
    br: { name: 'Brazil' },
    bs: { name: 'Bahamas' },
    bt: { name: 'Bhutan' },
    bw: { name: 'Botswana' },
    by: { name: 'Belarus' },
    bz: { name: 'Belize' },
    ca: { name: 'Canada' },
    cd: { name: 'Democratic Republic of the Congo' },
    cf: { name: 'Central African Republic' },
    cg: { name: 'Republic of the Congo' },
    ch: { name: 'Switzerland' },
    ci: { name: 'Ivory Coast' },
    cl: { name: 'Chile' },
    cm: { name: 'Cameroon' },
    cn: { name: 'China' },
    co: { name: 'Colombia' },
    cr: { name: 'Costa Rica' },
    cu: { name: 'Cuba' },
    cv: { name: 'Cape Verde' },
    cy: { name: 'Cyprus' },
    cz: { name: 'Czechia' },
    de: { name: 'Germany' },
    dj: { name: 'Djibouti' },
    dk: { name: 'Denmark' },
    dm: { name: 'Dominica' },
    do: { name: 'Dominican Republic' },
    dz: { name: 'Algeria' },
    ec: { name: 'Ecuador' },
    ee: { name: 'Estonia' },
    eg: { name: 'Egypt' },
    er: { name: 'Eritrea' },
    es: { name: 'Spain' },
    et: { name: 'Ethiopia' },
    fi: { name: 'Finland' },
    fj: { name: 'Fiji' },
    fm: { name: 'Micronesia' },
    fo: { name: 'Faroe Islands' },
    fr: { name: 'France' },
    ga: { name: 'Gabon' },
    gb: { name: 'United Kingdom' },
    gd: { name: 'Grenada' },
    ge: { name: 'Georgia' },
    gf: { name: 'French Guiana' },
    gg: { name: 'Guernsey' },
    gh: { name: 'Ghana' },
    gi: { name: 'Gibraltar' },
    gl: { name: 'Greenland' },
    gm: { name: 'Gambia' },
    gn: { name: 'Guinea' },
    gq: { name: 'Equatorial Guinea' },
    gr: { name: 'Greece' },
    gt: { name: 'Guatemala' },
    gu: { name: 'Guam' },
    gw: { name: 'Guinea-Bissau' },
    gy: { name: 'Guyana' },
    hk: { name: 'Hong Kong' },
    hm: { name: 'Heard Island and McDonald Islands' },
    hn: { name: 'Honduras' },
    hr: { name: 'Croatia' },
    ht: { name: 'Haiti' },
    hu: { name: 'Hungary' },
    id: { name: 'Indonesia' },
    ie: { name: 'Ireland' },
    il: { name: 'Israel' },
    im: { name: 'Isle of Man' },
    in: { name: 'India' },
    io: { name: 'British Indian Ocean Territory' },
    iq: { name: 'Iraq' },
    ir: { name: 'Iran' },
    is: { name: 'Iceland' },
    it: { name: 'Italy' },
    je: { name: 'Jersey' },
    jm: { name: 'Jamaica' },
    jo: { name: 'Jordan' },
    jp: { name: 'Japan' },
    ke: { name: 'Kenya' },
    kg: { name: 'Kyrgyzstan' },
    kh: { name: 'Cambodia' },
    ki: { name: 'Kiribati' },
    km: { name: 'Comoros' },
    kn: { name: 'Saint Kitts and Nevis' },
    kp: { name: 'North Korea' },
    kr: { name: 'South Korea' },
    kw: { name: 'Kuwait' },
    ky: { name: 'Cayman Islands' },
    kz: { name: 'Kazakhstan' },
    la: { name: 'Laos' },
    lb: { name: 'Lebanon' },
    lc: { name: 'Saint Lucia' },
    li: { name: 'Liechtenstein' },
    lk: { name: 'Sri Lanka' },
    lr: { name: 'Liberia' },
    ls: { name: 'Lesotho' },
    lt: { name: 'Lithuania' },
    lu: { name: 'Luxembourg' },
    lv: { name: 'Latvia' },
    ly: { name: 'Libya' },
    ma: { name: 'Morocco' },
    mc: { name: 'Monaco' },
    md: { name: 'Moldova' },
    me: { name: 'Montenegro' },
    mf: { name: 'Saint Martin' },
    mg: { name: 'Madagascar' },
    mh: { name: 'Marshall Islands' },
    mk: { name: 'North Macedonia' },
    ml: { name: 'Mali' },
    mm: { name: 'Myanmar' },
    mn: { name: 'Mongolia' },
    mo: { name: 'Macau' },
    mp: { name: 'Northern Mariana Islands' },
    mq: { name: 'Martinique' },
    mr: { name: 'Mauritania' },
    ms: { name: 'Montserrat' },
    mt: { name: 'Malta' },
    mu: { name: 'Mauritius' },
    mv: { name: 'Maldives' },
    mw: { name: 'Malawi' },
    mx: { name: 'Mexico' },
    my: { name: 'Malaysia' },
    mz: { name: 'Mozambique' },
    na: { name: 'Namibia' },
    nc: { name: 'New Caledonia' },
    ne: { name: 'Niger' },
    nf: { name: 'Norfolk Island' },
    ng: { name: 'Nigeria' },
    ni: { name: 'Nicaragua' },
    nl: { name: 'Netherlands' },
    no: { name: 'Norway' },
    np: { name: 'Nepal' },
    nr: { name: 'Nauru' },
    nu: { name: 'Niue' },
    nz: { name: 'New Zealand' },
    om: { name: 'Oman' },
    pa: { name: 'Panama' },
    pe: { name: 'Peru' },
    pf: { name: 'French Polynesia' },
    pg: { name: 'Papua New Guinea' },
    ph: { name: 'Philippines' },
    pk: { name: 'Pakistan' },
    pl: { name: 'Poland' },
    pm: { name: 'Saint Pierre and Miquelon' },
    pn: { name: 'Pitcairn Islands' },
    pr: { name: 'Puerto Rico' },
    ps: { name: 'Palestine' },
    pt: { name: 'Portugal' },
    pw: { name: 'Palau' },
    py: { name: 'Paraguay' },
    qa: { name: 'Qatar' },
    re: { name: 'Réunion' },
    ro: { name: 'Romania' },
    rs: { name: 'Serbia' },
    ru: { name: 'Russia' },
    rw: { name: 'Rwanda' },
    sa: { name: 'Saudi Arabia' },
    sb: { name: 'Solomon Islands' },
    sc: { name: 'Seychelles' },
    sd: { name: 'Sudan' },
    se: { name: 'Sweden' },
    sg: { name: 'Singapore' },
    sh: { name: 'Saint Helena' },
    si: { name: 'Slovenia' },
    sj: { name: 'Svalbard and Jan Mayen' },
    sk: { name: 'Slovakia' },
    sl: { name: 'Sierra Leone' },
    sm: { name: 'San Marino' },
    sn: { name: 'Senegal' },
    so: { name: 'Somalia' },
    sr: { name: 'Suriname' },
    ss: { name: 'South Sudan' },
    st: { name: 'São Tomé and Príncipe' },
    sv: { name: 'El Salvador' },
    sx: { name: 'Sint Maarten' },
    sy: { name: 'Syria' },
    sz: { name: 'Eswatini' },
    tc: { name: 'Turks and Caicos Islands' },
    td: { name: 'Chad' },
    tf: { name: 'French Southern Territories' },
    tg: { name: 'Togo' },
    th: { name: 'Thailand' },
    tj: { name: 'Tajikistan' },
    tk: { name: 'Tokelau' },
    tl: { name: 'Timor-Leste' },
    tm: { name: 'Turkmenistan' },
    tn: { name: 'Tunisia' },
    to: { name: 'Tonga' },
    tr: { name: 'Turkey' },
    tt: { name: 'Trinidad and Tobago' },
    tv: { name: 'Tuvalu' },
    tw: { name: 'Taiwan' },
    tz: { name: 'Tanzania' },
    ua: { name: 'Ukraine' },
    ug: { name: 'Uganda' },
    um: { name: 'United States Minor Outlying Islands' },
    us: { name: 'United States' },
    uy: { name: 'Uruguay' },
    uz: { name: 'Uzbekistan' },
    va: { name: 'Vatican City' },
    vc: { name: 'Saint Vincent and the Grenadines' },
    ve: { name: 'Venezuela' },
    vg: { name: 'British Virgin Islands' },
    vi: { name: 'U.S. Virgin Islands' },
    vn: { name: 'Vietnam' },
    vu: { name: 'Vanuatu' },
    wf: { name: 'Wallis and Futuna' },
    ws: { name: 'Samoa' },
    ye: { name: 'Yemen' },
    yt: { name: 'Mayotte' },
    za: { name: 'South Africa' },
    zm: { name: 'Zambia' },
    zw: { name: 'Zimbabwe' },
    eh: { name: 'Western Sahara' },
    xk: { name: 'Kosovo' }
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
                FlagDrag.handleDrop(this, draggedCode, draggableList, result);
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

            // Touch event support for mobile
            let touchClone = null;
            let lastTouch = null;
            flag.addEventListener('touchstart', function (e) {
                if (e.touches.length !== 1) return;
                flag.style.opacity = '0.6';
                lastTouch = e.touches[0];
                // Create a clone to follow the finger
                touchClone = flag.cloneNode(true);
                touchClone.style.position = 'fixed';
                touchClone.style.pointerEvents = 'none';
                touchClone.style.zIndex = '9999';
                touchClone.style.left = (lastTouch.clientX - flag.width / 2) + 'px';
                touchClone.style.top = (lastTouch.clientY - flag.height / 2) + 'px';
                touchClone.style.opacity = '0.8';
                document.body.appendChild(touchClone);
            });
            flag.addEventListener('touchmove', function (e) {
                if (!touchClone || e.touches.length !== 1) return;
                lastTouch = e.touches[0];
                touchClone.style.left = (lastTouch.clientX - flag.width / 2) + 'px';
                touchClone.style.top = (lastTouch.clientY - flag.height / 2) + 'px';
                e.preventDefault();
            }, { passive: false });
            flag.addEventListener('touchend', function (e) {
                flag.style.opacity = '';
                if (touchClone) {
                    // Detect drop zone under finger
                    const dropZones = document.querySelectorAll('.drop-zone');
                    let dropped = false;
                    dropZones.forEach(zone => {
                        if (dropped) return;

                        const rect = zone.getBoundingClientRect();
                        if (lastTouch && lastTouch.clientX >= rect.left && lastTouch.clientX <= rect.right && lastTouch.clientY >= rect.top && lastTouch.clientY <= rect.bottom) {
                            FlagDrag.handleDrop(zone, countryCode, draggableList, result);
                            dropped = true;
                        }
                    });
                    document.body.removeChild(touchClone);
                    touchClone = null;
                    lastTouch = null;
                }
            });
            draggableList.appendChild(flag);
        });
    }

    static handleDrop(zone, draggedCode, draggableList, result) {
        if (zone.classList.contains('correct')) return; // Already correct
        
        const countryCode = zone.dataset.country;
        if (draggedCode === countryCode) {
            zone.classList.add('correct');
            zone.classList.remove('incorrect');
            zone.innerHTML = `<strong>Correct! ${countryNames[countryCode].name}</strong>`;
            zone.ondrop = e => e.preventDefault();
            storage.addCoins(1);
            const flagEl = document.getElementById(`flag-${countryCode}`);
            if (flagEl) flagEl.remove();
            if (draggableList.children.length === 0) {
                result.innerHTML = '<strong>All flags placed! Well done!</strong><br /><a href="javascript:FlagDrag.setUpFlags()">Play Again</a>';
            }
        } else {
            zone.classList.add('incorrect');
            zone.innerHTML = `<strong>Wrong! Try again for ${countryNames[countryCode].name}</strong>`;
        }
    }
};
