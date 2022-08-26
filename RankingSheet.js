const markSheets = [
  {
    student: "Sriram",
    rollNo: 11,
  },
  {
    student: "Ram",
    rollNo: 16,
  },
  {
    student: "sri",
    rollNo: 18,
  },
  {
    student: "mani",
    rollNo: 20,
  },
  {
    student: "praveen",
    rollNo: 80,
  },
  {
    student: "thiru",
    rollNo: 81,
  },
  {
    student: "manikandan",
    rollNo: 82,
  },
];

const marks = {
  11: {
    tamil: 80,
    english: 90,
    science: 86,
    maths: 97,
    social: 76,
  },
  16: {
    tamil: 90,
    english: 97,
    science: 100,
    maths: 34,
    social: 96,
  },
  18: {
    tamil: 60,
    english: 90,
    science: 63,
    maths: 93,
    social: 46,
  },
  20: {
    tamil: 79,
    english: 80,
    science: 91,
    maths: 93,
    social: 86,
  },
  80: {
    tamil: 90,
    english: 80,
    science: 86,
    maths: 96,
    social: 77,
  },
  81: {
    tamil: 90,
    english: 40,
    science: 80,
    maths: 68,
    social: 77,
  },
  82: {
    tamil: 100,
    english: 100,
    science: 34,
    maths: 100,
    social: 100,
  },
};

const subjects = ["tamil", "english", "science", "maths", "social"];

let prevRankTotalMark;
let rankCount = 1;

const getMarkDetails = (students) =>
  students.map((student) => ({
    ...student,
    ...getMarks(student.rollNo)
  }));

const getMarks = (rollNo) => {
  let subjectsObj = {};
  subjects.forEach((subject) => {
    subjectsObj[subject] = marks[rollNo][subject];
  });
  return subjectsObj;
};

const getStudentsResult = (studentMarks) =>
  studentMarks.map((studentMark) => ({
    ...studentMark,
    total: getTotal(studentMark.rollNo),
    result: (subjects.length === getPassSubjects(studentMark.rollNo).length ? "PASS" : "FAIL")
  }));

const getTotal = (rollNo) => subjects.reduce((acc, subject) => acc + marks[rollNo][subject], 0);

const getPassSubjects = (rollNo) => subjects.filter((subject) => marks[rollNo][subject] >= 35);

const results = {
  PASS: (currentStudentTotal) => {
    let rank = (currentStudentTotal === prevRankTotalMark) ? rankCount : ++rankCount;
    prevRankTotalMark = (prevRankTotalMark < currentStudentTotal) ? currentStudentTotal : prevRankTotalMark;
    return rank;
  },
  FAIL: '-'
};

const getStudentsResultWithRank = (studentResults) => {
  const studentReport = studentResults.sort((firstRecord, lastRecord) => {
    return firstRecord.total - lastRecord.total;
  });

  prevRankTotalMark = studentReport[0].total;

  return studentReport.map((studentRecord) => (
    {
      ...studentRecord,
      rank: studentRecord.result === "PASS" ? results.PASS(studentRecord.total) : results.FAIL
    }));
};

const getResultCount = (studentsResult, filterString) =>
  studentsResult.filter((result) => result.result === filterString);

const getResultReport = (students) => {
  let studentMarks = getMarkDetails(students);
  let studentsResult = getStudentsResult(studentMarks);
  let studentsMarkReport = getStudentsResultWithRank(studentsResult);
  console.table(studentsMarkReport);

  console.log(
    "No of 'PASS' Count : " + getResultCount(studentsResult, "PASS").length
  );
  console.log(
    "No of 'FAIL' Count : " + getResultCount(studentsResult, "FAIL").length
  );

};

const main = () => {
  getResultReport(markSheets);
};

main();
