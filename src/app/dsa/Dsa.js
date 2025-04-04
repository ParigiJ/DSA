const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [7, 6, 5, 4, 3, 2, 1];
// const arr3 = [2, 2, 2, 2, 2];
const arr4 = [2, 4, 10, 14, 15, 18, 20];

let nums1 = [1, 2, 0, 0];
let nums2 = [1, 3];
let m = 2;
let n = 2;

const mergeSort = (nums1, m, nums2, n) => {
  let t = m - 1;
  let endOne = m + n - 1;
  let endTwo = n - 1;

  while (endTwo >= 0) {
    if (t >= 0 && nums1[t] > nums2[endTwo]) {
      nums1[endOne] = nums1[t];
      t--;
    } else {
      nums1[endOne] = nums2[endTwo];
      endTwo--;
    }
    endOne--;
  }
};

const target = 8;
// const target2 = 1;
// const target3 = 2;

const oaBinary = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;
  const isAscending = arr[s] < arr[e];

  while (s <= e) {
    let m = s + Math.floor((e - s) / 2);

    if (arr[m] == target) return m;

    if (isAscending) {
      if (arr[m] < target) s = m + 1;
      else e = m - 1;
    } else {
      if (arr[m] > target) s = m + 1;
      else e = m - 1;
    }
  }
  return -1;
};

const ceilingFloor = (arr, target, isCieling) => {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let m = s + Math.floor((e - s) / 2);
    if (arr[m] == target) return m;
    if (arr[m] < target) s = m + 1;
    else e = m - 1;
  }
  if (isCieling) return s;
  else return e;
};

console.log(oaBinary(arr, target));
console.log(ceilingFloor(arr4, target, true));
console.log(ceilingFloor(arr4, 17, false));
console.log(mergeSort(nums1, m, nums2, n));
console.log(nums1);
