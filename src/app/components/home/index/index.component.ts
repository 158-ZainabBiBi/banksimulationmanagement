import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OnFailService } from 'src/app/services/on-fail.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private toastrservice: ToastrService,
    private onfailservice: OnFailService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  showcontact() {
    this.router.navigate(["/home/customers"], {});
  }

  showabout() {
    this.router.navigate(["/home/tellers"], {});
  }

  showservices() {
    this.router.navigate(["/home/advisors"], {});
  }

}
