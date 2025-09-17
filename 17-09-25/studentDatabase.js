const students = [
  {
    name: "Maicon Douglas",
    age: 23,
    course: "NodeJs",
    grade: 55,
    introduce() {
      console.log(
        `Aluno: ${this.name}. Idade: ${this.age} anos. Curso: ${this.course}`
      );
    },
  },
];

function createStudent(name, age, course, grade) {
  return {
    name,
    age,
    course,
    grade,
    introduce() {
      console.log(
        `Aluno: ${this.name}. Idade: ${this.age} anos. Curso: ${this.course}`
      )
    }
  };
}

function listStudents(list) {
  console.log('------ Estudantes Cadastrados ------');
  for(student of list) {
    student.introduce();
  }
};

function calculateAverage(studentList) {
  let total = 0;
  for (student of studentList) {
    total += student.grade;
  }
  return total / studentList.length;
}

function displayFinalStatus(students) {
  let status = '';
  console.log('------ Situação Final dos Alunos ------');
  for (student of students) {
    if (student.grade >= 60) {
      status = 'Aprovado';
    } else if (student.grade >= 40) {
      status = 'Recuperação';
    } else {
      status = 'Reprovado';
    }
    console.log(`A situação do estudante ${student.name} é: ${status.toUpperCase()}`);
  } 
};

function filterApprovedStudents(studentList) {
  let approved = [];
  console.log('------ Abaixo os alunos aprovados: ------')
  for (student of studentList) {
    if (student.grade >= 60) {
      approved.push(student);
    }
  }
  
  return approved;
}

const student1 = createStudent('Roni', 31, 'NodeJs', 97);
const student2 = createStudent('Fulano', 20, 'NodeJs', 30);
students.push(student1, student2);
listStudents(students);
console.log(`A média da turma é: ${calculateAverage(students).toFixed(2)}`);
displayFinalStatus(students);
console.log(filterApprovedStudents(students));