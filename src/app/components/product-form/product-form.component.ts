import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  product!: Product;
  @Input() productToEdit!: Product;
  @Input() buttonLabel!: string;
  @Output() formSubmitted: EventEmitter<Product>;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Product>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitProductForm(): void {
    this.formSubmitted.emit(this.product);
  }

  private initForm(): void {
    this.product = this.productToEdit
      ? this.productToEdit
      : new Product(0, '', false);

    // un formulaire est un groupe dans lequel on a des controles
    // un controle = un champs du form
    this.form = this.fb.group({
      // null = valeur du champs par défaut
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      status: [null],
    });
  }
}
