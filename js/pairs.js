var sum_pairs = (ar, tar) => {
  return ar.map((x,i) => (x + ar[i+1] === tar) ? "Y" : "N").toString().match(/Y/g) ? "YES" : "NO"
}

console.log(sum_pairs([4,6,2,6,6], 12))
