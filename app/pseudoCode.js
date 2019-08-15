// let's say the below function is for 1 boy

function generateSchedule () {
  const topTen = ['all girls picked by that boy']
  const pool = ['girls that haven\'t been picked by anybody or the ones that have empty time slots in their schedule']
  const boys = ['all other boys']

  /* start with top 10 gils and check if any of them is available
     I'm not accounting for time slots here, though this is important too
  */
  if ('girl is available') {
    /*
      See how many top 10 girls are available. If more than onem than check if they are
      the only top 10 for somebody else at this particular time slot. If that's the case, skip her, 
      and check others
    */
    addtoSchedule()
  }

  if('girl not available') {
    /* we want to check the girl's paired boys
        if any of those boys have more than 1 top ten girls
        we can take that girl away from him
        checkBoys function will return true if that boy has more than 1 from his top 10
        Happy end
    */
    if (checkBoys()) {
      /* this means this boy can give the girl away
        but need to fill in the freed spot, and we can do so by taking one of the girls from the pool defined above

        if no girl is available any more we'd need to check the boys of all his girls and run the same checkBoys function on them
      */
      addtoSchedule() 
    } else {
      // will skip boy and go to next one
    }
  }
}

/*
  I would check the availablity of a girl when a boy selects one.
  And a boy picks a girl, that's already booked out, let him know and see if he would like to select another girl

  If the girl is booked out, have an option of sort of "wish list", this should increase the chances of getting 
  a girl of interest. Also in case somebody opts out, it would be useful. 

  Also the numebr of top girls should be bigger than the number of boys each girl can meet, this should increase
  the chances for boys

  Another thing to consider - perfect match. Say, when we check girl's availablity, we should make sure that we're
  not swaping the scheduled alredy boy that the girl want to meet. Otherwise the chances of success dicrease.

  When it comes to checking time slots, if would matter if a particular girl is a single top 10 for another boy
*/