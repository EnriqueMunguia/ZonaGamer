
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactenosComponent } from "./public/contactenos/contactenos.component";
import { InicioComponent } from "./public/inicio/inicio.component";
import { UserLoginComponent } from "./private/user/user-login/user-login.component";
import { UserRegisterComponent } from "./private/user/user-register/user-register.component";
import { ModeradoresComponent } from "./public/moderadores/moderadores.component";


const routes:Routes=[
    //publico
    

    {path:"contactenos",component:ContactenosComponent},
    {path:"inicio",component:InicioComponent},
    {path:"moderadores",component:ModeradoresComponent},
    {path: "", redirectTo: "inicio", pathMatch: "full"},// simpre valla al home
    


    {path:"acceso",component:UserLoginComponent},
    {path:"registrarUsuario",component:UserRegisterComponent},
  
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}

