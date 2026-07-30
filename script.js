// Identity note (per environment): This assistant is an AI assistant using Copilot CLI runtime in VS Code.
// Love letter app: messages array + UI control

// ---------- Editable messages array (each entry is a page)
const messages = [

`<h1>❤️ أول رسالة</h1>
<p>
 من أول يوم عرفتك فيه وأنا عرفت إنك مختلفة عن أي حد قابلته ف حياتي 
 نظرة عنيكي كانت كفيله تسحرني وتخليني اتوهه ف جمالك 
 من يوم مشوفتك وكنت متأكد اننا هنكون صحاب وحسيت بعدها انه هيكون بينا حاجات كتير مشتركه وبعدين بقينا حبايب 
 مش هنسي اول يوم شوفتك فيه ابتسامتك نظرة عنيكي طريقة كلامك لمسة ايديكي 
</p>`,

`<h1>🌹 ثاني رسالة</h1>
<p>وجودك ف حياتي كان اجمل صدفه ومن حسن الحظ مقابلتي ليكي وع راي اللي قالوا كان يوم حبك اجمل صدفه لما قابلتك مره صدفه🥰
مكنتش مقتنع ان فيه حاجه اسمها صدفه لحد مالقدر جمعنا اتأكدت ان الصدفه بتيجي بترتيب الاقدار 
يوم 17/9/2024 بدايه الحكايه 
يوم 13/10/2024 كان بدايه حكايتنا سوي 
اليوم ده اكتشفت ان حبي ليكي ملوش حدود حبي ليكي مكنش مشروط بحاجه بالعكس حبيت فيكي كل حاجه وحبيت صحبتنا سوي
</p>`,

`<h1>💍 ثالث رسالة</h1>
<p>
اكتشفت وقتها ان غارق ف بحر م العشق ودوامة من الحب اللامتناهيه
حبيت نظرة عنيكي ليا اللي بيكون فيها لمعه وراحه مش طبيعيه لما بنكون سوي 
حبيت وجودك وحبيت صوتك اللي بيطربني وبيخلي قلبي يرفرف  حبيت حضنك حبيت لما بتنامي ف حضني واقعد العب ف شعرك حبيت الشعور ده معاكي حبيت حنيتك عليا 
حبيت وجودك جنبي اختي وصاحبتي وبنتي وامي وحبيبتي حبيت كل لحظه عشانها سوي
ابتسامتك لوحدها كانت كفيله تغيرني للافضل مليون مره 
وجودك جنبي كان اجمل حاجه حصلتلي ف حياتيي
ربنا يديمك ف حياتي ي مشمشه</p>`,

`<h1>🥹 رابع رسالة</h1>
<p>عندي كلام كتير اوي مهما فضلت اكتب واتكلم واقول مش هخلص ولا هيوصف اللي جوايا 
بس عايزك تتأكدي اني معاكي دايما وجنبك وهفضل معاكي مهما حصل 
انا موجود فالدنيا عشانك عشان انتي الدنيا يولا بالنسبالي ❤️🫂</p>`,

`<h1>❤️ خامس رساله </h1>
<p>

حبيتك وبحبك وهفضل طول العمر احبك لانك بالنسبالي كل حاجه مش مجرد مرحله انتي خليتي لحياتي طعم 
</p>`,
`<h1>💖 سادس رساله </h1>
<p>
كتبت لك القليل م الكلمات
أُحِبُّكِ لا لِشَيءٍ، بل لأَنِّي
رَأَيتُكِ في حَنايا القلبِ سَكني

تسلَّلتِ بالحَياةُ إلى مَدَاري
وَصِرتِ النُّورَ في  كُلِ أيَّامِي

كأَنَّكِ نَغمةٌ نُسِجَتْ بِرِقَّةٍ
تُداعِبُني، وتَهمِسُ في جُنوني

إذا ما غِبتِ، صِرْتُ بِلَا اتِّزانٍ
وَضَاعَ الوقتُ في صَوتِ السُّكونِ

أُحبُّكِ...!! كَيفَ تُكتَبُ في سُطورٍ؟
ومَن يَحصي المعاني في الجُفونِ؟

أنا إن قُلتُها، فالشَّوقُ يَشْهَدُ
وإن سَكتُّ، فَدمعي في العُيونِ يسيلُ</p>`,
`<h1>💖 رسالة شاعريه اخري</h1>
<p>
أَدْمَنْتُ صَوْتَكِ وَالإِدْمَانُ أَذْوَاقُ
فَالْعَيْنُ تَعْشَقُ وَالأَذَانُ تَشْتَاقُ
تَغِيبُ عَنِّي .. فَيَبْقَى الصَّوْتُ فِي أُذُنِي
كَأَنَّهُ لِجِرَاحِ الرُّوحِ تَرْيَاقُ
لَا تَحْرِمِينِي مِنَ الأَلْحَانِ، إِنَّ لَهَا
فِي القَلْبِ نَبْضاً، وَبِالأَشْوَاقِ إِحْرَاقُ
كَأَنَّ صَوْتَكِ بُسْتَانٌ تَفِيضُ بِهِ
كُلُّ العُطُورِ، وَفِيهَا الرُّوحُ تَنْسَاقُ
</p>`,
`<h1>💖 رسالة شاعريه اخري</h1>
<p>
إني رأيت من العيون عجائباً وأراك أعجب من رأيت عيون ماكنت أحسب أن طرفاً تقاعساً قد يورث العقل السليم مجنونا</p>`,
`<h1>💖 اخر رسالة</h1>
<p>
عايزك اقولك بجد شكرا لوجودك ف حياتي وبجد بقولك من كل قلبي 
انا من غيرك بتوه توهان 
انا من غيرك مليش عنوان🫂❤️
اتمني تكوني جنبي لاخر المطاف</p>`,

];

