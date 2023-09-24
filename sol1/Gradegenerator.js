function calculateGrade() {
    let grade;
    if (userInput > 79) {
      grade = 'A';
    } else if (userInput >= 60) {
      grade = 'B';
    } else if (userInput >= 50) {
      grade = 'C';
    } else if (userInput >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
}
    
  calculateGrade();
  