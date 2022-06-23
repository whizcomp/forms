export default function (dates) {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const dest = new Date(dates);
    const date = dest.getDate();
    const day = dest.getDay();
    const year = dest.getFullYear();
    const month = dest.getMonth();
    return `${weekday[day]} ${date} ${months[month]} ${year}`;
};