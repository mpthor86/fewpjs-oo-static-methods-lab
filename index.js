class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str) {
    let leave = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titled = []
    let arr = str.split(' ')

    for (let i = 0; i < arr.length; i++){
      if (i == 0){
        titled.push( this.capitalize(arr[i]))
      } else{
          if(leave.includes(arr[i])){
            titled.push(arr[i])
          } else {
              titled.push(this.capitalize(arr[i]))
            }
          }
        }
        return titled.join(' ')
      }
    }