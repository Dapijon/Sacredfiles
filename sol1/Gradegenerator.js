function getStudentGrade() {

    let mark;
    
    do {
      mark = parseInt(prompt('Enter student mark (0-100): '));
    } while (isNaN(mark) || mark < 0 || mark > 100);
  
    let grade;
  
    if (mark > 79) {
      grade = 'A';
    } else if (mark >= 60) {
      grade = 'B';
    } else if (mark >= 50) {
      grade = 'C'; 
    } else if (mark >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    return grade;
  
  }
  