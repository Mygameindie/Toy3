// All categories to hide before applying a preset
const ALL_CATEGORIES = [
  'bottomunderwear1',
  'topunderwear1',
  'stocking1',
  'onepiece1',
  'socks1',
  'boxers1',
  'sweatshirt1',
  'shoes1',
  'pants1',
  'skirt1',
  'skirt1w',
  'top1',
  'dress1',
  'dress1w',
  'jacket1',
  'bunnysuitbow1',
  'accessories1',
  'hat1',
  'mask1',
  'bow1',
  'expression1',
  // char2
  'bottomunderwear2',
  'topunderwear2',
  'stocking2',
  'onepiece2',
  'socks2',
  'boxers2',
  'sweatshirt2',
  'shoes2',
  'pants2',
  'skirt2',
  'skirt2w',
  'top2',
  'dress2',
  'dress2w',
  'jacket2',
  'bunnysuitbow2',
  'accessories2',
  'hat2',
  'mask2',
  'bow2',
  'expression2',
  // char3
  'bottomunderwear3',
  'topunderwear3',
  'stocking3',
  'onepiece3',
  'socks3',
  'boxers3',
  'sweatshirt3',
  'shoes3',
  'pants3',
  'skirt3',
  'skirt3w',
  'top3',
  'dress3',
  'dress3w',
  'jacket3',
  'bunnysuitbow3',
  'accessories3',
  'hat3',
  'mask3',
  'bow3',
  'expression3',
];

function showItem(itemId, categoryName) {
  let el = document.getElementById(itemId);
  if (!el) {
    const n = categoryName.match(/\d+/)?.[0];
    const host = n ? document.querySelector(`.char-wrap[data-char="${n}"]`) : null;
    if (!host) { console.warn('Host not found for:', categoryName); return; }
    el = new Image();
    el.id = itemId;
    el.src = `game-images/${itemId}`;
    el.className = categoryName;
    el.dataset.origSrc = `game-images/${itemId}`;
    el.style.cssText = `visibility:hidden;position:absolute;top:0;left:0;width:100%;height:auto;pointer-events:none;z-index:${getZIndex(categoryName)}`;
    host.appendChild(el);
  }
  el.style.visibility = 'visible';
  el.style.zIndex = getZIndex(categoryName);
}

function applyDefaultPreset() {
  hideCategories(ALL_CATEGORIES);

  // underwear (only provided ones)
  showItem('topunderwear1_1.png', 'topunderwear1');
  showItem('bottomunderwear1_1.png', 'bottomunderwear1');

  showItem('topunderwear3_1.png', 'topunderwear3');
  showItem('bottomunderwear3_1.png', 'bottomunderwear3');

  showItem('bottomunderwear2_1.png', 'bottomunderwear2');
  showItem('boxers2_1.png', 'boxers2');

  // dresses / accessories
  showItem('dress1_1.png', 'dress1');
  showItem('dress2_1.png', 'dress2');
  showItem('dress3_1.png', 'dress3');
  showItem('hat2_1.png', 'hat2');
  showItem('bow1_1.png', 'bow1');
}

function applyUnderwear() {
  hideCategories(ALL_CATEGORIES);
  showItem('topunderwear1_1.png', 'topunderwear1');
  showItem('bottomunderwear1_1.png', 'bottomunderwear1');
  // char2 (boy)
  showItem('boxers2_1.png', 'boxers2');
  showItem('bottomunderwear2_1.png', 'bottomunderwear2');
  // char3 (girl)
  showItem('topunderwear3_1.png', 'topunderwear3');
  showItem('bottomunderwear3_1.png', 'bottomunderwear3');
}

function applyBunnyPreset() {
  hideCategories(ALL_CATEGORIES);

  showItem('bunnysuitbow1_1.png', 'bunnysuitbow1');
  showItem('hat1_1.png', 'hat1');
  showItem('onepiece1_1.png', 'onepiece1');
  showItem('shoes1_2.png', 'shoes1');
  showItem('stocking1_1.png', 'stocking1');
  // char2
  showItem('bunnysuitbow2_1.png', 'bunnysuitbow2');
  showItem('hat2_1.png', 'hat2');
  showItem('onepiece2_1.png', 'onepiece2');
  showItem('shoes2_2.png', 'shoes2');
  showItem('stocking2_1.png', 'stocking2');
  // char3
  showItem('bunnysuitbow3_1.png', 'bunnysuitbow3');
  showItem('hat3_1.png', 'hat3');
  showItem('onepiece3_1.png', 'onepiece3');
  showItem('shoes3_2.png', 'shoes3');
  showItem('stocking3_1.png', 'stocking3');
}