import sampleData from './sample_data.json';

const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatDate = (year, month, day) => {
  const monthName = monthsNames[parseInt(month, 10) - 1];
  return `${monthName} ${day}, ${year}`;
};

const extractEvents = (data) => {
  const events = [];
  for (const year in data) {
    const months = data[year];
    for (const month in months) {
      const dates = months[month];
      for (const date in dates) {
        if (date === 'c' || date === 'dur' || date === 's') continue;
        const { c: count, dur: duration, s: score } = dates[date];
        events.push({ date: formatDate(year, month, date), count, duration, score });
      }
    }
  }
  return events;
};

const sortEventsByCount = (events) => {
  return events.sort((a, b) => b.count - a.count);
};

export const getTopDatesByCount = (numberOfTopDates = 3) => {
  const events = extractEvents(sampleData);
  const sortedEvents = sortEventsByCount(events);
  return sortedEvents.slice(0, numberOfTopDates);
};


export const calculateMetrics = () => {
  const events = extractEvents(sampleData);
  const totalEvents = events.reduce((sum, event) => sum + event.count, 0);
  const totalSumOfMoney = events.reduce((sum, event) => sum + event.score, 0);

  return {
    totalEvents: totalEvents.toLocaleString(),
    totalSumOfMoney: totalSumOfMoney.toLocaleString(),
  };
};

