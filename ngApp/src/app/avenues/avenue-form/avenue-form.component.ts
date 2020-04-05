import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { AvenueService } from 'src/app/services/avenue.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Avenues } from 'src/app/models/avenues';

@Component({
  selector: 'app-avenue-form',
  templateUrl: './avenue-form.component.html',
  styleUrls: ['./avenue-form.component.css']
})
export class AvenueFormComponent implements OnInit {

  public id: string;

  constructor(
    private _service: AvenueService,
    private _router: Router,
    private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.getAvenue()
  }


  public formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required])
  })
  public avenueInfo: Avenues
  public onSubmit() {
    console.log(this.formData.value)
    if (!this.id) {
      this._service.saveAvenue(this.formData.value).subscribe(response => {
        this._router.navigate(['/avenues'])
      })
    } else {
      this.formData.addControl('_id', new FormControl(this.id))
      this._service.updateAvenue(this.formData.value).subscribe(response => {
        this._router.navigate(['/avenues'])
      })
    }
  }

  public getAvenue() {
    if (this.id) {
      this._service.getAvenue(this.id)
        .subscribe(res => {
          const data = res[0] as Avenues
          this.formData.setValue({ name: data.name, location: data.location })
        })
    }
  }

}
