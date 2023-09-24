function getDemeritPoints(speed) {

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
      return "Ok";
    }
  
    const speedOverLimit = speed - speedLimit;
    const demeritPoints = Math.floor(speedOverLimit / kmPerDemeritPoint);
  
    return `Demerit points: ${demeritPoints}`;
  
  }
  
  const speed = 80; 
  console.log(getDemeritPoints(speed)); // Prints "Demerit points: 2"
  

        