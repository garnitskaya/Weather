export const convertTime = (timestamp, timezone) => {
    const date = new Date((timestamp + timezone) * 1000);
    const h = date.getUTCHours();
    const m = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();
    return `${h}:${m}`;
}

export const convertdata = (timestamp, timezone) => {
    const date = new Date((timestamp + timezone) * 1000);
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    const months = ["янв.", "фев.", "мар.", "апр.", "мая", "июня",
        "июля", "авг.", "сен.", "окт.", "ноя.", "дек"];
    const fullDate = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
    return fullDate;
}