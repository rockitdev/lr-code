import { useState } from 'react';
import axios from 'axios';

const countries = [{
  name: 'Afghanistan',
  code: 'AF'
},
{
  name: 'Åland Islands',
  code: 'AX'
},
{
  name: 'Albania',
  code: 'AL'
},
{
  name: 'Algeria',
  code: 'DZ'
},
{
  name: 'American Samoa',
  code: 'AS'
},
{
  name: 'AndorrA',
  code: 'AD'
},
{
  name: 'Angola',
  code: 'AO'
},
{
  name: 'Anguilla',
  code: 'AI'
},
{
  name: 'Antarctica',
  code: 'AQ'
},
{
  name: 'Antigua and Barbuda',
  code: 'AG'
},
{
  name: 'Argentina',
  code: 'AR'
},
{
  name: 'Armenia',
  code: 'AM'
},
{
  name: 'Aruba',
  code: 'AW'
},
{
  name: 'Australia',
  code: 'AU'
},
{
  name: 'Austria',
  code: 'AT'
},
{
  name: 'Azerbaijan',
  code: 'AZ'
},
{
  name: 'Bahamas',
  code: 'BS'
},
{
  name: 'Bahrain',
  code: 'BH'
},
{
  name: 'Bangladesh',
  code: 'BD'
},
{
  name: 'Barbados',
  code: 'BB'
},
{
  name: 'Belarus',
  code: 'BY'
},
{
  name: 'Belgium',
  code: 'BE'
},
{
  name: 'Belize',
  code: 'BZ'
},
{
  name: 'Benin',
  code: 'BJ'
},
{
  name: 'Bermuda',
  code: 'BM'
},
{
  name: 'Bhutan',
  code: 'BT'
},
{
  name: 'Bolivia',
  code: 'BO'
},
{
  name: 'Bosnia and Herzegovina',
  code: 'BA'
},
{
  name: 'Botswana',
  code: 'BW'
},
{
  name: 'Bouvet Island',
  code: 'BV'
},
{
  name: 'Brazil',
  code: 'BR'
},
{
  name: 'British Indian Ocean Territory',
  code: 'IO'
},
{
  name: 'Brunei Darussalam',
  code: 'BN'
},
{
  name: 'Bulgaria',
  code: 'BG'
},
{
  name: 'Burkina Faso',
  code: 'BF'
},
{
  name: 'Burundi',
  code: 'BI'
},
{
  name: 'Cambodia',
  code: 'KH'
},
{
  name: 'Cameroon',
  code: 'CM'
},
{
  name: 'Canada',
  code: 'CA'
},
{
  name: 'Cape Verde',
  code: 'CV'
},
{
  name: 'Cayman Islands',
  code: 'KY'
},
{
  name: 'Central African Republic',
  code: 'CF'
},
{
  name: 'Chad',
  code: 'TD'
},
{
  name: 'Chile',
  code: 'CL'
},
{
  name: 'China',
  code: 'CN'
},
{
  name: 'Christmas Island',
  code: 'CX'
},
{
  name: 'Cocos (Keeling) Islands',
  code: 'CC'
},
{
  name: 'Colombia',
  code: 'CO'
},
{
  name: 'Comoros',
  code: 'KM'
},
{
  name: 'Congo',
  code: 'CG'
},
{
  name: 'Congo, The Democratic Republic of the',
  code: 'CD'
},
{
  name: 'Cook Islands',
  code: 'CK'
},
{
  name: 'Costa Rica',
  code: 'CR'
},
{
  name: 'Cote D\'Ivoire',
  code: 'CI'
},
{
  name: 'Croatia',
  code: 'HR'
},
{
  name: 'Cuba',
  code: 'CU'
},
{
  name: 'Cyprus',
  code: 'CY'
},
{
  name: 'Czech Republic',
  code: 'CZ'
},
{
  name: 'Denmark',
  code: 'DK'
},
{
  name: 'Djibouti',
  code: 'DJ'
},
{
  name: 'Dominica',
  code: 'DM'
},
{
  name: 'Dominican Republic',
  code: 'DO'
},
{
  name: 'Ecuador',
  code: 'EC'
},
{
  name: 'Egypt',
  code: 'EG'
},
{
  name: 'El Salvador',
  code: 'SV'
},
{
  name: 'Equatorial Guinea',
  code: 'GQ'
},
{
  name: 'Eritrea',
  code: 'ER'
},
{
  name: 'Estonia',
  code: 'EE'
},
{
  name: 'Ethiopia',
  code: 'ET'
},
{
  name: 'Falkland Islands (Malvinas)',
  code: 'FK'
},
{
  name: 'Faroe Islands',
  code: 'FO'
},
{
  name: 'Fiji',
  code: 'FJ'
},
{
  name: 'Finland',
  code: 'FI'
},
{
  name: 'France',
  code: 'FR'
},
{
  name: 'French Guiana',
  code: 'GF'
},
{
  name: 'French Polynesia',
  code: 'PF'
},
{
  name: 'French Southern Territories',
  code: 'TF'
},
{
  name: 'Gabon',
  code: 'GA'
},
{
  name: 'Gambia',
  code: 'GM'
},
{
  name: 'Georgia',
  code: 'GE'
},
{
  name: 'Germany',
  code: 'DE'
},
{
  name: 'Ghana',
  code: 'GH'
},
{
  name: 'Gibraltar',
  code: 'GI'
},
{
  name: 'Greece',
  code: 'GR'
},
{
  name: 'Greenland',
  code: 'GL'
},
{
  name: 'Grenada',
  code: 'GD'
},
{
  name: 'Guadeloupe',
  code: 'GP'
},
{
  name: 'Guam',
  code: 'GU'
},
{
  name: 'Guatemala',
  code: 'GT'
},
{
  name: 'Guernsey',
  code: 'GG'
},
{
  name: 'Guinea',
  code: 'GN'
},
{
  name: 'Guinea-Bissau',
  code: 'GW'
},
{
  name: 'Guyana',
  code: 'GY'
},
{
  name: 'Haiti',
  code: 'HT'
},
{
  name: 'Heard Island and Mcdonald Islands',
  code: 'HM'
},
{
  name: 'Holy See (Vatican City State)',
  code: 'VA'
},
{
  name: 'Honduras',
  code: 'HN'
},
{
  name: 'Hong Kong',
  code: 'HK'
},
{
  name: 'Hungary',
  code: 'HU'
},
{
  name: 'Iceland',
  code: 'IS'
},
{
  name: 'India',
  code: 'IN'
},
{
  name: 'Indonesia',
  code: 'ID'
},
{
  name: 'Iran, Islamic Republic Of',
  code: 'IR'
},
{
  name: 'Iraq',
  code: 'IQ'
},
{
  name: 'Ireland',
  code: 'IE'
},
{
  name: 'Isle of Man',
  code: 'IM'
},
{
  name: 'Israel',
  code: 'IL'
},
{
  name: 'Italy',
  code: 'IT'
},
{
  name: 'Jamaica',
  code: 'JM'
},
{
  name: 'Japan',
  code: 'JP'
},
{
  name: 'Jersey',
  code: 'JE'
},
{
  name: 'Jordan',
  code: 'JO'
},
{
  name: 'Kazakhstan',
  code: 'KZ'
},
{
  name: 'Kenya',
  code: 'KE'
},
{
  name: 'Kiribati',
  code: 'KI'
},
{
  name: 'Korea, Democratic People\'S Republic of',
  code: 'KP'
},
{
  name: 'Korea, Republic of',
  code: 'KR'
},
{
  name: 'Kuwait',
  code: 'KW'
},
{
  name: 'Kyrgyzstan',
  code: 'KG'
},
{
  name: 'Lao People\'S Democratic Republic',
  code: 'LA'
},
{
  name: 'Latvia',
  code: 'LV'
},
{
  name: 'Lebanon',
  code: 'LB'
},
{
  name: 'Lesotho',
  code: 'LS'
},
{
  name: 'Liberia',
  code: 'LR'
},
{
  name: 'Libyan Arab Jamahiriya',
  code: 'LY'
},
{
  name: 'Liechtenstein',
  code: 'LI'
},
{
  name: 'Lithuania',
  code: 'LT'
},
{
  name: 'Luxembourg',
  code: 'LU'
},
{
  name: 'Macao',
  code: 'MO'
},
{
  name: 'Macedonia, The Former Yugoslav Republic of',
  code: 'MK'
},
{
  name: 'Madagascar',
  code: 'MG'
},
{
  name: 'Malawi',
  code: 'MW'
},
{
  name: 'Malaysia',
  code: 'MY'
},
{
  name: 'Maldives',
  code: 'MV'
},
{
  name: 'Mali',
  code: 'ML'
},
{
  name: 'Malta',
  code: 'MT'
},
{
  name: 'Marshall Islands',
  code: 'MH'
},
{
  name: 'Martinique',
  code: 'MQ'
},
{
  name: 'Mauritania',
  code: 'MR'
},
{
  name: 'Mauritius',
  code: 'MU'
},
{
  name: 'Mayotte',
  code: 'YT'
},
{
  name: 'Mexico',
  code: 'MX'
},
{
  name: 'Micronesia, Federated States of',
  code: 'FM'
},
{
  name: 'Moldova, Republic of',
  code: 'MD'
},
{
  name: 'Monaco',
  code: 'MC'
},
{
  name: 'Mongolia',
  code: 'MN'
},
{
  name: 'Montserrat',
  code: 'MS'
},
{
  name: 'Morocco',
  code: 'MA'
},
{
  name: 'Mozambique',
  code: 'MZ'
},
{
  name: 'Myanmar',
  code: 'MM'
},
{
  name: 'Namibia',
  code: 'NA'
},
{
  name: 'Nauru',
  code: 'NR'
},
{
  name: 'Nepal',
  code: 'NP'
},
{
  name: 'Netherlands',
  code: 'NL'
},
{
  name: 'Netherlands Antilles',
  code: 'AN'
},
{
  name: 'New Caledonia',
  code: 'NC'
},
{
  name: 'New Zealand',
  code: 'NZ'
},
{
  name: 'Nicaragua',
  code: 'NI'
},
{
  name: 'Niger',
  code: 'NE'
},
{
  name: 'Nigeria',
  code: 'NG'
},
{
  name: 'Niue',
  code: 'NU'
},
{
  name: 'Norfolk Island',
  code: 'NF'
},
{
  name: 'Northern Mariana Islands',
  code: 'MP'
},
{
  name: 'Norway',
  code: 'NO'
},
{
  name: 'Oman',
  code: 'OM'
},
{
  name: 'Pakistan',
  code: 'PK'
},
{
  name: 'Palau',
  code: 'PW'
},
{
  name: 'Palestinian Territory, Occupied',
  code: 'PS'
},
{
  name: 'Panama',
  code: 'PA'
},
{
  name: 'Papua New Guinea',
  code: 'PG'
},
{
  name: 'Paraguay',
  code: 'PY'
},
{
  name: 'Peru',
  code: 'PE'
},
{
  name: 'Philippines',
  code: 'PH'
},
{
  name: 'Pitcairn',
  code: 'PN'
},
{
  name: 'Poland',
  code: 'PL'
},
{
  name: 'Portugal',
  code: 'PT'
},
{
  name: 'Puerto Rico',
  code: 'PR'
},
{
  name: 'Qatar',
  code: 'QA'
},
{
  name: 'Reunion',
  code: 'RE'
},
{
  name: 'Romania',
  code: 'RO'
},
{
  name: 'Russian Federation',
  code: 'RU'
},
{
  name: 'RWANDA',
  code: 'RW'
},
{
  name: 'Saint Helena',
  code: 'SH'
},
{
  name: 'Saint Kitts and Nevis',
  code: 'KN'
},
{
  name: 'Saint Lucia',
  code: 'LC'
},
{
  name: 'Saint Pierre and Miquelon',
  code: 'PM'
},
{
  name: 'Saint Vincent and the Grenadines',
  code: 'VC'
},
{
  name: 'Samoa',
  code: 'WS'
},
{
  name: 'San Marino',
  code: 'SM'
},
{
  name: 'Sao Tome and Principe',
  code: 'ST'
},
{
  name: 'Saudi Arabia',
  code: 'SA'
},
{
  name: 'Senegal',
  code: 'SN'
},
{
  name: 'Serbia and Montenegro',
  code: 'CS'
},
{
  name: 'Seychelles',
  code: 'SC'
},
{
  name: 'Sierra Leone',
  code: 'SL'
},
{
  name: 'Singapore',
  code: 'SG'
},
{
  name: 'Slovakia',
  code: 'SK'
},
{
  name: 'Slovenia',
  code: 'SI'
},
{
  name: 'Solomon Islands',
  code: 'SB'
},
{
  name: 'Somalia',
  code: 'SO'
},
{
  name: 'South Africa',
  code: 'ZA'
},
{
  name: 'South Georgia and the South Sandwich Islands',
  code: 'GS'
},
{
  name: 'Spain',
  code: 'ES'
},
{
  name: 'Sri Lanka',
  code: 'LK'
},
{
  name: 'Sudan',
  code: 'SD'
},
{
  name: 'Suriname',
  code: 'SR'
},
{
  name: 'Svalbard and Jan Mayen',
  code: 'SJ'
},
{
  name: 'Swaziland',
  code: 'SZ'
},
{
  name: 'Sweden',
  code: 'SE'
},
{
  name: 'Switzerland',
  code: 'CH'
},
{
  name: 'Syrian Arab Republic',
  code: 'SY'
},
{
  name: 'Taiwan, Province of China',
  code: 'TW'
},
{
  name: 'Tajikistan',
  code: 'TJ'
},
{
  name: 'Tanzania, United Republic of',
  code: 'TZ'
},
{
  name: 'Thailand',
  code: 'TH'
},
{
  name: 'Timor-Leste',
  code: 'TL'
},
{
  name: 'Togo',
  code: 'TG'
},
{
  name: 'Tokelau',
  code: 'TK'
},
{
  name: 'Tonga',
  code: 'TO'
},
{
  name: 'Trinidad and Tobago',
  code: 'TT'
},
{
  name: 'Tunisia',
  code: 'TN'
},
{
  name: 'Turkey',
  code: 'TR'
},
{
  name: 'Turkmenistan',
  code: 'TM'
},
{
  name: 'Turks and Caicos Islands',
  code: 'TC'
},
{
  name: 'Tuvalu',
  code: 'TV'
},
{
  name: 'Uganda',
  code: 'UG'
},
{
  name: 'Ukraine',
  code: 'UA'
},
{
  name: 'United Arab Emirates',
  code: 'AE'
},
{
  name: 'United Kingdom',
  code: 'GB'
},
{
  name: 'United States',
  code: 'US'
},
{
  name: 'United States Minor Outlying Islands',
  code: 'UM'
},
{
  name: 'Uruguay',
  code: 'UY'
},
{
  name: 'Uzbekistan',
  code: 'UZ'
},
{
  name: 'Vanuatu',
  code: 'VU'
},
{
  name: 'Venezuela',
  code: 'VE'
},
{
  name: 'Viet Nam',
  code: 'VN'
},
{
  name: 'Virgin Islands, British',
  code: 'VG'
},
{
  name: 'Virgin Islands, U.S.',
  code: 'VI'
},
{
  name: 'Wallis and Futuna',
  code: 'WF'
},
{
  name: 'Western Sahara',
  code: 'EH'
},
{
  name: 'Yemen',
  code: 'YE'
},
{
  name: 'Zambia',
  code: 'ZM'
},
{
  name: 'Zimbabwe',
  code: 'ZW'
}
]

