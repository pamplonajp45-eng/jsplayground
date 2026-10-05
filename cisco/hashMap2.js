function firstUniqueChar(str) {
  const map = new Map();

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (leti = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) return i;
  }
  return -1;
}
