import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from './car.service';
import { LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-user-old',
  standalone: true,
  template: `
    Username: {{ username }}
  `,
})
export class OldUserComponent {
  username = 'youngTech';
}



@Component({
  selector: 'app-root', 
  imports: [OldUserComponent, RouterOutlet, UserComponent, 
    ChildComponent, CommentsComponent, RouterLink, 
    ReactiveFormsModule, LowerCasePipe, 
    DecimalPipe, DatePipe, CurrencyPipe, ReversePipe
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial1';
  city = 'San Francisco';
  isServerRunning : boolean = true;
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
  isEditable : boolean = true;
  message = '';
  items = new Array();
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  carService = inject(CarService);
  display: string = '';
  displayConst = '';
  upperCaseMessage = 'I AM POD';
  num = 103.1234;
  birthday = new Date(2006, 4, 2);
  cost = 4560.34;
  word = 'You are a champion';

  constructor(private carServiceConst: CarService) {
    this.display = this.carService.getCars().join('<==>');
    this.displayConst = this.carServiceConst.getCars().join('\--/')
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(item : string) {
    this.items.push(item);
  }

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
