import { Component } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import {NgForm } from "@angular/forms"
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {

  constructor(public service: PaymentDetailService) {
    
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail()
    .subscribe({
      next:res =>{
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form)
      },
      error:err => {console.log(err)}
    })
  }

}
