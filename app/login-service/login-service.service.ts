import {
  Component,
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from '@angular/core';

import {
  ComponentType,
  Portal,
  ComponentPortal,
  DomPortalHost
} from '@angular/cdk/portal';

@Component({
  selector: 'loading-spinner',
  template: `
    <div class="wrapper">
      <h2>Cargando...</h2>
    </div>
  `,
  styles: [`
    .wrapper { 
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.4);
      color: white;
    }
  `]
})
export class LoginServiceComponent { }

@Injectable()
export class LoginServiceService {
  private loadingSpinnerPortal: ComponentPortal<LoginServiceComponent>;

  private bodyPortalHost: DomPortalHost;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {

      this.loadingSpinnerPortal = new ComponentPortal(LoginServiceComponent);

      this.bodyPortalHost = new DomPortalHost(
        document.body,
        this.componentFactoryResolver,
        this.appRef,
        this.injector);
  }

  reveal() {
    this.bodyPortalHost.attach(this.loadingSpinnerPortal);
  }

  hide() {
    this.bodyPortalHost.detach();
  }
}
