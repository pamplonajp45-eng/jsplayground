function HashMap(h) {
  const map = new Map();

  for (const char of h) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < h.length; i++) {
    if (map.get(h[i]) === 1) {
      return i;
    }
  }
  return -1;
}
console.log(HashMap("leetcode"));
console.log(HashMap("leetcode"));
console.log(HashMap("loveleetcode"));
console.log(HashMap("aabb"));
// //Time: O(n)
// Space: O(k)
