import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { TitleStrategy } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  
 // url: string = environment.apiBaseUrl + '/PaymentDetail'
 url = "https://my.api.mockaroo.com/paymentdetails.json?key=3e891790"
  list: PaymentDetail[] = [] 
  formData : PaymentDetail = new PaymentDetail()
  constructor(private http:HttpClient) { }

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as PaymentDetail[]
        },
        error: err => { console.log(err) }
      })
  }

  postPaymentDetail(){
    const url = "https://my.api.mockaroo.com/pay.json?key=13e58640&__method=POST";
    return this.http.post(url,this.formData)
  }

  resetForm(form: NgForm){
    form.form.reset()
    this.formData = new PaymentDetail()
  }
}
