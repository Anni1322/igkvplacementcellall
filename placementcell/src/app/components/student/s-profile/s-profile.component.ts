import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrls: ['./s-profile.component.scss']
})



export class SProfileComponent implements OnInit{


  studentdetails:any;
  studentservice: any;

  //skills: any;
 
  //experience: any;


 
  // displayedColumns: string[] = [ 'Admission_Year_Id','College_Name','Degree_Programme_Id','Marksheet_Url'];
  // dataSource! :  MatTableDataSource<any>;
  // datacontainer: any;

  constructor(
    private auth:AuthService,
    private router:Router,
    private ds:StudentService,
    private route: ActivatedRoute
    ){}



  user: any = {}; // Initialize user object here
  //studentId:any;

  ngOnInit(): void {
      // Retrieve user data from localStorage
      const userData = localStorage.getItem('currentUser');
      console.log("profiledata"+ userData)

      // Check if user data exists
      if (userData) {
          // Parse user data from JSON and assign it to the user variable
          this.user = JSON.parse(userData);

          console.log("idddd"+ this.user.eid)
          // id pass 
          // this.getdata(this.user.eid);
          //this.getskill(this.user.eid) 

          //this.getacademic(this.user.eid)

          // this.getexperience(this.user.eid)
      }

      // get id form param
      // this.studentId = this.route.snapshot.paramMap.get('id')!;
      // console.log("from router",this.studentId);

      

      this.ds.getBasicDetails(this.user.eid).subscribe(
        (response) => {
          this.studentdetails = response;
          console.log('studentdetails details:', this.studentdetails);
          })

   }
  //   getacademic(eid: any) {
  //    console.log('academic id', eid)
  //   this.ds.getacademicid(eid).subscribe(
  //     (response:[]) => {
  //       this.academic = response;
  //       console.log('academic details', this.academic);
  //     });
  //   }

//   datacontainer1=[
//     {'Admission_Year_Id':'2024','College_Name':'kvk','Degree_Programme_Type_Id':'3','Marksheet_Url':'xyz'}
//   ]


//for academic details 
  // getacademic(eid: any) {
  //   console.log("academic id", eid);
  //   // this.ds.getacademicid(eid).subscribe(data => {
    //   console.log('academic details:', data);
    //   this.datacontainer = data
    //   console.log('kh',this.datacontainer);
      
//       this.dataSource = new MatTableDataSource(data)
//       // const academic_data = data;
//       // if (academic_data) {
//       //   this.dataSource = new MatTableDataSource(academic_data);
//       //   console.log('2', this.dataSource);
//       // }
//     });
//  }

  // async getacademic(eid: any) {
  //   console.log("academic id", eid);
  //   try {
  //     const data = await this.ds.getacademicid(eid).toPromise();
  //     console.log('academic details:', data);
  //     const academic_data = data;
  //     if (academic_data) {
  //       this.dataSource = new MatTableDataSource(academic_data);
  //       console.log('2', this.dataSource);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching academic details:', error);
  //     // Additional error handling can be done here if needed
  //   }
  // }
  


//for skills details
  // getskill(eid:any){
  //   console.log( 'skill id', eid)
  //    this.ds.getskillid(eid).subscribe(
  //     (response) => {
  //       this.skills = response;
  //       console.log('skills details:', this.skills);

  //     }
  //   )
  // }

  // async getskill(eid: any) {
  //   console.log('skill id', eid);
  //   try {
  //     const response = await this.ds.getskillid(eid).toPromise();
  //     this.skills = response;
  //     console.log('skills details:', this.skills);
  //   } catch (error) {
  //     console.error('Error fetching skill details:', error);
  //     // You can handle the error further here if needed
  //   }
  // }
  
//for experience details
  // getexperience(eid:any){
  //   console.log( 'experience id', eid);
  //   this.ds.getexperienceid(eid).subscribe(
  //     (response) => {
  //       this.experience = response;
  //       console.log('experience details:', this.experience);

  //     }
  //   )
  // }

  // async getexperience(eid: any) {
  //   try {
  //     console.log('experience id', eid);
  //     const response = await this.ds.getexperienceid(eid).toPromise();
  //     this.experience = response;
  //     console.log('experience details:', this.experience);
  //   } catch (error) {
  //     console.error('Error fetching experience details:', error);
  //   }
  // }
  
 
  //
  profiledata:any;
  
  getdata(eid: any) {
    console.log('EID:', eid);
    this.ds.getProfiledata(eid).subscribe(
      (response) => {
        console.log('Raw Response:', response);
  
        this.profiledata = response;
        console.log('Profile Data:', this.profiledata);
  
        if (this.profiledata) {
          console.log('eid:', this.profiledata.UE_ID);
          // console.log('username:', this.profiledata.username);
        } else {
          console.log('No profile data received.');
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  

getid(){
  const userid = this.user;
  // console.log("userid"+userid.id);
  // console.log("userid"+userid.username);
  this.auth.login(userid.id).subscribe(
    (response) => { 
      if (response) {
        const id = response.id;
        const username = response.username;
        alert("Login successful");
        this.router.navigate(['/student/s-profile-edit', id]);
      } else {
        alert("wrong password");
        console.log('Login failed. Invalid credentials.');
      }
    }, (error)=>{
    
    console.log("error",error)
});

}
}

