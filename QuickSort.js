const Merge = (tab1, pivot, tab2) => {
  if (!tab1 || tab1.length === 0) return [pivot, ...tab2];
  if (!tab2 || tab2.length === 0) return [...tab1, pivot];

  return [...tab1, pivot, ...tab2];
};
const sort = (tab) => {
  if (tab.length <= 1) return tab;

  let pivotIndex = Math.floor(tab.length / 2);
  let pivot = tab[pivotIndex];
  let left = [];
  let right = [];

  for (let i = 0; i < tab.length; i++) {
    if (i !== pivotIndex) {
      if (tab[i] < pivot) {
        left.push(tab[i]);
      } else {
        right.push(tab[i]);
      }
    }
  }

  return Merge(sort(left), pivot, sort(right));
};