// State & DOM
let currentIndex = 0;
const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const envelopeTitle = document.querySelector(".envelope-title");
const letterWrap = document.getElementById('letterWrap');
const paper = document.getElementById('paper');
const pageElem = paper.querySelector('.page');
const front = pageElem.querySelector('.front');
const back = pageElem.querySelector('.back');
const after = document.getElementById('after');
const floaters = document.getElementById('floaters');

// Helper to set page content into an element (wrap in .content)
function setPageContent(elem, html) {
  elem.innerHTML = `<div class="content">${html}</div>`;
}

// Initialize first page
setPageContent(front, messages[0]);
setPageContent(back, ''); // back will be filled on flip

// UX: make seal clickable - break, open envelope, slide letter out
seal.addEventListener('click', async function onSealClick() {envelopeTitle.style.opacity = "0";
  // prevent repeated clicks
  if (seal.classList.contains('broken')) return;
  seal.classList.add('broken');

  // small delay to let shards animate
  await wait(360);

  // open flap
  envelope.classList.remove('closed');
  openEnvelope();
  // reveal letter slowly
  showLetter();
  // allow flipping after letter settles
  await wait(900);
  // attach click to paper
  paper.addEventListener('click', flipHandler);
});

// Functions controlling envelope and letter
function openEnvelope(){
  const flap = envelope.querySelector('.flap');
  flap.style.transform = 'rotateX(180deg) translateZ(0px)'; // open up (rotate away)
  // slightly tilt envelope body
  envelope.style.transform = 'translateY(-8px) rotateX(8deg) translateZ(0)';
}

function closeEnvelope(){
  const flap = envelope.querySelector('.flap');
  flap.style.transform = 'rotateX(0deg)';
  envelope.style.transform = 'translateY(0) rotateX(0)';
}

// show letter animation
function showLetter(){
  letterWrap.classList.remove('hidden');
  letterWrap.style.opacity = '1';
  letterWrap.style.visibility = 'visible';
  // bring it from inside with gentle animation
  letterWrap.style.transform = 'translateY(-18px) rotateX(3deg)';
  // small bounce
  setTimeout(()=> {
    letterWrap.style.transform = 'translateY(-8px) rotateX(0deg)';
  }, 420);
}

// hide letter (return inside envelope)
function hideLetter(){
  letterWrap.style.transform = 'translateY(40px) rotateX(20deg)';
  letterWrap.style.opacity = '0';
  setTimeout(()=> {
    letterWrap.classList.add('hidden');
  }, 700);
}

