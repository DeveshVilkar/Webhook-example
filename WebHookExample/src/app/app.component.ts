import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebhookserviceService } from './services/webhookservice.service';
import { DataModel } from './model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  webhookform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private webhookservice: WebhookserviceService
  ) {
    this.webhookform = this.fb.group({
      url: [''],
      secretkey: [''],
      commit: [false],
      push: [false],
      merge: [false],
    });
  }
  ngOnInit(): void {}
  
  saveForm() {
    console.log( this.webhookform.value)
    this.webhookservice
      .saveData({
        url: this.webhookform.value.url,
        secretkey: this.webhookform.value.secretkey,
        commit: this.webhookform.value.commit,
        push: this.webhookform.value.push,
        merge: this.webhookform.value.merge,
      })
      .subscribe((_) => {
        console.log('saved to db');
      });
  }
  pressCommit(){
     const type="commit";
     const data:DataModel={
        eventType:type,
        initiator:'devesh'
     }
     this.webhookservice.emitEvent({type:type,data:data}).subscribe(_=>{
      console.log("done")
     })
  }

  pressPush(){
    const type="push";
    const data:DataModel={
      eventType:type,
      initiator: 'devesh'
   }
   this.webhookservice.emitEvent({type:type,data:data}).subscribe(_=>{
    console.log("done")
   })
  }

  pressMerge(){
    const type="merge";
    const data:DataModel={
      eventType:type,
      initiator:'devesh'
   }
   this.webhookservice.emitEvent({type:type,data:data}).subscribe(_=>{
    console.log("done")
   })
  }
}
