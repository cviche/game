import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  modalForm !: FormGroup;
  constructor(private fb : FormBuilder, private boardService : BoardService) { }

  ngOnInit(): void {
    this.modalForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(1)]],
      agree: [false, [Validators.required, Validators.requiredTrue]]
    })
  }

  submitForm() {
    this.boardService.startGame(this.modalForm.value.name);
  }

}