const stateProvinces = [{
  'name': 'Alabama',
  'abbreviation': 'AL',
  'countryCode': 'US'
},
{
  'name': 'Alaska',
  'abbreviation': 'AK',
  'countryCode': 'US'
},
{
  'name': 'American Samoa',
  'abbreviation': 'AS',
  'countryCode': 'US'
},
{
  'name': 'Arizona',
  'abbreviation': 'AZ',
  'countryCode': 'US'
},
{
  'name': 'Arkansas',
  'abbreviation': 'AR',
  'countryCode': 'US'
},
{
  'name': 'California',
  'abbreviation': 'CA',
  'countryCode': 'US'
},
{
  'name': 'Colorado',
  'abbreviation': 'CO',
  'countryCode': 'US'
},
{
  'name': 'Connecticut',
  'abbreviation': 'CT',
  'countryCode': 'US'
},
{
  'name': 'Delaware',
  'abbreviation': 'DE',
  'countryCode': 'US'
},
{
  'name': 'District Of Columbia',
  'abbreviation': 'DC',
  'countryCode': 'US'
},
{
  'name': 'Federated States Of Micronesia',
  'abbreviation': 'FM',
  'countryCode': 'US'
},
{
  'name': 'Florida',
  'abbreviation': 'FL',
  'countryCode': 'US'
},
{
  'name': 'Georgia',
  'abbreviation': 'GA',
  'countryCode': 'US'
},
{
  'name': 'Guam',
  'abbreviation': 'GU',
  'countryCode': 'US'
},
{
  'name': 'Hawaii',
  'abbreviation': 'HI',
  'countryCode': 'US'
},
{
  'name': 'Idaho',
  'abbreviation': 'ID',
  'countryCode': 'US'
},
{
  'name': 'Illinois',
  'abbreviation': 'IL',
  'countryCode': 'US'
},
{
  'name': 'Indiana',
  'abbreviation': 'IN',
  'countryCode': 'US'
},
{
  'name': 'Iowa',
  'abbreviation': 'IA',
  'countryCode': 'US'
},
{
  'name': 'Kansas',
  'abbreviation': 'KS',
  'countryCode': 'US'
},
{
  'name': 'Kentucky',
  'abbreviation': 'KY',
  'countryCode': 'US'
},
{
  'name': 'Louisiana',
  'abbreviation': 'LA',
  'countryCode': 'US'
},
{
  'name': 'Maine',
  'abbreviation': 'ME',
  'countryCode': 'US'
},
{
  'name': 'Marshall Islands',
  'abbreviation': 'MH',
  'countryCode': 'US'
},
{
  'name': 'Maryland',
  'abbreviation': 'MD',
  'countryCode': 'US'
},
{
  'name': 'Massachusetts',
  'abbreviation': 'MA',
  'countryCode': 'US'
},
{
  'name': 'Michigan',
  'abbreviation': 'MI',
  'countryCode': 'US'
},
{
  'name': 'Minnesota',
  'abbreviation': 'MN',
  'countryCode': 'US'
},
{
  'name': 'Mississippi',
  'abbreviation': 'MS',
  'countryCode': 'US'
},
{
  'name': 'Missouri',
  'abbreviation': 'MO',
  'countryCode': 'US'
},
{
  'name': 'Montana',
  'abbreviation': 'MT',
  'countryCode': 'US'
},
{
  'name': 'Nebraska',
  'abbreviation': 'NE',
  'countryCode': 'US'
},
{
  'name': 'Nevada',
  'abbreviation': 'NV',
  'countryCode': 'US'
},
{
  'name': 'New Hampshire',
  'abbreviation': 'NH',
  'countryCode': 'US'
},
{
  'name': 'New Jersey',
  'abbreviation': 'NJ',
  'countryCode': 'US'
},
{
  'name': 'New Mexico',
  'abbreviation': 'NM',
  'countryCode': 'US'
},
{
  'name': 'New York',
  'abbreviation': 'NY',
  'countryCode': 'US'
},
{
  'name': 'North Carolina',
  'abbreviation': 'NC',
  'countryCode': 'US'
},
{
  'name': 'North Dakota',
  'abbreviation': 'ND',
  'countryCode': 'US'
},
{
  'name': 'Northern Mariana Islands',
  'abbreviation': 'MP',
  'countryCode': 'US'
},
{
  'name': 'Ohio',
  'abbreviation': 'OH',
  'countryCode': 'US'
},
{
  'name': 'Oklahoma',
  'abbreviation': 'OK',
  'countryCode': 'US'
},
{
  'name': 'Oregon',
  'abbreviation': 'OR',
  'countryCode': 'US'
},
{
  'name': 'Palau',
  'abbreviation': 'PW',
  'countryCode': 'US'
},
{
  'name': 'Pennsylvania',
  'abbreviation': 'PA',
  'countryCode': 'US'
},
{
  'name': 'Puerto Rico',
  'abbreviation': 'PR',
  'countryCode': 'US'
},
{
  'name': 'Rhode Island',
  'abbreviation': 'RI',
  'countryCode': 'US'
},
{
  'name': 'South Carolina',
  'abbreviation': 'SC',
  'countryCode': 'US'
},
{
  'name': 'South Dakota',
  'abbreviation': 'SD',
  'countryCode': 'US'
},
{
  'name': 'Tennessee',
  'abbreviation': 'TN',
  'countryCode': 'US'
},
{
  'name': 'Texas',
  'abbreviation': 'TX',
  'countryCode': 'US'
},
{
  'name': 'Utah',
  'abbreviation': 'UT',
  'countryCode': 'US'
},
{
  'name': 'Vermont',
  'abbreviation': 'VT',
  'countryCode': 'US'
},
{
  'name': 'Virgin Islands',
  'abbreviation': 'VI',
  'countryCode': 'US'
},
{
  'name': 'Virginia',
  'abbreviation': 'VA',
  'countryCode': 'US'
},
{
  'name': 'Washington',
  'abbreviation': 'WA',
  'countryCode': 'US'
},
{
  'name': 'West Virginia',
  'abbreviation': 'WV',
  'countryCode': 'US'
},
{
  'name': 'Wisconsin',
  'abbreviation': 'WI',
  'countryCode': 'US'
},
{
  'name': 'Wyoming',
  'abbreviation': 'WY',
  'countryCode': 'US'
},
{
  'name': 'Alberta',
  'abbreviation': 'AB',
  'countryCode': 'CA'
},
{
  'name': 'British Columbia',
  'abbreviation': 'BC',
  'countryCode': 'CA'
},
{
  'name': 'Manitoba',
  'abbreviation': 'MB',
  'countryCode': 'CA'
},
{
  'name': 'New Brunswick',
  'abbreviation': 'NB',
  'countryCode': 'CA'
},
{
  'name': 'Newfoundland and Labrador',
  'abbreviation': 'NL',
  'countryCode': 'CA'
},
{
  'name': 'Northwest Territories',
  'abbreviation': 'NT',
  'countryCode': 'CA'
},
{
  'name': 'Nova Scotia',
  'abbreviation': 'NS',
  'countryCode': 'CA'
},
{
  'name': 'Nunavut',
  'abbreviation': 'NU',
  'countryCode': 'CA'
},
{
  'name': 'Ontario',
  'abbreviation': 'ON',
  'countryCode': 'CA'
},
{
  'name': 'Prince Edward Island',
  'abbreviation': 'PE',
  'countryCode': 'CA'
},
{
  'name': 'Quebec',
  'abbreviation': 'QC',
  'countryCode': 'CA'
},
{
  'name': 'Saskatchewan',
  'abbreviation': 'SK',
  'countryCode': 'CA'
},
{
  'name': 'Yukon Territory',
  'abbreviation': 'YT',
  'countryCode': 'CA'
}
]

