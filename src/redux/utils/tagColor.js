export function getTagColor(tag) {
    switch (tag) {
        case "Study":
            return "bg-red-100 border-red-400";
        case "Work":
            return "bg-blue-100 border-blue-400";
        case "Personal":
            return "bg-green-100 border-green-400";
        case "Home":
            return "bg-yellow-100 border-yellow-400";
        default:
            return "bg-purple-100 border-purple-400";
    }
}