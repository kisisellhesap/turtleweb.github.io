const home = document.querySelectorAll(".home");
const portfolio = document.querySelectorAll(".portfolio");
const story = document.querySelectorAll(".story");
const container = document.querySelector(".container");
const homecorrect = document.querySelector(".home-correct");
const portfoliocorrect = document.querySelector(".portfolio-correct");
const storycorrect = document.querySelector(".story-correct");
const mode = document.querySelector(".mode");
const darkmode = document.querySelector(".darkmode");
const lightmode = document.querySelector(".lightmode");
const logodiv = document.querySelector(".logo-div");
const waketurtle = document.querySelector(".waketurtle");
const sleepturtle = document.querySelector(".sleepturtle");
const body = document.querySelector("body");
const z = document.querySelector(".z");
const icon = document.querySelectorAll(".fab"); 

console.log(home);
darkmode.style.display="none";
sleepturtle.style.display="none";
portfoliocorrect.style.display="none";
storycorrect.style.display="none";

for(i=0;i<portfolio.length;i++) {

    portfolio[i].addEventListener("click",function(){
        portfoliocorrect.style.display="flex";
        homecorrect.style.display="none";
        storycorrect.style.display="none";   
    })
}


for(i=0;i<home.length;i++) {
    home[i].addEventListener("click",function(){
        portfoliocorrect.style.display="none";
        homecorrect.style.display="flex";
        storycorrect.style.display="none";
    })
}

for(i=0;i<story.length;i++) {

    story[i].addEventListener("click",function(){
        portfoliocorrect.style.display="none";
        homecorrect.style.display="none";
        storycorrect.style.display="block";
    
    
        
    })
    
}



darkmode.addEventListener("click",function() {

body.removeAttribute("class");
lightmode.style.display="block";
darkmode.style.display="none";
sleepturtle.style.display="none";
waketurtle.style.display="block";
z.classList.remove("sleep-animation");
z.style.display="none";

    
})

lightmode.addEventListener("click",function() {

    body.classList=("dark-theme");


    lightmode.style.display="none";
    darkmode.style.display="block";
    sleepturtle.style.display="block";
    waketurtle.style.display="none";
    z.classList.add("sleep-animation");
    z.style.display="block";



    
    })





var portdata= [
{
h2 : "Project: Fashion Blog",
p : "l saw a woman and then I thought I could make the website. This is her website. l used Html and Css .The website  is soft and minimal as for me but it has a few issue. What do you think about this ?",
img : "./portfolio/fashion-blog.fw.png",
src: "https://fashion-blog-github-io.vercel.app/"
},
{
    h2 : "Project: Don Mccullin Web Site",
    p : "While i search something at the internet , l saw this website and l did restore. This don mccullin's website. Himself a photographer. l did by using html and css this website.",
    img : "./portfolio/don-mccullin.fw.png",
    src: "https://donmccullin-github-io.vercel.app/"
}
,
{
    h2 : "Project: Building Web",
    p : "Design on the website not mine. i just did this website for code practice. l still learn for web development. Responsive design , men?? vs..",
    img : "./portfolio/pratic.fw.png",
    src: "https://for-responsive-prac-github-io.vercel.app/"
}


]

var index=0;


function slide(i) {

index=i;
if(i<0) {
    index=portdata.length-1;
}
if(i>=portdata.length) {
    index=0;
}
document.querySelector(".infocap").textContent=portdata[index].h2;
document.querySelector(".briefing").textContent=portdata[index].p;
document.querySelector(".infoimg").setAttribute("src",portdata[index].img);
document.querySelector(".view").setAttribute("href",portdata[index].src);
}


console.log(index);

const leftcontrol= document.querySelector(".left");
const rightcontrol= document.querySelector(".right");

leftcontrol.addEventListener("click",function() {
index--;
slide(index);
console.log(index);
})


rightcontrol.addEventListener("click",function() {
index++;
slide(index);
console.log(index);


})
const page = document.querySelector(".page");
const close = document.querySelector(".close");
const storyp = document.querySelector(".story-p");
const storyh = document.querySelector(".story-h");
const pageheader= document.querySelector(".page-header");


