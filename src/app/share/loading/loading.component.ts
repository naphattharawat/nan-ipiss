import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
  modal: any;
  ngOnDestroy(): void {
    this.modal.close();
  }

  ngOnInit(): void {
    this.modal = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timerProgressBar: true,
      didOpen: (toast) => {
        Swal.showLoading();
      }
    });
    this.modal.fire({
      // icon: "success",
      title: "กำลังประมวลผล..."
    });

  }


}
