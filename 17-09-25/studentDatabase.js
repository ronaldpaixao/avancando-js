const students = [
  {
    name: "Maicon Douglas",
    age: 23,
    course: "NodeJs",
    grade: 84,
    introduce() {
      console.log(
        `Aluno: ${this.name}. Idade: ${this.age} anos. Curso: ${this.course}`
      );
    },
  },
];

function addStudent(name, age, course, grade) {
  return students.push({
    name: name,
    age: age,
    course: course,
    grade: grade,
    introduce() {
      console.log(
        `Aluno: ${this.name}. Idade: ${this.age} anos. Curso: ${this.course}`
      );
    },
  });
}

addStudent('Roni', 31, 'NodeJs', 97);
addStudent('Fulano', 20, 'NodeJs', 30);


function getStudents(list) {
    for (let i = 0; i < list.length; i++) {
        students[i].introduce();
    }
};

getStudents(students);

function calculateMedia(list) {
    let total = 0;
    let cycles = 0;
    for(n of list) {
        cycles++
        total += n.grade;
    }
    return total / cycles;
}

console.log(calculateMedia(students));

function setFinalConcept(learners) {
    const approvedStudents = []
    for (learner of learners) {
        if (learner.grade >= 60) {
            console.log(`${learner.name} está: APROVADO`);
            approvedStudents.push(learner);
        } else if (learner.grade >= 40){
            console.log(`${learner.name} está: RECUPERAÇÃO`);
        } else {
            console.log(`${learner.name} está: REPROVADO`);
        }
    }

    return approvedStudents;
}

console.log(setFinalConcept(students))