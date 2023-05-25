export function durationEmoji(minutes) {
  let numberOfEmojis;
  if (minutes < 30) {
    const emoji = "☕️";
    numberOfEmojis = (Math.ceil(minutes / 5) * 5) / 5;
    return `${emoji.repeat(numberOfEmojis)} ${minutes} min read.`;
  } else {
    const emoji = "🍱";
    numberOfEmojis = (Math.ceil(minutes / 10) * 10) / 10;
    return `${emoji.repeat(numberOfEmojis)} ${minutes} min read.`;
  }
}
