import { Component, inject, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
// import { withComponentInputBinding } from '@angular/router';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>Note Details</h2>

    ID: {{ noteId  }}
  `,
})
export default class NoteDetailsPageComponent {
  @Input() noteId: string;
  // private readonly route = inject(ActivatedRoute);

  // readonly noteId$ = this.route.paramMap.pipe(
    // map((params) => params.get('noteId'))
  // );
}