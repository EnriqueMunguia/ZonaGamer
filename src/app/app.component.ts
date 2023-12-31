import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'ZonaGamer';

  //  creando el construtor del formulario
  constructor(private fb: FormBuilder) {}
  
  footerForm = this.fb.group({
  correo: ["", [Validators.required, Validators.email]]
  
  })

  __onSubmit() {
    
    if(this.footerForm.valid) {
      console.log(this.footerForm.value)

      Swal.fire({
       
        icon: 'success',
        title: 'Gracias Por Suscribirte',
        showConfirmButton: false,
        timer: 2000,
      })
      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo No valido!',
        
      })

    }
  }

}


