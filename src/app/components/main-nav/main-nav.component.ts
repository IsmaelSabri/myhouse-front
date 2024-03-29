import { Edificio } from './../../model/edificio';
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { NotificationService } from '../../service/notification.service';
import { NotificationType } from '../../class/notification-type.enum';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { EdificioService } from '../../service/edificio.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ContactUser } from 'src/app/model/contact-user';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {

  edificio: Edificio = new Edificio();
  aux:string;
  public refreshing: boolean;
  contactUser:ContactUser=new ContactUser();
  protected subscriptions: Subscription[] = [];


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private edificioService: EdificioService
  ) {}

  ngOnInit(): void {
    this.edificio=this.edificioService.edificio;
  }

  imprimir(){
    console.log(this.edificio);
  }

  private sendNotification(
    notificationType: NotificationType,
    message: string
  ): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(
        notificationType,
        'Error. Por favor inténtelo de nuevo.'
      );
    }
  }

  public onLogOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
    this.sendNotification(
      NotificationType.SUCCESS,
      `Te has desconectado correctamente`
    );
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode >= 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public contactMessage(){
    this.refreshing=true;
    const formData = new FormData();
    formData.append('nombre',this.contactUser.nombre);
    formData.append('correo',this.contactUser.correo);
    formData.append('telefono',this.contactUser.telefono);
    formData.append('mensaje',this.contactUser.mensaje);
    alert("Mensaje enviado! \n La respuesta del vendedor será enviada a tu correo electrónico!");
    this.subscriptions.push(
     /*
     hay que implementarlo en el servicio ...
     
     this.markerService.addBuilding(formData).subscribe((res) => {
        this.router.navigate(['/home']),
          this.sendNotification(NotificationType.SUCCESS, ` Mensaje enviado.`);
        var resetForm = <HTMLFormElement>document.getElementById('contactForm');
        resetForm.reset();
        this.clickButton('contact-form-close');
      })*/
    );

  }




}
