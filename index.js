const items = [
    // dictionary list of states
    "Andaman and Nicobar Islands -> Swaraj Island : Radhanagar beach at Swaraj Island was bestowed with the title of ‘Asia’s Best Beach’ in 2004 by the TIME magazine. It is also listed as world's 7th most spectacular beach in the world on Time magazine list.",
    "Andaman and Nicobar Islands -> Cellular Jail : Also Known as Kala Pani in Port Blair was used by the British to exile political prisoners during the struggle for India's independence to the remote archipelago. Presently, the jail complex serves as a national memorial monument.",
    "Andaman and Nicobar Islands -> Barren Island :  About 135 km (84 mi) north-east of the territory's capital, Port Blair, is the only confirmed active volcano in South Asia.",
    "Andhra Pradesh -> Tirumala Tirupati : The abode of Lord Venkateswara, is the second richest and most visited religious centre (of any faith) in the world.",
    "Andhra Pradesh -> Kanaka Durga Temple : It is a Temple of Goddess Durga is situated on the Indrakeeladri hill in the city of Vijayawada on the banks of Krishna River. A large number of pilgrims attend the colourful celebrations of Tepotsavam and for holy dip in the Krishna river during the festival of Dusshera.",
    "Andhra Pradesh -> Mallikarjuna Swamy Temple : Situated at Srisailam in the Nallamala Hills of Kurnool district,[9] is the abode of lord Shiva and is one of the twelve Jyotirlinga shrines in India. Lord Rama himself installed the Sahasralinga, while the Pandavas lodged the Panchapandava lingas in the temple courtyard.",
    "Andhra Pradesh -> Lord Hanuman Temple: Situated in Ponnur, Guntur district is a famous temple.[citation needed] The height of Hanuman statue is more than 23 metres and also there is a temple for Garuda right opposite to Hanuman's temple in the same premises.",
    "Andhra Pradesh -> Char Minar",
    "Arunachal Pradesh -> Namdapha National Park : Rainforest Reserve And Tiger Habitat",
    "Arunachal Pradesh -> Roing : Lake, River, Park and Garden",
    "Arunachal Pradesh -> Tezu : River",
    "Arunachal Pradesh -> Sakteng Wildlife Sanctuary : Large National Park And Conservation Area",
    "Arunachal Pradesh -> Ziro : Known For Tarin Fish Farm - Paddy cultivation , Kile Pakho , Talley Valley Wildlife Sanctuary",
    "Himachal Pradesh ->  Mcleodganj : Known For  Bhagsu Falls , Namgyal Monastery , Bhagsunag Temple",
    "Assam -> Majuli : World's Largest Fresh Water Island",
    "Bihar -> Bodh Gaya : Known For  Mahabodhi Temple, Great Buddha Statue, Tibetan Refugee Market",
    "Chattisgarh -> Dantewada : Known For  Danteshwari Temple , Mama-Bhanjaa Temple , Indravati National Park",
    "Gujrat -> Kutch : Known For  Rann of Kutch , Kutch Desert Wildlife Sanctuary  Dholavira",
    "Kerala -> Alleppey : Known For Stay in Houseboat , Marari Beach , Alappuzha Beach ",
    "Haryana -> Gurgaon : Known for Damdama Lake",
    "Jammu And Kashmir -> Leh Ladakh : Pangong Lake , Nubra Valley , Leh Palace",
    "Jharkhand -> Netarhat : Betla Forest",
    "Karnataka -> Hampi : Known For Virupaksha Temple, Hampi , Vithala Temple , Lotus Palace",
    "Rajasthan -> Jaisalmer : Known For Jaisalmer Fort , Desert Safari in Jaisalmer , Kuldhara Village",
    "Odisha -> Konark : Sun Temple",
    "Uttarakhand -> Known For  Valley of Flowers National Park , Nanda Devi National Park , Fauna & Flora",
    "Madhya Pradesh -> Bandhavgarh National Park",
    "Goa -> Known For Calangute Beach , Fort Aguada , Cruise in Goa",
    "West Bengal -> Known For Darjeeling Himalayan Railway , Tiger Hill , Batasia Loop",
    "Sikkim -> Known For Gurudongmar Lake , Lachung , Yumthang Valley",
    "Manipur -> Known For Barak Waterfall , Zeilad Lake , Buning meadows",
    "Uttar Pradesh -> Known For  Kashi Vishwanath Temple , Dashashwamedh Ghat , Sankat Mochan Hanuman Temple",
    "Meghalaya -> Known For Double Decker Living Root Bridge , Cherrapunjee ",
    "Mizoram -> Known For Khawnglung Wildlife Sanctuary , Lunglei Sightseeing",
    "Tamil Nadu -> Known For  Thirparappu Falls , Kanyakumari Beach , Vivekananda Rock Memorial",
    "Nagaland -> Known For Longkhum , Ungma Village , Langpangkong Caves",
    "Punjab -> Known For Golden Temple , Amritsar",
    "Tripura -> Known For Unokotiswara Kal Bhairava",
    "Delhi -> Known For India Gate , Jantar Mantar , Parliamentary House , Janpath ",
    "Maharashtra -> Known For Gateway Of India , Ajanta Caves , Ellora Caves , Taj Hotel",
    "andaman and Nicobar Islands -> Swaraj Island : Radhanagar beach at Swaraj Island was bestowed with the title of ‘Asia’s Best Beach’ in 2004 by the TIME magazine. It is also listed as world's 7th most spectacular beach in the world on Time magazine list.",
    "andaman and Nicobar Islands -> Cellular Jail : Also Known as Kala Pani in Port Blair was used by the British to exile political prisoners during the struggle for India's independence to the remote archipelago. Presently, the jail complex serves as a national memorial monument.",
    "andaman and Nicobar Islands -> Barren Island :  About 135 km (84 mi) north-east of the territory's capital, Port Blair, is the only confirmed active volcano in South Asia.",
    "andhra Pradesh -> Tirumala Tirupati : The abode of Lord Venkateswara, is the second richest and most visited religious centre (of any faith) in the world.",
    "andhra Pradesh -> Kanaka Durga Temple : It is a Temple of Goddess Durga is situated on the Indrakeeladri hill in the city of Vijayawada on the banks of Krishna River. A large number of pilgrims attend the colourful celebrations of Tepotsavam and for holy dip in the Krishna river during the festival of Dusshera.",
    "andhra Pradesh -> Mallikarjuna Swamy Temple : Situated at Srisailam in the Nallamala Hills of Kurnool district,[9] is the abode of lord Shiva and is one of the twelve Jyotirlinga shrines in India. Lord Rama himself installed the Sahasralinga, while the Pandavas lodged the Panchapandava lingas in the temple courtyard.",
    "andhra Pradesh -> Lord Hanuman Temple: Situated in Ponnur, Guntur district is a famous temple.[citation needed] The height of Hanuman statue is more than 23 metres and also there is a temple for Garuda right opposite to Hanuman's temple in the same premises.",
    "andhra Pradesh -> Char Minar",
    "arunachal Pradesh -> Namdapha National Park : Rainforest Reserve And Tiger Habitat",
    "arunachal Pradesh -> Roing : Lake, River, Park and Garden",
    "arunachal Pradesh -> Tezu : River",
    "arunachal Pradesh -> Sakteng Wildlife Sanctuary : Large National Park And Conservation Area",
    "arunachal Pradesh -> Ziro : Known For Tarin Fish Farm - Paddy cultivation , Kile Pakho , Talley Valley Wildlife Sanctuary",
    "himachal Pradesh ->  Mcleodganj : Known For  Bhagsu Falls , Namgyal Monastery , Bhagsunag Temple",
    "assam -> Majuli : World's Largest Fresh Water Island",
    "bihar -> Bodh Gaya : Known For  Mahabodhi Temple, Great Buddha Statue, Tibetan Refugee Market",
    "chattisgarh -> Dantewada : Known For  Danteshwari Temple , Mama-Bhanjaa Temple , Indravati National Park",
    "gujrat -> Kutch : Known For  Rann of Kutch , Kutch Desert Wildlife Sanctuary  Dholavira",
    "kerala -> Alleppey : Known For Stay in Houseboat , Marari Beach , Alappuzha Beach ",
    "haryana -> Gurgaon : Known for Damdama Lake",
    "jammu And Kashmir -> Leh Ladakh : Pangong Lake , Nubra Valley , Leh Palace",
    "jharkhand -> Netarhat : Betla Forest",
    "karnataka -> Hampi : Known For Virupaksha Temple, Hampi , Vithala Temple , Lotus Palace",
    "rajasthan -> Jaisalmer : Known For Jaisalmer Fort , Desert Safari in Jaisalmer , Kuldhara Village",
    "odisha -> Konark : Sun Temple",
    "uttarakhand -> Known For  Valley of Flowers National Park , Nanda Devi National Park , Fauna & Flora",
    "madhya Pradesh -> Bandhavgarh National Park",
    "goa -> Known For Calangute Beach , Fort Aguada , Cruise in Goa",
    "west Bengal -> Known For Darjeeling Himalayan Railway , Tiger Hill , Batasia Loop",
    "sikkim -> Known For Gurudongmar Lake , Lachung , Yumthang Valley",
    "manipur -> Known For Barak Waterfall , Zeilad Lake , Buning meadows",
    "uttar Pradesh -> Known For  Kashi Vishwanath Temple , Dashashwamedh Ghat , Sankat Mochan Hanuman Temple",
    "meghalaya -> Known For Double Decker Living Root Bridge , Cherrapunjee ",
    "mizoram -> Known For Khawnglung Wildlife Sanctuary , Lunglei Sightseeing",
    "tamil Nadu -> Known For  Thirparappu Falls , Kanyakumari Beach , Vivekananda Rock Memorial",
    "nagaland -> Known For Longkhum , Ungma Village , Langpangkong Caves",
    "punjab -> Known For Golden Temple , Amritsar",
    "tripura -> Known For Unokotiswara Kal Bhairava",
    "delhi -> Known For India Gate , Jantar Mantar , Parliamentary House , Janpath ",
    "maharashtra -> Known For Gateway Of India , Ajanta Caves , Ellora Caves , Taj Hotel",
];

const root = new makeNode('\0');
for (const item of items)
    add(item, 0, root);

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e) {
    const str = e.target.value;
    const predictions = search(str, 0, root);

    //console.log(predictions);

    list.innerHTML = "";
    for (const prediction of predictions)
        list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(str.length)}</li>`;
    if(str.length==0) list.innerHTML="";

}

function handleClick(e) {
    text_box.value = e.innerText;
}



text_box.addEventListener("keyup", handler);
