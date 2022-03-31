const objectCompare = function (a, b) {
    if (typeof a !== typeof b) {
        return false;
    }
    switch (typeof a) {
        case "object":
            const aKeys = Object.keys(a);
            const aLength = aKeys.length;
            const bKeys = Object.keys(b);
            const bLength = bKeys.length;
            if (aLength !== bLength) {
                return false;
            }
            for (let i = 0; i < aLength; i++) {
                const key = aKeys[i];
                if (!objectCompare(a[key], b[key])) {
                    return false
                }
            }
            return true;
        default:
            return a === b;
    }
}

export default objectCompare;