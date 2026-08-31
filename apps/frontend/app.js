const trips={
  balanced:{
    title:'Option 1 — Balanced',tag:'The Classic Journey',route:'Direct Nullarbor both ways, with the most relaxed Adelaide stay.',meta:['18 days','~5,600 km','12 driving days'],
    outbound:[
      ['Sat 19 Dec','Perth → Southern Cross','373 km','4h20','Southern Cross Motel / cabin','Leave Perth early; family lunch and fuel stop en route.'],
      ['Sun 20 Dec','Southern Cross → Balladonia','570 km','5h50','Balladonia Hotel Motel','Longest planned leg. Add 2–3 proper family breaks.'],
      ['Mon 21 Dec','Balladonia → Eucla','492 km','5h00','Eucla Motor Hotel','Cross the 90 Mile Straight; arrive well before dusk.'],
      ['Tue 22 Dec','Eucla → Ceduna','491 km','5h00','Ceduna Foreshore / Tourist Park','Bunda Cliffs / Great Australian Bight viewpoints if heat and timing permit.'],
      ['Wed 23 Dec','Ceduna → Port Augusta','468 km','4h50','Majestic Oasis / family motel','Comfortable town stop before Adelaide.'],
      ['Thu 24 Dec','Port Augusta → Adelaide','310 km','3h30','Adelaide accommodation','Shorter Christmas Eve leg; stock up before holiday closures.'],
      ['Fri 25 Dec','Adelaide — Christmas Day','Local','Rest day','Adelaide accommodation','Pre-book Christmas lunch/dinner and choose attractions confirmed open.'],
      ['Sat 26 Dec','Adelaide family day','Local','Easy day','Adelaide accommodation','City, beach or wildlife day.'],
      ['Sun 27 Dec','Adelaide family day','Local','Easy day','Adelaide accommodation','Flexible family activity day.'],
      ['Mon 28 Dec','Adelaide family day','Local','Easy day','Adelaide accommodation','Optional Hills / wildlife / beach day.'],
      ['Tue 29 Dec','Adelaide final full day','Local','Easy day','Adelaide accommodation','Laundry, supplies and vehicle check for return.']
    ],
    return:[
      ['Wed 30 Dec','Adelaide → Port Augusta','310 km','3h30','Port Augusta','Easy first return leg.'],
      ['Thu 31 Dec','Port Augusta → Ceduna','468 km','4h50','Ceduna','Arrive before New Year’s Eve evening.'],
      ['Fri 1 Jan','Ceduna → Eucla','491 km','5h00','Eucla','Confirm New Year fuel and food trading hours in advance.'],
      ['Sat 2 Jan','Eucla → Balladonia','492 km','5h00','Balladonia','Remote crossing; conservative fuel strategy.'],
      ['Sun 3 Jan','Balladonia → Southern Cross','570 km','5h50','Southern Cross','Second longest driving leg.'],
      ['Mon 4 Jan','Southern Cross → Perth','373 km','4h20','Perth','Final drive home.'],
      ['Tue 5 Jan','Buffer / recovery day','—','—','Contingency','Held free for weather, fatigue, vehicle issues or recovery.']
    ]
  },
  wa:{
    title:'Option 2 — Scenic WA',tag:'The Coastal Detour',route:'Add Esperance and Lucky Bay outbound, then use the direct Nullarbor return.',meta:['18 days','~5,900 km','13 driving days'],
    outbound:[
      ['Sat 19 Dec','Perth → Ravensthorpe corridor','~530 km','5h45','Ravensthorpe / nearby','Break the south-coast approach into a safe family leg.'],
      ['Sun 20 Dec','Ravensthorpe → Esperance','~190 km','2h15','Esperance','Short drive, afternoon beach time.'],
      ['Mon 21 Dec','Esperance + Lucky Bay','Local','Easy day','Esperance','Full scenic day; weather and beach conditions permitting.'],
      ['Tue 22 Dec','Esperance → Balladonia','~390 km','4h15','Balladonia','Rejoin the Eyre Highway corridor.'],
      ['Wed 23 Dec','Balladonia → Eucla','492 km','5h00','Eucla','90 Mile Straight and remote-road day.'],
      ['Thu 24 Dec','Eucla → Ceduna','491 km','5h00','Ceduna','Christmas Eve arrival; pre-book food and accommodation.'],
      ['Fri 25 Dec','Ceduna — Christmas reset','Local','Rest day','Ceduna','A practical holiday buffer because many services may close.'],
      ['Sat 26 Dec','Ceduna → Port Augusta','468 km','4h50','Port Augusta','Resume eastbound travel.'],
      ['Sun 27 Dec','Port Augusta → Adelaide','310 km','3h30','Adelaide','Arrive with several Adelaide days remaining.'],
      ['28–29 Dec','Adelaide','Local','2 days','Adelaide','Two full non-driving family days before return.']
    ],
    return:[
      ['Wed 30 Dec','Adelaide → Port Augusta','310 km','3h30','Port Augusta','Direct return begins.'],
      ['Thu 31 Dec','Port Augusta → Ceduna','468 km','4h50','Ceduna','New Year’s Eve stop.'],
      ['Fri 1 Jan','Ceduna → Eucla','491 km','5h00','Eucla','Confirm holiday trading hours.'],
      ['Sat 2 Jan','Eucla → Balladonia','492 km','5h00','Balladonia','Remote crossing.'],
      ['Sun 3 Jan','Balladonia → Southern Cross','570 km','5h50','Southern Cross','Long driving day with multiple breaks.'],
      ['Mon 4 Jan','Southern Cross → Perth','373 km','4h20','Perth','Return home.'],
      ['Tue 5 Jan','Buffer / recovery','—','—','Contingency','Keep free.']
    ]
  },
  sa:{
    title:'Option 3 — Scenic SA',tag:'The Eyre Peninsula Loop',route:'Direct Nullarbor outbound, then return via the Eyre Peninsula coast.',meta:['18 days','~6,200 km','13+ driving days'],
    outbound:[
      ['Sat 19 Dec','Perth → Southern Cross','373 km','4h20','Southern Cross','Balanced first day.'],
      ['Sun 20 Dec','Southern Cross → Balladonia','570 km','5h50','Balladonia','Long family driving day.'],
      ['Mon 21 Dec','Balladonia → Eucla','492 km','5h00','Eucla','Remote-road day.'],
      ['Tue 22 Dec','Eucla → Ceduna','491 km','5h00','Ceduna','Great Australian Bight viewpoints if timing allows.'],
      ['Wed 23 Dec','Ceduna → Port Augusta','468 km','4h50','Port Augusta','Town-based overnight.'],
      ['Thu 24 Dec','Port Augusta → Adelaide','310 km','3h30','Adelaide','Christmas Eve arrival.'],
      ['25–28 Dec','Adelaide','Local','4 days','Adelaide','Four full family days.'],
      ['Tue 29 Dec','Prepare for Eyre Peninsula return','Local','Easy day','Adelaide','Supplies, laundry and vehicle check.']
    ],
    return:[
      ['Wed 30 Dec','Adelaide → Port Lincoln','~650 km','6h45+','Port Lincoln','This exceeds the preferred 5–6h target; should be split if selected.'],
      ['Thu 31 Dec','Port Lincoln + Coffin Bay','Local','Easy day','Port Lincoln / Coffin Bay','Coastal family day.'],
      ['Fri 1 Jan','Port Lincoln → Streaky Bay','~380 km','4h15','Streaky Bay','Scenic Eyre Peninsula leg.'],
      ['Sat 2 Jan','Streaky Bay → Eucla','~620 km','6h30+','Eucla','Too long for the preferred family pace; redesign required.'],
      ['Sun 3 Jan','Eucla → Balladonia','492 km','5h00','Balladonia','Direct westbound Nullarbor.'],
      ['Mon 4 Jan','Balladonia → Southern Cross','570 km','5h50','Southern Cross','Long day.'],
      ['Tue 5 Jan','Southern Cross → Perth','373 km','4h20','Perth','No contingency day remains.']
    ]
  }
};

