const mongoose = require('mongoose')

const isValidEmail = function (mail) {
    if (/^[a-z0-9_]{1,}@[a-z]{3,}[.]{1}[a-z]{3,6}$/.test(mail)) {
    return true;
    }
}

const isValidPassword = function (password) {
    if ( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(password)) return true;
  return false
}

const isValidName = function(name) {
    if (/^[a-zA-Z\.]*$/.test(name)) return true
   return false
}

const isValidPhone = function(phone){
    if(/^[\s]*[6-9]\d{9}[\s]*$/gi.test(phone))return true
    return false
}

const isValidPincode = function(pincode){
    if(/^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}/.test(Number(pincode)))return true
    return false
}

const isValidstreet = function(street){
    if(/^\s*\S+(?:\s+\S+){2}/.test(street))return true     
    return false
}

const isValidRequestBody = function(requestBody){
    if(Object.keys(requestBody).length>0)return true
    return false
}

const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

const isValidTitle = function(name) {
  if (/^[a-zA-Z 0-9\.]*$/.test(name)) return true
 return false
}


const isValidImg = (img) => {
  const reg = /.+\.(?:(jpg|gif|png|jpeg|jfif))/;
  return reg.test(img);
};

const cityArray = [
    
        'Adilabad',
        'Anantapur',
        'Chittoor',
        'Kakinada',
        'Guntur',
        'Hyderabad',
        'Karimnagar',
        'Khammam',
        'Krishna',
        'Kurnool',
        'Mahbubnagar',
        'Medak',
        'Nalgonda',
        'Nizamabad',
        'Ongole',
        'Hyderabad',
        'Srikakulam',
        'Nellore',
        'Visakhapatnam',
        'Vizianagaram',
        'Warangal',
        'Eluru',
        'Kadapa',
        'Anjaw',
        'Changlang',
        'East Siang',
        'Kurung Kumey',
        'Lohit',
        'Lower Dibang Valley',
        'Lower Subansiri',
        'Papum Pare',
        'Tawang',
        'Tirap',
        'Dibang Valley',
        'Upper Siang',
        'Upper Subansiri',
        'West Kameng',
        'West Siang',
        'Baksa',
        'Barpeta',
        'Bongaigaon',
        'Cachar',
        'Chirang',
        'Darrang',
        'Dhemaji',
        'Dima Hasao',
        'Dhubri',
        'Dibrugarh',
        'Goalpara',
        'Golaghat',
        'Hailakandi',
        'Jorhat',
        'Kamrup',
        'Kamrup Metropolitan',
        'Karbi Anglong',
        'Karimganj',
        'Kokrajhar',
        'Lakhimpur',
        'Marigaon',
        'Nagaon',
        'Nalbari',
        'Sibsagar',
        'Sonitpur',
        'Tinsukia',
        'Udalguri',
        'Araria',
        'Arwal',
        'Aurangabad',
        'Banka',
        'Begusarai',
        'Bhagalpur',
        'Bhojpur',
        'Buxar',
        'Darbhanga',
        'East Champaran',
        'Gaya',
        'Gopalganj',
        'Jamui',
        'Jehanabad',
        'Kaimur',
        'Katihar',
        'Khagaria',
        'Kishanganj',
        'Lakhisarai',
        'Madhepura',
        'Madhubani',
        'Munger',
        'Muzaffarpur',
        'Nalanda',
        'Nawada',
        'Patna',
        'Purnia',
        'Rohtas',
        'Saharsa',
        'Samastipur',
        'Saran',
        'Sheikhpura',
        'Sheohar',
        'Sitamarhi',
        'Siwan',
        'Supaul',
        'Vaishali',
        'West Champaran',
        'Chandigarh',
        'Bastar',
        'Bijapur',
        'Bilaspur',
        'Dantewada',
        'Dhamtari',
        'Durg',
        'Jashpur',
        'Janjgir-Champa',
        'Korba',
        'Koriya',
        'Kanker',
        'Kabirdham (Kawardha)',
        'Mahasamund',
        'Narayanpur',
        'Raigarh',
        'Rajnandgaon',
        'Raipur',
        'Surguja',
        'Dadra and Nagar Haveli',
        'Daman',
        'Diu',
        'Central Delhi',
        'East Delhi',
        'New Delhi',
        'North Delhi',
        'North East Delhi',
        'North West Delhi',
        'South Delhi',
        'South West Delhi',
        'West Delhi',
        'North Goa',
        'South Goa',
        'Ahmedabad',
        'Amreli district',
        'Anand',
        'Banaskantha',
        'Bharuch',
        'Bhavnagar',
        'Dahod',
        'The Dangs',
        'Gandhinagar',
        'Jamnagar',
        'Junagadh',
        'Kutch',
        'Kheda',
        'Mehsana',
        'Narmada',
        'Navsari',
        'Patan',
        'Panchmahal',
        'Porbandar',
        'Rajkot',
        'Sabarkantha',
        'Surendranagar',
        'Surat',
        'Vyara',
        'Vadodara',
        'Valsad',
        'Ambala',
        'Bhiwani',
        'Faridabad',
        'Fatehabad',
        'Gurgaon',
        'Hissar',
        'Jhajjar',
        'Jind',
        'Karnal',
        'Kaithal',
        'Kurukshetra',
        'Mahendragarh',
        'Mewat',
        'Palwal',
        'Panchkula',
        'Panipat',
        'Rewari',
        'Rohtak',
        'Sirsa',
        'Sonipat',
        'Yamuna Nagar',
        'Bilaspur',
        'Chamba',
        'Hamirpur',
        'Kangra',
        'Kinnaur',
        'Kullu',
        'Lahaul and Spiti',
        'Mandi',
        'Shimla',
        'Sirmaur',
        'Solan',
        'Una',
        'Anantnag',
        'Badgam',
        'Bandipora',
        'Baramulla',
        'Doda',
        'Ganderbal',
        'Jammu',
        'Kargil',
        'Kathua',
        'Kishtwar',
        'Kupwara',
        'Kulgam',
        'Leh',
        'Poonch',
        'Pulwama',
        'Rajauri',
        'Ramban',
        'Reasi',
        'Samba',
        'Shopian',
        'Srinagar',
        'Udhampur',
        'Bokaro',
        'Chatra',
        'Deoghar',
        'Dhanbad',
        'Dumka',
        'East Singhbhum',
        'Garhwa',
        'Giridih',
        'Godda',
        'Gumla',
        'Hazaribag',
        'Jamtara',
        'Khunti',
        'Koderma',
        'Latehar',
        'Lohardaga',
        'Pakur',
        'Palamu',
        'Ramgarh',
        'Ranchi',
        'Sahibganj',
        'Seraikela Kharsawan',
        'Simdega',
        'West Singhbhum',
        'Bagalkot',
        'Bangalore Rural',
        'Bangalore Urban',
        'Belgaum',
        'Bellary',
        'Bidar',
        'Bijapur',
        'Chamarajnagar',
        'Chikkamagaluru',
        'Chikkaballapur',
        'Chitradurga',
        'Davanagere',
        'Dharwad',
        'Dakshina Kannada',
        'Gadag',
        'Gulbarga',
        'Hassan',
        'Haveri district',
        'Kodagu',
        'Kolar',
        'Koppal',
        'Mandya',
        'Mysore',
        'Raichur',
        'Shimoga',
        'Tumkur',
        'Udupi',
        'Uttara Kannada',
        'Ramanagara',
        'Yadgir',
        'Alappuzha',
        'Ernakulam',
        'Idukki',
        'Kannur',
        'Kasaragod',
        'Kollam',
        'Kottayam',
        'Kozhikode',
        'Malappuram',
        'Palakkad',
        'Pathanamthitta',
        'Thrissur',
        'Thiruvananthapuram',
        'Wayanad',
        'Alirajpur',
        'Anuppur',
        'Ashok Nagar',
        'Balaghat',
        'Barwani',
        'Betul',
        'Bhind',
        'Bhopal',
        'Burhanpur',
        'Chhatarpur',
        'Chhindwara',
        'Damoh',
        'Datia',
        'Dewas',
        'Dhar',
        'Dindori',
        'Guna',
        'Gwalior',
        'Harda',
        'Hoshangabad',
        'Indore',
        'Jabalpur',
        'Jhabua',
        'Katni',
        'Khandwa (East Nimar)',
        'Khargone (West Nimar)',
        'Mandla',
        'Mandsaur',
        'Morena',
        'Narsinghpur',
        'Neemuch',
        'Panna',
        'Rewa',
        'Rajgarh',
        'Ratlam',
        'Raisen',
        'Sagar',
        'Satna',
        'Sehore',
        'Seoni',
        'Shahdol',
        'Shajapur',
        'Sheopur',
        'Shivpuri',
        'Sidhi',
        'Singrauli',
        'Tikamgarh',
        'Ujjain',
        'Umaria',
        'Vidisha',
        'Ahmednagar',
        'Akola',
        'Amravati',
        'Aurangabad',
        'Bhandara',
        'Beed',
        'Buldhana',
        'Chandrapur',
        'Dhule',
        'Gadchiroli',
        'Gondia',
        'Hingoli',
        'Jalgaon',
        'Jalna',
        'Kolhapur',
        'Latur',
        'Mumbai City',
        'Mumbai suburban',
        'Nandurbar',
        'Nanded',
        'Nagpur',
        'Nashik',
        'Osmanabad',
        'Parbhani',
        'Pune',
        'Raigad',
        'Ratnagiri',
        'Sindhudurg',
        'Sangli',
        'Solapur',
        'Satara',
        'Thane',
        'Wardha',
        'Washim',
        'Yavatmal',
        'Bishnupur',
        'Churachandpur',
        'Chandel',
        'Imphal East',
        'Senapati',
        'Tamenglong',
        'Thoubal',
        'Ukhrul',
        'Imphal West',
        'East Garo Hills',
        'East Khasi Hills',
        'Jaintia Hills',
        'Ri Bhoi',
        'South Garo Hills',
        'West Garo Hills',
        'West Khasi Hills',
        'Aizawl',
        'Champhai',
        'Kolasib',
        'Lawngtlai',
        'Lunglei',
        'Mamit',
        'Saiha',
        'Serchhip',
        'Dimapur',
        'Kohima',
        'Mokokchung',
        'Mon',
        'Phek',
        'Tuensang',
        'Wokha',
        'Zunheboto',
        'Angul',
        'Boudh (Bauda)',
        'Bhadrak',
        'Balangir',
        'Bargarh (Baragarh)',
        'Balasore',
        'Cuttack',
        'Debagarh (Deogarh)',
        'Dhenkanal',
        'Ganjam',
        'Gajapati',
        'Jharsuguda',
        'Jajpur',
        'Jagatsinghpur',
        'Khordha',
        'Kendujhar (Keonjhar)',
        'Kalahandi',
        'Kandhamal',
        'Koraput',
        'Kendrapara',
        'Malkangiri',
        'Mayurbhanj',
        'Nabarangpur',
        'Nuapada',
        'Nayagarh',
        'Puri',
        'Rayagada',
        'Sambalpur',
        'Subarnapur (Sonepur)',
        'Sundergarh',
        'Karaikal',
        'Mahe',
        'Pondicherry',
        'Yanam',
        'Amritsar',
        'Barnala',
        'Bathinda',
        'Firozpur',
        'Faridkot',
        'Fatehgarh Sahib',
        'Fazilka',
        'Gurdaspur',
        'Hoshiarpur',
        'Jalandhar',
        'Kapurthala',
        'Ludhiana',
        'Mansa',
        'Moga',
        'Sri Muktsar Sahib',
        'Pathankot',
        'Patiala',
        'Rupnagar',
        'Ajitgarh (Mohali)',
        'Sangrur',
        'Nawanshahr',
        'Tarn Taran',
        'Ajmer',
        'Alwar',
        'Bikaner',
        'Barmer',
        'Banswara',
        'Bharatpur',
        'Baran',
        'Bundi',
        'Bhilwara',
        'Churu',
        'Chittorgarh',
        'Dausa',
        'Dholpur',
        'Dungapur',
        'Ganganagar',
        'Hanumangarh',
        'Jhunjhunu',
        'Jalore',
        'Jodhpur',
        'Jaipur',
        'Jaisalmer',
        'Jhalawar',
        'Karauli',
        'Kota',
        'Nagaur',
        'Pali',
        'Pratapgarh',
        'Rajsamand',
        'Sikar',
        'Sawai Madhopur',
        'Sirohi',
        'Tonk',
        'Udaipur',
        'East Sikkim',
        'North Sikkim',
        'South Sikkim',
        'West Sikkim',
        'Ariyalur',
        'Chennai',
        'Coimbatore',
        'Cuddalore',
        'Dharmapuri',
        'Dindigul',
        'Erode',
        'Kanchipuram',
        'Kanyakumari',
        'Karur',
        'Madurai',
        'Nagapattinam',
        'Nilgiris',
        'Namakkal',
        'Perambalur',
        'Pudukkottai',
        'Ramanathapuram',
        'Salem',
        'Sivaganga',
        'Tirupur',
        'Tiruchirappalli',
        'Theni',
        'Tirunelveli',
        'Thanjavur',
        'Thoothukudi',
        'Tiruvallur',
        'Tiruvarur',
        'Tiruvannamalai',
        'Vellore',
        'Viluppuram',
        'Virudhunagar',
        'Dhalai',
        'North Tripura',
        'South Tripura',
        'Khowai',
        'West Tripura',
        'Agra',
        'Allahabad',
        'Aligarh',
        'Ambedkar Nagar',
        'Auraiya',
        'Azamgarh',
        'Barabanki',
        'Budaun',
        'Bagpat',
        'Bahraich',
        'Bijnor',
        'Ballia',
        'Banda',
        'Balrampur',
        'Bareilly',
        'Basti',
        'Bulandshahr',
        'Chandauli',
        'Chhatrapati Shahuji Maharaj Nagar',
        'Chitrakoot',
        'Deoria',
        'Etah',
        'Kanshi Ram Nagar',
        'Etawah',
        'Firozabad',
        'Farrukhabad',
        'Fatehpur',
        'Faizabad',
        'Gautam Buddh Nagar',
        'Gonda',
        'Ghazipur',
        'Gorakhpur',
        'Ghaziabad',
        'Hamirpur',
        'Hardoi',
        'Mahamaya Nagar',
        'Jhansi',
        'Jalaun',
        'Jyotiba Phule Nagar',
        'Jaunpur district',
        'Ramabai Nagar (Kanpur Dehat)',
        'Kannauj',
        'Kanpur',
        'Kaushambi',
        'Kushinagar',
        'Lalitpur',
        'Lakhimpur Kheri',
        'Lucknow',
        'Mau',
        'Meerut',
        'Maharajganj',
        'Mahoba',
        'Mirzapur',
        'Moradabad',
        'Mainpuri',
        'Mathura',
        'Muzaffarnagar',
        'Panchsheel Nagar district (Hapur)',
        'Pilibhit',
        'Shamli',
        'Pratapgarh',
        'Rampur',
        'Raebareli',
        'Saharanpur',
        'Sitapur',
        'Shahjahanpur',
        'Sant Kabir Nagar',
        'Siddharthnagar',
        'Sonbhadra',
        'Sant Ravidas Nagar',
        'Sultanpur',
        'Shravasti',
        'Unnao',
        'Varanasi',
        'Almora',
        'Bageshwar',
        'Chamoli',
        'Champawat',
        'Dehradun',
        'Haridwar',
        'Nainital',
        'Pauri Garhwal',
        'Pithoragarh',
        'Rudraprayag',
        'Tehri Garhwal',
        'Udham Singh Nagar',
        'Uttarkashi',
        'Birbhum',
        'Bankura',
        'Bardhaman',
        'Darjeeling',
        'Dakshin Dinajpur',
        'Hooghly',
        'Howrah',
        'Jalpaiguri',
        'Cooch Behar',
        'Kolkata',
        'Maldah',
        'Paschim Medinipur',
        'Purba Medinipur',
        'Murshidabad',
        'Nadia',
        'North 24 Parganas',
        'South 24 Parganas',
        'Purulia',
        'Uttar Dinajpur',
]

const isValidCity = (cityname) => {
    if(cityArray.includes(cityname)){
        return true
    }
    return false
  };





module.exports = {
  isValid,
  isValidEmail,
  isValidPassword,
  isValidName,
  isValidPhone,
  isValidPincode,
  isValidstreet,
  isValidRequestBody,
  isValidObjectId,
  isValidImg,
  isValidTitle,
  isValidCity
};