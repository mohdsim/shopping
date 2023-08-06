import { Component } from '@angular/core';
//import { Camera  } from '@awesome-cordova-plugins/camera/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  imgurl:any
  public appPages = [
    { title: 'Home', url:''},
    { title: 'Important Supplies', url:'' },
    { title: 'View All catogaries', url: 'view-all-catogaries',  },
    { title: 'Your Requirement', url:'post-requirement', icon:'' },
    { title: 'Message', url:'message', icon:'' },
    { title: 'My Orders', url:'myorders', icon:'' },
    { title: 'Your Favorites', url:'favorites', icon:'' },
    { title: 'Ship With me', url:'shipping', icon:'' },
    { title: 'Shopping', url:'shopping', icon:'bag-handle-outline' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    //private camera:Camera
    ) {}
 
 async getCamera(){
    // this.camera.getPicture({
    //   sourceType:this.camera.PictureSourceType.CAMERA,
    //   destinationType:this.camera.DestinationType.FILE_URI
    // }).then((res)=>
    // this.imgurl=res
    // )
    // .catch((error)=>console.log(error))
    const image = await Camera.getPhoto({
      quality: 90,
      source:CameraSource.Prompt,
      width:600,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  }

  getGallery(){
    // this.camera.getPicture({
    //   sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    //   destinationType:this.camera.DestinationType.DATA_URL
    // }).then((res)=>
    // this.imgurl=res
    // )
    // .catch((error)=>console.log("Checked Error --->",error))

  }
}
