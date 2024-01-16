import {
  createProduct,
  deleteProduct,
  getOneProductById,
  updateProductName,
  viewProducts,
} from "../controller/shopController";
import {
  createStudent,
  deleteStudent,
  getOneStudentById,
  updateStudentAge,
  updateStudentClass,
  viewStudents,
} from "../controller/studentController";
import {
  createTask,
  deleteTask,
  getOneTaskById,
  updateTaskAchieved,
  viewTasks,
} from "../controller/todoController";

describe("testing the shop controller", () => {
  test("create product test", () => {
    const productVal = {
      id: 10,
      productName: "Milo",
      price: 10000,
      quantity: 100,
    };

    expect(createProduct(productVal)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        productName: expect.any(String),
        price: expect.any(Number),
        quantity: expect.any(Number),
      })
    );
  });

  test("view shop's products' test", () => {
    expect(viewProducts()).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          productName: expect.any(String),
          price: expect.any(Number),
          quantity: expect.any(Number),
        },
      ])
    );
  });

  test("update one product's name test", () => {
    expect(updateProductName(2, "Lenovo")).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        productName: expect.any(String),
        price: expect.any(Number),
        quantity: expect.any(Number),
      })
    );
  });

  test("delete one product by ID's test", () => {
    expect(deleteProduct(1)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          productName: expect.any(String),
          price: expect.any(Number),
          quantity: expect.any(Number),
        },
      ])
    );
  });

  test("get one product by ID's test", () => {
    expect(getOneProductById(1)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        productName: expect.any(String),
        price: expect.any(Number),
        quantity: expect.any(Number),
      })
    );
  });
});

describe("testing all under student's controller", () => {
  test("testing create student", () => {
    const student = {
      id: 20,
      studentName: "Ahmed",
      age: 18,
      studentClass: "12B",
    };

    expect(createStudent(student)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        studentName: expect.any(String),
        age: expect.any(Number),
        studentClass: expect.any(String),
      })
    );
  });

  test("get all sttudents", () => {
    expect(viewStudents()).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          studentName: expect.any(String),
          age: expect.any(Number),
          studentClass: expect.any(String),
        },
      ])
    );
  });

  test("get one student", () => {
    expect(getOneStudentById(2)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        studentName: expect.any(String),
        age: expect.any(Number),
        studentClass: expect.any(String),
      })
    );
  });

  test("Update a student's age", () => {
    expect(updateStudentAge(1, 16)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        studentName: expect.any(String),
        age: expect.any(Number),
        studentClass: expect.any(String),
      })
    );
  });

  test("Update a student's class", () => {
    expect(updateStudentClass(1, "16D")).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        studentName: expect.any(String),
        age: expect.any(Number),
        studentClass: expect.any(String),
      })
    );
  });

  test("Delete a student from db test", () => {
    expect(deleteStudent(1)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          studentName: expect.any(String),
          age: expect.any(Number),
          studentClass: expect.any(String),
        },
      ])
    );
  });
});

describe("testing logics under todo controller", () => {
  test("testing create task", () => {
    const task = {
      id: 7,
      achieved: false,
      startTime: "Today",
      endTime: "Tomorrow",
      taskDesc: "Finish up assignment",
    };

    expect(createTask(task)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        achieved: expect.any(Boolean),
        startTime: expect.any(String),
        endTime: expect.any(String),
        taskDesc: expect.any(String),
      })
    );
  });

  test("testing viewing all tasks", () => {
    expect(viewTasks()).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          achieved: expect.any(Boolean),
          startTime: expect.any(String),
          endTime: expect.any(String),
          taskDesc: expect.any(String),
        },
      ])
    );
  });

  test("testing updating completed task", () => {
    expect(updateTaskAchieved(1)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        achieved: expect.any(Boolean),
        startTime: expect.any(String),
        endTime: expect.any(String),
        taskDesc: expect.any(String),
      })
    );
  });

  test("testing delete task", () => {
    expect(deleteTask(1)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          achieved: expect.any(Boolean),
          startTime: expect.any(String),
          endTime: expect.any(String),
          taskDesc: expect.any(String),
        },
      ])
    );
  });

  test("testing get one task", () => {
    expect(getOneTaskById(1)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        achieved: expect.any(Boolean),
        startTime: expect.any(String),
        endTime: expect.any(String),
        taskDesc: expect.any(String),
      })
    );
  });
});