let selected='balanced',showReturn=false;
const optionGrid=document.getElementById('optionGrid');
const itineraryTitle=document.getElementById('itineraryTitle');
const itineraryList=document.getElementById('itineraryList');
const toggleReturn=document.getElementById('toggleReturn');
const feedbackStatus=document.getElementById('feedbackStatus');

function renderOptions(){
  optionGrid.innerHTML='';
  Object.entries(trips).forEach(([key,t],i)=>{
    const card=document.createElement('article');
    card.className='option-card'+(key===selected?' selected':'');
    card.innerHTML=`<div class="option-number">OPTION ${i+1}</div><h3>${t.title.replace(/^Option \d — /,'')}</h3><div class="option-tag">${t.tag}</div><div class="option-route">${t.route}</div><div class="option-meta">${t.meta.map(m=>`<span>${m}</span>`).join('')}</div>`;
    card.addEventListener('click',()=>{selected=key;showReturn=false;renderAll();itineraryTitle.scrollIntoView({behavior:'smooth',block:'center'});});
    optionGrid.appendChild(card);
  });
}

function renderItinerary(){
  const t=trips[selected];
  itineraryTitle.textContent=t.title;
  const days=showReturn?t.return:t.outbound;
  itineraryList.innerHTML=days.map(d=>`<article class="day-card"><div class="day-index">${d[0]}</div><div><h4>${d[1]}</h4><p><strong>Stay:</strong> ${d[4]}</p><p>${d[5]||''}</p></div><div class="day-km"><b>${d[2]}</b>${d[3]}</div></article>`).join('');
  toggleReturn.textContent=showReturn?'Show Outbound + Stay':'Show Return';
}

