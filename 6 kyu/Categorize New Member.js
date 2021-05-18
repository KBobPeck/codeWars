function openOrSenior(data) {
  for (person of data) {
    if (person[1] >= 55 && person[2] > 7) return "Senior";
    return "Open";
  }
}
