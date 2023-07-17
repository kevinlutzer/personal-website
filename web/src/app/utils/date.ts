export function displayDifferenceDateString(a: Date, b: Date | undefined): string {
    // Base case where a and b are null
    let result = '';

    if ( a && b ) {
      result = '( ' + displayDate(a) + ' - ' + displayDate(b) + '  )';
    } else if ( a ) {
      result = '( ' + displayDate(a) + ' - Present )';
    }
    return result;
  }

export function displayDate(d: Date): string {
    return d.getMonth() + '/' + d.getFullYear();
}