function CountrySelect({ options, value, event}) {
  return (
    <div className='mb-4'>
      <label htmlFor='country' className="block text-sm font-medium text-gray-700">  
        Country
      </label>
      <select className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' id='country' name='country' value={ value ? value : ''} onChange={event}>
        {options.map(option =>
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        )}
      </select>
    </div>
  )
}

function StateProvinceSelect({ options, value, selectedCountry, event}) {

  const label = 'State/Province'
  const name = 'state_province'

  if (selectedCountry === 'CA' || selectedCountry === 'US') {
    return (
      
      <div className='mb-4'>
         <label htmlFor={name} className="block text-sm font-medium text-gray-700">  
          {label}
        </label>
        
        <select className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' name={name} value={ value ? value : ''} onChange={event}>
          {options.map(option =>
            <option key={option.abbreviation} value={option.abbreviation}>
              {option.name}
            </option>
          )}
        </select>
      </div>
    )
  }

  return (
    <div className='mb-4'>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className='mt-1'>
      <input className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' id={name} type='text' name={name} value={ value ? value : ''} onChange={event} />
      </div>
    </div>
  )
}

function DisplayMessages({ success, errors }) {

  const message = JSON.stringify(success.success)
  
  if (errors) {
    return (
      <div className="rounded-md bg-red-50 p-4 mb-4">
        <div className="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
    <div className="ml-3">
    <h3 class="text-sm font-medium text-red-800">There were errors with your submission.</h3>
      <div className="mt-2 text-sm text-red-700">
        <ul className='list-disc pl-5 space-y-1'>
        {Object.keys(errors).map(key => {
          return (
            <li key={key}>
                {errors[key]}
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  </div>
</div>

    )
  }

  return (
    <>
      { message ? 
        <div className="rounded-md bg-green-50 p-4 mb-4">
          <div className="flex">
            <div class="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Success</h3>
          </div>
          </div>
        </div> 
        : ''}
    </>
  )
}

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [country, setCountry] = useState('CA')
  const [state_province, setStateProvince] = useState('NS')
  const [house_number, setHouseNumber] = useState('')
  const [street_name, setStreetName] = useState('')
  const [city, setCity] = useState('')
  const [errors, setErrors] = useState(null)
  const [success, setSuccess] = useState('')

  const handleCountryChange = (e) => {
    setCountry(e.target.value)
    setStateProvince('')
  }

  const handleStateProvinceChange = (e) => {
    setStateProvince(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const postData = {
      name: name,
      email: email,
      phone_number: phone_number,
      address: {
        house_number: house_number,
        street_name: street_name,
        city: city,
        country: country,
        state_province: state_province
      }
    }

    axios.post('http://127.0.0.1/api/persons', postData)
    .then(result => {
      setSuccess(result.data)
      setErrors(null)
    })
    .catch(error => {
      setSuccess(error.response.data.success)  
      setErrors(error.response.data.errors)
    })

  }

  return (  
   
    <div className="max-w-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className='my-8 center'>
       <h1 className="text-3xl font-bold text-center">
        Coding Challenge
      </h1>
      </div>
        <DisplayMessages success={success} errors={errors} />
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className="block text-sm font-medium text-gray-700">  
              Name:
            </label>
            <input className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-3'>
          <label htmlFor='email' className="block text-sm font-medium text-gray-700">  
            Email
            </label>
            <input className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='tel' className="block text-sm font-medium text-gray-700">  
            Phone
            </label>
            <input className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' type='tel' id='tel' name='phone_number' value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='house_number' className="block text-sm font-medium text-gray-700">
            House Number
            </label>
            <input className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' id='house_number' type='text' name='house_number' value={house_number} onChange={(e) => setHouseNumber(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='street_name' className="block text-sm font-medium text-gray-700">
            Street Name
            </label>
            <input className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' type='text' id='street_name' value={street_name} onChange={(e) => setStreetName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='city' className="block text-sm font-medium text-gray-700">
            City
            </label>
            <input className='mt-1 block w-full pl-1 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'  type='text' id='city' value={city} onChange={(e) => setCity(e.target.value)} />
          
          </div>
          
          <CountrySelect options={countries} value={country} event={handleCountryChange} />          
          
          <StateProvinceSelect options={stateProvinces.filter(stateProvince => stateProvince.countryCode === country)} value={state_province} selectedCountry={country} event={handleStateProvinceChange} />
          
          <input type='submit' value='Submit' className='ml-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
        </form>        
    </div>
  );
}

export default App;