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
const seedData = 

  [

    

{ "url": "https://www.instagram.com/_luisefeliz_/?hl=en" },
{ "url": "https://www.instagram.com/nicnol73/?hl=en" },
{ "url": "https://www.instagram.com/christina.aretz/?hl=en" },

{ "url": "https://www.instagram.com/sturcetostuki/?hl=en" },
{ "url": "https://www.instagram.com/kirstenbaving/?hl=en" },
{ "url": "https://www.instagram.com/ivana8kiss/?hl=en" },
{ "url": "https://www.instagram.com/astra_1703/?hl=en" },
{ "url": "https://www.instagram.com/dannimerkle/?hl=en" },
{ "url": "https://www.instagram.com/ms.peach_colada/?hl=en" },
{ "url": "https://www.instagram.com/raetschi_/?hl=en" },
{ "url": "https://www.instagram.com/baerchen_s/?hl=en" },
{ "url": "https://www.instagram.com/steve.munic/?hl=en" },
{ "url": "https://www.instagram.com/anita_54_/?hl=en" },
{ "url": "https://www.instagram.com/_evii._/?hl=en" },
{ "url": "https://www.instagram.com/sbrn.k234/?hl=en" },

{ "url": "https://www.instagram.com/imaschi/?hl=en" },
{ "url": "https://www.instagram.com/maximii_maximaa/?hl=en" },
{ "url": "https://www.instagram.com/ralf_kuderer/?hl=en" },
{ "url": "https://www.instagram.com/rebeccawm2904/?hl=en" },
{ "url": "https://www.instagram.com/nadinekaraca_/?hl=en" },
{ "url": "https://www.instagram.com/marubi62/?hl=en" },
{ "url": "https://www.instagram.com/claudi_zluhcs/?hl=en" },

{ "url": "https://www.instagram.com/lisaaamarie8/?hl=en" },

{ "url": "https://www.instagram.com/an_gi_3_10/?hl=en" },


{ "url": "https://www.instagram.com/tamara.1608/?hl=en" },
{ "url": "https://www.instagram.com/isy.sch/?hl=en" },
{ "url": "https://www.instagram.com/rinkatspi/?hl=en" },

{ "url": "https://www.instagram.com/monikakurschner/?hl=en" },
{ "url": "https://www.instagram.com/fatimamtza/?hl=en" },

{ "url": "https://www.instagram.com/abdessamad_boulhdoub/?hl=en" },
{ "url": "https://www.instagram.com/futbolaskii198/?hl=en" },
{ "url": "https://www.instagram.com/mersiha_r_/?hl=en" },
{ "url": "https://www.instagram.com/al61yahya/?hl=en" },

{ "url": "https://www.instagram.com/michel68ausnr/?hl=en" },
{ "url": "https://www.instagram.com/insta.nnika/?hl=en" },
{ "url": "https://www.instagram.com/janinella_van_saar/?hl=en" },
{ "url": "https://www.instagram.com/anna.gtzmr/?hl=en" },
{ "url": "https://www.instagram.com/_vavasitaa/?hl=en" },
{ "url": "https://www.instagram.com/julina.haldenwanger/?hl=en" },
{ "url": "https://www.instagram.com/grismelt20/?hl=en" },
{ "url": "https://www.instagram.com/joneslein/?hl=en" },
{ "url": "https://www.instagram.com/jensweinert/?hl=en" },
{ "url": "https://www.instagram.com/sabaer16/?hl=en" },
{ "url": "https://www.instagram.com/saleduisburg/?hl=en" },
{ "url": "https://www.instagram.com/dominika_kermenc_arbanas/?hl=en" },
{ "url": "https://www.instagram.com/evangelia__d/?hl=en" },
{ "url": "https://www.instagram.com/succilein/?hl=en" },
{ "url": "https://www.instagram.com/lisabenkendorf/?hl=en" },
{ "url": "https://www.instagram.com/rima_kichuk_testerfun13/?hl=en" },
{ "url": "https://www.instagram.com/turgut__ay/?hl=en" },
{ "url": "https://www.instagram.com/burryoliver/?hl=en" },
{ "url": "https://www.instagram.com/betulms93/?hl=en" },
{ "url": "https://www.instagram.com/melli3girls/?hl=en" },
{ "url": "https://www.instagram.com/home_inspo_btl/?hl=en" },
{ "url": "https://www.instagram.com/justi1987/?hl=en" },
{ "url": "https://www.instagram.com/lubi2911/?hl=en" },
{ "url": "https://www.instagram.com/svenja173/?hl=en" },
{ "url": "https://www.instagram.com/suzanavrb/?hl=en" },
{ "url": "https://www.instagram.com/julianja222/?hl=en" },
{ "url": "https://www.instagram.com/_melaniegtm/?hl=en" },
{ "url": "https://www.instagram.com/seufertclaudia/?hl=en" },
{ "url": "https://www.instagram.com/hasihuepf1/?hl=en" },
{ "url": "https://www.instagram.com/annk.a1983/?hl=en" },
{ "url": "https://www.instagram.com/gulserenv_66/?hl=en" },
{ "url": "https://www.instagram.com/thedenniswittmann/?hl=en" },
{ "url": "https://www.instagram.com/alice_seleen/?hl=en" },
{ "url": "https://www.instagram.com/minja_1993/?hl=en" },

{ "url": "https://www.instagram.com/mrs_andrea_fischer/?hl=en" },
{ "url": "https://www.instagram.com/sveniwipp/?hl=en" },
{ "url": "https://www.instagram.com/andi___1994/?hl=en" },
{ "url": "https://www.instagram.com/simonoskitose/?hl=en" },
{ "url": "https://www.instagram.com/monika.frohwerk/?hl=en" },
{ "url": "https://www.instagram.com/beckywittmann/?hl=en" },
{ "url": "https://www.instagram.com/medeni_2112_almanya/?hl=en" },
{ "url": "https://www.instagram.com/love_life_love_yourself24/?hl=en" },
{ "url": "https://www.instagram.com/hartmannmirjam/?hl=en" },
{ "url": "https://www.instagram.com/dianar301/?hl=en" },
{ "url": "https://www.instagram.com/nails_by_jenny_eschen/?hl=en" },
{ "url": "https://www.instagram.com/jennifer_e92/?hl=en" },
{ "url": "https://www.instagram.com/lorena_cocka/?hl=en" },
{ "url": "https://www.instagram.com/_kasoro_/?hl=en" },
{ "url": "https://www.instagram.com/saskia.schreibt/?hl=en" },
{ "url": "https://www.instagram.com/sa.burgic/?hl=en" },
{ "url": "https://www.instagram.com/marben.2112/?hl=en" },
{ "url": "https://www.instagram.com/tonii__mensphysique/?hl=en" },
{ "url": "https://www.instagram.com/raclette_1809/?hl=en" },
{ "url": "https://www.instagram.com/sarahsaharii/?hl=en" },
{ "url": "https://www.instagram.com/isaschwindt/?hl=en" },
{ "url": "https://www.instagram.com/jumper.k2013/?hl=en" },
{ "url": "https://www.instagram.com/_refohnlek/?hl=en" },
{ "url": "https://www.instagram.com/natascha_sndr/?hl=en" },
{ "url": "https://www.instagram.com/life.of.alikat/?hl=en" },
{ "url": "https://www.instagram.com/dineee007/?hl=en" },

{ "url": "https://www.instagram.com/jam91518/?hl=en" },
{ "url": "https://www.instagram.com/v.i.p.3356/?hl=en" },
{ "url": "https://www.instagram.com/_liz.elisa_/?hl=en" },
{ "url": "https://www.instagram.com/paddyjae/?hl=en" },
{ "url": "https://www.instagram.com/nee_lia/?hl=en" },
{ "url": "https://www.instagram.com/bettinaopolka/?hl=en" },


{ "url": "https://www.instagram.com/lari.sttrl/?hl=en" },
{ "url": "https://www.instagram.com/isigoesforward/?hl=en" },
{ "url": "https://www.instagram.com/so.fiya4291/?hl=en" },
{ "url": "https://www.instagram.com/8susi6/?hl=en" },
{ "url": "https://www.instagram.com/eskodas1/?hl=en" },
{ "url": "https://www.instagram.com/amouna_nac/?hl=en" },

{ "url": "https://www.instagram.com/_heikesie_/?hl=en" },
{ "url": "https://www.instagram.com/alex.baggi89/?hl=en" },
{ "url": "https://www.instagram.com/janin_chen23119/?hl=en" },
{ "url": "https://www.instagram.com/mom.of.a.and.a/?hl=en" },
{ "url": "https://www.instagram.com/nora.at32/?hl=en" },
{ "url": "https://www.instagram.com/nino_f81/?hl=en" },
{ "url": "https://www.instagram.com/fran.zi_ew/?hl=en" },
{ "url": "https://www.instagram.com/mdmnovo/?hl=en" },
{ "url": "https://www.instagram.com/blck_540i/?hl=en" },


{ "url": "https://www.instagram.com/vanii_urb/?hl=en" },
{ "url": "https://www.instagram.com/kirapeters71/?hl=en" },
{ "url": "https://www.instagram.com/tippo1991/?hl=en" },
{ "url": "https://www.instagram.com/isa_tirol/?hl=en" },
{ "url": "https://www.instagram.com/dafinabezhimrijaj/?hl=en" },

{ "url": "https://www.instagram.com/buronia80/?hl=en" },
{ "url": "https://www.instagram.com/demanu0506/?hl=en" },
{ "url": "https://www.instagram.com/ricardordz.anuncios/?hl=en" },
{ "url": "https://www.instagram.com/flechtnerfrank/?hl=en" },
{ "url": "https://www.instagram.com/nicolebalsliemke/?hl=en" },
{ "url": "https://www.instagram.com/nerminkaya2000/?hl=en" },
{ "url": "https://www.instagram.com/naimkraas/?hl=en" },
{ "url": "https://www.instagram.com/xhes.tr/?hl=en" },
{ "url": "https://www.instagram.com/tr_turhks_since.36/?hl=en" },

{ "url": "https://www.instagram.com/bettyfeng8/?hl=en" },
{ "url": "https://www.instagram.com/larabro99/?hl=en" },
{ "url": "https://www.instagram.com/_domika_/?hl=en" },
{ "url": "https://www.instagram.com/utzbenz/?hl=en" },
{ "url": "https://www.instagram.com/ad_ri__an/?hl=en" },
{ "url": "https://www.instagram.com/denisakubalova_d/?hl=en" },
{ "url": "https://www.instagram.com/sir_g_st/?hl=en" },
{ "url": "https://www.instagram.com/jojo.su88/?hl=en" },
{ "url": "https://www.instagram.com/lisaf.2503/?hl=en" },
{ "url": "https://www.instagram.com/mellinelli3/?hl=en" },
{ "url": "https://www.instagram.com/nicikunze/?hl=en" },
{ "url": "https://www.instagram.com/tomaroo80/?hl=en" },
{ "url": "https://www.instagram.com/cocoku80/?hl=en" },
{ "url": "https://www.instagram.com/madame12368/?hl=en" },
{ "url": "https://www.instagram.com/aurorasolexx/?hl=en" },
{ "url": "https://www.instagram.com/enviousspunkt/?hl=en" },
{ "url": "https://www.instagram.com/yfzr6re/?hl=en" },
{ "url": "https://www.instagram.com/kathifrei38/?hl=en" },
{ "url": "https://www.instagram.com/paulif.1961/?hl=en" },
{ "url": "https://www.instagram.com/anlifre92/?hl=en" },
{ "url": "https://www.instagram.com/depremturkiyee2023/?hl=en" },
{ "url": "https://www.instagram.com/ina.time/?hl=en" },
{ "url": "https://www.instagram.com/peppi1982/?hl=en" },
{ "url": "https://www.instagram.com/dani.elstemmer/?hl=en" },
{ "url": "https://www.instagram.com/oskars.games/?hl=en" },
{ "url": "https://www.instagram.com/fifikunze/?hl=en" },
{ "url": "https://www.instagram.com/jojo.schuster/?hl=en" },

{ "url": "https://www.instagram.com/lesfeld/?hl=en" },
{ "url": "https://www.instagram.com/lper_jojo/?hl=en" },
{ "url": "https://www.instagram.com/oma_mit_internet/?hl=en" },
{ "url": "https://www.instagram.com/cschmidhuber/?hl=en" },

{ "url": "https://www.instagram.com/pstestetneu/?hl=en" },
{ "url": "https://www.instagram.com/sofiesoulfood/?hl=en" },
{ "url": "https://www.instagram.com/hannahsgewinne/?hl=en" },
{ "url": "https://www.instagram.com/julia_kryts/?hl=en" },
{ "url": "https://www.instagram.com/t.ommy78/?hl=en" },
{ "url": "https://www.instagram.com/wbuschek/?hl=en" },
{ "url": "https://www.instagram.com/nick_0241/?hl=en" },
{ "url": "https://www.instagram.com/maria.singt.gerne/?hl=en" },



{ "url": "https://www.instagram.com/helena.prys/?hl=en" },
{ "url": "https://www.instagram.com/alexn560/?hl=en" },

{ "url": "https://www.instagram.com/heidiobermeyer1/?hl=en" },
{ "url": "https://www.instagram.com/xtim_01x/?hl=en" },
{ "url": "https://www.instagram.com/deusexmachina272/?hl=en" },

{ "url": "https://www.instagram.com/opanicodemus/?hl=en" },
{ "url": "https://www.instagram.com/nici.lache/?hl=en" },
{ "url": "https://www.instagram.com/painterpublisher/?hl=en" },
{ "url": "https://www.instagram.com/lady.anaaa/?hl=en" },
{ "url": "https://www.instagram.com/gessleriga/?hl=en" },
{ "url": "https://www.instagram.com/docshell00000/?hl=en" },

{ "url": "https://www.instagram.com/kerstin9774/?hl=en" },
{ "url": "https://www.instagram.com/hoggy1974/?hl=en" },
{ "url": "https://www.instagram.com/laavegang/?hl=en" },
{ "url": "https://www.instagram.com/anka.karacic/?hl=en" },
{ "url": "https://www.instagram.com/dbegge/?hl=en" },
{ "url": "https://www.instagram.com/maikellinski/?hl=en" },

{ "url": "https://www.instagram.com/sandrafrer/?hl=en" },
{ "url": "https://www.instagram.com/squishy_makerlove/?hl=en" },
{ "url": "https://www.instagram.com/juttamunzig/?hl=en" },

{ "url": "https://www.instagram.com/ii535778/?hl=en" },
{ "url": "https://www.instagram.com/goce.robev/?hl=en" },
{ "url": "https://www.instagram.com/sandra.kuehn88/?hl=en" },
{ "url": "https://www.instagram.com/mohannad.he/?hl=en" },
{ "url": "https://www.instagram.com/sichtweise_2021/?hl=en" },
{ "url": "https://www.instagram.com/feuervan/?hl=en" },
{ "url": "https://www.instagram.com/flensburger.jung/?hl=en" },
{ "url": "https://www.instagram.com/flachlandtiroler87/?hl=en" },
{ "url": "https://www.instagram.com/mitohnename23/?hl=en" },
{ "url": "https://www.instagram.com/ingridrs2701/?hl=en" },
{ "url": "https://www.instagram.com/silke_maurer5/?hl=en" },
{ "url": "https://www.instagram.com/emmi_goelzer_zw/?hl=en" },

{ "url": "https://www.instagram.com/ch.a.n.t.i/?hl=en" },
{ "url": "https://www.instagram.com/blaze9662024/?hl=en" },
{ "url": "https://www.instagram.com/bernhardt_andrea/?hl=en" },

{ "url": "https://www.instagram.com/christianlang30/?hl=en" },
{ "url": "https://www.instagram.com/kara_aylin_/?hl=en" },
{ "url": "https://www.instagram.com/cindy.aus.berlin/?hl=en" },
{ "url": "https://www.instagram.com/nini_b_b/?hl=en" },
{ "url": "https://www.instagram.com/force_et_la_fidelite/?hl=en" },
{ "url": "https://www.instagram.com/ursula_rueckauf18/?hl=en" },
{ "url": "https://www.instagram.com/_michellesxr_/?hl=en" },
{ "url": "https://www.instagram.com/gabrielavizantie/?hl=en" },
{ "url": "https://www.instagram.com/die_kuechenhummel/?hl=en" },
{ "url": "https://www.instagram.com/ms._coco_mademoiselle/?hl=en" },
{ "url": "https://www.instagram.com/amcamo12/?hl=en" },
{ "url": "https://www.instagram.com/ray1911_/?hl=en" },
{ "url": "https://www.instagram.com/rezeptegarten/?hl=en" },
{ "url": "https://www.instagram.com/posch.nadine/?hl=en" },
{ "url": "https://www.instagram.com/xlaramilenax/?hl=en" },
{ "url": "https://www.instagram.com/beat_rice1983/?hl=en" },
{ "url": "https://www.instagram.com/kiss.me.tiger/?hl=en" },
{ "url": "https://www.instagram.com/thi_lo_ve/?hl=en" },
{ "url": "https://www.instagram.com/danbraalt/?hl=en" },
{ "url": "https://www.instagram.com/jennyschlo2812/?hl=en" },
{ "url": "https://www.instagram.com/jessica.franz.758/?hl=en" },
{ "url": "https://www.instagram.com/nessa130882/?hl=en" },
{ "url": "https://www.instagram.com/b2w_graphy/?hl=en" },
{ "url": "https://www.instagram.com/nicolesoutschka/?hl=en" },

{ "url": "https://www.instagram.com/fami_lia50/?hl=en" },
{ "url": "https://www.instagram.com/nevin2828/?hl=en" },
{ "url": "https://www.instagram.com/htcerar/?hl=en" },

{ "url": "https://www.instagram.com/blumentopf1993/?hl=en" },

{ "url": "https://www.instagram.com/krusie16/?hl=en" },
{ "url": "https://www.instagram.com/herr_jule/?hl=en" },
{ "url": "https://www.instagram.com/iny1214/?hl=en" },
{ "url": "https://www.instagram.com/lisa_schumacher92/?hl=en" },
{ "url": "https://www.instagram.com/jewishgaypleasure/?hl=en" },
{ "url": "https://www.instagram.com/kajaa.papaya/?hl=en" },


{ "url": "https://www.instagram.com/isa_bella1094/?hl=en" },
{ "url": "https://www.instagram.com/daddy.adventure/?hl=en" },
{ "url": "https://www.instagram.com/a_n_n_a_s_u_s_/?hl=en" },


{ "url": "https://www.instagram.com/12taucher34/?hl=en" },
{ "url": "https://www.instagram.com/superkopp7/?hl=en" },
{ "url": "https://www.instagram.com/tinaundtony/?hl=en" },
{ "url": "https://www.instagram.com/vreni04041991/?hl=en" },
{ "url": "https://www.instagram.com/angelinag1995/?hl=en" },
{ "url": "https://www.instagram.com/m__tinus/?hl=en" },
{ "url": "https://www.instagram.com/freund_der_welt/?hl=en" },
{ "url": "https://www.instagram.com/sebastiantheurich/?hl=en" },

{ "url": "https://www.instagram.com/stilloft/?hl=en" },
{ "url": "https://www.instagram.com/jea_nettii_/?hl=en" },

{ "url": "https://www.instagram.com/christiane848/?hl=en" },
{ "url": "https://www.instagram.com/mogk.benjamin/?hl=en" },
{ "url": "https://www.instagram.com/carmenseefried9690/?hl=en" },
{ "url": "https://www.instagram.com/aytenbalci_/?hl=en" },
{ "url": "https://www.instagram.com/moritzschwerdtle/?hl=en" },
{ "url": "https://www.instagram.com/irma.ries.3/?hl=en" },
{ "url": "https://www.instagram.com/phillip_hl/?hl=en" },
{ "url": "https://www.instagram.com/hajovh/?hl=en" },
{ "url": "https://www.instagram.com/madeline_m.m_/?hl=en" },
{ "url": "https://www.instagram.com/vanessa__406/?hl=en" },
{ "url": "https://www.instagram.com/beach.more.worry.less/?hl=en" },

{ "url": "https://www.instagram.com/lelamo50/?hl=en" },
{ "url": "https://www.instagram.com/sandyeppop/?hl=en" },

{ "url": "https://www.instagram.com/sandragutsmann/?hl=en" },
{ "url": "https://www.instagram.com/vi_lous/?hl=en" },
{ "url": "https://www.instagram.com/mt.katze/?hl=en" },



{ "url": "https://www.instagram.com/marionute__/?hl=en" },
{ "url": "https://www.instagram.com/ambrosiusmonika/?hl=en" },
{ "url": "https://www.instagram.com/_eli.sa01/?hl=en" },


{ "url": "https://www.instagram.com/schwangere2014/?hl=en" },




{ "url": "https://www.instagram.com/aliciastbe/?hl=en" },
{ "url": "https://www.instagram.com/sunnyside_of_life_blog/?hl=en" },
{ "url": "https://www.instagram.com/sabine9701/?hl=en" },
{ "url": "https://www.instagram.com/youme_style/?hl=en" },

{ "url": "https://www.instagram.com/dianaschwinn/?hl=en" },
{ "url": "https://www.instagram.com/tortenmamano1/?hl=en" },
{ "url": "https://www.instagram.com/alber_tine/?hl=en" },


{ "url": "https://www.instagram.com/traumtorten_eu/?hl=en" },
{ "url": "https://www.instagram.com/svila_s10/?hl=en" },
{ "url": "https://www.instagram.com/siadsantos/?hl=en" },
{ "url": "https://www.instagram.com/4four_of_us/?hl=en" },
{ "url": "https://www.instagram.com/silk.e244/?hl=en" },

{ "url": "https://www.instagram.com/svn_wnt/?hl=en" },
{ "url": "https://www.instagram.com/blackforestbear/?hl=en" },
{ "url": "https://www.instagram.com/thorsten.wolf1/?hl=en" },
{ "url": "https://www.instagram.com/svenjathiel1979/?hl=en" },
{ "url": "https://www.instagram.com/marco.haber/?hl=en" },
{ "url": "https://www.instagram.com/schmalhans_91/?hl=en" },
{ "url": "https://www.instagram.com/annett_die_glueckliche/?hl=en" },
{ "url": "https://www.instagram.com/marvin_schellert/?hl=en" },
{ "url": "https://www.instagram.com/sonja.gotti/?hl=en" },
{ "url": "https://www.instagram.com/lisarotti2.0/?hl=en" },
{ "url": "https://www.instagram.com/myriel69/?hl=en" },
{ "url": "https://www.instagram.com/xo.torixo/?hl=en" },
{ "url": "https://www.instagram.com/flottfrau/?hl=en" },
{ "url": "https://www.instagram.com/blackdagger795/?hl=en" },

{ "url": "https://www.instagram.com/dimi_gxl/?hl=en" },
{ "url": "https://www.instagram.com/sandrasartcorner/?hl=en" },
{ "url": "https://www.instagram.com/sab.i.i.i.3290/?hl=en" },
{ "url": "https://www.instagram.com/sunnys_stories_/?hl=en" },
{ "url": "https://www.instagram.com/juttawassink/?hl=en" },
{ "url": "https://www.instagram.com/lonneberga93/?hl=en" },
{ "url": "https://www.instagram.com/lassmaltesten/?hl=en" },
{ "url": "https://www.instagram.com/lena_testerin/?hl=en" },
{ "url": "https://www.instagram.com/caro__gr/?hl=en" },
{ "url": "https://www.instagram.com/fraufauso/?hl=en" },
{ "url": "https://www.instagram.com/_julia_812/?hl=en" },
{ "url": "https://www.instagram.com/loytanja78/?hl=en" },

{ "url": "https://www.instagram.com/enya.taylorsversion/?hl=en" },
{ "url": "https://www.instagram.com/christineschmill1/?hl=en" },
{ "url": "https://www.instagram.com/thinkpinklady/?hl=en" },
{ "url": "https://www.instagram.com/minas_randomstuff/?hl=en" },
{ "url": "https://www.instagram.com/jasmin1057/?hl=en" },
{ "url": "https://www.instagram.com/dive.in.live/?hl=en" },
{ "url": "https://www.instagram.com/daniel_rosemyr/?hl=en" },
{ "url": "https://www.instagram.com/lucakottmann/?hl=en" },

{ "url": "https://www.instagram.com/anisbutterponk/?hl=en" },
{ "url": "https://www.instagram.com/chcoenen/?hl=en" },
{ "url": "https://www.instagram.com/steffykrachgarten/?hl=en" },
{ "url": "https://www.instagram.com/little_miss_sunshine1703/?hl=en" },
{ "url": "https://www.instagram.com/sportluca1/?hl=en" },
{ "url": "https://www.instagram.com/petraheigl/?hl=en" },
{ "url": "https://www.instagram.com/monika.pre/?hl=en" },

{ "url": "https://www.instagram.com/sally0202020202/?hl=en" },
{ "url": "https://www.instagram.com/niina_x33/?hl=en" },
{ "url": "https://www.instagram.com/michaela_ninve/?hl=en" },
{ "url": "https://www.instagram.com/dorodorodorotka/?hl=en" },
{ "url": "https://www.instagram.com/timloecken/?hl=en" },
{ "url": "https://www.instagram.com/tatty3492/?hl=en" },
{ "url": "https://www.instagram.com/bix.i22/?hl=en" },
{ "url": "https://www.instagram.com/rosi_x1/?hl=en" },
{ "url": "https://www.instagram.com/bettipumpkin/?hl=en" },
{ "url": "https://www.instagram.com/coolk_arma/?hl=en" },

{ "url": "https://www.instagram.com/esma.eek/?hl=en" },
{ "url": "https://www.instagram.com/plant.beach/?hl=en" },
{ "url": "https://www.instagram.com/sir_farmalot/?hl=en" },

{ "url": "https://www.instagram.com/sind_die_peach/?hl=en" },
{ "url": "https://www.instagram.com/susi.kessler.14/?hl=en" },
{ "url": "https://www.instagram.com/trici1974/?hl=en" },
{ "url": "https://www.instagram.com/sengulbrink/?hl=en" },
{ "url": "https://www.instagram.com/kevinraffolt/?hl=en" },
{ "url": "https://www.instagram.com/dilekta70/?hl=en" },
{ "url": "https://www.instagram.com/sabrinasverruecktewelt/?hl=en" },

{ "url": "https://www.instagram.com/aninaj_1512/?hl=en" },
{ "url": "https://www.instagram.com/tat.jana.f/?hl=en" },

{ "url": "https://www.instagram.com/sabii262/?hl=en" },
{ "url": "https://www.instagram.com/rietz_stefanie/?hl=en" },
{ "url": "https://www.instagram.com/nb2_0_19/?hl=en" },
{ "url": "https://www.instagram.com/mmichii1/?hl=en" },
{ "url": "https://www.instagram.com/redgpz2001/?hl=en" },
{ "url": "https://www.instagram.com/coluan75/?hl=en" },
{ "url": "https://www.instagram.com/hiltrudreinert/?hl=en" },
{ "url": "https://www.instagram.com/carolynnofficial/?hl=en" },
{ "url": "https://www.instagram.com/cuendy87/?hl=en" },
{ "url": "https://www.instagram.com/nadine.frs/?hl=en" },
{ "url": "https://www.instagram.com/margit.heller.940/?hl=en" },
{ "url": "https://www.instagram.com/mister_sick/?hl=en" },
{ "url": "https://www.instagram.com/just_a_littel_shot/?hl=en" },
{ "url": "https://www.instagram.com/sabrina.seiser12345678/?hl=en" },
{ "url": "https://www.instagram.com/regenziege/?hl=en" },
{ "url": "https://www.instagram.com/alexanderjoa1975/?hl=en" },
{ "url": "https://www.instagram.com/elia.na0204/?hl=en" },
{ "url": "https://www.instagram.com/ich_zeige_euch_wie_man_spart/?hl=en" },
{ "url": "https://www.instagram.com/lazyspa1200/?hl=en" },
{ "url": "https://www.instagram.com/uli_135/?hl=en" },

{ "url": "https://www.instagram.com/hoelzenbein85/?hl=en" },
{ "url": "https://www.instagram.com/xlauraluis/?hl=en" },

{ "url": "https://www.instagram.com/manuelak61/?hl=en" },
{ "url": "https://www.instagram.com/bald_4__fach_oma_chrissy/?hl=en" },
{ "url": "https://www.instagram.com/caiaralz/?hl=en" },
{ "url": "https://www.instagram.com/carlatpt/?hl=en" },
{ "url": "https://www.instagram.com/nessi1986/?hl=en" },
{ "url": "https://www.instagram.com/martin.kraus.1806/?hl=en" },

{ "url": "https://www.instagram.com/beky1942/?hl=en" },



{ "url": "https://www.instagram.com/stefanie__hbr/?hl=en" },
{ "url": "https://www.instagram.com/sanderleee1/?hl=en" },

{ "url": "https://www.instagram.com/katzenmama44/?hl=en" },
{ "url": "https://www.instagram.com/magb.j/?hl=en" },
{ "url": "https://www.instagram.com/lows.bub1/?hl=en" },
{ "url": "https://www.instagram.com/die_gluecks_fee/?hl=en" },
{ "url": "https://www.instagram.com/siflieden/?hl=en" },
{ "url": "https://www.instagram.com/henry.romero23/?hl=en" },
{ "url": "https://www.instagram.com/soenkeboe/?hl=en" },
{ "url": "https://www.instagram.com/bjornhh1971/?hl=en" },
{ "url": "https://www.instagram.com/sofi_assasso/?hl=en" },
{ "url": "https://www.instagram.com/noalor25/?hl=en" },
{ "url": "https://www.instagram.com/sly.tha/?hl=en" },
{ "url": "https://www.instagram.com/pauljosef25081976/?hl=en" },
{ "url": "https://www.instagram.com/thorsten_7_4/?hl=en" },
{ "url": "https://www.instagram.com/anja_mayvi/?hl=en" },

{ "url": "https://www.instagram.com/andi_sportsfan/?hl=en" },
{ "url": "https://www.instagram.com/s_hl_80/?hl=en" },
{ "url": "https://www.instagram.com/ni_co_le_pi/?hl=en" },
{ "url": "https://www.instagram.com/ich_und_mein_wilder_garten/?hl=en" },
{ "url": "https://www.instagram.com/emmalein_85/?hl=en" },
{ "url": "https://www.instagram.com/lese.liebe2023/?hl=en" },

{ "url": "https://www.instagram.com/eichhoernchen_17/?hl=en" },

{ "url": "https://www.instagram.com/peggynahrstedt/?hl=en" },
{ "url": "https://www.instagram.com/_g.l.y_/?hl=en" },
{ "url": "https://www.instagram.com/kiwit27/?hl=en" },
{ "url": "https://www.instagram.com/_lauraspage/?hl=en" },
{ "url": "https://www.instagram.com/_dori81_/?hl=en" },


{ "url": "https://www.instagram.com/o0.bine.0o/?hl=en" },

{ "url": "https://www.instagram.com/kattilessi/?hl=en" },
{ "url": "https://www.instagram.com/_ellie_brm621/?hl=en" },
{ "url": "https://www.instagram.com/zwieback1963/?hl=en" },
{ "url": "https://www.instagram.com/horscht74/?hl=en" },
{ "url": "https://www.instagram.com/timderella/?hl=en" },
{ "url": "https://www.instagram.com/8kobran/?hl=en" },
{ "url": "https://www.instagram.com/bellymell2000/?hl=en" },
{ "url": "https://www.instagram.com/chumbsky/?hl=en" },
{ "url": "https://www.instagram.com/sapse522/?hl=en" },
{ "url": "https://www.instagram.com/birnaz.rasim.demir/?hl=en" },
{ "url": "https://www.instagram.com/bergmannalina/?hl=en" },
{ "url": "https://www.instagram.com/britain.4ever/?hl=en" },

{ "url": "https://www.instagram.com/frank.erdelt/?hl=en" },
{ "url": "https://www.instagram.com/dennissanchezgonzalez/?hl=en" },
{ "url": "https://www.instagram.com/jocky1015/?hl=en" },
{ "url": "https://www.instagram.com/mr_apico/?hl=en" },
{ "url": "https://www.instagram.com/per_travel/?hl=en" },
{ "url": "https://www.instagram.com/natuurphaenomen/?hl=en" },
{ "url": "https://www.instagram.com/wir_testen_zusammen/?hl=en" },

{ "url": "https://www.instagram.com/plattfussamzocken/?hl=en" },
{ "url": "https://www.instagram.com/instasseffect/?hl=en" },
{ "url": "https://www.instagram.com/karau.sabine/?hl=en" },
{ "url": "https://www.instagram.com/andreauhlin/?hl=en" },
{ "url": "https://www.instagram.com/naschkatze29_/?hl=en" },
{ "url": "https://www.instagram.com/fraeulein.k293/?hl=en" },
{ "url": "https://www.instagram.com/joi_joana_/?hl=en" },

{ "url": "https://www.instagram.com/variostege82/?hl=en" },
{ "url": "https://www.instagram.com/christina_zame/?hl=en" },
{ "url": "https://www.instagram.com/karljosefkuepper/?hl=en" },
{ "url": "https://www.instagram.com/r.bln.00/?hl=en" },
{ "url": "https://www.instagram.com/charly230726/?hl=en" },

{ "url": "https://www.instagram.com/tibi31878/?hl=en" },
{ "url": "https://www.instagram.com/juschka_26/?hl=en" },
{ "url": "https://www.instagram.com/_andrea_fischer19_/?hl=en" },

{ "url": "https://www.instagram.com/krissi056/?hl=en" },
{ "url": "https://www.instagram.com/jula_reing/?hl=en" },

 
   


]



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
