import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  public Title = "欢迎你,用户";
  id = "13548193961";
  msg = "我是一个新闻组件的消息";

  constructor() {

  }

  ngOnInit(): void {
  }

}
