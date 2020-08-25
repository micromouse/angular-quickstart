import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public peopleInfo: any = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    hobby: [{
      title: '吃饭',
      checked: false
    }, {
      title: '睡觉',
      checked: false
    }, {
      title: '改bug',
      checked: true
    }],
    mark: '描述'
  };

  constructor() {
    // nothing
  }

  ngOnInit(): void {
    // nothing
  }

  // 表单提交
  doSubmit() {
    console.log(this.peopleInfo);
  }
}
