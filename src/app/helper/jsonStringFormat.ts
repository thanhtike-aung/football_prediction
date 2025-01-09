export const parseStringData = (data: string) => {
    const jsonStart = data.indexOf("{");
    const jsonEnd = data.indexOf("}") + 1;
    const jsonString = data.substring(jsonStart, jsonEnd);
    return JSON.parse(jsonString);
}

