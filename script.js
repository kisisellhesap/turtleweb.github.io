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
    p : "Design on the website not mine. i just did this website for code practice. l still learn for web development. Responsive design , menü vs..",
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
     story:"Bu nasıl bir hayat ? nasıl bir yaşam ? ne demeliyiz içinde bulunduğumuz duruma ? Elimizde bir şey yoksa ne bırakabiliriz geleceğe ? 'Kendimizi avutmaktır' der en doğrusu ama, vakti geldiğinde savurur yalanlarını rüzgar, saçar ortalıklara. İşte elimizde kalan tek şey bu. Birer birer yalan. <br><br>Cehennemin ortasında dikilen bir zebani ve arkasında duran diğerleri. Hakkımızda söylenenleri.. Merak ediyorlar sanki. Vardır zalimce gülüşleri onları görmesek dahi. Biz dünyanın ağa babalarıysak onlar da kendi dünyalarında hakim.<br><br>Yatağından sesleniyor ; <br><br>Yukarıya, meleklere ve şeytanlara. Yeryüzünde pislik kapmış kim varsa ve ateşin vücudunu yakacak olanlara.<br><br>Önemi yok hiçbir şeyin. Sayıların, rakamların, objelerin ve anıların. Bana öbür dünyada verilen acı, iğnesi kadardı arıların. Kölesi değildim tapılanın ve olmadım hiç bir zaman köle. Size sesleniyorum. Hikayelerde anlatılandan ziyade buydu gerçek, aksine sanılanın. Yukarıda kapanan kapılar arkasında saklananlar var ince işçilikle örülmüş sahte yapıların. Arkasındalar onlar bir kapı gibi dimdik duran bu diyarların ustası ve ağzından dökülen bir şarap ile yeryüzüne kan bulaştıran yaratımın ve yaratanın. Eh .. ne de olsa cehennemin içinde acı çekenler varken haddi hesabı sorulmazdı cennette verilen sadakanın.<br><br>Sesin yankılanır boşluklarda, bulutların avucunda, sivri yamaçlı bir dağın uzuvlarında. Günahların tepeden göğe bir merdiven uzunluğunda. Yapılan hataların ve isteksizliğin sonucunda. Senin kanatların yok, melek değilsin. Senin özgür iraden var, salak değilsin. Karşı geldin herkese herkezin çerçevesinde ve biliyordun bir gün gideceğini. Selam ver şimdi etrafındaki hırsızlara, gökte duran yıldızlara. Sen toprağa ait değilsin.Yavaş yavaş uykuya dalar kendi evreninde. Sürgün edilmiş ya, yol yormuş olmalı. Beslenmiş çocukların kanıyla.. bir bir tükenerek ama sabırla hiç bir yanlışa yer vermeden. Katlederek, öldürmüş onları. Civardakiler alışmış zaten buna, her gün doğum yapan kadınların sırtında erkek çocukları ve yerde yatan diğerleri.. ablaları ve kardeşleri doğamadan ölmüş, yaşamadan umutları sönmüş. Bir şekilde doğanları babaları dövmüş. Zalimce, kahpece .. Alışık bu diyarlar, bu evren, bu doğa, bu iklim. <br> <br>İnsan kemikleri, zavallı ve çürümüş."

    },
    {
        storycap:two.textContent,
        story:"Boş bir sayfa yüzü. Bembeyaz olmasına karşın biraz solgun, yüz hatları donuk, gözleri yere sabit bakan. Kendisi istemedi böyle olmayı, böyle doğmadı da tabi. Ailesi öğretti ona yalanı, bağırmayı, çağırmayı ve yeri gelince de korkmayı. Yine de vardır içinden gelen doğruları, etrafına sorduğu soruları, midesine vuran sorunları . Her şey onun için bu kadar ters gitmek zorunda mı ? Yaşamaya mecbursa zorundadır. Çocukluğunda kurduğu hayalleri hala onunla mı değil mi bilmem ama dedesinden kalma saati kolunda, ezilmişliği, çaresizliği ruhunda taşır. Alnı açık, teni esmer, saçları kirli ve uzunca gittiği bu yolda.. Yine de boş bir sayfa yüzü. bembeyaz olmasına karşın biraz solgun, yüz hatları donuk, gözleri yere sabit bakan. Kendisi istemedi böyle olmayı, böyle doğmadı da tabi. Kaldırdı kafasını ve teker teker baktı her yere. Didik didik etti dünyayı kafasının içinde. Sanki dünya ile kafatası aynı büyüklükte . Bir yerlerde kaybettiği, kendisinin sadece etten ve kemikten olmadığını ona hissettiren o hissi, o yaşam kaynağını , içini ferah ve zihnini arayışta tutan o şeyi bulmak için.. Düşünceleri hareket ediyor, vücudu tembel, yorgun ve yorulmuş. Bekliyor. Gideceği yere varmadan ve düşünün bir.. Bu çocuk 22 yıl boyunca hiç ağlamamış. Gözleri ileride ışıltılı camlar, fırfırlı perdeler, renkli kapılar görüyor. Birbirine sarılan, sevgi diye sanılan, büyük aşklarla anılan o yere o bataklığa gitmesi mi gerekiyor ! Söyle bana ! Kurumaya yüz tutmuş, kirli atıklarla boğuşan o saf suyun içerisine girmesi mi gerekiyor haa! <br> <br>Hadi ! Gitsin o zaman. Çok meraklıysa gitsin çalsın kapılarını. Ben de sizden biri olmak istiyorum desin. Sonra onlar gibi giyinsin, onlar gibi sevinsin. Girsin hadi dışarıdan masmavi gözüken o denizin içersine ! İçeride ne var ne yok meçhul. Hatta doğruca atlasın balıklama ! Biraz kendini kaybeder, rahatlıktan başı döner ama yine de boş bir sayfa yüzü. Bembeyaz olmasına karşın biraz solgun, yüz hatları donuk, gözleri yere sabit bakan. Kendisi istemedi böyle olmayı, böyle doğmadı da tabi. Oturmamış karakteri bir gün sabah 6 da yanan bir trafik lambası olmak istedi. Emir vermek, diz çöktürmek istiyordu sana seni. Ne yapacağını az çok anlamıştım şimdi. O da senin etrafındaki diğerleri gibi. Başkasının mevkisinden faydalanmaktı niyeti. Karakteri değişse bile yapamadı, veremedi o emri. Geçemedi kırmızıya bir türlü olamadı kendinden emin. Kavurucu bir sıcakta demirin erimesi gibi eridi demiri. geçirdi sinir krizleri, tüm krizleriyse anlık bir histeri. Şimdi üzgün, biraz rahatlamış gibi ama , yine de boş bir sayfa yüzü. Bembeyaz olmasına karşın biraz solgun, yüz hatları donuk, gözleri yere sabit bakan. Kendisi istemedi böyle olmayı, böyle doğmadı da tabi .."
    },
    {
        storycap:three.textContent,
        story:"Onun bir adı var. Gördüğünde yüzün, ellediğindeyse elin kanar. <br><br>Bazen sen fark etmeden görünür, gizlice, aniden belirir yanında.. O ne diye sorma onun bir adı var. Bir sokak ortasında, ekmek sırasında, önünde ya da arkanda hatta yüksek duvarla örülmüş zihninin tam ortasında tek tek ince ince işlenmiş tuğlaların.. O ne diye sorma onun bir adı var. Bazen yatağında, bazen sabahında sisli ve yağmurlu bir kış akşamı sıcacık bir sobanın yanında verdiği hissi yerle bir edermiş gibi çıkar karşına, savurur bedenini, başını sokacak bir evin yoktur artık çünkü rüzgar titretir odanın pencerelerini, çatlatır camları, tuzla buz olmuş yere düşer parçacıklar. Toplamaya kalkma çocuk, onun bir adı var. Gördüğünde yüzün, ellediğindeyse elin kanar.<br><br>Yemyeşil ağaçlar dizilmiş bahçede sıra sıra hazırda bekler meyve vermeyi, sevilmeyi, okşanmayı, sen gibi, ben gibi delirir bazen.. Cansız ya hani, kaybedecek bir şeyi yoktur onun, hatırlamaz geçmişini, yoktur onun tarihi, evveli.. Solgun yapraklarından anlarsın çürümüştür meyvesi ve sönmüştür geleceği. Dokunma çocuk dokunma ve söyleme bir şey ona. Sen her konuştuğunda acır, lime lime olmuş pırangaya vurulmuş kökleri.. Toprağa sıkıca bağlı bir zindan gibi ömür boyu tutsak. Bir zamanlar korkuyordun ya ondan, vardı ya koskocaman cüssesi. Artık korkma çocuk korkma ve bakma ona istersen haa .. Çünkü sen her baktığında çatırdıyor dev gibi gövdesi. Şimdi, bu ne diye sorma bana çocuk onun bir adı var. Gördüğünde yüzün, ellediğindeyse elin kanar. Sen şimdi ne dediğimi anlamıyorsun ama yolda sahibi tarafından atılmış hasta ve çaresiz bir atın ya da gökyüzünde süzülerek etrafını kolaçan eden ihtiyar martının haberi vardır bu bahsettiklerimden. Yoktur aileleri, yapmazlar dedikodu, düşünmezler kötü ve anlamazlar siyasetten.. Yaşlılar, aralarında yaşayanlar var dünyadan bir haber. Özenirler bazen bize bazen de tiksinirler bu evrenin kötülüğüne ortak olduğumuz için. Biz de bunun karşılığına denktir kader, onlarsa böyle bir cevabı asla kabullenmezler."
       },
       {
        storycap:four.textContent,
        story:"İşeyince susuyorum <br>Susayınca da işiyorum<br> Pardon ya ben nerde yaşıyorum ?<br>Ne boktan bir şeyse bu hala anlamıyorum<br>Bugünlerde de günler epey sıcakmış hee<br> Cümle arasında 2 kelime oyunu 1 hece , kafiye, uyak derken günlerde geçmiş demek<br>' E zaten ne olacaktı ki ' demeye kalmadan olmuş ya la herşey.<br>Sanki defterinle kalemin, kalemi tutan elin, bi de düşüncelerin...<br>Bunların arasında bi kopukluk mu var ne ?<br>Gün içinde fazla yemek yemiyorum, sigara içersem diye<br>Onun yerini birayla dolduruyorum, sadece 1 tane hani sarhoş olursam diye<br>Paragraflar arası değilde, düşünceler arası çok boşluğum var, o yüzden kendimi kontrol edemiyorum.<br><br>Bütün bunlar olurken yandaki zencinin laptopunun şarjı bitiyor, önümdeki çocuk yan taraftaki kızlara yürümeye çalışıyor, dışarıdaki otomata her kahve başına 1 lira atılıyor, telefonumun şarjı ellemediğim halde azalıyor, tükenmez kalemin mürekkebi bitiyor, sayfalar tükeniyor. Ben bunları yazarken karnım gurulduyor, ağzım kurumaya başlıyor Susuyorum..<br><br>E susayınca da işiyorum !<br>Kahretsin ya ben nerde yaşıyorum ?<br>Ne boktan bir şeyse bu hala anlamıyorum.        "
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


