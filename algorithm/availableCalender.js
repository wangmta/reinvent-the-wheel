const calendar1 = [
  ["9:00", "10:30"],
  ["12:00", "13:00"],
  ["16:00", "18:00"],
];
const bound1 = ["9:00", "20:00"];
const calendar2 = [
  ["10:00", "11:30"],
  ["12:30", "14:30"],
  ["14:30", "15:00"],
  ["16:00", "17:00"],
];
const bound2 = ["10:00", "18:30"];
const BLOCK = 30;

function s2m(string) {
  let [hour, min] = string.split(":");
  return parseInt(hour * 60) + parseInt(min);
}

function m2s(minutes) {
  const hour = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hour}:${min}`;
}

function cal2min(calender) {
  const list = [];
  calender.forEach((item) => {
    const start = s2m(item[0]);
    const end = s2m(item[1]);
    list.push([start, end]);
  });
  return list;
}

function min2cal(minuteList) {
  const list = [];
  minuteList.forEach((item) => {
    const start = m2s(item[0]);
    const end = m2s(item[1]);
    list.push([start, end]);
  });
  return list;
}

function getBounds(boundList1, boundList2) {
  const start1 = s2m(boundList1[0]);
  const end1 = s2m(boundList1[1]);
  const start2 = s2m(boundList2[0]);
  const end2 = s2m(boundList2[1]);
  return [
    [0, Math.max(start1, start2)],
    [Math.min(end1, end2), 24 * 60],
  ];
}

function getAvail(unavailableList) {
  let start = 0,
    end = 0,
    list = [];
  unavailableList.forEach((item) => {
    start = item[0];
    if (start - end >= BLOCK) {
      list.push([end, start]);
    }
    end = item[1];
  });
  return list;
}

const bound = getBounds(bound1, bound2);
const newCalender1 = cal2min(calendar1);
const newCalender2 = cal2min(calendar2);
const unavail = bound.concat(newCalender1).concat(newCalender2);
unavail.sort();

const avail = getAvail(unavail);
console.log(avail);
console.log(min2cal(avail));
