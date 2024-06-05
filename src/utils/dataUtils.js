import sampleData from './sample_data.json';

const extractEvents = (data) => {
  const events = [];
  const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const formatDate = (year, month, day) => {
    const monthName = monthsNames[parseInt(month, 10) - 1];
    return `${monthName} ${day}, ${year}`;
  };

  for (const year in data) {
    const months = data[year];
    for (const month in months) {
      const dates = months[month];
      for (const date in dates) {
        const { c: count } = dates[date];
        events.push({ date: formatDate(year, month, date), count });
      }
    }
  }

  return events;
};


const sortEventsByCount = (events) => {
  return events.sort((a, b) => b.count - a.count);
};

export const getTopDates = (numberOfTopDates = 3) => {
  const events = extractEvents(sampleData);
  const sortedEvents = sortEventsByCount(events);
  return sortedEvents.slice(0, numberOfTopDates);
};


