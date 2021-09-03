export const getTodayISOString = () => new Date().toISOString();

export const getDateInMonthsUTC = (months: number) => {
    const today = new Date();
    today.setMonth(today.getMonth() + months);
    return today.toISOString();
}