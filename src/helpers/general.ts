const truncate = (word: string, length: number): string => {
  if (word.length > length) {
    return word.substr(0, length) + "..."
  }
  return word
}

export {
  truncate
}