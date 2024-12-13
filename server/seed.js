require("dotenv").config();
const mongoose = require("mongoose");
const Link = require("./models/Link");

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Example data to seed the `Link` collection
const seedData = [
  
 
  
{ "url": "https://www.instagram.com/agencelbc/" },
{ "url": "https://www.instagram.com/trustt.io/" },
{ "url": "https://www.instagram.com/passageduhavre/" },
{ "url": "https://www.instagram.com/magency_influence/" },
{ "url": "https://www.instagram.com/twinpopbrand/" },
{ "url": "https://www.instagram.com/trndfrance/" },
{ "url": "https://www.instagram.com/alterfood/" },
{ "url": "https://www.instagram.com/les3chouettes/" },
{ "url": "https://www.instagram.com/assanis_fr/" },
{ "url": "https://www.instagram.com/foodles.co/" },
{ "url": "https://www.instagram.com/nolaconfiserie/" },
{ "url": "https://www.instagram.com/elsy.snacks/" },
{ "url": "https://www.instagram.com/brainsonicparis/" },
{ "url": "https://www.instagram.com/dlesessentiels/" },
{ "url": "https://www.instagram.com/tma_team/" },
{ "url": "https://www.instagram.com/marqueprefereedesfrancais/" },
{ "url": "https://www.instagram.com/sharefraiche/" },
{ "url": "https://www.instagram.com/studio.aequo/" },
{ "url": "https://www.instagram.com/home_sweet_test/" },
{ "url": "https://www.instagram.com/linaeofficial/" },
{ "url": "https://www.instagram.com/lescausantes/" },
{ "url": "https://www.instagram.com/oopsiebox_paris/" },
{ "url": "https://www.instagram.com/socialyseparis/" },

{ "url": "https://www.instagram.com/open2europe/" },
{ "url": "https://www.instagram.com/akagencyparis/" },
{ "url": "https://www.instagram.com/agence_kingcom/" },
{ "url": "https://www.instagram.com/agence_proches/" },
{ "url": "https://www.instagram.com/votredircom/" },
{ "url": "https://www.instagram.com/mylibeauty75/" },
{ "url": "https://www.instagram.com/holistik_rp/" },
{ "url": "https://www.instagram.com/agence_wellcom/" },
{ "url": "https://www.instagram.com/mtrchk_/" },
{ "url": "https://www.instagram.com/marieantoinetteagence/" },
{ "url": "https://www.instagram.com/lizzystudnia/" },
{ "url": "https://www.instagram.com/asapcommunication/" },
{ "url": "https://www.instagram.com/belongparis/" },
{ "url": "https://www.instagram.com/monetrp/" },
{ "url": "https://www.instagram.com/agencewellcommedia/" },
{ "url": "https://www.instagram.com/woo.paris/" },
{ "url": "https://www.instagram.com/gazette_rp/" },
{ "url": "https://www.instagram.com/dresscode_agency/" },
{ "url": "https://www.instagram.com/jlinkparis/" },
{ "url": "https://www.instagram.com/parlonsbpodcast/" },
{ "url": "https://www.instagram.com/linstant_lissage_marseille/" },
{ "url": "https://www.instagram.com/pepites_de__shein_/" },
{ "url": "https://www.instagram.com/bleburo/" },
{ "url": "https://www.instagram.com/jeanmarcfellouscommunication/" },
{ "url": "https://www.instagram.com/lacleparis/" },
{ "url": "https://www.instagram.com/effiderm.ineldea/" },
{ "url": "https://www.instagram.com/agencehistoire2/" },
{ "url": "https://www.instagram.com/giseleparisofficiel/" },
{ "url": "https://www.instagram.com/apivitafrance/" },
{ "url": "https://www.instagram.com/vibre_paris/" },
{ "url": "https://www.instagram.com/phfragrances/" },
{ "url": "https://www.instagram.com/joud.paris/" },
{ "url": "https://www.instagram.com/leshuilettes/" },
{ "url": "https://www.instagram.com/opticalsoult/" },

{ "url": "https://www.instagram.com/sobang_agency/" },
{ "url": "https://www.instagram.com/mnstr_agency/" },
{ "url": "https://www.instagram.com/monetrp/" },
{ "url": "https://www.instagram.com/agence_rebellion/" },
{ "url": "https://www.instagram.com/woo.paris/" },
{ "url": "https://www.instagram.com/heavenagency/" },
{ "url": "https://www.instagram.com/monksinparis/" },
{ "url": "https://www.instagram.com/marcelagency/" },
{ "url": "https://www.instagram.com/lareclame/" },
{ "url": "https://www.instagram.com/agence_shareanddare/" },
{ "url": "https://www.instagram.com/kazamparis/" },
{ "url": "https://www.instagram.com/grenadinerp/" },
{ "url": "https://www.instagram.com/septieme.sphere/" },
{ "url": "https://www.instagram.com/giseleparisofficiel/" },
{ "url": "https://www.instagram.com/screen__agency/" },
{ "url": "https://www.instagram.com/marieantoinetteagence/" },
{ "url": "https://www.instagram.com/agence_kingcom/" },
{ "url": "https://www.instagram.com/androidheadline/" },
{ "url": "https://www.instagram.com/cover_pr/" },
{ "url": "https://www.instagram.com/agence_proches/" },
{ "url": "https://www.instagram.com/kom_agence/" },
{ "url": "https://www.instagram.com/yamas_prod/" },
{ "url": "https://www.instagram.com/akagencyparis/" },
{ "url": "https://www.instagram.com/agenceoxygen/" },
{ "url": "https://www.instagram.com/agence_wellcom/" },
{ "url": "https://www.instagram.com/agenceblacklemon/" },
{ "url": "https://www.instagram.com/blackmilkagency/" },
{ "url": "https://www.instagram.com/riseandshine.agency/" },
{ "url": "https://www.instagram.com/toutouche_agency/" },
{ "url": "https://www.instagram.com/direagency/" },
{ "url": "https://www.instagram.com/asapcommunication/" },
{ "url": "https://www.instagram.com/wayagency.paris/" },
{ "url": "https://www.instagram.com/tristanlabagency/" },
{ "url": "https://www.instagram.com/dazemgmt/" },
{ "url": "https://www.instagram.com/agence_tribu/" },
{ "url": "https://www.instagram.com/spoagency/" },

{ "url": "https://www.instagram.com/saatchifrance/" },
{ "url": "https://www.instagram.com/bronx_agence/" },
{ "url": "https://www.instagram.com/frenesie.club/" },
{ "url": "https://www.instagram.com/publicisluxe/" },
{ "url": "https://www.instagram.com/tbwaparis/" },
{ "url": "https://www.instagram.com/dixseptparis/" },
{ "url": "https://www.instagram.com/hopscotch_event/" },
{ "url": "https://www.instagram.com/agence_visigo/" },
{ "url": "https://www.instagram.com/uzik.paris/" },
{ "url": "https://www.instagram.com/steveagency/" },
{ "url": "https://www.instagram.com/dagobertagence/" },
{ "url": "https://www.instagram.com/okcest.cool/" },
{ "url": "https://www.instagram.com/tbwacorporate/" },
{ "url": "https://www.instagram.com/heavenagency/" },
{ "url": "https://www.instagram.com/artefact_3000/" },
{ "url": "https://www.instagram.com/mnstr_agency/" },
{ "url": "https://www.instagram.com/biggerband/" },
{ "url": "https://www.instagram.com/carrenoir_agency/" },
{ "url": "https://www.instagram.com/wconrandesign/" },
{ "url": "https://www.instagram.com/sweetpunkagence/" },
{ "url": "https://www.instagram.com/studio_9p/" },
{ "url": "https://www.instagram.com/grinta_agency/" },
{ "url": "https://www.instagram.com/agence4uatre/" },
{ "url": "https://www.instagram.com/nil1nilautres/" },
{ "url": "https://www.instagram.com/martine.studio/" },
{ "url": "https://www.instagram.com/icibarbes/" },
{ "url": "https://www.instagram.com/monksinparis/" },
{ "url": "https://www.instagram.com/bonhommeparis/" },
{ "url": "https://www.instagram.com/agence1969/" },
{ "url": "https://www.instagram.com/sovage.tv/" },
{ "url": "https://www.instagram.com/agencemai69/" },
{ "url": "https://www.instagram.com/socialclubparis/" },
{ "url": "https://www.instagram.com/lassocie/" },
{ "url": "https://www.instagram.com/digitalpingpong/" },
{ "url": "https://www.instagram.com/tbwa.else/" },
{ "url": "https://www.instagram.com/rosaparis_agency/" },




];

// Function to insert seed data
const seedDB = async () => {
  try {
    await Link.deleteMany({}); // Clear existing data
    await Link.insertMany(seedData); // Insert new data
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

seedDB();
