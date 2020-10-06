import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationPikachuComponent } from './animation-pikachu-friend/animation-pikachu-friend.component';

@NgModule({
  declarations: [AnimationPikachuComponent],
  exports: [AnimationPikachuComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
