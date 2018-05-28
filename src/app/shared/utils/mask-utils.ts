export class MaskUtils {
    static cpfMask = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/];
    static telefoneMask = ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/];
    static celularMask = ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/];

    static celMask(userInput) {
        let numbers = userInput.match(/\d/g);
        let numberLength = 0;
        if (numbers) {
          numberLength = numbers.join("").length;
        }
      
        if (numberLength > 10) {
          return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        } else {
          return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
}