import { AbstractControl, ValidationErrors } from '@angular/forms';


export class ConfirmPasswordValidator {
   static checkConfirmPassword(confirmPass : AbstractControl, Pass: AbstractControl) : ValidationErrors | null {
        if(confirmPass.value !== Pass.value){
            return {
                checkConfirmPassword: true
            }
        }
        return null;
    }
}