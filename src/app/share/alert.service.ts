import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(text = 'บันทำสำเร็จ') {
    return Swal.fire({
      title: text,
      // text: "You click ed the button!",
      icon: "success"
    });
  }

  error(text = 'เกิดข้อผิดพลาด') {
    return Swal.fire({
      title: "Error",
      text: text,
      icon: "error"
    });
  }

  confirm(title = 'คุณต้องการยืนยัน ใช่หรือไม่ ?') {
    return Swal.fire({
      title: title,
      allowOutsideClick: false,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    });
  }
}
