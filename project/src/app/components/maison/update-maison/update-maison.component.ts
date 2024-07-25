import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { maison } from 'src/app/models/maison';
import { maisonservice } from 'src/app/services/maison.services';
@Component({
  selector: 'app-update-maison',
  templateUrl: './update-maison.component.html',
  styleUrls: ['./update-maison.component.css']
})
export class UpdateMaisonComponent implements OnInit {
  private sub: any;
  private id: any;
  selected: "louee";
  selected2: "meuble";
  selected3: "etudiant";
  myForm: FormGroup;
  m: maison = new maison(null!, null!, null!, null!, null!, null!, null!, null!, null!);
  constructor(private route: ActivatedRoute, public maisonService: maisonservice,
    public router: Router, public fb: FormBuilder) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    console.log(this.id);
    (async () => {
      await this.getById(this.id)
    })();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      description: ['', [
        Validators.required,
        //Validators.email
        Validators.minLength(2),
        Validators.pattern('')
      ]],

      remise: ['', [
        Validators.required,
        // Validators.email
        Validators.minLength(2),
        Validators.pattern('')
      ]],
      nbchambre: ['', [
        Validators.required,
        Validators.pattern(''),
        Validators.minLength(2)
      ]],

      price: ['', [
        Validators.required,
        //Validators.email
        Validators.minLength(2),
        Validators.pattern('')
      ]],
      etat: ['', Validators.required],
      ismeuble: ['', Validators.required],
      type: ['', Validators.required],








    })
    this.myForm.valueChanges.subscribe(console.log);
  }
  async getById(i: number): Promise<maison> {
    return new Promise((resolve, reject) => {
      this.maisonService.getById(i).subscribe((res: any) => {
        this.m = res;
        resolve(this.m);
      }, (error => {
        alert("error");
        reject("error on get maison");
      })
      );
    });
  }
  update() {
    this.maisonService.update(this.m).subscribe((res: any) => {
      console.log("hhhhh", res)
     // this.router.navigate(['/listeMaison']);
    })
  }

}
