import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationPikachuFriendComponent } from './animation-pikachu-friend/animation-pikachu-friend.component';

@NgModule({
  declarations: [AnimationPikachuFriendComponent],
  exports: [AnimationPikachuFriendComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
