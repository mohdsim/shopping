import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  bottomTabContant=[
    {
      tabName:'a',iconName:'home-outline',displayName:'Home', navLink:''
    },
    {
      tabName:'a',iconName:'chatbox-outline',displayName:'Message' ,navLink:''
    },
    {
      tabName:'a',iconName:'document-text-outline',displayName:'Post', navLink:''
    },
    {
      tabName:'a',iconName:'cloud-upload-outline',displayName:'Pay Now', navLink:''
    },
    {
      tabName:'a',iconName:'search-outline',displayName:'Search', navLink:''
    }
  ]
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
