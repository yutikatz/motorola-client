import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsHttpService } from 'api';
import { NEVER, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { control, Details, IAddressee } from 'types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  colors: string[] = [];
  fonts: string[] = [];
  controls: control[] = [];
  senderId = 0;
  formGroup: FormGroup = null;
  addressee$: Observable<IAddressee[]> = NEVER;
  addresseeList = new FormArray([]);
  constructor(
    private formBuilder: FormBuilder,
    private detailsService: DetailsHttpService
  ) { }

  ngOnInit() {
    this.colors = ['red', 'blue', 'gold', 'pink', 'green', 'black', 'white'];
    this.fonts = ['Ariel', 'Calibri', 'Guttman Yad'];

    this.controls = [{ type: 'string', name: 'firstName', placeholder: 'שם' },
    { type: 'string', name: 'lastName', placeholder: 'שם משפחה' },
    { type: 'text', name: 'address', placeholder: 'כתובת' },
    { type: 'email', name: 'email', placeholder: 'אימייל' },
    { type: 'text', name: 'title', placeholder: 'כותרת' },
    { type: 'text', name: 'text', placeholder: 'טקסט' },
    { type: 'number', name: 'width', placeholder: 'רוחב' },
    { type: 'number', name: 'height', placeholder: 'גובה' },
    { type: 'select', name: 'fontColor', placeholder: 'צבע אות', options: this.colors },
    { type: 'select', name: 'background', placeholder: 'צבע רקע', options: this.colors },
    { type: 'select', name: 'border', placeholder: 'צבע מסגרת', options: this.colors },
    { type: 'select', name: 'font', placeholder: 'פונט', options: this.fonts }
    ];
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.email],
      title: ['', Validators.required],
      text: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      fontColor: ['', Validators.required],
      background: ['', Validators.required],
      border: ['', Validators.required],
      font: ['', Validators.required],
      addressee: this.addresseeList
    });
    this.addresseeList.insert(0, new FormControl(''));

    this.initDetails();
    this.addressee$ = this.detailsService.getAddressee$();
  }

  initDetails() {
    this.detailsService.getDetails$().pipe(
      tap(result => this.senderId = result && result.length ? 1 : 0),
      tap(result => this.initFormValue(result && result.length ? result[0] : null)),
    ).subscribe();
  }

  initFormValue(details: Details | null) {
    if (!details) {
      return;
    }
    Object.keys(details).forEach(
      key => {

        if (key !== 'SenderId') {
          const realKey = this.getRealKey(key);
          this.formGroup.get(realKey).setValue(details[key]);
        }
      }
    )
  }

  getRealKey(key): string {
    return key[0].toLowerCase() + key.substr(1);
  }

  save() {

    this.detailsService.addOrUpdateDetails$(this.senderId, this.formGroup.value).subscribe();
    this.addresseeList.controls.forEach(control => {
      this.detailsService.addAddressee$(control.value).subscribe();
    });
    this.addresseeList = new FormArray([]);
  }


  removeAddressee(index: number) {
    this.addresseeList.removeAt(index);
  }

  addAddressee() {
    this.addresseeList.push(new FormControl(''));

  }

}
