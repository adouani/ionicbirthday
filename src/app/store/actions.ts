import {Injectable} from "@angular/core";
import {Birthday} from "../../models/birthday.model";
import {Action} from "@ngrx/store";
/**
 * Created by radouani on 23/05/17.
 */


@Injectable()
export class BirthdayActions {
  static ADD_BIRTHDAY='ADD_BIRTHDAY';
  addBirthday(birthday: Birthday): Action {
    return {
      type: BirthdayActions.ADD_BIRTHDAY,
      payload: birthday
    }
  }

  static UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
  updateBirthday(birthday: Birthday): Action {
    return {
      type: BirthdayActions.UPDATE_BIRTHDAY,
      payload: birthday
    }
  }

  static DELETE_BIRTHDAY = 'DELETE_BIRTHDAY';
  deleteBirthday(birthday: Birthday): Action {
    return {
      type: BirthdayActions.DELETE_BIRTHDAY,
      payload: birthday
    }
  }
}
