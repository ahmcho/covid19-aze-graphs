const calculateBadgeColor = (number) => {
    if(number <= 150){
      return 'primary'
    } else if(number > 150 & number <= 300 ) {
      return 'warning'
    } else if(number > 300){
      return 'danger'
    }
}

export { calculateBadgeColor } 