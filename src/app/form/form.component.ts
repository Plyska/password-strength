import { Component } from '@angular/core';
import * as constants from 'src/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  passwordValue: string = '';
  statusesList = constants.statusesList;
  passwordStrength = constants.passwordStrength;
  isShowPassword: boolean = false;

  buttonTitle: string = 'SHOW';

  toggleShowPassword() {
    this.isShowPassword = !this.isShowPassword;
    this.buttonTitle = this.isShowPassword ? "HIDE" : "SHOW";
  }

  onChangePassword(event: any) {
    this.passwordValue = event.target.value;

    this.checkSpecialSymbols();
    this.checkNumbers();
    this.checkLetters();
    this.checkColors();
  }

  checkSpecialSymbols() {
    const indx = this.statusesList.findIndex((item) => item.type === constants.symbols);

    if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(this.passwordValue)) {
      this.statusesList[indx].status = true;
    } else {
      this.statusesList[indx].status = false;
    }
  }

  checkNumbers() {
    const indx = this.statusesList.findIndex((item) => item.type === constants.numbers);

    if (/[0-9]+/.test(this.passwordValue)) {
      this.statusesList[indx].status = true;
    } else {
      this.statusesList[indx].status = false;
    }
  }

  checkLetters() {
    const indx = this.statusesList.findIndex((item) => item.type === constants.characters);

    if (
      /[\u0401\u0451\u0410-\u044f]/.test(this.passwordValue) ||
      /[A-Za-z]/.test(this.passwordValue)
    ) {
      this.statusesList[indx].status = true;
    } else {
      this.statusesList[indx].status = false;
    }
  }

  checkColors() {
    const strengthCounter: number = this.statusesList.filter((item) => item.status).length;

    if (this.passwordValue.length === 0) {

      this.passwordStrength.forEach((item) => (item.class = 'grey'));

    } else if (this.passwordValue.length < 8) {

      this.passwordStrength.forEach((item) => (item.class = 'red'));

    } else if (this.passwordValue.length >= 8 && strengthCounter === 1) {

      this.passwordStrength.forEach((item) => {
        item.label === 'easy' ? (item.class = 'red') : (item.class = 'grey');
      });

    } else if (this.passwordValue.length >= 8 && strengthCounter === 2) {

      this.passwordStrength.forEach((item) => {
        item.label !== 'strong'
          ? (item.class = 'yellow')
          : (item.class = 'grey');
      });

    } else if (this.passwordValue.length >= 8 && strengthCounter === 3) {

      this.passwordStrength.forEach((item) => (item.class = 'green'));
    }
  }
}
