let count = 0;

interface iStudent {
  id: number;
  studentName: string;
  age: number | undefined;
  studentClass: string | undefined;
}

export const studentArr: Array<iStudent> = Array.from({ length: 5 }, () => {
  count++;

  return {
    id: count,
    studentName: Math.ceil(Math.random() * 2000).toString(),
    age: Math.ceil(Math.random() * 18),
    studentClass: Math.ceil(Math.random() * 14).toString(),
  };
});

export const createStudent = (val: iStudent) => {
  studentArr.push(val);

  return val;
};

export const viewStudents = () => {
  return studentArr;
};

export const updateStudentClass = (id: number, studentClass: string) => {
  let getStudent: iStudent | undefined = studentArr.find((el) => el.id === id);

  if (getStudent) {
    getStudent!["studentClass"] = studentClass;
  }

  return studentArr.find((el) => el.id === id);
};

export const updateStudentAge = (id: number, age: number) => {
  let getStudent: iStudent | undefined = studentArr.find((el) => el.id === id);

  if (getStudent) {
    getStudent!.age = age;
  }

  return studentArr.find((el) => el.id === id);
};

export const deleteStudent = (id: number) => {
  return studentArr.filter((el) => el.id !== id);
};

export const getOneStudentById = (id: number) => {
  const find = studentArr.find((el) => el.id === id);
  if (find) {
    return find;
  } else {
    return "Student does not exist";
  }
};
