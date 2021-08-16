import {PhoneNumber, PhoneNumberUtil} from 'google-libphonenumber';

export class PhoneUtils {

  static readonly countries = [
    {
      'countryName': 'Afghanistan',
      'countryCode': 'af',
      'callingCode': '93'
    },
    {
      'countryName': 'Afrique du Sud',
      'countryCode': 'za',
      'callingCode': '27'
    },
    {
      'countryName': 'Albanie',
      'countryCode': 'al',
      'callingCode': '355'
    },
    {
      'countryName': 'Algérie',
      'countryCode': 'dz',
      'callingCode': '213'
    },
    {
      'countryName': 'Allemagne',
      'countryCode': 'de',
      'callingCode': '49'
    },
    {
      'countryName': 'Andorre',
      'countryCode': 'ad',
      'callingCode': '376'
    },
    {
      'countryName': 'Angola',
      'countryCode': 'ao',
      'callingCode': '244'
    },
    {
      'countryName': 'Anguilla',
      'countryCode': 'ai',
      'callingCode': '1'
    },
    {
      'countryName': 'Antigua-et-Barbuda',
      'countryCode': 'ag',
      'callingCode': '1'
    },
    {
      'countryName': 'Arabie saoudite',
      'countryCode': 'sa',
      'callingCode': '966'
    },
    {
      'countryName': 'Argentine',
      'countryCode': 'ar',
      'callingCode': '54'
    },
    {
      'countryName': 'Arménie',
      'countryCode': 'am',
      'callingCode': '374'
    },
    {
      'countryName': 'Aruba',
      'countryCode': 'aw',
      'callingCode': '297'
    },
    {
      'countryName': 'Australie',
      'countryCode': 'au',
      'callingCode': '61'
    },
    {
      'countryName': 'Autriche',
      'countryCode': 'at',
      'callingCode': '43'
    },
    {
      'countryName': 'Azerbaïdjan',
      'countryCode': 'az',
      'callingCode': '994'
    },
    {
      'countryName': 'Bahamas',
      'countryCode': 'bs',
      'callingCode': '1'
    },
    {
      'countryName': 'Bahreïn',
      'countryCode': 'bh',
      'callingCode': '973'
    },
    {
      'countryName': 'Bangladesh',
      'countryCode': 'bd',
      'callingCode': '880'
    },
    {
      'countryName': 'Barbade',
      'countryCode': 'bb',
      'callingCode': '1'
    },
    {
      'countryName': 'Belgique',
      'countryCode': 'be',
      'callingCode': '32'
    },
    {
      'countryName': 'Belize',
      'countryCode': 'bz',
      'callingCode': '501'
    },
    {
      'countryName': 'Bénin',
      'countryCode': 'bj',
      'callingCode': '229'
    },
    {
      'countryName': 'Bermudes',
      'countryCode': 'bm',
      'callingCode': '1'
    },
    {
      'countryName': 'Bhoutan',
      'countryCode': 'bt',
      'callingCode': '975'
    },
    {
      'countryName': 'Biélorussie',
      'countryCode': 'by',
      'callingCode': '375'
    },
    {
      'countryName': 'Bolivie',
      'countryCode': 'bo',
      'callingCode': '591'
    },
    {
      'countryName': 'Bosnie-Herzégovine',
      'countryCode': 'ba',
      'callingCode': '387'
    },
    {
      'countryName': 'Botswana',
      'countryCode': 'bw',
      'callingCode': '267'
    },
    {
      'countryName': 'Brésil',
      'countryCode': 'br',
      'callingCode': '55'
    },
    {
      'countryName': 'Brunei',
      'countryCode': 'bn',
      'callingCode': '673'
    },
    {
      'countryName': 'Bulgarie',
      'countryCode': 'bg',
      'callingCode': '359'
    },
    {
      'countryName': 'Burkina Faso',
      'countryCode': 'bf',
      'callingCode': '226'
    },
    {
      'countryName': 'Burundi',
      'countryCode': 'bi',
      'callingCode': '257'
    },
    {
      'countryName': 'Cambodge',
      'countryCode': 'kh',
      'callingCode': '855'
    },
    {
      'countryName': 'Cameroun',
      'countryCode': 'cm',
      'callingCode': '237'
    },
    {
      'countryName': 'Canada',
      'countryCode': 'ca',
      'callingCode': '1'
    },
    {
      'countryName': 'Cap-Vert',
      'countryCode': 'cv',
      'callingCode': '238'
    },
    {
      'countryName': 'Chili',
      'countryCode': 'cl',
      'callingCode': '56'
    },
    {
      'countryName': 'Chine',
      'countryCode': 'cn',
      'callingCode': '86'
    },
    {
      'countryName': 'Chypre',
      'countryCode': 'cy',
      'callingCode': '357'
    },
    {
      'countryName': 'Colombie',
      'countryCode': 'co',
      'callingCode': '57'
    },
    {
      'countryName': 'Comores',
      'countryCode': 'km',
      'callingCode': '269'
    },
    {
      'countryName': 'Congo-Brazzaville',
      'countryCode': 'cg',
      'callingCode': '242'
    },
    {
      'countryName': 'Congo-Kinshasa',
      'countryCode': 'cd',
      'callingCode': '243'
    },
    {
      'countryName': 'Corée du Nord',
      'countryCode': 'kp',
      'callingCode': '850'
    },
    {
      'countryName': 'Corée du Sud',
      'countryCode': 'kr',
      'callingCode': '82'
    },
    {
      'countryName': 'Costa Rica',
      'countryCode': 'cr',
      'callingCode': '506'
    },
    {
      'countryName': 'Côte d’Ivoire',
      'countryCode': 'ci',
      'callingCode': '225'
    },
    {
      'countryName': 'Croatie',
      'countryCode': 'hr',
      'callingCode': '385'
    },
    {
      'countryName': 'Cuba',
      'countryCode': 'cu',
      'callingCode': '53'
    },
    {
      'countryName': 'Curaçao',
      'countryCode': 'cw',
      'callingCode': '599'
    },
    {
      'countryName': 'Danemark',
      'countryCode': 'dk',
      'callingCode': '45'
    },
    {
      'countryName': 'Djibouti',
      'countryCode': 'dj',
      'callingCode': '253'
    },
    {
      'countryName': 'Dominique',
      'countryCode': 'dm',
      'callingCode': '1'
    },
    {
      'countryName': 'Égypte',
      'countryCode': 'eg',
      'callingCode': '20'
    },
    {
      'countryName': 'Émirats arabes unis',
      'countryCode': 'ae',
      'callingCode': '971'
    },
    {
      'countryName': 'Équateur',
      'countryCode': 'ec',
      'callingCode': '593'
    },
    {
      'countryName': 'Érythrée',
      'countryCode': 'er',
      'callingCode': '291'
    },
    {
      'countryName': 'Espagne',
      'countryCode': 'es',
      'callingCode': '34'
    },
    {
      'countryName': 'Estonie',
      'countryCode': 'ee',
      'callingCode': '372'
    },
    {
      'countryName': 'Eswatini',
      'countryCode': 'sz',
      'callingCode': '268'
    },
    {
      'countryName': 'État de la Cité du Vatican',
      'countryCode': 'va',
      'callingCode': '39'
    },
    {
      'countryName': 'États-Unis',
      'countryCode': 'us',
      'callingCode': '1'
    },
    {
      'countryName': 'Éthiopie',
      'countryCode': 'et',
      'callingCode': '251'
    },
    {
      'countryName': 'Fidji',
      'countryCode': 'fj',
      'callingCode': '679'
    },
    {
      'countryName': 'Finlande',
      'countryCode': 'fi',
      'callingCode': '358'
    },
    {
      'countryName': 'France',
      'countryCode': 'fr',
      'callingCode': '33'
    },
    {
      'countryName': 'Gabon',
      'countryCode': 'ga',
      'callingCode': '241'
    },
    {
      'countryName': 'Gambie',
      'countryCode': 'gm',
      'callingCode': '220'
    },
    {
      'countryName': 'Géorgie',
      'countryCode': 'ge',
      'callingCode': '995'
    },
    {
      'countryName': 'Ghana',
      'countryCode': 'gh',
      'callingCode': '233'
    },
    {
      'countryName': 'Gibraltar',
      'countryCode': 'gi',
      'callingCode': '350'
    },
    {
      'countryName': 'Grèce',
      'countryCode': 'gr',
      'callingCode': '30'
    },
    {
      'countryName': 'Grenade',
      'countryCode': 'gd',
      'callingCode': '1'
    },
    {
      'countryName': 'Groenland',
      'countryCode': 'gl',
      'callingCode': '299'
    },
    {
      'countryName': 'Guadeloupe',
      'countryCode': 'gp',
      'callingCode': '590'
    },
    {
      'countryName': 'Guam',
      'countryCode': 'gu',
      'callingCode': '1'
    },
    {
      'countryName': 'Guatemala',
      'countryCode': 'gt',
      'callingCode': '502'
    },
    {
      'countryName': 'Guinée',
      'countryCode': 'gn',
      'callingCode': '224'
    },
    {
      'countryName': 'Guinée équatoriale',
      'countryCode': 'gq',
      'callingCode': '240'
    },
    {
      'countryName': 'Guinée-Bissau',
      'countryCode': 'gw',
      'callingCode': '245'
    },
    {
      'countryName': 'Guyana',
      'countryCode': 'gy',
      'callingCode': '592'
    },
    {
      'countryName': 'Guyane française',
      'countryCode': 'gf',
      'callingCode': '594'
    },
    {
      'countryName': 'Haïti',
      'countryCode': 'ht',
      'callingCode': '509'
    },
    {
      'countryName': 'Honduras',
      'countryCode': 'hn',
      'callingCode': '504'
    },
    {
      'countryName': 'Hong Kong',
      'countryCode': 'hk',
      'callingCode': '852'
    },
    {
      'countryName': 'Hongrie',
      'countryCode': 'hu',
      'callingCode': '36'
    },
    {
      'countryName': 'Île de l’Ascension',
      'countryCode': 'ac',
      'callingCode': '247'
    },
    {
      'countryName': 'Île Norfolk',
      'countryCode': 'nf',
      'callingCode': '672'
    },
    {
      'countryName': 'Îles Caïmans',
      'countryCode': 'ky',
      'callingCode': '1'
    },
    {
      'countryName': 'Îles Cook',
      'countryCode': 'ck',
      'callingCode': '682'
    },
    {
      'countryName': 'Îles Féroé',
      'countryCode': 'fo',
      'callingCode': '298'
    },
    {
      'countryName': 'Îles Malouines (Îles Falkland)',
      'countryCode': 'fk',
      'callingCode': '500'
    },
    {
      'countryName': 'Îles Mariannes du Nord',
      'countryCode': 'mp',
      'callingCode': '1'
    },
    {
      'countryName': 'Îles Marshall',
      'countryCode': 'mh',
      'callingCode': '692'
    },
    {
      'countryName': 'Îles Salomon',
      'countryCode': 'sb',
      'callingCode': '677'
    },
    {
      'countryName': 'Îles Turques-et-Caïques',
      'countryCode': 'tc',
      'callingCode': '1'
    },
    {
      'countryName': 'Îles Vierges britanniques',
      'countryCode': 'vg',
      'callingCode': '1'
    },
    {
      'countryName': 'Îles Vierges des États-Unis',
      'countryCode': 'vi',
      'callingCode': '1'
    },
    {
      'countryName': 'Inde',
      'countryCode': 'in',
      'callingCode': '91'
    },
    {
      'countryName': 'Indonésie',
      'countryCode': 'id',
      'callingCode': '62'
    },
    {
      'countryName': 'Irak',
      'countryCode': 'iq',
      'callingCode': '964'
    },
    {
      'countryName': 'Iran',
      'countryCode': 'ir',
      'callingCode': '98'
    },
    {
      'countryName': 'Irlande',
      'countryCode': 'ie',
      'callingCode': '353'
    },
    {
      'countryName': 'Islande',
      'countryCode': 'is',
      'callingCode': '354'
    },
    {
      'countryName': 'Israël',
      'countryCode': 'il',
      'callingCode': '972'
    },
    {
      'countryName': 'Italie',
      'countryCode': 'it',
      'callingCode': '39'
    },
    {
      'countryName': 'Jamaïque',
      'countryCode': 'jm',
      'callingCode': '1'
    },
    {
      'countryName': 'Japon',
      'countryCode': 'jp',
      'callingCode': '81'
    },
    {
      'countryName': 'Jordanie',
      'countryCode': 'jo',
      'callingCode': '962'
    },
    {
      'countryName': 'Kazakhstan',
      'countryCode': 'kz',
      'callingCode': '7'
    },
    {
      'countryName': 'Kenya',
      'countryCode': 'ke',
      'callingCode': '254'
    },
    {
      'countryName': 'Kirghizstan',
      'countryCode': 'kg',
      'callingCode': '996'
    },
    {
      'countryName': 'Kiribati',
      'countryCode': 'ki',
      'callingCode': '686'
    },
    {
      'countryName': 'Kosovo',
      'countryCode': 'xk',
      'callingCode': '383'
    },
    {
      'countryName': 'Koweït',
      'countryCode': 'kw',
      'callingCode': '965'
    },
    {
      'countryName': 'La Réunion',
      'countryCode': 're',
      'callingCode': '262'
    },
    {
      'countryName': 'Laos',
      'countryCode': 'la',
      'callingCode': '856'
    },
    {
      'countryName': 'Lesotho',
      'countryCode': 'ls',
      'callingCode': '266'
    },
    {
      'countryName': 'Lettonie',
      'countryCode': 'lv',
      'callingCode': '371'
    },
    {
      'countryName': 'Liban',
      'countryCode': 'lb',
      'callingCode': '961'
    },
    {
      'countryName': 'Liberia',
      'countryCode': 'lr',
      'callingCode': '231'
    },
    {
      'countryName': 'Libye',
      'countryCode': 'ly',
      'callingCode': '218'
    },
    {
      'countryName': 'Liechtenstein',
      'countryCode': 'li',
      'callingCode': '423'
    },
    {
      'countryName': 'Lituanie',
      'countryCode': 'lt',
      'callingCode': '370'
    },
    {
      'countryName': 'Luxembourg',
      'countryCode': 'lu',
      'callingCode': '352'
    },
    {
      'countryName': 'Macao',
      'countryCode': 'mo',
      'callingCode': '853'
    },
    {
      'countryName': 'Macédoine du Nord',
      'countryCode': 'mk',
      'callingCode': '389'
    },
    {
      'countryName': 'Madagascar',
      'countryCode': 'mg',
      'callingCode': '261'
    },
    {
      'countryName': 'Malaisie',
      'countryCode': 'my',
      'callingCode': '60'
    },
    {
      'countryName': 'Malawi',
      'countryCode': 'mw',
      'callingCode': '265'
    },
    {
      'countryName': 'Maldives',
      'countryCode': 'mv',
      'callingCode': '960'
    },
    {
      'countryName': 'Mali',
      'countryCode': 'ml',
      'callingCode': '223'
    },
    {
      'countryName': 'Malte',
      'countryCode': 'mt',
      'callingCode': '356'
    },
    {
      'countryName': 'Maroc',
      'countryCode': 'ma',
      'callingCode': '212'
    },
    {
      'countryName': 'Martinique',
      'countryCode': 'mq',
      'callingCode': '596'
    },
    {
      'countryName': 'Maurice',
      'countryCode': 'mu',
      'callingCode': '230'
    },
    {
      'countryName': 'Mauritanie',
      'countryCode': 'mr',
      'callingCode': '222'
    },
    {
      'countryName': 'Mexique',
      'countryCode': 'mx',
      'callingCode': '52'
    },
    {
      'countryName': 'Micronésie',
      'countryCode': 'fm',
      'callingCode': '691'
    },
    {
      'countryName': 'Moldavie',
      'countryCode': 'md',
      'callingCode': '373'
    },
    {
      'countryName': 'Monaco',
      'countryCode': 'mc',
      'callingCode': '377'
    },
    {
      'countryName': 'Mongolie',
      'countryCode': 'mn',
      'callingCode': '976'
    },
    {
      'countryName': 'Monténégro',
      'countryCode': 'me',
      'callingCode': '382'
    },
    {
      'countryName': 'Montserrat',
      'countryCode': 'ms',
      'callingCode': '1'
    },
    {
      'countryName': 'Mozambique',
      'countryCode': 'mz',
      'callingCode': '258'
    },
    {
      'countryName': 'Myanmar (Birmanie)',
      'countryCode': 'mm',
      'callingCode': '95'
    },
    {
      'countryName': 'Namibie',
      'countryCode': 'na',
      'callingCode': '264'
    },
    {
      'countryName': 'Nauru',
      'countryCode': 'nr',
      'callingCode': '674'
    },
    {
      'countryName': 'Népal',
      'countryCode': 'np',
      'callingCode': '977'
    },
    {
      'countryName': 'Nicaragua',
      'countryCode': 'ni',
      'callingCode': '505'
    },
    {
      'countryName': 'Niger',
      'countryCode': 'ne',
      'callingCode': '227'
    },
    {
      'countryName': 'Nigeria',
      'countryCode': 'ng',
      'callingCode': '234'
    },
    {
      'countryName': 'Niue',
      'countryCode': 'nu',
      'callingCode': '683'
    },
    {
      'countryName': 'Norvège',
      'countryCode': 'no',
      'callingCode': '47'
    },
    {
      'countryName': 'Nouvelle-Calédonie',
      'countryCode': 'nc',
      'callingCode': '687'
    },
    {
      'countryName': 'Nouvelle-Zélande',
      'countryCode': 'nz',
      'callingCode': '64'
    },
    {
      'countryName': 'Oman',
      'countryCode': 'om',
      'callingCode': '968'
    },
    {
      'countryName': 'Ouganda',
      'countryCode': 'ug',
      'callingCode': '256'
    },
    {
      'countryName': 'Ouzbékistan',
      'countryCode': 'uz',
      'callingCode': '998'
    },
    {
      'countryName': 'Pakistan',
      'countryCode': 'pk',
      'callingCode': '92'
    },
    {
      'countryName': 'Palaos',
      'countryCode': 'pw',
      'callingCode': '680'
    },
    {
      'countryName': 'Palestine',
      'countryCode': 'ps',
      'callingCode': '970'
    },
    {
      'countryName': 'Panama',
      'countryCode': 'pa',
      'callingCode': '507'
    },
    {
      'countryName': 'Papouasie-Nouvelle-Guinée',
      'countryCode': 'pg',
      'callingCode': '675'
    },
    {
      'countryName': 'Paraguay',
      'countryCode': 'py',
      'callingCode': '595'
    },
    {
      'countryName': 'Pays-Bas',
      'countryCode': 'nl',
      'callingCode': '31'
    },
    {
      'countryName': 'Pays-Bas caribéens',
      'countryCode': 'bq',
      'callingCode': '599'
    },
    {
      'countryName': 'Pérou',
      'countryCode': 'pe',
      'callingCode': '51'
    },
    {
      'countryName': 'Philippines',
      'countryCode': 'ph',
      'callingCode': '63'
    },
    {
      'countryName': 'Pologne',
      'countryCode': 'pl',
      'callingCode': '48'
    },
    {
      'countryName': 'Polynésie française',
      'countryCode': 'pf',
      'callingCode': '689'
    },
    {
      'countryName': 'Porto Rico',
      'countryCode': 'pr',
      'callingCode': '1'
    },
    {
      'countryName': 'Portugal',
      'countryCode': 'pt',
      'callingCode': '351'
    },
    {
      'countryName': 'Qatar',
      'countryCode': 'qa',
      'callingCode': '974'
    },
    {
      'countryName': 'République centrafricaine',
      'countryCode': 'cf',
      'callingCode': '236'
    },
    {
      'countryName': 'République dominicaine',
      'countryCode': 'do',
      'callingCode': '1'
    },
    {
      'countryName': 'Roumanie',
      'countryCode': 'ro',
      'callingCode': '40'
    },
    {
      'countryName': 'Royaume-Uni',
      'countryCode': 'gb',
      'callingCode': '44'
    },
    {
      'countryName': 'Russie',
      'countryCode': 'ru',
      'callingCode': '7'
    },
    {
      'countryName': 'Rwanda',
      'countryCode': 'rw',
      'callingCode': '250'
    },
    {
      'countryName': 'Saint-Barthélemy',
      'countryCode': 'bl',
      'callingCode': '590'
    },
    {
      'countryName': 'Saint-Christophe-et-Niévès',
      'countryCode': 'kn',
      'callingCode': '1'
    },
    {
      'countryName': 'Saint-Marin',
      'countryCode': 'sm',
      'callingCode': '378'
    },
    {
      'countryName': 'Saint-Martin',
      'countryCode': 'mf',
      'callingCode': '590'
    },
    {
      'countryName': 'Saint-Martin (partie néerlandaise)',
      'countryCode': 'sx',
      'callingCode': '1'
    },
    {
      'countryName': 'Saint-Pierre-et-Miquelon',
      'countryCode': 'pm',
      'callingCode': '508'
    },
    {
      'countryName': 'Saint-Vincent-et-les Grenadines',
      'countryCode': 'vc',
      'callingCode': '1'
    },
    {
      'countryName': 'Sainte-Hélène',
      'countryCode': 'sh',
      'callingCode': '290'
    },
    {
      'countryName': 'Sainte-Lucie',
      'countryCode': 'lc',
      'callingCode': '1'
    },
    {
      'countryName': 'Salvador',
      'countryCode': 'sv',
      'callingCode': '503'
    },
    {
      'countryName': 'Samoa',
      'countryCode': 'ws',
      'callingCode': '685'
    },
    {
      'countryName': 'Samoa américaines',
      'countryCode': 'as',
      'callingCode': '1'
    },
    {
      'countryName': 'Sao Tomé-et-Principe',
      'countryCode': 'st',
      'callingCode': '239'
    },
    {
      'countryName': 'Sénégal',
      'countryCode': 'sn',
      'callingCode': '221'
    },
    {
      'countryName': 'Serbie',
      'countryCode': 'rs',
      'callingCode': '381'
    },
    {
      'countryName': 'Seychelles',
      'countryCode': 'sc',
      'callingCode': '248'
    },
    {
      'countryName': 'Sierra Leone',
      'countryCode': 'sl',
      'callingCode': '232'
    },
    {
      'countryName': 'Singapour',
      'countryCode': 'sg',
      'callingCode': '65'
    },
    {
      'countryName': 'Slovaquie',
      'countryCode': 'sk',
      'callingCode': '421'
    },
    {
      'countryName': 'Slovénie',
      'countryCode': 'si',
      'callingCode': '386'
    },
    {
      'countryName': 'Somalie',
      'countryCode': 'so',
      'callingCode': '252'
    },
    {
      'countryName': 'Soudan',
      'countryCode': 'sd',
      'callingCode': '249'
    },
    {
      'countryName': 'Soudan du Sud',
      'countryCode': 'ss',
      'callingCode': '211'
    },
    {
      'countryName': 'Sri Lanka',
      'countryCode': 'lk',
      'callingCode': '94'
    },
    {
      'countryName': 'Suède',
      'countryCode': 'se',
      'callingCode': '46'
    },
    {
      'countryName': 'Suisse',
      'countryCode': 'ch',
      'callingCode': '41'
    },
    {
      'countryName': 'Suriname',
      'countryCode': 'sr',
      'callingCode': '597'
    },
    {
      'countryName': 'Syrie',
      'countryCode': 'sy',
      'callingCode': '963'
    },
    {
      'countryName': 'Tadjikistan',
      'countryCode': 'tj',
      'callingCode': '992'
    },
    {
      'countryName': 'Taïwan',
      'countryCode': 'tw',
      'callingCode': '886'
    },
    {
      'countryName': 'Tanzanie',
      'countryCode': 'tz',
      'callingCode': '255'
    },
    {
      'countryName': 'Tchad',
      'countryCode': 'td',
      'callingCode': '235'
    },
    {
      'countryName': 'Tchéquie',
      'countryCode': 'cz',
      'callingCode': '420'
    },
    {
      'countryName': 'Territoire britannique de l’océan Indien',
      'countryCode': 'io',
      'callingCode': '246'
    },
    {
      'countryName': 'Thaïlande',
      'countryCode': 'th',
      'callingCode': '66'
    },
    {
      'countryName': 'Timor oriental',
      'countryCode': 'tl',
      'callingCode': '670'
    },
    {
      'countryName': 'Togo',
      'countryCode': 'tg',
      'callingCode': '228'
    },
    {
      'countryName': 'Tokelau',
      'countryCode': 'tk',
      'callingCode': '690'
    },
    {
      'countryName': 'Tonga',
      'countryCode': 'to',
      'callingCode': '676'
    },
    {
      'countryName': 'Trinité-et-Tobago',
      'countryCode': 'tt',
      'callingCode': '1'
    },
    {
      'countryName': 'Tunisie',
      'countryCode': 'tn',
      'callingCode': '216'
    },
    {
      'countryName': 'Turkménistan',
      'countryCode': 'tm',
      'callingCode': '993'
    },
    {
      'countryName': 'Turquie',
      'countryCode': 'tr',
      'callingCode': '90'
    },
    {
      'countryName': 'Tuvalu',
      'countryCode': 'tv',
      'callingCode': '688'
    },
    {
      'countryName': 'Ukraine',
      'countryCode': 'ua',
      'callingCode': '380'
    },
    {
      'countryName': 'Uruguay',
      'countryCode': 'uy',
      'callingCode': '598'
    },
    {
      'countryName': 'Vanuatu',
      'countryCode': 'vu',
      'callingCode': '678'
    },
    {
      'countryName': 'Venezuela',
      'countryCode': 've',
      'callingCode': '58'
    },
    {
      'countryName': 'Viêt Nam',
      'countryCode': 'vn',
      'callingCode': '84'
    },
    {
      'countryName': 'Wallis-et-Futuna',
      'countryCode': 'wf',
      'callingCode': '681'
    },
    {
      'countryName': 'Yémen',
      'countryCode': 'ye',
      'callingCode': '967'
    },
    {
      'countryName': 'Zambie',
      'countryCode': 'zm',
      'callingCode': '260'
    },
    {
      'countryName': 'Zimbabwe',
      'countryCode': 'zw',
      'callingCode': '263'
    }
  ];

  static readonly phoneNumberUtil = PhoneNumberUtil.getInstance();

  static getRegionCodes(){
    const arr = [];
    this.countries.map(c => {
      arr.push(c.countryCode);
    });
    return arr;
  }

  static  getCountriesFullName(): Record<string, string>{
    const rec: Record<string, string> = {};
    this.countries.map(c => {
      rec[c.countryCode] = c.countryName;
    });
    return rec
  }

  static getCountryCodeForRegion(coutnryCode: string){
    return this.phoneNumberUtil.getCountryCodeForRegion(coutnryCode);
  }
  static isValidPhoneNumber(phoneNum: string, countryCode: string): boolean {
    try {
      const phone: PhoneNumber = this.phoneNumberUtil.parse(phoneNum,
        PhoneNumber.CountryCodeSource.UNSPECIFIED.name());

      if (this.phoneNumberUtil.isValidNumberForRegion(phone, countryCode)) {
        return true;
      }
    } catch (e) {
      throw e;
    }
    return false;
  }
}
