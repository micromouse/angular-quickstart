import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  public Title = '欢迎你,用户';
  id = '13548193961';
  msg = '我是一个新闻组件的消息';
  users = [{ name: '张三', age: 20 }, { name: '李四', age: 30 }];
  score = 2;
  public today = new Date();

  // 构造函数
  constructor() {
    // nothing
  }

  // 初始化
  ngOnInit(): void {
    // nothing
  }

}
