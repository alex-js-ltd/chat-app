const countryCodes = [
    {
        code: '+93',
        country: 'Afghanistan',
        iso: 'AF',
    },
    {
        code: '+355',
        country: 'Albania',
        iso: 'AL',
    },
    {
        code: '+213',
        country: 'Algeria',
        iso: 'DZ',
    },
    {
        code: '+1-684',
        country: 'American Samoa',
        iso: 'AS',
    },
    {
        code: '+376',
        country: 'Andorra',
        iso: 'AD',
    },
    {
        code: '+244',
        country: 'Angola',
        iso: 'AO',
    },
    {
        code: '+1-264',
        country: 'Anguilla',
        iso: 'AI',
    },
    {
        code: '+672',
        country: 'Antarctica',
        iso: 'AQ',
    },
    {
        code: '+1-268',
        country: 'Antigua and Barbuda',
        iso: 'AG',
    },
    {
        code: '+54',
        country: 'Argentina',
        iso: 'AR',
    },
    {
        code: '+374',
        country: 'Armenia',
        iso: 'AM',
    },
    {
        code: '+297',
        country: 'Aruba',
        iso: 'AW',
    },
    {
        code: '+61',
        country: 'Australia',
        iso: 'AU',
    },
    {
        code: '+43',
        country: 'Austria',
        iso: 'AT',
    },
    {
        code: '+994',
        country: 'Azerbaijan',
        iso: 'AZ',
    },
    {
        code: '+1-242',
        country: 'Bahamas',
        iso: 'BS',
    },
    {
        code: '+973',
        country: 'Bahrain',
        iso: 'BH',
    },
    {
        code: '+880',
        country: 'Bangladesh',
        iso: 'BD',
    },
    {
        code: '+1-246',
        country: 'Barbados',
        iso: 'BB',
    },
    {
        code: '+375',
        country: 'Belarus',
        iso: 'BY',
    },
    {
        code: '+32',
        country: 'Belgium',
        iso: 'BE',
    },
    {
        code: '+501',
        country: 'Belize',
        iso: 'BZ',
    },
    {
        code: '+229',
        country: 'Benin',
        iso: 'BJ',
    },
    {
        code: '+1-441',
        country: 'Bermuda',
        iso: 'BM',
    },
    {
        code: '+975',
        country: 'Bhutan',
        iso: 'BT',
    },
    {
        code: '+591',
        country: 'Bolivia',
        iso: 'BO',
    },
    {
        code: '+387',
        country: 'Bosnia and Herzegovina',
        iso: 'BA',
    },
    {
        code: '+267',
        country: 'Botswana',
        iso: 'BW',
    },
    {
        code: '+55',
        country: 'Brazil',
        iso: 'BR',
    },
    {
        code: '+246',
        country: 'British Indian Ocean Territory',
        iso: 'IO',
    },
    {
        code: '+1-284',
        country: 'British Virgin Islands',
        iso: 'VG',
    },
    {
        code: '+673',
        country: 'Brunei',
        iso: 'BN',
    },
    {
        code: '+359',
        country: 'Bulgaria',
        iso: 'BG',
    },
    {
        code: '+226',
        country: 'Burkina Faso',
        iso: 'BF',
    },
    {
        code: '+257',
        country: 'Burundi',
        iso: 'BI',
    },
    {
        code: '+855',
        country: 'Cambodia',
        iso: 'KH',
    },
    {
        code: '+237',
        country: 'Cameroon',
        iso: 'CM',
    },
    {
        code: '+1',
        country: 'Canada',
        iso: 'CA',
    },
    {
        code: '+238',
        country: 'Cape Verde',
        iso: 'CV',
    },
    {
        code: '+1-345',
        country: 'Cayman Islands',
        iso: 'KY',
    },
    {
        code: '+236',
        country: 'Central African Republic',
        iso: 'CF',
    },
    {
        code: '+235',
        country: 'Chad',
        iso: 'TD',
    },
    {
        code: '+56',
        country: 'Chile',
        iso: 'CL',
    },
    {
        code: '+86',
        country: 'China',
        iso: 'CN',
    },
    {
        code: '+61',
        country: 'Christmas Island',
        iso: 'CX',
    },
    {
        code: '+61',
        country: 'Cocos Islands',
        iso: 'CC',
    },
    {
        code: '+57',
        country: 'Colombia',
        iso: 'CO',
    },
    {
        code: '+269',
        country: 'Comoros',
        iso: 'KM',
    },
    {
        code: '+682',
        country: 'Cook Islands',
        iso: 'CK',
    },
    {
        code: '+506',
        country: 'Costa Rica',
        iso: 'CR',
    },
    {
        code: '+385',
        country: 'Croatia',
        iso: 'HR',
    },
    {
        code: '+53',
        country: 'Cuba',
        iso: 'CU',
    },
    {
        code: '+599',
        country: 'Curacao',
        iso: 'CW',
    },
    {
        code: '+357',
        country: 'Cyprus',
        iso: 'CY',
    },
    {
        code: '+420',
        country: 'Czech Republic',
        iso: 'CZ',
    },
    {
        code: '+243',
        country: 'Democratic Republic of the Congo',
        iso: 'CD',
    },
    {
        code: '+45',
        country: 'Denmark',
        iso: 'DK',
    },
    {
        code: '+253',
        country: 'Djibouti',
        iso: 'DJ',
    },
    {
        code: '+1-767',
        country: 'Dominica',
        iso: 'DM',
    },
    {
        code: '+1-809, 1-829, 1-849',
        country: 'Dominican Republic',
        iso: 'DO',
    },
    {
        code: '+670',
        country: 'East Timor',
        iso: 'TL',
    },
    {
        code: '+593',
        country: 'Ecuador',
        iso: 'EC',
    },
    {
        code: '+20',
        country: 'Egypt',
        iso: 'EG',
    },
    {
        code: '+503',
        country: 'El Salvador',
        iso: 'SV',
    },
    {
        code: '+240',
        country: 'Equatorial Guinea',
        iso: 'GQ',
    },
    {
        code: '+291',
        country: 'Eritrea',
        iso: 'ER',
    },
    {
        code: '+372',
        country: 'Estonia',
        iso: 'EE',
    },
    {
        code: '+251',
        country: 'Ethiopia',
        iso: 'ET',
    },
    {
        code: '+500',
        country: 'Falkland Islands',
        iso: 'FK',
    },
    {
        code: '+298',
        country: 'Faroe Islands',
        iso: 'FO',
    },
    {
        code: '+679',
        country: 'Fiji',
        iso: 'FJ',
    },
    {
        code: '+358',
        country: 'Finland',
        iso: 'FI',
    },
    {
        code: '+33',
        country: 'France',
        iso: 'FR',
    },
    {
        code: '+689',
        country: 'French Polynesia',
        iso: 'PF',
    },
    {
        code: '+241',
        country: 'Gabon',
        iso: 'GA',
    },
    {
        code: '+220',
        country: 'Gambia',
        iso: 'GM',
    },
    {
        code: '+995',
        country: 'Georgia',
        iso: 'GE',
    },
    {
        code: '+49',
        country: 'Germany',
        iso: 'DE',
    },
    {
        code: '+233',
        country: 'Ghana',
        iso: 'GH',
    },
    {
        code: '+350',
        country: 'Gibraltar',
        iso: 'GI',
    },
    {
        code: '+30',
        country: 'Greece',
        iso: 'GR',
    },
    {
        code: '+299',
        country: 'Greenland',
        iso: 'GL',
    },
    {
        code: '+1-473',
        country: 'Grenada',
        iso: 'GD',
    },
    {
        code: '+1-671',
        country: 'Guam',
        iso: 'GU',
    },
    {
        code: '+502',
        country: 'Guatemala',
        iso: 'GT',
    },
    {
        code: '+44-1481',
        country: 'Guernsey',
        iso: 'GG',
    },
    {
        code: '+224',
        country: 'Guinea',
        iso: 'GN',
    },
    {
        code: '+245',
        country: 'Guinea-Bissau',
        iso: 'GW',
    },
    {
        code: '+592',
        country: 'Guyana',
        iso: 'GY',
    },
    {
        code: '+509',
        country: 'Haiti',
        iso: 'HT',
    },
    {
        code: '+504',
        country: 'Honduras',
        iso: 'HN',
    },
    {
        code: '+852',
        country: 'Hong Kong',
        iso: 'HK',
    },
    {
        code: '+36',
        country: 'Hungary',
        iso: 'HU',
    },
    {
        code: '+354',
        country: 'Iceland',
        iso: 'IS',
    },
    {
        code: '+91',
        country: 'India',
        iso: 'IN',
    },
    {
        code: '+62',
        country: 'Indonesia',
        iso: 'ID',
    },
    {
        code: '+98',
        country: 'Iran',
        iso: 'IR',
    },
    {
        code: '+964',
        country: 'Iraq',
        iso: 'IQ',
    },
    {
        code: '+353',
        country: 'Ireland',
        iso: 'IE',
    },
    {
        code: '+44-1624',
        country: 'Isle of Man',
        iso: 'IM',
    },
    {
        code: '+972',
        country: 'Israel',
        iso: 'IL',
    },
    {
        code: '+39',
        country: 'Italy',
        iso: 'IT',
    },
    {
        code: '+225',
        country: 'Ivory Coast',
        iso: 'CI',
    },
    {
        code: '+1-876',
        country: 'Jamaica',
        iso: 'JM',
    },
    {
        code: '+81',
        country: 'Japan',
        iso: 'JP',
    },
    {
        code: '+44-1534',
        country: 'Jersey',
        iso: 'JE',
    },
    {
        code: '+962',
        country: 'Jordan',
        iso: 'JO',
    },
    {
        code: '+7',
        country: 'Kazakhstan',
        iso: 'KZ',
    },
    {
        code: '+254',
        country: 'Kenya',
        iso: 'KE',
    },
    {
        code: '+686',
        country: 'Kiribati',
        iso: 'KI',
    },
    {
        code: '+383',
        country: 'Kosovo',
        iso: 'XK',
    },
    {
        code: '+965',
        country: 'Kuwait',
        iso: 'KW',
    },
    {
        code: '+996',
        country: 'Kyrgyzstan',
        iso: 'KG',
    },
    {
        code: '+856',
        country: 'Laos',
        iso: 'LA',
    },
    {
        code: '+371',
        country: 'Latvia',
        iso: 'LV',
    },
    {
        code: '+961',
        country: 'Lebanon',
        iso: 'LB',
    },
    {
        code: '+266',
        country: 'Lesotho',
        iso: 'LS',
    },
    {
        code: '+231',
        country: 'Liberia',
        iso: 'LR',
    },
    {
        code: '+218',
        country: 'Libya',
        iso: 'LY',
    },
    {
        code: '+423',
        country: 'Liechtenstein',
        iso: 'LI',
    },
    {
        code: '+370',
        country: 'Lithuania',
        iso: 'LT',
    },
    {
        code: '+352',
        country: 'Luxembourg',
        iso: 'LU',
    },
    {
        code: '+853',
        country: 'Macao',
        iso: 'MO',
    },
    {
        code: '+389',
        country: 'Macedonia',
        iso: 'MK',
    },
    {
        code: '+261',
        country: 'Madagascar',
        iso: 'MG',
    },
    {
        code: '+265',
        country: 'Malawi',
        iso: 'MW',
    },
    {
        code: '+60',
        country: 'Malaysia',
        iso: 'MY',
    },
    {
        code: '+960',
        country: 'Maldives',
        iso: 'MV',
    },
    {
        code: '+223',
        country: 'Mali',
        iso: 'ML',
    },
    {
        code: '+356',
        country: 'Malta',
        iso: 'MT',
    },
    {
        code: '+692',
        country: 'Marshall Islands',
        iso: 'MH',
    },
    {
        code: '+222',
        country: 'Mauritania',
        iso: 'MR',
    },
    {
        code: '+230',
        country: 'Mauritius',
        iso: 'MU',
    },
    {
        code: '+262',
        country: 'Mayotte',
        iso: 'YT',
    },
    {
        code: '+52',
        country: 'Mexico',
        iso: 'MX',
    },
    {
        code: '+691',
        country: 'Micronesia',
        iso: 'FM',
    },
    {
        code: '+373',
        country: 'Moldova',
        iso: 'MD',
    },
    {
        code: '+377',
        country: 'Monaco',
        iso: 'MC',
    },
    {
        code: '+976',
        country: 'Mongolia',
        iso: 'MN',
    },
    {
        code: '+382',
        country: 'Montenegro',
        iso: 'ME',
    },
    {
        code: '+1-664',
        country: 'Montserrat',
        iso: 'MS',
    },
    {
        code: '+212',
        country: 'Morocco',
        iso: 'MA',
    },
    {
        code: '+258',
        country: 'Mozambique',
        iso: 'MZ',
    },
    {
        code: '+95',
        country: 'Myanmar',
        iso: 'MM',
    },
    {
        code: '+264',
        country: 'Namibia',
        iso: 'NA',
    },
    {
        code: '+674',
        country: 'Nauru',
        iso: 'NR',
    },
    {
        code: '+977',
        country: 'Nepal',
        iso: 'NP',
    },
    {
        code: '+31',
        country: 'Netherlands',
        iso: 'NL',
    },
    {
        code: '+599',
        country: 'Netherlands Antilles',
        iso: 'AN',
    },
    {
        code: '+687',
        country: 'New Caledonia',
        iso: 'NC',
    },
    {
        code: '+64',
        country: 'New Zealand',
        iso: 'NZ',
    },
    {
        code: '+505',
        country: 'Nicaragua',
        iso: 'NI',
    },
    {
        code: '+227',
        country: 'Niger',
        iso: 'NE',
    },
    {
        code: '+234',
        country: 'Nigeria',
        iso: 'NG',
    },
    {
        code: '+683',
        country: 'Niue',
        iso: 'NU',
    },
    {
        code: '+850',
        country: 'North Korea',
        iso: 'KP',
    },
    {
        code: '+1-670',
        country: 'Northern Mariana Islands',
        iso: 'MP',
    },
    {
        code: '+47',
        country: 'Norway',
        iso: 'NO',
    },
    {
        code: '+968',
        country: 'Oman',
        iso: 'OM',
    },
    {
        code: '+92',
        country: 'Pakistan',
        iso: 'PK',
    },
    {
        code: '+680',
        country: 'Palau',
        iso: 'PW',
    },
    {
        code: '+970',
        country: 'Palestine',
        iso: 'PS',
    },
    {
        code: '+507',
        country: 'Panama',
        iso: 'PA',
    },
    {
        code: '+675',
        country: 'Papua New Guinea',
        iso: 'PG',
    },
    {
        code: '+595',
        country: 'Paraguay',
        iso: 'PY',
    },
    {
        code: '+51',
        country: 'Peru',
        iso: 'PE',
    },
    {
        code: '+63',
        country: 'Philippines',
        iso: 'PH',
    },
    {
        code: '+64',
        country: 'Pitcairn',
        iso: 'PN',
    },
    {
        code: '+48',
        country: 'Poland',
        iso: 'PL',
    },
    {
        code: '+351',
        country: 'Portugal',
        iso: 'PT',
    },
    {
        code: '+1-787, 1-939',
        country: 'Puerto Rico',
        iso: 'PR',
    },
    {
        code: '+974',
        country: 'Qatar',
        iso: 'QA',
    },
    {
        code: '+242',
        country: 'Republic of the Congo',
        iso: 'CG',
    },
    {
        code: '+262',
        country: 'Reunion',
        iso: 'RE',
    },
    {
        code: '+40',
        country: 'Romania',
        iso: 'RO',
    },
    {
        code: '+7',
        country: 'Russia',
        iso: 'RU',
    },
    {
        code: '+250',
        country: 'Rwanda',
        iso: 'RW',
    },
    {
        code: '+590',
        country: 'Saint Barthelemy',
        iso: 'BL',
    },
    {
        code: '+290',
        country: 'Saint Helena',
        iso: 'SH',
    },
    {
        code: '+1-869',
        country: 'Saint Kitts and Nevis',
        iso: 'KN',
    },
    {
        code: '+1-758',
        country: 'Saint Lucia',
        iso: 'LC',
    },
    {
        code: '+590',
        country: 'Saint Martin',
        iso: 'MF',
    },
    {
        code: '+508',
        country: 'Saint Pierre and Miquelon',
        iso: 'PM',
    },
    {
        code: '+1-784',
        country: 'Saint Vincent and the Grenadines',
        iso: 'VC',
    },
    {
        code: '+685',
        country: 'Samoa',
        iso: 'WS',
    },
    {
        code: '+378',
        country: 'San Marino',
        iso: 'SM',
    },
    {
        code: '+239',
        country: 'Sao Tome and Principe',
        iso: 'ST',
    },
    {
        code: '+966',
        country: 'Saudi Arabia',
        iso: 'SA',
    },
    {
        code: '+221',
        country: 'Senegal',
        iso: 'SN',
    },
    {
        code: '+381',
        country: 'Serbia',
        iso: 'RS',
    },
    {
        code: '+248',
        country: 'Seychelles',
        iso: 'SC',
    },
    {
        code: '+232',
        country: 'Sierra Leone',
        iso: 'SL',
    },
    {
        code: '+65',
        country: 'Singapore',
        iso: 'SG',
    },
    {
        code: '+1-721',
        country: 'Sint Maarten',
        iso: 'SX',
    },
    {
        code: '+421',
        country: 'Slovakia',
        iso: 'SK',
    },
    {
        code: '+386',
        country: 'Slovenia',
        iso: 'SI',
    },
    {
        code: '+677',
        country: 'Solomon Islands',
        iso: 'SB',
    },
    {
        code: '+252',
        country: 'Somalia',
        iso: 'SO',
    },
    {
        code: '+27',
        country: 'South Africa',
        iso: 'ZA',
    },
    {
        code: '+82',
        country: 'South Korea',
        iso: 'KR',
    },
    {
        code: '+211',
        country: 'South Sudan',
        iso: 'SS',
    },
    {
        code: '+34',
        country: 'Spain',
        iso: 'ES',
    },
    {
        code: '+94',
        country: 'Sri Lanka',
        iso: 'LK',
    },
    {
        code: '+249',
        country: 'Sudan',
        iso: 'SD',
    },
    {
        code: '+597',
        country: 'Suriname',
        iso: 'SR',
    },
    {
        code: '+47',
        country: 'Svalbard and Jan Mayen',
        iso: 'SJ',
    },
    {
        code: '+268',
        country: 'Swaziland',
        iso: 'SZ',
    },
    {
        code: '+46',
        country: 'Sweden',
        iso: 'SE',
    },
    {
        code: '+41',
        country: 'Switzerland',
        iso: 'CH',
    },
    {
        code: '+963',
        country: 'Syria',
        iso: 'SY',
    },
    {
        code: '+886',
        country: 'Taiwan',
        iso: 'TW',
    },
    {
        code: '+992',
        country: 'Tajikistan',
        iso: 'TJ',
    },
    {
        code: '+255',
        country: 'Tanzania',
        iso: 'TZ',
    },
    {
        code: '+66',
        country: 'Thailand',
        iso: 'TH',
    },
    {
        code: '+228',
        country: 'Togo',
        iso: 'TG',
    },
    {
        code: '+690',
        country: 'Tokelau',
        iso: 'TK',
    },
    {
        code: '+676',
        country: 'Tonga',
        iso: 'TO',
    },
    {
        code: '+1-868',
        country: 'Trinidad and Tobago',
        iso: 'TT',
    },
    {
        code: '+216',
        country: 'Tunisia',
        iso: 'TN',
    },
    {
        code: '+90',
        country: 'Turkey',
        iso: 'TR',
    },
    {
        code: '+993',
        country: 'Turkmenistan',
        iso: 'TM',
    },
    {
        code: '+1-649',
        country: 'Turks and Caicos Islands',
        iso: 'TC',
    },
    {
        code: '+688',
        country: 'Tuvalu',
        iso: 'TV',
    },
    {
        code: '+1-340',
        country: 'U.S. Virgin Islands',
        iso: 'VI',
    },
    {
        code: '+256',
        country: 'Uganda',
        iso: 'UG',
    },
    {
        code: '+380',
        country: 'Ukraine',
        iso: 'UA',
    },
    {
        code: '+971',
        country: 'United Arab Emirates',
        iso: 'AE',
    },
    {
        code: '+44',
        country: 'United Kingdom',
        iso: 'GB',
    },
    {
        code: '+1',
        country: 'United States',
        iso: 'US',
    },
    {
        code: '+598',
        country: 'Uruguay',
        iso: 'UY',
    },
    {
        code: '+998',
        country: 'Uzbekistan',
        iso: 'UZ',
    },
    {
        code: '+678',
        country: 'Vanuatu',
        iso: 'VU',
    },
    {
        code: '+379',
        country: 'Vatican',
        iso: 'VA',
    },
    {
        code: '+58',
        country: 'Venezuela',
        iso: 'VE',
    },
    {
        code: '+84',
        country: 'Vietnam',
        iso: 'VN',
    },
    {
        code: '+681',
        country: 'Wallis and Futuna',
        iso: 'WF',
    },
    {
        code: '+212',
        country: 'Western Sahara',
        iso: 'EH',
    },
    {
        code: '+967',
        country: 'Yemen',
        iso: 'YE',
    },
    {
        code: '+260',
        country: 'Zambia',
        iso: 'ZM',
    },
    {
        code: '+263',
        country: 'Zimbabwe',
        iso: 'ZW',
    },
]

export { countryCodes }