// page flipping logic: realistic 3D flip with content swap mid-flip
let isFlipping = false;
async function flipHandler(e){
  if (isFlipping) return;
  isFlipping = true;

  // If there is a next page, do flip
  const nextIndex = currentIndex + 1;
  if (nextIndex < messages.length) {
    // Prepare back content with next page
    setPageContent(back, messages[nextIndex]);

    // Add shading and slight perspective pivot by setting transform-origin based on click X
    pageElem.style.transformOrigin = 'left center';
    pageElem.classList.add('flip');

    // halfway through animation (approx 50%) content swap is already prepared on back side
    await wait(480); // sync with CSS animation timing
    // finish animation
    await wait(430);

    // After flip, reset, increment index, set new front content (now the visible page)
    pageElem.classList.remove('flip');
    currentIndex = nextIndex;
    setPageContent(front, messages[currentIndex]);
    setPageContent(back, ''); // clear back
    isFlipping = false;

    // subtly rearrange paper stack for realism
    paperAnimateStack();
    // if we've reached the end, trigger final completion after a slight pause
    if (currentIndex === messages.length - 1) {
      // allow user to read final page for a moment
      setTimeout(()=> {
        // clicking final page will start closing sequence
        paper.removeEventListener('click', flipHandler);
        paper.addEventListener('click', finishSequenceOnce);
      }, 300);
    }
  } else {
    isFlipping = false;
  }
}

// small stack wobble for realism
function paperAnimateStack(){
  paper.style.transition = 'transform 420ms cubic-bezier(.2,.9,.2,1)';
  paper.style.transform = 'translateY(-6px) rotateZ(-0.8deg)';
  setTimeout(()=> {
    paper.style.transform = '';
  }, 380);
}

// finish sequence: put letter back and show big heart & floaters
let finished = false;
async function finishSequenceOnce(){
  if (finished) return;
  finished = true;

  // Optional: small celebratory micro-animation before closing
  paper.style.transform = 'translateY(-18px) rotateZ(-2deg)';
  await wait(300);

  // Slide the paper back into envelope
  hideLetter();
  // close flap
  setTimeout(()=> {
    closeEnvelope();
  }, 520);

  // tiny delay then reveal after-effects
  setTimeout(()=> {
    showAfterEffects();
  }, 1100);
}

// Show glowing heart, floating hearts and petals, and final text
function showAfterEffects(){
  after.classList.remove('hidden');
  after.style.opacity = '1';
  after.style.visibility = 'visible';

  // create many floaters
  for (let i=0;i<28;i++){
    createFloater(i);
  }
}

// create floating element (heart or petal) with randomized motion
function createFloater(i){
  const el = document.createElement('div');
  el.className = 'floater ' + (Math.random() > 0.45 ? 'heart' : 'petal');

  // random start position along bottom area
  const startX = Math.random()*100; // vw percent
  const size = 18 + Math.random()*36;
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.left = `${startX}vw`;
  el.style.top = `${98 + Math.random()*6}vh`;
  el.style.opacity = 0.95 - Math.random()*0.5;
  el.style.transform = `translateY(0) rotate(${Math.random()*60-30}deg) scale(${0.9+Math.random()*0.6})`;
  // create a custom animation using CSS transitions via requestAnimationFrame loop
  floaters.appendChild(el);

  const duration = 6000 + Math.random()*8000;
  const drift = (Math.random()*60 - 30); // px drift sideways
  const peak = 40 + Math.random()*30; // negative translateY
  // trigger CSS animation via inline transition
  requestAnimationFrame(()=> {
    el.style.transition = `transform ${duration}ms cubic-bezier(.22,.85,.35,1), opacity ${duration}ms linear`;
    el.style.transform = `translate(${drift}px, -${peak}vh) rotate(${Math.random()*200-100}deg) scale(${1.05})`;
    el.style.opacity = 0.12;
  });

  // remove after finished
  setTimeout(()=> {
    el.remove();
  }, duration+1200);
}

// small util
function wait(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }

// Make clicking the paper flip/paginate for keyboard accessibility
paper.setAttribute('role','button');
paper.setAttribute('tabindex','0');
paper.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    paper.click();
  }
});

// Mobile: allow tap on seal too (already click covers it)
document.addEventListener('touchstart', function(){}, {passive:true});

// Polishing: subtle initial intro of envelope
window.addEventListener('load', ()=>{
  // little entrance
  envelope.style.transform = 'translateY(6px)';
  envelope.style.opacity = '0';
  setTimeout(()=> {
    envelope.style.transition = 'transform 900ms cubic-bezier(.2,.9,.2,1), opacity 600ms ease';
    envelope.style.transform = '';
    envelope.style.opacity = '1';
  }, 80);
});


// --- end of script