const one =document.querySelector(".one");
const two =document.querySelector(".two");
const three =document.querySelector(".three");
const four =document.querySelector(".four");
const five =document.querySelector(".five");
let pagebook= [

    {
     storycap:one.textContent,
     story:"Bu nas??l bir hayat ? nas??l bir ya??am ? ne demeliyiz i??inde bulundu??umuz duruma ? Elimizde bir ??ey yoksa ne b??rakabiliriz gelece??e ? 'Kendimizi avutmakt??r' der en do??rusu ama, vakti geldi??inde savurur yalanlar??n?? r??zgar, sa??ar ortal??klara. ????te elimizde kalan tek ??ey bu. Birer birer yalan. <br><br>Cehennemin ortas??nda dikilen bir zebani ve arkas??nda duran di??erleri. Hakk??m??zda s??ylenenleri.. Merak ediyorlar sanki. Vard??r zalimce g??l????leri onlar?? g??rmesek dahi. Biz d??nyan??n a??a babalar??ysak onlar da kendi d??nyalar??nda hakim.<br><br>Yata????ndan sesleniyor ; <br><br>Yukar??ya, meleklere ve ??eytanlara. Yery??z??nde pislik kapm???? kim varsa ve ate??in v??cudunu yakacak olanlara.<br><br>??nemi yok hi??bir ??eyin. Say??lar??n, rakamlar??n, objelerin ve an??lar??n. Bana ??b??r d??nyada verilen ac??, i??nesi kadard?? ar??lar??n. K??lesi de??ildim tap??lan??n ve olmad??m hi?? bir zaman k??le. Size sesleniyorum. Hikayelerde anlat??landan ziyade buydu ger??ek, aksine san??lan??n. Yukar??da kapanan kap??lar arkas??nda saklananlar var ince i????ilikle ??r??lm???? sahte yap??lar??n. Arkas??ndalar onlar bir kap?? gibi dimdik duran bu diyarlar??n ustas?? ve a??z??ndan d??k??len bir ??arap ile yery??z??ne kan bula??t??ran yarat??m??n ve yaratan??n. Eh .. ne de olsa cehennemin i??inde ac?? ??ekenler varken haddi hesab?? sorulmazd?? cennette verilen sadakan??n.<br><br>Sesin yank??lan??r bo??luklarda, bulutlar??n avucunda, sivri yama??l?? bir da????n uzuvlar??nda. G??nahlar??n tepeden g????e bir merdiven uzunlu??unda. Yap??lan hatalar??n ve isteksizli??in sonucunda. Senin kanatlar??n yok, melek de??ilsin. Senin ??zg??r iraden var, salak de??ilsin. Kar???? geldin herkese herkezin ??er??evesinde ve biliyordun bir g??n gidece??ini. Selam ver ??imdi etraf??ndaki h??rs??zlara, g??kte duran y??ld??zlara. Sen topra??a ait de??ilsin.Yava?? yava?? uykuya dalar kendi evreninde. S??rg??n edilmi?? ya, yol yormu?? olmal??. Beslenmi?? ??ocuklar??n kan??yla.. bir bir t??kenerek ama sab??rla hi?? bir yanl????a yer vermeden. Katlederek, ??ld??rm???? onlar??. Civardakiler al????m???? zaten buna, her g??n do??um yapan kad??nlar??n s??rt??nda erkek ??ocuklar?? ve yerde yatan di??erleri.. ablalar?? ve karde??leri do??amadan ??lm????, ya??amadan umutlar?? s??nm????. Bir ??ekilde do??anlar?? babalar?? d??vm????. Zalimce, kahpece .. Al??????k bu diyarlar, bu evren, bu do??a, bu iklim. <br> <br>??nsan kemikleri, zavall?? ve ????r??m????."

    },
    {
        storycap:two.textContent,
        story:"Bo?? bir sayfa y??z??. Bembeyaz olmas??na kar????n biraz solgun, y??z hatlar?? donuk, g??zleri yere sabit bakan. Kendisi istemedi b??yle olmay??, b??yle do??mad?? da tabi. Ailesi ????retti ona yalan??, ba????rmay??, ??a????rmay?? ve yeri gelince de korkmay??. Yine de vard??r i??inden gelen do??rular??, etraf??na sordu??u sorular??, midesine vuran sorunlar?? . Her ??ey onun i??in bu kadar ters gitmek zorunda m?? ? Ya??amaya mecbursa zorundad??r. ??ocuklu??unda kurdu??u hayalleri hala onunla m?? de??il mi bilmem ama dedesinden kalma saati kolunda, ezilmi??li??i, ??aresizli??i ruhunda ta????r. Aln?? a????k, teni esmer, sa??lar?? kirli ve uzunca gitti??i bu yolda.. Yine de bo?? bir sayfa y??z??. bembeyaz olmas??na kar????n biraz solgun, y??z hatlar?? donuk, g??zleri yere sabit bakan. Kendisi istemedi b??yle olmay??, b??yle do??mad?? da tabi. Kald??rd?? kafas??n?? ve teker teker bakt?? her yere. Didik didik etti d??nyay?? kafas??n??n i??inde. Sanki d??nya ile kafatas?? ayn?? b??y??kl??kte . Bir yerlerde kaybetti??i, kendisinin sadece etten ve kemikten olmad??????n?? ona hissettiren o hissi, o ya??am kayna????n?? , i??ini ferah ve zihnini aray????ta tutan o ??eyi bulmak i??in.. D??????nceleri hareket ediyor, v??cudu tembel, yorgun ve yorulmu??. Bekliyor. Gidece??i yere varmadan ve d??????n??n bir.. Bu ??ocuk 22 y??l boyunca hi?? a??lamam????. G??zleri ileride ??????lt??l?? camlar, f??rf??rl?? perdeler, renkli kap??lar g??r??yor. Birbirine sar??lan, sevgi diye san??lan, b??y??k a??klarla an??lan o yere o batakl????a gitmesi mi gerekiyor ! S??yle bana ! Kurumaya y??z tutmu??, kirli at??klarla bo??u??an o saf suyun i??erisine girmesi mi gerekiyor haa! <br> <br>Hadi ! Gitsin o zaman. ??ok merakl??ysa gitsin ??als??n kap??lar??n??. Ben de sizden biri olmak istiyorum desin. Sonra onlar gibi giyinsin, onlar gibi sevinsin. Girsin hadi d????ar??dan masmavi g??z??ken o denizin i??ersine ! ????eride ne var ne yok me??hul. Hatta do??ruca atlas??n bal??klama ! Biraz kendini kaybeder, rahatl??ktan ba???? d??ner ama yine de bo?? bir sayfa y??z??. Bembeyaz olmas??na kar????n biraz solgun, y??z hatlar?? donuk, g??zleri yere sabit bakan. Kendisi istemedi b??yle olmay??, b??yle do??mad?? da tabi. Oturmam???? karakteri bir g??n sabah 6 da yanan bir trafik lambas?? olmak istedi. Emir vermek, diz ????kt??rmek istiyordu sana seni. Ne yapaca????n?? az ??ok anlam????t??m ??imdi. O da senin etraf??ndaki di??erleri gibi. Ba??kas??n??n mevkisinden faydalanmakt?? niyeti. Karakteri de??i??se bile yapamad??, veremedi o emri. Ge??emedi k??rm??z??ya bir t??rl?? olamad?? kendinden emin. Kavurucu bir s??cakta demirin erimesi gibi eridi demiri. ge??irdi sinir krizleri, t??m krizleriyse anl??k bir histeri. ??imdi ??zg??n, biraz rahatlam???? gibi ama , yine de bo?? bir sayfa y??z??. Bembeyaz olmas??na kar????n biraz solgun, y??z hatlar?? donuk, g??zleri yere sabit bakan. Kendisi istemedi b??yle olmay??, b??yle do??mad?? da tabi .."
    },
    {
        storycap:three.textContent,
        story:"Onun bir ad?? var. G??rd??????nde y??z??n, elledi??indeyse elin kanar. <br><br>Bazen sen fark etmeden g??r??n??r, gizlice, aniden belirir yan??nda.. O ne diye sorma onun bir ad?? var. Bir sokak ortas??nda, ekmek s??ras??nda, ??n??nde ya da arkanda hatta y??ksek duvarla ??r??lm???? zihninin tam ortas??nda tek tek ince ince i??lenmi?? tu??lalar??n.. O ne diye sorma onun bir ad?? var. Bazen yata????nda, bazen sabah??nda sisli ve ya??murlu bir k???? ak??am?? s??cac??k bir soban??n yan??nda verdi??i hissi yerle bir edermi?? gibi ????kar kar????na, savurur bedenini, ba????n?? sokacak bir evin yoktur art??k ????nk?? r??zgar titretir odan??n pencerelerini, ??atlat??r camlar??, tuzla buz olmu?? yere d????er par??ac??klar. Toplamaya kalkma ??ocuk, onun bir ad?? var. G??rd??????nde y??z??n, elledi??indeyse elin kanar.<br><br>Yemye??il a??a??lar dizilmi?? bah??ede s??ra s??ra haz??rda bekler meyve vermeyi, sevilmeyi, ok??anmay??, sen gibi, ben gibi delirir bazen.. Cans??z ya hani, kaybedecek bir ??eyi yoktur onun, hat??rlamaz ge??mi??ini, yoktur onun tarihi, evveli.. Solgun yapraklar??ndan anlars??n ????r??m????t??r meyvesi ve s??nm????t??r gelece??i. Dokunma ??ocuk dokunma ve s??yleme bir ??ey ona. Sen her konu??tu??unda ac??r, lime lime olmu?? p??rangaya vurulmu?? k??kleri.. Topra??a s??k??ca ba??l?? bir zindan gibi ??m??r boyu tutsak. Bir zamanlar korkuyordun ya ondan, vard?? ya koskocaman c??ssesi. Art??k korkma ??ocuk korkma ve bakma ona istersen haa .. ????nk?? sen her bakt??????nda ??at??rd??yor dev gibi g??vdesi. ??imdi, bu ne diye sorma bana ??ocuk onun bir ad?? var. G??rd??????nde y??z??n, elledi??indeyse elin kanar. Sen ??imdi ne dedi??imi anlam??yorsun ama yolda sahibi taraf??ndan at??lm???? hasta ve ??aresiz bir at??n ya da g??ky??z??nde s??z??lerek etraf??n?? kola??an eden ihtiyar mart??n??n haberi vard??r bu bahsettiklerimden. Yoktur aileleri, yapmazlar dedikodu, d??????nmezler k??t?? ve anlamazlar siyasetten.. Ya??l??lar, aralar??nda ya??ayanlar var d??nyadan bir haber. ??zenirler bazen bize bazen de tiksinirler bu evrenin k??t??l??????ne ortak oldu??umuz i??in. Biz de bunun kar????l??????na denktir kader, onlarsa b??yle bir cevab?? asla kabullenmezler."
       },
       {
        storycap:four.textContent,
        story:"????eyince susuyorum <br>Susay??nca da i??iyorum<br> Pardon ya ben nerde ya????yorum ?<br>Ne boktan bir ??eyse bu hala anlam??yorum<br>Bug??nlerde de g??nler epey s??cakm???? hee<br> C??mle aras??nda 2 kelime oyunu 1 hece , kafiye, uyak derken g??nlerde ge??mi?? demek<br>' E zaten ne olacakt?? ki ' demeye kalmadan olmu?? ya la her??ey.<br>Sanki defterinle kalemin, kalemi tutan elin, bi de d??????ncelerin...<br>Bunlar??n aras??nda bi kopukluk mu var ne ?<br>G??n i??inde fazla yemek yemiyorum, sigara i??ersem diye<br>Onun yerini birayla dolduruyorum, sadece 1 tane hani sarho?? olursam diye<br>Paragraflar aras?? de??ilde, d??????nceler aras?? ??ok bo??lu??um var, o y??zden kendimi kontrol edemiyorum.<br><br>B??t??n bunlar olurken yandaki zencinin laptopunun ??arj?? bitiyor, ??n??mdeki ??ocuk yan taraftaki k??zlara y??r??meye ??al??????yor, d????ar??daki otomata her kahve ba????na 1 lira at??l??yor, telefonumun ??arj?? ellemedi??im halde azal??yor, t??kenmez kalemin m??rekkebi bitiyor, sayfalar t??keniyor. Ben bunlar?? yazarken karn??m gurulduyor, a??z??m kurumaya ba??l??yor Susuyorum..<br><br>E susay??nca da i??iyorum !<br>Kahretsin ya ben nerde ya????yorum ?<br>Ne boktan bir ??eyse bu hala anlam??yorum.        "
       },
       {
        storycap:five.textContent,
       }
    ]
    