function renderVote(){
  const votes=JSON.parse(localStorage.getItem('royalRoadVotes')||'{}');
  document.querySelectorAll('[data-vote]').forEach(b=>b.classList.toggle('active',votes[selected]===b.dataset.vote));
  feedbackStatus.textContent=votes[selected]?`Saved on this device: ${votes[selected][0].toUpperCase()+votes[selected].slice(1)} for ${trips[selected].title}.`:'No vote saved on this device yet.';
}

function renderAll(){renderOptions();renderItinerary();renderVote();}
toggleReturn.addEventListener('click',()=>{showReturn=!showReturn;renderItinerary();});
document.querySelectorAll('[data-vote]').forEach(b=>b.addEventListener('click',()=>{const votes=JSON.parse(localStorage.getItem('royalRoadVotes')||'{}');votes[selected]=b.dataset.vote;localStorage.setItem('royalRoadVotes',JSON.stringify(votes));renderVote();}));

const noteForm=document.getElementById('noteForm'),noteList=document.getElementById('noteList');
function getNotes(){return JSON.parse(localStorage.getItem('royalRoadNotes')||'[]');}
function renderNotes(){const notes=getNotes();noteList.innerHTML=notes.length?notes.slice().reverse().slice(0,8).map(n=>`<div class="note-item"><b>${escapeHtml(n.name)} · ${escapeHtml(n.option)}</b><p>${escapeHtml(n.text)}</p></div>`).join(''):'<p class="muted">No notes yet on this device.</p>';}
function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}
noteForm.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('noteName').value.trim(),text=document.getElementById('noteText').value.trim();if(!name||!text)return;const notes=getNotes();notes.push({name,text,option:trips[selected].title,createdAt:new Date().toISOString()});localStorage.setItem('royalRoadNotes',JSON.stringify(notes));noteForm.reset();renderNotes();});

renderAll();renderNotes();