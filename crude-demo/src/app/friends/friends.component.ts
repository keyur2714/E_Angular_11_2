import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendNames : string[] = ["keyur","denish","vinit"];

  msg :string = '';

  updateIdx : number = -1;

  @ViewChild("friendNm")
  fName : ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.friendNames.push("Ravi");
  }


  addNewFriend(name : string) : void {
    //alert("Hello Radhe Krishna...!"+this.fName.nativeElement.value);

    let idx = this.friendNames.indexOf(name);

    //alert(idx);
    if(name === ''){
      this.msg = "Empty Name is not allowed.";
    }else if(idx === -1){
      this.friendNames.push(name);
      this.msg = name+ " Added Successfully.";
      this.fName.nativeElement.value = '';      
    }else{
      this.msg = name+ " Already Exists.";
    }
      

  }

  update(name : string) : void { 
    if(name === ''){
      this.msg = "Empty Name is not allowed.";
    }else if(name !== ''){
      this.friendNames[this.updateIdx] = name;
      this.updateIdx = -1;
      this.fName.nativeElement.value = '';    
      this.msg = name+ " Updated Successfully.";  
    }        
  }

  edit(idx : number) : void {
    //alert(idx);
    let existingName = this.friendNames[idx];
    this.updateIdx = idx;
    this.fName.nativeElement.value = existingName;
    //alert(existingName);
  }

  delete(idx : number) : void {
    //alert(idx);
    let deletedName = this.friendNames[idx];
    let confirmMsg = confirm("Are you sure want to delete "+deletedName +"?");
    if(confirmMsg){
      this.friendNames.splice(idx,1);
      this.msg = deletedName+ " Deleted Successfully.";  
    }    
  }

}