one.addEventListener("click",function() {
page.style.display="block";
pageheader.style.display="flex";
storyh.textContent=pagebook[0].storycap;
storyp.innerHTML=pagebook[0].story;
})
two.addEventListener("click",function() {
    page.style.display="block";
    pageheader.style.display="flex";
    storyh.textContent=pagebook[1].storycap;
    storyp.innerHTML=pagebook[1].story;
})
three.addEventListener("click",function() {
    page.style.display="block";
    pageheader.style.display="flex";
    storyh.textContent=pagebook[2].storycap;
    storyp.innerHTML=pagebook[2].story;
})
four.addEventListener("click",function() {
    page.style.display="block";
    pageheader.style.display="flex";
    storyh.textContent=pagebook[3].storycap;
    storyp.innerHTML=pagebook[3].story;
})

five.addEventListener("click",function() {
    page.style.display="block";
    pageheader.style.display="flex";
    storyh.textContent=pagebook[4].storycap;
    storyp.innerHTML=pagebook[4 ].story;
})













close.addEventListener("click",function() {
    page.style.display="none";
    pageheader.style.display="none";
})






const hamburgerbutton = document.querySelector(".hamburger-button");
const hamburgerclose = document.querySelector(".hamburger-close-button");
const hamburgermenu = document.querySelector(".hamburger-menu");




const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
    if (e.matches) {

        console.log('Media Query Matched!');
        
    hamburgerbutton.addEventListener("click",function() {
     hamburgerclose.style.display="block";
     hamburgerbutton.style.display="none";
     hamburgermenu.style.display="flex";
        })

        hamburgerclose.addEventListener("click",function(){
            hamburgerclose.style.display="none";
            hamburgerbutton.style.display="block";
            hamburgermenu.style.display="none";
        })
      
    }

    else {
        hamburgerclose.style="none";
        hamburgerbutton.style="none";
        hamburgermenu.style="none";
    }
  }


  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);


